'use client';
import React from 'react';
import style from './HalfCircle.module.css';
import { cn } from '@/utils/cn';

const HalfCircle = () => {
  return (
    <div
      className={cn(
        'absolute',
        'bottom-0',
        'w-1/2',
        'pt-[25%]',
        'max-[1080px]:w-full',
        'max-[1080px]:pt-[50%]',
        'rounded-b-none',
        'rounded-t-full',
        'bg-green-100',
        style['half_circle']
      )}></div>
  );
};

export default HalfCircle;
