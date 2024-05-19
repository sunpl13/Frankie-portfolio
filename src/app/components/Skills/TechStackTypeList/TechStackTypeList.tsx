import React from 'react';
import TechStackToken from '../TechStackToken';

type Props = {
  typeName: 'Language' | 'Frontend' | 'Backend' | 'DevOps';
  stacks: { stacksName: string; icon: React.ReactElement }[];
};

const TechStackTypeList = ({ typeName, stacks }: Props) => {
  return (
    <article>
      <h2 className="inline-flex items-center text-3xl text-[#1e1c1d] border-2 border-base-dark text-center mb-12 pt-3 pb-2 px-12 rounded-3xl">
        {typeName}
      </h2>
      <div className="grid grid-cols-4 gap-x-10 gap-y-5 max-w-[30.5rem] mb-12">
        {stacks.map(({ stacksName, icon }) => (
          <TechStackToken key={stacksName} techName={stacksName} icon={icon} />
        ))}
      </div>
      <div className="h-px w-full border border-base-dark"></div>
    </article>
  );
};

export default TechStackTypeList;
