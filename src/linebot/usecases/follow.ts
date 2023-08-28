import { FollowEvent, TextMessage } from '@line/bot-sdk';
import { lineClient } from '../utils/line';

export const followMessage: TextMessage = {
  type: 'text',
  text: 'ようこそ！KitaQ~キタキュークエスト~の世界へ！\n\nこれはゲームと小説が一つになったエンターテイメント作品です。\nあなたの選択でGameOverにもGameClearにもなり得ます。\n\n結末は一つだけではありません。何度も挑戦して北九州市を制覇しましょう。\n\nそれではメニューからゲームスタートを押して北九州の冒険へと旅立ちましょう！',
};

export const followUsecase = async (event: FollowEvent): Promise<void> => {
  await lineClient.replyMessage(event.replyToken, followMessage);
};
