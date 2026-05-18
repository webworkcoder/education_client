"use client";

import Image from "next/image";
import { motion } from "framer-motion";

interface BannerProps {
  image: string | string[];
  alt?: string;
}

const BannerImage = ({ image, alt = "University Banner" }: BannerProps) => {
  const images = Array.isArray(image) ? image : [image, image, image, image, image];
  return (
    <div className="w-full px-4 py-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative w-full"
      >
        {/* Banner Image with subtle hover scale effect */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 w-full h-full p-4">
          {images.map((img, index) => (
            <div
              key={index}
              className="relative w-full h-[180px] sm:h-[220px] md:h-[300px] rounded-xl overflow-hidden"
            >
              <Image
                src={img}
                alt={`${alt}-${index}`}
                fill
                className="object-cover transition-transform duration-700 ease-in-out group-hover:scale-105"
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
          ))}
        </div>
       

        {/* Glassmorphism Shine effect */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-tr from-white/10 to-transparent pointer-events-none" />
      </motion.div>
    </div>
  );
};

export default BannerImage;
