import { memo, Suspense, useEffect, useRef, useState } from 'react';
import { LuArrowLeft, LuArrowRight, LuBattery, LuSignal, LuWifi } from 'react-icons/lu';

import { useStore } from '../stores/useStore';
import { getPlatformConfig, PLATFORMS } from './mockup';

import type { Platform } from '../app/platforms';

const PHONE_WIDTH = 340;
const PHONE_HEIGHT = 680;
const MARGIN = 20;

const PerspectiveControls = memo(() => {
  const platform = useStore((state) => state.platform);
  const perspective = useStore((state) => state.perspective);
  const setPerspective = useStore((state) => state.setPerspective);

  const config = getPlatformConfig(platform);
  const perspectives = config.perspectives;
  const currentIdx = perspectives.indexOf(perspective);

  const handleNextPerspective = () => {
    const next = perspectives[(currentIdx + 1) % perspectives.length];
    setPerspective(next);
  };

  const handlePrevPerspective = () => {
    const prev = perspectives[(currentIdx - 1 + perspectives.length) % perspectives.length];
    setPerspective(prev);
  };

  if (perspectives.length <= 1) return null;

  return (
    <div className="pointer-events-none absolute left-1/2 top-1/2 z-10 flex w-full max-w-[500px] -translate-x-1/2 -translate-y-1/2 justify-between px-4">
      <button
        onClick={handlePrevPerspective}
        className="pointer-events-auto cursor-pointer rounded-full bg-surface-elevated/80 p-3 text-text-main shadow-lg transition-all hover:bg-primary"
        aria-label="Previous Perspective"
      >
        <LuArrowLeft size={20} />
      </button>
      <button
        onClick={handleNextPerspective}
        className="pointer-events-auto cursor-pointer rounded-full bg-surface-elevated/80 p-3 text-text-main shadow-lg transition-all hover:bg-primary"
        aria-label="Next Perspective"
      >
        <LuArrowRight size={20} />
      </button>
    </div>
  );
});

const PhoneFrame = memo(() => {
  const platform = useStore((state) => state.platform);
  const [visited, setVisited] = useState<Set<Platform>>(() => new Set([platform]));

  useEffect(() => {
    setVisited((prev) => {
      if (prev.has(platform)) return prev;
      const next = new Set(prev);
      next.add(platform);
      return next;
    });
  }, [platform]);

  useEffect(() => {
    const request = requestIdleCallback(() => {
      setVisited((prev) => (prev.size === PLATFORMS.length ? prev : new Set(PLATFORMS.map((p) => p.id))));
    });

    return () => cancelIdleCallback(request);
  }, []);

  return (
    <div className="relative h-[680px] w-[340px] overflow-hidden rounded-[3rem] border-8 border-surface-elevated bg-black shadow-2xl ring-1 ring-white/10">
      <div className="absolute left-1/2 top-0 z-50 flex h-7 w-28 -translate-x-1/2 items-center justify-center gap-2 rounded-b-2xl bg-black">
        <div className="h-3 w-16 rounded-full bg-surface-lg/50" />
      </div>

      <div className="absolute left-6 right-6 top-2 z-40 flex items-center justify-between text-[10px] font-medium text-text-main">
        <span>9:41</span>
        <div className="flex items-center gap-1.5">
          <LuSignal size={12} />
          <LuWifi size={12} />
          <LuBattery size={12} />
        </div>
      </div>

      <div className="relative h-full w-full bg-bg-darker pt-8">
        {PLATFORMS.map((p) => {
          const isActive = p.id === platform;
          if (!isActive && !visited.has(p.id)) return null;

          return (
            <div
              key={p.id}
              className="absolute inset-0 h-full w-full pt-8"
              style={{
                display: isActive ? 'block' : 'none',
                zIndex: isActive ? 10 : 0,
              }}
            >
              <Suspense
                fallback={
                  isActive ? (
                    <div className="flex h-full items-center justify-center text-text-muted">
                      <div className="animate-pulse">Loading...</div>
                    </div>
                  ) : null
                }
              >
                <p.node />
              </Suspense>
            </div>
          );
        })}
      </div>

      <div className="absolute bottom-2 left-1/2 z-50 h-1 w-32 -translate-x-1/2 rounded-full bg-white/20"></div>
    </div>
  );
});

export const PreviewPanel = memo(() => {
  const containerRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const observer = new ResizeObserver((entries) => {
      const { width, height } = entries[0].contentRect;
      const s = Math.max(0.3, Math.min(1, (width - MARGIN) / PHONE_WIDTH, (height - MARGIN) / PHONE_HEIGHT));
      container.style.setProperty('--preview-scale', s.toFixed(4));
    });

    observer.observe(container);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={containerRef} className="relative flex flex-1 w-full min-h-0 flex-col items-center justify-center overflow-hidden p-4 lg:p-8">
      <PerspectiveControls />
      <div
        style={{ transform: 'scale(var(--preview-scale, 1))' }}
        className="origin-center transition-transform duration-300 ease-out will-change-transform"
      >
        <PhoneFrame />
      </div>
    </div>
  );
});
