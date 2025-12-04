import { memo, useMemo } from 'react';

import { useStore } from '../stores/useStore';

interface CroppedPreviewProps {
  readonly size?: number | string;
  readonly className?: string;
}

const DEFAULT_STYLE = { width: '100%', height: '100%' };
const TRANSFORM_STYLE = { transform: 'rotate(var(--crop-rotate)) scale(var(--crop-scale)) translate(var(--crop-x), var(--crop-y))' };

export const CroppedPreview = memo(({ size, className }: CroppedPreviewProps) => {
  const image = useStore((state) => state.image);

  const containerStyle = useMemo(() => {
    if (size !== undefined) {
      return { width: size, height: size };
    }
    return DEFAULT_STYLE;
  }, [size]);

  if (!image) {
    return <div className={`bg-slate-700 ${className}`} style={containerStyle} />;
  }

  return (
    <div className={`overflow-hidden relative bg-slate-800 flex-shrink-0 select-none ${className}`} style={containerStyle}>
      <div className="absolute origin-center w-full h-full will-change-transform" style={TRANSFORM_STYLE}>
        <img src={image.url} alt="preview" className="w-full h-full object-contain" draggable={false} decoding="async" />
      </div>
    </div>
  );
});
