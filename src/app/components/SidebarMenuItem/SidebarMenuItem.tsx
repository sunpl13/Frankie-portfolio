import { cn } from '@/utils/cn';
import { motion } from 'framer-motion';

type Props = {
  sectionName: string;
  sectionId: string;
};

const variants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 }
    }
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 }
    }
  }
};

const SidebarMenuItem = ({ sectionName, sectionId }: Props) => {
  const scrollNavigate = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };
  return (
    <motion.li
      className={cn(
        'list-none',
        'flex',
        'items-center',
        'cursor-pointer',
        'mb-5'
      )}
      variants={variants}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}>
      <span onClick={() => scrollNavigate(sectionId)}>{sectionName}</span>
    </motion.li>
  );
};

export default SidebarMenuItem;
