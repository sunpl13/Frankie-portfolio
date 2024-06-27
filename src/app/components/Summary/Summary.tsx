import Link from 'next/link';
import React from 'react';

const Summary = () => {
  return (
    <section className="bg-base-dark flex flex-col justify-center items-center">
      <div className="xl:container">
        <div className="flex justify-around">
          <h1 className="text-white text-6xl font-semibold mb-36">
            WELCOME TO MY <br />
            PORTFOLIO SITE!
          </h1>

          <form action="">
            <input type="email" name="" id="" />
          </form>
        </div>
        <footer className="flex text-gray-40  justify-around text-3xl">
          <ul className="flex flex-col gap-y-3">
            <li>
              <button className="underline">ABOUT ME</button>
            </li>
            <li>
              <button className="underline">SKILLS</button>
            </li>
            <li>
              <button className="underline">WORK EXPERIENCE</button>
            </li>
            <li>
              <button className="underline">PROJECTS</button>
            </li>
            <li>
              <button className="underline">BLOG</button>
            </li>
          </ul>
          <ul className="flex flex-col gap-y-3 underline">
            <li>sunpl0718@naver.com</li>
            <li>010 6305 9363</li>
          </ul>

          <ul className="flex flex-col gap-y-3 text-white">
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
                href="https://github.com/sunpl13"
                target="_blank"
                className="underline">
                TECH BLOG
              </Link>
            </li>
          </ul>
        </footer>
      </div>
    </section>
  );
};

export default Summary;
