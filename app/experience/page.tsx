import React from "react";
import PageLayout from "../components/PageLayout";
import ExperienceWidget from "../components/ExperienceWidget";

const ExperiencePage = () => {
  return (
    <PageLayout title="Experience" borderColor="#C1440E">
      <div className="grid gap-6 mt-2">
        <ExperienceWidget
          title="Personal Portfolio"
          link="https://andrewras.dev"
          date="July 2025"
          description="This is the website you are currently looking at! This is the current version of my portfolio, which let me get a bit more creative with the presentation than my previous websites."
          picture="/portfolio.png"
          techList={[
            "/nextjs.svg",
            "/tailwind.svg",
            "/cloudflare.svg",
            "/vercel.svg"
          ]}
        />
        <ExperienceWidget
          title="Global Access Litigation Services"
          link="https://galscr.com"
          date="April 2025"
          description="I worked with a court reporting agency to develop and deploy their current website. It is a dockerized NextJS project for the frontend/backend hosted on AWS EC2. I originally made a Django-based website but this is a remake which better leverages what I have learned as a web developer since I first worked with them. I am still on call for any features they wish to add to the site, like E-Commerse options or updating content."
          picture="/galscr.png"
          techList={[
            "/nextjs.svg",
            "/docker.svg",
            "/sass.svg",
            "/aws.svg"
          ]}
        />
        <ExperienceWidget
          title="Reel Resemblance"
          link="https://reelresemblance.com"
          date="October 2024"
          description="I made a personal project that uses AI to query a MariaDB Database I created using TMDB and OMDB APIs to find similar movies to a given input. It uses FastAPI for the backend with models-weights I pre-trained to run comparisons on the fly, React for the frontend, and it is hosted via Docker containers on Linode. I have plans to: further expand the project by implementing user logins to save viewed movies to curate recommendations better, spruce up the UX, and implement automatic updates of the dataset."
          picture="/reelresemblance.png"
          techList={[
            "/fastapi.svg",
            "/react.svg",
            "/sass.svg",
            "/huggingface.svg",
            "/docker.svg",
            "/linode.svg",
            "/cloudflare.svg",
            "/mariadb.svg"
          ]}
        />
      </div>
    </PageLayout>
  );
};

export default ExperiencePage;
