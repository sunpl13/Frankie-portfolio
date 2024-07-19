'use client';
import { VerticalTimeline } from 'react-vertical-timeline-component';
import { motion } from 'framer-motion';
import 'react-vertical-timeline-component/style.min.css';
import { experiences } from '@/constants/projects';
import ExperienceCard from '../ExperienceCard';
import { cn } from '@/utils/cn';
import AnimatedCounter from '@/components/AnimatedCounter';
import ResumeButton from './ResumeButton';
import PortfolioButton from './PortfolioButton';

const Experience = () => {
  return (
    <section id="experience-section" className="bg-base-dark">
      <motion.div
        className="flex px-20 max-[640px]:justify-center"
        variants={{
          hidden: {
            y: -50,
            opacity: 0
          },
          show: {
            y: 0,
            opacity: 1,
            transition: {
              type: 'spring',
              duration: 1.25,
              delay: 0
            }
          }
        }}>
        <h2
          className={cn(
            'font-semibold',
            '2xl:text-5xl',
            'lg:text-3xl',
            'xl:text-4xl',
            'text-2xl',
            'tracking-wide',
            'text-gray-90',
            'pt-10'
          )}>
          Work Experience.
        </h2>
      </motion.div>

      <div className="mt-4 flex flex-col">
        <VerticalTimeline
          lineColor=""
          className="vertical-timeline-custom-line">
          {experiences.map((experience, index) => (
            <ExperienceCard key={index} experience={experience} />
          ))}
          <ResumeButton />
          <PortfolioButton />
        </VerticalTimeline>
      </div>
      <h3
        className={cn(
          'font-semibold',
          '2xl:text-4xl',
          'lg:text-2xl',
          'xl:text-3xl',
          'text-xl',
          'tracking-wide',
          'text-gray-90',
          'pt-10',
          'text-center'
        )}>
        <strong className="text-gray-60">
          TOTAL EXPERIENCE: &nbsp;&nbsp;&nbsp;
        </strong>
        <span className="font-pretendard text-white font-extrabold">
          <AnimatedCounter from={0} to={2} /> Year
        </span>
      </h3>
    </section>
  );
};

export default Experience;
