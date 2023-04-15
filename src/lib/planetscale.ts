import { Generated, Kysely } from 'kysely';
import { PlanetScaleDialect } from 'kysely-planetscale';

interface GuestbookTable {
  id: Generated<number>;
  email: string;
  message: string;
  author: string;
  created_at?: Date;
}

interface ViewsTable {
  slug: string;
  count: number;
}

interface Database {
  guestbook: GuestbookTable;
  views: ViewsTable;
}

export const queryBuilder = new Kysely<Database>({
  dialect: new PlanetScaleDialect({
    url: process.env.NEXT_PUBLIC_DATABASE_URL,
  }),
});
