import Profile from '@/components/Profile';
import Description from '@/components/Description';
import Skills from '@/components/Skills';
import Blog from '@/components/Blog';
import Summary from '@/components/Summary';
import Projects from '@/components/Projects';
import Experience from '@/components/Experience';

export default function Home() {
  return (
    <main>
      <Profile />
      <Description />
      <Skills />
      <Experience />
      <Projects />
      <Blog />
      <Summary />
    </main>
  );
}
