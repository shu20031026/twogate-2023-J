import { MessageEvent, TextEventMessage } from '@line/bot-sdk';

import { lineClient } from '../../utils/line';
import { makeCustomButton } from '../../utils/makeButtonTemplate';
import { noticeList } from '../../notices/notice-list';

export const customButtonUsecase = async (event: MessageEvent): Promise<void> => {
  try {
    const { text } = event.message as TextEventMessage;
    const key = text;

    if (key in noticeList) {
      await lineClient.replyMessage(event.replyToken, makeCustomButton(noticeList[key]));
    }
  } catch (err) {
    console.log(err);
    throw new Error('customButton Usecase');
  }
};
