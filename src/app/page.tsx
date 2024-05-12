import Image from 'next/image';
import Profile from '@/components/Profile/Profile';
import Description from '@/components/Description';
import Skills from './components/Skills';

export default function Home() {
  return (
    <main>
      <Profile />
      <Description />
      <Skills />
    </main>
  );
}
