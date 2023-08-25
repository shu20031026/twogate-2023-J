import { MessageEvent, TextEventMessage, TextMessage } from '@line/bot-sdk';

import { lineClient } from '../../utils/line';
import { makeReplyMessage } from '../../utils/makeReplyMessage';
import { commandList, noticeList } from '../../notices/notice-list';
import { makeCustomButton } from '../../utils/makeButtonTemplate';

const otherMessage: TextMessage = {
  type: 'text',
  text: '何かが間違っているようです。',
};

export const messageTextUsecase = async (event: MessageEvent): Promise<void> => {
  try {
    const { text } = event.message as TextEventMessage;
    const key = text;

    if (key in noticeList) {
      const messages = noticeList[key].map((message) => {
        if (message.type === 'message') {
          return makeCustomButton(message);
        }
        return makeReplyMessage(message.text);
      });
      await lineClient.replyMessage(event.replyToken, messages);
    } else if (key in commandList) {
      const commands = commandList[key].map((command) => {
        if (command.type === 'image') {
          return command;
        } else if (command.type === 'message') {
          return makeCustomButton(command);
        }
        return makeReplyMessage(command.text);
      });
      await lineClient.replyMessage(event.replyToken, commands);
    } else {
      await lineClient.replyMessage(event.replyToken, otherMessage);
    }
    // await lineClient.replyMessage(event.replyToken, makeReplyMessage(`${text}と送信されました`));
  } catch (err) {
    throw new Error('message text Usecase');
  }
};
