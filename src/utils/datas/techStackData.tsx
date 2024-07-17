import JavascriptIcon from '@/assets/icons/javascript-white.svg';
import TypescriptIcon from '@/assets/icons/typescript-white.svg';
import ReactIcon from '@/assets/icons/react-icon.svg';
import MySQLIcon from '@/assets/icons/mysql-white.svg';
import GraphQL from '@/assets/icons/graphql-white.svg';
import NextJSIcon from '@/assets/icons/nextjs.svg';
import ReduxIcon from '@/assets/icons/redux-white.svg';
import ReactQueryIcon from '@/assets/icons/react-query.svg';
import TailwindIcon from '@/assets/icons/tailwind-icon.svg';
import MswIcon from '@/assets/icons/msw-icon.svg';
import JQueryIcon from '@/assets/icons/jquery-white.svg';
import JestIcon from '@/assets/icons/jest-icon.svg';
import GitIcon from '@/assets/icons/git-icon.svg';
import GithubActionIcon from '@/assets/icons/github-action-icon.svg';
import Ec2Icon from '@/assets/icons/ec2-icon.svg';
import JenkinsIcon from '@/assets/icons/jenkins-icon.svg';
import { cn } from '../cn';
type Stack = { stacksName: string; icon: React.ReactElement };
const iconClassName = cn(
  '2xl:w-20',
  '2xl:h-[3rem]',
  '2xl:w-[3rem]',
  'xl:w-[2.5rem]',
  'xl:h-[2.5rem]',
  'lg:w-[2rem]',
  'lg:h-[2rem]',
  'md:w-[1.5rem]',
  'md:h-[1.5rem]',
  'text-white',
  'w-4',
  'h-4'
);
const languageStack: Stack[] = [
  {
    stacksName: 'Javascript',
    icon: (
      <JavascriptIcon
        width="3rem"
        height="3rem"
        aria-hidden="true"
        focusable="false"
        className={iconClassName}
      />
    )
  },
  {
    stacksName: 'Typescript',
    icon: (
      <TypescriptIcon
        width="3rem"
        height="3rem"
        aria-hidden="true"
        focusable="false"
        className={iconClassName}
      />
    )
  },
  {
    stacksName: 'MySQL',
    icon: (
      <MySQLIcon
        width="3rem"
        height="3rem"
        aria-hidden="true"
        focusable="false"
        className={iconClassName}
      />
    )
  },
  {
    stacksName: 'GraphQL',
    icon: (
      <GraphQL
        width="3rem"
        height="3rem"
        aria-hidden="true"
        focusable="false"
        className={iconClassName}
      />
    )
  }
];

const frontendStack: Stack[] = [
  {
    stacksName: 'React',
    icon: (
      <ReactIcon
        width="3rem"
        height="3rem"
        aria-hidden="true"
        focusable="false"
        className={iconClassName}
      />
    )
  },
  {
    stacksName: 'NextJS',
    icon: (
      <NextJSIcon
        width="3rem"
        height="3rem"
        aria-hidden="true"
        focusable="false"
        className={iconClassName}
      />
    )
  },
  {
    stacksName: 'React Query',
    icon: (
      <ReactQueryIcon
        width="3rem"
        height="3rem"
        aria-hidden="true"
        focusable="false"
        className={iconClassName}
      />
    )
  },
  {
    stacksName: 'Tailwind CSS',
    icon: (
      <TailwindIcon
        width="3rem"
        height="3rem"
        aria-hidden="true"
        focusable="false"
        className={iconClassName}
      />
    )
  },
  {
    stacksName: 'Redux',
    icon: (
      <ReduxIcon
        width="3rem"
        height="3rem"
        aria-hidden="true"
        focusable="false"
        className={iconClassName}
      />
    )
  },
  {
    stacksName: 'MSW',
    icon: (
      <MswIcon
        width="3rem"
        height="3rem"
        aria-hidden="true"
        focusable="false"
        className={iconClassName}
      />
    )
  },
  {
    stacksName: 'Jest',
    icon: (
      <JestIcon
        width="3rem"
        height="3rem"
        aria-hidden="true"
        focusable="false"
        className={iconClassName}
      />
    )
  },
  {
    stacksName: 'jQuery',
    icon: (
      <JQueryIcon
        width="3rem"
        height="3rem"
        aria-hidden="true"
        focusable="false"
        className={iconClassName}
      />
    )
  }
];

const devOpsStack: Stack[] = [
  {
    stacksName: 'Git',
    icon: (
      <GitIcon
        width="3rem"
        height="3rem"
        aria-hidden="true"
        focusable="false"
        className={iconClassName}
      />
    )
  },
  {
    stacksName: 'Github Action',
    icon: (
      <GithubActionIcon
        width="3rem"
        height="3rem"
        aria-hidden="true"
        focusable="false"
        className={iconClassName}
      />
    )
  },
  {
    stacksName: 'EC2',
    icon: (
      <Ec2Icon
        width="3rem"
        height="3rem"
        aria-hidden="true"
        focusable="false"
        className={iconClassName}
      />
    )
  },
  {
    stacksName: 'Jenkins',
    icon: (
      <JenkinsIcon
        width="3rem"
        height="3rem"
        aria-hidden="true"
        focusable="false"
        className={iconClassName}
      />
    )
  }
];

export { languageStack, frontendStack, devOpsStack };
