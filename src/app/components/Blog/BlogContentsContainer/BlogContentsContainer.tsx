import React from 'react';
import Image from 'next/image';
const BlogContentsContainer = () => {
  return (
    <div className="absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%]">
      <div className="relative">
        <h1 className="z-20 font-calibre font-semibold text-9xl absolute top-[-5.375rem] left-[-4.5rem]">
          Blog.
        </h1>
        <div className="w-60 h-60 rounded-full border-2 border-[rgba(30,28,29,0.3)] top-[-8rem] left-20 absolute"></div>
        <ul className="flex justify center gap-8">
          <li className="w-96 h-60 z-10">
            <a
              className="block w-full h-full"
              href="https://sunpl13.tistory.com/61"
              target="_blank">
              <Image
                width={100}
                height={100}
                src={`https://img1.daumcdn.net/thumb/C217x122/?scode=mtistory2&amp;fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FoXgAu%2FbtsGO929l1Q%2Fh01K74Vfi2br8xsZ66lidK%2Fimg.png`}
                alt="[Jest] The module factory of 'jest.mock()' is not allowed to reference any out-of-scope variables. 오류 해결하기"
              />
            </a>
          </li>
          <li className="w-96 h-60 border border-black">박스</li>
          <li className="w-96 h-60 border border-black">박스</li>
        </ul>
      </div>
    </div>
  );
};

export default BlogContentsContainer;
