import type { EditorState } from '../app/types';

let lastState: EditorState | null = null;

export function updateEditorCssVars(state: EditorState): void {
  if (lastState && lastState.rotation === state.rotation && lastState.zoom === state.zoom && lastState.x === state.x && lastState.y === state.y) {
    return;
  }
  lastState = state;

  const s = document.documentElement.style;
  s.setProperty('--crop-rotate', `${state.rotation}deg`);
  s.setProperty('--crop-scale', state.zoom.toString());
  s.setProperty('--crop-x', `${state.x * 100}%`);
  s.setProperty('--crop-y', `${state.y * 100}%`);
}
