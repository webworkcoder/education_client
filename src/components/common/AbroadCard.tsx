/* eslint-disable @next/next/no-img-element */
"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, MapPin } from "lucide-react"; // Icons for premium feel

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
      transition={{ duration: 0.6 }}
      viewport={{ once: true, amount: 0.15 }}
      className="group relative bg-white  overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 border border-slate-100 flex flex-col h-full"
    >
      <div className="relative h-64 overflow-hidden">
        <img
          src={image}
          alt={country}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0b2a5b]/90 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />

        {/* Country Badge */}
        <div className="absolute bottom-4 left-4 flex items-center gap-1.5 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full shadow-sm">
          <MapPin className="w-3.5 h-3.5 text-[#1e4e96]" />
          <span className="text-[10px] font-bold text-[#0b2a5b] uppercase tracking-wider">
            {country}
          </span>
        </div>
      </div>

      {/* Content Section */}
      <div className="p-6 flex flex-col flex-grow bg-white relative">
        {/* Decorative Line */}
        <div className="w-12 h-1 bg-gradient-to-r from-[#1e4e96] to-[#2d68b3] mb-4 group-hover:w-20 transition-all duration-500" />

        <h3 className="text-xl font-extrabold text-[#0b2a5b] mb-3 group-hover:text-[#1e4e96] transition-colors">
          {title}
        </h3>

        <p className="text-sm text-slate-500 leading-relaxed mb-6 line-clamp-3">
          {description}
        </p>

        {/* Action Button - Absolute style on hover or standard at bottom */}
        <div className="mt-auto">
          <button
            onClick={onClick}
            className="flex items-center gap-2 text-sm font-bold text-[#0b2a5b] group-hover:text-[#1e4e96] transition-all uppercase tracking-widest cursor-pointer"
          >
            Explore Program
            <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
          </button>
        </div>
      </div>

      {/* Top Border Glow Effect */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#1e4e96] to-[#2d68b3] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
    </motion.div>
  );
};

export default AbroadCard;
