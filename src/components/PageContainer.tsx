import { Ubuntu } from 'next/font/google';
import Navbar from './Navbar';

const font = Ubuntu({
  weight: '700',
  display: 'swap',
  subsets: ['cyrillic'],
});

export default function PageContainer({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="antialiased max-w-4xl mb-40 flex flex-col md:flex-row mx-4 mt-8 md:mt-16 lg:mt-24 lg:mx-auto">
      <Navbar />
      <main className="flex-auto min-w-0 mt-6 md:mt-0 flex flex-col px-2 md:px-0">
        {children}
      </main>
    </div>
  );
}
