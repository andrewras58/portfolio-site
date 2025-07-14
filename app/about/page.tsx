import React from "react";
import PageLayout from "../components/PageLayout";
import Link from "next/link";
import Image from "next/image";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/app/components/ui/card";

const AboutPage = () => {
  return (
    <PageLayout title="About" borderColor="#D9D9D9">
      <Image
          height={300}
          width={300}
          src={"/myPic.jpg"}
          alt="A picture of me"
        />
        <p>This page is under construction, please check back later!</p>
    </PageLayout>
  );
};

export default AboutPage;
