import { useCallback, useEffect, useRef } from 'react';

import { useStore } from '../stores/useStore';
import { calculateLimits, rotateDelta } from '../utilities/geometry';

import type { PointerEvent, RefObject, WheelEvent } from 'react';
import type { EditorState } from '../app/types';

export const useEditorGesture = (containerRef: RefObject<HTMLDivElement | null>, ar: number, minZoom: number, maxZoom: number) => {
  const setEditorState = useStore((state) => state.setEditorState);

  const isDragging = useRef(false);
  const dragStart = useRef({ mouseX: 0, mouseY: 0, stateX: 0, stateY: 0, containerSize: 0 });
  const frameRef = useRef<number>(0);
  const latestPointerEvent = useRef<PointerEvent | null>(null);
  const localStateRef = useRef<EditorState>({ zoom: 1, rotation: 0, x: 0, y: 0 });

  const syncToDom = useCallback((s: EditorState) => {
    const root = document.documentElement;
    root.style.setProperty('--crop-rotate', `${s.rotation}deg`);
    root.style.setProperty('--crop-scale', s.zoom.toString());
    root.style.setProperty('--crop-x', `${s.x * 100}%`);
    root.style.setProperty('--crop-y', `${s.y * 100}%`);
  }, []);

  const updateStateClamped = useCallback(
    (newState: EditorState, metaAr: number, commit: boolean = true) => {
      const { xLim, yLim } = calculateLimits(metaAr, newState.zoom);
      const newX = Math.max(-xLim, Math.min(xLim, newState.x));
      const newY = Math.max(-yLim, Math.min(yLim, newState.y));

      const updated = {
        zoom: newState.zoom,
        rotation: newState.rotation,
        x: newX,
        y: newY,
      };

      localStateRef.current = updated;
      syncToDom(updated);

      if (commit) {
        setEditorState(updated);
      }
    },
    [setEditorState, syncToDom],
  );

  const performDragUpdate = useCallback(() => {
    if (!isDragging.current || !latestPointerEvent.current || !containerRef.current) return;

    const e = latestPointerEvent.current;
    const { containerSize, mouseX, mouseY, stateX, stateY } = dragStart.current;

    if (containerSize === 0) return;

    const currentState = localStateRef.current;
    const dxScreen = e.clientX - mouseX;
    const dyScreen = e.clientY - mouseY;
    const { dx: dxLocal, dy: dyLocal } = rotateDelta(dxScreen, dyScreen, currentState.rotation);
    const zoomFactor = Math.max(currentState.zoom, 0.001);

    updateStateClamped(
      {
        ...currentState,
        x: stateX + dxLocal / zoomFactor / containerSize,
        y: stateY + dyLocal / zoomFactor / containerSize,
      },
      ar,
      false, // Don't commit to store every frame during drag
    );

    frameRef.current = requestAnimationFrame(performDragUpdate);
  }, [ar, containerRef, updateStateClamped]);

  const handlePointerDown = useCallback(
    (e: PointerEvent) => {
      if (!containerRef.current) return;
      const currentState = useStore.getState().editorState;
      localStateRef.current = currentState;
      const containerSize = containerRef.current.offsetWidth ?? 0;

      isDragging.current = true;
      (e.target as Element).setPointerCapture(e.pointerId);

      dragStart.current = {
        mouseX: e.clientX,
        mouseY: e.clientY,
        stateX: currentState.x,
        stateY: currentState.y,
        containerSize,
      };

      latestPointerEvent.current = e;
      cancelAnimationFrame(frameRef.current);
      frameRef.current = requestAnimationFrame(performDragUpdate);
    },
    [containerRef, performDragUpdate],
  );

  const handlePointerMove = useCallback((e: PointerEvent) => {
    if (!isDragging.current) return;
    e.preventDefault();
    latestPointerEvent.current = e;
  }, []);

  const handlePointerUp = useCallback(
    (e: PointerEvent) => {
      if (!isDragging.current) return;
      isDragging.current = false;
      latestPointerEvent.current = null;
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
      const sensitivity = 0.001;
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
