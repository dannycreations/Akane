import type { EditorState, ImageSource } from '../app/types';

export async function saveImage(image: ImageSource, editorState: EditorState, outputSize?: number, suffix?: string): Promise<void> {
  const img = new Image();
  img.crossOrigin = 'anonymous';
  img.src = image.url;

  await new Promise<void>((resolve, reject) => {
    img.onload = () => resolve();
    img.onerror = reject;
  });

  const size = outputSize ?? Math.max(1080, img.naturalWidth, img.naturalHeight);

  const canvas = document.createElement('canvas');
  canvas.width = size;
  canvas.height = size;
  const ctx = canvas.getContext('2d');

  if (!ctx) return;

  ctx.imageSmoothingEnabled = true;
  ctx.imageSmoothingQuality = 'high';
  ctx.clearRect(0, 0, size, size);
  ctx.save();
  ctx.translate(size / 2, size / 2);
  ctx.rotate((editorState.rotation * Math.PI) / 180);
  ctx.scale(editorState.zoom, editorState.zoom);
  ctx.translate(editorState.x * size, editorState.y * size);

  const ar = img.naturalWidth / img.naturalHeight;
  let drawW: number;
  let drawH: number;

  if (ar >= 1) {
    drawW = size;
    drawH = size / ar;
  } else {
    drawH = size;
    drawW = size * ar;
  }

  ctx.drawImage(img, -drawW / 2, -drawH / 2, drawW, drawH);
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
