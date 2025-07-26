import React from "react";
import Image from "next/image";

const InfoButton = () => {
  return (
    <div className="absolute top-3 right-3 bg-white rounded-full">
      <Image src={"/info.svg"} height={25} width={25} alt="Info Icon" className="" />
    </div>
  );
};

export default InfoButton;
