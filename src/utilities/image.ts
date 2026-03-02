import type { EditorState, ImageSource } from '../app/types';

export async function saveImage(image: ImageSource, editorState: EditorState, outputSize?: number, suffix?: string): Promise<void> {
  const response = await fetch(image.url);
  const blobIn = await response.blob();
  const bitmap = await createImageBitmap(blobIn);

  const w = bitmap.width;
  const h = bitmap.height;
  const maxWH = w > h ? w : h;
  const size = outputSize ?? (maxWH > 1080 ? maxWH : 1080);

  const canvas = new OffscreenCanvas(size, size);
  const ctx = canvas.getContext('2d');

  if (!ctx) {
    bitmap.close();
    return;
  }

  ctx.imageSmoothingQuality = 'high';
  ctx.translate(size * 0.5, size * 0.5);
  ctx.rotate((editorState.rotation * Math.PI) / 180);
  ctx.scale(editorState.zoom, editorState.zoom);
  ctx.translate(editorState.x * size, editorState.y * size);

  const drawW = w >= h ? size : size * (w / h);
  const drawH = w >= h ? size * (h / w) : size;

  ctx.drawImage(bitmap, -drawW * 0.5, -drawH * 0.5, drawW, drawH);
  bitmap.close();

  const blob = await canvas.convertToBlob({ type: 'image/png', quality: 1.0 });

  if (blob) {
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    const lastDotIndex = image.name.lastIndexOf('.');
    const nameWithoutExt = lastDotIndex !== -1 ? image.name.substring(0, lastDotIndex) : image.name;
    const fileNameSuffix = suffix ? `_${suffix}` : '_edited';

    link.download = `${nameWithoutExt}${fileNameSuffix}.png`;
    link.href = url;
    link.click();
    URL.revokeObjectURL(url);
  }
}
