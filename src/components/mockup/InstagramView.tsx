import { clsx } from 'clsx';
import { memo } from 'react';
import {
  LuBookmark,
  LuClapperboard,
  LuEllipsis,
  LuEllipsisVertical,
  LuHeart,
  LuHouse,
  LuMessageCircle,
  LuSearch,
  LuSend,
  LuSquarePlus,
} from 'react-icons/lu';

import { Perspective } from '../../app/constants';
import { PostImage, ProfileImage } from '../shared/Image';
import { Navigation } from '../shared/Navigation';
import { MockupContent, MockupScreen, PerspectiveSwitcher } from './MockupBase';

const bg = 'bg-instagram-main';
const text = 'text-text-main';
const border = 'border-instagram-border';

const STORY_USER_IDS = [1, 2, 3, 4];
const HIGHLIGHT_IDS = [1, 2, 3];
const GRID_ITEMS = Array.from({ length: 9 });

const BottomNav = () => (
  <Navigation className={clsx(bg, 'border-t', border)} safeAreaClassName="pb-5">
    <div className="flex h-[50px] items-center justify-between px-6">
      <LuHouse size={24} className={text} />
      <LuSearch size={24} className={text} />
      <LuSquarePlus size={24} className={text} />
      <LuClapperboard size={24} className={text} />
      <div className="h-6 w-6 overflow-hidden rounded-full ring-1 ring-border-subtle">
        <ProfileImage className="h-full w-full" />
      </div>
    </div>
  </Navigation>
);

const StoryView = memo(() => (
  <MockupScreen className="bg-gradient-to-tr from-indigo-900 via-purple-900 to-orange-900">
    <div className="pointer-events-none absolute left-0 top-0 z-10 h-32 w-full bg-gradient-to-b from-black/60 to-transparent"></div>
    <div className="absolute left-0 top-0 z-20 mt-2 flex h-1 w-full gap-1 px-1">
      <div className="h-full flex-1 rounded-full bg-text-main shadow-[0_0_2px_rgba(0,0,0,0.5)]"></div>
      <div className="h-full flex-1 rounded-full bg-white/30 shadow-[0_0_2px_rgba(0,0,0,0.5)]"></div>
    </div>

    <div className="z-20 mt-4 flex items-center justify-between p-4">
      <div className="flex items-center gap-2">
        <div className="h-8 w-8 overflow-hidden rounded-full border border-white/20">
          <ProfileImage className="h-full w-full" />
        </div>
        <span className="text-sm font-semibold text-text-main text-shadow">username</span>
        <span className="text-xs text-text-muted">3h</span>
      </div>
      <LuEllipsisVertical className="text-text-main" size={20} />
    </div>

    <div className="absolute inset-0 flex items-center justify-center">
      <PostImage containerClass="h-full w-full" imageClass="h-full w-full object-cover" />
    </div>

    <Navigation className="z-20 mt-auto" safeAreaClassName="pb-6">
      <div className="flex items-center gap-3 px-4 pt-2">
        <div className="flex h-10 flex-1 items-center rounded-full border border-white/30 px-4">
          <span className="text-sm text-white/70">Send message</span>
        </div>
        <LuHeart className="text-text-main" size={24} />
        <LuSend className="text-text-main" size={24} />
      </div>
    </Navigation>
  </MockupScreen>
));

const FeedView = memo(() => (
  <MockupScreen className={clsx(bg, text)}>
    <div className={clsx('flex h-12 shrink-0 items-center justify-between border-b px-4', border)}>
      <div className="text-xl font-bold tracking-tight italic">Instagram</div>
      <div className="flex gap-5">
        <LuHeart size={24} />
        <LuMessageCircle size={24} />
      </div>
    </div>

    <MockupContent>
      <div className={clsx('mb-2 flex gap-4 overflow-x-auto border-b px-4 py-2 no-scrollbar', border)}>
        <div className="flex min-w-[64px] flex-col items-center gap-1">
          <div className="relative rounded-full bg-gradient-to-tr from-yellow-400 via-red-500 to-purple-500 p-[2px]">
            <div className={clsx('h-14 w-14 rounded-full p-[2px]', bg)}>
              <ProfileImage className="h-full w-full rounded-full" />
            </div>
            <div className="absolute bottom-0 right-0 rounded-full border-2 border-instagram-main bg-facebook-accent p-0.5">
              <LuSquarePlus size={10} className="text-text-main" />
            </div>
          </div>
          <span className="w-full truncate text-center text-xs text-text-muted">Your story</span>
        </div>
        {STORY_USER_IDS.map((i) => (
          <div key={i} className="flex min-w-[64px] flex-col items-center gap-1">
            <div className="rounded-full bg-gradient-to-tr from-yellow-400 via-red-500 to-purple-500 p-[2px]">
              <div className={clsx('rounded-full p-[2px]', bg)}>
                <div className="h-14 w-14 rounded-full bg-surface-elevated" />
              </div>
            </div>
            <span className="w-full truncate text-center text-xs">user_{i}</span>
          </div>
        ))}
      </div>

      <div className="pb-4">
        <div className="flex items-center justify-between p-3">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 overflow-hidden rounded-full ring-1 ring-instagram-border">
              <ProfileImage className="h-full w-full" />
            </div>
            <span className="text-sm font-semibold">username</span>
          </div>
          <LuEllipsis size={20} />
        </div>

        <div className="w-full bg-bg-darker">
          <PostImage containerClass="min-h-[200px] w-full bg-bg-darker" imageClass="block h-auto w-full" />
        </div>

        <div className="p-3">
          <div className="mb-3 flex justify-between">
            <div className="flex gap-4">
              <LuHeart size={24} />
              <LuMessageCircle size={24} className="-rotate-90" />
              <LuSend size={24} />
            </div>
            <LuBookmark size={24} />
          </div>
          <div className="mb-1 text-sm font-semibold">2,453 likes</div>
          <div className="text-sm">
            <span className="mr-2 font-semibold">username</span>
            <span className="text-text-main">Exploring the new aesthetic. 📸 #2025 #design</span>
          </div>
          <div className="mt-1 cursor-pointer text-sm text-text-muted">View all 12 comments</div>
          <div className="mt-1 text-[10px] uppercase tracking-wide text-text-muted">2 hours ago</div>
        </div>
      </div>
    </MockupContent>

    <BottomNav />
  </MockupScreen>
));

const ProfileView = memo(() => (
  <MockupScreen className={clsx(bg, text)}>
    <div className={clsx('flex h-12 shrink-0 items-center justify-between border-b px-4', border)}>
      <span className="text-lg font-bold">username</span>
      <div className="flex gap-4">
        <LuSquarePlus size={24} />
        <LuEllipsis size={24} />
      </div>
    </div>

    <MockupContent>
      <div className="p-4">
        <div className="mb-4 flex items-center justify-between">
          <div className="rounded-full bg-gradient-to-tr from-yellow-400 via-red-500 to-purple-500 p-[2px]">
            <div className={clsx('h-[88px] w-[88px] rounded-full p-[2px]', bg)}>
              <ProfileImage className="h-full w-full rounded-full" />
            </div>
          </div>
          <div className="flex gap-6 text-center">
            <div>
              <div className="font-bold">125</div>
              <div className="text-xs">Posts</div>
            </div>
            <div>
              <div className="font-bold">8.5k</div>
              <div className="text-xs">Followers</div>
            </div>
            <div>
              <div className="font-bold">420</div>
              <div className="text-xs">Following</div>
            </div>
          </div>
        </div>
        <div className="space-y-1">
          <div className="font-bold text-text-main">Your Name | Category</div>
          <div className="text-sm">📍 City</div>
          <div className="text-sm">🎨 Artist & Developer</div>
          <div className="text-sm text-blue-400">linktr.ee/username</div>
        </div>
        <div className="mt-4 flex gap-2">
          <button className="flex-1 rounded-lg bg-surface-elevated py-1.5 text-sm font-semibold">Edit profile</button>
          <button className="flex-1 rounded-lg bg-surface-elevated py-1.5 text-sm font-semibold">Share profile</button>
        </div>
      </div>
      <div className="flex gap-4 overflow-x-auto px-4 pb-2 no-scrollbar">
        {HIGHLIGHT_IDS.map((i) => (
          <div key={i} className="flex min-w-[64px] flex-col items-center gap-1">
            <div className="h-16 w-16 rounded-full border border-border-subtle bg-surface-elevated"></div>
            <span className="text-xs">Highlight {i}</span>
          </div>
        ))}
      </div>
      <div className="mt-2 border-t border-border-subtle">
        <div className="grid grid-cols-3 gap-0.5">
          {GRID_ITEMS.map((_, i) => (
            <div key={i} className="aspect-square bg-bg-darker transition-colors hover:bg-surface-elevated"></div>
          ))}
        </div>
      </div>
    </MockupContent>

    <BottomNav />
  </MockupScreen>
));

export const InstagramView = memo(() => (
  <PerspectiveSwitcher
    screens={{
      [Perspective.Story]: <StoryView />,
      [Perspective.Feed]: <FeedView />,
      [Perspective.Profile]: <ProfileView />,
    }}
  />
));
