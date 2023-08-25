import { TextMessage, WebhookEvent } from '@line/bot-sdk';

import { lineClient } from '../utils/line';

import { followUsecase } from './follow';
import { messagesUsecase } from './messages';

export const errorMessage: TextMessage = {
  type: 'text',
  text: 'コマンドが存在しません。何かが違うようです。',
};

export const usecases = async (event: WebhookEvent): Promise<void> => {
  try {
    switch (event.type) {
      case 'follow':
        return await followUsecase(event);
      case 'message':
        return await messagesUsecase(event);
      default:
        lineClient.pushMessage(event.source.userId!, errorMessage);
    }
  } catch (err) {
    lineClient.pushMessage(event.source.userId!, errorMessage).catch;
    throw new Error('usecases');
  }
};
