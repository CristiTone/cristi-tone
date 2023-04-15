import type { NextApiRequest, NextApiResponse } from 'next';
import { queryBuilder } from '@/lib/planetscale';
import { getServerSession } from 'next-auth';
import { authOptions } from './auth/[...nextauth]';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const session = await getServerSession(req, res, authOptions);
  if (!session || !session.user) {
    return res.status(403).json({ msg: 'Unauthorized' });
  }

  const email = session.user.email as string;
  const name = session.user.name as string;

  if (req.method === 'POST') {
    await queryBuilder
      .insertInto('guestbook')
      .values({
        email,
        message: (req.body.message || '').slice(0, 500),
        author: name,
      })
      .execute();

    return res.status(200).json({ msg: 'Thank you for signing' });
  }

  // if (req.method === 'DELETE') {
  //   await queryBuilder
  //     .deleteFrom('guestbook')
  //     .where('id', '=', req.body.id)
  //     .where('email', '=', email)
  //     .execute();

  //   return res.status(204).json({msg: 'Deleted'});
  // }

  return res.send('Method not allowed.');
}
