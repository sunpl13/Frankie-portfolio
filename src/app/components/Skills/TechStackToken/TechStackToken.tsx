import React from 'react';
import style from './TechStackToken.module.css';
import { cn } from '@/utils/cn';
type Props = {
  icon: React.ReactElement;
  techName: string;
};

const TechStackToken = ({ icon, techName }: Props) => {
  return (
    <div className="inline-flex flex-col items-center">
      <div
        className={cn(
          'flex',
          'items-center',
          'justify-center',
          'w-20',
          'h-20',
          'bg-[#333333]',
          'mb-4',
          'rounded-full',
          style['token'],
          '2xl:w-20',
          '2xl:h-20',
          'xl:w-16',
          'xl:h-16',
          'lg:w-12',
          'lg:h-12',
          'w-10',
          'h-10'
        )}>
        <span>{icon}</span>
      </div>

      <span
        className={cn(
          'font-medium',
          'text-[#1e1c1d]',
          'tracking-tighter',
          'leading-none',
          'text-center',
          'text-md',
          '2xl:text-xl',
          'lg:text-lg'
        )}>
        {techName}
      </span>
    </div>
  );
};

export default TechStackToken;
