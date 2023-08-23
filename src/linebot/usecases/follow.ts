import { FollowEvent, TextMessage } from '@line/bot-sdk';
import { lineClient } from '../utils/line';

export const followMessage: TextMessage = {
  type: 'text',
  text: 'フォローありがとうございます！',
};

export const followUsecase = async (event: FollowEvent): Promise<void> => {
  await lineClient.replyMessage(event.replyToken, followMessage);
};
