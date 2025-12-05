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

const VerifiedBadge = () => (
  <svg viewBox="0 0 22 22" className="w-[18px] h-[18px] text-[#1d9bf0] fill-current ml-1">
    <g>
      <path d="M20.396 11c-.018-.646-.215-1.275-.57-1.816-.354-.54-.852-.972-1.438-1.246.223-.607.27-1.264.14-1.897-.131-.634-.437-1.218-.882-1.687-.47-.445-1.053-.75-1.687-.882-.633-.13-1.29-.083-1.897.14-.273-.587-.704-1.086-1.245-1.44S11.647 1.62 11 1.604c-.646.017-1.273.213-1.813.568s-.969.854-1.24 1.44c-.608-.223-1.267-.272-1.902-.14-.635.13-1.22.436-1.687.882-.445.47-.749 1.055-.878 1.688-.13.633-.08 1.29.144 1.896-.587.274-1.087.705-1.443 1.245-.356.54-.555 1.17-.574 1.817.02.647.218 1.276.574 1.817.356.54.856.972 1.443 1.245-.224.606-.274 1.263-.144 1.896.13.634.433 1.218.877 1.688.47.443 1.054.747 1.687.878.633.132 1.29.084 1.897-.136.274.586.705 1.084 1.246 1.439.54.354 1.17.551 1.816.569.647-.016 1.276-.213 1.817-.567s.972-.854 1.245-1.44c.604.239 1.266.296 1.903.164.636-.132 1.22-.447 1.68-.907.46-.46.776-1.044.908-1.681s.075-1.299-.165-1.903c.586-.274 1.084-.705 1.439-1.246.354-.54.551-1.17.569-1.816zM9.662 14.85l-3.429-3.428 1.293-1.302 2.072 2.072 4.4-4.794 1.347 1.246z"></path>
    </g>
  </svg>
);

const XLogo = () => (
  <svg viewBox="0 0 24 24" className="w-6 h-6 text-white fill-current">
    <g>
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path>
    </g>
  </svg>
);

const BottomNav = () => (
  <div className="h-[52px] bg-black border-t border-[#2f3336] flex items-center justify-between px-6 shrink-0 z-50">
    <LuHouse size={26} className="text-white fill-current" />
    <LuSearch size={26} className="text-[#71767b]" />
    <div className="w-6 h-6 border-2 border-[#71767b] rounded flex items-center justify-center">
      <div className="w-3 h-0.5 bg-[#71767b] rotate-45"></div>
    </div>
    <LuUsers size={26} className="text-[#71767b]" />
    <LuBell size={26} className="text-[#71767b]" />
    <LuMail size={26} className="text-[#71767b]" />
  </div>
);

const ProfileView = memo(() => (
  <div className="w-full h-full bg-black text-[#e7e9ea] font-sans flex flex-col relative overflow-hidden">
    <div className="absolute top-0 left-0 right-0 h-14 flex items-center justify-between px-4 z-20 bg-black/60 backdrop-blur-sm">
      <div className="w-8 h-8 flex items-center justify-center bg-black/50 rounded-full cursor-pointer hover:bg-white/10">
        <LuArrowLeft size={20} className="text-white" />
      </div>
      <div className="flex items-center gap-4">
        <LuSearch size={20} className="text-white" />
        <LuEllipsis size={20} className="text-white" />
      </div>
    </div>

    <div className="flex-1 overflow-y-auto no-scrollbar">
      <div className="h-32 w-full bg-[#333639] relative"></div>

      <div className="px-4 relative pb-4 border-b border-[#2f3336]">
        <div className="flex justify-between items-end -mt-[40px] mb-3">
          <div className="p-1 bg-black rounded-full w-[88px] h-[88px]">
            <ProfileImage className="rounded-full border-2 border-black w-full h-full" />
          </div>
          <button className="px-4 py-1.5 rounded-full border border-[#536471] font-bold text-sm hover:bg-white/10 transition-colors">
            Edit profile
          </button>
        </div>

        <div>
          <h1 className="text-xl font-bold text-[#e7e9ea] flex items-center">
            Your Name <VerifiedBadge />
          </h1>
          <div className="text-[#71767b] text-sm">@username</div>
        </div>

        <div className="mt-3 text-[15px] leading-snug">Bio description goes here. 🚀 opinions my own.</div>

        <div className="flex flex-wrap gap-x-4 gap-y-1 mt-3 text-[#71767b] text-sm">
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

        <div className="flex gap-4 mt-3 text-sm">
          <div className="hover:underline cursor-pointer">
            <span className="font-bold text-[#e7e9ea]">420</span> <span className="text-[#71767b]">Following</span>
          </div>
          <div className="hover:underline cursor-pointer">
            <span className="font-bold text-[#e7e9ea]">8,942</span> <span className="text-[#71767b]">Followers</span>
          </div>
        </div>
      </div>

      <div className="flex border-b border-[#2f3336]">
        {['Posts', 'Replies', 'Highlights', 'Media'].map((tab, i) => (
          <div key={tab} className="flex-1 py-3 hover:bg-white/5 cursor-pointer relative flex justify-center">
            <span className={`text-sm font-bold ${i === 0 ? 'text-[#e7e9ea]' : 'text-[#71767b]'}`}>{tab}</span>
            {i === 0 && <div className="absolute bottom-0 w-10 h-1 bg-[#1d9bf0] rounded-full"></div>}
          </div>
        ))}
      </div>

      <div className="p-4 border-b border-[#2f3336] hover:bg-white/[0.03] transition-colors cursor-pointer">
        <div className="text-[#71767b] text-xs font-bold mb-1 flex items-center gap-2">
          <div className="w-3 h-3 fill-current">📌</div> Pinned
        </div>
        <div className="flex gap-3">
          <div className="shrink-0 w-10 h-10">
            <ProfileImage className="rounded-full w-full h-full" />
          </div>
          <div className="flex-1">
            <div className="flex items-center gap-1 text-[#71767b] text-sm">
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
            <div className="mt-2 w-full h-48 bg-[#333639] rounded-2xl overflow-hidden border border-[#2f3336] flex items-center justify-center">
              <div className="bg-[#1d9bf0] text-white px-4 py-2 rounded-full font-bold">GIF</div>
            </div>
            <div className="flex justify-between mt-3 text-[#71767b] max-w-xs">
              <div className="flex items-center gap-2 group hover:text-[#1d9bf0]">
                <div className="p-1.5 rounded-full group-hover:bg-[#1d9bf0]/10">
                  <LuMessageCircle size={16} />
                </div>
                <span className="text-xs">24</span>
              </div>
              <div className="flex items-center gap-2 group hover:text-[#00ba7c]">
                <div className="p-1.5 rounded-full group-hover:bg-[#00ba7c]/10">
                  <LuRepeat size={16} />
                </div>
                <span className="text-xs">8</span>
              </div>
              <div className="flex items-center gap-2 group hover:text-[#f91880]">
                <div className="p-1.5 rounded-full group-hover:bg-[#f91880]/10">
                  <LuHeart size={16} />
                </div>
                <span className="text-xs">152</span>
              </div>
              <div className="flex items-center gap-2 group hover:text-[#1d9bf0]">
                <div className="p-1.5 rounded-full group-hover:bg-[#1d9bf0]/10">
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

    <div className="absolute bottom-16 right-4 w-14 h-14 bg-[#1d9bf0] rounded-full flex items-center justify-center shadow-lg cursor-pointer hover:bg-[#1a8cd8]">
      <svg viewBox="0 0 24 24" className="w-6 h-6 text-white fill-current">
        <g>
          <path d="M23 3c-6.62-.1-10.38 2.421-13.05 6.03C7.29 12.61 6 17.331 6 22h2c0-1.007.07-2.012.19-3H12c4.1 0 7.48-3.082 7.94-7.054C22.79 10.147 23.17 6.359 23 3zm-7 8h-1.5v2H16c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4v1h2v-1c0-1.103.897-2 2-2s2 .897 2 2-.897 2-2 2z"></path>
        </g>
      </svg>
    </div>

    <BottomNav />
  </div>
));

const FeedView = memo(() => (
  <div className="w-full h-full bg-black text-[#e7e9ea] font-sans flex flex-col relative">
    <div className="h-14 flex items-center justify-between px-4 border-b border-[#2f3336] shrink-0 sticky top-0 bg-black/80 backdrop-blur-md z-30">
      <div className="w-8 h-8 rounded-full overflow-hidden">
        <ProfileImage className="w-full h-full" />
      </div>
      <XLogo />
      <div className="w-8"></div>
    </div>

    <div className="flex-1 overflow-y-auto no-scrollbar">
      <div className="flex border-b border-[#2f3336]">
        <div className="flex-1 py-3 hover:bg-white/5 cursor-pointer relative flex justify-center">
          <span className="text-sm font-bold text-[#e7e9ea]">For you</span>
          <div className="absolute bottom-0 w-14 h-1 bg-[#1d9bf0] rounded-full"></div>
        </div>
        <div className="flex-1 py-3 hover:bg-white/5 cursor-pointer relative flex justify-center">
          <span className="text-sm font-medium text-[#71767b]">Following</span>
        </div>
      </div>

      <div className="p-4 border-b border-[#2f3336] hover:bg-white/[0.03] transition-colors cursor-pointer">
        <div className="flex gap-3">
          <div className="shrink-0 w-10 h-10">
            <ProfileImage className="rounded-full w-full h-full" />
          </div>
          <div className="flex-1">
            <div className="flex items-center gap-1 text-[#71767b] text-sm">
              <span className="font-bold text-[#e7e9ea]">Your Name</span>
              <VerifiedBadge />
              <span>@username</span>
              <span>·</span>
              <span>42m</span>
              <LuEllipsis size={14} className="ml-auto" />
            </div>
            <div className="mt-1 text-[15px] text-[#e7e9ea]">just dropped a new update. the design system is cleaner than ever. 😮‍💨✨</div>

            <div className="flex justify-between mt-3 text-[#71767b] max-w-xs">
              <div className="flex items-center gap-2 group hover:text-[#1d9bf0]">
                <div className="p-1.5 rounded-full group-hover:bg-[#1d9bf0]/10">
                  <LuMessageCircle size={16} />
                </div>
                <span className="text-xs">3</span>
              </div>
              <div className="flex items-center gap-2 group hover:text-[#00ba7c]">
                <div className="p-1.5 rounded-full group-hover:bg-[#00ba7c]/10">
                  <LuRepeat size={16} />
                </div>
                <span className="text-xs">1</span>
              </div>
              <div className="flex items-center gap-2 group hover:text-[#f91880]">
                <div className="p-1.5 rounded-full group-hover:bg-[#f91880]/10">
                  <LuHeart size={16} />
                </div>
                <span className="text-xs">42</span>
              </div>
              <div className="flex items-center gap-2 group hover:text-[#1d9bf0]">
                <div className="p-1.5 rounded-full group-hover:bg-[#1d9bf0]/10">
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

      <div className="p-4 border-b border-[#2f3336] hover:bg-white/[0.03] transition-colors cursor-pointer">
        <div className="flex gap-3">
          <div className="shrink-0 w-10 h-10 rounded-full bg-indigo-500 flex items-center justify-center font-bold text-white">U</div>
          <div className="flex-1">
            <div className="flex items-center gap-1 text-[#71767b] text-sm">
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

    <div className="absolute bottom-20 right-4 w-14 h-14 bg-[#1d9bf0] rounded-full flex items-center justify-center shadow-lg cursor-pointer hover:bg-[#1a8cd8]">
      <LuSquarePlus size={24} className="text-white" />
    </div>

    <BottomNav />
  </div>
));

export const TwitterView = () => {
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
