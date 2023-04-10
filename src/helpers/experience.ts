import {
  CssIcon,
  GitIcon,
  HtmlIcon,
  JsIcon,
  NextIcon,
  NodeIcon,
  SqlIcon,
  ReactIcon,
  TailwindIcon,
  TsIcon,
} from '@/components/Icons';

import sda from '@/assets/sda.png';
import sii from '@/assets/sii.png';
import softvision from '@/assets/softvision.png';
import sparktech from '@/assets/sparktech.png';
import ciel from '@/assets/ciel.png';
import ecrion from '@/assets/ecrion.png';

export const experiences = [
  {
    title: 'Trainer',
    company_name: 'Software Development Academy',
    iconBg: '#fff',
    icon: sda,
    date: 'December 2022 - present',
    points: [
      'Teaching web technologies like HTML, CSS, Javascript, ReactJS, NodeJS.',
      'Helping people who want a professional reconversion or want to become web developers to understand programming concepts and tools.',
    ],
  },
  {
    title: 'ReactJS Developer',
    company_name: 'SII Romania',
    iconBg: '#fff',
    icon: sii,
    date: 'June 2022 - April 2023',
    points: [
      'Working with an international client in a fully remote setup.',
      'Developing UI React components and pages.',
      'Managing the user flow.',
      'Interacting with a REST API to consume the data we need.',
    ],
  },
  {
    title: 'Software Engineer',
    company_name: 'Cognizant Softvision',
    iconBg: '#01004C',
    icon: softvision,
    date: 'May 2021 - May 2022',
    points: [
      'Working with various Javascript tools and frameworks such as React JS and Node JS.',
      'Developing and refactoring reusable components.',
      'Writing unit tests for implemented tasks using react testing library.',
      'Participating in all Agile ceremonies.',
      'Presenting to the stakeholders and colleagues from other teams the tasks I implemented at the sprint demo.',
    ],
  },
  {
    title: 'Frontend Developer',
    company_name: 'Sparktech Software',
    iconBg: '#EF4538',
    icon: sparktech,
    date: 'October 2020 - May 2021',
    points: [
      'Worked on a number of 6 presentational applications, that are best described as “PowerPoint presentations on steroids”. Each page of an application is an svg or multiple svgs put together and animated using GreenSock library.',
      'Making sure my code is optimised so the animations work smoothly and without issues.',
      'Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products perfectly tailored for our customer’s needs.',
    ],
  },
  {
    title: 'Full Stack Developer',
    company_name: 'Ciel Romania',
    iconBg: '#fff',
    icon: ciel,
    date: 'June 2020 - September 2020',
    points: [
      'Developing new features requested by the clients.',
      'Participating in brainstorm meetings to find the best solution for the upcoming tasks.',
    ],
  },
  {
    title: 'Full Stack Developer',
    company_name: 'Ecrion International',
    iconBg: '#fff',
    icon: ecrion,
    date: 'July 2018 - May 2020',
    points: [
      'Bug fixing and feature implementation for company’s applications.',
      'Working closely together with QA team to make sure that there are no issues and everything works as intended.',
      'Implementing responsive design and ensuring cross-browser compatibility.',
      'Participating in code reviews and providing constructive feedback to other developers.',
      'Assisted in building 100% reusable components for company’s Storybook.',
    ],
  },
];

export const technologies = [
  {
    name: 'HTML5',
    image: HtmlIcon,
  },
  {
    name: 'CSS3',
    image: CssIcon,
  },
  {
    name: 'Javascript',
    image: JsIcon,
  },
  {
    name: 'ReactJS',
    image: ReactIcon,
  },
  {
    name: 'NodeJS',
    image: NodeIcon,
  },
  {
    name: 'NextJS',
    image: NextIcon,
  },
  {
    name: 'TailwindCSS',
    image: TailwindIcon,
  },
  {
    name: 'Typescript',
    image: TsIcon,
  },
  {
    name: 'SQL',
    image: SqlIcon,
  },
  {
    name: 'Git',
    image: GitIcon,
  },
];
