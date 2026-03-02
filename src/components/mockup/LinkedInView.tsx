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
import { PostImage, ProfileImage } from '../shared/Image';
import { Navigation } from '../shared/Navigation';
import { MockupContent, MockupScreen, PerspectiveSwitcher } from './MockupBase';

const BottomNav = () => (
  <Navigation className="border-t border-linkedin-border bg-linkedin-surface" safeAreaClassName="pb-6">
    <div className="flex h-[52px] items-center justify-between px-6">
      <div className="flex flex-col items-center gap-1 text-text-main">
        <LuHouse size={20} fill="currentColor" />
        <span className="text-[10px] font-medium">Home</span>
      </div>
      <div className="flex flex-col items-center gap-1 text-text-muted">
        <LuUsers size={20} />
        <span className="text-[10px] font-medium">Network</span>
      </div>
      <div className="flex flex-col items-center gap-1 text-text-muted">
        <LuSquarePlus size={20} />
        <span className="text-[10px] font-medium">Post</span>
      </div>
      <div className="flex flex-col items-center gap-1 text-text-muted">
        <LuBell size={20} />
        <span className="text-[10px] font-medium">Notifs</span>
      </div>
      <div className="flex flex-col items-center gap-1 text-text-muted">
        <LuBriefcase size={20} />
        <span className="text-[10px] font-medium">Jobs</span>
      </div>
    </div>
  </Navigation>
);

const ProfileView = memo(() => (
  <MockupScreen className="bg-linkedin-main text-text-main">
    <div className="flex shrink-0 items-center gap-3 border-b border-linkedin-border bg-linkedin-surface p-3">
      <div className="h-8 w-8 shrink-0 overflow-hidden rounded-full">
        <ProfileImage className="h-full w-full" />
      </div>
      <div className="flex h-8 flex-1 items-center gap-2 rounded bg-linkedin-input px-3">
        <LuSearch size={16} className="text-text-muted" />
        <span className="text-sm font-medium text-text-muted">Search</span>
      </div>
      <LuMessageSquare size={24} className="text-text-muted" />
    </div>

    <MockupContent>
      <div className="mb-2 bg-linkedin-surface pb-4">
        <div className="relative h-24 w-full bg-[#a0b4b7]">
          <div className="absolute inset-0 bg-gradient-to-r from-slate-600 to-slate-500"></div>
        </div>

        <div className="relative px-4">
          <div className="relative z-10 -mt-[50px] inline-block h-[100px] w-[100px] rounded-full bg-linkedin-surface p-1">
            <ProfileImage className="h-full w-full rounded-full" />
            <div className="pointer-events-none absolute inset-0 rounded-full border-4 border-linkedin-surface"></div>
          </div>

          <div className="absolute right-4 top-3 flex justify-end gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-full border border-white bg-linkedin-surface">
              <LuEllipsis size={16} />
            </div>
          </div>

          <div className="mt-2">
            <h1 className="text-xl font-bold leading-tight">Your Name</h1>
            <p className="mt-1 text-sm leading-snug text-text-main/90">Job Title | Industry Keyword 🚀</p>
            <div className="mt-2 flex items-center gap-1 text-xs text-text-muted">
              <span>Location</span>
              <span className="mx-1 h-1 w-1 rounded-full bg-text-muted"></span>
              <span className="font-semibold text-[#0a66c2]">Contact info</span>
            </div>
            <div className="mt-2 text-sm font-semibold text-linkedin-accent">500+ connections</div>
          </div>

          <div className="mt-4 flex gap-2">
            <button className="flex-1 rounded-full bg-linkedin-accent py-1.5 text-sm font-semibold text-text-main">Open to</button>
            <button className="flex-1 rounded-full border border-text-main py-1.5 text-sm font-semibold text-text-main">Add section</button>
          </div>
        </div>
      </div>

      <div className="mb-2 bg-linkedin-surface p-4">
        <h3 className="mb-1 text-base font-bold">Analytics</h3>
        <div className="mb-3 flex items-center gap-1 text-xs text-text-muted">
          <LuUsers size={12} />
          <span>Private to you</span>
        </div>
        <div className="flex gap-4 overflow-x-auto pb-2 no-scrollbar">
          <div className="min-w-[120px] border-r border-linkedin-border pr-2">
            <div className="flex items-center gap-1 text-sm font-bold">
              <LuUsers size={16} /> 142
            </div>
            <div className="mt-1 text-xs text-text-muted">Profile views</div>
          </div>
          <div className="min-w-[120px]">
            <div className="flex items-center gap-1 text-sm font-bold">
              <span className="text-green-500">▲</span> 1.2k
            </div>
            <div className="mt-1 text-xs text-text-muted">Post impressions</div>
          </div>
        </div>
      </div>

      <div className="mb-8 bg-linkedin-surface p-4">
        <div className="mb-2 flex items-center justify-between">
          <h3 className="text-base font-bold">About</h3>
          <LuEllipsis size={16} className="text-text-muted" />
        </div>
        <p className="text-sm leading-relaxed text-text-main/90">
          Passionate about creating intuitive user experiences. Currently exploring the intersection of AI and design. Always learning, always
          building.
        </p>
      </div>
    </MockupContent>

    <BottomNav />
  </MockupScreen>
));

const FeedView = memo(() => (
  <MockupScreen className="bg-linkedin-main text-text-main">
    <div className="flex shrink-0 items-center gap-3 border-b border-linkedin-border bg-linkedin-surface p-3">
      <div className="h-8 w-8 shrink-0 overflow-hidden rounded-full">
        <ProfileImage className="h-full w-full" />
      </div>
      <div className="flex h-8 flex-1 items-center gap-2 rounded bg-linkedin-input px-3">
        <LuSearch size={16} className="text-text-muted" />
        <span className="text-sm font-medium text-text-muted">Search</span>
      </div>
      <LuMessageSquare size={24} className="text-text-muted" />
    </div>

    <MockupContent className="bg-linkedin-main">
      <div className="mb-2 mt-2 bg-linkedin-surface pb-1 pt-3">
        <div className="mb-2 flex gap-3 px-3">
          <div className="h-12 w-12 shrink-0">
            <ProfileImage className="h-full w-full rounded-full" />
          </div>
          <div className="min-w-0 flex-1">
            <div className="flex items-center justify-between">
              <div className="flex flex-col">
                <span className="cursor-pointer text-sm font-semibold hover:text-linkedin-accent">Your Name</span>
                <span className="truncate text-xs text-text-muted">Job Title | Industry</span>
                <div className="flex items-center gap-1 text-xs text-text-muted">
                  <span>2h</span> • <span className="text-xs">🌐</span>
                </div>
              </div>
              <button className="flex items-center gap-1 text-sm font-semibold text-linkedin-accent">
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

        <div className="mb-2 w-full bg-linkedin-input">
          <PostImage containerClass="w-full bg-linkedin-input" imageClass="block h-auto w-full" />
        </div>

        <div className="flex items-center justify-between border-b border-linkedin-border px-3 py-2 text-xs text-text-muted">
          <div className="flex items-center gap-1">
            <div className="-space-x-1 flex">
              <div className="flex h-4 w-4 items-center justify-center rounded-full border border-linkedin-surface bg-linkedin-accent">
                <LuThumbsUp size={8} className="text-text-main" />
              </div>
              <div className="flex h-4 w-4 items-center justify-center rounded-full border border-linkedin-surface bg-red-500">
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
          <button className="flex flex-1 items-center justify-center gap-1.5 rounded px-2 py-3 text-slate-300 transition-colors hover:bg-linkedin-border">
            <LuThumbsUp size={18} />
            <span className="text-xs font-semibold">Like</span>
          </button>
          <button className="flex flex-1 items-center justify-center gap-1.5 rounded px-2 py-3 text-slate-300 transition-colors hover:bg-linkedin-border">
            <LuMessageSquare size={18} />
            <span className="text-xs font-semibold">Comment</span>
          </button>
          <button className="flex flex-1 items-center justify-center gap-1.5 rounded px-2 py-3 text-slate-300 transition-colors hover:bg-linkedin-border">
            <LuShare2 size={18} />
            <span className="text-xs font-semibold">Repost</span>
          </button>
          <button className="flex flex-1 items-center justify-center gap-1.5 rounded px-2 py-3 text-slate-300 transition-colors hover:bg-linkedin-border">
            <LuSend size={18} className="-mt-1 rotate-45" />
            <span className="text-xs font-semibold">Send</span>
          </button>
        </div>
      </div>
    </MockupContent>

    <BottomNav />
  </MockupScreen>
));

export const LinkedInView = memo(() => (
  <PerspectiveSwitcher
    screens={{
      [Perspective.Profile]: <ProfileView />,
      [Perspective.Feed]: <FeedView />,
    }}
  />
));
