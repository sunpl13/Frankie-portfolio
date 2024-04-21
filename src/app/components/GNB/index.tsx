import React from "react";
import GnbStyle from "@/styles/gnb.module.css";
const GNB = () => {
  return (
    <header className="flex w-full h-24 bg-black items-center">
      <nav className="w-full">
        <ul className={`list-none flex text-white text-2xl font-calibre ml-48`}>
          <li className={`${GnbStyle["li-style"]}`}>Profile</li>
          <li className={`${GnbStyle["li-style"]}`}>Project</li>
        </ul>
      </nav>
    </header>
  );
};

export default GNB;
