import JavascriptIcon from '@icons/javascript-white.svg';
import TypescriptIcon from '@icons/typescript-white.svg';
import ReactIcon from '@icons/react-icon.svg';
import MySQLIcon from '@icons/mysql-white.svg';
import GraphQL from '@icons/graphql-white.svg';
import NextJSIcon from '@icons/nextjs.svg';
import ReduxIcon from '@icons/redux-white.svg';
import ReactQueryIcon from '@icons/react-query.svg';
import TailwindIcon from '@icons/tailwind-icon.svg';
import MswIcon from '@icons/msw-icon.svg';
import JQueryIcon from '@icons/jquery-white.svg';
import JestIcon from '@icons/jest-icon.svg';
import GitIcon from '@icons/git-icon.svg';
import GithubActionIcon from '@icons/github-action-icon.svg';
import Ec2Icon from '@icons/ec2-icon.svg';
import JenkinsIcon from '@icons/jenkins-icon.svg';
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
