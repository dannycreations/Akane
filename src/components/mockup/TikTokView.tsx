import { memo } from 'react';
import {
  LuBookmark,
  LuHeart,
  LuHouse,
  LuLayoutGrid,
  LuLock,
  LuMenu,
  LuMessageCircle,
  LuMessageSquare,
  LuMusic,
  LuPlay,
  LuPlus,
  LuSearch,
  LuShare2,
  LuUser,
} from 'react-icons/lu';

import { Perspective } from '../../app/constants';
import { useStore } from '../../stores/useStore';
import { PostImage, ProfileImage } from '../shared/Image';
import { Navigation } from '../shared/Navigation';

const BottomNav = ({ active = 'home' }: { active?: string }) => (
  <Navigation className="border-t border-white/10 bg-black" safeAreaClassName="pb-6">
    <div className="flex h-[50px] items-center justify-between px-4 text-[10px] font-medium text-gray-400">
      <div className={`flex cursor-pointer flex-col items-center gap-1 ${active === 'home' ? 'text-white' : ''}`}>
        <LuHouse size={22} strokeWidth={active === 'home' ? 3 : 2} />
        <span>Home</span>
      </div>
      <div className="flex cursor-pointer flex-col items-center gap-1 transition-colors hover:text-white">
        <div className="relative">
          <LuSearch size={22} />
          <div className="absolute right-0 top-0 h-2 w-2 rounded-full border border-black bg-[#fe2c55]"></div>
        </div>
        <span>Shop</span>
      </div>
      <div className="flex cursor-pointer flex-col items-center justify-center px-2 transition-opacity hover:opacity-90">
        <div className="relative flex h-[30px] w-[45px] items-center justify-center">
          <div className="absolute bottom-0 left-0 top-0 w-[80%] rounded-lg bg-[#25f4ee]"></div>
          <div className="absolute bottom-0 right-0 top-0 w-[80%] rounded-lg bg-[#fe2c55]"></div>
          <div className="absolute bottom-0 left-[2px] right-[2px] top-0 flex items-center justify-center rounded-lg bg-white">
            <LuPlus size={20} className="text-black" strokeWidth={3} />
          </div>
        </div>
      </div>
      <div className="flex cursor-pointer flex-col items-center gap-1 transition-colors hover:text-white">
        <LuMessageSquare size={22} />
        <span>Inbox</span>
      </div>
      <div className={`flex cursor-pointer flex-col items-center gap-1 ${active === 'profile' ? 'text-white' : ''}`}>
        <LuUser size={22} strokeWidth={active === 'profile' ? 3 : 2} />
        <span>Profile</span>
      </div>
    </div>
  </Navigation>
);

const ProfileView = memo(() => (
  <div className="relative flex h-full w-full flex-col overflow-hidden bg-black font-sans text-white">
    <div className="z-20 flex h-12 shrink-0 items-center justify-between px-4">
      <div className="w-6"></div>
      <div className="flex cursor-pointer items-center gap-1 text-base font-bold">
        <span>Your Name</span>
        <span className="h-2 w-2 rounded-full border border-black bg-yellow-400"></span>
      </div>
      <LuMenu size={24} />
    </div>

    <div className="flex-1 overflow-y-auto no-scrollbar">
      <div className="flex flex-col items-center pb-2 pt-4">
        <div className="relative mb-3">
          <div className="h-24 w-24 overflow-hidden rounded-full border border-white/10">
            <ProfileImage className="h-full w-full" />
          </div>
          <div className="absolute bottom-0 right-0 flex h-6 w-6 items-center justify-center rounded-full border-2 border-black bg-[#25f4ee] text-black">
            <LuPlus size={14} strokeWidth={4} />
          </div>
        </div>

        <div className="mb-4 text-center">
          <div className="text-sm font-semibold">@username</div>
          <div className="mt-4 flex items-center justify-center gap-6 text-center">
            <div className="flex flex-col items-center">
              <span className="text-lg font-bold leading-none">142</span>
              <span className="text-xs text-gray-400">Following</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-lg font-bold leading-none">42.5K</span>
              <span className="text-xs text-gray-400">Followers</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-lg font-bold leading-none">1.2M</span>
              <span className="text-xs text-gray-400">Likes</span>
            </div>
          </div>
        </div>

        <div className="mb-4 flex w-full gap-2 px-12">
          <button className="flex-1 rounded-lg bg-[#333] py-3 text-sm font-semibold">Edit profile</button>
          <button className="flex-1 rounded-lg bg-[#333] py-3 text-sm font-semibold">Share profile</button>
        </div>

        <div className="mb-4 px-8 text-center text-sm leading-snug">
          Digital Creator 🎨 <br />
          Trying out new aesthetics.
        </div>
      </div>

      <div className="flex items-center border-b border-white/10 text-gray-500">
        <div className="flex h-11 flex-1 cursor-pointer items-center justify-center border-b-2 border-white text-white">
          <LuLayoutGrid size={20} />
        </div>
        <div className="flex h-11 flex-1 cursor-pointer items-center justify-center transition-colors hover:text-white">
          <LuLock size={20} />
        </div>
        <div className="flex h-11 flex-1 cursor-pointer items-center justify-center transition-colors hover:text-white">
          <LuBookmark size={20} />
        </div>
        <div className="flex h-11 flex-1 cursor-pointer items-center justify-center transition-colors hover:text-white">
          <LuHeart size={20} />
        </div>
      </div>

      <div className="grid grid-cols-3 gap-0.5">
        <div className="group relative aspect-[3/4] overflow-hidden bg-[#222]">
          <div className="absolute left-1 top-1 rounded bg-[#fe2c55] px-1.5 py-0.5 text-[10px] font-bold text-white">Pinned</div>
          <PostImage
            containerClass="flex h-full w-full items-center justify-center bg-[#1a1a1a]"
            imageClass="h-full w-full object-cover opacity-80"
          />
          <div className="absolute bottom-1 left-1 flex items-center gap-1 text-xs font-semibold text-white drop-shadow">
            <LuHeart size={10} fill="white" /> 14.2K
          </div>
        </div>
        {[...Array(8)].map((_, i) => (
          <div key={i} className="relative aspect-[3/4] bg-[#1a1a1a]">
            <div className="absolute bottom-1 left-1 flex items-center gap-1 text-xs font-semibold text-white drop-shadow">
              <LuPlay size={10} strokeWidth={2.5} />
              {(Math.random() * 50).toFixed(1)}K
            </div>
          </div>
        ))}
      </div>
      <div className="h-16"></div>
    </div>

    <BottomNav active="profile" />
  </div>
));

const FeedView = memo(() => (
  <div className="relative flex h-full w-full flex-col justify-end overflow-hidden bg-black font-sans text-white">
    <div className="absolute inset-0 z-0 bg-[#111]">
      <PostImage containerClass="flex h-full w-full items-center justify-center" imageClass="h-full w-full object-cover opacity-60" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/60"></div>
    </div>

    <div className="absolute left-0 right-0 top-0 z-20 flex h-16 items-center justify-center pt-2 text-[15px] font-bold drop-shadow-md">
      <span className="mr-4 cursor-pointer text-white/60 transition-colors hover:text-white">Friends</span>
      <span className="relative mr-4 cursor-pointer text-white">
        Following
        <div className="absolute -right-2 top-0 h-1.5 w-1.5 rounded-full bg-[#fe2c55]"></div>
      </span>
      <span className="relative cursor-pointer text-white after:absolute after:-bottom-2 after:left-1/2 after:h-0.5 after:w-8 after:-translate-x-1/2 after:rounded-full after:bg-white after:content-['']">
        For You
      </span>
      <div className="absolute right-4 top-1/2 -translate-y-1/2 pt-2">
        <LuSearch size={24} className="text-white" />
      </div>
    </div>

    <div className="absolute bottom-20 right-2 z-20 flex flex-col items-center gap-5 pb-4">
      <div className="relative mb-2">
        <div className="h-12 w-12 overflow-hidden rounded-full border border-white shadow-sm">
          <ProfileImage className="h-full w-full" />
        </div>
        <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 rounded-full bg-[#fe2c55] p-0.5">
          <LuPlus size={12} className="text-white" strokeWidth={4} />
        </div>
      </div>

      <div className="flex cursor-pointer flex-col items-center gap-1">
        <LuHeart size={32} fill="white" className="text-[#fe2c55] drop-shadow-sm transition-transform active:scale-75" />
        <span className="text-xs font-bold drop-shadow-md">428.5K</span>
      </div>

      <div className="flex cursor-pointer flex-col items-center gap-1">
        <LuMessageCircle size={32} fill="white" className="text-white drop-shadow-sm" />
        <span className="text-xs font-bold drop-shadow-md">1,024</span>
      </div>

      <div className="flex cursor-pointer flex-col items-center gap-1">
        <LuBookmark size={32} fill="white" className="text-white drop-shadow-sm" />
        <span className="text-xs font-bold drop-shadow-md">42.1K</span>
      </div>

      <div className="flex cursor-pointer flex-col items-center gap-1">
        <LuShare2 size={32} fill="white" className="text-white drop-shadow-sm" />
        <span className="text-xs font-bold drop-shadow-md">8,492</span>
      </div>

      <div className="relative mt-4 flex h-10 w-10 animate-[spin_5s_linear_infinite] items-center justify-center overflow-hidden rounded-full bg-black border-[6px] border-[#222]">
        <ProfileImage className="h-full w-full" />
      </div>
    </div>

    <div className="text-shadow-sm absolute bottom-[50px] left-0 right-16 z-20 flex flex-col items-start px-4 pb-4">
      <div className="mb-1 cursor-pointer text-[17px] font-bold hover:underline">@username</div>
      <div className="mb-2 line-clamp-2 text-[15px] leading-snug">
        POV: You finally found the perfect profile picture tool. 📸 ✨ <span className="font-bold">#design #pfp #2025</span>
      </div>
      <div className="flex w-full items-center gap-2 text-[15px] font-medium">
        <div className="flex items-center gap-2 rounded-full bg-white/20 px-3 py-1 backdrop-blur-sm">
          <LuMusic size={14} />
          <div className="relative h-5 w-24 overflow-hidden">
            <span className="absolute animate-[marquee_5s_linear_infinite] whitespace-nowrap">Original Sound - Your Name</span>
          </div>
        </div>
      </div>
    </div>

    <BottomNav active="home" />
  </div>
));

export const TikTokView = () => {
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
