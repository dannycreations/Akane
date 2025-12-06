import { create } from 'zustand';

import { Perspective } from '../app/constants';
import { getPlatformPerspective, PLATFORM_METADATA } from '../app/platforms';

import type { Platform } from '../app/platforms';
import type { EditorState, ImageSource } from '../app/types';

export interface AppState {
  readonly image: ImageSource | null;
  readonly activeTab: 'editor' | 'preview';
  readonly editorState: EditorState;
  readonly platform: Platform;
  readonly perspective: Perspective;

  readonly setImage: (image: ImageSource | null) => void;
  readonly setActiveTab: (tab: 'editor' | 'preview') => void;
  readonly setEditorState: (editorState: EditorState) => void;
  readonly setPlatform: (platform: Platform) => void;
  readonly setPerspective: (perspective: Perspective) => void;
  readonly setImageWithEditorState: (image: ImageSource, editorState: EditorState) => void;
}

export const useStore = create<AppState>((set) => ({
  image: null,
  activeTab: 'editor',
  editorState: {
    zoom: 0,
    rotation: 0,
    x: 0,
    y: 0,
  },
  platform: PLATFORM_METADATA[0].id,
  perspective: Perspective.Profile,

  setImage: (image) => set({ image }),
  setActiveTab: (activeTab) => set({ activeTab }),
  setEditorState: (editorState) => set({ editorState }),
  setPlatform: (platform) =>
    set((state) => {
      const available = getPlatformPerspective(platform);
      const perspective = available.includes(state.perspective) ? state.perspective : available[0];
      return { platform, perspective };
    }),
  setPerspective: (perspective) => set({ perspective }),
  setImageWithEditorState: (image, editorState) => set({ image, editorState }),
}));
