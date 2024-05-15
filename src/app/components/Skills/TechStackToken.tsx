import React from 'react';
import style from './Skills.module.css';
type Props = {
  icon: React.ReactElement;
  techName: string;
};

const TechStackToken = ({ icon, techName }: Props) => {
  return (
    <div className="inline-flex flex-col items-center">
      <div
        className={`flex items-center justify-center w-20 h-20 bg-[#333333] mb-4 rounded-full ${style['token']}`}>
        <span>{icon}</span>
      </div>
      <span className="font-calibre text-xl font-medium text-[#1e1c1d] tracking-tighter leading-none text-center">
        {techName}
      </span>
    </div>
  );
};

export default TechStackToken;
