"use client";

import Image from "next/image";
import React from "react";

type Props = {
  image: string;
  title: string;
  description: string;
  buttonText?: string;
};

const GuidanceCard = ({
  image,
  title,
  description,
  buttonText = "Request Guidance",
}: Props) => {
  return (
    <div className="w-full bg-white rounded-xl shadow-md border overflow-hidden">
      {/* IMAGE */}
      <div className="w-full h-48 md:h-52 relative">
        <Image src={image} alt={title} fill className="object-cover" />
      </div>

      {/* CONTENT */}
      <div className="p-4 md:p-5">
        <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-2">
          {title}
        </h3>

        <p className="text-sm text-gray-600 mb-4 leading-relaxed">
          {description}
        </p>

        {/* FORM */}
        <div className="space-y-3">
          {/* NAME + EMAIL */}
          <div className="flex flex-col sm:flex-row gap-3">
            <input
              type="text"
              placeholder="Name"
              className="w-full border px-3 py-2 rounded-md text-sm outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full border px-3 py-2 rounded-md text-sm outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* MOBILE */}
          <input
            type="text"
            placeholder="Mobile Number"
            className="w-full border px-3 py-2 rounded-md text-sm outline-none focus:ring-2 focus:ring-blue-500"
          />

          {/* BUTTON */}
          <button className="w-full bg-[#1e4e96] text-white py-2.5 rounded-full text-sm font-medium hover:bg-[#4a5d91] transition">
            {buttonText}
          </button>
        </div>
      </div>
    </div>
  );
};

export default GuidanceCard;
