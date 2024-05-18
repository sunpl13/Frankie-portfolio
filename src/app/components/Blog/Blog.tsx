import React from 'react';
import BlogContentsContainer from './BlogContentsContainer';

const Blog = () => {
  return (
    <section className="bg-[#f2f2f2] relative overflow-hidden">
      <div className="h-1/3 relative">
        <div className="absolute right-[-6%] top-[-9%] h-full aspect-square border-2 rounded-full border-[rgba(30,28,29,0.3)]"></div>
      </div>
      <BlogContentsContainer />
      <div className="h-1/4 absolute left-[-3%] bottom-[-10%]">
        <div className="h-full aspect-square border-dotted border-2 rounded-full border-[rgba(30,28,29,0.3)]"></div>
      </div>
    </section>
  );
};

export default Blog;
