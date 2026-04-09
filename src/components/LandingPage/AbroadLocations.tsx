"use client";

import { motion } from "framer-motion";
import AbroadCard from "../common/AbroadCard";
import { abroadLocations, abroadLocations2 } from "@/data/abroadData";

const AbroadLocations = () => {
  return (
    <section id="mbbs" className="bg-gray-50 py-12 px-4 md:px-10 overflow-hidden">
      
      {/* Header */}
      <div className="grid md:grid-cols-2 gap-6 mb-10 items-center">

        {/* LEFT → BOTTOM TO TOP */}
        <motion.div
          initial={{ y: 60, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="text-sm tracking-widest font-medium uppercase border border-black px-2 py-1 inline-block">
            MBBS Study Abroad Locations
          </p>

          <h2 className="text-2xl md:text-4xl font-bold mt-4 text-gray-800">
            Explore MBBS Opportunities Worldwide With Atlas Mentor
          </h2>
        </motion.div>

        {/* RIGHT → RIGHT TO LEFT */}
        <motion.div
          initial={{ x: 80, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <p className="text-base text-gray-600 leading-relaxed">
            Embark on your MBBS journey across diverse destinations with Atlas
            Mentor. Atlas Mentor is your guide to navigating these diverse
            options and finding the ideal pathway to your medical career abroad.
          </p>

          <div className="w-12 h-1 bg-orange-500 mt-4"></div>
        </motion.div>

      </div>

      {/* Cards */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {abroadLocations.map((item, index) => (
          <AbroadCard
            key={index}
            title={item.title}
            image={item.image}
            country={item.country}
            description={item.description}
          />
        ))}
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
        {abroadLocations2.map((item, index) => (
          <AbroadCard
            key={index}
            title={item.title}
            image={item.image}
            country={item.country}
            description={item.description}
          />
        ))}
      </div>
    </section>
  );
};

export default AbroadLocations;