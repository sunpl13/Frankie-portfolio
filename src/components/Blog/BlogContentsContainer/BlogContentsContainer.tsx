import React from 'react';
import Image from 'next/image';
import RightArrowIcon from '@icons/arrow-right.svg';
import Link from 'next/link';
import { cn } from '@/utils/cn';
import MotionSlide from '@/components/MotionSlide';
import logoImg from '@images/blog_logo.png';
import bundleImg from '@images/bundle.webp';
import nextImg from '@images/next_logo.webp';
const BlogContentsContainer = () => {
  const blogData = [
    {
      title: '[Vite] Bundle 사이즈 최적화 하기',
      imgSrc: bundleImg,
      link: `${process.env.NEXT_PUBLIC_TISTORY_URL}/66`
    },
    {
      title: 'iOS 15 Input 입력 안되는 이슈 해결기',
      imgSrc: logoImg,
      link: `${process.env.NEXT_PUBLIC_TISTORY_URL}/65`
    },
    {
      title: 'Next.js AWS EC2에 배포하기(1)',
      imgSrc: nextImg,
      link: `${process.env.NEXT_PUBLIC_TISTORY_URL}/64`
    }
  ];

  return (
    <div className="absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%]">
      <div className="relative">
        <h1
          className={cn(
            'z-20',
            'font-semibold',
            'text-9xl',
            'md:absolute',
            'md:top-[-2rem]',
            'md:left-[-1.5rem]',
            'lg:top-[-2.875rem]',
            'lg:left-[-2.5rem]',
            'xl:top-[-4rem]',
            'xl:left-[-3.5rem]',
            'text-5xl',
            'lg:text-7xl',
            'xl:text-8xl',
            '2xl:text-9xl',
            'md:text-left',
            'text-center',
            'max-md:mb-10'
          )}>
          Blog.
        </h1>
        <div
          className={cn(
            'w-20',
            'h-20',
            '2xl:w-60',
            '2xl:h-60',
            'md:w-28',
            'md:h-28',
            'lg:w-36',
            'lg:h-36',
            'xl:w-44',
            'xl:h-44',
            'rounded-full',
            'border-2',
            'border-[rgba(30,28,29,0.3)]',
            'top-[15rem]',
            'left-[-5rem]',
            'sm:top-[-8rem]',
            'sm:left-20',
            'absolute'
          )}
        />
        <ul className="flex justify center gap-8 max-sm:flex-col">
          {blogData.map(({ link, imgSrc, title }, index) => (
            <MotionSlide
              as="li"
              className={cn(
                '2xl:w-96',
                '2xl:h-60',
                'z-10',
                'xl:w-80',
                'xl:h-[12.5rem]',
                'lg:w-72',
                'lg:h-[11.25rem]',
                'w-52',
                'h-[8.125rem]'
              )}
              key={link}
              delay={(index + 1) * 0.5}>
              <Link
                className="block w-full h-full rounded-lg overflow-hidden"
                href={link}
                target="_blank">
                <Image
                  width={0}
                  height={0}
                  sizes="100vw"
                  style={{
                    width: '100%',
                    aspectRatio: '8 / 5',
                    overflow: 'hidden'
                  }}
                  loading="lazy"
                  src={imgSrc}
                  alt={title}
                />
              </Link>
            </MotionSlide>
          ))}
        </ul>
        <div
          className={cn(
            'relative',
            'flex',
            'sm:justify-end',
            'justify-center',
            'mt-7'
          )}>
          <Link
            href={process.env.NEXT_PUBLIC_TISTORY_URL as string}
            target="_blank"
            className={cn(
              'font-appleGothic',
              'text-2xl',
              'cursor-pointer',
              'flex',
              'gap-x-4',
              'decoration-[#1e1c1d]',
              'underline',
              'decoration-solid',
              'items-center'
            )}>
            View
            <RightArrowIcon width="1rem" aria-hidden="true" focusable="false" />
          </Link>
          <div className="w-11 h-11 rounded-full border-2 border-[rgba(30,28,29,0.3)] top-3 right-14 absolute"></div>
        </div>
      </div>
    </div>
  );
};

export default BlogContentsContainer;
