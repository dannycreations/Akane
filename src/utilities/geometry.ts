export function calculateLimits(ar: number, zoom: number): { xLim: number; yLim: number } {
  const invZoom = 1 / Math.max(zoom, 0.01);
  return {
    xLim: Math.max(0, (Math.min(1, ar) - invZoom) * 0.5),
    yLim: Math.max(0, (Math.min(1, 1 / ar) - invZoom) * 0.5),
  };
}

export function rotateDelta(dx: number, dy: number, angleDeg: number): { dx: number; dy: number } {
  const rad = (angleDeg * Math.PI) / -180;
  const cos = Math.cos(rad);
  const sin = Math.sin(rad);

  return {
    dx: dx * cos - dy * sin,
    dy: dx * sin + dy * cos,
  };
}
