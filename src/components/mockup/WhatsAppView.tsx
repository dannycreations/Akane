import { memo } from 'react';
import { LuArrowLeft, LuCircleCheck, LuEllipsisVertical, LuImage, LuPhone, LuSend, LuVideo } from 'react-icons/lu';

import { Perspective } from '../../app/constants';
import { useStore } from '../../stores/useStore';
import { ProfileImage } from '../shared/Image';
import { Navigation } from '../shared/Navigation';

const ProfileView = memo(() => (
  <div className="flex h-full w-full flex-col bg-[#0b141a] font-sans text-[#e9edef]">
    <div className="flex items-center gap-4 p-4 text-xl">
      <LuArrowLeft size={24} />
      <span className="flex-1 font-medium">Profile</span>
      <LuEllipsisVertical size={24} />
    </div>
    <div className="group relative my-8 flex justify-center">
      <div className="h-[180px] w-[180px]">
        <ProfileImage className="h-full w-full rounded-full ring-4 ring-[#25D366]/20 transition-all duration-300 group-hover:ring-[#25D366]" />
      </div>
      <div className="absolute bottom-2 right-14 rounded-full bg-[#00a884] p-3 shadow-lg">
        <LuImage size={20} className="text-white" />
      </div>
    </div>
    <div className="space-y-6 px-6">
      <div className="flex items-center gap-4 text-[#8696a0]">
        <div className="flex-1">
          <label className="mb-1 block text-sm">Name</label>
          <div className="flex items-center justify-between text-lg text-[#e9edef]">
            <span>Your Name</span>
            <span className="text-[#00a884]">
              <LuCircleCheck size={16} />
            </span>
          </div>
        </div>
      </div>
      <div className="h-px bg-[#202c33]" />
      <div className="text-[#8696a0]">
        <label className="mb-1 block text-sm">About</label>
        <p className="text-[#e9edef]">Living the dream ✨</p>
      </div>
      <div className="h-px bg-[#202c33]" />
      <div className="text-[#8696a0]">
        <label className="mb-1 block text-sm">Phone</label>
        <p className="text-[#e9edef]">+1 234 567 890</p>
      </div>
    </div>
  </div>
));

const ChatView = memo(() => (
  <div className="relative flex h-full w-full flex-col overflow-hidden bg-[#0b141a] font-sans">
    <div className="relative z-10 flex h-16 shrink-0 items-center justify-between bg-[#202c33] px-2 shadow-sm">
      <div className="flex items-center gap-2">
        <LuArrowLeft size={20} className="text-white" />
        <div className="flex items-center gap-2">
          <div className="h-9 w-9">
            <ProfileImage className="h-full w-full rounded-full" />
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-medium leading-tight text-white">Your Name</span>
            <span className="text-xs text-[#8696a0]">online</span>
          </div>
        </div>
      </div>
      <div className="flex items-center gap-5 pr-2 text-white">
        <LuVideo size={22} />
        <LuPhone size={20} />
        <LuEllipsisVertical size={20} />
      </div>
    </div>

    <div className="relative z-10 flex-1 space-y-3 overflow-y-auto p-4">
      <div className="flex justify-start">
        <div className="max-w-[80%] rounded-bl-lg rounded-br-lg rounded-tr-lg bg-[#202c33] p-2 px-3 text-sm text-white shadow">
          Hey! Check out my new profile pic! 😎
          <span className="mt-1 block text-right text-[10px] text-[#8696a0]">10:42 AM</span>
        </div>
      </div>
      <div className="flex justify-end">
        <div className="max-w-[80%] rounded-bl-lg rounded-br-lg rounded-tl-lg bg-[#005c4b] p-2 px-3 text-sm text-white shadow">
          Looks amazing! Is that the 2025 style?
          <span className="mt-1 flex items-center justify-end gap-1 text-right text-[10px] text-[#8696a0]">
            10:43 AM <LuCircleCheck size={10} className="text-[#53bdeb]" />
          </span>
        </div>
      </div>
    </div>

    <Navigation className="bg-[#202c33]" safeAreaClassName="pb-8">
      <div className="relative z-20 flex items-center gap-2 px-2 pt-2">
        <div className="flex flex-1 items-center rounded-full bg-[#2a3942] p-2 px-4">
          <span className="text-sm text-[#8696a0]">Message</span>
        </div>
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#00a884]">
          <LuSend size={18} className="ml-0.5 text-white" />
        </div>
      </div>
    </Navigation>
  </div>
));

export const WhatsAppView = () => {
  const perspective = useStore((state) => state.perspective);
  const isProfile = perspective === Perspective.Profile;

  return (
    <div className="relative h-full w-full">
      <div className="h-full w-full" style={{ display: isProfile ? 'block' : 'none' }}>
        <ProfileView />
      </div>
      <div className="h-full w-full" style={{ display: !isProfile ? 'block' : 'none' }}>
        <ChatView />
      </div>
    </div>
  );
};
