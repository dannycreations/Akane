import { startTransition, Suspense, useEffect, useRef, useState } from 'react';
import { LuArrowLeft, LuArrowRight, LuBattery, LuSignal, LuWifi } from 'react-icons/lu';

import { useStore } from '../stores/useStore';
import { getPlatformConfig, PLATFORMS } from './mockup';

import type { Platform } from '../app/platforms';

export const PreviewPanel = () => {
  const platform = useStore((state) => state.platform);
  const perspective = useStore((state) => state.perspective);
  const setPerspective = useStore((state) => state.setPerspective);

  const containerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
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
    const timer = setTimeout(() => {
      startTransition(() => {
        setVisited((prev) => {
          if (prev.size === PLATFORMS.length) return prev;
          const next = new Set(prev);
          PLATFORMS.forEach((p) => next.add(p.id));
          return next;
        });
      });
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

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

  useEffect(() => {
    const container = containerRef.current;
    const content = contentRef.current;
    if (!container || !content) return;

    let rafId: number;

    const observer = new ResizeObserver((entries) => {
      if (rafId) {
        window.cancelAnimationFrame(rafId);
      }

      rafId = window.requestAnimationFrame(() => {
        const entry = entries[0];
        if (!entry) return;

        const { width, height } = entry.contentRect;

        const PHONE_WIDTH = 340;
        const PHONE_HEIGHT = 680;
        const MARGIN = 20;

        const scaleX = (width - MARGIN) / PHONE_WIDTH;
        const scaleY = (height - MARGIN) / PHONE_HEIGHT;

        const newScale = Math.min(1, scaleX, scaleY);
        const finalScale = Math.max(0.3, newScale);

        content.style.setProperty('--preview-scale', finalScale.toString());
      });
    });

    observer.observe(container);
    return () => {
      observer.disconnect();
      if (rafId) {
        window.cancelAnimationFrame(rafId);
      }
    };
  }, []);

  return (
    <div ref={containerRef} className="relative flex flex-1 w-full min-h-0 flex-col items-center justify-center overflow-hidden p-4 lg:p-8">
      <div className="pointer-events-none absolute left-1/2 top-1/2 z-10 flex w-full max-w-[500px] -translate-x-1/2 -translate-y-1/2 justify-between px-4">
        <button
          onClick={handlePrevPerspective}
          className={`pointer-events-auto cursor-pointer rounded-full bg-slate-800/80 p-3 text-white shadow-lg transition-all hover:bg-indigo-500 ${perspectives.length <= 1 ? 'opacity-0' : ''}`}
        >
          <LuArrowLeft size={20} />
        </button>
        <button
          onClick={handleNextPerspective}
          className={`pointer-events-auto cursor-pointer rounded-full bg-slate-800/80 p-3 text-white shadow-lg transition-all hover:bg-indigo-500 ${perspectives.length <= 1 ? 'opacity-0' : ''}`}
        >
          <LuArrowRight size={20} />
        </button>
      </div>

      <div
        ref={contentRef}
        style={{ transform: 'scale(var(--preview-scale, 1))' }}
        className="origin-center transition-transform duration-300 ease-out will-change-transform"
      >
        <div className="relative h-[680px] w-[340px] overflow-hidden rounded-[3rem] border-8 border-slate-800 bg-black shadow-2xl ring-1 ring-white/10">
          <div className="absolute left-1/2 top-0 z-50 flex h-7 w-28 -translate-x-1/2 items-center justify-center gap-2 rounded-b-2xl bg-black">
            <div className="h-3 w-16 rounded-full bg-slate-900/50" />
          </div>

          <div className="absolute left-6 right-6 top-2 z-40 flex items-center justify-between text-[10px] font-medium text-white">
            <span>9:41</span>
            <div className="flex items-center gap-1.5">
              <LuSignal size={12} />
              <LuWifi size={12} />
              <LuBattery size={12} />
            </div>
          </div>

          <div className="relative h-full w-full bg-slate-950 pt-8">
            {PLATFORMS.map((p) => {
              const isActive = p.id === platform;
              const shouldRender = visited.has(p.id);

              if (!shouldRender) return null;
              const View = p.node;

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
                        <div className="flex h-full items-center justify-center text-slate-500">
                          <div className="animate-pulse">Loading...</div>
                        </div>
                      ) : null
                    }
                  >
                    <View />
                  </Suspense>
                </div>
              );
            })}
          </div>

          <div className="absolute bottom-2 left-1/2 z-50 h-1 w-32 -translate-x-1/2 rounded-full bg-white/20"></div>
        </div>
      </div>
    </div>
  );
};
