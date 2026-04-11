"use client";

import Image from "next/image";

type Props = {
  name: string;
  image: string;
  location: string;
  country?: string;
};

const UniversityCard = ({
  name,
  image,
  location,
  country = "Russia",
}: Props) => {
  return (
    <div className="bg-white  overflow-hidden shadow-sm hover:shadow-lg transition duration-300">
      {/* IMAGE */}
      <div className="relative">
        <Image
          src={image}
          alt={name}
          width={400}
          height={250}
          className="w-full h-50 object-cover"
        />

        {/* COUNTRY BADGE */}
        <span className="absolute top-3 right-3 bg-gray-700 text-white text-[11px] px-3 py-1 rounded-full">
          {country.toUpperCase()}
        </span>

        {/* LOGO OVERLAP */}
        <div className="absolute -bottom-6 left-4 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-md border">
          <Image
            src="/logo.png" 
            alt="logo"
            width={30}
            height={30}
            className="object-contain"
          />
        </div>
      </div>

      {/* CONTENT */}
      <div className="p-5 pt-8">
        <h3 className="text-base font-semibold text-gray-900 mb-3 leading-snug">
          {name}
        </h3>

        <button className="text-xs font-semibold text-black hover:underline">
          READ MORE »
        </button>
      </div>
    </div>
  );
};

export default UniversityCard;
