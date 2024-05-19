import React from 'react';
import TwoCircle from './TwoCircle';

type Props = {};

const Description = (props: Props) => {
  return (
    <section className="bg-base-dark text-white font-pretendard">
      <article className="flex justify-between px-60 py-36">
        <div className="flex items-end flex-col">
          <div className="mb-24">
            <h2 className="text-4xl text-gray-50">성과를 그리는</h2>
            <h1 className="font-semibold text-5xl tracking-wide text-gray-90 pt-6">
              Front-End Engineer
            </h1>
          </div>
          <TwoCircle />
        </div>

        <div className="text-gray-60 text-3xl ">
          <p className="text-2xl text-gray-30 mb-40 pt-3">
            <br />
            사용자와 비즈니스 사이 [소통의 매개체] 로서
            <br /> 최상의 서비스를 제공하는 개발자를 꿈꾸고 있습니다.
          </p>

          <div>
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
