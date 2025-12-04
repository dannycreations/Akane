import { memo } from 'react';
import {
  LuBell,
  LuBriefcase,
  LuEllipsis,
  LuHouse,
  LuMessageSquare,
  LuSearch,
  LuSend,
  LuShare2,
  LuSquarePlus,
  LuThumbsUp,
  LuUsers,
} from 'react-icons/lu';

import { Perspective } from '../../app/constants';
import { useStore } from '../../stores/useStore';
import { CroppedPreview } from '../CroppedPreview';
import { PostImage } from './Shared';

const BottomNav = () => (
  <div className="h-[52px] bg-[#1b1f23] border-t border-[#31363c] flex items-center justify-between px-6 shrink-0 z-50">
    <div className="flex flex-col items-center gap-1 text-white">
      <LuHouse size={20} fill="currentColor" />
      <span className="text-[10px] font-medium">Home</span>
    </div>
    <div className="flex flex-col items-center gap-1 text-[#90959c]">
      <LuUsers size={20} />
      <span className="text-[10px] font-medium">Network</span>
    </div>
    <div className="flex flex-col items-center gap-1 text-[#90959c]">
      <LuSquarePlus size={20} />
      <span className="text-[10px] font-medium">Post</span>
    </div>
    <div className="flex flex-col items-center gap-1 text-[#90959c]">
      <LuBell size={20} />
      <span className="text-[10px] font-medium">Notifs</span>
    </div>
    <div className="flex flex-col items-center gap-1 text-[#90959c]">
      <LuBriefcase size={20} />
      <span className="text-[10px] font-medium">Jobs</span>
    </div>
  </div>
);

const ProfileView = memo(() => (
  <div className="w-full h-full bg-[#000000] text-white font-sans flex flex-col relative overflow-hidden">
    <div className="flex items-center gap-3 p-3 bg-[#1b1f23] border-b border-[#31363c] shrink-0">
      <div className="w-8 h-8 rounded-full overflow-hidden shrink-0">
        <CroppedPreview size={32} />
      </div>
      <div className="flex-1 h-8 bg-[#293038] rounded flex items-center px-3 gap-2">
        <LuSearch size={16} className="text-[#90959c]" />
        <span className="text-sm text-[#90959c] font-medium">Search</span>
      </div>
      <LuMessageSquare size={24} className="text-[#90959c]" />
    </div>

    <div className="flex-1 overflow-y-auto no-scrollbar">
      <div className="bg-[#1b1f23] pb-4 mb-2">
        <div className="h-24 w-full bg-[#a0b4b7] relative">
          <div className="absolute inset-0 bg-gradient-to-r from-slate-600 to-slate-500"></div>
        </div>

        <div className="px-4 relative">
          <div className="-mt-[50px] inline-block p-1 bg-[#1b1f23] rounded-full relative z-10">
            <CroppedPreview size={100} className="rounded-full" />
            <div className="absolute inset-0 rounded-full border-4 border-[#1b1f23] pointer-events-none"></div>
          </div>

          <div className="flex justify-end absolute top-3 right-4 gap-2">
            <div className="w-8 h-8 bg-[#1b1f23] rounded-full flex items-center justify-center border border-white">
              <LuEllipsis size={16} />
            </div>
          </div>

          <div className="mt-2">
            <h1 className="text-xl font-bold leading-tight">Your Name</h1>
            <p className="text-sm text-white/90 mt-1 leading-snug">Job Title | Industry Keyword 🚀</p>
            <div className="flex items-center gap-1 mt-2 text-xs text-[#90959c]">
              <span>Location</span>
              <span className="w-1 h-1 bg-[#90959c] rounded-full mx-1"></span>
              <span className="text-[#0a66c2] font-semibold">Contact info</span>
            </div>
            <div className="mt-2 text-sm text-[#0a66c2] font-semibold">500+ connections</div>
          </div>

          <div className="flex gap-2 mt-4">
            <button className="flex-1 bg-[#0a66c2] text-white font-semibold py-1.5 rounded-full text-sm">Open to</button>
            <button className="flex-1 border border-white text-white font-semibold py-1.5 rounded-full text-sm">Add section</button>
          </div>
        </div>
      </div>

      <div className="bg-[#1b1f23] p-4 mb-2">
        <h3 className="font-bold text-base mb-1">Analytics</h3>
        <div className="flex items-center gap-1 text-xs text-[#90959c] mb-3">
          <LuUsers size={12} />
          <span>Private to you</span>
        </div>
        <div className="flex gap-4 overflow-x-auto no-scrollbar pb-2">
          <div className="min-w-[120px] pr-2 border-r border-[#31363c]">
            <div className="flex items-center gap-1 font-bold text-sm">
              <LuUsers size={16} /> 142
            </div>
            <div className="text-xs text-[#90959c] mt-1">Profile views</div>
          </div>
          <div className="min-w-[120px]">
            <div className="flex items-center gap-1 font-bold text-sm">
              <span className="text-green-500">▲</span> 1.2k
            </div>
            <div className="text-xs text-[#90959c] mt-1">Post impressions</div>
          </div>
        </div>
      </div>

      <div className="bg-[#1b1f23] p-4 mb-8">
        <div className="flex justify-between items-center mb-2">
          <h3 className="font-bold text-base">About</h3>
          <LuEllipsis size={16} className="text-[#90959c]" />
        </div>
        <p className="text-sm text-white/90 leading-relaxed">
          Passionate about creating intuitive user experiences. Currently exploring the intersection of AI and design. Always learning, always
          building.
        </p>
      </div>
    </div>

    <BottomNav />
  </div>
));

const FeedView = memo(() => (
  <div className="w-full h-full bg-[#000000] text-white font-sans flex flex-col relative">
    <div className="flex items-center gap-3 p-3 bg-[#1b1f23] border-b border-[#31363c] shrink-0">
      <div className="w-8 h-8 rounded-full overflow-hidden shrink-0">
        <CroppedPreview size={32} />
      </div>
      <div className="flex-1 h-8 bg-[#293038] rounded flex items-center px-3 gap-2">
        <LuSearch size={16} className="text-[#90959c]" />
        <span className="text-sm text-[#90959c] font-medium">Search</span>
      </div>
      <LuMessageSquare size={24} className="text-[#90959c]" />
    </div>

    <div className="flex-1 overflow-y-auto no-scrollbar bg-[#000000]">
      <div className="bg-[#1b1f23] mb-2 mt-2 pt-3 pb-1">
        <div className="px-3 flex gap-3 mb-2">
          <div className="shrink-0">
            <CroppedPreview size={48} className="rounded-full" />
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex items-center justify-between">
              <div className="flex flex-col">
                <span className="font-semibold text-sm hover:text-[#0a66c2] cursor-pointer">Your Name</span>
                <span className="text-xs text-[#90959c] truncate">Job Title | Industry</span>
                <div className="flex items-center gap-1 text-xs text-[#90959c]">
                  <span>2h</span> • <span className="text-xs">🌐</span>
                </div>
              </div>
              <button className="text-[#0a66c2] font-semibold text-sm flex items-center gap-1">
                <LuSquarePlus size={14} /> Follow
              </button>
            </div>
          </div>
        </div>

        <div className="px-3 mb-3">
          <p className="text-sm leading-relaxed whitespace-pre-line">
            Just updated my profile picture using this amazing new tool! 🎨 The precision cropping and real-time preview across different platforms is
            a game changer. #Design #Productivity #NewProfilePic
          </p>
        </div>

        <div className="w-full bg-[#293038] flex items-center justify-center overflow-hidden mb-2">
          <PostImage containerClass="w-full aspect-video flex items-center justify-center" imageClass="w-full h-auto max-h-[500px] object-contain" />
        </div>

        <div className="px-3 py-2 flex items-center justify-between text-xs text-[#90959c] border-b border-[#31363c]">
          <div className="flex items-center gap-1">
            <div className="flex -space-x-1">
              <div className="w-4 h-4 rounded-full bg-[#0a66c2] flex items-center justify-center border border-[#1b1f23]">
                <LuThumbsUp size={8} className="text-white" />
              </div>
              <div className="w-4 h-4 rounded-full bg-red-500 flex items-center justify-center border border-[#1b1f23]">
                <span className="text-[8px]">❤️</span>
              </div>
            </div>
            <span>84</span>
          </div>
          <div>
            <span>12 comments • 4 reposts</span>
          </div>
        </div>

        <div className="px-2 py-1 flex justify-between items-center">
          <button className="flex items-center gap-1.5 px-2 py-3 rounded hover:bg-[#31363c] text-[#c7cdd1] flex-1 justify-center transition-colors">
            <LuThumbsUp size={18} />
            <span className="text-xs font-semibold">Like</span>
          </button>
          <button className="flex items-center gap-1.5 px-2 py-3 rounded hover:bg-[#31363c] text-[#c7cdd1] flex-1 justify-center transition-colors">
            <LuMessageSquare size={18} />
            <span className="text-xs font-semibold">Comment</span>
          </button>
          <button className="flex items-center gap-1.5 px-2 py-3 rounded hover:bg-[#31363c] text-[#c7cdd1] flex-1 justify-center transition-colors">
            <LuShare2 size={18} />
            <span className="text-xs font-semibold">Repost</span>
          </button>
          <button className="flex items-center gap-1.5 px-2 py-3 rounded hover:bg-[#31363c] text-[#c7cdd1] flex-1 justify-center transition-colors">
            <LuSend size={18} className="rotate-45 -mt-1" />
            <span className="text-xs font-semibold">Send</span>
          </button>
        </div>
      </div>
    </div>

    <BottomNav />
  </div>
));

export const LinkedInView = () => {
  const perspective = useStore((state) => state.perspective);
  const isProfile = perspective === Perspective.Profile;

  return (
    <div className="w-full h-full relative">
      <div className="w-full h-full" style={{ display: isProfile ? 'block' : 'none' }}>
        <ProfileView />
      </div>
      <div className="w-full h-full" style={{ display: !isProfile ? 'block' : 'none' }}>
        <FeedView />
      </div>
    </div>
  );
};
