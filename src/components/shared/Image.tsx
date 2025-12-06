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
    <div className={`relative flex-shrink-0 select-none overflow-hidden bg-slate-800 ${className ?? ''}`} style={containerStyle}>
      <EditorImage image={image} />
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
    containerClass = 'flex h-64 w-full items-center justify-center text-[#b0b3b8]',
    imageClass = 'block h-full w-full object-contain',
    fallbackText,
  }: PostImageProps) => {
    const image = useStore((state) => state.image);

    const style = useMemo(() => {
      if (!image) return undefined;
      const ar = image.width / image.height;
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
        <img src={image.url} className={`pointer-events-none block select-none ${imageClass}`} draggable={false} decoding="async" style={style} />
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

export const EditorImage = memo(({ image, className, style, imgClassName }: EditorImageProps) => {
  const finalStyle = useMemo(() => {
    if (!style) return TRANSFORM_STYLE;
    return { ...TRANSFORM_STYLE, ...style };
  }, [style]);

  if (!image) return null;

  return (
    <div className={`h-full w-full origin-center will-change-transform ${className ?? ''}`} style={finalStyle}>
      <img
        src={image.url}
        className={imgClassName ?? 'pointer-events-none block h-full w-full select-none object-contain'}
        draggable={false}
        decoding="async"
      />
    </div>
  );
});
