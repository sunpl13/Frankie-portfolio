import React from 'react';
import Image from 'next/image';
import RightArrowIcon from '@/assets/icons/arrow-right.svg';
import Link from 'next/link';

const BlogContentsContainer = () => {
  const blogData = [
    {
      title:
        "[Jest] The module factory of 'jest.mock()' is not allowed to reference any out-of-scope variables. 오류 해결하기",
      imgSrc: `${process.env.NEXT_PUBLIC_BLOG_IMG_URL}/oXgAu/btsGO929l1Q/h01K74Vfi2br8xsZ66lidK/img.png`,
      link: `${process.env.NEXT_PUBLIC_TISTORY_URL}/61`
    },
    {
      title: 'MSW의 delay infinite는 테스트 성능에 이상이 없을까?',
      imgSrc: `${process.env.NEXT_PUBLIC_BLOG_IMG_URL}/xBcVp/btsGuplxipO/8i1xJlPnDXlKKEpAszIK51/img.png`,
      link: `${process.env.NEXT_PUBLIC_TISTORY_URL}/60`
    },
    {
      title: 'MSW의 delay infinite는 테스트 성능에 이상이 없을까?',
      imgSrc: `${process.env.NEXT_PUBLIC_BLOG_IMG_URL}/LTSzb/btsFm3XSE4k/FynOak49KPJWNw8hUp2sa1/img.png`,
      link: `${process.env.NEXT_PUBLIC_TISTORY_URL}/59`
    }
  ];

  return (
    <div className="absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%]">
      <div className="relative">
        <h1 className="z-20 font-semibold text-9xl absolute top-[-5.375rem] left-[-4.5rem]">
          Blog.
        </h1>
        <div className="w-60 h-60 rounded-full border-2 border-[rgba(30,28,29,0.3)] top-[-8rem] left-20 absolute"></div>
        <ul className="flex justify center gap-8">
          {blogData.map(({ link, imgSrc, title }) => (
            <li className="w-96 h-60 z-10" key={link}>
              <Link
                className="block w-full h-full rounded-lg overflow-hidden"
                href={link}
                target="_blank">
                <Image
                  priority={true}
                  width={0}
                  height={0}
                  sizes="100vw"
                  style={{
                    width: '100%',
                    aspectRatio: '8 / 5',
                    overflow: 'hidden'
                  }}
                  src={imgSrc}
                  alt={title}
                />
              </Link>
            </li>
          ))}
        </ul>
        <div className="relative flex flex-row-reverse mt-7">
          <Link
            href={process.env.NEXT_PUBLIC_TISTORY_URL as string}
            target="_blank"
            className="font-appleGothic text-2xl cursor-pointer flex gap-x-4 decoration-[#1e1c1d] underline decoration-solid items-center">
            View{' '}
            <RightArrowIcon width="1rem" aria-hidden="true" focusable="false" />
          </Link>
          <div className="w-11 h-11 rounded-full border-2 border-[rgba(30,28,29,0.3)] top-3 right-14 absolute"></div>
        </div>
      </div>
    </div>
  );
};

export default BlogContentsContainer;
