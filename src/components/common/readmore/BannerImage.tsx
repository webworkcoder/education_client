"use client";

import Image from "next/image";

const BannerImage = ({ image, alt = "banner" }: any) => {
  return (
    <div className="w-full ">
      <div className="relative w-full h-75 md:h-[29rem] rounded-xl overflow-hidden shadow-md">
        <Image src={image} alt={alt} fill className="object-cover" priority />
      </div>
    </div>
  );
};

export default BannerImage;
