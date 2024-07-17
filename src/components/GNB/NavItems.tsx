'use client';
import UserIcon from '@icons/user-icon.svg';
import LayerIcon from '@icons/layer-icon.svg';
import Link from 'next/link';
import { cn } from '@/utils/cn';
import useMediaQuery from '@/hooks/useMediaQuery';

const NavItems = () => {
  const isMobile = useMediaQuery('(max-width: 640px)');

  return (
    <>
      <li
        className={cn(
          isMobile
            ? 'rounded-full flex justify-center items-center w-10 h-10 bg-[#1b1b1b]'
            : 'sm:px-24'
        )}>
        <Link href="/">
          {isMobile ? (
            <UserIcon
              width="1.5rem"
              height="2.5rem"
              focusable="false"
              aria-hidden="true"
              className="text-gray-60"
            />
          ) : (
            'Profile'
          )}
        </Link>
      </li>
      <li
        className={cn(
          isMobile
            ? 'rounded-full flex justify-center items-center w-10 h-10 bg-[#1b1b1b]'
            : 'sm:px-24'
        )}>
        <Link href="/projects">
          {isMobile ? (
            <LayerIcon
              width="1.5rem"
              height="2.5rem"
              focusable="false"
              aria-hidden="true"
              className="text-gray-60"
            />
          ) : (
            'Project'
          )}
        </Link>
      </li>
    </>
  );
};

export default NavItems;
