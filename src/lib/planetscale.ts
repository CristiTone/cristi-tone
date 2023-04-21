import { Generated, Kysely } from 'kysely';
import { PlanetScaleDialect } from 'kysely-planetscale';

type GuestbookTable = {
  id: Generated<number>;
  email: string;
  message: string;
  author: string;
  created_at?: Date;
};

type ViewsTable = {
  slug: string;
  count: number;
};

type Database = {
  guestbook: GuestbookTable;
  views: ViewsTable;
};

export const queryBuilder = new Kysely<Database>({
  dialect: new PlanetScaleDialect({
    url: process.env.NEXT_PUBLIC_DATABASE_URL,
  }),
});
