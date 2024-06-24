import React from 'react';
import Style from './profile.module.css';
import ImageSection from './ImageSection';
const Profile = () => {
  return (
    <section className="pt-28 relative container">
      <div className="flex flex-col items-center">
        <span className="text-2xl font-medium">
          Welcome to my portfolio site!
        </span>
        <h1
          className={`${Style.name} text-white text-6.5xl font-bold mt-12 mb-6`}>
          KIM JUNG SOO
        </h1>
        <h2
          data-testid="intro"
          className={`${Style.developer} font-black-80 font-semibold text-7xl`}>
          I’m Frontend developer
        </h2>
      </div>
      <ImageSection />
    </section>
  );
};

export default Profile;
