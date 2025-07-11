// import Link from "next/link";
// import React from "react";

// // experience widget needs a title w/link, date, description, picture, and list of technologies used

// const ExperienceWidget = ({
//   title,
//   link,
//   date,
//   description,
//   picture,
//   techList,
// }: {
//   title: string;
//   link: string;
//   date: string;
//   description: string;
//   picture: string;
//   techList: string;
// }) => {
//   return (
//     <div>
//       <Link href={link}>{title}</Link>
//       <p>{date}</p>
//       <p>{description}</p>

//     </div>
//   );
// };

// export default ExperienceWidget;

import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/app/components/ui/card";
import Image from "next/image";
import Link from "next/link";

const ExperienceWidget = ({
  title,
  link,
  date,
  description,
  picture,
  techList,
}: {
  title: string;
  link: string;
  date: string;
  description: string;
  picture: string;
  techList: string;
}) => {
  return (
    <Card className="w-full max-w-3xl">
      <CardHeader>
        <CardTitle>
          <Link href={link}>{title}</Link>
        </CardTitle>
        <CardDescription>{date}</CardDescription>
        <CardAction>
          <Link href={link} target="_blank">
            <Image height={300} width={300} src={picture} alt="A picture of the project" className="ease-in-out duration-100 hover:scale-110"/>
          </Link>
        </CardAction>
      </CardHeader>
      <CardContent>
        <p>{description}</p>
      </CardContent>
      <CardFooter>
        <p>{techList}</p>
      </CardFooter>
    </Card>
  );
};

export default ExperienceWidget;
