import { motion } from 'framer-motion';
import { LinkedinIcon, MailIcon, ResumeeIcon } from './Icons';

export default function Footer() {
  return (
    <motion.footer
      initial={{ y: 100 }}
      animate={{ y: 0 }}
      viewport={{ once: true, amount: 0.05 }}
      transition={{
        duration: 0.5,
        type: 'spring',
      }}
      className="sm:py-8 py-5 max-w-7xl relative"
    >
      <p className="sm:text-[18px] text-[14px] uppercase tracking-wider text-center">
        Find out more
      </p>
      <h2 className="text-neutral-800 dark:text-neutral-200 font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px] text-center">
        Contact
      </h2>
      <div className="flex md:flex-row flex-col gap-2 justify-between mt-8 text-neutral-500 dark:text-neutral-400">
        <a
          className="text-2xl flex gap-2 flex-1 justify-center hover:text-neutral-700 dark:hover:text-neutral-200 transition-all border p-4 border-neutral-200 dark:border-neutral-800 rounded-lg"
          rel="noopener noreferrer"
          target="_blank"
          href="https://www.linkedin.com/in/tone-dan-cristian-506405143/"
        >
          Message me on <LinkedinIcon />
        </a>
        <a
          className="text-2xl flex gap-2 flex-1 justify-center hover:text-neutral-700 dark:hover:text-neutral-200 transition-all border p-4 border-neutral-200 dark:border-neutral-800 rounded-lg"
          href="mailto:cristitone96@gmail.com"
        >
          Send an email <MailIcon />
        </a>
        <a
          href="/cristian_tone.pdf"
          download
          className="text-2xl flex gap-2 flex-2  justify-center hover:text-neutral-700 dark:hover:text-neutral-200 transition-all border p-4 border-neutral-200 dark:border-neutral-800 rounded-lg"
        >
          Download resume <ResumeeIcon />
        </a>
      </div>
    </motion.footer>
  );
}
