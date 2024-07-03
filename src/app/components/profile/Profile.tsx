import React from 'react';
import Style from './profile.module.css';
import ImageSection from './ImageSection';
import { cn } from '@/utils/cn';

const Profile = () => {
  return (
    <section id="profile-section" className={cn('pt-28', 'relative')}>
      <div className="flex flex-col items-center">
        <span
          className={cn(
            'sm:text-lg',
            'md:text-xl',
            'lg:text-2xl',
            'font-medium'
          )}>
          Welcome to my portfolio site!
        </span>
        <h1
          className={cn(
            Style.name,
            'text-white',
            'sm:text-5xl',
            'lg:text-6xl',
            '2xl:text-6.5xl',
            'max-[640px]:text-5xl',
            'font-bold',
            'mt-12',
            'mb-6'
          )}>
          KIM JUNG SOO
        </h1>
        <h2
          data-testid="intro"
          className={cn(
            Style.developer,
            'font-black-80',
            'font-semibold',
            'max-[640px]:text-4xl',
            'sm:text-5xl',
            'lg:text-6xl',
            '2xl:text-7xl'
          )}>
          I’m Frontend Developer
        </h2>
      </div>
      <ImageSection />
    </section>
  );
};

export default Profile;
