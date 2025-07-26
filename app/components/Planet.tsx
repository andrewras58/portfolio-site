import Image from "next/image"

const Planet = ({image, name}: {image: string, name: string}) => {
  return (
    <div className="ease-in-out duration-100 hover:scale-125 flex flex-col items-center justify-center">
      <p className="text-white text-center md:text-2xl">{name}</p>
      <Image src={image} height={100} width={100} className="h-[50px] w-[50px] sm:h-[75px] sm:w-[75px] md:h-[100px] md:w-[100px] rounded-full" alt="This is a planet"/>
    </div>
  );
};

export default Planet;
