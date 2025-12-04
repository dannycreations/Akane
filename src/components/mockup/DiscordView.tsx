import { memo } from 'react';
import { LuCirclePlus, LuGift, LuHash, LuMenu, LuPhone, LuSearch, LuSettings, LuSmile, LuSticker, LuUsers, LuVideo } from 'react-icons/lu';

import { Perspective } from '../../app/constants';
import { useStore } from '../../stores/useStore';
import { CroppedPreview } from '../CroppedPreview';

const bgMain = 'bg-[#1e1f22]';
const bgSidebar = 'bg-[#2b2d31]';
const bgUserCard = 'bg-[#111214]';
const textMain = 'text-[#dbdee1]';
const textMuted = 'text-[#949ba4]';

const BottomNav = () => (
  <div className={`h-[56px] ${bgSidebar} flex items-center justify-around px-2 shrink-0 z-50 border-t border-[#1e1f22]`}>
    <div className="flex flex-col items-center gap-1 group cursor-pointer">
      <div className="text-white bg-[#5865f2] p-1 rounded-full">
        <div className="w-5 h-5 flex items-center justify-center font-bold text-[10px]">D</div>
      </div>
      <span className="text-[10px] text-white font-medium">Servers</span>
    </div>
    <div className="flex flex-col items-center gap-1 group cursor-pointer text-[#949ba4] hover:text-[#dbdee1]">
      <LuUsers size={24} />
      <span className="text-[10px] font-medium">Friends</span>
    </div>
    <div className="flex flex-col items-center gap-1 group cursor-pointer text-[#949ba4] hover:text-[#dbdee1]">
      <div className="relative">
        <LuSearch size={24} />
        <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-[#23a559] rounded-full border-2 border-[#2b2d31]"></div>
      </div>
      <span className="text-[10px] font-medium">Search</span>
    </div>
    <div className="flex flex-col items-center gap-1 group cursor-pointer text-[#dbdee1]">
      <div className="relative">
        <div className="w-6 h-6 rounded-full overflow-hidden ring-2 ring-[#23a559]">
          <CroppedPreview size={24} />
        </div>
      </div>
      <span className="text-[10px] font-medium">You</span>
    </div>
  </div>
);

const NitroBadge = () => (
  <div
    className="bg-gradient-to-br from-[#ff73fa] to-[#6a32ee] p-[2px] rounded-full cursor-pointer hover:scale-110 transition-transform"
    title="Subscriber since Dec 2023"
  >
    <div className="bg-[#111214] rounded-full p-0.5">
      <LuGift size={12} className="text-[#ff73fa]" />
    </div>
  </div>
);

const ProfileView = memo(() => (
  <div className={`w-full h-full ${bgUserCard} ${textMain} font-sans flex flex-col relative overflow-hidden`}>
    <div className="h-14 flex items-center justify-end px-4 gap-4 bg-transparent absolute top-0 right-0 left-0 z-30">
      <LuSettings size={24} className="text-white drop-shadow-md" />
    </div>

    <div className="flex-1 overflow-y-auto no-scrollbar">
      <div className="w-full h-[180px] bg-[#5865f2] relative">
        <div className="absolute inset-0 bg-gradient-to-t from-[#111214]/80 to-transparent"></div>
      </div>

      <div className="px-4 pb-4 -mt-[50px] relative z-10">
        <div className="relative inline-block">
          <div className="w-[100px] h-[100px] rounded-full p-[6px] bg-[#111214]">
            <CroppedPreview size={88} className="rounded-full" />
          </div>
          <div className="absolute bottom-1 right-1 w-7 h-7 bg-[#111214] rounded-full flex items-center justify-center">
            <div className="w-5 h-5 bg-[#23a559] rounded-full border-[3px] border-[#111214]"></div>
          </div>
        </div>

        <div className="bg-[#2b2d31] rounded-2xl p-4 mt-3 shadow-lg">
          <div className="flex justify-between items-start">
            <div>
              <h1 className="text-xl font-bold text-white leading-tight">Your Name</h1>
              <div className="text-sm font-medium text-[#dbdee1] mt-0.5">username</div>
              <div className="text-xs text-[#949ba4] mt-1">Pronouns</div>
            </div>
            <NitroBadge />
          </div>

          <div className="mt-4 flex items-center gap-2 bg-[#1e1f22] p-2 rounded-lg border border-[#111214]">
            <div className="w-5 h-5 bg-gray-600 rounded flex items-center justify-center text-xs">💻</div>
            <span className="text-sm">Building the future...</span>
          </div>

          <div className="mt-4 border-t border-[#3f4147] pt-3">
            <h3 className="text-xs font-bold uppercase text-[#949ba4] mb-2">About Me</h3>
            <p className="text-sm leading-relaxed text-[#dbdee1]">
              Developer & Designer. <br />
              Trying out the new profile previewer! 🎨
            </p>
          </div>

          <div className="mt-4 border-t border-[#3f4147] pt-3">
            <h3 className="text-xs font-bold uppercase text-[#949ba4] mb-2">Member Since</h3>
            <div className="text-sm text-[#dbdee1]">Dec 12, 2018</div>
          </div>
        </div>

        <div className="bg-[#2b2d31] rounded-2xl p-4 mt-3 shadow-lg">
          <h3 className="text-xs font-bold uppercase text-[#949ba4] mb-3">Activity</h3>
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-[#5865f2] rounded-xl flex items-center justify-center">
              <span className="font-bold text-white text-lg">V</span>
            </div>
            <div>
              <div className="text-sm font-bold text-white">Code Editor</div>
              <div className="text-xs text-[#949ba4]">Editing DiscordView.tsx</div>
              <div className="text-xs text-[#949ba4]">02:45 elapsed</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <BottomNav />
  </div>
));

const ChatView = memo(() => (
  <div className={`w-full h-full ${bgMain} ${textMain} font-sans flex flex-col relative`}>
    <div className={`h-12 flex items-center justify-between px-4 border-b border-[#26272d] shadow-sm shrink-0 ${bgSidebar}`}>
      <div className="flex items-center gap-3">
        <LuMenu size={24} className={textMuted} />
        <div className="flex items-center gap-2">
          <LuHash size={20} className={textMuted} />
          <span className="font-bold text-white text-base">general</span>
        </div>
      </div>
      <div className="flex items-center gap-4 text-[#dbdee1]">
        <LuPhone size={22} />
        <LuVideo size={24} />
        <LuUsers size={22} />
      </div>
    </div>

    <div className="flex-1 overflow-y-auto p-4 space-y-5">
      <div className="flex gap-4 group">
        <div className="shrink-0 cursor-pointer hover:opacity-80 transition-opacity mt-1">
          <CroppedPreview size={40} className="rounded-full" />
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-0.5">
            <span className="text-base font-medium text-white hover:underline cursor-pointer">Your Name</span>
            <span className="px-1.5 py-0.5 bg-[#5865f2] text-white text-[10px] rounded font-bold uppercase">BOT</span>
            <span className="text-xs text-[#949ba4]">Today at 4:20 PM</span>
          </div>
          <p className="text-[#dbdee1] leading-snug">
            Hey everyone! Just checking out the new profile styles. <span className="inline-block align-middle text-[1.25em]">👀</span>
          </p>

          <div className="flex gap-1 mt-1.5">
            <div className="flex items-center gap-1 bg-[#2b2d31] border border-[#5865f2] px-1.5 py-0.5 rounded-lg cursor-pointer">
              <span className="text-sm">🔥</span>
              <span className="text-xs font-bold text-[#5865f2]">3</span>
            </div>
          </div>
        </div>
      </div>

      <div className="flex gap-4 group mt-2">
        <div className="shrink-0 w-10 h-10 rounded-full bg-yellow-500 flex items-center justify-center font-bold text-[#1e1f22] mt-1">U</div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-0.5">
            <span className="text-base font-medium text-red-400 hover:underline cursor-pointer">User</span>
            <span className="text-xs text-[#949ba4]">Today at 4:22 PM</span>
          </div>
          <p className="text-[#dbdee1] leading-snug">That looks super clean! Did you edit that yourself?</p>
        </div>
      </div>
    </div>

    <div className={`px-4 pb-4 pt-2 ${bgMain} shrink-0`}>
      <div className={`flex items-center gap-2 bg-[#383a40] rounded-full px-4 py-2.5`}>
        <div className="bg-[#b5bac1] rounded-full p-0.5 cursor-pointer hover:text-white transition-colors">
          <LuCirclePlus size={20} className="text-[#383a40]" fill="currentColor" />
        </div>
        <input
          type="text"
          placeholder="Message #general"
          className="bg-transparent border-none outline-none text-[#dbdee1] placeholder-[#949ba4] flex-1 min-w-0"
        />
        <LuGift size={24} className="text-[#b5bac1] cursor-pointer hover:text-[#dbdee1]" />
        <LuSticker size={24} className="text-[#b5bac1] cursor-pointer hover:text-[#dbdee1]" />
        <LuSmile size={24} className="text-[#b5bac1] cursor-pointer hover:text-[#dbdee1]" />
      </div>
    </div>
  </div>
));

export const DiscordView = () => {
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
