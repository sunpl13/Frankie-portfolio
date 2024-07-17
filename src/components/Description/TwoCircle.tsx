import { cn } from '@/utils/cn';

type Props = {
  koTitle: string;
  enTitle: string;
};

const TwoCircle = ({ koTitle, enTitle }: Props) => {
  return (
    <div
      className={cn(
        'relative',
        'border-[1.5px]',
        '2xl:w-[25rem]',
        'lg:w-[18.75rem]',
        'md:w-[15.625rem]',
        '2xl:h-[25rem]',
        'lg:h-[18.75rem]',
        'md:h-[15.625rem]',
        'h-[15.625rem]',
        'w-[15.625rem]',
        'border-[#dcdede]/[.3]',
        'rounded-full',
        'max-[639px]:my-5'
      )}>
      <div
        className={cn(
          '2xl:w-[23rem]',
          'lg:w-[16.625rem]',
          'md:w-[13.625rem]',
          '2xl:h-[23rem]',
          'lg:h-[16.625rem]',
          'md:h-[13.625rem]',
          'h-[13.625rem]',
          'w-[13.625rem]',
          'border-[3px]',
          'rounded-full',
          'border-[#dcdede]/[.3]',
          'border-dotted',
          'flex',
          'flex-col',
          'justify-center',
          'items-center',
          'absolute',
          'top-1/2',
          'left-1/2',
          'transform',
          '-translate-x-1/2',
          '-translate-y-1/2'
        )}>
        <strong
          style={{ color: 'rgba(240,240,240,0.9)' }}
          className={cn(
            'text-gray-90',
            'font-semibold',
            '2xl:text-4xl',
            'lg:text-2xl',
            'xl:text-3xl',
            'md:text-xl'
          )}>
          {enTitle}
        </strong>
        <span className={cn('text-2xl')}>{koTitle}</span>
      </div>
    </div>
  );
};

export default TwoCircle;
