import { create } from 'zustand';

import { Perspective, Platform } from '../app/types';
import { getPerspectives } from '../components/PlatformIcon';

import type { EditorState, ImageSource } from '../app/types';

interface AppState {
  image: ImageSource | null;
  activeTab: 'editor' | 'preview';
  editorState: EditorState;
  platform: Platform;
  perspective: Perspective;

  setImage: (image: ImageSource | null) => void;
  setActiveTab: (tab: 'editor' | 'preview') => void;
  setEditorState: (editorState: EditorState) => void;
  setPlatform: (platform: Platform) => void;
  setPerspective: (perspective: Perspective) => void;
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
  platform: Platform.WhatsApp,
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
