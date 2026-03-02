import { create } from 'zustand';
import { subscribeWithSelector } from 'zustand/middleware';

import { Perspective } from '../app/constants';
import { getPlatformPerspective, Platform } from '../app/platforms';

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

export const useStore = create<AppState>()(
  subscribeWithSelector((set) => ({
    image: null,
    activeTab: 'editor',
    editorState: {
      zoom: 0,
      rotation: 0,
      x: 0,
      y: 0,
    },
    platform: Platform.Discord,
    perspective: Perspective.Profile,

    setImage: (image) => set({ image, editorState: { zoom: 1, rotation: 0, x: 0, y: 0 } }),
    setActiveTab: (activeTab) => set({ activeTab }),
    setEditorState: (editorState) => set({ editorState }),
    setPlatform: (platform) =>
      set((state) => {
        if (state.platform === platform) return {};
        const perspectives = getPlatformPerspective(platform);
        const nextPerspective = perspectives.includes(state.perspective) ? state.perspective : perspectives[0];

        return {
          platform,
          perspective: nextPerspective ?? state.perspective,
        };
      }),
    setPerspective: (perspective) => set({ perspective }),
    setImageWithEditorState: (image, editorState) => set({ image, editorState }),
  })),
);
