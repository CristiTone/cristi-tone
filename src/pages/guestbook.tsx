import Form from '@/components/Form';
import { SignIn, SignOut } from '@/components/FormActions';
import PageContainer from '@/components/PageContainer';
import { queryBuilder } from '@/lib/planetscale';
import { useSession } from 'next-auth/react';

export default function Guestbook({ guestbookData = [] }) {
  const { data: session } = useSession();

  return (
    <PageContainer>
      <section>
        <h1 className="font-bold text-3xl font-serif mb-5">Guestbook</h1>
        {session?.user ? (
          <>
            <Form />
            <SignOut />
          </>
        ) : (
          <SignIn />
        )}
        {guestbookData.map((entry: any) => (
          <div key={entry.id} className="flex flex-col space-y-1 mb-4">
            <div className="w-full text-sm break-words">
              <span className="text-neutral-600 dark:text-neutral-400 mr-1">
                {entry.author}:
              </span>
              {entry.message}
            </div>
          </div>
        ))}
      </section>
    </PageContainer>
  );
}

export async function getServerSideProps() {
  const guestbookData = await queryBuilder
    .selectFrom('guestbook')
    .select(['id', 'message', 'author'])
    .orderBy('created_at', 'desc')
    .limit(100)
    .execute();
  return {
    props: { guestbookData },
  };
}
