"use client";

import { motion } from "framer-motion";

const data = [
  {
    title: "Our Vision",
    desc: "To be the leading mentor for students seeking admission to top medical universities worldwide.",
    dark: false,
  },
  {
    title: "Our Mission",
    desc: "To guide aspiring medical professionals in achieving their dreams of studying MBBS abroad.",
    dark: false,
  },
  {
    title: "Our Values",
    desc: "Commitment to excellence, personalized support, and fostering confidence for a brighter future.",
    dark: true,
  },
];

const OurMission = () => {
  return (
    <section className="py-16 bg-[#f5f7fb] px-4 md:px-10 overflow-hidden">
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-0 border">

        {data.map((item, index) => (
          <div
            key={index}
            className={`relative border px-6 pb-8 pt-0 ${
              item.dark
                ? "bg-linear-to-r from-[#4b66a1] to-[#1e3a8a] text-white"
                : "bg-white text-gray-700"
            }`}
          >
            
            {/* TITLE TOUCHING TOP */}
            <motion.div
              initial={{ x: 100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.7, delay: index * 0.2 }}
              viewport={{ once: true }}
              className={`inline-block px-4 py-2 pt-3 mb-4 font-bold text-2xl ${
                item.dark
                  ? "bg-white text-blue-900"
                  : "bg-[#5b6f9e] text-white"
              }`}
            >
              {item.title}
            </motion.div>

            <p className="leading-relaxed text-sm md:text-base">
              {item.desc}
            </p>

            <div className="w-10 h-1 bg-orange-500 mt-6"></div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OurMission;