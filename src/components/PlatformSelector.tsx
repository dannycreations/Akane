import { Platform } from '../app/types';
import { useStore } from '../stores/useStore';
import { PLATFORMS } from './PlatformIcon';

import type { FC } from 'react';

interface PlatformSelectorProps {
  orientation?: 'vertical' | 'horizontal';
}

export const PlatformSelector: FC<PlatformSelectorProps> = ({ orientation = 'vertical' }) => {
  const { platform: selected, setPlatform } = useStore();
  const isVertical = orientation === 'vertical';

  return (
    <div
      className={`
      bg-slate-950 flex z-10 shadow-2xl relative
      ${
        isVertical
          ? 'h-full w-24 flex-col py-8 border-r border-slate-800 items-center justify-center'
          : 'w-full h-20 flex-row items-center border-t border-slate-800 justify-center'
      }
    `}
    >
      <div
        className={`
        flex items-center min-w-0 min-h-0 scroll-smooth
        ${
          isVertical
            ? 'flex-col gap-6 overflow-y-auto no-scrollbar py-2 w-full max-h-full'
            : 'flex-row gap-6 overflow-x-auto no-scrollbar px-6 w-fit max-w-full'
        }
      `}
      >
        {PLATFORMS.map((p) => {
          const isSelected = selected === p.id;
          const Icon = p.icon;
          return (
            <button
              key={p.id}
              onClick={() => setPlatform(p.id)}
              className={`
                relative group flex items-center justify-center rounded-2xl transition-all duration-300 flex-shrink-0
                ${isVertical ? 'w-14 h-14' : 'w-12 h-12'}
                ${isSelected ? 'bg-slate-800 shadow-[0_0_20px_rgba(99,102,241,0.3)] scale-110' : 'hover:bg-slate-900'}
              `}
            >
              {isSelected && isVertical && <div className="absolute left-0 w-1 h-8 bg-indigo-500 rounded-r-full animate-pulse" />}
              {isSelected && !isVertical && <div className="absolute bottom-0 h-1 w-8 bg-indigo-500 rounded-t-full animate-pulse" />}
              <Icon
                size={isVertical ? 28 : 24}
                className={`transition-colors duration-300 ${isSelected ? p.color : 'text-slate-500 group-hover:text-slate-300'}`}
              />
              {isVertical && (
                <div className="absolute left-full ml-4 px-2 py-1 bg-slate-800 text-xs text-white rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap z-50">
                  {p.id === Platform.Twitter ? 'X' : p.id}
                </div>
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
};
