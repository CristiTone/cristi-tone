import Image from 'next/image';
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import { motion } from 'framer-motion';

import 'react-vertical-timeline-component/style.min.css';

import { experiences } from '../helpers/experience';

const textVariant = {
  hidden: {
    y: -50,
    opacity: 0,
  },
  show: {
    y: 0,
    opacity: 1,
    transition: {
      type: 'spring',
      duration: 1.25,
    },
  },
};

function ExperienceCard({ experience }: any) {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: '#262626',
        color: '#F8F8F8',
      }}
      contentArrowStyle={{ borderRight: '7px solid  #262626' }}
      date={experience.date}
      iconStyle={{ background: experience.iconBg }}
      icon={
        <div className="flex justify-center items-center w-full h-full">
          <Image
            src={experience.icon}
            alt={experience.company_name}
            className="w-[60%] h-[60%] object-contain"
            width={50}
            height={50}
          />
        </div>
      }
    >
      <div>
        <h3 className="text-neutral-800 dark:text-neutral-200 text-[24px] font-bold">
          {experience.title}
        </h3>
        <p className="text-[16px] font-semibold" style={{ margin: 0 }}>
          {experience.company_name}
        </p>
      </div>

      <ul className="mt-5 list-disc ml-2 space-y-2">
        {experience.points.map((point: any, index: any) => (
          <li
            key={`experience-point-${index}`}
            className="text-neutral-800 dark:text-neutral-200 text-[14px] tracking-wider"
          >
            {point}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
}

export default function Experience() {
  return (
    <motion.section
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.05 }}
      className="sm:py-8 py-5 max-w-7xl mx-auto relative z-0"
    >
      <motion.div variants={textVariant}>
        <p className="sm:text-[18px] text-[14px] uppercase tracking-wider text-center">
          What I have done so far
        </p>
        <h2 className="text-neutral-800 dark:text-neutral-200 font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px] text-center">
          Work Experience.
        </h2>
      </motion.div>

      <div className="mt-8 flex flex-col">
        <VerticalTimeline className="w-full">
          {experiences.map((experience, index) => (
            <ExperienceCard
              key={`experience-${index}`}
              experience={experience}
            />
          ))}
        </VerticalTimeline>
      </div>
    </motion.section>
  );
}
