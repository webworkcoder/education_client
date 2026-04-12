"use client";

import { Check } from "lucide-react";
import Image from "next/image";

type Props = {
  university: {
    title: string;
    description: string;
    image: string;
    list: string[];
  };
};

const InfoCard = ({ university }: Props) => {
  const { title, description, image, list } = university;

  return (
    <div className="w-full max-w-sm  p-5 ">
      
      {/* TOP SECTION */}
      <div className="flex items-start gap-4 py-4 border-b border-t">
        <div className=" rounded-full overflow-hidden border border-gray-700">
          <Image
            src={image || "/logo.png"}
            alt={title || "undefined"}
            width={70}
            height={70}
            className="object-cover"
          />
        </div>

        <div>
          <h3 className="font-semibold text-lg">{title}</h3>
          <p className="text-sm text-gray-600 mt-1">{description}</p>
        </div>
      </div>

      {/* LIST SECTION */}
      <div className="pt-4">
        <h4 className="font-semibold text-lg mb-3">
          Study Abroad Location
        </h4>

        <ul className="space-y-2">
          {list?.map((item, index) => (
            <li
              key={index}
              className="flex items-center gap-2 text-sm text-gray-700 border-b pb-2"
            >
              <span className="text-blue-600"><Check className="w-4 h-4"/></span>
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default InfoCard;