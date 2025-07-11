import Image from "next/image"

const Planet = ({image}: {image: string}) => {
  return (
    <Image src={image} height={100} width={100} className="ease-in-out duration-100 hover:scale-125 h-[50px] w-[50px] sm:h-[75px] sm:w-[75px] md:h-[100px] md:w-[100px] rounded-full" alt="This is a planet"/>
  );
};

export default Planet;
