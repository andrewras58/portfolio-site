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
  techList: string[];
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
        <ul className="flex justify-center items-center">
          {techList.map((value, index) => (
            <li key={index}><Image src={value} className="h-6 w-auto m-0.5"  alt="A technology I used" height={20} width={50}/></li>
          ))}
        </ul>
      </CardFooter>
    </Card>
  );
};

export default ExperienceWidget;
