"use client";

import Image from "next/image";
import { motion } from "framer-motion";

interface BannerProps {
  image: string;
  alt?: string;
}

const BannerImage = ({ image, alt = "University Banner" }: any) => {
  return (
    <div className="w-full px-4 py-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative w-full h-[200px] sm:h-[300px] md:h-[450px] lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl border border-gray-100 group"
      >
        {/* Banner Image with subtle hover scale effect */}
        <Image
          src={image}
          alt={alt}
          fill
          className="object-cover transition-transform duration-700 ease-in-out group-hover:scale-105"
          priority
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1440px"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />

        {/* Glassmorphism Shine effect */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-tr from-white/10 to-transparent pointer-events-none" />
      </motion.div>
    </div>
  );
};

export default BannerImage;
