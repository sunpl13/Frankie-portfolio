import Image from "next/image";
import GNB from "./components/GNB";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <GNB />
      <span className="font-calibre text-2xl font-medium">Welcome to my portfolio site!</span>
      <span className="font-pretendard text-2xl font-medium">Welcome to my portfolio site!</span>
      <span className="text-2xl font-medium">Welcome to my portfolio site!</span>
    </main>
  );
}
