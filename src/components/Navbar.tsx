import clsx from 'clsx';
import Link from 'next/link';
import { LayoutGroup, motion } from 'framer-motion';
import { usePathname } from 'next/navigation';

const navItems = {
  '/': {
    name: 'home',
  },
  // '/blog': {
  //   name: 'blog',
  // },
  '/guestbook': {
    name: 'guestbook',
  },
};

function Logo() {
  return (
    <Link aria-label="Cristi Tone" href="/">
      <motion.svg
        className="text-black dark:text-white h-[50px] md:h-[60px]"
        width="50"
        height="50"
        viewBox="0 0 22 22"
        strokeWidth="2"
        stroke="currentColor"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <motion.path
          initial={{
            opacity: 0,
            pathLength: 0,
          }}
          animate={{
            opacity: 1,
            pathLength: 1,
          }}
          transition={{
            duration: 0.5,
            type: 'spring',
            stiffness: 50,
          }}
          d="M18 9a5 5 0 0 0 -5 -5h-2a5 5 0 0 0 -5 5v6a5 5 0 0 0 5 5h2a5 5 0 0 0 5 -5"
        />
        <motion.line
          x1="8"
          y1="9"
          x2="16"
          y2="9"
          initial={{
            scale: 0.1,
          }}
          animate={{
            scale: 1,
          }}
        />
        <motion.line
          x1="12"
          y1="9"
          x2="12"
          y2="17"
          initial={{
            scale: 0.1,
          }}
          animate={{
            scale: 1,
          }}
        />
      </motion.svg>
    </Link>
  );
}

export default function Navbar() {
  const pathname = usePathname() as keyof typeof navItems;

  return (
    <aside className="md:w-[150px] md:flex-shrink-0 -mx-4 md:mx-0 md:px-0 font-serif">
      <div className="md:sticky lg:top-20">
        <div className="ml-2 mb-6">
          <Logo />
        </div>
        <LayoutGroup>
          <nav
            className="flex flex-row md:flex-col items-start relative px-4 md:px-0 pb-0 fade md:relative"
            id="nav"
          >
            <div className="flex flex-row md:flex-col space-x-0 pr-10 mb-2 mt-2 md:mt-0">
              {Object.entries(navItems).map(([path, { name }]) => (
                <Link
                  key={path}
                  href={path}
                  className={clsx(
                    'transition-all hover:text-neutral-800 dark:hover:text-neutral-200 flex align-middle',
                    {
                      'text-neutral-500': path !== pathname,
                      'font-bold': path === pathname,
                    },
                  )}
                >
                  <span className="relative py-[5px] px-[10px]">
                    {name}
                    {path === pathname && (
                      <motion.div
                        className="absolute inset-0 bg-neutral-100 dark:bg-neutral-800 rounded-md z-[-1]"
                        layoutId="sidebar"
                        transition={{
                          type: 'spring',
                          stiffness: 350,
                          damping: 30,
                        }}
                      />
                    )}
                  </span>
                </Link>
              ))}
            </div>
          </nav>
        </LayoutGroup>
      </div>
    </aside>
  );
}
