import { clsx } from 'clsx';
import { memo } from 'react';
import { LuCirclePlus, LuGift, LuHash, LuMenu, LuPhone, LuSearch, LuSettings, LuSmile, LuSticker, LuUsers, LuVideo } from 'react-icons/lu';

import { Perspective } from '../../app/constants';
import { ProfileImage } from '../shared/Image';
import { Navigation } from '../shared/Navigation';
import { MockupContent, MockupScreen, PerspectiveSwitcher } from './MockupBase';

const bgMain = 'bg-discord-main';
const bgSidebar = 'bg-discord-sidebar';
const bgUserCard = 'bg-discord-user-card';
const textMain = 'text-text-main';
const textMuted = 'text-text-muted';

const BottomNav = () => (
  <Navigation className={clsx(bgSidebar, 'border-t border-discord-main')} safeAreaClassName="pb-6">
    <div className="flex h-[56px] items-center justify-around px-2">
      <div className="group flex cursor-pointer flex-col items-center gap-1">
        <div className="rounded-full bg-discord-accent p-1 text-text-main">
          <div className="flex h-5 w-5 items-center justify-center text-[10px] font-bold">D</div>
        </div>
        <span className="text-[10px] font-medium text-text-main">Servers</span>
      </div>
      <div className="group flex cursor-pointer flex-col items-center gap-1 text-text-muted hover:text-text-main">
        <LuUsers size={24} />
        <span className="text-[10px] font-medium">Friends</span>
      </div>
      <div className="group flex cursor-pointer flex-col items-center gap-1 text-text-muted hover:text-text-main">
        <div className="relative">
          <LuSearch size={24} />
          <div className="absolute -bottom-1 -right-1 h-3 w-3 rounded-full border-2 border-discord-sidebar bg-status-online"></div>
        </div>
        <span className="text-[10px] font-medium">Search</span>
      </div>
      <div className="group flex cursor-pointer flex-col items-center gap-1 text-text-main">
        <div className="relative h-6 w-6 overflow-hidden rounded-full ring-2 ring-status-online">
          <ProfileImage />
        </div>
        <span className="text-[10px] font-medium">You</span>
      </div>
    </div>
  </Navigation>
);

const NitroBadge = () => (
  <div
    className="cursor-pointer rounded-full bg-gradient-to-br from-discord-nitro-start to-discord-nitro-end p-[2px] transition-transform hover:scale-110"
    title="Nitro Subscriber"
  >
    <div className="rounded-full bg-discord-user-card p-0.5">
      <LuGift size={12} className="text-discord-nitro-start" />
    </div>
  </div>
);

const ProfileView = memo(() => (
  <MockupScreen className={clsx(bgUserCard, textMain)}>
    <div className="absolute left-0 right-0 top-0 z-30 flex h-14 items-center justify-end gap-4 bg-transparent px-4">
      <LuSettings size={24} className="text-text-main drop-shadow-md" />
    </div>

    <MockupContent>
      <div className="relative h-[180px] w-full bg-discord-accent">
        <div className="absolute inset-0 bg-gradient-to-t from-discord-user-card/80 to-transparent"></div>
      </div>

      <div className="relative z-10 -mt-[50px] px-4 pb-4">
        <div className="relative inline-block">
          <div className="h-[100px] w-[100px] rounded-full bg-discord-user-card p-[6px]">
            <ProfileImage className="h-full w-full rounded-full" />
          </div>
          <div className="absolute bottom-1 right-1 flex h-7 w-7 items-center justify-center rounded-full bg-discord-user-card">
            <div className="h-5 w-5 rounded-full border-[3px] border-discord-user-card bg-status-online"></div>
          </div>
        </div>

        <div className="mt-3 rounded-2xl bg-discord-sidebar p-4 shadow-lg">
          <div className="flex items-start justify-between">
            <div>
              <h1 className="text-xl font-bold leading-tight text-text-main">Your Name</h1>
              <div className="mt-0.5 text-sm font-medium text-text-main">username</div>
              <div className="mt-1 text-xs text-text-secondary">Pronouns</div>
            </div>
            <NitroBadge />
          </div>

          <div className="mt-4 flex items-center gap-2 rounded-lg border border-discord-user-card bg-discord-main p-2">
            <div className="flex h-5 w-5 items-center justify-center rounded bg-surface-elevated text-xs">💻</div>
            <span className="text-sm">Building the future...</span>
          </div>

          <div className="mt-4 border-t border-border-subtle pt-3">
            <h3 className="mb-2 text-xs font-bold uppercase text-text-muted">About Me</h3>
            <p className="text-sm leading-relaxed text-text-main opacity-90">
              Developer & Designer. <br />
              Trying out the new profile previewer! 🎨
            </p>
          </div>

          <div className="mt-4 border-t border-border-subtle pt-3">
            <h3 className="mb-2 text-xs font-bold uppercase text-text-muted">Member Since</h3>
            <div className="text-sm text-text-main opacity-90">Dec 12, 2018</div>
          </div>
        </div>

        <div className="mt-3 rounded-2xl bg-discord-sidebar p-4 shadow-lg">
          <h3 className="mb-3 text-xs font-bold uppercase text-text-muted">Activity</h3>
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-discord-accent">
              <span className="text-lg font-bold text-text-main">V</span>
            </div>
            <div>
              <div className="text-sm font-bold text-text-main">Code Editor</div>
              <div className="text-xs text-text-muted">Editing DiscordView.tsx</div>
              <div className="text-xs text-text-muted">02:45 elapsed</div>
            </div>
          </div>
        </div>
      </div>
    </MockupContent>
    <BottomNav />
  </MockupScreen>
));

const ChatView = memo(() => (
  <MockupScreen className={clsx(bgMain, textMain)}>
    <div className="flex flex-1 min-w-0 flex-col">
      <div className={clsx('flex h-12 shrink-0 items-center justify-between border-b border-discord-main px-4 shadow-sm', bgSidebar)}>
        <div className="flex items-center gap-3">
          <LuMenu size={24} className={textMuted} />
          <div className="flex items-center gap-2">
            <LuHash size={20} className={textMuted} />
            <span className="text-base font-bold text-text-main">general</span>
          </div>
        </div>
        <div className="flex items-center gap-4 text-text-main">
          <LuPhone size={22} />
          <LuVideo size={24} />
          <LuUsers size={22} />
        </div>
      </div>

      <MockupContent className="space-y-5 p-4">
        <div className="group flex gap-4">
          <div className="mt-1 h-10 w-10 shrink-0 cursor-pointer transition-opacity hover:opacity-80">
            <ProfileImage className="h-full w-full rounded-full" />
          </div>
          <div className="min-w-0 flex-1">
            <div className="mb-0.5 flex items-center gap-2">
              <span className="cursor-pointer text-base font-medium text-text-main hover:underline">Your Name</span>
              <span className="rounded bg-discord-accent px-1.5 py-0.5 text-[10px] font-bold uppercase text-text-main">BOT</span>
              <span className="text-xs text-text-secondary">Today at 4:20 PM</span>
            </div>
            <p className="leading-snug text-text-main opacity-90">
              Hey everyone! Just checking out the new profile styles. <span className="inline-block align-middle text-[1.25em]">👀</span>
            </p>

            <div className="mt-1.5 flex gap-1">
              <div className="flex cursor-pointer items-center gap-1 rounded-lg border border-discord-accent bg-discord-sidebar px-1.5 py-0.5">
                <span className="text-sm">🔥</span>
                <span className="text-xs font-bold text-discord-accent">3</span>
              </div>
            </div>
          </div>
        </div>

        <div className="group mt-2 flex gap-4">
          <div className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-yellow-500 font-bold text-discord-main">U</div>
          <div className="min-w-0 flex-1">
            <div className="mb-0.5 flex items-center gap-2">
              <span className="cursor-pointer text-base font-medium text-red-400 hover:underline">User</span>
              <span className="text-xs text-text-secondary">Today at 4:22 PM</span>
            </div>
            <p className="leading-snug text-text-main opacity-90">That looks super clean! Did you edit that yourself?</p>
          </div>
        </div>
      </MockupContent>

      <Navigation className={clsx(bgMain)} safeAreaClassName="pb-6">
        <div className="px-4 pt-2">
          <div className={clsx('flex items-center gap-2 rounded-full bg-surface-elevated/50 px-4 py-2.5')}>
            <div className="cursor-pointer rounded-full bg-text-muted p-0.5 transition-colors hover:text-text-main">
              <LuCirclePlus size={20} className="text-surface-elevated" fill="currentColor" />
            </div>
            <input
              type="text"
              placeholder="Message #general"
              className="min-w-0 flex-1 border-none bg-transparent text-text-main opacity-90 outline-none placeholder-text-muted"
            />
            <LuGift size={24} className="cursor-pointer text-text-muted hover:text-text-main" />
            <LuSticker size={24} className="cursor-pointer text-text-muted hover:text-text-main" />
            <LuSmile size={24} className="cursor-pointer text-text-muted hover:text-text-main" />
          </div>
        </div>
      </Navigation>
    </div>
  </MockupScreen>
));

export const DiscordView = memo(() => (
  <PerspectiveSwitcher
    screens={{
      [Perspective.Profile]: <ProfileView />,
      [Perspective.Chat]: <ChatView />,
    }}
  />
));
