import React from 'react';

import style from './Skills.module.css';
import TechStackTypeList from './TechStackTypeList/TechStackTypeList';
import { languageStack, frontendStack } from '@/utils/datas/techStackData';

const Skills = () => {
  return (
    <section className="pt-28 pl-44 bg-[#f2f2f2]">
      <h1 className={`text-9xl font-bold font-calibre ${style['title']}`}>
        Skills.
      </h1>
      <div className="w-full">
        <div className="ml-[50%] gap-12 flex flex-col">
          <TechStackTypeList stacks={languageStack} typeName="Language" />
          <TechStackTypeList stacks={frontendStack} typeName="Frontend" />
        </div>
      </div>
    </section>
  );
};

export default Skills;
