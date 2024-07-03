import React from 'react';

import style from './Skills.module.css';
import TechStackTypeList from './TechStackTypeList';
import {
  languageStack,
  frontendStack,
  devOpsStack
} from '@/utils/datas/techStackData';
import MotionSlide from '../MotionSlide';
import { cn } from '@/utils/cn';

const Skills = () => {
  return (
    <section
      id="skills-section"
      className="bg-[#f2f2f2] h-full flex flex-col justify-center items-center">
      <h1
        className={cn(
          '2xl:text-9xl',
          'text-gray-50',
          'lg:text-4xl',
          'xl:text-7xl',
          'text-3xl',
          'font-bold',
          style['title']
        )}>
        Skills.
      </h1>
      <div className="mt-7">
        <div
          className={cn(
            'col-start-2',
            'flex',
            'max-[639px]:flex-col',
            'gap-x-6',
            'lg:gap-x-8',
            'xl:gap-x-10',
            '2xl:gap-x-12'
          )}>
          <MotionSlide translateDirection="y">
            <TechStackTypeList stacks={languageStack} typeName="Language" />
          </MotionSlide>
          <div
            className={cn(
              'w-0.5',
              'border',
              'bg-[#333]',
              'border-[#333]',
              '2xl:h-[23.75rem]',
              'lg:h-[20rem]',
              'md:h-[15rem]',
              'max-[639px]:h-0.5',
              'max-[639px]:w-full'
            )}></div>
          <MotionSlide delay={0.5} translateDirection="y">
            <TechStackTypeList stacks={frontendStack} typeName="Frontend" />
          </MotionSlide>
          <div
            className={cn(
              'w-0.5',
              'border',
              'bg-[#333]',
              'border-[#333]',
              '2xl:h-[23.75rem]',
              'lg:h-[20rem]',
              'md:h-[15rem]',
              'max-[639px]:h-0.5',
              'max-[639px]:w-full'
            )}></div>
          <MotionSlide delay={1} translateDirection="y">
            <TechStackTypeList stacks={devOpsStack} typeName="DevOps" />
          </MotionSlide>
        </div>
      </div>
    </section>
  );
};

export default Skills;
