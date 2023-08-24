import { MessageEvent, TextMessage } from '@line/bot-sdk';
import { lineClient } from '../../utils/line';
import { messageTextUsecase } from './text';
import { addReadScenario, fetchUserData, updateLocation } from '../../firestore';
import { scenarioKeys } from '../../notices/notice-list';

const otherMessage: TextMessage = {
  type: 'text',
  text: 'テキスト以外のメッセージを受信しました',
};

export const messagesUsecase = async (event: MessageEvent): Promise<void> => {
  try {
    switch (event.message.type) {
      case 'text':
        const uid = event.source.userId || '';
        const location = event.message.text;
        if (uid && scenarioKeys.includes(location)) {
          const userData = await fetchUserData(uid);
          await updateLocation(uid, location);
          await addReadScenario(uid, location);
        }

        return await messageTextUsecase(event);

      default:
        await lineClient.replyMessage(event.replyToken, otherMessage);
    }
  } catch (err) {
    throw new Error('messages Usecase');
  }
};
