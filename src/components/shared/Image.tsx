import { memo, useMemo } from 'react';

import { useStore } from '../../stores/useStore';

import type { CSSProperties } from 'react';
import type { ImageSource } from '../../app/types';

interface ProfileImageProps {
  readonly size?: number | string;
  readonly className?: string;
}

const DEFAULT_STYLE = { width: '100%', height: '100%' };

export const ProfileImage = memo(({ size, className }: ProfileImageProps) => {
  const image = useStore((state) => state.image);

  const containerStyle = useMemo(() => {
    if (size !== undefined) {
      return { width: size, height: size };
    }
    return DEFAULT_STYLE;
  }, [size]);

  if (!image) {
    return <div className={`bg-slate-700 ${className ?? ''}`} style={containerStyle} />;
  }

  return (
    <div className={`overflow-hidden relative bg-slate-800 flex-shrink-0 select-none ${className ?? ''}`} style={containerStyle}>
      <EditorImage />
    </div>
  );
});

interface PostImageProps {
  readonly containerClass?: string;
  readonly imageClass?: string;
  readonly fallbackText?: string;
}

export const PostImage = memo(
  ({
    containerClass = 'h-64 w-full flex items-center justify-center text-[#b0b3b8]',
    imageClass = 'w-full h-full object-contain',
    fallbackText,
  }: PostImageProps) => {
    const image = useStore((state) => state.image);

    const style = useMemo(() => {
      if (!image) return undefined;
      const ar = image.width / image.height;
      // Cap at 4:5 ratio (0.8)
      if (ar < 0.8) {
        return {
          aspectRatio: '4/5',
          objectFit: 'cover',
          objectPosition: 'center',
        } as CSSProperties;
      }
      return undefined;
    }, [image]);

    if (!image) {
      return <div className={containerClass}>{fallbackText ?? ''}</div>;
    }

    return (
      <div className={containerClass}>
        <img src={image.url} className={`pointer-events-none select-none block ${imageClass}`} draggable={false} decoding="async" style={style} />
      </div>
    );
  },
);

const TRANSFORM_STYLE = { transform: 'rotate(var(--crop-rotate)) scale(var(--crop-scale)) translate(var(--crop-x), var(--crop-y))' };

interface EditorImageProps {
  readonly image?: ImageSource | null;
  readonly className?: string;
  readonly style?: CSSProperties;
  readonly imgClassName?: string;
}

export const EditorImage = memo(({ image: imageProp, className, style, imgClassName }: EditorImageProps) => {
  const storedImage = useStore((state) => state.image);
  const image = imageProp ?? storedImage;

  if (!image) return null;

  return (
    <div className={`w-full h-full origin-center will-change-transform ${className ?? ''}`} style={{ ...TRANSFORM_STYLE, ...style }}>
      <img
        src={image.url}
        className={imgClassName ?? 'w-full h-full object-contain pointer-events-none select-none block'}
        draggable={false}
        decoding="async"
      />
    </div>
  );
});
