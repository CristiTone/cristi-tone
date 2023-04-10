import Image from 'next/image';
import Link from 'next/link';
import PageContainer from '@/components/PageContainer';
import avatar from '@/assets/cristi.png';
import Experience from '@/components/Experience';
import { BlogIcon, GithubIcon, LinkedinIcon } from '@/components/Icons';
import Technologies from '@/components/Technologies';
import Footer from '@/components/Footer';

export default function Home() {
  const views = 14;
  return (
    <PageContainer>
      <section>
        <h1 className="font-bold text-3xl font-serif">Dan Cristian Tone</h1>
        <p className="my-5 text-neutral-800 dark:text-neutral-200">
          I am a passionate web developer interested in the newest technologies
          and trends. Highly motivated and eager to learn about new tools and
          become a better software engineer. Continually learning best practices
          in programming so my code can work smoothly and be easily understood.
          Constantly improving my soft and technical skills so I can help others
          start their programming journey or improve their careers in the
          software development world.
        </p>
        <div className="flex justify-center items-center my-8 flex-col md:flex-row">
          <Image
            alt="Dan Cristian Tone"
            className="rounded-full"
            src={avatar}
            placeholder="blur"
            width={100}
            priority
          />
          <div className="mt-8 md:mt-0 ml-0 md:ml-6 space-y-4 text-neutral-500 dark:text-neutral-400">
            <a
              className="flex gap-2 items-end hover:text-neutral-700 dark:hover:text-neutral-200 transition-all"
              rel="noopener noreferrer"
              target="_blank"
              href="https://www.linkedin.com/in/tone-dan-cristian-506405143/"
            >
              <LinkedinIcon />
              <p> let&apos;s connect on linkedin</p>
            </a>
            <a
              className="flex gap-2 items-center hover:text-neutral-700 dark:hover:text-neutral-200 transition-all"
              rel="noopener noreferrer"
              target="_blank"
              href="https://github.com/CristiTone"
            >
              <GithubIcon />
              <p>check my github</p>
            </a>
            <Link
              href="/blog"
              className="flex gap-2 items-center hover:text-neutral-700 dark:hover:text-neutral-200 transition-all"
            >
              <BlogIcon />
              <p>{`${views.toLocaleString()} blog views all time`}</p>
            </Link>
          </div>
        </div>
      </section>
      <Technologies />
      <Experience />
      <Footer />
    </PageContainer>
  );
}
