import { memo, useCallback, useEffect, useLayoutEffect, useRef, useState } from 'react';
import { LuDownload, LuRotateCw, LuUpload, LuX, LuZoomIn } from 'react-icons/lu';

import { getPlatformMetadata, Platform } from '../app/platforms';
import { useStore } from '../stores/useStore';
import { calculateLimits, rotateDelta } from '../utilities/geometry';
import { saveImage } from '../utilities/image';
import { Slider } from './EditorSlider';

import type { ChangeEvent, PointerEvent, SyntheticEvent, WheelEvent } from 'react';
import type { EditorState, ImageSource } from '../app/types';

const GRID_LINE_CLASS = 'absolute bg-white/30 pointer-events-none shadow-[0_0_2px_rgba(0,0,0,0.2)]';

const GridOverlay = memo(({ isRoundedSquare }: { readonly isRoundedSquare: boolean }) => {
  const style = { borderRadius: isRoundedSquare ? '1.5rem' : '50%' };

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden select-none z-10 transition-all duration-300 ease-in-out" style={style}>
      <div
        className="absolute inset-0 border border-white/20 shadow-[inset_0_0_20px_rgba(0,0,0,0.5)] transition-all duration-300 ease-in-out"
        style={style}
      />
      <div className={`${GRID_LINE_CLASS} left-1/3 top-0 bottom-0 w-px`} />
      <div className={`${GRID_LINE_CLASS} left-2/3 top-0 bottom-0 w-px`} />
      <div className={`${GRID_LINE_CLASS} top-1/3 left-0 right-0 h-px`} />
      <div className={`${GRID_LINE_CLASS} top-2/3 left-0 right-0 h-px`} />
    </div>
  );
});

const EditorCanvas = memo(
  ({ image, onImageLoad }: { readonly image: ImageSource; readonly onImageLoad: (e: SyntheticEvent<HTMLImageElement>) => void }) => {
    const transformRef = useRef<HTMLDivElement>(null);

    useLayoutEffect(() => {
      const updateTransform = (state: ReturnType<typeof useStore.getState>) => {
        if (transformRef.current) {
          const { rotation, zoom, x, y } = state.editorState;
          transformRef.current.style.transform = `rotate(${rotation}deg) scale(${zoom}) translate(${x * 100}%, ${y * 100}%)`;
        }
      };

      updateTransform(useStore.getState());

      return useStore.subscribe((state, prevState) => {
        if (state.editorState !== prevState.editorState) {
          updateTransform(state);
        }
      });
    }, [image]);

    return (
      <div ref={transformRef} className="w-full h-full origin-center will-change-transform">
        <img
          src={image.url}
          alt="Preview"
          className="w-full h-full object-contain pointer-events-none select-none"
          draggable={false}
          onLoad={onImageLoad}
        />
      </div>
    );
  },
);

const EditorControls = memo(
  ({
    minZoom,
    maxZoom,
    onZoomChange,
    onRotationChange,
    disabled,
  }: {
    readonly minZoom: number;
    readonly maxZoom: number;
    readonly onZoomChange: (val: number) => void;
    readonly onRotationChange: (val: number) => void;
    readonly disabled: boolean;
  }) => {
    const zoom = useStore((state) => state.editorState.zoom);
    const rotation = useStore((state) => state.editorState.rotation);

    return (
      <div className="mt-2 shrink-0 bg-slate-800/80 p-3 rounded-xl border border-slate-700/50 backdrop-blur-md z-20">
        <div className="grid grid-cols-1 gap-2 sm:gap-4">
          <div className="flex items-center gap-3">
            <LuZoomIn size={16} className={`text-indigo-400 flex-shrink-0 ${disabled ? 'opacity-50' : ''}`} />
            <Slider
              label="ZOOM"
              min={0}
              max={maxZoom - minZoom}
              step={0.01}
              value={!disabled ? Math.max(0, zoom - minZoom) : 0}
              onChange={onZoomChange}
            />
          </div>
          <div className="flex items-center gap-3">
            <LuRotateCw size={16} className={`text-indigo-400 flex-shrink-0 ${disabled ? 'opacity-50' : ''}`} />
            <Slider label="ROTATE" min={-180} max={180} value={rotation} onChange={onRotationChange} />
          </div>
        </div>
      </div>
    );
  },
);

export const EditorPanel = () => {
  const image = useStore((state) => state.image);
  const platform = useStore((state) => state.platform);
  const setImage = useStore((state) => state.setImage);
  const setEditorState = useStore((state) => state.setEditorState);

  const fileInputRef = useRef<HTMLInputElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const pendingImageRef = useRef<string | null>(null);
  const currentObjectUrlRef = useRef<string | null>(null);

  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ mouseX: 0, mouseY: 0, stateX: 0, stateY: 0, containerSize: 0 });
  const [imageMeta, setImageMeta] = useState<{ ar: number } | null>(null);
  const [loadedImageId, setLoadedImageId] = useState<string | null>(null);

  const isRoundedSquare = platform === Platform.Slack;
  const ar = imageMeta?.ar ?? 1;
  const coverZoom = Math.max(ar, 1 / ar);
  const minZoom = image ? coverZoom : 0.0;
  const maxZoom = Math.max(5.0, coverZoom * 3);

  useEffect(() => {
    if (image && pendingImageRef.current === image.url) {
      setLoadedImageId(image.url);
      pendingImageRef.current = null;
    }
  }, [image]);

  useEffect(() => {
    return () => {
      if (currentObjectUrlRef.current) {
        URL.revokeObjectURL(currentObjectUrlRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (!image) {
      setImageMeta(null);
      setLoadedImageId(null);
      pendingImageRef.current = null;
    }
  }, [image]);

  const updateStateClamped = useCallback(
    (newState: EditorState, metaAr: number) => {
      const { xLim, yLim } = calculateLimits(metaAr, newState.zoom);
      setEditorState({
        ...newState,
        x: Math.max(-xLim, Math.min(xLim, newState.x)),
        y: Math.max(-yLim, Math.min(yLim, newState.y)),
      });
    },
    [setEditorState],
  );

  const handleFileChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      if (e.target.files && e.target.files[0]) {
        const file = e.target.files[0];

        if (currentObjectUrlRef.current) {
          URL.revokeObjectURL(currentObjectUrlRef.current);
        }

        const url = URL.createObjectURL(file);
        currentObjectUrlRef.current = url;

        const img = new Image();
        img.onload = () => {
          const { naturalWidth, naturalHeight } = img;
          const imgAr = naturalWidth / naturalHeight;
          const initialZoom = Math.max(imgAr, 1 / imgAr);

          setEditorState({
            zoom: initialZoom,
            rotation: 0,
            x: 0,
            y: 0,
          });
          setImage({ url, name: file.name });
        };
        img.src = url;

        e.target.value = '';
      }
    },
    [setImage, setEditorState],
  );

  const handleImageLoad = useCallback(
    (e: SyntheticEvent<HTMLImageElement>) => {
      if (!image) return;
      const { naturalWidth, naturalHeight } = e.currentTarget;
      const computedAr = naturalWidth / naturalHeight;
      setImageMeta({ ar: computedAr });
      const computedCoverZoom = Math.max(computedAr, 1 / computedAr);

      if (loadedImageId !== image.url) {
        const current = useStore.getState().editorState;
        const newState = { ...current, zoom: computedCoverZoom, x: 0, y: 0 };

        if (Math.abs(newState.zoom - current.zoom) > 0.001 || Math.abs(newState.x - current.x) > 0.001 || Math.abs(newState.y - current.y) > 0.001) {
          pendingImageRef.current = image.url;
          setEditorState(newState);
        } else {
          setLoadedImageId(image.url);
        }
      }
    },
    [image, loadedImageId, setEditorState],
  );

  const handlePointerDown = useCallback(
    (e: PointerEvent) => {
      if (!image) return;
      const currentState = useStore.getState().editorState;
      const containerSize = containerRef.current?.offsetWidth ?? 0;

      setIsDragging(true);
      (e.target as Element).setPointerCapture(e.pointerId);
      setDragStart({
        mouseX: e.clientX,
        mouseY: e.clientY,
        stateX: currentState.x,
        stateY: currentState.y,
        containerSize,
      });
    },
    [image],
  );

  const handlePointerMove = useCallback(
    (e: PointerEvent) => {
      const { containerSize } = dragStart;
      if (!isDragging || containerSize === 0) return;
      e.preventDefault();

      const currentState = useStore.getState().editorState;
      const dxScreen = e.clientX - dragStart.mouseX;
      const dyScreen = e.clientY - dragStart.mouseY;
      const { dx: dxLocal, dy: dyLocal } = rotateDelta(dxScreen, dyScreen, currentState.rotation);
      const zoomFactor = currentState.zoom > 0.001 ? currentState.zoom : 0.001;

      if (imageMeta) {
        updateStateClamped(
          {
            ...currentState,
            x: dragStart.stateX + dxLocal / zoomFactor / containerSize,
            y: dragStart.stateY + dyLocal / zoomFactor / containerSize,
          },
          imageMeta.ar,
        );
      }
    },
    [isDragging, dragStart, imageMeta, updateStateClamped],
  );

  const handlePointerUp = useCallback((e: PointerEvent) => {
    setIsDragging(false);
    (e.target as Element).releasePointerCapture(e.pointerId);
  }, []);

  const handleWheel = useCallback(
    (e: WheelEvent) => {
      if (!image || !imageMeta) return;
      const currentState = useStore.getState().editorState;
      const sensitivity = 0.001;
      const newZoom = Math.min(Math.max(currentState.zoom + -e.deltaY * sensitivity, minZoom), maxZoom);
      updateStateClamped({ ...currentState, zoom: newZoom }, imageMeta.ar);
    },
    [image, imageMeta, minZoom, maxZoom, updateStateClamped],
  );

  const handleZoomSliderChange = useCallback(
    (v: number) => {
      if (!imageMeta) return;
      const currentState = useStore.getState().editorState;
      updateStateClamped({ ...currentState, zoom: minZoom + v }, imageMeta.ar);
    },
    [imageMeta, minZoom, updateStateClamped],
  );

  const handleRotationSliderChange = useCallback(
    (v: number) => {
      const currentState = useStore.getState().editorState;
      setEditorState({ ...currentState, rotation: v });
    },
    [setEditorState],
  );

  const handleDownload = useCallback(async () => {
    if (!image) return;
    const currentState = useStore.getState().editorState;
    const { outputSize } = getPlatformMetadata(platform);
    await saveImage(image, currentState, outputSize, platform);
  }, [image, platform]);

  const buttonBaseClass =
    'flex items-center gap-2 transition-colors text-xs font-medium whitespace-nowrap disabled:opacity-30 disabled:cursor-not-allowed bg-slate-900/50 rounded-lg px-2 py-1';

  return (
    <div className="flex flex-col h-full w-full bg-slate-900 border-r border-slate-800 p-2 relative select-none">
      <div className="flex justify-between items-center mb-1 shrink-0 z-20">
        <button onClick={() => setImage(null)} disabled={!image} className={`${buttonBaseClass} text-slate-400 hover:text-red-400`}>
          <LuX size={16} />
          <span className="sm:inline">CLOSE</span>
        </button>
        <button onClick={handleDownload} disabled={!image} className={`${buttonBaseClass} text-slate-400 hover:text-emerald-400`}>
          <LuDownload size={16} />
          <span className="sm:inline">SAVE</span>
        </button>
      </div>

      <div className="flex-1 w-full min-h-0 flex items-center justify-center relative p-2 overflow-hidden">
        {!image ? (
          <div
            className="border-2 border-dashed border-slate-700 rounded-3xl w-full max-w-[min(100%,320px)] aspect-square flex flex-col items-center justify-center cursor-pointer hover:border-indigo-500 hover:bg-slate-800/30 transition-all group"
            onClick={() => fileInputRef.current?.click()}
          >
            <div className="w-12 h-12 bg-slate-800 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <LuUpload className="text-indigo-400" size={24} />
            </div>
            <p className="text-slate-300 font-medium text-center px-4 text-sm">Upload Photo</p>
            <p className="text-slate-500 text-xs mt-2">Supports JPG, PNG</p>
            <input ref={fileInputRef} type="file" accept="image/*" className="hidden" onChange={handleFileChange} />
          </div>
        ) : (
          <div className="relative flex items-center justify-center max-w-full max-h-full aspect-square w-auto h-auto">
            <img
              src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwMCIgaGVpZ2h0PSIxMDAwIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjwvc3ZnPg=="
              className="block max-w-full max-h-full w-auto h-auto opacity-0 pointer-events-none select-none"
              style={{ minWidth: '0', minHeight: '0', objectFit: 'contain' }}
              draggable={false}
              alt=""
            />

            <div className="absolute inset-0 w-full h-full flex items-center justify-center">
              <div
                ref={containerRef}
                className="w-full h-full overflow-hidden bg-slate-950 shadow-2xl relative cursor-move ring-4 ring-indigo-500/20 touch-none transition-all duration-300 ease-in-out"
                style={{ borderRadius: isRoundedSquare ? '1.5rem' : '50%' }}
                onPointerDown={handlePointerDown}
                onPointerMove={handlePointerMove}
                onPointerUp={handlePointerUp}
                onPointerLeave={handlePointerUp}
                onWheel={handleWheel}
              >
                <EditorCanvas image={image} onImageLoad={handleImageLoad} />
              </div>

              <GridOverlay isRoundedSquare={isRoundedSquare} />

              <div className="absolute bottom-4 left-0 right-0 flex justify-center pointer-events-none z-20">
                <span className="bg-black/50 backdrop-blur-md text-white/70 px-3 py-1 rounded-full text-[10px] font-medium tracking-widest uppercase border border-white/10 shadow-lg">
                  Drag to Reposition
                </span>
              </div>
            </div>
          </div>
        )}
      </div>

      <EditorControls
        minZoom={minZoom}
        maxZoom={maxZoom}
        onZoomChange={handleZoomSliderChange}
        onRotationChange={handleRotationSliderChange}
        disabled={!image}
      />
    </div>
  );
};
