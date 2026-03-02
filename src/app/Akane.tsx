import './styles.css';

import { clsx } from 'clsx';
import { useLayoutEffect } from 'react';
import { LuEye, LuPencil } from 'react-icons/lu';

import { EditorPanel } from '../components/EditorPanel';
import { PlatformList } from '../components/PlatformList';
import { PreviewPanel } from '../components/PreviewPanel';
import { useStore } from '../stores/useStore';
import { updateEditorCssVars } from '../utilities/dom';

export const AkaneApp = () => {
  const activeTab = useStore((state) => state.activeTab);
  const setActiveTab = useStore((state) => state.setActiveTab);

  useLayoutEffect(() => {
    updateEditorCssVars(useStore.getState().editorState);
    return useStore.subscribe((state) => state.editorState, updateEditorCssVars);
  }, []);

  const editorPanelContainerClass = clsx(
    'z-10 flex flex-1 min-w-0 overflow-hidden border-r border-slate-800 shadow-xl',
    activeTab === 'editor' ? 'flex' : 'hidden lg:flex',
  );

  const previewPanelContainerClass = clsx(
    'z-0 flex flex-1 flex-col min-w-0 overflow-hidden bg-gradient-to-br from-slate-900 to-slate-950',
    activeTab === 'preview' ? 'flex' : 'hidden lg:flex',
  );

  return (
    <div data-akane-root className="flex h-screen w-screen flex-col overflow-hidden bg-slate-950 font-sans lg:flex-row">
      <div className="z-30 flex-none border-b border-slate-800 bg-slate-950 p-3 lg:hidden">
        <div className="flex rounded-xl bg-slate-900 p-1">
          <button
            onClick={() => setActiveTab('editor')}
            className={clsx(
              'flex flex-1 items-center justify-center gap-2 whitespace-nowrap rounded-lg py-2 text-sm font-medium transition-all',
              activeTab === 'editor' ? 'bg-indigo-600 text-white shadow-lg' : 'text-slate-400 hover:text-slate-200',
            )}
          >
            <LuPencil size={16} />
            Edit
          </button>
          <button
            onClick={() => setActiveTab('preview')}
            className={clsx(
              'flex flex-1 items-center justify-center gap-2 whitespace-nowrap rounded-lg py-2 text-sm font-medium transition-all',
              activeTab === 'preview' ? 'bg-indigo-600 text-white shadow-lg' : 'text-slate-400 hover:text-slate-200',
            )}
          >
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
