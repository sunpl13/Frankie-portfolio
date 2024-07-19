import { cn } from '@/utils/cn';
import Link from 'next/link';
import React from 'react';
import MotionSlide from '../MotionSlide';
import SummaryNavigate from './SummaryNavigate';

const Summary = () => {
  return (
    <section
      id="summary-section"
      className="bg-base-dark flex flex-col justify-center items-center">
      <div className="xl:container">
        <div className="flex justify-around">
          <h1
            className={cn(
              'text-white',
              'font-semibold',
              'mb-36',
              '2xl:text-6xl',
              'lg:text-4xl',
              'xl:text-5xl',
              'text-3xl'
            )}>
            WELCOME TO MY <br />
            PORTFOLIO SITE!
          </h1>
        </div>
        <footer
          className={cn(
            'flex',
            'text-gray-40',
            'justify-around',
            'lg:text-2xl',
            'xl:text-3xl',
            'sm:flex-row',
            'sm:justify-around',
            'flex-col',
            'items-center',
            'gap-3'
          )}>
          <SummaryNavigate />
          <MotionSlide delay={0.7}>
            <ul className="flex flex-col sm:gap-y-3 underline items-center">
              <li>sunpl0718@naver.com</li>
              <li>010 6305 9363</li>
            </ul>
          </MotionSlide>
          <MotionSlide delay={1.3}>
            <ul className="flex flex-col sm:gap-y-3 text-white items-center">
              <li>
                <Link
                  href="https://github.com/sunpl13"
                  target="_blank"
                  className="underline">
                  GITHUB
                </Link>
              </li>
              <li>
                <Link
                  href="https://sunpl13.tistory.com"
                  target="_blank"
                  className="underline">
                  TECH BLOG
                </Link>
              </li>
            </ul>
          </MotionSlide>
        </footer>
      </div>
    </section>
  );
};

export default Summary;
