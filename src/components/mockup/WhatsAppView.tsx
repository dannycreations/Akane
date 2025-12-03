import { LuArrowLeft, LuCircleCheck, LuEllipsisVertical, LuImage, LuPhone, LuSend, LuVideo } from 'react-icons/lu';

import { Perspective } from '../../app/constants';
import { useStore } from '../../stores/useStore';
import { CroppedPreview } from '../CroppedPreview';

export const WhatsAppView = () => {
  const perspective = useStore((state) => state.perspective);

  if (perspective === Perspective.Profile) {
    return (
      <div className="w-full h-full bg-[#0b141a] text-[#e9edef] flex flex-col font-sans">
        <div className="p-4 flex items-center gap-4 text-xl">
          <LuArrowLeft size={24} />
          <span className="font-medium flex-1">Profile</span>
          <LuEllipsisVertical size={24} />
        </div>
        <div className="flex justify-center my-8 relative group">
          <CroppedPreview size={180} className="rounded-full ring-4 ring-[#25D366]/20 group-hover:ring-[#25D366] transition-all duration-500" />
          <div className="absolute bottom-2 right-14 bg-[#00a884] p-3 rounded-full shadow-lg">
            <LuImage size={20} className="text-white" />
          </div>
        </div>
        <div className="px-6 space-y-6">
          <div className="flex items-center gap-4 text-[#8696a0]">
            <div className="flex-1">
              <label className="text-sm block mb-1">Name</label>
              <div className="text-[#e9edef] text-lg flex items-center justify-between">
                <span>John Doe</span>
                <span className="text-[#00a884]">
                  <LuCircleCheck size={16} />
                </span>
              </div>
            </div>
          </div>
          <div className="h-px bg-[#202c33]" />
          <div className="text-[#8696a0]">
            <label className="text-sm block mb-1">About</label>
            <p className="text-[#e9edef]">Living the dream ✨</p>
          </div>
          <div className="h-px bg-[#202c33]" />
          <div className="text-[#8696a0]">
            <label className="text-sm block mb-1">Phone</label>
            <p className="text-[#e9edef]">+1 234 567 890</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-full bg-[#0b141a] flex flex-col font-sans relative overflow-hidden">
      <div className="h-16 bg-[#202c33] flex items-center px-2 justify-between shrink-0 shadow-sm relative z-10">
        <div className="flex items-center gap-2">
          <LuArrowLeft size={20} className="text-white" />
          <div className="flex items-center gap-2">
            <CroppedPreview size={36} className="rounded-full" />
            <div className="flex flex-col">
              <span className="text-white font-medium text-sm leading-tight">John Doe</span>
              <span className="text-[#8696a0] text-xs">online</span>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-5 text-white pr-2">
          <LuVideo size={22} />
          <LuPhone size={20} />
          <LuEllipsisVertical size={20} />
        </div>
      </div>

      <div className="flex-1 p-4 overflow-y-auto space-y-3 relative z-10">
        <div className="flex justify-start">
          <div className="bg-[#202c33] text-white p-2 px-3 rounded-tr-lg rounded-bl-lg rounded-br-lg max-w-[80%] text-sm shadow">
            Hey! Check out my new profile pic! 😎
            <span className="text-[10px] text-[#8696a0] block text-right mt-1">10:42 AM</span>
          </div>
        </div>
        <div className="flex justify-end">
          <div className="bg-[#005c4b] text-white p-2 px-3 rounded-tl-lg rounded-bl-lg rounded-br-lg max-w-[80%] text-sm shadow">
            Looks amazing! Is that the 2025 style?
            <span className="text-[10px] text-[#8696a0] block text-right mt-1 flex items-center justify-end gap-1">
              10:43 AM <LuCircleCheck size={10} className="text-[#53bdeb]" />
            </span>
          </div>
        </div>
      </div>

      <div className="bg-[#202c33] flex items-center px-2 pt-2 pb-8 gap-2 shrink-0 relative z-20">
        <div className="p-2 bg-[#2a3942] rounded-full flex-1 flex items-center px-4">
          <span className="text-[#8696a0] text-sm">Message</span>
        </div>
        <div className="w-10 h-10 bg-[#00a884] rounded-full flex items-center justify-center">
          <LuSend size={18} className="text-white ml-0.5" />
        </div>
      </div>
    </div>
  );
};
