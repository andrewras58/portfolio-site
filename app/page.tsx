import LinkPlanet from "./components/LinkPlanet";
import Image from "next/image";
import WelcomeToast from "./components/WelcomeToast";
import type { Metadata } from "next";
import InfoButton from "./components/InfoButton";

export const metadata: Metadata = {
  title: "Andrew Ras | Full Stack Developer",
  description: "Portfolio for Andrew Ras, a full stack web developer",
};

export default function Home() {
  return (
    <div>
      <main className="flex justify-center items-center h-screen p-10">
        <WelcomeToast />
        <InfoButton />
        <div className="absolute top-1/3 left-1/3 transform -translate-x-1/3 -translate-y-1/3">
          <LinkPlanet link="contact" image="/neptune.svg" name="Contact" />
        </div>
        <div className="absolute top-1/4 right-1/4 transform -translate-x-1/4 -translate-y-1/4">
          <LinkPlanet link="blog" image="/earth.svg" name="Blog" />
        </div>
        <Image
          src={"/sun.svg"}
          height={200}
          width={200}
          alt="Sun"
          className="h-[100px] w-[100px] sm:h-[125px] sm:w-[125px] md:h-[150px] md:w-[150px] rounded-full"
        />
        <div className="absolute top-2/3 left-2/3 transform -translate-x-2/3 -translate-y-2/3">
          <LinkPlanet link="about" image="/mercury.svg" name="About" />
        </div>
        <div className="absolute bottom-2/3 right-2/3 transform -translate-x-2/3 -translate-y-2/3">
          <LinkPlanet link="experience" image="/mars.svg" name="Experience" />
        </div>
      </main>
    </div>
  );
}
