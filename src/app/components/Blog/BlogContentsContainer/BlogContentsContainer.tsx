import React from 'react';
import Image from 'next/image';
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
              <a
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
              </a>
            </li>
          ))}
        </ul>
        <div className="absolute right-0">
          <span className="font-appleGothic">View</span>
        </div>
      </div>
    </div>
  );
};

export default BlogContentsContainer;
