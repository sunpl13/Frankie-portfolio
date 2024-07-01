import React from 'react';
import TechStackToken from '../TechStackToken';
import BubbleText from '../BubbleText';
import MotionSlide from '@/components/MotionSlide';
import { cn } from '@/utils/cn';

type Props = {
  typeName: 'Language' | 'Frontend' | 'Backend' | 'DevOps';
  stacks: { stacksName: string; icon: React.ReactElement }[];
};

const TechStackTypeList = ({ typeName, stacks }: Props) => {
  return (
    <article
      className={cn(
        'flex',
        'flex-col',
        'justify-between',
        '2xl:h-[23.75rem]',
        'lg:h-[20rem]',
        'md:h-[15rem]'
      )}>
      <BubbleText text={typeName} />
      <div
        className={cn(
          'grid',
          'grid-cols-4',
          'gap-y-5',
          'max-w-[30.5rem]',
          '2xl:gap-x-10',
          'lg:gap-x-5',
          'md:gap-x-2'
        )}>
        {stacks.map(({ stacksName, icon }, index) => (
          <MotionSlide
            className="flex justify-center items-center"
            key={stacksName}
            delay={(index + 1) / 5}>
            <TechStackToken techName={stacksName} icon={icon} />
          </MotionSlide>
        ))}
      </div>
    </article>
  );
};

export default TechStackTypeList;
