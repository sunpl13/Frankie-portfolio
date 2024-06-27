'use client';
import React, { useEffect, useState } from 'react';
import { descriptionData } from '../../../../constants/projects';
import DescriptionContainer from './DescriptionContainer';

const Description = () => {
  const [currentInputs, setCurrentInputs] = useState({
    currentWindowHeight: window.innerHeight,
    currentPage: 0
  });

  //윈도우 리사이즈 시, 윈도우 사이즈를 조정한다
  const setPageSize = () => {
    setCurrentInputs((prev) => ({
      ...prev,
      currentWindowHeight: window.innerHeight
    }));
  };

  //현재 페이지가 몇페이지인지 구하는 함수
  const setPage = () => {
    for (var i = 1; i < 3; i++) {
      if (window.scrollY < currentInputs.currentWindowHeight * i) {
        setCurrentInputs({ ...currentInputs, currentPage: i });
        return;
      }
    }
  };

  // Scroll Event와 Resize시 무한 반복을 피하기 위함
  useEffect(() => {
    window.addEventListener('scroll', setPage);
    window.addEventListener('resize', setPageSize);
    return () => {
      window.removeEventListener('scroll', setPage);
      window.removeEventListener('resize', setPageSize);
    };
  });

  window.addEventListener('wheel', (e) => {
    e.preventDefault();
    // 마우스 휠을 내릴때
    if (e.deltaY > 0) {
      let p = 1;
      while (p < 3) {
        if (currentInputs.currentPage === p) {
          window.scrollTo({
            top: currentInputs.currentWindowHeight * p,
            behavior: 'smooth'
          });
        }
        p++;
      }
    }
    // 마우스 휠을 올릴때
    if (e.deltaY < 0) {
      let p = 1;
      while (p < 3) {
        if (currentInputs.currentPage === p) {
          window.scrollTo({
            top: currentInputs.currentWindowHeight * (p - 1),
            behavior: 'smooth'
          });
        }
        p++;
      }
    }
  });
  return (
    <>
      {descriptionData.map(({ title, subDescription, content }) => (
        <DescriptionContainer
          title={title}
          subDescription={subDescription}
          content={content}
          key={title.ko}
        />
      ))}
    </>
  );
};

export default Description;
