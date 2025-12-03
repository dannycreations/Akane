import { useEffect, useRef, useState } from 'react';
import { LuArrowLeft, LuArrowRight, LuBattery, LuSignal, LuWifi } from 'react-icons/lu';

import { Platform } from '../app/types';
import { useStore } from '../stores/useStore';
import { DiscordView } from './mockup/DiscordView';
import { FacebookView } from './mockup/FacebookView';
import { InstagramView } from './mockup/InstagramView';
import { LinkedInView } from './mockup/LinkedInView';
import { SlackView } from './mockup/SlackView';
import { TelegramView } from './mockup/TelegramView';
import { TwitterView } from './mockup/TwitterView';
import { WhatsAppView } from './mockup/WhatsAppView';
import { getPerspectives } from './PlatformIcon';

import type { FC } from 'react';

const VIEW_MAP: Record<Platform, FC> = {
  [Platform.WhatsApp]: WhatsAppView,
  [Platform.Instagram]: InstagramView,
  [Platform.Facebook]: FacebookView,
  [Platform.LinkedIn]: LinkedInView,
  [Platform.Twitter]: TwitterView,
  [Platform.Discord]: DiscordView,
  [Platform.Telegram]: TelegramView,
  [Platform.Slack]: SlackView,
};

export const PreviewPanel: FC = () => {
  const { platform, perspective, setPerspective } = useStore();
  const containerRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(1);
  const perspectives = getPerspectives(platform);
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
    if (!container) return;

    const observer = new ResizeObserver((entries) => {
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

    observer.observe(container);
    return () => observer.disconnect();
  }, []);

  const View = VIEW_MAP[platform];

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

      <div style={{ transform: `scale(${scale})` }} className="transition-transform duration-200 ease-out origin-center will-change-transform">
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

          <div className="w-full h-full pt-8 bg-slate-950">
            {View ? (
              <View />
            ) : (
              <div className="flex items-center justify-center h-full text-slate-500 text-center p-8">
                <p>Preview for {platform} coming soon.</p>
              </div>
            )}
          </div>

          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-32 h-1 bg-white/20 rounded-full z-50"></div>
        </div>
      </div>
    </div>
  );
};
