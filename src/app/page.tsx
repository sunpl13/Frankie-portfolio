import Profile from '@/components/Profile/Profile';
import Description from '@/components/Description';
import Skills from './components/Skills';
import Blog from './components/Blog';
import Summary from './components/Summary';
import Projects from './components/Projects';

export default function Home() {
  return (
    <main>
      <Profile />
      <Description />
      <Skills />
      <Projects />
      <Blog />
      <Summary />
    </main>
  );
}
