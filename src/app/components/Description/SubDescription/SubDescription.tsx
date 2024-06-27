import { cn } from '@/utils/cn';
import React from 'react';

type Props = {
  subDescription: string;
};

const SubDescription = ({ subDescription }: Props) => {
  return (
    <p
      className={cn(
        '2xl:text-2xl',
        'lg:text-lg',
        'xl:text-xl',
        'text-md',
        'text-gray-30',
        'min-[640px]:pt-3',
        '2xl:w-[35rem]',
        'xl:[29.375rem]',
        'lg:w-[29.375rem]',
        'md:w-[26.25rem]',
        'pt-3'
      )}>
      {subDescription}
    </p>
  );
};

export default SubDescription;
