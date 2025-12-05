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
import { PostImage, ProfileImage } from '../shared/Image';
import { Navigation } from '../shared/Navigation';

const BottomNav = () => (
  <Navigation className="border-t border-[#31363c] bg-[#1b1f23]" safeAreaClassName="pb-6">
    <div className="flex h-[52px] items-center justify-between px-6">
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
  </Navigation>
);

const ProfileView = memo(() => (
  <div className="relative flex h-full w-full flex-col overflow-hidden bg-[#000000] font-sans text-white">
    <div className="flex shrink-0 items-center gap-3 border-b border-[#31363c] bg-[#1b1f23] p-3">
      <div className="h-8 w-8 shrink-0 overflow-hidden rounded-full">
        <ProfileImage className="h-full w-full" />
      </div>
      <div className="flex h-8 flex-1 items-center gap-2 rounded bg-[#293038] px-3">
        <LuSearch size={16} className="text-[#90959c]" />
        <span className="text-sm font-medium text-[#90959c]">Search</span>
      </div>
      <LuMessageSquare size={24} className="text-[#90959c]" />
    </div>

    <div className="flex-1 overflow-y-auto no-scrollbar">
      <div className="mb-2 bg-[#1b1f23] pb-4">
        <div className="relative h-24 w-full bg-[#a0b4b7]">
          <div className="absolute inset-0 bg-gradient-to-r from-slate-600 to-slate-500"></div>
        </div>

        <div className="relative px-4">
          <div className="relative z-10 -mt-[50px] inline-block h-[100px] w-[100px] rounded-full bg-[#1b1f23] p-1">
            <ProfileImage className="h-full w-full rounded-full" />
            <div className="pointer-events-none absolute inset-0 rounded-full border-4 border-[#1b1f23]"></div>
          </div>

          <div className="absolute right-4 top-3 flex justify-end gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-full border border-white bg-[#1b1f23]">
              <LuEllipsis size={16} />
            </div>
          </div>

          <div className="mt-2">
            <h1 className="text-xl font-bold leading-tight">Your Name</h1>
            <p className="mt-1 text-sm leading-snug text-white/90">Job Title | Industry Keyword 🚀</p>
            <div className="mt-2 flex items-center gap-1 text-xs text-[#90959c]">
              <span>Location</span>
              <span className="mx-1 h-1 w-1 rounded-full bg-[#90959c]"></span>
              <span className="font-semibold text-[#0a66c2]">Contact info</span>
            </div>
            <div className="mt-2 text-sm font-semibold text-[#0a66c2]">500+ connections</div>
          </div>

          <div className="mt-4 flex gap-2">
            <button className="flex-1 rounded-full bg-[#0a66c2] py-1.5 text-sm font-semibold text-white">Open to</button>
            <button className="flex-1 rounded-full border border-white py-1.5 text-sm font-semibold text-white">Add section</button>
          </div>
        </div>
      </div>

      <div className="mb-2 bg-[#1b1f23] p-4">
        <h3 className="mb-1 text-base font-bold">Analytics</h3>
        <div className="mb-3 flex items-center gap-1 text-xs text-[#90959c]">
          <LuUsers size={12} />
          <span>Private to you</span>
        </div>
        <div className="flex gap-4 overflow-x-auto pb-2 no-scrollbar">
          <div className="min-w-[120px] border-r border-[#31363c] pr-2">
            <div className="flex items-center gap-1 text-sm font-bold">
              <LuUsers size={16} /> 142
            </div>
            <div className="mt-1 text-xs text-[#90959c]">Profile views</div>
          </div>
          <div className="min-w-[120px]">
            <div className="flex items-center gap-1 text-sm font-bold">
              <span className="text-green-500">▲</span> 1.2k
            </div>
            <div className="mt-1 text-xs text-[#90959c]">Post impressions</div>
          </div>
        </div>
      </div>

      <div className="mb-8 bg-[#1b1f23] p-4">
        <div className="mb-2 flex items-center justify-between">
          <h3 className="text-base font-bold">About</h3>
          <LuEllipsis size={16} className="text-[#90959c]" />
        </div>
        <p className="text-sm leading-relaxed text-white/90">
          Passionate about creating intuitive user experiences. Currently exploring the intersection of AI and design. Always learning, always
          building.
        </p>
      </div>
    </div>

    <BottomNav />
  </div>
));

const FeedView = memo(() => (
  <div className="relative flex h-full w-full flex-col bg-[#000000] font-sans text-white">
    <div className="flex shrink-0 items-center gap-3 border-b border-[#31363c] bg-[#1b1f23] p-3">
      <div className="h-8 w-8 shrink-0 overflow-hidden rounded-full">
        <ProfileImage className="h-full w-full" />
      </div>
      <div className="flex h-8 flex-1 items-center gap-2 rounded bg-[#293038] px-3">
        <LuSearch size={16} className="text-[#90959c]" />
        <span className="text-sm font-medium text-[#90959c]">Search</span>
      </div>
      <LuMessageSquare size={24} className="text-[#90959c]" />
    </div>

    <div className="flex-1 overflow-y-auto bg-[#000000] no-scrollbar">
      <div className="mb-2 mt-2 bg-[#1b1f23] pb-1 pt-3">
        <div className="mb-2 flex gap-3 px-3">
          <div className="h-12 w-12 shrink-0">
            <ProfileImage className="h-full w-full rounded-full" />
          </div>
          <div className="min-w-0 flex-1">
            <div className="flex items-center justify-between">
              <div className="flex flex-col">
                <span className="cursor-pointer text-sm font-semibold hover:text-[#0a66c2]">Your Name</span>
                <span className="truncate text-xs text-[#90959c]">Job Title | Industry</span>
                <div className="flex items-center gap-1 text-xs text-[#90959c]">
                  <span>2h</span> • <span className="text-xs">🌐</span>
                </div>
              </div>
              <button className="flex items-center gap-1 text-sm font-semibold text-[#0a66c2]">
                <LuSquarePlus size={14} /> Follow
              </button>
            </div>
          </div>
        </div>

        <div className="mb-3 px-3">
          <p className="whitespace-pre-line text-sm leading-relaxed">
            Just updated my profile picture using this amazing new tool! 🎨 The precision cropping and real-time preview across different platforms is
            a game changer. #Design #Productivity #NewProfilePic
          </p>
        </div>

        <div className="mb-2 w-full bg-[#293038]">
          <PostImage containerClass="w-full bg-[#293038]" imageClass="block h-auto w-full" />
        </div>

        <div className="flex items-center justify-between border-b border-[#31363c] px-3 py-2 text-xs text-[#90959c]">
          <div className="flex items-center gap-1">
            <div className="-space-x-1 flex">
              <div className="flex h-4 w-4 items-center justify-center rounded-full border border-[#1b1f23] bg-[#0a66c2]">
                <LuThumbsUp size={8} className="text-white" />
              </div>
              <div className="flex h-4 w-4 items-center justify-center rounded-full border border-[#1b1f23] bg-red-500">
                <span className="text-[8px]">❤️</span>
              </div>
            </div>
            <span>84</span>
          </div>
          <div>
            <span>12 comments • 4 reposts</span>
          </div>
        </div>

        <div className="flex items-center justify-between px-2 py-1">
          <button className="flex flex-1 items-center justify-center gap-1.5 rounded px-2 py-3 text-[#c7cdd1] transition-colors hover:bg-[#31363c]">
            <LuThumbsUp size={18} />
            <span className="text-xs font-semibold">Like</span>
          </button>
          <button className="flex flex-1 items-center justify-center gap-1.5 rounded px-2 py-3 text-[#c7cdd1] transition-colors hover:bg-[#31363c]">
            <LuMessageSquare size={18} />
            <span className="text-xs font-semibold">Comment</span>
          </button>
          <button className="flex flex-1 items-center justify-center gap-1.5 rounded px-2 py-3 text-[#c7cdd1] transition-colors hover:bg-[#31363c]">
            <LuShare2 size={18} />
            <span className="text-xs font-semibold">Repost</span>
          </button>
          <button className="flex flex-1 items-center justify-center gap-1.5 rounded px-2 py-3 text-[#c7cdd1] transition-colors hover:bg-[#31363c]">
            <LuSend size={18} className="-mt-1 rotate-45" />
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
    <div className="relative h-full w-full">
      <div className="h-full w-full" style={{ display: isProfile ? 'block' : 'none' }}>
        <ProfileView />
      </div>
      <div className="h-full w-full" style={{ display: !isProfile ? 'block' : 'none' }}>
        <FeedView />
      </div>
    </div>
  );
};
