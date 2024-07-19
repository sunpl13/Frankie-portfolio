import React from 'react';
import { VerticalTimelineElement } from 'react-vertical-timeline-component';
import portFolioImg from '@images/portfolio.png';
import DownloadIcon from '@icons/download.svg';
import Image from 'next/image';

const PortfolioButton = () => {
  return (
    <VerticalTimelineElement
      visible={true}
      contentStyle={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        background: '#98f211',
        color: '#292929',
        boxShadow:
          'rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px'
      }}
      contentArrowStyle={{
        borderRight: '7px solid  #d3fc96'
      }}
      iconStyle={{ background: '#333333' }}
      icon={
        <div className="h-full text-white">
          <div className="flex justify-center items-center w-full h-full">
            <Image
              src={portFolioImg}
              alt="resume_icon"
              loading="lazy"
              className="w-[60%] h-[60%] object-contain"
            />
          </div>
        </div>
      }>
      <button
        className="flex justify-between
        sm:text-[18px] text-[14px] text-[#707359]
        font-bold items-center py-5 px-3
        whitespace-nowrap gap-1 sm:w-[148px] sm:h-[58px]
        w-[125px] h-[46px] rounded-[10px] bg-base-dark
        hover:bg-gray-900
        hover:text-white transition duration-[0.2s]
        ease-in-out">
        MY PortFolio
        <DownloadIcon />
      </button>
    </VerticalTimelineElement>
  );
};

export default PortfolioButton;
