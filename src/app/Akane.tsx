import { useLayoutEffect, useRef } from 'react';
import { LuEye, LuPencil } from 'react-icons/lu';

import { EditorPanel } from '../components/EditorPanel';
import { PlatformList } from '../components/PlatformList';
import { PreviewPanel } from '../components/PreviewPanel';
import { useStore } from '../stores/useStore';

import type { AppState } from '../stores/useStore';

export const Akane = () => {
  const activeTab = useStore((state) => state.activeTab);
  const setActiveTab = useStore((state) => state.setActiveTab);
  const rootRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    let lastEditorState: AppState['editorState'] | null = null;
    let lastRotation: number | null = null;
    let lastZoom: number | null = null;
    let lastX: number | null = null;
    let lastY: number | null = null;

    const update = (state: AppState) => {
      if (state.editorState === lastEditorState) return;
      lastEditorState = state.editorState;

      const { rotation, zoom, x, y } = state.editorState;

      if (rotation !== lastRotation) {
        root.style.setProperty('--crop-rotate', `${rotation}deg`);
        lastRotation = rotation;
      }
      if (zoom !== lastZoom) {
        root.style.setProperty('--crop-scale', `${zoom}`);
        lastZoom = zoom;
      }
      if (x !== lastX) {
        root.style.setProperty('--crop-x', `${x * 100}%`);
        lastX = x;
      }
      if (y !== lastY) {
        root.style.setProperty('--crop-y', `${y * 100}%`);
        lastY = y;
      }
    };

    update(useStore.getState());
    return useStore.subscribe(update);
  }, []);

  const getTabButtonClass = (isActive: boolean) => {
    const baseClass = 'flex flex-1 items-center justify-center gap-2 whitespace-nowrap rounded-lg py-2 text-sm font-medium transition-all';
    const activeClass = 'bg-indigo-600 text-white shadow-lg';
    const inactiveClass = 'text-slate-400 hover:text-slate-200';
    return `${baseClass} ${isActive ? activeClass : inactiveClass}`;
  };

  const editorPanelContainerClass = `
    z-10 flex flex-1 min-w-0 overflow-hidden border-r border-slate-800 shadow-xl
    ${activeTab === 'editor' ? 'flex' : 'hidden lg:flex'}
  `;

  const previewPanelContainerClass = `
    z-0 flex flex-1 flex-col min-w-0 overflow-hidden bg-gradient-to-br from-slate-900 to-slate-950
    ${activeTab === 'preview' ? 'flex' : 'hidden lg:flex'}
  `;

  return (
    <div ref={rootRef} className="flex h-screen w-screen flex-col overflow-hidden bg-slate-950 font-sans lg:flex-row">
      <div className="z-30 flex-none border-b border-slate-800 bg-slate-950 p-3 lg:hidden">
        <div className="flex rounded-xl bg-slate-900 p-1">
          <button onClick={() => setActiveTab('editor')} className={getTabButtonClass(activeTab === 'editor')}>
            <LuPencil size={16} />
            Edit
          </button>
          <button onClick={() => setActiveTab('preview')} className={getTabButtonClass(activeTab === 'preview')}>
            <LuEye size={16} />
            Preview
          </button>
        </div>
      </div>

      <div className={editorPanelContainerClass}>
        <EditorPanel />
      </div>

      <div className="z-20 hidden h-full flex-none lg:block">
        <PlatformList orientation="vertical" />
      </div>

      <div className={previewPanelContainerClass}>
        <PreviewPanel />

        <div className="z-20 flex-none shadow-[0_-4px_20px_rgba(0,0,0,0.5)] lg:hidden">
          <PlatformList orientation="horizontal" />
        </div>
      </div>
    </div>
  );
};
