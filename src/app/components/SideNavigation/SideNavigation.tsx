import React from 'react';
import { motion } from 'framer-motion';
import SidebarMenuItem from '../SidebarMenuItem';
import { cn } from '@/utils/cn';

const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 }
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 }
  }
};

const SideNavigation = () => {
  const navSection = [
    { sectionId: 'description-Front-end-section', sectionName: 'ABOUT ME' },
    { sectionId: 'skills-section', sectionName: 'SKILLS' },
    { sectionId: 'experience-section', sectionName: 'WORK EXPERIENCE' },
    { sectionId: 'project-section', sectionName: 'PROJECTS' },
    { sectionId: 'blog-section', sectionName: 'BLOG' }
  ];
  return (
    <motion.ul
      className={cn('p-6', 'absolute', 'top-24', 'w-[230px]')}
      variants={variants}>
      {navSection.map(({ sectionId, sectionName }) => (
        <SidebarMenuItem
          sectionId={sectionId}
          sectionName={sectionName}
          key={sectionId}
        />
      ))}
    </motion.ul>
  );
};

export default SideNavigation;
