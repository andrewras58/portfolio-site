import LinkPlanet from "./components/LinkPlanet";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <main className="flex justify-between items-center h-screen p-10">
        <LinkPlanet link="contact" image="/neptune.svg"/>
        <LinkPlanet link="blog" image="/earth.svg"/>
        <Image src={"/sun.svg"} height={200} width={200} alt="Sun" className="h-[100px] w-[100px] sm:h-[150px] sm:w-[150px] md:h-[200px] md:w-[200px] rounded-full"/>
        <LinkPlanet link="about" image="/mercury.svg" />
        <LinkPlanet link="experience" image="/mars.svg" />
      </main>
    </div>
  );
}
