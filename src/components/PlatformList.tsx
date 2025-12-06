import { memo, useRef } from 'react';

import { PLATFORM_METADATA } from '../app/platforms';
import { useStore } from '../stores/useStore';

import type { WheelEvent } from 'react';
import type { Platform, PlatformMetadata } from '../app/platforms';

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
    readonly onSelect: (id: Platform) => void;
  }) => {
    const Icon = p.icon;

    const buttonClass = `
    relative group flex shrink-0 cursor-pointer items-center justify-center rounded-2xl transition-all duration-300
    ${isVertical ? 'w-14 h-14' : 'w-12 h-12'}
    ${isSelected ? 'scale-110 bg-slate-800 shadow-[0_0_20px_rgba(99,102,241,0.3)]' : 'hover:bg-slate-900'}
  `;

    const iconClass = `
    transition-colors duration-300
    ${isSelected ? p.color : 'text-slate-500 group-hover:text-slate-300'}
  `;

    return (
      <button onClick={() => onSelect(p.id)} className={buttonClass}>
        {isSelected && isVertical && <div className="absolute left-0 h-8 w-1 animate-pulse rounded-r-full bg-indigo-500" />}
        {isSelected && !isVertical && <div className="absolute bottom-0 h-1 w-8 animate-pulse rounded-t-full bg-indigo-500" />}
        <Icon size={isVertical ? 28 : 24} className={iconClass} />
        {isVertical && (
          <div className="absolute left-full z-50 ml-4 whitespace-nowrap rounded bg-slate-800 px-2 py-1 text-xs text-white opacity-0 transition-opacity pointer-events-none group-hover:opacity-100">
            {p.name}
          </div>
        )}
      </button>
    );
  },
);

export const PlatformList = memo(({ orientation = 'vertical' }: PlatformListProps) => {
  const selected = useStore((state) => state.platform);
  const setPlatform = useStore((state) => state.setPlatform);
  const scrollRef = useRef<HTMLDivElement>(null);

  const isVertical = orientation === 'vertical';

  const handleWheel = (e: WheelEvent) => {
    if (isVertical || !scrollRef.current) return;
    if (e.deltaY !== 0) {
      scrollRef.current.scrollLeft += e.deltaY;
    }
  };

  const containerClass = `
    relative z-10 bg-slate-950 shadow-2xl
    ${isVertical ? 'flex h-full w-24 flex-col items-center justify-center border-r border-slate-800 py-8' : 'h-20 w-full border-t border-slate-800'}
  `;

  const scrollContainerClass = `
    flex items-center scroll-smooth no-scrollbar
    ${isVertical ? 'w-full max-h-full flex-col gap-6 overflow-y-auto py-2' : 'h-full w-full flex-row gap-6 overflow-x-auto overflow-y-hidden px-6'}
  `;

  return (
    <div className={containerClass}>
      <div ref={scrollRef} className={scrollContainerClass} onWheel={handleWheel}>
        {PLATFORM_METADATA.map((p) => (
          <PlatformItem key={p.id} p={p} isSelected={selected === p.id} isVertical={isVertical} onSelect={setPlatform} />
        ))}
      </div>
    </div>
  );
});
