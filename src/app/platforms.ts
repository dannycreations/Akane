import { SiDiscord, SiFacebook, SiInstagram, SiLinkedin, SiSlack, SiTelegram, SiWhatsapp, SiX } from 'react-icons/si';

import { Perspective } from './constants';

import type { IconType } from 'react-icons';

export enum Platform {
  WhatsApp = 'WhatsApp',
  Instagram = 'Instagram',
  Facebook = 'Facebook',
  LinkedIn = 'LinkedIn',
  Twitter = 'Twitter',
  Discord = 'Discord',
  Telegram = 'Telegram',
  Slack = 'Slack',
}

export interface PlatformMetadata {
  readonly id: Platform;
  readonly name: string;
  readonly icon: IconType;
  readonly color: string;
  readonly perspectives: Perspective[];
  readonly outputSize: number;
}

export const PLATFORM_METADATA: readonly PlatformMetadata[] = [
  {
    id: Platform.Discord,
    name: 'Discord',
    icon: SiDiscord,
    color: 'text-indigo-400',
    perspectives: [Perspective.Profile, Perspective.Chat],
    outputSize: 512,
  },
  {
    id: Platform.Facebook,
    name: 'Facebook',
    icon: SiFacebook,
    color: 'text-blue-500',
    perspectives: [Perspective.Profile, Perspective.Feed],
    outputSize: 1080,
  },
  {
    id: Platform.Instagram,
    name: 'Instagram',
    icon: SiInstagram,
    color: 'text-pink-500',
    perspectives: [Perspective.Profile, Perspective.Story, Perspective.Feed],
    outputSize: 320,
  },
  {
    id: Platform.LinkedIn,
    name: 'LinkedIn',
    icon: SiLinkedin,
    color: 'text-blue-400',
    perspectives: [Perspective.Profile, Perspective.Feed],
    outputSize: 400,
  },
  {
    id: Platform.Slack,
    name: 'Slack',
    icon: SiSlack,
    color: 'text-[#E01E5A]',
    perspectives: [Perspective.Profile, Perspective.Chat],
    outputSize: 1024,
  },
  {
    id: Platform.Telegram,
    name: 'Telegram',
    icon: SiTelegram,
    color: 'text-sky-400',
    perspectives: [Perspective.Profile, Perspective.Chat],
    outputSize: 640,
  },
  {
    id: Platform.WhatsApp,
    name: 'WhatsApp',
    icon: SiWhatsapp,
    color: 'text-green-500',
    perspectives: [Perspective.Profile, Perspective.Chat],
    outputSize: 640,
  },
  {
    id: Platform.Twitter,
    name: 'X',
    icon: SiX,
    color: 'text-white',
    perspectives: [Perspective.Profile, Perspective.Feed],
    outputSize: 400,
  },
];

export function getPlatformMetadata(id: Platform): PlatformMetadata {
  return PLATFORM_METADATA.find((p) => p.id === id) ?? PLATFORM_METADATA[0];
}

export function getPlatformPerspective(id: Platform): Perspective[] {
  return getPlatformMetadata(id).perspectives;
}
