'use client';
import { useRef } from 'react';
import { motion, useCycle } from 'framer-motion';
import { useDimensions } from '@/hooks/useDimensions';
import SideMenuToggle from '../SideMenuToggle';
import SideNavigation from '../SideNavigation';
import { cn } from '@/utils/cn';

const sidebarVariants = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
    transition: {
      type: 'spring',
      stiffness: 20,
      restDelta: 2
    }
  }),
  closed: {
    clipPath: 'circle(30px at 40px 40px)',
    transition: {
      delay: 0.5,
      type: 'spring',
      stiffness: 400,
      damping: 40
    }
  }
};

const Sidebar = () => {
  const [isOpen, toggleOpen] = useCycle(false, true);
  const containerRef = useRef(null);
  const { height } = useDimensions(containerRef);

  return (
    <motion.nav
      initial={false}
      className={cn(
        'fixed',
        'top-0',
        'left-0',
        'bottom-0',
        'w-[300px]',
        'z-10'
      )}
      animate={isOpen ? 'open' : 'closed'}
      custom={height}
      ref={containerRef}>
      <motion.div
        className={cn(
          'absolute',
          'top-0',
          'left-0',
          'bottom-0',
          'w-[300px]',
          'bg-green-100'
        )}
        variants={sidebarVariants}
      />
      <SideNavigation setToggle={() => toggleOpen()} />
      <SideMenuToggle setToggle={() => toggleOpen()} />
    </motion.nav>
  );
};

export default Sidebar;
