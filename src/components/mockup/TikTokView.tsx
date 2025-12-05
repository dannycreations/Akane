import { memo } from 'react';
import {
  LuBookmark,
  LuHeart,
  LuHouse,
  LuLock,
  LuMenu,
  LuMessageCircle,
  LuMessageSquare,
  LuMusic,
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
  <Navigation className="bg-black border-t border-white/10" safeAreaClassName="pb-6">
    <div className="h-[50px] flex items-center justify-between px-4 text-[10px] font-medium text-gray-400">
      <div className={`flex flex-col items-center gap-1 cursor-pointer ${active === 'home' ? 'text-white' : ''}`}>
        <LuHouse size={22} strokeWidth={active === 'home' ? 3 : 2} />
        <span>Home</span>
      </div>
      <div className="flex flex-col items-center gap-1 cursor-pointer hover:text-white transition-colors">
        <div className="relative">
          <LuSearch size={22} />
          <div className="absolute top-0 right-0 w-2 h-2 bg-[#fe2c55] rounded-full border border-black"></div>
        </div>
        <span>Shop</span>
      </div>
      <div className="flex flex-col items-center justify-center cursor-pointer hover:opacity-90 transition-opacity px-2">
        <div className="w-[45px] h-[30px] relative flex items-center justify-center">
          <div className="absolute left-0 top-0 bottom-0 w-[80%] bg-[#25f4ee] rounded-lg"></div>
          <div className="absolute right-0 top-0 bottom-0 w-[80%] bg-[#fe2c55] rounded-lg"></div>
          <div className="absolute left-[2px] right-[2px] top-0 bottom-0 bg-white rounded-lg flex items-center justify-center">
            <LuPlus size={20} className="text-black" strokeWidth={3} />
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center gap-1 cursor-pointer hover:text-white transition-colors">
        <LuMessageSquare size={22} />
        <span>Inbox</span>
      </div>
      <div className={`flex flex-col items-center gap-1 cursor-pointer ${active === 'profile' ? 'text-white' : ''}`}>
        <LuUser size={22} strokeWidth={active === 'profile' ? 3 : 2} />
        <span>Profile</span>
      </div>
    </div>
  </Navigation>
);

const ProfileView = memo(() => (
  <div className="w-full h-full bg-black text-white font-sans flex flex-col relative overflow-hidden">
    {/* Header */}
    <div className="h-12 flex items-center justify-between px-4 shrink-0 z-20">
      <div className="w-6"></div>
      <div className="flex items-center gap-1 font-bold text-base cursor-pointer">
        <span>Your Name</span>
        <span className="w-2 h-2 bg-yellow-400 rounded-full border border-black"></span>
      </div>
      <LuMenu size={24} />
    </div>

    <div className="flex-1 overflow-y-auto no-scrollbar">
      <div className="flex flex-col items-center pt-4 pb-2">
        <div className="relative mb-3">
          <div className="w-24 h-24 rounded-full overflow-hidden border border-white/10">
            <ProfileImage className="w-full h-full" />
          </div>
          <div className="absolute bottom-0 right-0 w-6 h-6 bg-[#25f4ee] rounded-full flex items-center justify-center border-2 border-black text-black">
            <LuPlus size={14} strokeWidth={4} />
          </div>
        </div>

        <div className="text-center mb-4">
          <div className="text-sm font-semibold">@username</div>
          <div className="flex items-center justify-center gap-6 mt-4 text-center">
            <div className="flex flex-col items-center">
              <span className="font-bold text-lg leading-none">142</span>
              <span className="text-xs text-gray-400">Following</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="font-bold text-lg leading-none">42.5K</span>
              <span className="text-xs text-gray-400">Followers</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="font-bold text-lg leading-none">1.2M</span>
              <span className="text-xs text-gray-400">Likes</span>
            </div>
          </div>
        </div>

        <div className="flex gap-2 w-full px-12 mb-4">
          <button className="flex-1 bg-[#333] py-3 rounded-lg text-sm font-semibold">Edit profile</button>
          <button className="flex-1 bg-[#333] py-3 rounded-lg text-sm font-semibold">Share profile</button>
        </div>

        <div className="text-sm text-center px-8 mb-4 leading-snug">
          Digital Creator 🎨 <br />
          Trying out new aesthetics.
        </div>
      </div>

      {/* Tabs */}
      <div className="flex items-center border-b border-white/10 text-gray-500">
        <div className="flex-1 h-11 flex items-center justify-center text-white border-b-2 border-white cursor-pointer">
          <svg viewBox="0 0 48 48" width="20" height="20" fill="currentColor">
            <path d="M6 6h10v10H6V6zm0 14h10v10H6V20zm0 14h10v10H6V34zm14-28h10v10H20V6zm0 14h10v10H20V20zm0 14h10v10H20V34zm14-28h10v10H34V6zm0 14h10v10H34V20zm0 14h10v10H34V34z" />
          </svg>
        </div>
        <div className="flex-1 h-11 flex items-center justify-center cursor-pointer hover:text-white transition-colors">
          <LuLock size={20} />
        </div>
        <div className="flex-1 h-11 flex items-center justify-center cursor-pointer hover:text-white transition-colors">
          <LuBookmark size={20} />
        </div>
        <div className="flex-1 h-11 flex items-center justify-center cursor-pointer hover:text-white transition-colors">
          <LuHeart size={20} />
        </div>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-3 gap-0.5">
        <div className="relative aspect-[3/4] bg-[#222] overflow-hidden group">
          <div className="absolute top-1 left-1 bg-[#fe2c55] text-white text-[10px] font-bold px-1.5 py-0.5 rounded">Pinned</div>
          <PostImage
            containerClass="w-full h-full flex items-center justify-center bg-[#1a1a1a]"
            imageClass="w-full h-full object-cover opacity-80"
          />
          <div className="absolute bottom-1 left-1 text-white text-xs font-semibold drop-shadow flex items-center gap-1">
            <LuHeart size={10} fill="white" /> 14.2K
          </div>
        </div>
        {[...Array(8)].map((_, i) => (
          <div key={i} className="relative aspect-[3/4] bg-[#1a1a1a]">
            <div className="absolute bottom-1 left-1 text-white text-xs font-semibold drop-shadow flex items-center gap-1">
              <svg viewBox="0 0 24 24" width="10" height="10" fill="transparent" stroke="currentColor" strokeWidth="2.5">
                <polygon points="5 3 19 12 5 21 5 3" />
              </svg>
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
  <div className="w-full h-full bg-black text-white font-sans flex flex-col justify-end relative overflow-hidden">
    {/* Video Background Mock */}
    <div className="absolute inset-0 z-0 bg-[#111]">
      <PostImage containerClass="w-full h-full flex items-center justify-center" imageClass="w-full h-full object-cover opacity-60" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/60 pointer-events-none"></div>
    </div>

    {/* Top Tab Bar */}
    <div className="absolute top-0 left-0 right-0 h-16 flex items-center justify-center z-20 pt-2 text-[15px] font-bold drop-shadow-md">
      <span className="text-white/60 mr-4 cursor-pointer hover:text-white transition-colors">Friends</span>
      <span className="text-white mr-4 cursor-pointer relative">
        Following
        <div className="absolute -right-2 top-0 w-1.5 h-1.5 bg-[#fe2c55] rounded-full"></div>
      </span>
      <span className="text-white relative cursor-pointer after:content-[''] after:absolute after:-bottom-2 after:left-1/2 after:-translate-x-1/2 after:w-8 after:h-0.5 after:bg-white after:rounded-full">
        For You
      </span>
      <div className="absolute right-4 top-1/2 -translate-y-1/2 pt-2">
        <LuSearch size={24} className="text-white" />
      </div>
    </div>

    {/* Right Sidebar Actions */}
    <div className="absolute right-2 bottom-20 z-20 flex flex-col items-center gap-5 pb-4">
      <div className="relative mb-2">
        <div className="w-12 h-12 rounded-full border border-white overflow-hidden shadow-sm">
          <ProfileImage className="w-full h-full" />
        </div>
        <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-[#fe2c55] rounded-full p-0.5">
          <LuPlus size={12} className="text-white" strokeWidth={4} />
        </div>
      </div>

      <div className="flex flex-col items-center gap-1 cursor-pointer">
        <LuHeart size={32} fill="white" className="text-[#fe2c55] drop-shadow-sm transition-transform active:scale-75" />
        <span className="text-xs font-bold drop-shadow-md">428.5K</span>
      </div>

      <div className="flex flex-col items-center gap-1 cursor-pointer">
        <LuMessageCircle size={32} fill="white" className="text-white drop-shadow-sm" />
        <span className="text-xs font-bold drop-shadow-md">1,024</span>
      </div>

      <div className="flex flex-col items-center gap-1 cursor-pointer">
        <LuBookmark size={32} fill="white" className="text-white drop-shadow-sm" />
        <span className="text-xs font-bold drop-shadow-md">42.1K</span>
      </div>

      <div className="flex flex-col items-center gap-1 cursor-pointer">
        <LuShare2 size={32} fill="white" className="text-white drop-shadow-sm" />
        <span className="text-xs font-bold drop-shadow-md">8,492</span>
      </div>

      <div className="mt-4 animate-[spin_5s_linear_infinite] w-10 h-10 bg-black rounded-full border-[6px] border-[#222] flex items-center justify-center relative overflow-hidden">
        <ProfileImage className="w-full h-full" />
      </div>
    </div>

    {/* Bottom Info Overlay */}
    <div className="absolute left-0 bottom-[50px] right-16 z-20 px-4 pb-4 flex flex-col items-start text-shadow-sm">
      <div className="font-bold text-[17px] mb-1 hover:underline cursor-pointer">@username</div>
      <div className="text-[15px] leading-snug line-clamp-2 mb-2">
        POV: You finally found the perfect profile picture tool. 📸 ✨ <span className="font-bold">#design #pfp #2025</span>
      </div>
      <div className="flex items-center gap-2 text-[15px] font-medium w-full">
        <div className="flex items-center gap-2 bg-white/20 px-3 py-1 rounded-full backdrop-blur-sm">
          <LuMusic size={14} />
          <div className="w-24 overflow-hidden relative h-5">
            <span className="absolute whitespace-nowrap animate-[marquee_5s_linear_infinite]">Original Sound - Your Name</span>
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
