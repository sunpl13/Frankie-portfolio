import React from 'react';
import TwoCircle from './TwoCircle';

type Props = {};

const Description = (props: Props) => {
  return (
    <section className="h-full bg-base-dark text-white pl-56 pt-37.5 pr-96 font-pretendard">
      <article>
        <div className="flex justify-between">
          <div>
            <h2 className="text-4xl text-gray-50">성과를 그리는</h2>
            <h1 className="font-calibre font-semibold text-5xl tracking-wide text-gray-90 pt-6">
              Front-End Engineer
            </h1>
          </div>
          <div className="flex items-end">
            <p className="text-2xl text-gray-30">
              사용자와 비즈니스 사이 [소통의 매개체] 로서
              <br /> 최상의 서비스를 제공하는 개발자를 꿈꾸고 있습니다.
            </p>
          </div>
        </div>

        <div className="text-gray-60 text-3xl flex justify-between pt-24 items-center pl-7">
          <TwoCircle />
          <div className="pr-[83px]">
            <p>
              단어 뜻 그대로 <br />
              <strong className="text-green-60">
                사용자와 가장 직접적으로 마주하는
              </strong>
              <br />
              서비스를 개발합니다.
            </p>

            <p className="pt-14">
              항상 사용자에게 <br /> 더 나은 서비스를 제공하기 위한
              <br />
              <strong className="text-green-60">UI/UX</strong>에 관심이
              많습니다.
            </p>
          </div>
        </div>
      </article>
    </section>
  );
};

export default Description;
