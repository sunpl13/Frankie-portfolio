import type { Metadata } from 'next';
import './globals.css';
import { calibre, pretendard, appleGothic } from '@/styles/fonts';
import Sidebar from '@/components/Sidebar';
import { GoogleAnalytics } from '@next/third-parties/google';

export const metadata: Metadata = {
  title: "Jungsoo's PortFolio",
  description: '3년차 프론트엔드 개발자 김정수 포트폴리오입니다.',
  applicationName: '김정수 포트폴리오',
  keywords: [
    '프론트엔드 포트폴리오',
    '프론트엔드',
    '프론트엔드 개발자 포트폴리오',
    '개발자 포트폴리오',
    '개발자 이력서'
  ],
  creator: 'Jungsoo Kim',
  authors: [
    { name: 'Jungsoo Kim', url: 'https://www.jungsookim-portfolio.com' }
  ],
  openGraph: {
    title: '프론트엔드 개발자 김정수입니다.',
    description: '3년차 프론트엔드 개발자 김정수 포트폴리오입니다.',
    url: 'https://www.jungsookim-portfolio.com',
    siteName: "Jungsoo's PortFolio",
    images: [
      {
        url: 'https://www.jungsookim-portfolio.com/images/opengraph.png',
        alt: '김정수 프로필 사진',
        width: 800,
        height: 600
      }
    ]
  }
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
