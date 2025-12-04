import { useLayoutEffect, useRef } from 'react';
import { LuEye, LuPencil } from 'react-icons/lu';

import { EditorPanel } from '../components/EditorPanel';
import { PlatformList } from '../components/PlatformList';
import { PreviewPanel } from '../components/PreviewPanel';
import { useStore } from '../stores/useStore';

export const Akane = () => {
  const activeTab = useStore((state) => state.activeTab);
  const setActiveTab = useStore((state) => state.setActiveTab);
  const rootRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    let lastRotation: number | null = null;
    let lastZoom: number | null = null;
    let lastX: number | null = null;
    let lastY: number | null = null;

    const update = (state: ReturnType<typeof useStore.getState>) => {
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
    const baseClass = 'flex-1 flex items-center justify-center gap-2 py-2 rounded-lg text-sm font-medium transition-all whitespace-nowrap';
    const activeClass = 'bg-indigo-600 text-white shadow-lg';
    const inactiveClass = 'text-slate-400 hover:text-slate-200';
    return `${baseClass} ${isActive ? activeClass : inactiveClass}`;
  };

  const editorPanelContainerClass = `
    flex-1 z-10 shadow-xl border-r border-slate-800 min-w-0 overflow-hidden
    ${activeTab === 'editor' ? 'flex' : 'hidden lg:flex'}
  `;

  const previewPanelContainerClass = `
    flex-1 z-0 bg-gradient-to-br from-slate-900 to-slate-950 min-w-0 flex flex-col overflow-hidden
    ${activeTab === 'preview' ? 'flex' : 'hidden lg:flex'}
  `;

  return (
    <div ref={rootRef} className="flex flex-col lg:flex-row h-screen w-screen bg-slate-950 overflow-hidden font-sans">
      <div className="lg:hidden flex-none bg-slate-950 border-b border-slate-800 p-3 z-30">
        <div className="flex bg-slate-900 p-1 rounded-xl">
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

      <div className="hidden lg:block flex-none z-20 h-full">
        <PlatformList orientation="vertical" />
      </div>

      <div className={previewPanelContainerClass}>
        <PreviewPanel />

        <div className="lg:hidden flex-none z-20 shadow-[0_-4px_20px_rgba(0,0,0,0.5)]">
          <PlatformList orientation="horizontal" />
        </div>
      </div>
    </div>
  );
};
