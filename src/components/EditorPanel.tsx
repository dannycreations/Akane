import { memo, useCallback, useEffect, useRef } from 'react';
import { LuDownload, LuRotateCw, LuUpload, LuX, LuZoomIn } from 'react-icons/lu';

import { getPlatformMetadata, Platform } from '../app/platforms';
import { useEditorGesture } from '../hooks/useEditorGesture';
import { useStore } from '../stores/useStore';
import { saveImage } from '../utilities/image';
import { Slider } from './EditorSlider';
import { EditorImage } from './shared/Image';

import type { ChangeEvent } from 'react';

const GRID_LINE_CLASS = 'pointer-events-none absolute bg-white/30 shadow-[0_0_2px_rgba(0,0,0,0.2)]';

const GridOverlay = memo(({ isRoundedSquare }: { readonly isRoundedSquare: boolean }) => {
  const radiusClass = isRoundedSquare ? 'rounded-3xl' : 'rounded-full';

  return (
    <div className={`pointer-events-none absolute inset-0 z-10 select-none overflow-hidden transition-all duration-300 ease-in-out ${radiusClass}`}>
      <div
        className={`absolute inset-0 border border-white/20 shadow-[inset_0_0_20px_rgba(0,0,0,0.5)] transition-all duration-300 ease-in-out ${radiusClass}`}
      />
      <div className={`${GRID_LINE_CLASS} bottom-0 left-1/3 top-0 w-px`} />
      <div className={`${GRID_LINE_CLASS} bottom-0 left-2/3 top-0 w-px`} />
      <div className={`${GRID_LINE_CLASS} left-0 right-0 top-1/3 h-px`} />
      <div className={`${GRID_LINE_CLASS} left-0 right-0 top-2/3 h-px`} />
    </div>
  );
});

const ZoomControl = memo(
  ({
    minZoom,
    maxZoom,
    disabled,
    onChange,
  }: {
    readonly minZoom: number;
    readonly maxZoom: number;
    readonly disabled: boolean;
    readonly onChange: (val: number) => void;
  }) => {
    const zoom = useStore((state) => state.editorState.zoom);

    return (
      <div className="flex items-center gap-3">
        <LuZoomIn size={16} className={`flex-shrink-0 text-indigo-400 ${disabled ? 'opacity-50' : ''}`} />
        <Slider label="ZOOM" min={0} max={maxZoom - minZoom} step={0.01} value={!disabled ? Math.max(0, zoom - minZoom) : 0} onChange={onChange} />
      </div>
    );
  },
);

const RotationControl = memo(({ disabled, onChange }: { readonly disabled: boolean; readonly onChange: (val: number) => void }) => {
  const rotation = useStore((state) => state.editorState.rotation);

  return (
    <div className="flex items-center gap-3">
      <LuRotateCw size={16} className={`flex-shrink-0 text-indigo-400 ${disabled ? 'opacity-50' : ''}`} />
      <Slider label="ROTATE" min={-180} max={180} value={rotation} onChange={onChange} />
    </div>
  );
});

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
    return (
      <div className="z-20 mt-2 shrink-0 rounded-xl border border-slate-700/50 bg-slate-800/80 p-3 backdrop-blur-md">
        <div className="grid grid-cols-1 gap-2 sm:gap-4">
          <ZoomControl minZoom={minZoom} maxZoom={maxZoom} disabled={disabled} onChange={onZoomChange} />
          <RotationControl disabled={disabled} onChange={onRotationChange} />
        </div>
      </div>
    );
  },
);

export const EditorPanel = memo(() => {
  const image = useStore((state) => state.image);
  const platform = useStore((state) => state.platform);
  const setImage = useStore((state) => state.setImage);
  const setEditorState = useStore((state) => state.setEditorState);
  const setImageWithEditorState = useStore((state) => state.setImageWithEditorState);

  const fileInputRef = useRef<HTMLInputElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const currentObjectUrlRef = useRef<string | null>(null);

  const isRoundedSquare = platform === Platform.Slack || platform === Platform.Snapchat;
  const ar = image ? image.width / image.height : 1;
  const coverZoom = Math.max(ar, 1 / ar);
  const minZoom = image ? coverZoom : 0.0;
  const maxZoom = Math.max(5.0, coverZoom * 3);

  const { handlePointerDown, handlePointerMove, handlePointerUp, handleWheel, updateStateClamped } = useEditorGesture(
    containerRef,
    ar,
    minZoom,
    maxZoom,
  );

  useEffect(() => {
    return () => {
      if (currentObjectUrlRef.current) {
        URL.revokeObjectURL(currentObjectUrlRef.current);
      }
    };
  }, []);

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

          setImageWithEditorState(
            { url, name: file.name, width: naturalWidth, height: naturalHeight },
            {
              zoom: initialZoom,
              rotation: 0,
              x: 0,
              y: 0,
            },
          );
        };
        img.src = url;

        e.target.value = '';
      }
    },
    [setImageWithEditorState],
  );

  const handleZoomSliderChange = useCallback(
    (v: number) => {
      if (!image) return;
      const currentState = useStore.getState().editorState;
      updateStateClamped({ ...currentState, zoom: minZoom + v }, ar);
    },
    [image, ar, minZoom, updateStateClamped],
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
    'flex cursor-pointer items-center gap-2 whitespace-nowrap rounded-lg bg-slate-900/50 px-2 py-1 text-xs font-medium transition-colors disabled:cursor-not-allowed disabled:opacity-30';

  return (
    <div className="relative flex h-full w-full flex-col select-none border-r border-slate-800 bg-slate-900 p-2">
      <div className="z-20 mb-1 flex shrink-0 items-center justify-between">
        <button onClick={() => setImage(null)} disabled={!image} className={`${buttonBaseClass} text-slate-400 hover:text-red-400`}>
          <LuX size={16} />
          <span className="sm:inline">CLOSE</span>
        </button>
        <button onClick={handleDownload} disabled={!image} className={`${buttonBaseClass} text-slate-400 hover:text-emerald-400`}>
          <LuDownload size={16} />
          <span className="sm:inline">SAVE</span>
        </button>
      </div>

      <div className="relative flex flex-1 w-full min-h-0 items-center justify-center overflow-hidden p-2">
        {!image ? (
          <div
            className="group flex aspect-square w-full max-w-[min(100%,320px)] cursor-pointer flex-col items-center justify-center rounded-3xl border-2 border-dashed border-slate-700 transition-all hover:border-indigo-500 hover:bg-slate-800/30"
            onClick={() => fileInputRef.current?.click()}
          >
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-slate-800 transition-transform group-hover:scale-110">
              <LuUpload className="text-indigo-400" size={24} />
            </div>
            <p className="px-4 text-center text-sm font-medium text-slate-300">Upload Photo</p>
            <p className="mt-2 text-xs text-slate-500">Supports JPG, PNG</p>
            <input ref={fileInputRef} type="file" accept="image/*" className="hidden" onChange={handleFileChange} />
          </div>
        ) : (
          <div className="relative flex h-auto max-h-full w-auto max-w-full aspect-square items-center justify-center">
            <img
              src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwMCIgaGVpZ2h0PSIxMDAwIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjwvc3ZnPg=="
              className="pointer-events-none block h-auto max-h-full w-auto max-w-full min-h-0 min-w-0 select-none object-contain opacity-0"
              draggable={false}
            />

            <div className="absolute inset-0 flex h-full w-full items-center justify-center">
              <div
                ref={containerRef}
                className={`relative h-full w-full touch-none cursor-move overflow-hidden bg-slate-950 shadow-2xl ring-4 ring-indigo-500/20 transition-all duration-300 ease-in-out ${
                  isRoundedSquare ? 'rounded-3xl' : 'rounded-full'
                }`}
                onPointerDown={handlePointerDown}
                onPointerMove={handlePointerMove}
                onPointerUp={handlePointerUp}
                onPointerLeave={handlePointerUp}
                onWheel={handleWheel}
              >
                <EditorImage image={image} />
              </div>

              <GridOverlay isRoundedSquare={isRoundedSquare} />

              <div className="pointer-events-none absolute bottom-4 left-0 right-0 z-20 flex justify-center">
                <span className="rounded-full border border-white/10 bg-black/50 px-3 py-1 text-[10px] font-medium uppercase tracking-widest text-white/70 shadow-lg backdrop-blur-md">
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
});
