import { LuChevronDown, LuClock, LuEllipsis, LuHash, LuMessageSquare, LuPaperclip, LuSend, LuSmile, LuUserPlus, LuVideo, LuX } from 'react-icons/lu';

import { Perspective } from '../../app/types';
import { useStore } from '../../stores/useStore';
import { CroppedPreview } from '../CroppedPreview';

import type { FC } from 'react';

const bgMain = 'bg-[#1A1D21]';
const textPrimary = 'text-[#D1D2D3]';
const textSecondary = 'text-[#ABABAD]';
const border = 'border-[#36373A]';

export const SlackView: FC = () => {
  const { perspective } = useStore();
  const isProfile = perspective === Perspective.Profile;

  if (isProfile) {
    return (
      <div className={`w-full h-full ${bgMain} ${textPrimary} font-sans flex flex-col relative overflow-hidden`}>
        <div className={`h-14 flex items-center justify-between px-4 border-b ${border} bg-[#1A1D21] z-20`}>
          <h2 className="font-bold text-lg">Profile</h2>
          <div className="p-2 hover:bg-[#35373B] rounded-lg cursor-pointer">
            <LuX size={20} className={textSecondary} />
          </div>
        </div>

        <div className="flex-1 overflow-y-auto no-scrollbar p-6">
          <div className="flex flex-col items-center mb-6">
            <div className="relative group cursor-pointer">
              <div className="w-[180px] h-[180px] rounded-3xl overflow-hidden shadow-2xl ring-4 ring-[#1A1D21]">
                <CroppedPreview size={180} />
              </div>
              <div className="absolute bottom-2 right-2 w-8 h-8 rounded-full bg-[#1A1D21] flex items-center justify-center">
                <div className="w-5 h-5 rounded-full bg-[#2BAC76] border-2 border-[#1A1D21]"></div>
              </div>
            </div>

            <h1 className="text-2xl font-bold mt-4">John Doe</h1>
            <div className={`${textSecondary} mt-1`}>Senior Product Designer</div>

            <button className="mt-4 flex items-center gap-2 px-4 py-1.5 rounded-lg border border-[#56585B] hover:bg-[#35373B] transition-colors w-full justify-center max-w-[240px]">
              <LuSmile size={16} />
              <span className="text-sm">Update your status</span>
            </button>
          </div>

          <div className="flex gap-3 mb-8 justify-center">
            <button className="flex-1 bg-transparent border border-[#56585B] rounded-lg py-2 px-4 font-semibold text-sm hover:bg-[#35373B] transition-colors flex items-center justify-center gap-2">
              <LuMessageSquare size={16} /> Message
            </button>
            <button className="flex-1 bg-transparent border border-[#56585B] rounded-lg py-2 px-4 font-semibold text-sm hover:bg-[#35373B] transition-colors flex items-center justify-center gap-2">
              <LuVideo size={16} /> Huddle
            </button>
            <button className="w-10 flex items-center justify-center border border-[#56585B] rounded-lg hover:bg-[#35373B]">
              <LuEllipsis size={16} />
            </button>
          </div>

          <div className="bg-[#222529] rounded-2xl p-4 space-y-5 border border-[#36373A]">
            <div>
              <label className="text-xs font-bold uppercase text-[#ABABAD] mb-1 block">Contact Info</label>
              <div className="flex items-center gap-3 mt-2">
                <div className="w-8 h-8 rounded bg-[#35373B] flex items-center justify-center">
                  <LuMessageSquare size={16} className="#ABABAD" />
                </div>
                <div>
                  <div className="text-sm text-[#36C5F0] hover:underline cursor-pointer">johndoe@company.com</div>
                  <div className="text-xs text-[#ABABAD]">Email</div>
                </div>
              </div>
            </div>

            <div className="h-px bg-[#36373A] w-full" />

            <div className="flex items-start gap-4">
              <div className="flex-1">
                <label className="text-xs font-bold uppercase text-[#ABABAD] mb-1 block">Local Time</label>
                <div className="text-sm flex items-center gap-2">
                  <LuClock size={14} className={textSecondary} /> 10:42 AM
                </div>
              </div>
              <div className="flex-1">
                <label className="text-xs font-bold uppercase text-[#ABABAD] mb-1 block">Pronouns</label>
                <div className="text-sm">he/him</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={`w-full h-full ${bgMain} ${textPrimary} font-sans flex flex-col relative`}>
      <div className="absolute left-0 top-0 bottom-0 w-[60px] bg-[#121417] border-r border-[#2B2D31] flex flex-col items-center py-4 gap-4 z-10">
        <div className="w-10 h-10 bg-[#36373A] rounded-lg flex items-center justify-center font-bold">W</div>
        <div className="w-10 h-10 bg-transparent border border-[#36373A] rounded-lg flex items-center justify-center hover:bg-[#36373A] cursor-pointer">
          <div className="w-5 h-5 bg-[#ABABAD] rounded-sm"></div>
        </div>
        <div className="mt-auto w-8 h-8 rounded bg-indigo-500 overflow-hidden">
          <CroppedPreview size={32} />
        </div>
      </div>

      <div className="flex-1 ml-[60px] flex flex-col min-w-0">
        <div className={`h-12 border-b ${border} flex items-center justify-between px-4 shrink-0`}>
          <div className="flex items-center gap-1 font-bold text-lg">
            <LuHash size={20} className={textSecondary} />
            general
            <LuChevronDown size={14} className={textSecondary} />
          </div>
          <div className="flex -space-x-2">
            <div className="w-6 h-6 rounded bg-yellow-500 border border-[#1A1D21] flex items-center justify-center text-[10px] font-bold text-black">
              A
            </div>
            <div className="w-6 h-6 rounded bg-blue-500 border border-[#1A1D21] flex items-center justify-center text-[10px] font-bold text-white">
              B
            </div>
            <div className="w-6 h-6 rounded bg-[#35373B] border border-[#1A1D21] flex items-center justify-center text-[10px] font-bold text-[#ABABAD]">
              +5
            </div>
          </div>
        </div>

        <div className="flex-1 overflow-y-auto p-4 space-y-6">
          <div className="relative flex items-center justify-center my-4">
            <div className="absolute h-px bg-[#36373A] w-full top-1/2"></div>
            <span className="relative bg-[#1A1D21] px-3 text-xs font-bold text-[#ABABAD] rounded-full border border-[#36373A]">Today</span>
          </div>

          <div className="flex gap-3 group hover:bg-[#222529] -mx-4 px-4 py-1 transition-colors">
            <div className="w-9 h-9 rounded bg-indigo-500 overflow-hidden shrink-0 mt-1 cursor-pointer hover:opacity-80">
              <CroppedPreview size={36} />
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-baseline gap-2">
                <span className="font-bold hover:underline cursor-pointer">John Doe</span>
                <span className="text-xs text-[#ABABAD]">10:42 AM</span>
              </div>
              <p className="text-[15px] leading-relaxed">
                Just pushed the new updates to production! 🚀 <br />
                The new profile preview component is looking crisp. Check it out when you can.
              </p>
              <div className="flex gap-1 mt-1">
                <div className="bg-[#222529] border border-[#36373A] rounded-full px-1.5 py-0.5 flex items-center gap-1 cursor-pointer hover:border-[#ABABAD]">
                  <span>🔥</span> <span className="text-xs text-[#36C5F0] font-bold">2</span>
                </div>
              </div>
            </div>
          </div>

          <div className="flex gap-3 group hover:bg-[#222529] -mx-4 px-4 py-1 transition-colors">
            <div className="w-9 h-9 rounded bg-pink-500 shrink-0 mt-1 flex items-center justify-center font-bold text-white">S</div>
            <div className="flex-1 min-w-0">
              <div className="flex items-baseline gap-2">
                <span className="font-bold hover:underline cursor-pointer">Sarah</span>
                <span className="text-xs text-[#ABABAD]">10:45 AM</span>
              </div>
              <p className="text-[15px] leading-relaxed">Nice work! The rounded square crop for Slack is a nice touch. 👌</p>
            </div>
          </div>
        </div>

        <div className="px-4 pb-4 pt-2">
          <div className="border border-[#56585B] rounded-xl bg-[#222529] focus-within:border-[#ABABAD] transition-colors">
            <div className="flex items-center gap-1 p-1 bg-[#2B2D31] rounded-t-xl border-b border-[#36373A]">
              <div className="p-1 hover:bg-[#3F4145] rounded cursor-pointer">
                <span className="font-bold text-xs">B</span>
              </div>
              <div className="p-1 hover:bg-[#3F4145] rounded cursor-pointer">
                <span className="italic text-xs">I</span>
              </div>
              <div className="p-1 hover:bg-[#3F4145] rounded cursor-pointer">
                <span className="line-through text-xs">S</span>
              </div>
              <div className="w-px h-4 bg-[#56585B] mx-1"></div>
              <div className="p-1 hover:bg-[#3F4145] rounded cursor-pointer">
                <span className="text-xs">Link</span>
              </div>
            </div>

            <input
              type="text"
              placeholder="Message #general"
              className="w-full bg-transparent text-[#D1D2D3] p-3 outline-none placeholder-[#616061]"
            />

            <div className="flex justify-between items-center p-2">
              <div className="flex gap-2 text-[#ABABAD]">
                <div className="p-1.5 hover:bg-[#35373B] rounded-full cursor-pointer">
                  <LuUserPlus size={16} />
                </div>
                <div className="p-1.5 hover:bg-[#35373B] rounded-full cursor-pointer">
                  <LuSmile size={16} />
                </div>
                <div className="p-1.5 hover:bg-[#35373B] rounded-full cursor-pointer">
                  <LuPaperclip size={16} />
                </div>
              </div>
              <div className="p-2 bg-[#007A5A] rounded hover:bg-[#148567] transition-colors cursor-pointer text-white">
                <LuSend size={16} className="ml-0.5" />
              </div>
            </div>
          </div>
          <div className="text-center mt-2 text-[11px] text-[#616061]">
            <strong>Tip:</strong> Press Enter to send
          </div>
        </div>
      </div>
    </div>
  );
};
