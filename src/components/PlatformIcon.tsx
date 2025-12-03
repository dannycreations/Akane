import { SiDiscord, SiFacebook, SiInstagram, SiLinkedin, SiSlack, SiTelegram, SiWhatsapp, SiX } from 'react-icons/si';

import { Perspective, Platform } from '../app/types';

export const PLATFORMS = [
  { id: Platform.Discord, icon: SiDiscord, color: 'text-indigo-400' },
  { id: Platform.Facebook, icon: SiFacebook, color: 'text-blue-500' },
  { id: Platform.Instagram, icon: SiInstagram, color: 'text-pink-500' },
  { id: Platform.LinkedIn, icon: SiLinkedin, color: 'text-blue-400' },
  { id: Platform.Slack, icon: SiSlack, color: 'text-[#E01E5A]' },
  { id: Platform.Telegram, icon: SiTelegram, color: 'text-sky-400' },
  { id: Platform.Twitter, icon: SiX, color: 'text-white' },
  { id: Platform.WhatsApp, icon: SiWhatsapp, color: 'text-green-500' },
];

export function getPerspectives(plat: Platform): Perspective[] {
  switch (plat) {
    case Platform.WhatsApp:
      return [Perspective.Profile, Perspective.Chat];
    case Platform.Instagram:
      return [Perspective.Profile, Perspective.Story, Perspective.Feed];
    case Platform.Facebook:
      return [Perspective.Profile, Perspective.Feed];
    case Platform.LinkedIn:
      return [Perspective.Profile, Perspective.Feed];
    case Platform.Twitter:
      return [Perspective.Profile, Perspective.Feed];
    case Platform.Discord:
      return [Perspective.Profile, Perspective.Chat];
    case Platform.Telegram:
      return [Perspective.Profile, Perspective.Chat];
    case Platform.Slack:
      return [Perspective.Profile, Perspective.Chat];
    default:
      return [Perspective.Profile];
  }
}
