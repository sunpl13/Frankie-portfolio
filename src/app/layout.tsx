import type { Metadata } from 'next';
import './globals.css';
import { calibre, pretendard, appleGothic } from '@/styles/fonts';
import Sidebar from '@/components/Sidebar';
import { GoogleAnalytics } from '@next/third-parties/google';

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
      <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GTM_ID as string} />
    </html>
  );
}
