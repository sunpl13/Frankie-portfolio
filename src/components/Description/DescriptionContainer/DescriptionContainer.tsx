import React from 'react';
import TwoCircle from '../TwoCircle';
import { cn } from '@/utils/cn';
import DescriptionTitle from '../DescriptionTitle';
import SubDescription from '../SubDescription';
import MainDescription from '../MainDescription';
import MotionSlide from '../../MotionSlide';
import { DescriptionDataType } from '../../../../../constants/projects';
const DescriptionContainer = ({
  subDescription,
  title,
  content
}: DescriptionDataType) => {
  return (
    <section
      id={`description-${title.en}-section`}
      className={cn(
        'bg-base-dark',
        'text-white',
        'font-pretendard',
        'flex',
        'items-center',
        'description'
      )}>
      <article
        className={cn(
          'container',
          'mx-auto',
          'flex',
          'flex-col',
          'min-[640px]:gap-y-40',
          'max-[639px]:items-center',
          'max-[639px]:text-center'
        )}>
        <div className={cn('min-[640px]:flex', 'min-[640px]:justify-around')}>
          <DescriptionTitle motto="성과를 그리는" role="Front-End Engineer" />

          <MotionSlide>
            <SubDescription subDescription={subDescription} />
          </MotionSlide>
        </div>

        <div
          className={cn(
            'text-gray-60',
            '2xl:text-3xl',
            'lg:text-xl',
            'xl:text-2xl',
            'text-lg',
            'flex',
            'min-[640px]:justify-around',
            'max-[639px]:flex-col',
            'max-[639px]:items-center'
          )}>
          <MotionSlide delay={0.5}>
            <TwoCircle koTitle={title.ko} enTitle={title.en} />
          </MotionSlide>
          <MotionSlide delay={1}>
            <MainDescription>{content}</MainDescription>
          </MotionSlide>
        </div>
      </article>
    </section>
  );
};

export default DescriptionContainer;
