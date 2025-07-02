import Link from "next/link";
import StarryBackground from "./components/StarryBackground";

export default function Home() {
  return (
    <div>
      <StarryBackground />
      <main className="flex justify-center items-center h-screen">
        <Link href={`/contact`} className="rounded-full"><div className="bg-[#5B5DDF] h-[100px] w-[100px] rounded-full"></div></Link>
        <Link href={`/blog`} className="rounded-full"><div className="bg-[#9FC164] h-[100px] w-[100px] rounded-full"></div></Link>
        <div className="bg-[#E1E900] h-[200px] w-[200px] rounded-full"></div>
        <Link href={`/about`} className="rounded-full"><div className="bg-[#D9D9D9] h-[100px] w-[100px] rounded-full"></div></Link>
        <Link href={`/experience`} className="rounded-full"><div className="bg-[#C1440E] h-[100px] w-[100px] rounded-full"></div></Link>
      </main>
    </div>
  );
}
