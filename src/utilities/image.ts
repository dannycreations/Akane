import type { EditorState, ImageSource } from '../app/types';

export async function saveImage(image: ImageSource, editorState: EditorState, outputSize?: number, suffix?: string): Promise<void> {
  const bitmap = await fetch(image.url)
    .then((r) => r.blob())
    .then(createImageBitmap);

  const { width: w, height: h } = bitmap;
  const size = outputSize ?? Math.max(w, h, 1080);

  const canvas = new OffscreenCanvas(size, size);
  const ctx = canvas.getContext('2d', { alpha: false });

  if (!ctx) {
    bitmap.close();
    return;
  }

  ctx.fillStyle = '#000';
  ctx.fillRect(0, 0, size, size);

  ctx.imageSmoothingEnabled = true;
  ctx.imageSmoothingQuality = 'high';

  ctx.setTransform(
    new DOMMatrix()
      .translate(size * 0.5, size * 0.5)
      .rotate(editorState.rotation)
      .scale(editorState.zoom)
      .translate(editorState.x * size, editorState.y * size),
  );

  const drawW = w >= h ? size : size * (w / h);
  const drawH = w >= h ? size * (h / w) : size;

  ctx.drawImage(bitmap, -drawW * 0.5, -drawH * 0.5, drawW, drawH);
  bitmap.close();

  const blob = await canvas.convertToBlob({ type: 'image/png', quality: 1.0 });
  if (!blob) return;

  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');

  const lastDot = image.name.lastIndexOf('.');
  const baseName = lastDot !== -1 ? image.name.substring(0, lastDot) : image.name;
  const ext = suffix ? `_${suffix}` : '_edited';

  link.download = `${baseName}${ext}.png`;
  link.href = url;
  link.click();
  URL.revokeObjectURL(url);
}
