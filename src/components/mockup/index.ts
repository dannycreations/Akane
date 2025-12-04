import { lazy } from 'react';

import { Platform, PLATFORM_METADATA } from '../../app/platforms';

import type { ComponentType } from 'react';
import type { PlatformMetadata } from '../../app/platforms';

export interface PlatformConfig extends PlatformMetadata {
  readonly node: ComponentType<any>;
  readonly preload?: () => Promise<unknown>;
}

const loadView = (importer: () => Promise<{ default: ComponentType<any> }>) => {
  return {
    node: lazy(importer),
    preload: importer,
  };
};

const views = {
  [Platform.Discord]: loadView(() => import('./DiscordView').then((m) => ({ default: m.DiscordView }))),
  [Platform.Facebook]: loadView(() => import('./FacebookView').then((m) => ({ default: m.FacebookView }))),
  [Platform.Instagram]: loadView(() => import('./InstagramView').then((m) => ({ default: m.InstagramView }))),
  [Platform.LinkedIn]: loadView(() => import('./LinkedInView').then((m) => ({ default: m.LinkedInView }))),
  [Platform.Slack]: loadView(() => import('./SlackView').then((m) => ({ default: m.SlackView }))),
  [Platform.Telegram]: loadView(() => import('./TelegramView').then((m) => ({ default: m.TelegramView }))),
  [Platform.WhatsApp]: loadView(() => import('./WhatsAppView').then((m) => ({ default: m.WhatsAppView }))),
  [Platform.Twitter]: loadView(() => import('./TwitterView').then((m) => ({ default: m.TwitterView }))),
};

export const PLATFORMS: readonly PlatformConfig[] = PLATFORM_METADATA.map((meta) => {
  const view = views[meta.id];
  return {
    ...meta,
    node: view.node,
    preload: view.preload,
  };
});

export function getPlatformConfig(id: Platform): PlatformConfig {
  return PLATFORMS.find((p) => p.id === id) ?? PLATFORMS[0];
}
