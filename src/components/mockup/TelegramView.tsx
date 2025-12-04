import { memo } from 'react';
import { LuArrowLeft, LuCheck, LuEllipsisVertical, LuMic, LuPaperclip, LuPhone, LuSmile } from 'react-icons/lu';

import { Perspective } from '../../app/constants';
import { useStore } from '../../stores/useStore';
import { CroppedPreview } from '../CroppedPreview';

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
  <div className={`w-full h-full ${bgMain} font-sans flex flex-col relative`}>
    <div className="absolute top-0 left-0 right-0 p-3 z-30 flex justify-between items-center text-white drop-shadow-md">
      <LuArrowLeft size={24} />
      <div className="flex gap-4">
        <LuPhone size={24} />
        <LuEllipsisVertical size={24} />
      </div>
    </div>

    <div className="w-full aspect-square bg-black relative shrink-0 overflow-hidden">
      <CroppedPreview className="w-full h-full object-cover" />
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#17212b] to-transparent"></div>

      <div className="absolute bottom-4 left-5 text-white z-20">
        <h1 className="text-2xl font-bold flex items-center gap-2 text-shadow">
          Your Name <PremiumStar size={20} />
        </h1>
        <p className="text-[#aab4be] text-base">online</p>
      </div>
    </div>

    <div className="flex-1 p-5 space-y-6 overflow-y-auto no-scrollbar">
      <div>
        <h3 className={`${accent} text-sm font-medium mb-1`}>Info</h3>
        <p className={`${textPrimary} text-[17px] leading-snug`}>Bio description here. 🚀</p>
        <p className={`${textSecondary} text-xs mt-1`}>Bio</p>
      </div>

      <div>
        <p className={`${textPrimary} text-[17px]`}>@username</p>
        <p className={`${textSecondary} text-xs mt-1`}>Username</p>
      </div>

      <div>
        <p className={`${textPrimary} text-[17px]`}>+1 (555) 123-4567</p>
        <p className={`${textSecondary} text-xs mt-1`}>Mobile</p>
      </div>

      <div className="h-px bg-black/20 w-full my-2" />

      <div className="flex justify-between items-center">
        <div className={`${textPrimary} text-[17px]`}>Notifications</div>
        <div className="text-[#6ab3f3] font-medium">On</div>
      </div>
    </div>

    <div className="absolute bottom-8 right-6 w-14 h-14 bg-[#5288c1] rounded-full flex items-center justify-center shadow-lg hover:brightness-110 cursor-pointer z-40">
      <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
        <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z" />
      </svg>
    </div>
  </div>
));

const ChatView = memo(() => (
  <div className={`w-full h-full ${bgContent} flex flex-col font-sans relative`}>
    <div className={`h-[56px] ${headerBg} flex items-center px-2 shadow-sm z-20 shrink-0`}>
      <div className="p-2 hover:bg-[#202b36] rounded-full cursor-pointer">
        <LuArrowLeft size={22} className={textSecondary} />
      </div>
      <div className="flex-1 flex items-center gap-3 ml-1 cursor-pointer">
        <div className="w-10 h-10 rounded-full overflow-hidden bg-black">
          <CroppedPreview size={40} />
        </div>
        <div className="flex flex-col justify-center">
          <div className={`${textPrimary} font-bold text-base leading-none flex items-center gap-1`}>Your Name</div>
          <div className={`${textSecondary} text-xs mt-1`}>last seen recently</div>
        </div>
      </div>
      <div className="flex gap-1">
        <div className="p-2 hover:bg-[#202b36] rounded-full cursor-pointer">
          <LuPhone size={22} className={textSecondary} />
        </div>
        <div className="p-2 hover:bg-[#202b36] rounded-full cursor-pointer">
          <LuEllipsisVertical size={22} className={textSecondary} />
        </div>
      </div>
    </div>

    <div className="flex-1 p-3 space-y-2 overflow-y-auto z-10 pb-4">
      <div className="flex justify-center my-4">
        <div className="bg-[#17212b]/80 backdrop-blur-sm rounded-full px-3 py-1 text-xs font-bold text-white shadow-sm border border-white/5">
          Today
        </div>
      </div>

      <div className="flex justify-end max-w-[85%] ml-auto">
        <div className="bg-[#2b5278] rounded-tl-xl rounded-tr-xl rounded-bl-xl rounded-br-none p-2.5 shadow-sm text-white relative">
          <p className="text-[15px] leading-snug">Hey! Nice new profile picture! 🔥</p>
          <div className="flex justify-end items-center gap-1 mt-1 text-[#7faedb]">
            <span className="text-[11px]">10:41 AM</span>
            <LuCheck size={14} className="text-[#6ab2f2]" />
          </div>
        </div>
      </div>

      <div className="flex justify-start max-w-[85%]">
        <div className="bg-[#182533] rounded-tl-xl rounded-tr-xl rounded-br-xl rounded-bl-none p-2.5 shadow-sm text-white relative">
          <p className="text-[15px] leading-snug">Thanks! checking how the crop looks on Telegram.</p>
          <div className="flex justify-end items-center gap-1 mt-1 opacity-60">
            <span className="text-[11px]">10:42 AM</span>
          </div>
        </div>
      </div>

      <div className="flex justify-start max-w-[85%]">
        <div className="bg-[#182533] rounded-tl-xl rounded-tr-xl rounded-br-xl rounded-bl-none p-2.5 shadow-sm text-white relative">
          <p className="text-[15px] leading-snug">Does it look centered to you?</p>
          <div className="flex justify-end items-center gap-1 mt-1 opacity-60">
            <span className="text-[11px]">10:42 AM</span>
          </div>
        </div>
      </div>
    </div>

    <div className={`${headerBg} px-2 pt-2 pb-8 flex items-end gap-2 shrink-0 z-20`}>
      <div className="p-2.5 hover:bg-[#232e3c] rounded-full cursor-pointer transition-colors text-[#7f91a4] shrink-0">
        <LuPaperclip size={24} />
      </div>
      <div className="flex-1 bg-[#0e1621] rounded-2xl min-h-[44px] flex items-center px-3 gap-2 border border-black/10 min-w-0">
        <input
          type="text"
          placeholder="Message"
          className="bg-transparent text-white text-[16px] placeholder-[#6c7883] flex-1 outline-none py-2 min-w-0"
        />
        <LuSmile size={24} className="text-[#7f91a4] hover:text-[#dbdee1] cursor-pointer shrink-0" />
      </div>
      <div className="p-3 bg-[#2b5278] hover:bg-[#34608b] rounded-full cursor-pointer text-white shadow-md transition-colors shrink-0">
        <LuMic size={24} />
      </div>
    </div>
  </div>
));

export const TelegramView = () => {
  const perspective = useStore((state) => state.perspective);
  const isProfile = perspective === Perspective.Profile;

  return (
    <div className="w-full h-full relative">
      <div className="w-full h-full" style={{ display: isProfile ? 'block' : 'none' }}>
        <ProfileView />
      </div>
      <div className="w-full h-full" style={{ display: !isProfile ? 'block' : 'none' }}>
        <ChatView />
      </div>
    </div>
  );
};
