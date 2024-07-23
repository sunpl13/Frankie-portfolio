'use client';
import { motion, useInView, useAnimation } from 'framer-motion';
import { useRef, useEffect, ElementType } from 'react';

type Props = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  translateDirection?: 'x' | 'y';
  as?: ElementType;
};

const MotionSlide = ({
  children,
  delay,
  className,
  translateDirection = 'x',
  as: Component = 'div'
}: Props) => {
  const ref = useRef(null);
  const isInview = useInView(ref, { once: true });
  const controls = useAnimation();
  const directionHidden =
    translateDirection === 'x' ? { translateX: 90 } : { translateY: 90 };
  const directionVisible =
    translateDirection === 'x' ? { translateX: 0 } : { translateY: 0 };
  useEffect(() => {
    if (isInview) {
      controls.start('visible');
    }
  }, [isInview, controls]);

  const MotionComponent = motion[
    Component as keyof typeof motion
  ] as ElementType;

  return (
    <MotionComponent
      ref={ref}
      variants={{
        hidden: { opacity: 0, ...directionHidden },
        visible: { opacity: 1, ...directionVisible }
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
    </MotionComponent>
  );
};

export default MotionSlide;
