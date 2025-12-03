export function calculateLimits(ar: number, zoom: number): { xLim: number; yLim: number } {
  let wBase: number;
  let hBase: number;
  if (ar >= 1) {
    wBase = 1;
    hBase = 1 / ar;
  } else {
    wBase = ar;
    hBase = 1;
  }

  const viewportDim = 1 / zoom;
  const xLim = Math.max(0, (wBase - viewportDim) / 2);
  const yLim = Math.max(0, (hBase - viewportDim) / 2);

  return { xLim, yLim };
}

export function rotateDelta(dx: number, dy: number, angleDeg: number): { dx: number; dy: number } {
  const rad = (angleDeg * Math.PI) / 180;
  const cos = Math.cos(-rad);
  const sin = Math.sin(-rad);

  return {
    dx: dx * cos - dy * sin,
    dy: dx * sin + dy * cos,
  };
}
