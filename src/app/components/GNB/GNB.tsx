import React from 'react';
import NavItems from './NavItems';

const GNB = () => {
  return (
    <header className="w-full max-[640px]:px-4 sm:h-24 sm:bg-black">
      <ul className="h-full w-full list-none flex max-[640px]:justify-between items-center text-white text-2xl">
        <NavItems />
      </ul>
    </header>
  );
};

export default GNB;
