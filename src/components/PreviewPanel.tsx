import { Suspense, useEffect, useRef, useState } from 'react';
import { LuArrowLeft, LuArrowRight, LuBattery, LuSignal, LuWifi } from 'react-icons/lu';

import { useStore } from '../stores/useStore';
import { getPlatformConfig, PLATFORMS } from './mockup';

export const PreviewPanel = () => {
  const platform = useStore((state) => state.platform);
  const perspective = useStore((state) => state.perspective);
  const setPerspective = useStore((state) => state.setPerspective);

  const containerRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(1);
  const [prerender, setPrerender] = useState(false);

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
    // Start prerendering other views in background after initial render
    const timer = setTimeout(() => {
      setPrerender(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let rafId: number;

    const observer = new ResizeObserver((entries) => {
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

        setScale(Math.max(0.3, newScale));
      });
    });

    observer.observe(container);
    return () => {
      observer.disconnect();
      window.cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <div ref={containerRef} className="flex-1 min-h-0 w-full flex flex-col items-center justify-center relative p-4 lg:p-8 overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex justify-between pointer-events-none z-10 px-4 w-full max-w-[500px]">
        <button
          onClick={handlePrevPerspective}
          className={`pointer-events-auto p-3 rounded-full bg-slate-800/80 text-white hover:bg-indigo-500 transition-all shadow-lg ${perspectives.length <= 1 ? 'opacity-0' : ''}`}
        >
          <LuArrowLeft size={20} />
        </button>
        <button
          onClick={handleNextPerspective}
          className={`pointer-events-auto p-3 rounded-full bg-slate-800/80 text-white hover:bg-indigo-500 transition-all shadow-lg ${perspectives.length <= 1 ? 'opacity-0' : ''}`}
        >
          <LuArrowRight size={20} />
        </button>
      </div>

      <div style={{ transform: `scale(${scale})` }} className="transition-transform duration-300 ease-out origin-center will-change-transform">
        <div className="relative w-[340px] h-[680px] bg-black rounded-[3rem] border-8 border-slate-800 shadow-2xl overflow-hidden ring-1 ring-white/10">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-28 h-7 bg-black rounded-b-2xl z-50 flex items-center justify-center gap-2">
            <div className="w-16 h-3 bg-slate-900/50 rounded-full" />
          </div>

          <div className="absolute top-2 left-6 right-6 flex justify-between items-center z-40 text-white text-[10px] font-medium">
            <span>9:41</span>
            <div className="flex gap-1.5 items-center">
              <LuSignal size={12} />
              <LuWifi size={12} />
              <LuBattery size={12} />
            </div>
          </div>

          <div className="w-full h-full pt-8 bg-slate-950 relative">
            {PLATFORMS.map((p) => {
              const isActive = p.id === platform;
              const shouldRender = isActive || prerender;

              if (!shouldRender) return null;
              const View = p.node;

              return (
                <div
                  key={p.id}
                  className="absolute inset-0 pt-8 w-full h-full"
                  style={{
                    display: isActive ? 'block' : 'none',
                    zIndex: isActive ? 10 : 0,
                  }}
                >
                  <Suspense
                    fallback={
                      isActive ? (
                        <div className="flex items-center justify-center h-full text-slate-500">
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

          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-32 h-1 bg-white/20 rounded-full z-50"></div>
        </div>
      </div>
    </div>
  );
};
