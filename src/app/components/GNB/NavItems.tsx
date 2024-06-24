'use client';
import useWindowDimensions from '@/hooks/useWindowDimensions';
import UserIcon from '@/assets/icons/user-icon.svg';
import LayerIcon from '@/assets/icons/layer-icon.svg';
import Link from 'next/link';
const NavItems = () => {
  const { width } = useWindowDimensions();
  const isMobile = (width: number) => {
    if (width < 640) return true;
    return false;
  };
  return (
    <>
      <li
        className={`${
          isMobile(width)
            ? 'rounded-full flex justify-center items-center w-10 h-10 bg-[#1b1b1b]'
            : ''
        } sm:px-24`}>
        <Link href="/">
          {isMobile(width) ? (
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
        className={`${
          isMobile(width)
            ? 'rounded-full flex justify-center items-center w-10 h-10 bg-[#1b1b1b]'
            : ''
        } sm:px-24`}>
        <Link href="/projects">
          {isMobile(width) ? (
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
