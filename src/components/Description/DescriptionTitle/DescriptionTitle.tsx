import { cn } from '@/utils/cn';
import React from 'react';

type Props = {
  motto: string;
  role: string;
};

const DescriptionTitle = ({ motto, role }: Props) => {
  return (
    <div
      className={cn('2xl:w-[29rem]', 'lg:w-[18.75rem]', 'md:w-[15.,625rem]')}>
      <h2
        className={cn(
          '2xl:text-4xl',
          'text-gray-50',
          'lg:text-2xl',
          'xl:text-3xl',
          'text-xl',
          'font-pretendard'
        )}>
        {motto}
      </h2>
      <h1
        className={cn(
          'font-semibold',
          '2xl:text-5xl',
          'lg:text-3xl',
          'xl:text-4xl',
          'text-2xl',
          'tracking-wide',
          'text-gray-90',
          'min-[640px]:pt-6',
          'font-pretendard'
        )}>
        {role}
      </h1>
    </div>
  );
};

export default DescriptionTitle;
