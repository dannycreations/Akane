import { clsx } from 'clsx';
import { memo } from 'react';
import { LuBell, LuEllipsis, LuGlobe, LuHouse, LuImage, LuMessageCircle, LuSearch, LuShare2, LuThumbsUp, LuTv, LuUsers } from 'react-icons/lu';

import { Perspective } from '../../app/constants';
import { PostImage, ProfileImage } from '../shared/Image';
import { MockupContent, MockupScreen, PerspectiveSwitcher } from './MockupBase';

const ProfileView = memo(() => (
  <MockupScreen className="bg-facebook-main text-text-main">
    <MockupContent>
      <div className="relative">
        <div className="h-40 w-full bg-gradient-to-r from-blue-900 to-surface-elevated"></div>
        <div className="absolute -bottom-12 left-4">
          <div className="h-[130px] w-[130px] rounded-full bg-facebook-main p-1">
            <ProfileImage className="h-full w-full rounded-full ring-2 ring-border-subtle" />
          </div>
          <div className="absolute bottom-2 right-2 rounded-full border-2 border-facebook-main bg-facebook-secondary p-1.5">
            <LuImage size={14} className="text-text-main" />
          </div>
        </div>
      </div>

      <div className="mt-14 border-b border-border-subtle px-4 pb-4">
        <h1 className="text-2xl font-bold">Your Name</h1>
        <p className="text-sm font-medium text-text-muted">1.2K friends</p>

        <div className="mt-4 flex gap-2">
          <button className="flex flex-1 items-center justify-center gap-2 rounded-md bg-facebook-accent py-2 text-sm font-semibold text-text-main">
            <span className="text-lg">+</span> Add to Story
          </button>
          <button className="flex flex-1 items-center justify-center gap-2 rounded-md bg-facebook-secondary py-2 text-sm font-semibold text-text-main">
            Edit profile
          </button>
        </div>
      </div>

      <div className="space-y-4 p-4">
        <div className="rounded-lg bg-facebook-surface p-4">
          <div className="mb-2 text-lg font-bold">Details</div>
          <div className="space-y-3 text-sm text-text-muted">
            <div className="flex items-center gap-2">
              <div className="w-5" />
              Designer at <strong className="text-text-main">Workplace</strong>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-5" />
              Studied at <strong className="text-text-main">University</strong>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-5" />
              Lives in <strong className="text-text-main">City</strong>
            </div>
          </div>
        </div>
      </div>
    </MockupContent>
  </MockupScreen>
));

const FeedView = memo(() => (
  <MockupScreen className="bg-facebook-main text-text-main">
    <div className={clsx('z-20 flex h-14 shrink-0 items-center justify-between border-b border-border-subtle bg-facebook-surface px-4')}>
      <h1 className="text-2xl font-bold tracking-tighter text-facebook-accent">facebook</h1>
      <div className="flex gap-2">
        <div className="flex h-9 w-9 items-center justify-center rounded-full bg-facebook-secondary">
          <LuSearch size={18} />
        </div>
        <div className="flex h-9 w-9 items-center justify-center rounded-full bg-facebook-secondary">
          <LuMessageCircle size={18} />
        </div>
      </div>
    </div>

    <div className="z-10 flex h-12 shrink-0 items-center justify-around border-b border-border-subtle bg-facebook-surface px-2">
      <div className="flex h-full items-center border-b-2 border-facebook-accent px-4 text-facebook-accent">
        <LuHouse size={24} fill="currentColor" />
      </div>
      <div className="flex h-full items-center px-4 text-text-muted">
        <LuUsers size={24} />
      </div>
      <div className="flex h-full items-center px-4 text-text-muted opacity-60">
        <LuTv size={24} />
      </div>
      <div className="flex h-full items-center px-4 text-text-muted opacity-60">
        <LuBell size={24} />
      </div>
    </div>

    <MockupContent className="pt-2">
      <div className="mb-2 bg-facebook-surface p-3">
        <div className="flex gap-3">
          <div className="h-10 w-10 shrink-0">
            <ProfileImage className="h-full w-full rounded-full" />
          </div>
          <div className="flex flex-1 items-center rounded-full bg-facebook-secondary px-4 text-sm text-text-muted">What's on your mind?</div>
        </div>
      </div>

      <div className="bg-facebook-surface pb-2">
        <div className="flex items-start justify-between p-3">
          <div className="flex gap-2">
            <div className="h-10 w-10 shrink-0">
              <ProfileImage className="h-full w-full rounded-full" />
            </div>
            <div>
              <div className="text-sm font-semibold leading-tight text-text-main">Your Name</div>
              <div className="mt-0.5 flex items-center gap-1 text-xs text-text-muted">
                <span>Just now</span>
                <span>·</span>
                <LuGlobe size={10} />
              </div>
            </div>
          </div>
          <LuEllipsis size={20} className="text-text-muted" />
        </div>

        <div className="px-3 pb-3 text-sm text-text-main">New profile picture! What do you guys think? 😎</div>

        <div className="w-full">
          <PostImage containerClass="w-full" imageClass="block h-auto w-full" />
        </div>

        <div className="flex items-center justify-between border-b border-border-subtle px-3 py-2 text-sm text-text-muted">
          <div className="flex items-center gap-1">
            <div className="flex h-4 w-4 items-center justify-center rounded-full bg-facebook-accent">
              <LuThumbsUp size={10} fill="white" className="text-text-main" />
            </div>
            <span>12</span>
          </div>
          <div className="flex gap-3">
            <span>4 comments</span>
            <span>1 share</span>
          </div>
        </div>

        <div className="flex items-center justify-between px-2 py-1 text-text-muted">
          <button className="flex flex-1 items-center justify-center gap-2 rounded-md py-2 text-sm font-medium transition-colors hover:bg-facebook-secondary/50">
            <LuThumbsUp size={18} /> Like
          </button>
          <button className="flex flex-1 items-center justify-center gap-2 rounded-md py-2 text-sm font-medium transition-colors hover:bg-facebook-secondary/50">
            <LuMessageCircle size={18} /> Comment
          </button>
          <button className="flex flex-1 items-center justify-center gap-2 rounded-md py-2 text-sm font-medium transition-colors hover:bg-facebook-secondary/50">
            <LuShare2 size={18} /> Share
          </button>
        </div>
      </div>
    </MockupContent>
  </MockupScreen>
));

export const FacebookView = memo(() => (
  <PerspectiveSwitcher
    screens={{
      [Perspective.Profile]: <ProfileView />,
      [Perspective.Feed]: <FeedView />,
    }}
  />
));
