import { memo } from 'react';
import { LuBell, LuEllipsis, LuGlobe, LuHouse, LuImage, LuMessageCircle, LuSearch, LuShare2, LuThumbsUp, LuTv, LuUsers } from 'react-icons/lu';

import { Perspective } from '../../app/constants';
import { useStore } from '../../stores/useStore';
import { PostImage, ProfileImage } from '../shared/Image';

const ProfileView = memo(() => (
  <div className="h-full w-full overflow-y-auto bg-[#18191a] font-sans text-[#e4e6eb]">
    <div className="relative">
      <div className="h-40 w-full bg-gradient-to-r from-blue-900 to-slate-800"></div>
      <div className="absolute -bottom-12 left-4">
        <div className="h-[130px] w-[130px] rounded-full bg-[#18191a] p-1">
          <ProfileImage className="h-full w-full rounded-full ring-2 ring-gray-700" />
        </div>
        <div className="absolute bottom-2 right-2 rounded-full border-2 border-[#18191a] bg-[#3a3b3c] p-1.5">
          <LuImage size={14} className="text-white" />
        </div>
      </div>
    </div>

    <div className="mt-14 border-b border-[#3e4042] px-4 pb-4">
      <h1 className="text-2xl font-bold">Your Name</h1>
      <p className="text-sm font-medium text-[#b0b3b8]">1.2K friends</p>

      <div className="mt-4 flex gap-2">
        <button className="flex flex-1 items-center justify-center gap-2 rounded-md bg-[#2374e1] py-2 text-sm font-semibold text-white">
          <span className="text-lg">+</span> Add to Story
        </button>
        <button className="flex flex-1 items-center justify-center gap-2 rounded-md bg-[#3a3b3c] py-2 text-sm font-semibold text-white">
          Edit profile
        </button>
      </div>
    </div>

    <div className="space-y-4 p-4">
      <div className="rounded-lg bg-[#242526] p-4">
        <div className="mb-2 text-lg font-bold">Details</div>
        <div className="space-y-3 text-sm text-[#b0b3b8]">
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
  <div className="relative flex h-full w-full flex-col bg-[#18191a] font-sans text-[#e4e6eb]">
    <div className="z-20 flex h-14 shrink-0 items-center justify-between border-b border-[#3e4042] bg-[#242526] px-4">
      <h1 className="text-2xl font-bold tracking-tighter text-[#2374e1]">facebook</h1>
      <div className="flex gap-2">
        <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#3a3b3c]">
          <LuSearch size={18} />
        </div>
        <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#3a3b3c]">
          <LuMessageCircle size={18} />
        </div>
      </div>
    </div>

    <div className="z-10 flex h-12 shrink-0 items-center justify-around border-b border-[#3e4042] bg-[#242526] px-2">
      <div className="flex h-full items-center border-b-2 border-[#2374e1] px-4 text-[#2374e1]">
        <LuHouse size={24} fill="currentColor" />
      </div>
      <div className="flex h-full items-center px-4 text-[#b0b3b8]">
        <LuUsers size={24} />
      </div>
      <div className="flex h-full items-center px-4 text-[#b0b3b8]">
        <LuTv size={24} />
      </div>
      <div className="flex h-full items-center px-4 text-[#b0b3b8]">
        <LuBell size={24} />
      </div>
    </div>

    <div className="flex-1 overflow-y-auto pt-2 no-scrollbar">
      <div className="mb-2 bg-[#242526] p-3">
        <div className="flex gap-3">
          <div className="h-10 w-10 shrink-0">
            <ProfileImage className="h-full w-full rounded-full" />
          </div>
          <div className="flex flex-1 items-center rounded-full bg-[#3a3b3c] px-4 text-sm text-[#b0b3b8]">What's on your mind?</div>
        </div>
      </div>

      <div className="bg-[#242526] pb-2">
        <div className="flex items-start justify-between p-3">
          <div className="flex gap-2">
            <div className="h-10 w-10 shrink-0">
              <ProfileImage className="h-full w-full rounded-full" />
            </div>
            <div>
              <div className="text-sm font-semibold leading-tight text-[#e4e6eb]">Your Name</div>
              <div className="mt-0.5 flex items-center gap-1 text-xs text-[#b0b3b8]">
                <span>Just now</span>
                <span>·</span>
                <LuGlobe size={10} />
              </div>
            </div>
          </div>
          <LuEllipsis size={20} className="text-[#b0b3b8]" />
        </div>

        <div className="px-3 pb-3 text-sm text-[#e4e6eb]">New profile picture! What do you guys think? 😎</div>

        <div className="w-full">
          <PostImage containerClass="w-full" imageClass="block h-auto w-full" />
        </div>

        <div className="flex items-center justify-between border-b border-[#3e4042] px-3 py-2 text-sm text-[#b0b3b8]">
          <div className="flex items-center gap-1">
            <div className="flex h-4 w-4 items-center justify-center rounded-full bg-[#2374e1]">
              <LuThumbsUp size={10} fill="white" className="text-white" />
            </div>
            <span>12</span>
          </div>
          <div className="flex gap-3">
            <span>4 comments</span>
            <span>1 share</span>
          </div>
        </div>

        <div className="flex items-center justify-between px-2 py-1 text-[#b0b3b8]">
          <button className="flex flex-1 items-center justify-center gap-2 rounded-md py-2 text-sm font-medium transition-colors hover:bg-[#3a3b3c]">
            <LuThumbsUp size={18} /> Like
          </button>
          <button className="flex flex-1 items-center justify-center gap-2 rounded-md py-2 text-sm font-medium transition-colors hover:bg-[#3a3b3c]">
            <LuMessageCircle size={18} /> Comment
          </button>
          <button className="flex flex-1 items-center justify-center gap-2 rounded-md py-2 text-sm font-medium transition-colors hover:bg-[#3a3b3c]">
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
