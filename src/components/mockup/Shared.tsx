import { memo } from 'react';

import { useStore } from '../../stores/useStore';

interface PostImageProps {
  readonly containerClass?: string;
  readonly imageClass?: string;
  readonly fallbackText?: string;
}

export const PostImage = memo(
  ({
    containerClass = 'h-64 w-full flex items-center justify-center text-[#b0b3b8]',
    imageClass = 'w-full h-full object-contain',
    fallbackText = 'No image',
  }: PostImageProps) => {
    const image = useStore((state) => state.image);

    if (!image) {
      return <div className={containerClass}>{fallbackText}</div>;
    }
    return <img src={image.url} alt="Post" className={imageClass} decoding="async" />;
  },
);
