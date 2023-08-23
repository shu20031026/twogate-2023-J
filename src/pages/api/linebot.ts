import { NextApiRequest, NextApiResponse } from 'next';
import * as line from '@line/bot-sdk';
import { WebhookRequestBody } from '@line/bot-sdk';

const config = {
  channelAccessToken: process.env.NEXT_PUBLIC_LINE_CHANNEL_ACCESS_TOKEN!,
  channelSecret: process.env.NEXT_PUBLIC_LINE_CHANNEL_SECRET!,
};

const client = new line.Client(config);

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    if (req.method === 'POST') {
      const body: WebhookRequestBody = req.body;
      await Promise.all(
        body.events.map(async (event) => {
          console.log(event.type);

          switch (event.type) {
            case 'message': {
              console.log(event.message);
              if (event.message.type === 'text') {
                const getText = event.message.text;
                console.log(getText);
                await client.replyMessage(event.replyToken, {
                  type: 'text',
                  text: getText,
                });
              }
              break;
            }
            case 'follow': {
              break;
            }
          }
        }),
      );
    }
    const message = req.body.message;
    res.status(200).json({ message: `${message}というメッセージが送信されました。` });
  } catch (e) {
    res.status(500).json({ message: `error! ${e} ` });
  }
}
