import React from "react";
import PageLayout from "../components/PageLayout";
import ExperienceWidget from "../components/ExperienceWidget";

const ExperiencePage = () => {
  return (
    <PageLayout title="Experience" borderColor="#C1440E">
      <div className="grid gap-6 mt-2">
        <ExperienceWidget
          title="Global Access Litigation Services"
          link="https://galscr.com"
          date="April 2025"
          description="I worked with a court reporting agency to develop and deploy their current website. It uses AWS EC2 as its host, bare HTML CSS and JS as the frontend, and Django as the backend with Nginx/Gunicorn acting as the webserver. I am still on call for any features they wish to add to the site, like E-Commerse options or updating content."
          picture="/galscr.png"
          techList="AWS, HTML, CSS, JS, NextJS, TS"
        />
        <ExperienceWidget
          title="Reel Resemblance"
          link="https://reelresemblance.com"
          date="October 2024"
          description="I made a personal project that uses AI to query a MariaDB Database I created using TMDB and OMDB APIs to find similar movies to a given input. It uses FastAPI for the backend with models-weights I pre-trained to run comparisons on the fly, React for the frontend, and it is hosted via Docker containers on Linode. I have plans to: further expand the project by implementing user logins to save viewed movies to curate recommendations better, spruce up the UX, and implement automatic updates of the dataset."
          picture="/reelresemblance.png"
          techList="FastAPI, React, Linode, Huggingface, Docker"
        />
      </div>
    </PageLayout>
  );
};

export default ExperiencePage;
