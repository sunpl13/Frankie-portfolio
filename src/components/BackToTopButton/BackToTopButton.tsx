'use client';
import { useEffect, useState } from 'react';
import ArrowUpIcon from '@icons/arrow-up.svg';

const BackToTopButton = () => {
  const [showButton, setShowButton] = useState(false);

  const scrollToTop = () => {
    window.scroll({
      top: 0,
      behavior: 'smooth'
    });
  };

  useEffect(() => {
    const onShowButtonClick = () => {
      if (window.scrollY > 800) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };
    window.addEventListener('scroll', onShowButtonClick);
    return () => {
      window.removeEventListener('scroll', onShowButtonClick);
    };
  }, []);
  return (
    <button
      type="button"
      aria-label="맨 위로"
      onClick={scrollToTop}
      className={`bg-green-100 fixed bottom-14 right-14 outline-none border-none w-14  rounded-full flex justify-center items-center transition duration-300  ${
        showButton ? 'visible h-14' : 'invisible h-0'
      }`}>
      <ArrowUpIcon width="31" height="45" />
    </button>
  );
};

export default BackToTopButton;
