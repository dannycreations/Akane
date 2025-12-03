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

export enum Perspective {
  Profile = 'Profile',
  Chat = 'Chat',
  Story = 'Story',
  Feed = 'Feed',
}

export interface EditorState {
  zoom: number;
  rotation: number;
  x: number;
  y: number;
}

export interface ImageSource {
  url: string;
  name: string;
}
