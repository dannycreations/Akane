import { memo } from 'react';

import { PLATFORM_METADATA } from '../app/platforms';
import { useStore } from '../stores/useStore';

import type { PlatformMetadata } from '../app/platforms';

interface PlatformListProps {
  readonly orientation?: 'vertical' | 'horizontal';
}

const PlatformItem = memo(
  ({
    p,
    isSelected,
    isVertical,
    onSelect,
  }: {
    readonly p: PlatformMetadata;
    readonly isSelected: boolean;
    readonly isVertical: boolean;
    readonly onSelect: (id: any) => void;
  }) => {
    const Icon = p.icon;

    const buttonClass = `
    relative group flex items-center justify-center rounded-2xl transition-all duration-300 flex-shrink-0 cursor-pointer
    ${isVertical ? 'w-14 h-14' : 'w-12 h-12'}
    ${isSelected ? 'bg-slate-800 shadow-[0_0_20px_rgba(99,102,241,0.3)] scale-110' : 'hover:bg-slate-900'}
  `;

    const iconClass = `
    transition-colors duration-300
    ${isSelected ? p.color : 'text-slate-500 group-hover:text-slate-300'}
  `;

    return (
      <button onClick={() => onSelect(p.id)} className={buttonClass}>
        {isSelected && isVertical && <div className="absolute left-0 w-1 h-8 bg-indigo-500 rounded-r-full animate-pulse" />}
        {isSelected && !isVertical && <div className="absolute bottom-0 h-1 w-8 bg-indigo-500 rounded-t-full animate-pulse" />}
        <Icon size={isVertical ? 28 : 24} className={iconClass} />
        {isVertical && (
          <div className="absolute left-full ml-4 px-2 py-1 bg-slate-800 text-xs text-white rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap z-50">
            {p.name}
          </div>
        )}
      </button>
    );
  },
);

export const PlatformList = ({ orientation = 'vertical' }: PlatformListProps) => {
  const selected = useStore((state) => state.platform);
  const setPlatform = useStore((state) => state.setPlatform);

  const isVertical = orientation === 'vertical';

  const containerClass = `
    bg-slate-950 flex z-10 shadow-2xl relative
    ${
      isVertical
        ? 'h-full w-24 flex-col py-8 border-r border-slate-800 items-center justify-center'
        : 'w-full h-20 flex-row items-center border-t border-slate-800 justify-center'
    }
  `;

  const scrollContainerClass = `
    flex items-center min-w-0 min-h-0 scroll-smooth
    ${
      isVertical
        ? 'flex-col gap-6 overflow-y-auto no-scrollbar py-2 w-full max-h-full'
        : 'flex-row gap-6 overflow-x-auto no-scrollbar px-6 w-fit max-w-full'
    }
  `;

  return (
    <div className={containerClass}>
      <div className={scrollContainerClass}>
        {PLATFORM_METADATA.map((p) => (
          <PlatformItem key={p.id} p={p} isSelected={selected === p.id} isVertical={isVertical} onSelect={setPlatform} />
        ))}
      </div>
    </div>
  );
};
