import { memo, useMemo } from 'react';

import { useStore } from '../stores/useStore';

interface CroppedPreviewProps {
  readonly size?: number | string;
  readonly className?: string;
}

const DEFAULT_STYLE = { width: '100%', height: '100%' };

export const CroppedPreview = memo(({ size, className }: CroppedPreviewProps) => {
  const image = useStore((state) => state.image);
  const editorState = useStore((state) => state.editorState);

  const style = useMemo(() => (size !== undefined ? { width: size, height: size } : DEFAULT_STYLE), [size]);

  if (!image) return <div className={`bg-slate-700 ${className}`} style={style} />;

  return (
    <div className={`overflow-hidden relative bg-slate-800 flex-shrink-0 select-none ${className}`} style={style}>
      <div
        className="absolute origin-center w-full h-full"
        style={{
          transform: `rotate(${editorState.rotation}deg) scale(${editorState.zoom}) translate(${editorState.x * 100}%, ${editorState.y * 100}%)`,
        }}
      >
        <img src={image.url} alt="preview" className="w-full h-full object-contain" draggable={false} />
      </div>
    </div>
  );
});
