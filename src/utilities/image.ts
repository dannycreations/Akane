import type { EditorState, ImageSource } from '../app/types';

export async function saveImage(image: ImageSource, editorState: EditorState, outputSize?: number, suffix?: string): Promise<void> {
  const img = new Image();
  img.crossOrigin = 'anonymous';
  img.src = image.url;

  await img.decode();

  const size = outputSize ?? Math.max(1080, img.naturalWidth, img.naturalHeight);

  const canvas = document.createElement('canvas');
  canvas.width = size;
  canvas.height = size;
  const ctx = canvas.getContext('2d');

  if (!ctx) return;

  ctx.imageSmoothingQuality = 'high';
  ctx.save();
  ctx.translate(size / 2, size / 2);
  ctx.rotate((editorState.rotation * Math.PI) / 180);
  ctx.scale(editorState.zoom, editorState.zoom);
  ctx.translate(editorState.x * size, editorState.y * size);

  const w = img.naturalWidth,
    h = img.naturalHeight;
  const drawW = w >= h ? size : size * (w / h);
  const drawH = w >= h ? size * (h / w) : size;

  ctx.drawImage(img, -drawW * 0.5, -drawH * 0.5, drawW, drawH);
  ctx.restore();

  return new Promise((resolve) => {
    canvas.toBlob(
      (blob) => {
        if (blob) {
          const url = URL.createObjectURL(blob);
          const link = document.createElement('a');
          const lastDotIndex = image.name.lastIndexOf('.');
          const nameWithoutExt = lastDotIndex !== -1 ? image.name.substring(0, lastDotIndex) : image.name;
          const fileNameSuffix = suffix ? `_${suffix}` : '_edited';

          link.download = `${nameWithoutExt}${fileNameSuffix}.png`;
          link.href = url;
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
          URL.revokeObjectURL(url);
        }
        resolve();
      },
      'image/png',
      1.0,
    );
  });
}
