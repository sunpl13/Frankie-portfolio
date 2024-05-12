import React from 'react';
import TechStackToken from './TechStackToken';
import ReactIcon from '@/assets/icons/react-icon.svg';
type Props = {};

const Skills = (props: Props) => {
  return (
    <section className="pt-10 pl-10 bg-[#f2f2f2]">
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
