import React from "react";
import PageLayout from "../components/PageLayout";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import HoverComponent from "../components/HoverComponent";

export const metadata: Metadata = {
  description: "About page for Andrew Ras, full stack developer",
};

const AboutPage = () => {
  return (
    <PageLayout title="About" borderColor="#D9D9D9">
      <div className="flex items-center justify-center m-4">
        <div className="bg-white p-4 rounded-lg shadow-lg h-fit">
          <div className="flex items-center md:flex-row flex-col max-w-4xl">
            <Image
              height={300}
              width={300}
              src={"/myPic.jpg"}
              alt="A picture of me"
              className="rounded-xl shadow-xl md:h-[300px] md:w-[300px] h-[200px] w-[200px]"
            />
            <div>
              <h2 className="text-center text-3xl font-semibold mb-2">
                Hi, I'm Andrew Ras
              </h2>
              <p className="text-xl m-4">
                I graduated from UC Irvine with a Bachelor's in Computer science
                in 2023, and I have continued my education in software
                development. I am open to job opportunities so if you like what
                you see here or in my resume feel free to get in touch!
              </p>
            </div>
          </div>
          <div className="flex items-center gap-4 flex-col justify-around m-4">
            <div>
              <h3 className="text-center">My Skills</h3>
              <ul className="flex items-center gap-2 flex-wrap justify-center">
                <li>
                  <HoverComponent description="Next.js">
                    <Image
                      height={50}
                      width={50}
                      src={"/nextjs-original.svg"}
                      alt="nextjs logo"
                      className="hover:scale-120 transition-transform duration-100"
                    />
                  </HoverComponent>
                </li>
                <li>
                  <HoverComponent description="Docker">
                    <Image
                      height={50}
                      width={50}
                      src={"/docker-original.svg"}
                      alt="docker logo"
                      className="hover:scale-120 transition-transform duration-100"
                    />
                  </HoverComponent>
                </li>
                <li>
                  <HoverComponent description="FastAPI">
                    <Image
                      height={50}
                      width={50}
                      src={"/fastapi-original.svg"}
                      alt="fastapi logo"
                      className="hover:scale-120 transition-transform duration-100"
                    />
                  </HoverComponent>
                </li>
                <li>
                  <HoverComponent description="Git">
                    <Image
                      height={50}
                      width={50}
                      src={"/git-original.svg"}
                      alt="git logo"
                      className="hover:scale-120 transition-transform duration-100"
                    />
                  </HoverComponent>
                </li>
                <li>
                  <HoverComponent description="HTML">
                    <Image
                      height={50}
                      width={50}
                      src={"/html5-original.svg"}
                      alt="html logo"
                      className="hover:scale-120 transition-transform duration-100"
                    />
                  </HoverComponent>
                </li>
                <li>
                  <HoverComponent description="Javascript">
                    <Image
                      height={50}
                      width={50}
                      src={"/javascript-original.svg"}
                      alt="javascript logo"
                      className="hover:scale-120 transition-transform duration-100"
                    />
                  </HoverComponent>
                </li>
                <li>
                  <HoverComponent description="Linux">
                    <Image
                      height={50}
                      width={50}
                      src={"/linux-original.svg"}
                      alt="linux logo"
                      className="hover:scale-120 transition-transform duration-100"
                    />
                  </HoverComponent>
                </li>
                <li>
                  <HoverComponent description="Python">
                    <Image
                      height={50}
                      width={50}
                      src={"/python-original.svg"}
                      alt="python logo"
                      className="hover:scale-120 transition-transform duration-100"
                    />
                  </HoverComponent>
                </li>
                <li>
                  <HoverComponent description="React">
                    <Image
                      height={50}
                      width={50}
                      src={"/react-original.svg"}
                      alt="react logo"
                      className="hover:scale-120 transition-transform duration-100"
                    />
                  </HoverComponent>
                </li>
                <li>
                  <HoverComponent description="TailwindCSS">
                    <Image
                      height={50}
                      width={50}
                      src={"/tailwindcss-original.svg"}
                      alt="tailwindcss logo"
                      className="hover:scale-120 transition-transform duration-100"
                    />
                  </HoverComponent>
                </li>
                <li>
                  <HoverComponent description="Typescript">
                    <Image
                      height={50}
                      width={50}
                      src={"/typescript-original.svg"}
                      alt="typescript logo"
                      className="hover:scale-120 transition-transform duration-100"
                    />
                  </HoverComponent>
                </li>
                <li>
                  <HoverComponent description="CSS">
                    <Image
                      height={50}
                      width={50}
                      src={"/css3-original.svg"}
                      alt="css logo"
                      className="hover:scale-120 transition-transform duration-100"
                    />
                  </HoverComponent>
                </li>
                <li>
                  <HoverComponent description="MySQL">
                    <Image
                      height={50}
                      width={50}
                      src={"/mysql-original.svg"}
                      alt="MySQL logo"
                      className="hover:scale-120 transition-transform duration-100"
                    />
                  </HoverComponent>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-center">My Social Links:</h3>
              <ul className="flex items-center gap-2 flex-wrap justify-center">
                <li>
                  <Link href={"https://www.instagram.com/andrewras_01/"}>
                    <Image
                      height={50}
                      width={50}
                      src={"/instagram.svg"}
                      alt="instagram logo"
                      className="hover:scale-120 transition-transform duration-100"
                    />
                  </Link>
                </li>
                <li>
                  <Link
                    href={"https://www.linkedin.com/in/andrew-ras-394625284/"}
                  >
                    <Image
                      height={50}
                      width={50}
                      src={"/linkedin.svg"}
                      alt="linkedin logo"
                      className="hover:scale-120 transition-transform duration-100"
                    />
                  </Link>
                </li>
                <li>
                  <Link href={"https://github.com/andrewras58"}>
                    <Image
                      height={50}
                      width={50}
                      src={"/github.svg"}
                      alt="github logo"
                      className="hover:scale-120 transition-transform duration-100"
                    />
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="flex flex-col items-center m-4">
            <span className="mb-4">My Resume (click to view!)</span>
            <Link href={"https://drive.google.com/file/d/1qVQc7UN8rJUooKh_pzv69DW5LoLxHTfk/view?usp=sharing"} target="_blank" className="border-2 border-black hover:scale-102 transition-transform duration-100">
              <Image
                height={850}
                width={850}
                src={"/resume.png"}
                alt="Resume - Click to view"
              />
            </Link>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default AboutPage;
