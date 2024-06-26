import aImage from '@/assets/a.jpg';
import bImage from '@/assets/b.jpg';
import cImage from '@/assets/c.jpg';
import dImage from '@/assets/d.jpg';
import eImage from '@/assets/e.jpg';
import { cn } from '@/utils/cn';
import React from 'react';

export type DescriptionDataType = {
  title: {
    ko: string;
    en: string;
  };
  content: React.ReactNode;
  subDescription: string;
};

export const ServiceDatas = [
  {
    title: 'Developmenet',
    content: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
    backGroundImage: aImage
  },
  {
    title: 'Branding',
    content: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
    backGroundImage: bImage
  },
  {
    title: 'Design',
    content: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
    backGroundImage: cImage
  },
  {
    title: 'Seo',
    content: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
    backGroundImage: dImage
  },
  {
    title: 'Management',
    content: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
    backGroundImage: eImage
  }
];

export const descriptionData: DescriptionDataType[] = [
  {
    title: {
      ko: '프론트엔드',
      en: 'Front-end'
    },
    subDescription: '더 나은 사용자 경험을 위한 프론트엔드 엔지니어',
    content: (
      <>
        <p>
          단어 뜻 그대로 <br />
          <strong className={cn('text-green-60')}>
            사용자와 가장 직접적으로 마주하는
          </strong>
          <br />
          서비스를 개발합니다.
        </p>

        <p className={cn('min-[640px]:pt-14', 'pt-6')}>
          항상 사용자에게 <br /> 더 나은 서비스를 제공하기 위한
          <br />
          <strong className={cn('text-green-60')}>UI/UX</strong>에 관심이
          많습니다.
        </p>
      </>
    )
  },
  {
    title: {
      ko: '생각',
      en: 'Think'
    },
    subDescription: '항상 깊이 고민하는 개발자',
    content: (
      <>
        <p>
          최적의 비즈니스 로직을 구현할 수 있는
          <br /> <strong className={cn('text-green-60')}>방법</strong>에 대해
          <br /> 늘 생각합니다.
        </p>

        <p className={cn('min-[640px]:pt-14', 'pt-6')}>
          사용자의 입장에서 생각하고,
          <br /> 사용자에게 필요한 기술을 개발함으로써,
          <br />
          <strong className={cn('text-green-60')}>비즈니스적 성장</strong>을
          강구하는 개발자입니다.
        </p>
      </>
    )
  },
  {
    title: {
      ko: '가치',
      en: 'Value'
    },
    subDescription: '가치를 창출할 수 있는 개발자',
    content: (
      <>
        <p>
          서로가 함께 할 수록
          <br />더 발전된 <strong className={cn('text-green-60')}>가치</strong>
          를<br />
          창출할 수 있다고 믿습니다.
        </p>

        <p className={cn('min-[640px]:pt-14', 'pt-6')}>
          이러한 믿음에 기초하여
          <br />
          <strong className={cn('text-green-60')}>협업과 소통</strong>을 통해
          <br />
          최고의 가치를 창출할 수 있도록 노력합니다.
        </p>
      </>
    )
  }
];
