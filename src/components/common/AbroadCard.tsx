"use client";

import React from "react";
import { motion } from "framer-motion";

type AbroadCardProps = {
  title: string;
  image: string;
  country: string;
  description: string;
  onClick?: () => void;
};

const AbroadCard: React.FC<AbroadCardProps> = ({
  title,
  image,
  country,
  description,
  onClick,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: .9 }}
      viewport={{ once: true, amount: 0.15 }}
      className="bg-white shadow-md overflow-hidden border border-gray-200 hover:shadow-lg transition"
    >
      {/* Top Title Bar */}
      <div className="bg-linear-to-r from-blue-700 to-blue-500 text-white text-center py-6 font-bold text-2xl">
        {title}
      </div>

      {/* Image */}
      <div className="p-4">
        <img
          src={image}
          alt={country}
          className="w-full h-55 object-cover rounded-md"
        />
        <p className="text-center text-base text-gray-500 mt-2">{country}</p>

        {/* Description */}
        <p className="text-base text-gray-600 mt-3 leading-relaxed">
          {description}
        </p>

        {/* Button */}
        <button
          onClick={onClick}
          className="mt-4 bg-blue-600 text-white px-6 py-2 text-base font-bold  hover:bg-blue-700 transition"
        >
          Know More
        </button>
      </div>
    </motion.div>
  );
};

export default AbroadCard;