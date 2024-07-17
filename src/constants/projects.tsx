import askDocImg from '@images/askdoc-thumb.png';
import teslaThumbImg from '@images/tesla-thumb.jpg';
import legacyThumbImg from '@images/legacy-thumb.png';
import webOfficeImg from '@images/web-office-thumb.png';
import addTuneIcon from '@images/addtune.png';
import polarisLogo from '@images/polarisoffice.png';
import classtingLogo from '@images/classting.png';
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
    title: 'AskDoc',
    content:
      '길고 복잡한 문서를 AI에게 분석을 맡겨 필요한 정보만 간략하게 볼 수 있는 폴라리스 드라이브 사용자를 위한 PDF AI 문서 분석 프로그램',
    url: `${process.env.NEXT_PUBLIC_NOTION_URL}/AskDoc-Frontend-9c34d32e86cc475c8cffe55cd32a3571`,
    backGroundImage: askDocImg
  },
  {
    title: '차량용 폴라리스 드라이브',
    content: '차량 소프트웨어를 위한 경량화 된 폴라리스오피스 드라이브 페이지',
    url: `${process.env.NEXT_PUBLIC_NOTION_URL}/062d8efaea374bff87bb6b490f79f963?pvs=4`,
    backGroundImage: teslaThumbImg
  },
  {
    title: '폴라리스오피스 플랫폼 레거시 개선',
    content:
      'JSP와 jQuery를 기반으로 한 플랫폼을 Next.js 마이그레이션 프로젝트',
    url: `${process.env.NEXT_PUBLIC_NOTION_URL}/b608f6f11c8c48fdaaf98e5fdddf3054?pvs=4`,
    backGroundImage: legacyThumbImg
  },
  {
    title: '웹 오피스 편집모드',
    content: '뷰어만 제공되던 폴라리스오피스 Web의 편집모드를 추가한 프로젝트',
    url: `${process.env.NEXT_PUBLIC_NOTION_URL}/c11e3bc3c737431aac0958989dd04a83?pvs=4`,
    backGroundImage: webOfficeImg
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

export const experiences = [
  {
    title: 'Front-End Developer',
    company_name: '인터브리드',
    icon: addTuneIcon,
    iconBg: '#333333',
    date: 'Nov 2021 - Jul 2022',
    description:
      '중소기업, 소상공인도 합리적인 비용으로 <br/> 광고할 수 있는 옥외광고 플랫폼 스타트업'
  },
  {
    title: 'Front-End Developer',
    company_name: '폴라리스오피스',
    icon: polarisLogo,
    iconBg: '#333333',
    date: 'Nov 2022 - Mar 2024',
    description:
      '다양한 플랫폼과 다양한 기기를 통해 <br/> 문서 작업이 가능한 오피스 소프트웨어 전문 기업'
  },
  {
    title: 'Front-End Developer',
    company_name: '클래스팅',
    icon: classtingLogo,
    iconBg: '#333333',
    date: 'Mar 2024 - Jun 2024',
    description:
      '교사와 학생, 학부모를 위한 AI 기반 학습관리 시스템을 제공하는 교육 플랫폼 스타트업'
  }
];
