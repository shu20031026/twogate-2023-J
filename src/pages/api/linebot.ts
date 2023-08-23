import { NextApiRequest, NextApiResponse } from 'next';
import { WebhookRequestBody } from '@line/bot-sdk';
import { lineClient } from '~/src/linebot/utils/line';

const client = lineClient;

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    if (req.method === 'POST') {
      const body: WebhookRequestBody = req.body;
      await Promise.all(
        body.events.map(async (event) => {
          switch (event.type) {
            case 'message': {
              console.log(event.message);
              if (event.message.type === 'text') {
                const getText = event.message.text;
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

    res.status(200);
  } catch (e) {
    res.status(500).json({ message: `error! ${e} ` });
  }
}
