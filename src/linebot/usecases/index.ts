import { TextMessage, WebhookEvent } from '@line/bot-sdk';

import { lineClient } from '../utils/line';

import { followUsecase } from './follow';
import { messagesUsecase } from './messages';

export const errorMessage: TextMessage = {
  type: 'text',
  text: 'エラーが発生しました',
};

export const usecases = async (event: WebhookEvent): Promise<void> => {
  try {
    switch (event.type) {
      case 'follow':
        return await followUsecase(event);
      case 'message':
        return await messagesUsecase(event);
      default:
    }
  } catch (err) {
    lineClient.pushMessage(event.source.userId!, errorMessage).catch;
    throw new Error('usecases');
  }
};
