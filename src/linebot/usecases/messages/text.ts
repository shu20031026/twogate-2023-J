import { MessageEvent, TextEventMessage } from '@line/bot-sdk';

import { lineClient } from '../../utils/line';
import { makeReplyMessage } from '../../utils/makeReplyMessage';

export const messageTextUsecase = async (event: MessageEvent): Promise<void> => {
  try {
    const { text } = event.message as TextEventMessage;

    await lineClient.replyMessage(event.replyToken, makeReplyMessage(`${text}と送信されました`));
  } catch (err) {
    throw new Error('message text Usecase');
  }
};
