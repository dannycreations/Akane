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
import { useStore } from '../../stores/useStore';
import { PostImage, ProfileImage } from '../shared/Image';
import { Navigation } from '../shared/Navigation';

const isDark = true;
const bg = isDark ? 'bg-black' : 'bg-white';
const text = isDark ? 'text-white' : 'text-black';
const border = isDark ? 'border-gray-800' : 'border-gray-200';

const BottomNav = () => (
  <Navigation className={`${bg} border-t ${border}`} safeAreaClassName="pb-5">
    <div className="flex h-[50px] items-center justify-between px-6">
      <LuHouse size={24} className={text} />
      <LuSearch size={24} className={text} />
      <LuSquarePlus size={24} className={text} />
      <LuClapperboard size={24} className={text} />
      <div className="h-6 w-6 overflow-hidden rounded-full ring-1 ring-gray-700">
        <ProfileImage className="h-full w-full" />
      </div>
    </div>
  </Navigation>
);

const StoryView = memo(() => (
  <div className="relative flex h-full w-full flex-col bg-gradient-to-tr from-indigo-900 via-purple-900 to-orange-900">
    <div className="pointer-events-none absolute left-0 top-0 z-10 h-32 w-full bg-gradient-to-b from-black/60 to-transparent"></div>
    <div className="absolute left-0 top-0 z-20 mt-2 flex h-1 w-full gap-1 px-1">
      <div className="h-full flex-1 rounded-full bg-white shadow-[0_0_2px_rgba(0,0,0,0.5)]"></div>
      <div className="h-full flex-1 rounded-full bg-white/30 shadow-[0_0_2px_rgba(0,0,0,0.5)]"></div>
    </div>

    <div className="z-20 mt-4 flex items-center justify-between p-4">
      <div className="flex items-center gap-2">
        <div className="h-8 w-8 overflow-hidden rounded-full border border-white/20">
          <ProfileImage className="h-full w-full" />
        </div>
        <span className="text-sm font-semibold text-white text-shadow">username</span>
        <span className="text-xs text-gray-300">3h</span>
      </div>
      <LuEllipsisVertical className="text-white" size={20} />
    </div>

    <div className="absolute inset-0 flex items-center justify-center">
      <PostImage containerClass="h-full w-full" imageClass="h-full w-full object-cover" />
    </div>

    <div className="z-20 mt-auto flex items-center gap-3 p-4">
      <div className="flex h-10 flex-1 items-center rounded-full border border-white/30 px-4">
        <span className="text-sm text-white/70">Send message</span>
      </div>
      <LuHeart className="text-white" size={24} />
      <LuSend className="text-white" size={24} />
    </div>
  </div>
));

const FeedView = memo(() => (
  <div className={`flex h-full w-full flex-col font-sans ${bg} ${text}`}>
    <div className={`flex h-12 shrink-0 items-center justify-between border-b px-4 ${border}`}>
      <div className="text-xl font-bold tracking-tight italic">Instagram</div>
      <div className="flex gap-5">
        <LuHeart size={24} />
        <LuMessageCircle size={24} />
      </div>
    </div>

    <div className="flex-1 overflow-y-auto no-scrollbar">
      <div className={`mb-2 flex gap-4 overflow-x-auto border-b px-4 py-2 no-scrollbar ${border}`}>
        <div className="flex min-w-[64px] flex-col items-center gap-1">
          <div className="relative rounded-full bg-gradient-to-tr from-yellow-400 via-red-500 to-purple-500 p-[2px]">
            <div className={`h-14 w-14 rounded-full p-[2px] ${bg}`}>
              <ProfileImage className="h-full w-full rounded-full" />
            </div>
            <div className="absolute bottom-0 right-0 rounded-full border-2 border-black bg-blue-500 p-0.5">
              <LuSquarePlus size={10} className="text-white" />
            </div>
          </div>
          <span className="w-full truncate text-center text-xs text-gray-400">Your story</span>
        </div>
        {[1, 2, 3, 4].map((i) => (
          <div key={i} className="flex min-w-[64px] flex-col items-center gap-1">
            <div className="rounded-full bg-gradient-to-tr from-yellow-400 via-red-500 to-purple-500 p-[2px]">
              <div className={`rounded-full p-[2px] ${bg}`}>
                <div className="h-14 w-14 rounded-full bg-gray-800" />
              </div>
            </div>
            <span className="w-full truncate text-center text-xs">user_{i}</span>
          </div>
        ))}
      </div>

      <div className="pb-4">
        <div className="flex items-center justify-between p-3">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 overflow-hidden rounded-full ring-1 ring-gray-800">
              <ProfileImage className="h-full w-full" />
            </div>
            <span className="text-sm font-semibold">username</span>
          </div>
          <LuEllipsis size={20} />
        </div>

        <div className="w-full bg-gray-900">
          <PostImage containerClass="min-h-[200px] w-full bg-gray-900" imageClass="block h-auto w-full" />
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
            <span className="text-gray-100">Exploring the new aesthetic. 📸 #2025 #design</span>
          </div>
          <div className="mt-1 cursor-pointer text-sm text-gray-500">View all 12 comments</div>
          <div className="mt-1 text-[10px] uppercase tracking-wide text-gray-500">2 hours ago</div>
        </div>
      </div>
    </div>

    <BottomNav />
  </div>
));

const ProfileView = memo(() => (
  <div className={`flex h-full w-full flex-col font-sans ${bg} ${text}`}>
    <div className={`flex h-12 shrink-0 items-center justify-between border-b px-4 ${border}`}>
      <span className="text-lg font-bold">username</span>
      <div className="flex gap-4">
        <LuSquarePlus size={24} />
        <LuEllipsis size={24} />
      </div>
    </div>

    <div className="flex-1 overflow-y-auto no-scrollbar">
      <div className="p-4">
        <div className="mb-4 flex items-center justify-between">
          <div className="rounded-full bg-gradient-to-tr from-yellow-400 via-red-500 to-purple-500 p-[2px]">
            <div className={`h-[88px] w-[88px] rounded-full p-[2px] ${bg}`}>
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
          <div className="font-bold">Your Name | Category</div>
          <div className="text-sm">📍 City</div>
          <div className="text-sm">🎨 Artist & Developer</div>
          <div className="text-sm text-blue-400">linktr.ee/username</div>
        </div>
        <div className="mt-4 flex gap-2">
          <button className="flex-1 rounded-lg bg-slate-800 py-1.5 text-sm font-semibold">Edit profile</button>
          <button className="flex-1 rounded-lg bg-slate-800 py-1.5 text-sm font-semibold">Share profile</button>
        </div>
      </div>
      <div className="flex gap-4 overflow-x-auto px-4 pb-2 no-scrollbar">
        {[1, 2, 3].map((i) => (
          <div key={i} className="flex min-w-[64px] flex-col items-center gap-1">
            <div className="h-16 w-16 rounded-full border border-slate-700 bg-slate-800"></div>
            <span className="text-xs">Highlight {i}</span>
          </div>
        ))}
      </div>
      <div className="mt-2 border-t border-slate-800">
        <div className="grid grid-cols-3 gap-0.5">
          {[...Array(9)].map((_, i) => (
            <div key={i} className="aspect-square bg-slate-900 transition-colors hover:bg-slate-800"></div>
          ))}
        </div>
      </div>
    </div>

    <BottomNav />
  </div>
));

export const InstagramView = () => {
  const perspective = useStore((state) => state.perspective);

  return (
    <div className="relative h-full w-full">
      <div className="h-full w-full" style={{ display: perspective === Perspective.Story ? 'block' : 'none' }}>
        <StoryView />
      </div>
      <div className="h-full w-full" style={{ display: perspective === Perspective.Feed ? 'block' : 'none' }}>
        <FeedView />
      </div>
      <div className="h-full w-full" style={{ display: perspective === Perspective.Profile ? 'block' : 'none' }}>
        <ProfileView />
      </div>
    </div>
  );
};
