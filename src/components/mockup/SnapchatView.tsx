import { memo } from 'react';
import {
  LuCamera,
  LuChevronLeft,
  LuImage,
  LuMapPin,
  LuMessageSquare,
  LuPlay,
  LuSearch,
  LuSettings,
  LuShare,
  LuUserPlus,
  LuUsers,
} from 'react-icons/lu';

import { Perspective } from '../../app/constants';
import { useStore } from '../../stores/useStore';
import { PostImage, ProfileImage } from '../shared/Image';
import { Navigation } from '../shared/Navigation';

const BottomNav = ({ active = 'chat' }: { active?: string }) => (
  <Navigation className="border-t border-white/10 bg-black/95 backdrop-blur-xl" safeAreaClassName="pb-6">
    <div className="flex h-[72px] items-center justify-between px-6">
      <div className={`flex flex-col items-center gap-1 ${active === 'map' ? 'text-[#00FF00]' : 'text-[#666]'}`}>
        <LuMapPin size={26} strokeWidth={2.5} />
      </div>
      <div className={`flex flex-col items-center gap-1 ${active === 'chat' ? 'text-[#3E95FF]' : 'text-[#666]'}`}>
        <LuMessageSquare size={26} strokeWidth={2.5} />
      </div>
      <div className="-mt-6 flex flex-col items-center justify-center">
        <div className="flex h-16 w-16 items-center justify-center rounded-full border-4 border-black bg-[#FFFC00] shadow-[0_0_15px_rgba(255,252,0,0.3)]">
          <LuCamera size={32} className="text-black" />
        </div>
      </div>
      <div className={`flex flex-col items-center gap-1 ${active === 'stories' ? 'text-[#A05DCD]' : 'text-[#666]'}`}>
        <LuUsers size={26} strokeWidth={2.5} />
      </div>
      <div className={`flex flex-col items-center gap-1 ${active === 'spotlight' ? 'text-[#FF0000]' : 'text-[#666]'}`}>
        <LuPlay size={26} strokeWidth={2.5} />
      </div>
    </div>
  </Navigation>
);

const ProfileView = memo(() => (
  <div className="relative flex h-full w-full flex-col overflow-hidden bg-[#000000] font-sans text-white">
    <div className="absolute left-0 right-0 top-0 z-20 flex items-center justify-between p-4">
      <div className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border border-white/10 bg-black/50 shadow-sm backdrop-blur-md">
        <LuChevronLeft size={24} className="text-white" />
      </div>
      <div className="flex gap-3">
        <div className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border border-white/10 bg-black/50 shadow-sm backdrop-blur-md">
          <LuShare size={20} className="text-white" />
        </div>
        <div className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border border-white/10 bg-black/50 shadow-sm backdrop-blur-md">
          <LuSettings size={22} className="text-white" />
        </div>
      </div>
    </div>

    <div className="flex-1 overflow-y-auto no-scrollbar">
      <div className="relative overflow-hidden rounded-b-[2.5rem] border-b border-white/5 bg-[#121212] pb-6 shadow-sm">
        <div className="relative h-40 w-full overflow-hidden bg-[#1A1A1A]">
          <PostImage containerClass="h-full w-full" imageClass="h-full w-full scale-125 object-cover opacity-60 blur-2xl" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-[#121212]"></div>
        </div>

        <div className="relative z-10 -mt-16 flex flex-col items-center">
          <div className="rounded-3xl bg-[#121212] p-1.5 shadow-2xl">
            <div className="relative h-[120px] w-[120px] overflow-hidden rounded-[1.2rem] bg-[#1A1A1A] ring-1 ring-white/10">
              <ProfileImage className="h-full w-full" />
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle,#fff_1px,transparent_1px)] bg-[size:8px_8px] opacity-20"></div>
            </div>
          </div>

          <div className="mt-3 text-center">
            <h1 className="text-2xl font-bold tracking-tight text-white">Your Name</h1>
            <p className="mt-0.5 text-sm font-medium text-gray-400">
              username • <span className="text-gray-500">♍️ Virgo</span>
            </p>
            <div className="mt-1 text-xs font-semibold text-gray-500">54,203 Snap Score</div>
          </div>

          <div className="mt-5 flex w-full items-center gap-2 px-10">
            <button className="flex-1 rounded-full border border-white/5 bg-[#333] py-2.5 text-sm font-bold text-white shadow-md transition-transform hover:scale-[1.02]">
              Subscribe
            </button>
            <button className="flex-1 rounded-full bg-white py-2.5 text-sm font-bold text-black shadow-sm transition-colors hover:bg-gray-200">
              Message
            </button>
          </div>
        </div>
      </div>

      <div className="space-y-4 p-4">
        <div>
          <h3 className="mb-3 ml-1 text-lg font-bold text-white">Highlights</h3>
          <div className="flex gap-3 overflow-x-auto pb-2 no-scrollbar">
            {[1, 2, 3].map((i) => (
              <div key={i} className="group flex w-24 flex-shrink-0 cursor-pointer flex-col gap-2">
                <div className="relative h-36 w-24 overflow-hidden rounded-xl border border-white/10 bg-[#1A1A1A] shadow-sm">
                  {i === 1 ? (
                    <PostImage containerClass="h-full w-full" imageClass="h-full w-full object-cover" />
                  ) : (
                    <div className="h-full w-full bg-gradient-to-br from-[#1A1A1A] to-[#222]"></div>
                  )}
                  <div className="absolute bottom-2 left-2 rounded-full bg-black/60 px-2 py-0.5 text-[9px] font-bold text-white backdrop-blur-sm">
                    2d ago
                  </div>
                </div>
                <span className="text-center text-xs font-medium text-gray-400 transition-colors group-hover:text-white">Highlight {i}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-2xl border border-white/5 bg-[#121212] p-4 shadow-sm">
          <div className="mb-2 flex items-center justify-between">
            <h3 className="text-lg font-bold text-white">Spotlight</h3>
            <LuChevronLeft className="rotate-180 text-gray-500" />
          </div>
          <div className="grid grid-cols-3 gap-1 rounded-lg overflow-hidden">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="relative aspect-[3/4] bg-[#1A1A1A]">
                {i === 0 && <PostImage containerClass="h-full w-full" imageClass="h-full w-full object-cover" />}
                <div className="absolute bottom-1 left-1 text-white drop-shadow-md">
                  <LuPlay fill="white" size={12} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </div>
));

const ChatView = memo(() => (
  <div className="relative flex h-full w-full flex-col overflow-hidden bg-[#000000] font-sans text-white">
    <div className="z-20 flex h-16 shrink-0 items-center justify-between border-b border-white/5 bg-[#000000] px-4">
      <div className="flex h-9 w-9 items-center justify-center overflow-hidden rounded-full border border-white/5 bg-[#1A1A1A]">
        <div className="h-full w-full bg-gradient-to-br from-purple-500 to-indigo-600 opacity-80"></div>
      </div>
      <h1 className="text-xl font-bold tracking-tight text-white">Chat</h1>
      <div className="flex gap-4">
        <div className="flex h-9 w-9 items-center justify-center rounded-full border border-white/5 bg-[#1A1A1A] text-gray-400 hover:bg-[#222]">
          <LuUserPlus size={20} />
        </div>
        <div className="flex h-9 w-9 items-center justify-center rounded-full border border-white/5 bg-[#1A1A1A] text-gray-400 hover:bg-[#222]">
          <LuUsers size={20} />
        </div>
      </div>
    </div>

    <div className="flex-1 overflow-y-auto no-scrollbar">
      <div className="px-4 py-3">
        <div className="flex h-10 items-center gap-2 rounded-full border border-white/5 bg-[#1A1A1A] px-4 text-gray-500">
          <LuSearch size={18} />
          <span className="text-sm font-medium">Search</span>
        </div>
      </div>

      <div className="pb-4">
        <div className="relative flex cursor-pointer items-center gap-3 px-4 py-3 transition-colors hover:bg-[#111] active:bg-[#1A1A1A]">
          <div className="relative shrink-0">
            <div className="h-14 w-14 rounded-full bg-black p-[2px] ring-2 ring-[#FFFC00] shadow-[0_0_10px_rgba(255,252,0,0.2)]">
              <ProfileImage className="h-full w-full rounded-full bg-[#1A1A1A]" />
            </div>
          </div>
          <div className="min-w-0 flex-1 pr-10">
            <h3 className="text-[17px] font-bold leading-tight text-white">Your Name</h3>
            <div className="mt-0.5 flex items-center gap-1.5">
              <div className="h-3 w-3 shrink-0 rounded-[2px] bg-[#F23C57] shadow-[0_0_8px_rgba(242,60,87,0.4)]"></div>
              <span className="text-xs font-bold tracking-wide text-[#F23C57]">New Snap • 1m</span>
              <span className="text-[10px] text-gray-600">•</span>
              <span className="text-xs text-gray-500">🔥 24</span>
            </div>
          </div>

          <div className="pointer-events-none absolute bottom-0 right-0 top-0 w-16 bg-gradient-to-l from-black to-transparent"></div>
          <div className="absolute right-4 top-1/2 flex -translate-y-1/2 gap-3 text-gray-500">
            <LuImage size={24} className="stroke-[1.5]" />
            <LuCamera size={24} className="stroke-[1.5]" />
          </div>
        </div>

        <div className="flex cursor-pointer items-center gap-3 px-4 py-3 transition-colors hover:bg-[#111] active:bg-[#1A1A1A]">
          <div className="relative shrink-0">
            <div className="h-14 w-14 overflow-hidden rounded-full border border-white/5 bg-[#1A1A1A]">
              <div className="flex h-full w-full items-center justify-center text-lg font-bold text-purple-400">F</div>
            </div>
          </div>
          <div className="min-w-0 flex-1">
            <h3 className="text-[17px] font-bold leading-tight text-white">Friend</h3>
            <div className="mt-0.5 flex items-center gap-1.5">
              <div className="h-3 w-3 shrink-0 rounded-tl-lg rounded-tr-lg rounded-br-lg border border-[#3E95FF]"></div>
              <span className="text-xs font-medium text-gray-500">Delivered • 2h</span>
            </div>
          </div>
          <div className="pr-2 text-gray-500">
            <LuCamera size={24} className="stroke-[1.5]" />
          </div>
        </div>

        <div className="flex cursor-pointer items-center gap-3 px-4 py-3 transition-colors hover:bg-[#111] active:bg-[#1A1A1A]">
          <div className="relative shrink-0">
            <div className="h-14 w-14 overflow-hidden rounded-full border border-white/5 bg-[#1A1A1A]">
              <div className="flex h-full w-full items-center justify-center text-lg font-bold text-green-400">T</div>
            </div>
          </div>
          <div className="min-w-0 flex-1">
            <h3 className="text-[17px] font-bold leading-tight text-white">Team Snapchat</h3>
            <div className="mt-0.5 flex items-center gap-1.5">
              <div className="h-3 w-3 shrink-0 rounded-full bg-[#3E95FF] shadow-[0_0_8px_rgba(62,149,255,0.4)]"></div>
              <span className="text-xs font-semibold text-[#3E95FF]">New Chat • 5h</span>
            </div>
          </div>
          <div className="pr-2 text-gray-500">
            <LuCamera size={24} className="stroke-[1.5]" />
          </div>
        </div>
      </div>
    </div>

    <BottomNav />
  </div>
));

export const SnapchatView = () => {
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
