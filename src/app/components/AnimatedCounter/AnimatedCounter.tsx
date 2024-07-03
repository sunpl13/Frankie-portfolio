'use client';
import {
  KeyframeOptions,
  animate,
  useInView,
  useIsomorphicLayoutEffect
} from 'framer-motion';
import { useRef } from 'react';

type Props = {
  from: number;
  to: number;
  animationOptions?: KeyframeOptions;
};

const AnimatedCounter = ({ from, to, animationOptions }: Props) => {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });

  useIsomorphicLayoutEffect(() => {
    const element = ref.current;

    if (!element) return;
    if (!inView) return;

    if (window.matchMedia('(prefers-reduced-motion)').matches) {
      element.textContent = String(to);
      return;
    }

    element.textContent = String(from);

    const controls = animate(from, to, {
      duration: 1.5,
      ease: 'easeOut',
      ...animationOptions,
      onUpdate(value) {
        element.textContent = String(value.toFixed(0));
      }
    });

    return () => {
      controls.stop();
    };
  }, [ref, from, to, inView]);
  return <span ref={ref} />;
};

export default AnimatedCounter;
