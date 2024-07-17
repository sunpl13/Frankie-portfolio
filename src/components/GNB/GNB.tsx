import React from 'react';
import NavItems from './NavItems';
import { cn } from '@/utils/cn';

const GNB = () => {
  return (
    <header
      className={cn('w-full', 'max-[640px]:px-4', 'sm:h-24', 'sm:bg-black')}>
      <ul
        className={cn(
          'h-full',
          'w-full',
          'list-none',
          'flex',
          'max-[640px]:justify-between',
          'max-[640px]:pt-6',
          'items-center',
          'text-white',
          'text-2xl'
        )}>
        <NavItems />
      </ul>
    </header>
  );
};

export default GNB;
