import Image from 'next/image';
import Profile from '@/components/Profile/Profile';
import Description from '@/components/Description';

export default function Home() {
  return (
    <main>
      <Profile />
      <Description />
    </main>
  );
}
