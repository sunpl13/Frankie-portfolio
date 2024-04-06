import React from "react";
import Image from "next/image";
import HalfCircle from "@/components/profile/HalfCircle";
type Props = {};

const ImageSection = (props: Props) => {
  return (
    <div className="absolute bottom-0 flex-1 right-2/4 flex justify-center w-full translate-x-[50%]">
      <Image
        className="z-10 !relative !w-3/10"
        src="/profile_half.png"
        alt="profile_img"
        objectFit="cover"
        loading="lazy"
        fill={true}
        quality={100}
      ></Image>
      <HalfCircle />
    </div>
  );
};

export default ImageSection;
