import { cn } from '@/utils/cn';
import React from 'react';

type Props = {
  children: React.ReactNode;
};

const MainDescription = ({ children }: Props) => {
  return (
    <div
      className={cn(
        '2xl:w-[35rem]',
        'xl:[29.375rem]',
        'lg:w-[29.375rem]',
        'md:w-[26.25rem]'
      )}>
      {children}
    </div>
  );
};

export default MainDescription;
