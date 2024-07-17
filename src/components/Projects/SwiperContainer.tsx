'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, A11y, Autoplay, FreeMode } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/free-mode';
import Image from 'next/image';
import RightArrowIcon from '@icons/arrow-right.svg';
import { cn } from '@/utils/cn';
import { ServiceDatas } from '@/constants/projects';
import { useState } from 'react';
import Link from 'next/link';
const SwiperContainer = () => {
  const [titleInfo, setTitleInfo] = useState({
    title: '',
    url: ''
  });
  return (
    <div
      className={cn(
        'flex',
        'items-center',
        'justify-center',
        'flex-col',
        'w-full'
      )}>
      <h1
        className={cn(
          'mb-10',
          'text-4xl',
          'font-semibold',
          'md:text-3xl',
          'sm:text-2xl',
          'max-[639px]:text-2xl'
        )}>
        Projects.
      </h1>
      <Swiper
        className={cn('max-w-[90%]', 'lg:max-w-[80%]')}
        freeMode={true}
        pagination={{ clickable: true }}
        modules={[FreeMode, Pagination, Autoplay, A11y]}
        slidesPerView={1}
        spaceBetween={15}
        grabCursor={true}
        a11y={{
          containerRoleDescriptionMessage: '프로젝트들 모음',
          itemRoleDescriptionMessage: '내가 작업한 프로젝트'
        }}
        centeredSlides={true}
        onActiveIndexChange={(e) => {
          setTitleInfo({
            ...titleInfo,
            title: ServiceDatas[e.realIndex].title,
            url: ServiceDatas[e.realIndex].url
          });
        }}
        autoplay={{
          delay: 2000,
          disableOnInteraction: true // 쓸어 넘기거나 버튼 클릭 시 자동 슬라이드 정지.
        }}
        loop={true}
        breakpoints={{
          400: {
            slidesPerView: 1,
            spaceBetween: 15
          },
          640: {
            slidesPerView: 2,
            spaceBetween: 15
          },
          700: {
            slidesPerView: 3,
            spaceBetween: 15
          }
        }}>
        {ServiceDatas.map((item) => (
          <SwiperSlide key={item.title}>
            <div
              className={cn(
                'flex',
                'flex-col',
                'gap-6',
                'group',
                'relative',
                'shadow-lg',
                'text-white',
                'rounded-xl',
                'px-6',
                'py-8',
                'h-[250px]',
                'w-[215px]',
                'lg:h-[300px]',
                'lg:w-[250px]',
                'xl:h-[350px]',
                'xl:w-[300px]',
                '2xl:h-[450px]',
                '2xl:w-[400px]',
                '3xl:h-[550px]',
                '3xl:w-[450px]',
                'max-[639px]:w-full',
                'overflow-hidden'
              )}>
              <Image
                alt={`${item.title} image`}
                src={item.backGroundImage}
                placeholder="blur"
                quality={100}
                fill
                sizes="100%"
                style={{
                  objectFit: 'cover'
                }}
              />
              <div
                className={cn(
                  'absolute',
                  'inset-0',
                  'bg-black',
                  'opacity-10',
                  'group-hover:opacity-50'
                )}
              />
              <div className={cn('relative', 'flex', 'flex-col', 'gap-3')}>
                <h2 className={cn('text-xl', 'lg:text-2xl')}>{item.title}</h2>
                <p className={cn('lg:text-lg')}>{item.content}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <Link
        target="_blank"
        href={titleInfo.url}
        aria-label="project-name"
        className={cn(
          'mt-10',
          'text-2xl',
          'underline',
          'flex',
          'gap-x-2',
          'cursor-pointer'
        )}>
        {titleInfo.title}
        <RightArrowIcon width="1rem" aria-hidden="true" focusable="false" />
      </Link>
    </div>
  );
};

export default SwiperContainer;
