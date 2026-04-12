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
    <div className="w-full max-w-md bg-white rounded-xl shadow-md overflow-hidden border">
      
      {/* IMAGE */}
      <div className="w-full h-52 relative">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
        />
      </div>

      {/* CONTENT */}
      <div className="p-5">
        <h3 className="text-xl font-semibold text-gray-900 mb-2">
          {title}
        </h3>

        <p className="text-sm text-gray-600 mb-4">
          {description}
        </p>

        {/* FORM */}
        <div className="space-y-3">
          
          {/* NAME + EMAIL */}
          <div className="flex gap-3">
            <input
              type="text"
              placeholder="Name"
              className="w-1/2 border p-2 rounded-md text-sm outline-none focus:ring-2 focus:ring-blue-400"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-1/2 border p-2 rounded-md text-sm outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          {/* MOBILE */}
          <input
            type="text"
            placeholder="Mobile Number"
            className="w-full border p-2 rounded-md text-sm outline-none focus:ring-2 focus:ring-blue-400"
          />

          {/* BUTTON */}
          <button className="w-full bg-blue-700 text-white py-2 rounded-md text-sm font-medium hover:bg-blue-800 transition">
            {buttonText}
          </button>
        </div>
      </div>
    </div>
  );
};

export default GuidanceCard;