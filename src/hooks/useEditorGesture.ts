import { useCallback, useEffect, useRef } from 'react';

import { useStore } from '../stores/useStore';
import { updateEditorCssVars } from '../utilities/dom';
import { calculateLimits } from '../utilities/geometry';

import type { PointerEvent, RefObject, WheelEvent } from 'react';
import type { EditorState } from '../app/types';

export const useEditorGesture = (containerRef: RefObject<HTMLDivElement | null>, ar: number, minZoom: number, maxZoom: number) => {
  const setEditorState = useStore((state) => state.setEditorState);

  const isDragging = useRef(false);
  const dragStart = useRef({ mouseX: 0, mouseY: 0, stateX: 0, stateY: 0, cos: 1, sin: 0, invScale: 0 });
  const frameRef = useRef<number>(0);
  const pointerPos = useRef({ x: 0, y: 0 });
  const localStateRef = useRef<EditorState>({ zoom: 1, rotation: 0, x: 0, y: 0 });

  const updateStateClamped = useCallback(
    (next: EditorState, metaAr: number, commit: boolean = true) => {
      const { xLim, yLim } = calculateLimits(metaAr, next.zoom);
      const { x, y } = next;

      const updated: EditorState = {
        ...next,
        x: Math.max(-xLim, Math.min(xLim, x)),
        y: Math.max(-yLim, Math.min(yLim, y)),
      };

      localStateRef.current = updated;
      updateEditorCssVars(updated);

      if (commit) {
        setEditorState(updated);
      }
    },
    [setEditorState],
  );

  const performDragUpdate = useCallback(() => {
    if (!isDragging.current) return;

    const { mouseX, mouseY, stateX, stateY, cos, sin, invScale } = dragStart.current;
    const { x: px, y: py } = pointerPos.current;

    const dxScreen = px - mouseX;
    const dyScreen = py - mouseY;

    updateStateClamped(
      {
        ...localStateRef.current,
        x: stateX + (dxScreen * cos - dyScreen * sin) * invScale,
        y: stateY + (dxScreen * sin + dyScreen * cos) * invScale,
      },
      ar,
      false,
    );

    frameRef.current = requestAnimationFrame(performDragUpdate);
  }, [ar, updateStateClamped]);

  const handlePointerDown = useCallback(
    (e: PointerEvent) => {
      const container = containerRef.current;
      if (!container) return;

      const state = useStore.getState().editorState;
      localStateRef.current = state;

      const rad = (state.rotation * Math.PI) / -180;
      const size = container.offsetWidth || 1;

      isDragging.current = true;
      (e.target as Element).setPointerCapture(e.pointerId);

      dragStart.current = {
        mouseX: e.clientX,
        mouseY: e.clientY,
        stateX: state.x,
        stateY: state.y,
        cos: Math.cos(rad),
        sin: Math.sin(rad),
        invScale: 1 / (state.zoom * size),
      };

      pointerPos.current.x = e.clientX;
      pointerPos.current.y = e.clientY;
      cancelAnimationFrame(frameRef.current);
      frameRef.current = requestAnimationFrame(performDragUpdate);
    },
    [containerRef, performDragUpdate],
  );

  const handlePointerMove = useCallback((e: PointerEvent) => {
    if (!isDragging.current) return;
    pointerPos.current.x = e.clientX;
    pointerPos.current.y = e.clientY;
  }, []);

  const handlePointerUp = useCallback(
    (e: PointerEvent) => {
      if (!isDragging.current) return;
      isDragging.current = false;
      cancelAnimationFrame(frameRef.current);
      (e.target as Element).releasePointerCapture(e.pointerId);

      // Commit final state to store on drag end
      setEditorState(localStateRef.current);
    },
    [setEditorState],
  );

  const handleWheel = useCallback(
    (e: WheelEvent) => {
      const currentState = useStore.getState().editorState;
      const sensitivity = 0.001 * (currentState.zoom / minZoom);
      const newZoom = Math.min(Math.max(currentState.zoom - e.deltaY * sensitivity, minZoom), maxZoom);
      updateStateClamped({ ...currentState, zoom: newZoom }, ar);
    },
    [ar, minZoom, maxZoom, updateStateClamped],
  );

  useEffect(() => {
    return () => cancelAnimationFrame(frameRef.current);
  }, []);

  return {
    handlePointerDown,
    handlePointerMove,
    handlePointerUp,
    handleWheel,
    updateStateClamped,
  };
};
