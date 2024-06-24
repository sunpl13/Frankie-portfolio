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
type Stack = { stacksName: string; icon: React.ReactElement };
const languageStack: Stack[] = [
  {
    stacksName: 'Javascript',
    icon: (
      <JavascriptIcon
        width="3rem"
        height="3rem"
        aria-hidden="true"
        focusable="false"
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
        className="text-[#333]"
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
        className="text-[#333]"
      />
    )
  }
];

export { languageStack, frontendStack, devOpsStack };
