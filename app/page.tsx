import LinkPlanet from "./components/LinkPlanet";
import Image from "next/image";
import WelcomeToast from "./components/WelcomeToast";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Andrew Ras | Full Stack Developer",
  description: "Portfolio for Andrew Ras, a full stack web developer",
};

export default function Home() {
  return (
    <div>
      <main className="flex justify-between items-center h-screen p-10">
        <WelcomeToast />
        <div className="">
          <LinkPlanet link="contact" image="/neptune.svg" />
        </div>
        <div className="">
          <LinkPlanet link="blog" image="/earth.svg" />
        </div>
        <Image
          src={"/sun.svg"}
          height={200}
          width={200}
          alt="Sun"
          className="h-[100px] w-[100px] sm:h-[125px] sm:w-[125px] md:h-[150px] md:w-[150px] rounded-full"
        />
        <div className="">
          <LinkPlanet link="about" image="/mercury.svg" />
        </div>
        <div className="">
          <LinkPlanet link="experience" image="/mars.svg" />
        </div>
      </main>
    </div>
  );
}
