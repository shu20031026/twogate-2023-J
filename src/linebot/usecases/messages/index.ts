import { MessageEvent, TextMessage } from '@line/bot-sdk';

import { lineClient } from '../../utils/line';

import { messageTextUsecase } from './text';
const otherMessage: TextMessage = {
  type: 'text',
  text: 'テキスト以外のメッセージを受信しました',
};

export const messagesUsecase = async (event: MessageEvent): Promise<void> => {
  try {
    switch (event.message.type) {
      case 'text':
        return await messageTextUsecase(event);
      default:
        await lineClient.replyMessage(event.replyToken, otherMessage);
    }
  } catch (err) {
    throw new Error('messages Usecase');
  }
};
