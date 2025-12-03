import { create } from 'zustand';

import { Perspective } from '../app/constants';
import { getPerspectives, PLATFORMS } from '../components/mockup';

import type { EditorState, ImageSource } from '../app/types';
import type { Platform } from '../components/mockup';

interface AppState {
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
  platform: PLATFORMS[0].id,
  perspective: Perspective.Profile,

  setImage: (image) => set({ image }),
  setActiveTab: (activeTab) => set({ activeTab }),
  setEditorState: (editorState) => set({ editorState }),
  setPlatform: (platform) =>
    set((state) => {
      const available = getPerspectives(platform);
      const perspective = available.includes(state.perspective) ? state.perspective : available[0];
      return { platform, perspective };
    }),
  setPerspective: (perspective) => set({ perspective }),
}));
