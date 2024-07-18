import React from 'react';
import Image from 'next/image';
import HalfCircle from '../HalfCircle';
import { cn } from '@/utils/cn';

const ImageSection = () => {
  return (
    <div className="absolute bottom-0 flex-1 right-2/4 flex justify-center w-full translate-x-[50%]">
      <Image
        className={cn(
          'z-10',
          '!relative',
          'max-[640px]:!w-4/5',
          'max-[768px]:!w-2/3',
          'max-[1080px]:!w-1/2',
          'max-[1280px]:!w-2/5',
          'max-[1440px]:!w-2/6',
          'max-[1560px]:!w-[27.5%]',
          'max-[1892px]:!w-3/10',
          '!w-1/5'
        )}
        src="/images/profile_half.png"
        alt="profile_img"
        objectFit="cover"
        loading="lazy"
        fill={true}
        quality={100}
      />
      <HalfCircle />
    </div>
  );
};

export default ImageSection;
