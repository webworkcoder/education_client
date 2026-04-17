"use client";

import { motion } from "framer-motion";
import AbroadCard from "../common/AbroadCard";
import { abroadLocations, abroadLocations2 } from "@/data/abroadData";

const AbroadLocations = () => {
  const allLocations = [...abroadLocations, ...abroadLocations2];

  return (
    <section
      id="mbbs"
      className="bg-[#f8fafc] py-20 px-4 md:px-10 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="max-w-2xl"
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1e4e96] to-[#2d68b3] font-bold tracking-[0.3em] text-xs uppercase mb-3 block">
              Global Opportunities
            </span>
            <h2 className="text-3xl md:text-5xl font-black text-[#0b2a5b] leading-tight">
              Explore MBBS Worldwide <br />
              <span className="text-slate-400 italic font-light">
                With Atlas Mentor
              </span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="md:text-right"
          >
            <p className="text-slate-500 text-base max-w-sm md:ml-auto leading-relaxed">
              Find the ideal medical pathway with personalized guidance tailored
              for future doctors.
            </p>
            <div className="w-20 h-1.5 bg-gradient-to-r from-[#1e4e96] to-[#2d68b3] mt-4 md:ml-auto rounded-full" />
          </motion.div>
        </div>

        {/* Responsive Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {allLocations.map((item, index) => (
            <AbroadCard
              key={index}
              title={item.title}
              image={item.image}
              country={item.country}
              description={item.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AbroadLocations;
