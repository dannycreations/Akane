import type { EditorState } from '../app/types';

export function updateEditorCssVars(state: EditorState): void {
  const root = document.documentElement;
  root.style.setProperty('--crop-rotate', `${state.rotation}deg`);
  root.style.setProperty('--crop-scale', state.zoom.toString());
  root.style.setProperty('--crop-x', `${state.x * 100}%`);
  root.style.setProperty('--crop-y', `${state.y * 100}%`);
}
