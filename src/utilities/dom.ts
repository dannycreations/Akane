import type { EditorState } from '../app/types';

export function updateEditorCssVars(state: EditorState): void {
  const s = document.documentElement.style;
  s.setProperty('--crop-rotate', `${state.rotation}deg`);
  s.setProperty('--crop-scale', state.zoom.toString());
  s.setProperty('--crop-x', `${state.x * 100}%`);
  s.setProperty('--crop-y', `${state.y * 100}%`);
}
