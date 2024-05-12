import React from 'react';
import TechStackToken from './TechStackToken';
import ReactIcon from '@/assets/icons/react-icon.svg';
import style from './Skills.module.css';

const Skills = () => {
  return (
    <section className="pt-28 pl-44 bg-[#f2f2f2]">
      <h1 className={`text-9xl font-bold font-calibre ${style['title']}`}>
        Skills.
      </h1>
      <TechStackToken
        icon={
          <ReactIcon
            className="w-[60%] h-[60%]"
            aria-hidden="true"
            focusable="false"
          />
        }
        techName="React"
      />
    </section>
  );
};

export default Skills;
