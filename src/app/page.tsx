import Profile from '@/components/Profile/Profile';
import Description from '@/components/Description';
import Skills from './components/Skills';
import Blog from './components/Blog';

export default function Home() {
  return (
    <main>
      <Profile />
      <Description />
      <Skills />
      <Blog />
    </main>
  );
}
