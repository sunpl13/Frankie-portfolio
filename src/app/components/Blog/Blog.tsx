import React from 'react';
import BlogContentsContainer from './BlogContentsContainer';
import { cn } from '@/utils/cn';

const Blog = () => {
  return (
    <section
      id="blog-section"
      className={cn('bg-[#f2f2f2]', 'relative', 'overflow-hidden')}>
      <div className={cn('h-1/3', 'relative')}>
        <div
          className={cn(
            'absolute',
            'top-[-33%]',
            'right-[-20%]',
            'h-full',
            'aspect-square',
            'border-2',
            'rounded-full',
            'border-[rgba(30,28,29,0.3)]',
            '2xl:right-[-6%]',
            '2xl:top-[-9%]',
            'xl:right-[-7%]',
            'xl:top-[-15%]',
            'lg:right-[-9%]',
            'lg:top-[-20%]',
            'md:right-[-9%]',
            'md:top-[-20%]'
          )}></div>
      </div>
      <BlogContentsContainer />
      <div className={cn('h-1/4', 'absolute', 'left-[-3%]', 'bottom-[-10%]')}>
        <div
          className={cn(
            'h-full',
            'aspect-square',
            'border-dotted',
            'border-2',
            'rounded-full',
            'border-[rgba(30,28,29,0.3)]'
          )}></div>
      </div>
    </section>
  );
};

export default Blog;
