import { cn } from '@/utils/cn';
import { motion } from 'framer-motion';
import style from './SidebarMenuItem.module.css';
type Props = {
  sectionName: string;
  sectionId: string;
  setToggle: () => void;
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

const SidebarMenuItem = ({ sectionName, sectionId, setToggle }: Props) => {
  const scrollNavigate = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setToggle();
  };
  return (
    <motion.li
      className={cn(
        'list-none',
        'flex',
        'items-center',
        'cursor-pointer',
        'mb-5',
        style['menu-item'],
        'text-green-100',
        'text-5xl'
      )}
      variants={variants}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}>
      <span onClick={() => scrollNavigate(sectionId)}>{sectionName}</span>
    </motion.li>
  );
};

export default SidebarMenuItem;
