import { clsx } from 'clsx';
import { memo } from 'react';
import { LuChevronDown, LuClock, LuEllipsis, LuHash, LuMessageSquare, LuPaperclip, LuSend, LuSmile, LuUserPlus, LuVideo, LuX } from 'react-icons/lu';

import { Perspective } from '../../app/constants';
import { ProfileImage } from '../shared/Image';
import { Navigation } from '../shared/Navigation';
import { MockupContent, MockupScreen, PerspectiveSwitcher } from './MockupBase';

const bgMain = 'bg-slack-main';
const textPrimary = 'text-text-main';
const textSecondary = 'text-text-muted';
const border = 'border-border-subtle';

const ProfileView = memo(() => (
  <MockupScreen className={clsx(bgMain, textPrimary)}>
    <div className={clsx('z-20 flex h-14 items-center justify-between border-b bg-slack-main px-4', border)}>
      <h2 className="text-lg font-bold">Profile</h2>
      <div className="cursor-pointer rounded-lg p-2 hover:bg-slate-700/50">
        <LuX size={20} className={clsx(textSecondary)} />
      </div>
    </div>

    <MockupContent className="p-6">
      <div className="mb-6 flex flex-col items-center">
        <div className="group relative cursor-pointer">
          <div className="h-[180px] w-[180px] overflow-hidden rounded-3xl shadow-2xl ring-4 ring-slack-main">
            <ProfileImage className="h-full w-full" />
          </div>
          <div className="absolute bottom-2 right-2 flex h-8 w-8 items-center justify-center rounded-full bg-slack-main">
            <div className="h-5 w-5 rounded-full border-2 border-slack-main bg-[#2BAC76]"></div>
          </div>
        </div>

        <h1 className="mt-4 text-2xl font-bold">Your Name</h1>
        <div className={clsx('mt-1', textSecondary)}>Job Title</div>

        <button className="mt-4 flex w-full max-w-[240px] justify-center gap-2 rounded-lg border border-slate-600 px-4 py-1.5 transition-colors hover:bg-slate-700/50">
          <LuSmile size={16} />
          <span className="text-sm">Update your status</span>
        </button>
      </div>

      <div className="mb-8 flex justify-center gap-3">
        <button className="flex flex-1 items-center justify-center gap-2 rounded-lg border border-slate-600 bg-transparent px-4 py-2 text-sm font-semibold transition-colors hover:bg-slate-700/50">
          <LuMessageSquare size={16} /> Message
        </button>
        <button className="flex flex-1 items-center justify-center gap-2 rounded-lg border border-slate-600 bg-transparent px-4 py-2 text-sm font-semibold transition-colors hover:bg-slate-700/50">
          <LuVideo size={16} /> Huddle
        </button>
        <button className="flex w-10 items-center justify-center rounded-lg border border-slate-600 hover:bg-slate-700/50">
          <LuEllipsis size={16} />
        </button>
      </div>

      <div className="space-y-5 rounded-2xl border border-border-subtle bg-slack-surface p-4">
        <div>
          <label className="mb-1 block text-xs font-bold uppercase text-slate-400">Contact Info</label>
          <div className="mt-2 flex items-center gap-3">
            <div className="flex h-8 w-8 items-center justify-center rounded bg-slate-700/50">
              <LuMessageSquare size={16} className="text-slate-400" />
            </div>
            <div>
              <div className="cursor-pointer text-sm text-slack-accent hover:underline">user@company.com</div>
              <div className="text-xs text-slate-400">Email</div>
            </div>
          </div>
        </div>

        <div className="h-px w-full bg-border-subtle" />

        <div className="flex items-start gap-4">
          <div className="flex-1">
            <label className="mb-1 block text-xs font-bold uppercase text-slate-400">Local Time</label>
            <div className="flex items-center gap-2 text-sm">
              <LuClock size={14} className={clsx(textSecondary)} /> 10:42 AM
            </div>
          </div>
          <div className="flex-1">
            <label className="mb-1 block text-xs font-bold uppercase text-[#ABABAD]">Pronouns</label>
            <div className="text-sm">they/them</div>
          </div>
        </div>
      </div>
    </MockupContent>
  </MockupScreen>
));

const ChatView = memo(() => (
  <MockupScreen className={clsx(bgMain, textPrimary)}>
    <div className="flex flex-1 min-w-0 flex-col">
      <div className={clsx('flex h-12 shrink-0 items-center justify-between border-b px-4', border)}>
        <div className="flex items-center gap-1 text-lg font-bold">
          <LuHash size={20} className={clsx(textSecondary)} />
          general
          <LuChevronDown size={14} className={clsx(textSecondary)} />
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

      <MockupContent className="space-y-6 p-4">
        <div className="relative my-4 flex items-center justify-center">
          <div className="absolute top-1/2 h-px w-full bg-border-subtle"></div>
          <span className="relative rounded-full border border-border-subtle bg-slack-main px-3 text-xs font-bold text-text-muted">Today</span>
        </div>

        <div className="group -mx-4 flex gap-3 px-4 py-1 transition-colors hover:bg-slack-surface">
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
              <div className="flex cursor-pointer items-center gap-1 rounded-full border border-border-subtle bg-slack-surface px-1.5 py-0.5 hover:border-text-muted">
                <span>🔥</span> <span className="text-xs font-bold text-slack-accent">2</span>
              </div>
            </div>
          </div>
        </div>

        <div className="group -mx-4 flex gap-3 px-4 py-1 transition-colors hover:bg-slack-surface">
          <div className="mt-1 flex h-9 w-9 shrink-0 items-center justify-center rounded bg-pink-500 font-bold text-white">T</div>
          <div className="min-w-0 flex-1">
            <div className="flex items-baseline gap-2">
              <span className="cursor-pointer font-bold hover:underline">Teammate</span>
              <span className="text-xs text-[#ABABAD]">10:45 AM</span>
            </div>
            <p className="text-[15px] leading-relaxed">Nice work! The rounded square crop for Slack is a nice touch. 👌</p>
          </div>
        </div>
      </MockupContent>

      <Navigation className={bgMain} safeAreaClassName="pb-4">
        <div className="px-4 pt-2">
          <div className="rounded-xl border border-slate-600 bg-slack-surface transition-colors focus-within:border-text-muted">
            <div className="flex items-center gap-1 rounded-t-xl border-b border-border-subtle bg-slate-800 p-1">
              <div className="cursor-pointer rounded p-1 hover:bg-slate-700">
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
              className="w-full bg-transparent p-3 text-text-main outline-none placeholder-[#616061]"
            />

            <div className="flex items-center justify-between p-2">
              <div className="flex gap-2 text-slate-400">
                <div className="cursor-pointer rounded-full p-1.5 hover:bg-slate-700/50">
                  <LuUserPlus size={16} />
                </div>
                <div className="cursor-pointer rounded-full p-1.5 hover:bg-[#35373B]">
                  <LuSmile size={16} />
                </div>
                <div className="cursor-pointer rounded-full p-1.5 hover:bg-[#35373B]">
                  <LuPaperclip size={16} />
                </div>
              </div>
              <div className="cursor-pointer rounded bg-[#007A5A] p-2 text-text-main transition-colors hover:bg-[#148567]">
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
  </MockupScreen>
));

export const SlackView = memo(() => (
  <PerspectiveSwitcher
    screens={{
      [Perspective.Profile]: <ProfileView />,
      [Perspective.Chat]: <ChatView />,
    }}
  />
));
