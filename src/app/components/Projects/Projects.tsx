import React from 'react';
import SwiperContainer from './SwiperContainer';
import ArrowHandIcon from '@/assets/icons/arrow-hand.svg';
const Projects = () => {
  return (
    <main className="h-full flex flex-col justify-center items-center relative overflow-y-hidden">
      <SwiperContainer />
      <ArrowHandIcon
        className="text-gray-90 absolute bottom-[-2rem] left-1/2 translate-x-[-50%]"
        width="7rem"
        height="7rem"
      />
    </main>
  );
};

export default Projects;
