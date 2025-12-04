import { memo } from 'react';
import {
  LuCamera,
  LuChevronLeft,
  LuEllipsis,
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
import { CroppedPreview } from '../CroppedPreview';
import { PostImage } from './Shared';

const BottomNav = ({ active = 'chat' }: { active?: string }) => (
  <div className="h-[72px] bg-black/95 backdrop-blur-xl border-t border-white/10 flex items-center justify-between px-6 shrink-0 z-50 rounded-b-[2.5rem]">
    <div className={`flex flex-col items-center gap-1 ${active === 'map' ? 'text-[#00FF00]' : 'text-[#666]'}`}>
      <LuMapPin size={26} strokeWidth={2.5} />
    </div>
    <div className={`flex flex-col items-center gap-1 ${active === 'chat' ? 'text-[#3E95FF]' : 'text-[#666]'}`}>
      <LuMessageSquare size={26} strokeWidth={2.5} />
    </div>
    <div className="flex flex-col items-center justify-center -mt-6">
      <div className="w-16 h-16 bg-[#FFFC00] rounded-full border-4 border-black flex items-center justify-center shadow-[0_0_15px_rgba(255,252,0,0.3)]">
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
);

const ProfileView = memo(() => (
  <div className="w-full h-full bg-[#000000] text-white font-sans flex flex-col relative overflow-hidden">
    {/* Top Header */}
    <div className="absolute top-0 left-0 right-0 p-4 z-20 flex justify-between items-center">
      <div className="w-10 h-10 bg-black/50 backdrop-blur-md rounded-full flex items-center justify-center shadow-sm cursor-pointer border border-white/10">
        <LuChevronLeft size={24} className="text-white" />
      </div>
      <div className="flex gap-3">
        <div className="w-10 h-10 bg-black/50 backdrop-blur-md rounded-full flex items-center justify-center shadow-sm cursor-pointer border border-white/10">
          <LuShare size={20} className="text-white" />
        </div>
        <div className="w-10 h-10 bg-black/50 backdrop-blur-md rounded-full flex items-center justify-center shadow-sm cursor-pointer border border-white/10">
          <LuSettings size={22} className="text-white" />
        </div>
      </div>
    </div>

    <div className="flex-1 overflow-y-auto no-scrollbar">
      {/* Profile Card */}
      <div className="relative bg-[#121212] shadow-sm rounded-b-[2.5rem] pb-6 overflow-hidden border-b border-white/5">
        {/* Fake Banner - using the current image but blurred heavily */}
        <div className="h-40 w-full bg-[#1A1A1A] relative overflow-hidden">
          <PostImage containerClass="w-full h-full" imageClass="w-full h-full object-cover opacity-60 blur-2xl scale-125" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-[#121212]"></div>
        </div>

        <div className="flex flex-col items-center -mt-16 relative z-10">
          <div className="p-1.5 bg-[#121212] rounded-3xl shadow-2xl">
            <div className="w-[120px] h-[120px] rounded-[1.2rem] bg-[#1A1A1A] overflow-hidden ring-1 ring-white/10 relative">
              <CroppedPreview className="w-full h-full" />
              {/* Snapcode Dots Simulation */}
              <div className="absolute inset-0 opacity-20 pointer-events-none bg-[radial-gradient(circle,#fff_1px,transparent_1px)] bg-[size:8px_8px]"></div>
            </div>
          </div>

          <div className="mt-3 text-center">
            <h1 className="text-2xl font-bold tracking-tight text-white">John Doe</h1>
            <p className="text-sm font-medium text-gray-400 mt-0.5">
              johndoe_2025 • <span className="text-gray-500">♍️ Virgo</span>
            </p>
            <div className="text-xs font-semibold text-gray-500 mt-1">54,203 Snap Score</div>
          </div>

          {/* 2025 Action Pills */}
          <div className="flex items-center gap-2 mt-5 w-full px-10">
            <button className="flex-1 bg-[#333] text-white font-bold py-2.5 rounded-full text-sm shadow-md hover:scale-[1.02] transition-transform border border-white/5">
              Subscribe
            </button>
            <button className="flex-1 bg-white text-black font-bold py-2.5 rounded-full text-sm shadow-sm hover:bg-gray-200 transition-colors">
              Message
            </button>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="p-4 space-y-4">
        <div>
          <h3 className="font-bold text-lg mb-3 ml-1 text-white">Highlights</h3>
          <div className="flex gap-3 overflow-x-auto no-scrollbar pb-2">
            {[1, 2, 3].map((i) => (
              <div key={i} className="flex-shrink-0 w-24 flex flex-col gap-2 group cursor-pointer">
                <div className="w-24 h-36 bg-[#1A1A1A] rounded-xl overflow-hidden shadow-sm border border-white/10 relative">
                  {i === 1 ? (
                    <PostImage containerClass="w-full h-full" imageClass="w-full h-full object-cover" />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-[#1A1A1A] to-[#222]"></div>
                  )}
                  <div className="absolute bottom-2 left-2 px-2 py-0.5 bg-black/60 backdrop-blur-sm rounded-full text-[9px] font-bold text-white">
                    2d ago
                  </div>
                </div>
                <span className="text-xs font-medium text-center text-gray-400 group-hover:text-white transition-colors">Life {i}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-[#121212] p-4 rounded-2xl shadow-sm border border-white/5">
          <div className="flex items-center justify-between mb-2">
            <h3 className="font-bold text-lg text-white">Spotlight</h3>
            <LuChevronLeft className="rotate-180 text-gray-500" />
          </div>
          <div className="grid grid-cols-3 gap-1 rounded-lg overflow-hidden">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="aspect-[3/4] bg-[#1A1A1A] relative">
                {i === 0 && <PostImage containerClass="w-full h-full" imageClass="w-full h-full object-cover" />}
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
  <div className="w-full h-full bg-[#000000] text-white font-sans flex flex-col relative overflow-hidden">
    {/* Header */}
    <div className="h-16 px-4 flex items-center justify-between border-b border-white/5 shrink-0 bg-[#000000] z-20">
      <div className="w-9 h-9 bg-[#1A1A1A] rounded-full flex items-center justify-center overflow-hidden border border-white/5">
        <div className="w-full h-full bg-gradient-to-br from-purple-500 to-indigo-600 opacity-80"></div>
      </div>
      <h1 className="font-bold text-xl tracking-tight text-white">Chat</h1>
      <div className="flex gap-4">
        <div className="w-9 h-9 bg-[#1A1A1A] rounded-full flex items-center justify-center text-gray-400 border border-white/5 hover:bg-[#222]">
          <LuUserPlus size={20} />
        </div>
        <div className="w-9 h-9 bg-[#1A1A1A] rounded-full flex items-center justify-center text-gray-400 border border-white/5 hover:bg-[#222]">
          <LuEllipsis size={20} />
        </div>
      </div>
    </div>

    <div className="flex-1 overflow-y-auto no-scrollbar">
      {/* Search */}
      <div className="px-4 py-3">
        <div className="bg-[#1A1A1A] h-10 rounded-full flex items-center px-4 gap-2 text-gray-500 border border-white/5">
          <LuSearch size={18} />
          <span className="text-sm font-medium">Search</span>
        </div>
      </div>

      {/* Chat List */}
      <div className="pb-4">
        {/* User Preview Row */}
        <div className="flex items-center gap-3 px-4 py-3 hover:bg-[#111] active:bg-[#1A1A1A] cursor-pointer transition-colors relative">
          <div className="relative shrink-0">
            <div className="w-14 h-14 rounded-full p-[2px] bg-black ring-2 ring-[#FFFC00] shadow-[0_0_10px_rgba(255,252,0,0.2)]">
              <CroppedPreview className="rounded-full w-full h-full bg-[#1A1A1A]" />
            </div>
          </div>
          <div className="flex-1 min-w-0 pr-10">
            <h3 className="font-bold text-[17px] text-white leading-tight">John Doe</h3>
            <div className="flex items-center gap-1.5 mt-0.5">
              <div className="w-3 h-3 rounded-[2px] bg-[#F23C57] shrink-0 shadow-[0_0_8px_rgba(242,60,87,0.4)]"></div>
              <span className="text-[#F23C57] font-bold text-xs tracking-wide">New Snap • 1m</span>
              <span className="text-gray-600 text-[10px]">•</span>
              <span className="text-gray-500 text-xs">🔥 24</span>
            </div>
          </div>

          <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-black to-transparent pointer-events-none"></div>
          <div className="absolute right-4 top-1/2 -translate-y-1/2 flex gap-3 text-gray-500">
            <LuImage size={24} className="stroke-[1.5]" />
            <LuCamera size={24} className="stroke-[1.5]" />
          </div>
        </div>

        {/* Mock Rows */}
        <div className="flex items-center gap-3 px-4 py-3 hover:bg-[#111] active:bg-[#1A1A1A] cursor-pointer transition-colors">
          <div className="relative shrink-0">
            <div className="w-14 h-14 rounded-full bg-[#1A1A1A] overflow-hidden border border-white/5">
              <div className="w-full h-full flex items-center justify-center text-purple-400 font-bold text-lg">A</div>
            </div>
          </div>
          <div className="flex-1 min-w-0">
            <h3 className="font-bold text-[17px] text-white leading-tight">Alice</h3>
            <div className="flex items-center gap-1.5 mt-0.5">
              <div className="w-3 h-3 border border-[#3E95FF] rounded-tl-lg rounded-tr-lg rounded-br-lg shrink-0"></div>
              <span className="text-gray-500 font-medium text-xs">Delivered • 2h</span>
            </div>
          </div>
          <div className="text-gray-500 pr-2">
            <LuCamera size={24} className="stroke-[1.5]" />
          </div>
        </div>

        <div className="flex items-center gap-3 px-4 py-3 hover:bg-[#111] active:bg-[#1A1A1A] cursor-pointer transition-colors">
          <div className="relative shrink-0">
            <div className="w-14 h-14 rounded-full bg-[#1A1A1A] overflow-hidden border border-white/5">
              <div className="w-full h-full flex items-center justify-center text-green-400 font-bold text-lg">T</div>
            </div>
          </div>
          <div className="flex-1 min-w-0">
            <h3 className="font-bold text-[17px] text-white leading-tight">Team Snapchat</h3>
            <div className="flex items-center gap-1.5 mt-0.5">
              <div className="w-3 h-3 bg-[#3E95FF] rounded-full shrink-0 shadow-[0_0_8px_rgba(62,149,255,0.4)]"></div>
              <span className="text-[#3E95FF] font-semibold text-xs">New Chat • 5h</span>
            </div>
          </div>
          <div className="text-gray-500 pr-2">
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
