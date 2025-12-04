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
import { CroppedPreview } from '../CroppedPreview';
import { PostImage } from './Shared';

const isDark = true;
const bg = isDark ? 'bg-black' : 'bg-white';
const text = isDark ? 'text-white' : 'text-black';
const border = isDark ? 'border-gray-800' : 'border-gray-200';

const BottomNav = () => (
  <div className={`h-[50px] ${bg} border-t ${border} flex items-center justify-between px-6 shrink-0 z-50`}>
    <LuHouse size={24} className={text} />
    <LuSearch size={24} className={text} />
    <LuSquarePlus size={24} className={text} />
    <LuClapperboard size={24} className={text} />
    <div className="w-6 h-6 rounded-full overflow-hidden ring-1 ring-gray-700">
      <CroppedPreview size={24} />
    </div>
  </div>
);

const StoryView = memo(() => (
  <div className="w-full h-full bg-gradient-to-tr from-indigo-900 via-purple-900 to-orange-900 relative flex flex-col">
    <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-black/60 to-transparent z-10 pointer-events-none"></div>
    <div className="absolute top-0 left-0 w-full h-1 flex gap-1 px-1 mt-2 z-20">
      <div className="h-full bg-white flex-1 rounded-full shadow-[0_0_2px_rgba(0,0,0,0.5)]"></div>
      <div className="h-full bg-white/30 flex-1 rounded-full shadow-[0_0_2px_rgba(0,0,0,0.5)]"></div>
    </div>

    <div className="p-4 mt-4 flex items-center justify-between z-20">
      <div className="flex items-center gap-2">
        <CroppedPreview size={32} className="rounded-full border border-white/20" />
        <span className="text-white text-sm font-semibold text-shadow">username</span>
        <span className="text-gray-300 text-xs">3h</span>
      </div>
      <LuEllipsisVertical className="text-white" size={20} />
    </div>

    <div className="absolute inset-0 flex items-center justify-center">
      <CroppedPreview size={400} className="w-full h-full object-cover" />
    </div>

    <div className="mt-auto p-4 z-20 flex items-center gap-3">
      <div className="flex-1 h-10 rounded-full border border-white/30 flex items-center px-4">
        <span className="text-white/70 text-sm">Send message</span>
      </div>
      <LuHeart className="text-white" size={24} />
      <LuSend className="text-white" size={24} />
    </div>
  </div>
));

const FeedView = memo(() => (
  <div className={`w-full h-full ${bg} ${text} font-sans flex flex-col`}>
    <div className={`h-12 flex items-center justify-between px-4 shrink-0 border-b ${border}`}>
      <div className="font-bold text-xl tracking-tight italic">Instagram</div>
      <div className="flex gap-5">
        <LuHeart size={24} />
        <LuMessageCircle size={24} />
      </div>
    </div>

    <div className="flex-1 overflow-y-auto no-scrollbar">
      <div className={`flex gap-4 px-4 py-2 border-b ${border} overflow-x-auto no-scrollbar mb-2`}>
        <div className="flex flex-col items-center gap-1 min-w-[64px]">
          <div className="p-[2px] rounded-full bg-gradient-to-tr from-yellow-400 via-red-500 to-purple-500 relative">
            <div className={`${bg} p-[2px] rounded-full`}>
              <CroppedPreview size={56} className="rounded-full" />
            </div>
            <div className="absolute bottom-0 right-0 bg-blue-500 rounded-full p-0.5 border-2 border-black">
              <LuSquarePlus size={10} className="text-white" />
            </div>
          </div>
          <span className="text-xs text-center truncate w-full text-gray-400">Your story</span>
        </div>
        {[1, 2, 3, 4].map((i) => (
          <div key={i} className="flex flex-col items-center gap-1 min-w-[64px]">
            <div className="p-[2px] rounded-full bg-gradient-to-tr from-yellow-400 via-red-500 to-purple-500">
              <div className={`${bg} p-[2px] rounded-full`}>
                <div className="w-14 h-14 rounded-full bg-gray-800" />
              </div>
            </div>
            <span className="text-xs text-center truncate w-full">user_{i}</span>
          </div>
        ))}
      </div>

      <div className="pb-4">
        <div className="flex items-center justify-between p-3">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full overflow-hidden ring-1 ring-gray-800">
              <CroppedPreview size={32} />
            </div>
            <span className="font-semibold text-sm">username</span>
          </div>
          <LuEllipsis size={20} />
        </div>

        <div className="w-full bg-gray-900 flex items-center justify-center overflow-hidden">
          <PostImage
            containerClass="w-full aspect-square flex items-center justify-center text-gray-700 bg-gray-900"
            imageClass="w-full h-auto object-contain max-h-[400px]"
          />
        </div>

        <div className="p-3">
          <div className="flex justify-between mb-3">
            <div className="flex gap-4">
              <LuHeart size={24} />
              <LuMessageCircle size={24} className="-rotate-90" />
              <LuSend size={24} />
            </div>
            <LuBookmark size={24} />
          </div>
          <div className="font-semibold text-sm mb-1">2,453 likes</div>
          <div className="text-sm">
            <span className="font-semibold mr-2">username</span>
            <span className="text-gray-100">Exploring the new aesthetic. 📸 #2025 #design</span>
          </div>
          <div className="text-gray-500 text-sm mt-1 cursor-pointer">View all 12 comments</div>
          <div className="text-gray-500 text-[10px] mt-1 uppercase tracking-wide">2 hours ago</div>
        </div>
      </div>
    </div>

    <BottomNav />
  </div>
));

const ProfileView = memo(() => (
  <div className={`w-full h-full ${bg} ${text} font-sans flex flex-col`}>
    <div className={`h-12 flex items-center justify-between px-4 border-b ${border} shrink-0`}>
      <span className="font-bold text-lg">username</span>
      <div className="flex gap-4">
        <LuSquarePlus size={24} />
        <LuEllipsis size={24} />
      </div>
    </div>

    <div className="flex-1 overflow-y-auto no-scrollbar">
      <div className="p-4">
        <div className="flex items-center justify-between mb-4">
          <div className="p-[2px] rounded-full bg-gradient-to-tr from-yellow-400 via-red-500 to-purple-500">
            <div className={`${bg} p-[2px] rounded-full`}>
              <CroppedPreview size={80} className="rounded-full" />
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
        <div className="flex gap-2 mt-4">
          <button className="flex-1 bg-slate-800 py-1.5 rounded-lg text-sm font-semibold">Edit profile</button>
          <button className="flex-1 bg-slate-800 py-1.5 rounded-lg text-sm font-semibold">Share profile</button>
        </div>
      </div>
      <div className="flex gap-4 px-4 overflow-x-auto no-scrollbar pb-2">
        {[1, 2, 3].map((i) => (
          <div key={i} className="flex flex-col items-center gap-1 min-w-[64px]">
            <div className="w-16 h-16 rounded-full bg-slate-800 border border-slate-700"></div>
            <span className="text-xs">Highlight {i}</span>
          </div>
        ))}
      </div>
      <div className="mt-2 border-t border-slate-800">
        <div className="grid grid-cols-3 gap-0.5">
          {[...Array(9)].map((_, i) => (
            <div key={i} className="aspect-square bg-slate-900 hover:bg-slate-800 transition-colors"></div>
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
    <div className="w-full h-full relative">
      <div className="w-full h-full" style={{ display: perspective === Perspective.Story ? 'block' : 'none' }}>
        <StoryView />
      </div>
      <div className="w-full h-full" style={{ display: perspective === Perspective.Feed ? 'block' : 'none' }}>
        <FeedView />
      </div>
      <div className="w-full h-full" style={{ display: perspective === Perspective.Profile ? 'block' : 'none' }}>
        <ProfileView />
      </div>
    </div>
  );
};
