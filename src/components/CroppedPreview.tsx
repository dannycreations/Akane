import { memo, useLayoutEffect, useMemo, useRef } from 'react';

import { useStore } from '../stores/useStore';

interface CroppedPreviewProps {
  readonly size?: number | string;
  readonly className?: string;
}

const DEFAULT_STYLE = { width: '100%', height: '100%' };

export const CroppedPreview = memo(({ size, className }: CroppedPreviewProps) => {
  const image = useStore((state) => state.image);
  const transformRef = useRef<HTMLDivElement>(null);

  const containerStyle = useMemo(() => {
    if (size !== undefined) {
      return { width: size, height: size };
    }
    return DEFAULT_STYLE;
  }, [size]);

  useLayoutEffect(() => {
    if (!image) return;

    const updateTransform = (state: ReturnType<typeof useStore.getState>) => {
      if (transformRef.current) {
        const { rotation, zoom, x, y } = state.editorState;
        transformRef.current.style.transform = `rotate(${rotation}deg) scale(${zoom}) translate(${x * 100}%, ${y * 100}%)`;
      }
    };

    // Initialize with current state
    updateTransform(useStore.getState());

    // Subscribe to state changes for imperative updates without re-renders
    const unsubscribe = useStore.subscribe((state, prevState) => {
      if (state.editorState !== prevState.editorState) {
        updateTransform(state);
      }
    });

    return unsubscribe;
  }, [image]);

  if (!image) {
    return <div className={`bg-slate-700 ${className}`} style={containerStyle} />;
  }

  return (
    <div className={`overflow-hidden relative bg-slate-800 flex-shrink-0 select-none ${className}`} style={containerStyle}>
      <div ref={transformRef} className="absolute origin-center w-full h-full will-change-transform">
        <img src={image.url} alt="preview" className="w-full h-full object-contain" draggable={false} />
      </div>
    </div>
  );
});
