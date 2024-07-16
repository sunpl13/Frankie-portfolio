import type { Metadata } from 'next';
import './globals.css';
import { calibre, pretendard, appleGothic } from '@/styles/fonts';
import GNB from '@/components/GNB';
import BackToTopButton from './components/BackToTopButton/BackToTopButton';
import Sidebar from './components/Sidebar';

export const metadata: Metadata = {
  title: "Jungsoo's PortFolio",
  description: "Welcome Frankie's Folio!"
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body
        className={`${calibre.variable} ${pretendard.variable} ${appleGothic.variable}`}>
        <Sidebar />
        {children}
      </body>
    </html>
  );
}
