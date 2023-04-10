import { signIn, signOut } from 'next-auth/react';
import { GithubIcon } from '@/components/Icons';
import PageContainer from '@/components/PageContainer';
import { queryBuilder } from '@/lib/planetscale';

export function SignOut() {
  return (
    <button
      className="text-xs text-neutral-700 dark:text-neutral-300 mt-2 mb-6"
      onClick={() => signOut()}
    >
      → Sign out
    </button>
  );
}

export function SignIn() {
  return (
    <button
      className="flex bg-black text-neutral-200 px-4 py-3 rounded-md font-semibold text-sm mb-4 hover:text-white transition-all border border-gray-800"
      onClick={() => signIn('github')}
    >
      <GithubIcon />
      <div className="ml-3">Sign in with GitHub</div>
    </button>
  );
}

async function getGuestbook() {
  const data = await queryBuilder
    .selectFrom('guestbook')
    .select(['id', 'body', 'created_by', 'updated_at'])
    .orderBy('updated_at', 'desc')
    .limit(100)
    .execute();

  return data;
}

export default function Guestbook() {
  return (
    <PageContainer>
      <h2>Guestbook</h2>
      <SignIn />
    </PageContainer>
  );
}
