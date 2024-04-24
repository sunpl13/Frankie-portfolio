import React from 'react';
import TwoCircle from './TwoCircle';

type Props = {};

const Description = (props: Props) => {
  return (
    <section className="h-full bg-base-dark text-white pl-56 pt-37.5">
      <article className="flex">
        <div>
          <h2>성과를 그리는</h2>
          <h1>Front-End Engineer</h1>
          <TwoCircle />
        </div>

        <div>
          <p>
            사용자와 비즈니스 사이 [소통의 매개체] 로서
            <br /> 최상의 서비스를 제공하는 개발자를 꿈꾸고 있습니다.
          </p>
          <p>
            단어 뜻 그대로
            <strong>사용자와 가장 직접적으로 마주하는</strong>
            서비스를 개발합니다.
          </p>

          <p>
            항상 사용자에게 더 나은 서비스를 제공하기 위한
            <strong>UI/UX</strong>에 관심이 많습니다.
          </p>
        </div>
      </article>
    </section>
  );
};

export default Description;
