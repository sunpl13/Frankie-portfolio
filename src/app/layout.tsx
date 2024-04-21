import type { Metadata } from "next";
import "./globals.css";
import { calibre, pretendard } from "@/styles/fonts";
import GNB from "@/components/GNB";

export const metadata: Metadata = {
  title: "Jungsoo's PortFolio",
  description: "Welcome Frankie's Folio!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className={`${calibre.variable} ${pretendard.variable}`}>
        <GNB />
        {children}
      </body>
    </html>
  );
}
