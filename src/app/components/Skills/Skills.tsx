import React from 'react';

import style from './Skills.module.css';
import TechStackTypeList from './TechStackTypeList/TechStackTypeList';
import {
  languageStack,
  frontendStack,
  devOpsStack
} from '@/utils/datas/techStackData';

const Skills = () => {
  return (
    <section className="pt-28 pl-44 bg-[#f2f2f2] flex">
      <h1 className={`text-9xl font-bold font-calibre ${style['title']}`}>
        Skills.
      </h1>
      <div className="w-full mt-7">
        <div className="ml-[50%] gap-12 flex flex-col">
          <TechStackTypeList stacks={languageStack} typeName="Language" />
          <TechStackTypeList stacks={frontendStack} typeName="Frontend" />
          <TechStackTypeList stacks={devOpsStack} typeName="DevOps" />
        </div>
      </div>
    </section>
  );
};

export default Skills;
