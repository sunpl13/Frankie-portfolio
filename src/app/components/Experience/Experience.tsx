'use client';
import { VerticalTimeline } from 'react-vertical-timeline-component';
import { motion } from 'framer-motion';
import 'react-vertical-timeline-component/style.min.css';
import { experiences } from '../../../../constants/projects';
import ExperienceCard from '../ExperienceCard';
import { cn } from '@/utils/cn';
import AnimatedCounter from '../AnimatedCounter/AnimatedCounter';

const Experience = () => {
  return (
    <section className="bg-base-dark">
      <motion.div
        className="flex px-10 max-[640px]:justify-center"
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
          <AnimatedCounter from={0} to={2} /> Year{' '}
          <AnimatedCounter from={0} to={3} /> Month
        </span>
      </h3>
    </section>
  );
};

export default Experience;

//  <VerticalTimelineElement
//   contentStyle={{
//     background: '#eaeaec',
//     color: '#292929',
//     boxShadow:
//       'rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px',
//     display: 'flex',
//     justifyContent: 'center',
//     alignItems: 'center'
//   }}
//   contentArrowStyle={{
//     borderRight: '7px solid  #232631'
//   }}
//   iconStyle={{ background: '#333333' }}
//   icon={
//     <div className="flex justify-center items-center w-full h-full">
//       <img
//         src={resume}
//         alt="resume"
//         className="w-[45%] h-[45%] object-contain"
//       />
//     </div>
//   }
// >
//   <button
//     className="live-demo flex justify-between
//       sm:text-[18px] text-[14px] text-timberWolf
//       font-bold font-beckman items-center py-5 pl-3 pr-3
//       whitespace-nowrap gap-1 sm:w-[148px] sm:h-[58px]
//       w-[125px] h-[46px] rounded-[10px] bg-jetLight
//       sm:mt-[22px] mt-[16px] hover:bg-battleGray
//       hover:text-eerieBlack transition duration-[0.2s]
//       ease-in-out"
//     onClick={() =>
//       window.open(
//         'resume link', //paste the link to your resume here
//         '_blank'
//       )
//     }
//     onMouseOver={() => {
//       document
//         .querySelector('.download-btn')
//         .setAttribute('src', downloadHover);
//     }}
//     onMouseOut={() => {
//       document
//         .querySelector('.download-btn')
//         .setAttribute('src', download);
//     }}>
//     MY RESUME
//     <img
//       src={download}
//       alt="download"
//       className="download-btn sm:w-[26px] sm:h-[26px]
//         w-[23px] h-[23px] object-contain"
//     />
//   </button>
//   </VerticalTimelineElement>
