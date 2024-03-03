import React from "react";
import Style from "@/styles/profile.module.css";
import Image from "next/image";
import HalfCircle from "@/components/profile/HalfCircle";
const Profile = () => {
  return (
    <section className="pt-28 flex flex-col items-center">
      <span className="font-calibre text-2xl font-medium">Welcome to my portfolio site!</span>
      <h1 className={`${Style.name} text-white text-6.5xl font-bold mt-12 font-calibre mb-6`}>KIM JUNG SOO</h1>
      <h2 className={`${Style.developer} font-calibre font-black-80 font-semibold text-7xl`}>I’m Frontend developer</h2>
      <div className="relative flex justify-center">
        <Image className="z-10" src="/profile_half.png" alt="profile_img" width={570} height={640} loading="lazy" quality={100}></Image>
        <HalfCircle />
      </div>
    </section>
  );
};

export default Profile;
