import React from "react";
import Style from "@/styles/profile.module.css";
import ImageSection from "./ImageSection";
const Profile = () => {
  return (
    <section className="pt-28 relative">
      <div className="flex flex-col items-center">
        <span className="font-calibre text-2xl font-medium">Welcome to my portfolio site!</span>
        <h1 className={`${Style.name} text-white text-6.5xl font-bold mt-12 font-calibre mb-6`}>KIM JUNG SOO</h1>
        <h2 data-testid="intro" className={`${Style.developer} font-calibre font-black-80 font-semibold text-7xl`}>
          I’m Frontend developer
        </h2>
      </div>
      <ImageSection />
    </section>
  );
};

export default Profile;