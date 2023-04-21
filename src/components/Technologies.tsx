import { ReactNode } from 'react';
import { technologies } from '../helpers/experience';

type Tech = {
  name: string;
  image: () => ReactNode;
};

function TechnologyCard({ tech }: { tech: Tech }) {
  return (
    <div className="bg-neutral-200 dark:bg-neutral-800 p-1 md:p-2 rounded-xl hover:translate-y-[-16px] hover:scale-110 transition-all ease-in">
      <h4 className="hidden md:block text-neutral-800 dark:text-neutral-200 text-center font-bold">
        {tech.name}
      </h4>
      {tech.image()}
    </div>
  );
}

export default function Technologies() {
  return (
    <section className="sm:py-8 py-5 max-w-7xl mx-auto relative z-0">
      <p className="sm:text-[18px] text-[14px] uppercase tracking-wider text-center">
        What I am working with
      </p>
      <h2 className="text-neutral-800 dark:text-neutral-200 font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px] text-center">
        Technologies
      </h2>
      <div className="mt-8 flex gap-8 flex-wrap justify-center">
        {technologies.map((tech, index) => (
          <TechnologyCard key={`tech-${index}`} tech={tech} />
        ))}
      </div>
    </section>
  );
}
