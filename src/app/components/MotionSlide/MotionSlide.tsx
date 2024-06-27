'use client';
import { motion, useInView, useAnimation } from 'framer-motion';
import { useRef, useEffect } from 'react';

type Props = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
};

const MotionSlide = ({ children, delay, className }: Props) => {
  const ref = useRef(null);
  const isInview = useInView(ref, { once: true });
  const controls = useAnimation();

  useEffect(() => {
    if (isInview) {
      controls.start('visible');
    }
  }, [isInview, controls]);

  return (
    <motion.div
      ref={ref}
      variants={{
        hidden: { opacity: 0, translateX: 90 },
        visible: { opacity: 1, translateX: 0 }
      }}
      transition={{
        type: 'spring',
        duration: 0.2,
        damping: 8,
        delay: delay,
        stiffness: 100
      }}
      initial="hidden"
      animate={controls}
      className={className}>
      {children}
    </motion.div>
  );
};

export default MotionSlide;
