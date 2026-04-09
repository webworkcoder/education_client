"use client";

import React from "react";
import { motion } from "framer-motion";

import { videoData } from "@/data/videodata";
import VideoCards from "./VideoCards";


const Testimonials = () => {
  return (
    <section className="py-16 px-4 md:px-10 bg-gray-100">
      
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
        className="max-w-7xl mx-auto text-center"
      >
        {/* TOP TAG */}
        <p className="text-sm tracking-widest font-semibold text-[#34495e] border border-[#34495e] inline-block px-3 py-1 mb-4">
          HEAR FROM STUDENTS
        </p>

        {/* HEADING */}
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
          Testimonials & Reviews
        </h2>

        {/* DESCRIPTION */}
        <p className="text-gray-600 text-base mt-4 max-w-xl mx-auto">
          Read what our students say about their journey with Atlas Mentor. Their experiences and success stories reflect our commitment to guiding aspiring doctors toward a bright medical career abroad.
        </p>

        {/* VIDEO GRID */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mt-10">
          {videoData.map((video) => (
            <VideoCards key={video.id} data={video} />
          ))}
        </div>
      </motion.div>

    </section>
  );
};

export default Testimonials;