import { cn } from '@/utils/cn';
import style from './Bubble.module.css';
type Props = {
  text: string;
};

const BubbleText = ({ text }: Props) => {
  return (
    <h2
      className={cn(
        'text-center',
        'text-3xl',
        'font-thin',
        '2xl:text-5xl',
        'xl:text-4xl',
        'lg:text-3xl',
        'text-green-100'
      )}>
      {text.split('').map((child, idx) => (
        <span className={style.hoverText} key={idx}>
          {child}
        </span>
      ))}
    </h2>
  );
};

export default BubbleText;
