import { memo } from 'react';
import { BsBarChartFill } from 'react-icons/bs';
import {
  LuArrowLeft,
  LuBell,
  LuCalendar,
  LuEllipsis,
  LuHeart,
  LuHouse,
  LuLink,
  LuMail,
  LuMapPin,
  LuMessageCircle,
  LuRepeat,
  LuSearch,
  LuShare,
  LuSquarePlus,
  LuUsers,
} from 'react-icons/lu';

import { Perspective } from '../../app/constants';
import { useStore } from '../../stores/useStore';
import { ProfileImage } from '../shared/Image';
import { Navigation } from '../shared/Navigation';

const VerifiedBadge = () => (
  <svg viewBox="0 0 22 22" className="ml-1 h-[18px] w-[18px] fill-current text-[#1d9bf0]">
    <g>
      <path d="M20.396 11c-.018-.646-.215-1.275-.57-1.816-.354-.54-.852-.972-1.438-1.246.223-.607.27-1.264.14-1.897-.131-.634-.437-1.218-.882-1.687-.47-.445-1.053-.75-1.687-.882-.633-.13-1.29-.083-1.897.14-.273-.587-.704-1.086-1.245-1.44S11.647 1.62 11 1.604c-.646.017-1.273.213-1.813.568s-.969.854-1.24 1.44c-.608-.223-1.267-.272-1.902-.14-.635.13-1.22.436-1.687.882-.445.47-.749 1.055-.878 1.688-.13.633-.08 1.29.144 1.896-.587.274-1.087.705-1.443 1.245-.356.54-.555 1.17-.574 1.817.02.647.218 1.276.574 1.817.356.54.856.972 1.443 1.245-.224.606-.274 1.263-.144 1.896.13.634.433 1.218.877 1.688.47.443 1.054.747 1.687.878.633.132 1.29.084 1.897-.136.274.586.705 1.084 1.246 1.439.54.354 1.17.551 1.816.569.647-.016 1.276-.213 1.817-.567s.972-.854 1.245-1.44c.604.239 1.266.296 1.903.164.636-.132 1.22-.447 1.68-.907.46-.46.776-1.044.908-1.681s.075-1.299-.165-1.903c.586-.274 1.084-.705 1.439-1.246.354-.54.551-1.17.569-1.816zM9.662 14.85l-3.429-3.428 1.293-1.302 2.072 2.072 4.4-4.794 1.347 1.246z"></path>
    </g>
  </svg>
);

const XLogo = () => (
  <svg viewBox="0 0 24 24" className="h-6 w-6 fill-current text-white">
    <g>
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path>
    </g>
  </svg>
);

const BottomNav = () => (
  <Navigation className="border-t border-[#2f3336] bg-black" safeAreaClassName="pb-6">
    <div className="flex h-[52px] items-center justify-between px-6">
      <LuHouse size={26} className="fill-current text-white" />
      <LuSearch size={26} className="text-[#71767b]" />
      <div className="flex h-6 w-6 items-center justify-center rounded border-2 border-[#71767b]">
        <div className="h-0.5 w-3 rotate-45 bg-[#71767b]"></div>
      </div>
      <LuUsers size={26} className="text-[#71767b]" />
      <LuBell size={26} className="text-[#71767b]" />
      <LuMail size={26} className="text-[#71767b]" />
    </div>
  </Navigation>
);

const ProfileView = memo(() => (
  <div className="relative flex h-full w-full flex-col overflow-hidden bg-black font-sans text-[#e7e9ea]">
    <div className="absolute left-0 right-0 top-0 z-20 flex h-14 items-center justify-between bg-black/60 px-4 backdrop-blur-sm">
      <div className="flex h-8 w-8 cursor-pointer items-center justify-center rounded-full bg-black/50 hover:bg-white/10">
        <LuArrowLeft size={20} className="text-white" />
      </div>
      <div className="flex items-center gap-4">
        <LuSearch size={20} className="text-white" />
        <LuEllipsis size={20} className="text-white" />
      </div>
    </div>

    <div className="flex-1 overflow-y-auto no-scrollbar">
      <div className="relative h-32 w-full bg-[#333639]"></div>

      <div className="relative border-b border-[#2f3336] px-4 pb-4">
        <div className="-mt-[40px] mb-3 flex items-end justify-between">
          <div className="h-[88px] w-[88px] rounded-full bg-black p-1">
            <ProfileImage className="h-full w-full rounded-full border-2 border-black" />
          </div>
          <button className="rounded-full border border-[#536471] px-4 py-1.5 text-sm font-bold transition-colors hover:bg-white/10">
            Edit profile
          </button>
        </div>

        <div>
          <h1 className="flex items-center text-xl font-bold text-[#e7e9ea]">
            Your Name <VerifiedBadge />
          </h1>
          <div className="text-sm text-[#71767b]">@username</div>
        </div>

        <div className="mt-3 text-[15px] leading-snug">Bio description goes here. 🚀 opinions my own.</div>

        <div className="mt-3 flex flex-wrap gap-x-4 gap-y-1 text-sm text-[#71767b]">
          <div className="flex items-center gap-1">
            <LuMapPin size={16} />
            <span>Location</span>
          </div>
          <div className="flex items-center gap-1">
            <LuLink size={16} />
            <span className="text-[#1d9bf0]">website.com</span>
          </div>
          <div className="flex items-center gap-1">
            <LuCalendar size={16} />
            <span>Joined September 2012</span>
          </div>
        </div>

        <div className="mt-3 flex gap-4 text-sm">
          <div className="cursor-pointer hover:underline">
            <span className="font-bold text-[#e7e9ea]">420</span> <span className="text-[#71767b]">Following</span>
          </div>
          <div className="cursor-pointer hover:underline">
            <span className="font-bold text-[#e7e9ea]">8,942</span> <span className="text-[#71767b]">Followers</span>
          </div>
        </div>
      </div>

      <div className="flex border-b border-[#2f3336]">
        {['Posts', 'Replies', 'Highlights', 'Media'].map((tab, i) => (
          <div key={tab} className="relative flex flex-1 cursor-pointer justify-center py-3 hover:bg-white/5">
            <span className={`text-sm font-bold ${i === 0 ? 'text-[#e7e9ea]' : 'text-[#71767b]'}`}>{tab}</span>
            {i === 0 && <div className="absolute bottom-0 h-1 w-10 rounded-full bg-[#1d9bf0]"></div>}
          </div>
        ))}
      </div>

      <div className="cursor-pointer border-b border-[#2f3336] p-4 transition-colors hover:bg-white/[0.03]">
        <div className="mb-1 flex items-center gap-2 text-xs font-bold text-[#71767b]">
          <div className="h-3 w-3 fill-current">📌</div> Pinned
        </div>
        <div className="flex gap-3">
          <div className="h-10 w-10 shrink-0">
            <ProfileImage className="h-full w-full rounded-full" />
          </div>
          <div className="flex-1">
            <div className="flex items-center gap-1 text-sm text-[#71767b]">
              <span className="font-bold text-[#e7e9ea]">Your Name</span>
              <VerifiedBadge />
              <span>@username</span>
              <span>·</span>
              <span>2h</span>
              <LuEllipsis size={14} className="ml-auto" />
            </div>
            <div className="mt-1 text-[15px] text-[#e7e9ea]">
              Setting up my new profile picture with this sweet preview tool. What do you think? 👀
            </div>
            <div className="mt-2 flex h-48 w-full items-center justify-center overflow-hidden rounded-2xl border border-[#2f3336] bg-[#333639]">
              <div className="rounded-full bg-[#1d9bf0] px-4 py-2 font-bold text-white">GIF</div>
            </div>
            <div className="mt-3 flex max-w-xs justify-between text-[#71767b]">
              <div className="group flex items-center gap-2 hover:text-[#1d9bf0]">
                <div className="rounded-full p-1.5 group-hover:bg-[#1d9bf0]/10">
                  <LuMessageCircle size={16} />
                </div>
                <span className="text-xs">24</span>
              </div>
              <div className="group flex items-center gap-2 hover:text-[#00ba7c]">
                <div className="rounded-full p-1.5 group-hover:bg-[#00ba7c]/10">
                  <LuRepeat size={16} />
                </div>
                <span className="text-xs">8</span>
              </div>
              <div className="group flex items-center gap-2 hover:text-[#f91880]">
                <div className="rounded-full p-1.5 group-hover:bg-[#f91880]/10">
                  <LuHeart size={16} />
                </div>
                <span className="text-xs">152</span>
              </div>
              <div className="group flex items-center gap-2 hover:text-[#1d9bf0]">
                <div className="rounded-full p-1.5 group-hover:bg-[#1d9bf0]/10">
                  <BsBarChartFill size={16} />
                </div>
                <span className="text-xs">1.2k</span>
              </div>
              <div className="flex items-center gap-2 hover:text-[#1d9bf0]">
                <LuShare size={16} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div className="absolute bottom-16 right-4 flex h-14 w-14 cursor-pointer items-center justify-center rounded-full bg-[#1d9bf0] shadow-lg hover:bg-[#1a8cd8]">
      <svg viewBox="0 0 24 24" className="h-6 w-6 fill-current text-white">
        <g>
          <path d="M23 3c-6.62-.1-10.38 2.421-13.05 6.03C7.29 12.61 6 17.331 6 22h2c0-1.007.07-2.012.19-3H12c4.1 0 7.48-3.082 7.94-7.054C22.79 10.147 23.17 6.359 23 3zm-7 8h-1.5v2H16c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4v1h2v-1c0-1.103.897-2 2-2s2 .897 2 2-.897 2-2 2z"></path>
        </g>
      </svg>
    </div>

    <BottomNav />
  </div>
));

const FeedView = memo(() => (
  <div className="relative flex h-full w-full flex-col bg-black font-sans text-[#e7e9ea]">
    <div className="sticky top-0 z-30 flex h-14 shrink-0 items-center justify-between border-b border-[#2f3336] bg-black/80 px-4 backdrop-blur-md">
      <div className="h-8 w-8 overflow-hidden rounded-full">
        <ProfileImage className="h-full w-full" />
      </div>
      <XLogo />
      <div className="w-8"></div>
    </div>

    <div className="flex-1 overflow-y-auto no-scrollbar">
      <div className="flex border-b border-[#2f3336]">
        <div className="relative flex flex-1 cursor-pointer justify-center py-3 hover:bg-white/5">
          <span className="text-sm font-bold text-[#e7e9ea]">For you</span>
          <div className="absolute bottom-0 h-1 w-14 rounded-full bg-[#1d9bf0]"></div>
        </div>
        <div className="relative flex flex-1 cursor-pointer justify-center py-3 hover:bg-white/5">
          <span className="text-sm font-medium text-[#71767b]">Following</span>
        </div>
      </div>

      <div className="cursor-pointer border-b border-[#2f3336] p-4 transition-colors hover:bg-white/[0.03]">
        <div className="flex gap-3">
          <div className="h-10 w-10 shrink-0">
            <ProfileImage className="h-full w-full rounded-full" />
          </div>
          <div className="flex-1">
            <div className="flex items-center gap-1 text-sm text-[#71767b]">
              <span className="font-bold text-[#e7e9ea]">Your Name</span>
              <VerifiedBadge />
              <span>@username</span>
              <span>·</span>
              <span>42m</span>
              <LuEllipsis size={14} className="ml-auto" />
            </div>
            <div className="mt-1 text-[15px] text-[#e7e9ea]">just dropped a new update. the design system is cleaner than ever. 😮‍💨✨</div>

            <div className="mt-3 flex max-w-xs justify-between text-[#71767b]">
              <div className="group flex items-center gap-2 hover:text-[#1d9bf0]">
                <div className="rounded-full p-1.5 group-hover:bg-[#1d9bf0]/10">
                  <LuMessageCircle size={16} />
                </div>
                <span className="text-xs">3</span>
              </div>
              <div className="group flex items-center gap-2 hover:text-[#00ba7c]">
                <div className="rounded-full p-1.5 group-hover:bg-[#00ba7c]/10">
                  <LuRepeat size={16} />
                </div>
                <span className="text-xs">1</span>
              </div>
              <div className="group flex items-center gap-2 hover:text-[#f91880]">
                <div className="rounded-full p-1.5 group-hover:bg-[#f91880]/10">
                  <LuHeart size={16} />
                </div>
                <span className="text-xs">42</span>
              </div>
              <div className="group flex items-center gap-2 hover:text-[#1d9bf0]">
                <div className="rounded-full p-1.5 group-hover:bg-[#1d9bf0]/10">
                  <BsBarChartFill size={16} />
                </div>
                <span className="text-xs">850</span>
              </div>
              <div className="flex items-center gap-2 hover:text-[#1d9bf0]">
                <LuShare size={16} />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="cursor-pointer border-b border-[#2f3336] p-4 transition-colors hover:bg-white/[0.03]">
        <div className="flex gap-3">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-indigo-500 font-bold text-white">U</div>
          <div className="flex-1">
            <div className="flex items-center gap-1 text-sm text-[#71767b]">
              <span className="font-bold text-[#e7e9ea]">User</span>
              <span>@user</span>
              <span>·</span>
              <span>1h</span>
              <LuEllipsis size={14} className="ml-auto" />
            </div>
            <div className="mt-1 text-[15px] text-[#e7e9ea]">wait this tool is actually so useful? no more guessing how my pfp looks cropped?</div>
          </div>
        </div>
      </div>
    </div>

    <div className="absolute bottom-20 right-4 flex h-14 w-14 cursor-pointer items-center justify-center rounded-full bg-[#1d9bf0] shadow-lg hover:bg-[#1a8cd8]">
      <LuSquarePlus size={24} className="text-white" />
    </div>

    <BottomNav />
  </div>
));

export const TwitterView = () => {
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
