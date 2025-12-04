import { memo } from 'react';
import { LuBell, LuEllipsis, LuGlobe, LuHouse, LuImage, LuMessageCircle, LuSearch, LuShare2, LuThumbsUp, LuTv, LuUsers } from 'react-icons/lu';

import { Perspective } from '../../app/constants';
import { useStore } from '../../stores/useStore';
import { CroppedPreview } from '../CroppedPreview';
import { PostImage } from './Shared';

const ProfileView = memo(() => (
  <div className="w-full h-full bg-[#18191a] text-[#e4e6eb] font-sans overflow-y-auto">
    <div className="relative">
      <div className="h-40 bg-gradient-to-r from-blue-900 to-slate-800 w-full"></div>
      <div className="absolute -bottom-12 left-4">
        <div className="p-1 bg-[#18191a] rounded-full">
          <CroppedPreview size={120} className="rounded-full ring-2 ring-gray-700" />
        </div>
        <div className="absolute bottom-2 right-2 bg-[#3a3b3c] p-1.5 rounded-full border-2 border-[#18191a]">
          <LuImage size={14} className="text-white" />
        </div>
      </div>
    </div>

    <div className="mt-14 px-4 pb-4 border-b border-[#3e4042]">
      <h1 className="text-2xl font-bold">Your Name</h1>
      <p className="text-[#b0b3b8] text-sm font-medium">1.2K friends</p>

      <div className="flex gap-2 mt-4">
        <button className="flex-1 bg-[#2374e1] text-white py-2 rounded-md font-semibold text-sm flex items-center justify-center gap-2">
          <span className="text-lg">+</span> Add to Story
        </button>
        <button className="flex-1 bg-[#3a3b3c] text-white py-2 rounded-md font-semibold text-sm flex items-center justify-center gap-2">
          Edit profile
        </button>
      </div>
    </div>

    <div className="p-4 space-y-4">
      <div className="bg-[#242526] p-4 rounded-lg">
        <div className="text-lg font-bold mb-2">Details</div>
        <div className="space-y-3 text-[#b0b3b8] text-sm">
          <div className="flex items-center gap-2">
            <div className="w-5" />
            Designer at <strong className="text-white">Workplace</strong>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-5" />
            Studied at <strong className="text-white">University</strong>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-5" />
            Lives in <strong className="text-white">City</strong>
          </div>
        </div>
      </div>
    </div>
  </div>
));

const FeedView = memo(() => (
  <div className="w-full h-full bg-[#18191a] text-[#e4e6eb] font-sans flex flex-col relative">
    <div className="h-14 bg-[#242526] border-b border-[#3e4042] flex items-center justify-between px-4 shrink-0 z-20">
      <h1 className="text-[#2374e1] font-bold text-2xl tracking-tighter">facebook</h1>
      <div className="flex gap-2">
        <div className="w-9 h-9 bg-[#3a3b3c] rounded-full flex items-center justify-center">
          <LuSearch size={18} />
        </div>
        <div className="w-9 h-9 bg-[#3a3b3c] rounded-full flex items-center justify-center">
          <LuMessageCircle size={18} />
        </div>
      </div>
    </div>

    <div className="h-12 bg-[#242526] border-b border-[#3e4042] flex items-center justify-around px-2 shrink-0 z-10">
      <div className="h-full flex items-center border-b-2 border-[#2374e1] px-4 text-[#2374e1]">
        <LuHouse size={24} fill="currentColor" />
      </div>
      <div className="h-full flex items-center px-4 text-[#b0b3b8]">
        <LuUsers size={24} />
      </div>
      <div className="h-full flex items-center px-4 text-[#b0b3b8]">
        <LuTv size={24} />
      </div>
      <div className="h-full flex items-center px-4 text-[#b0b3b8]">
        <LuBell size={24} />
      </div>
    </div>

    <div className="flex-1 overflow-y-auto no-scrollbar pt-2">
      <div className="bg-[#242526] p-3 mb-2">
        <div className="flex gap-3">
          <div className="shrink-0">
            <CroppedPreview size={40} className="rounded-full" />
          </div>
          <div className="flex-1 bg-[#3a3b3c] rounded-full flex items-center px-4 text-[#b0b3b8] text-sm">What's on your mind?</div>
        </div>
      </div>

      <div className="bg-[#242526] pb-2">
        <div className="p-3 flex items-start justify-between">
          <div className="flex gap-2">
            <div className="shrink-0">
              <CroppedPreview size={40} className="rounded-full" />
            </div>
            <div>
              <div className="text-[#e4e6eb] font-semibold text-sm leading-tight">Your Name</div>
              <div className="text-[#b0b3b8] text-xs flex items-center gap-1 mt-0.5">
                <span>Just now</span>
                <span>·</span>
                <LuGlobe size={10} />
              </div>
            </div>
          </div>
          <LuEllipsis size={20} className="text-[#b0b3b8]" />
        </div>

        <div className="px-3 pb-3 text-sm text-[#e4e6eb]">New profile picture! What do you guys think? 😎</div>

        <div className="w-full bg-black flex items-center justify-center overflow-hidden max-h-[400px]">
          <PostImage />
        </div>

        <div className="px-3 py-2 flex items-center justify-between text-[#b0b3b8] text-sm border-b border-[#3e4042]">
          <div className="flex items-center gap-1">
            <div className="w-4 h-4 bg-[#2374e1] rounded-full flex items-center justify-center">
              <LuThumbsUp size={10} fill="white" className="text-white" />
            </div>
            <span>12</span>
          </div>
          <div className="flex gap-3">
            <span>4 comments</span>
            <span>1 share</span>
          </div>
        </div>

        <div className="px-2 py-1 flex justify-between items-center text-[#b0b3b8]">
          <button className="flex-1 flex items-center justify-center gap-2 py-2 hover:bg-[#3a3b3c] rounded-md transition-colors font-medium text-sm">
            <LuThumbsUp size={18} /> Like
          </button>
          <button className="flex-1 flex items-center justify-center gap-2 py-2 hover:bg-[#3a3b3c] rounded-md transition-colors font-medium text-sm">
            <LuMessageCircle size={18} /> Comment
          </button>
          <button className="flex-1 flex items-center justify-center gap-2 py-2 hover:bg-[#3a3b3c] rounded-md transition-colors font-medium text-sm">
            <LuShare2 size={18} /> Share
          </button>
        </div>
      </div>
    </div>
  </div>
));

export const FacebookView = () => {
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
