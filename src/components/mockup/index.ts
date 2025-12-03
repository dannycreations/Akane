import { SiDiscord, SiFacebook, SiInstagram, SiLinkedin, SiSlack, SiTelegram, SiWhatsapp, SiX } from 'react-icons/si';

import { Perspective } from '../../app/constants';
import { DiscordView } from './DiscordView';
import { FacebookView } from './FacebookView';
import { InstagramView } from './InstagramView';
import { LinkedInView } from './LinkedInView';
import { SlackView } from './SlackView';
import { TelegramView } from './TelegramView';
import { TwitterView } from './TwitterView';
import { WhatsAppView } from './WhatsAppView';

import type { FC } from 'react';
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

export interface PlatformConfig {
  readonly id: Platform;
  readonly name: string;
  readonly icon: IconType;
  readonly color: string;
  readonly perspectives: Perspective[];
  readonly node: FC;
  readonly size: number;
}

export const PLATFORMS: readonly PlatformConfig[] = [
  {
    id: Platform.Discord,
    name: 'Discord',
    icon: SiDiscord,
    color: 'text-indigo-400',
    perspectives: [Perspective.Profile, Perspective.Chat],
    node: DiscordView,
    size: 512,
  },
  {
    id: Platform.Facebook,
    name: 'Facebook',
    icon: SiFacebook,
    color: 'text-blue-500',
    perspectives: [Perspective.Profile, Perspective.Feed],
    node: FacebookView,
    size: 1080,
  },
  {
    id: Platform.Instagram,
    name: 'Instagram',
    icon: SiInstagram,
    color: 'text-pink-500',
    perspectives: [Perspective.Profile, Perspective.Story, Perspective.Feed],
    node: InstagramView,
    size: 320,
  },
  {
    id: Platform.LinkedIn,
    name: 'LinkedIn',
    icon: SiLinkedin,
    color: 'text-blue-400',
    perspectives: [Perspective.Profile, Perspective.Feed],
    node: LinkedInView,
    size: 400,
  },
  {
    id: Platform.Slack,
    name: 'Slack',
    icon: SiSlack,
    color: 'text-[#E01E5A]',
    perspectives: [Perspective.Profile, Perspective.Chat],
    node: SlackView,
    size: 1024,
  },
  {
    id: Platform.Telegram,
    name: 'Telegram',
    icon: SiTelegram,
    color: 'text-sky-400',
    perspectives: [Perspective.Profile, Perspective.Chat],
    node: TelegramView,
    size: 640,
  },
  {
    id: Platform.WhatsApp,
    name: 'WhatsApp',
    icon: SiWhatsapp,
    color: 'text-green-500',
    perspectives: [Perspective.Profile, Perspective.Chat],
    node: WhatsAppView,
    size: 640,
  },
  {
    id: Platform.Twitter,
    name: 'X',
    icon: SiX,
    color: 'text-white',
    perspectives: [Perspective.Profile, Perspective.Feed],
    node: TwitterView,
    size: 400,
  },
];

export function getPlatformConfig(id: Platform): PlatformConfig {
  const config = PLATFORMS.find((p) => p.id === id);
  if (!config) {
    // Fallback to avoid crashing if a new enum is added but not config
    console.warn(`Platform config for ${id} not found, falling back to first available`);
    return PLATFORMS[0];
  }
  return config;
}

export function getPerspectives(id: Platform): Perspective[] {
  return getPlatformConfig(id).perspectives;
}
