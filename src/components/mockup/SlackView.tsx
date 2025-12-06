import { memo } from 'react';
import { LuChevronDown, LuClock, LuEllipsis, LuHash, LuMessageSquare, LuPaperclip, LuSend, LuSmile, LuUserPlus, LuVideo, LuX } from 'react-icons/lu';

import { Perspective } from '../../app/constants';
import { useStore } from '../../stores/useStore';
import { ProfileImage } from '../shared/Image';
import { Navigation } from '../shared/Navigation';

const bgMain = 'bg-[#1A1D21]';
const textPrimary = 'text-[#D1D2D3]';
const textSecondary = 'text-[#ABABAD]';
const border = 'border-[#36373A]';

const ProfileView = memo(() => (
  <div className={`relative flex h-full w-full flex-col overflow-hidden font-sans ${bgMain} ${textPrimary}`}>
    <div className={`z-20 flex h-14 items-center justify-between border-b bg-[#1A1D21] px-4 ${border}`}>
      <h2 className="text-lg font-bold">Profile</h2>
      <div className="cursor-pointer rounded-lg p-2 hover:bg-[#35373B]">
        <LuX size={20} className={textSecondary} />
      </div>
    </div>

    <div className="flex-1 overflow-y-auto p-6 no-scrollbar">
      <div className="mb-6 flex flex-col items-center">
        <div className="group relative cursor-pointer">
          <div className="h-[180px] w-[180px] overflow-hidden rounded-3xl shadow-2xl ring-4 ring-[#1A1D21]">
            <ProfileImage className="h-full w-full" />
          </div>
          <div className="absolute bottom-2 right-2 flex h-8 w-8 items-center justify-center rounded-full bg-[#1A1D21]">
            <div className="h-5 w-5 rounded-full border-2 border-[#1A1D21] bg-[#2BAC76]"></div>
          </div>
        </div>

        <h1 className="mt-4 text-2xl font-bold">Your Name</h1>
        <div className={`mt-1 ${textSecondary}`}>Job Title</div>

        <button className="mt-4 flex w-full max-w-[240px] justify-center gap-2 rounded-lg border border-[#56585B] px-4 py-1.5 transition-colors hover:bg-[#35373B]">
          <LuSmile size={16} />
          <span className="text-sm">Update your status</span>
        </button>
      </div>

      <div className="mb-8 flex justify-center gap-3">
        <button className="flex flex-1 items-center justify-center gap-2 rounded-lg border border-[#56585B] bg-transparent px-4 py-2 text-sm font-semibold transition-colors hover:bg-[#35373B]">
          <LuMessageSquare size={16} /> Message
        </button>
        <button className="flex flex-1 items-center justify-center gap-2 rounded-lg border border-[#56585B] bg-transparent px-4 py-2 text-sm font-semibold transition-colors hover:bg-[#35373B]">
          <LuVideo size={16} /> Huddle
        </button>
        <button className="flex w-10 items-center justify-center rounded-lg border border-[#56585B] hover:bg-[#35373B]">
          <LuEllipsis size={16} />
        </button>
      </div>

      <div className="space-y-5 rounded-2xl border border-[#36373A] bg-[#222529] p-4">
        <div>
          <label className="mb-1 block text-xs font-bold uppercase text-[#ABABAD]">Contact Info</label>
          <div className="mt-2 flex items-center gap-3">
            <div className="flex h-8 w-8 items-center justify-center rounded bg-[#35373B]">
              <LuMessageSquare size={16} className="#ABABAD" />
            </div>
            <div>
              <div className="cursor-pointer text-sm text-[#36C5F0] hover:underline">user@company.com</div>
              <div className="text-xs text-[#ABABAD]">Email</div>
            </div>
          </div>
        </div>

        <div className="h-px w-full bg-[#36373A]" />

        <div className="flex items-start gap-4">
          <div className="flex-1">
            <label className="mb-1 block text-xs font-bold uppercase text-[#ABABAD]">Local Time</label>
            <div className="flex items-center gap-2 text-sm">
              <LuClock size={14} className={textSecondary} /> 10:42 AM
            </div>
          </div>
          <div className="flex-1">
            <label className="mb-1 block text-xs font-bold uppercase text-[#ABABAD]">Pronouns</label>
            <div className="text-sm">they/them</div>
          </div>
        </div>
      </div>
    </div>
  </div>
));

const ChatView = memo(() => (
  <div className={`relative flex h-full w-full flex-col font-sans ${bgMain} ${textPrimary}`}>
    <div className="flex flex-1 min-w-0 flex-col">
      <div className={`flex h-12 shrink-0 items-center justify-between border-b px-4 ${border}`}>
        <div className="flex items-center gap-1 text-lg font-bold">
          <LuHash size={20} className={textSecondary} />
          general
          <LuChevronDown size={14} className={textSecondary} />
        </div>
        <div className="-space-x-2 flex">
          <div className="flex h-6 w-6 items-center justify-center rounded border border-[#1A1D21] bg-yellow-500 text-[10px] font-bold text-black">
            T
          </div>
          <div className="flex h-6 w-6 items-center justify-center rounded border border-[#1A1D21] bg-blue-500 text-[10px] font-bold text-white">
            U
          </div>
          <div className="flex h-6 w-6 items-center justify-center rounded border border-[#1A1D21] bg-[#35373B] text-[10px] font-bold text-[#ABABAD]">
            +5
          </div>
        </div>
      </div>

      <div className="flex-1 space-y-6 overflow-y-auto p-4">
        <div className="relative my-4 flex items-center justify-center">
          <div className="absolute top-1/2 h-px w-full bg-[#36373A]"></div>
          <span className="relative rounded-full border border-[#36373A] bg-[#1A1D21] px-3 text-xs font-bold text-[#ABABAD]">Today</span>
        </div>

        <div className="group -mx-4 flex gap-3 px-4 py-1 transition-colors hover:bg-[#222529]">
          <div className="mt-1 h-9 w-9 shrink-0 cursor-pointer overflow-hidden rounded bg-indigo-500 hover:opacity-80">
            <ProfileImage className="h-full w-full" />
          </div>
          <div className="min-w-0 flex-1">
            <div className="flex items-baseline gap-2">
              <span className="cursor-pointer font-bold hover:underline">Your Name</span>
              <span className="text-xs text-[#ABABAD]">10:42 AM</span>
            </div>
            <p className="text-[15px] leading-relaxed">
              Just pushed the new updates to production! 🚀 <br />
              The new profile preview component is looking crisp. Check it out when you can.
            </p>
            <div className="mt-1 flex gap-1">
              <div className="flex cursor-pointer items-center gap-1 rounded-full border border-[#36373A] bg-[#222529] px-1.5 py-0.5 hover:border-[#ABABAD]">
                <span>🔥</span> <span className="text-xs font-bold text-[#36C5F0]">2</span>
              </div>
            </div>
          </div>
        </div>

        <div className="group -mx-4 flex gap-3 px-4 py-1 transition-colors hover:bg-[#222529]">
          <div className="mt-1 flex h-9 w-9 shrink-0 items-center justify-center rounded bg-pink-500 font-bold text-white">T</div>
          <div className="min-w-0 flex-1">
            <div className="flex items-baseline gap-2">
              <span className="cursor-pointer font-bold hover:underline">Teammate</span>
              <span className="text-xs text-[#ABABAD]">10:45 AM</span>
            </div>
            <p className="text-[15px] leading-relaxed">Nice work! The rounded square crop for Slack is a nice touch. 👌</p>
          </div>
        </div>
      </div>

      <Navigation className={bgMain} safeAreaClassName="pb-4">
        <div className="px-4 pt-2">
          <div className="rounded-xl border border-[#56585B] bg-[#222529] transition-colors focus-within:border-[#ABABAD]">
            <div className="flex items-center gap-1 rounded-t-xl border-b border-[#36373A] bg-[#2B2D31] p-1">
              <div className="cursor-pointer rounded p-1 hover:bg-[#3F4145]">
                <span className="text-xs font-bold">B</span>
              </div>
              <div className="cursor-pointer rounded p-1 hover:bg-[#3F4145]">
                <span className="text-xs italic">I</span>
              </div>
              <div className="cursor-pointer rounded p-1 hover:bg-[#3F4145]">
                <span className="text-xs line-through">S</span>
              </div>
              <div className="mx-1 h-4 w-px bg-[#56585B]"></div>
              <div className="cursor-pointer rounded p-1 hover:bg-[#3F4145]">
                <span className="text-xs">Link</span>
              </div>
            </div>

            <input
              type="text"
              placeholder="Message #general"
              className="w-full bg-transparent p-3 text-[#D1D2D3] outline-none placeholder-[#616061]"
            />

            <div className="flex items-center justify-between p-2">
              <div className="flex gap-2 text-[#ABABAD]">
                <div className="cursor-pointer rounded-full p-1.5 hover:bg-[#35373B]">
                  <LuUserPlus size={16} />
                </div>
                <div className="cursor-pointer rounded-full p-1.5 hover:bg-[#35373B]">
                  <LuSmile size={16} />
                </div>
                <div className="cursor-pointer rounded-full p-1.5 hover:bg-[#35373B]">
                  <LuPaperclip size={16} />
                </div>
              </div>
              <div className="cursor-pointer rounded bg-[#007A5A] p-2 text-white transition-colors hover:bg-[#148567]">
                <LuSend size={16} className="ml-0.5" />
              </div>
            </div>
          </div>
          <div className="mt-2 text-center text-[11px] text-[#616061]">
            <strong>Tip:</strong> Press Enter to send
          </div>
        </div>
      </Navigation>
    </div>
  </div>
));

export const SlackView = () => {
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
