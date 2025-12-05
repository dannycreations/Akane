import { memo } from 'react';
import { LuArrowLeft, LuCheck, LuEllipsisVertical, LuMic, LuPaperclip, LuPhone, LuSmile } from 'react-icons/lu';

import { Perspective } from '../../app/constants';
import { useStore } from '../../stores/useStore';
import { ProfileImage } from '../shared/Image';
import { Navigation } from '../shared/Navigation';

const bgMain = 'bg-[#17212b]';
const bgContent = 'bg-[#0e1621]';
const headerBg = 'bg-[#17212b]';
const textPrimary = 'text-white';
const textSecondary = 'text-[#7f91a4]';
const accent = 'text-[#6ab2f2]';

const PremiumStar = ({ size = 16, className = '' }: { size?: number; className?: string }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} className={className} fill="none">
    <path d="M12 1.5L14.7 9.2L22.5 9.2L16.2 14.1L18.6 22.5L12 17.6L5.4 22.5L7.8 14.1L1.5 9.2L9.3 9.2L12 1.5Z" fill="url(#star_gradient)" />
    <defs>
      <linearGradient id="star_gradient" x1="12" y1="1.5" x2="12" y2="22.5" gradientUnits="userSpaceOnUse">
        <stop stopColor="#b488f5" />
        <stop offset="1" stopColor="#5391f5" />
      </linearGradient>
    </defs>
  </svg>
);

const ProfileView = memo(() => (
  <div className={`relative flex h-full w-full flex-col font-sans ${bgMain}`}>
    <div className="absolute left-0 right-0 top-0 z-30 flex items-center justify-between p-3 text-white drop-shadow-md">
      <LuArrowLeft size={24} />
      <div className="flex gap-4">
        <LuPhone size={24} />
        <LuEllipsisVertical size={24} />
      </div>
    </div>

    <div className="relative aspect-square w-full shrink-0 overflow-hidden bg-black">
      <ProfileImage className="h-full w-full object-cover" />
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#17212b] to-transparent"></div>

      <div className="absolute bottom-4 left-5 z-20 text-white">
        <h1 className="flex items-center gap-2 text-2xl font-bold text-shadow">
          Your Name <PremiumStar size={20} />
        </h1>
        <p className="text-base text-[#aab4be]">online</p>
      </div>
    </div>

    <div className="flex-1 space-y-6 overflow-y-auto p-5 no-scrollbar">
      <div>
        <h3 className={`mb-1 text-sm font-medium ${accent}`}>Info</h3>
        <p className={`text-[17px] leading-snug ${textPrimary}`}>Bio description here. 🚀</p>
        <p className={`mt-1 text-xs ${textSecondary}`}>Bio</p>
      </div>

      <div>
        <p className={`text-[17px] ${textPrimary}`}>@username</p>
        <p className={`mt-1 text-xs ${textSecondary}`}>Username</p>
      </div>

      <div>
        <p className={`text-[17px] ${textPrimary}`}>+1 (555) 123-4567</p>
        <p className={`mt-1 text-xs ${textSecondary}`}>Mobile</p>
      </div>

      <div className="my-2 h-px w-full bg-black/20" />

      <div className="flex items-center justify-between">
        <div className={`text-[17px] ${textPrimary}`}>Notifications</div>
        <div className="font-medium text-[#6ab3f3]">On</div>
      </div>
    </div>

    <div className="absolute bottom-8 right-6 z-40 flex h-14 w-14 cursor-pointer items-center justify-center rounded-full bg-[#5288c1] shadow-lg hover:brightness-110">
      <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
        <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z" />
      </svg>
    </div>
  </div>
));

const ChatView = memo(() => (
  <div className={`relative flex h-full w-full flex-col font-sans ${bgContent}`}>
    <div className={`z-20 flex h-[56px] shrink-0 items-center px-2 shadow-sm ${headerBg}`}>
      <div className="cursor-pointer rounded-full p-2 hover:bg-[#202b36]">
        <LuArrowLeft size={22} className={textSecondary} />
      </div>
      <div className="ml-1 flex flex-1 cursor-pointer items-center gap-3">
        <div className="h-10 w-10 overflow-hidden rounded-full bg-black">
          <ProfileImage className="h-full w-full" />
        </div>
        <div className="flex flex-col justify-center">
          <div className={`flex items-center gap-1 text-base font-bold leading-none ${textPrimary}`}>Your Name</div>
          <div className={`mt-1 text-xs ${textSecondary}`}>last seen recently</div>
        </div>
      </div>
      <div className="flex gap-1">
        <div className="cursor-pointer rounded-full p-2 hover:bg-[#202b36]">
          <LuPhone size={22} className={textSecondary} />
        </div>
        <div className="cursor-pointer rounded-full p-2 hover:bg-[#202b36]">
          <LuEllipsisVertical size={22} className={textSecondary} />
        </div>
      </div>
    </div>

    <div className="z-10 flex-1 space-y-2 overflow-y-auto p-3 pb-4">
      <div className="my-4 flex justify-center">
        <div className="rounded-full border border-white/5 bg-[#17212b]/80 px-3 py-1 text-xs font-bold text-white shadow-sm backdrop-blur-sm">
          Today
        </div>
      </div>

      <div className="ml-auto flex max-w-[85%] justify-end">
        <div className="relative rounded-bl-xl rounded-tl-xl rounded-tr-xl rounded-br-none bg-[#2b5278] p-2.5 text-white shadow-sm">
          <p className="text-[15px] leading-snug">Hey! Nice new profile picture! 🔥</p>
          <div className="mt-1 flex items-center justify-end gap-1 text-[#7faedb]">
            <span className="text-[11px]">10:41 AM</span>
            <LuCheck size={14} className="text-[#6ab2f2]" />
          </div>
        </div>
      </div>

      <div className="flex max-w-[85%] justify-start">
        <div className="relative rounded-bl-none rounded-br-xl rounded-tl-xl rounded-tr-xl bg-[#182533] p-2.5 text-white shadow-sm">
          <p className="text-[15px] leading-snug">Thanks! checking how the crop looks on Telegram.</p>
          <div className="mt-1 flex items-center justify-end gap-1 opacity-60">
            <span className="text-[11px]">10:42 AM</span>
          </div>
        </div>
      </div>

      <div className="flex max-w-[85%] justify-start">
        <div className="relative rounded-bl-none rounded-br-xl rounded-tl-xl rounded-tr-xl bg-[#182533] p-2.5 text-white shadow-sm">
          <p className="text-[15px] leading-snug">Does it look centered to you?</p>
          <div className="mt-1 flex items-center justify-end gap-1 opacity-60">
            <span className="text-[11px]">10:42 AM</span>
          </div>
        </div>
      </div>
    </div>

    <Navigation className={headerBg} safeAreaClassName="pb-8">
      <div className="relative z-20 flex items-end gap-2 px-2 pt-2">
        <div className="shrink-0 cursor-pointer rounded-full p-2.5 text-[#7f91a4] transition-colors hover:bg-[#232e3c]">
          <LuPaperclip size={24} />
        </div>
        <div className="flex min-h-[44px] min-w-0 flex-1 items-center gap-2 rounded-2xl border border-black/10 bg-[#0e1621] px-3">
          <input
            type="text"
            placeholder="Message"
            className="min-w-0 flex-1 bg-transparent py-2 text-[16px] text-white outline-none placeholder-[#6c7883]"
          />
          <LuSmile size={24} className="shrink-0 cursor-pointer text-[#7f91a4] hover:text-[#dbdee1]" />
        </div>
        <div className="shrink-0 cursor-pointer rounded-full bg-[#2b5278] p-3 text-white shadow-md transition-colors hover:bg-[#34608b]">
          <LuMic size={24} />
        </div>
      </div>
    </Navigation>
  </div>
));

export const TelegramView = () => {
  const perspective = useStore((state) => state.perspective);
  const isProfile = perspective === Perspective.Profile;

  return (
    <div className="relative h-full w-full">
      <div className="h-full w-full" style={{ display: isProfile ? 'block' : 'none' }}>
        <ProfileView />
      </div>
      <div className="h-full w-full" style={{ display: !isProfile ? 'block' : 'none' }}>
        <ChatView />
      </div>
    </div>
  );
};
