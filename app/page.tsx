import Link from "next/link";
import Planet from "./components/Planet";

export default function Home() {
  return (
    <div>
      <main className="flex justify-between items-center h-screen p-10">
        <Link href={`/contact`} className="rounded-full">
          <div className="bg-[#5B5DDF] ease-in-out duration-100 hover:scale-125 h-[50px] w-[50px] sm:h-[75px] sm:w-[75px] md:h-[100px] md:w-[100px] rounded-full"></div>
        </Link>
        <Link href={`/blog`} className="rounded-full">
          <div className="bg-[#9FC164] ease-in-out duration-100 hover:scale-125 h-[50px] w-[50px] sm:h-[75px] sm:w-[75px] md:h-[100px] md:w-[100px] rounded-full"></div>
        </Link>
        <div className="bg-[#E1E900] h-[100px] w-[100px] sm:h-[150px] sm:w-[150px] md:h-[200px] md:w-[200px] rounded-full"></div>
        <Link href={`/about`} className="rounded-full">
          <div className="bg-[#D9D9D9] ease-in-out duration-100 hover:scale-125 h-[50px] w-[50px] sm:h-[75px] sm:w-[75px] md:h-[100px] md:w-[100px] rounded-full"></div>
        </Link>
        <Link href={`/experience`} className="rounded-full">
          <div className="bg-[#C1440E] ease-in-out duration-100 hover:scale-125 h-[50px] w-[50px] sm:h-[75px] sm:w-[75px] md:h-[100px] md:w-[100px] rounded-full"></div>
        </Link>
      </main>
    </div>
  );
}
