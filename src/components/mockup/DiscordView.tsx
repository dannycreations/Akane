import { memo } from 'react';
import { LuCirclePlus, LuGift, LuHash, LuMenu, LuPhone, LuSearch, LuSettings, LuSmile, LuSticker, LuUsers, LuVideo } from 'react-icons/lu';

import { Perspective } from '../../app/constants';
import { useStore } from '../../stores/useStore';
import { ProfileImage } from '../shared/Image';
import { Navigation } from '../shared/Navigation';

const bgMain = 'bg-[#1e1f22]';
const bgSidebar = 'bg-[#2b2d31]';
const bgUserCard = 'bg-[#111214]';
const textMain = 'text-[#dbdee1]';
const textMuted = 'text-[#949ba4]';

const BottomNav = () => (
  <Navigation className={`${bgSidebar} border-t border-[#1e1f22]`} safeAreaClassName="pb-6">
    <div className="flex h-[56px] items-center justify-around px-2">
      <div className="group flex cursor-pointer flex-col items-center gap-1">
        <div className="rounded-full bg-[#5865f2] p-1 text-white">
          <div className="flex h-5 w-5 items-center justify-center text-[10px] font-bold">D</div>
        </div>
        <span className="text-[10px] font-medium text-white">Servers</span>
      </div>
      <div className="group flex cursor-pointer flex-col items-center gap-1 text-[#949ba4] hover:text-[#dbdee1]">
        <LuUsers size={24} />
        <span className="text-[10px] font-medium">Friends</span>
      </div>
      <div className="group flex cursor-pointer flex-col items-center gap-1 text-[#949ba4] hover:text-[#dbdee1]">
        <div className="relative">
          <LuSearch size={24} />
          <div className="absolute -bottom-1 -right-1 h-3 w-3 rounded-full border-2 border-[#2b2d31] bg-[#23a559]"></div>
        </div>
        <span className="text-[10px] font-medium">Search</span>
      </div>
      <div className="group flex cursor-pointer flex-col items-center gap-1 text-[#dbdee1]">
        <div className="relative h-6 w-6 overflow-hidden rounded-full ring-2 ring-[#23a559]">
          <ProfileImage />
        </div>
        <span className="text-[10px] font-medium">You</span>
      </div>
    </div>
  </Navigation>
);

const NitroBadge = () => (
  <div
    className="cursor-pointer rounded-full bg-gradient-to-br from-[#ff73fa] to-[#6a32ee] p-[2px] transition-transform hover:scale-110"
    title="Subscriber since Dec 2023"
  >
    <div className="rounded-full bg-[#111214] p-0.5">
      <LuGift size={12} className="text-[#ff73fa]" />
    </div>
  </div>
);

const ProfileView = memo(() => (
  <div className={`relative flex h-full w-full flex-col overflow-hidden font-sans ${bgUserCard} ${textMain}`}>
    <div className="absolute left-0 right-0 top-0 z-30 flex h-14 items-center justify-end gap-4 bg-transparent px-4">
      <LuSettings size={24} className="text-white drop-shadow-md" />
    </div>

    <div className="flex-1 overflow-y-auto no-scrollbar">
      <div className="relative h-[180px] w-full bg-[#5865f2]">
        <div className="absolute inset-0 bg-gradient-to-t from-[#111214]/80 to-transparent"></div>
      </div>

      <div className="relative z-10 -mt-[50px] px-4 pb-4">
        <div className="relative inline-block">
          <div className="h-[100px] w-[100px] rounded-full bg-[#111214] p-[6px]">
            <ProfileImage className="h-full w-full rounded-full" />
          </div>
          <div className="absolute bottom-1 right-1 flex h-7 w-7 items-center justify-center rounded-full bg-[#111214]">
            <div className="h-5 w-5 rounded-full border-[3px] border-[#111214] bg-[#23a559]"></div>
          </div>
        </div>

        <div className="mt-3 rounded-2xl bg-[#2b2d31] p-4 shadow-lg">
          <div className="flex items-start justify-between">
            <div>
              <h1 className="text-xl font-bold leading-tight text-white">Your Name</h1>
              <div className="mt-0.5 text-sm font-medium text-[#dbdee1]">username</div>
              <div className="mt-1 text-xs text-[#949ba4]">Pronouns</div>
            </div>
            <NitroBadge />
          </div>

          <div className="mt-4 flex items-center gap-2 rounded-lg border border-[#111214] bg-[#1e1f22] p-2">
            <div className="flex h-5 w-5 items-center justify-center rounded bg-gray-600 text-xs">💻</div>
            <span className="text-sm">Building the future...</span>
          </div>

          <div className="mt-4 border-t border-[#3f4147] pt-3">
            <h3 className="mb-2 text-xs font-bold uppercase text-[#949ba4]">About Me</h3>
            <p className="text-sm leading-relaxed text-[#dbdee1]">
              Developer & Designer. <br />
              Trying out the new profile previewer! 🎨
            </p>
          </div>

          <div className="mt-4 border-t border-[#3f4147] pt-3">
            <h3 className="mb-2 text-xs font-bold uppercase text-[#949ba4]">Member Since</h3>
            <div className="text-sm text-[#dbdee1]">Dec 12, 2018</div>
          </div>
        </div>

        <div className="mt-3 rounded-2xl bg-[#2b2d31] p-4 shadow-lg">
          <h3 className="mb-3 text-xs font-bold uppercase text-[#949ba4]">Activity</h3>
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#5865f2]">
              <span className="text-lg font-bold text-white">V</span>
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
  <div className={`relative flex h-full w-full flex-col font-sans ${bgMain} ${textMain}`}>
    <div className={`flex h-12 shrink-0 items-center justify-between border-b border-[#26272d] px-4 shadow-sm ${bgSidebar}`}>
      <div className="flex items-center gap-3">
        <LuMenu size={24} className={textMuted} />
        <div className="flex items-center gap-2">
          <LuHash size={20} className={textMuted} />
          <span className="text-base font-bold text-white">general</span>
        </div>
      </div>
      <div className="flex items-center gap-4 text-[#dbdee1]">
        <LuPhone size={22} />
        <LuVideo size={24} />
        <LuUsers size={22} />
      </div>
    </div>

    <div className="flex-1 space-y-5 overflow-y-auto p-4">
      <div className="group flex gap-4">
        <div className="mt-1 h-10 w-10 shrink-0 cursor-pointer transition-opacity hover:opacity-80">
          <ProfileImage className="h-full w-full rounded-full" />
        </div>
        <div className="min-w-0 flex-1">
          <div className="mb-0.5 flex items-center gap-2">
            <span className="cursor-pointer text-base font-medium text-white hover:underline">Your Name</span>
            <span className="rounded bg-[#5865f2] px-1.5 py-0.5 text-[10px] font-bold uppercase text-white">BOT</span>
            <span className="text-xs text-[#949ba4]">Today at 4:20 PM</span>
          </div>
          <p className="leading-snug text-[#dbdee1]">
            Hey everyone! Just checking out the new profile styles. <span className="inline-block align-middle text-[1.25em]">👀</span>
          </p>

          <div className="mt-1.5 flex gap-1">
            <div className="flex cursor-pointer items-center gap-1 rounded-lg border border-[#5865f2] bg-[#2b2d31] px-1.5 py-0.5">
              <span className="text-sm">🔥</span>
              <span className="text-xs font-bold text-[#5865f2]">3</span>
            </div>
          </div>
        </div>
      </div>

      <div className="group mt-2 flex gap-4">
        <div className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-yellow-500 font-bold text-[#1e1f22]">U</div>
        <div className="min-w-0 flex-1">
          <div className="mb-0.5 flex items-center gap-2">
            <span className="cursor-pointer text-base font-medium text-red-400 hover:underline">User</span>
            <span className="text-xs text-[#949ba4]">Today at 4:22 PM</span>
          </div>
          <p className="leading-snug text-[#dbdee1]">That looks super clean! Did you edit that yourself?</p>
        </div>
      </div>
    </div>

    <Navigation className={bgMain} safeAreaClassName="pb-4">
      <div className="px-4 pt-2">
        <div className={`flex items-center gap-2 rounded-full bg-[#383a40] px-4 py-2.5`}>
          <div className="cursor-pointer rounded-full bg-[#b5bac1] p-0.5 transition-colors hover:text-white">
            <LuCirclePlus size={20} className="text-[#383a40]" fill="currentColor" />
          </div>
          <input
            type="text"
            placeholder="Message #general"
            className="min-w-0 flex-1 border-none bg-transparent text-[#dbdee1] outline-none placeholder-[#949ba4]"
          />
          <LuGift size={24} className="cursor-pointer text-[#b5bac1] hover:text-[#dbdee1]" />
          <LuSticker size={24} className="cursor-pointer text-[#b5bac1] hover:text-[#dbdee1]" />
          <LuSmile size={24} className="cursor-pointer text-[#b5bac1] hover:text-[#dbdee1]" />
        </div>
      </div>
    </Navigation>
  </div>
));

export const DiscordView = () => {
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
