import { NextApiRequest, NextApiResponse } from 'next';

import { usecases } from '~/src/linebot/usecases';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    if (req.method === 'POST') {
      await Promise.all(req.body.events.map(usecases))
        .then(() => {
          res.status(200).end();
        })
        .catch(() => {
          res.status(500).end();
        });
    }

    res.status(200);
  } catch (e) {
    res.status(500).json({ message: `error! ${e} ` });
  }
}
