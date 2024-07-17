import Image from 'next/image';
import { cn } from '@/utils/cn';
import { VerticalTimelineElement } from 'react-vertical-timeline-component';
type Props = {
  experience: {
    title: string;
    company_name: string;
    icon: any;
    iconBg: string;
    date: string;
    description: string;
  };
};

const ExperienceCard = ({ experience }: Props) => (
  <VerticalTimelineElement
    visible={true}
    contentStyle={{
      background: '#98f211',
      color: '#292929',
      boxShadow:
        'rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px'
    }}
    contentArrowStyle={{
      borderRight: '7px solid  #d3fc96'
    }}
    date={experience.date}
    dateClassName="text-white"
    iconStyle={{ background: experience.iconBg }}
    icon={
      <div className="flex justify-center items-center w-full h-full">
        <Image
          src={experience.icon}
          alt={experience.company_name}
          className="w-[60%] h-[60%] object-contain"
        />
      </div>
    }>
    <div>
      <h3
        className={cn(
          'font-bold',
          'tracking-[2px]',
          'text-xl',
          'max-[640px]:text-lg'
        )}>
        {experience.title}
      </h3>
      <h4
        className={cn(
          'text-lg',
          'max-[640px]:text-base',
          'text-[#707359]',
          'font-semibold',
          'tracking-[1px]'
        )}
        style={{ margin: 0 }}>
        {experience.company_name}
      </h4>
      <p
        className={cn(
          'text-[#6d7e5e]',
          '!text-sm',
          'max-[640px]:!text-xs',
          'max-[640px]:hidden'
        )}
        dangerouslySetInnerHTML={{ __html: experience.description }}
      />
    </div>
  </VerticalTimelineElement>
);

export default ExperienceCard;
