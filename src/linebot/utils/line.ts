import { Client, ClientConfig, MiddlewareConfig } from '@line/bot-sdk';

export const lineMiddlewareConfig: MiddlewareConfig = {
  channelSecret: process.env.NEXT_PUBLIC_LINE_CHANNEL_SECRET!,
};

export const lineConfig: ClientConfig = {
  ...lineMiddlewareConfig,
  channelAccessToken: process.env.NEXT_PUBLIC_LINE_CHANNEL_ACCESS_TOKEN!,
};

export const lineClient = new Client(lineConfig);
