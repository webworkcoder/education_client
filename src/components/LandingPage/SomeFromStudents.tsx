"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { testimonialsFromStudents } from "@/data/studentstestonomial";
import Link from "next/link";

const SomeFromStudents = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (!testimonialsFromStudents?.length) return;

    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonialsFromStudents.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const current = testimonialsFromStudents[index];

  return (
    <section className="w-full bg-gray-100 py-10 px-4 md:px-10 overflow-x-hidden">
      <div className="max-w-7xl mx-auto relative">
        {/* LEFT SECTION */}
        <div className="lg:max-w-5xl relative bg-[#486ea3]/40 min-h-100 overflow-hidden">
          {/* BG IMAGE */}
          <img
            src="/doctors.jpg"
            alt="student"
            className="absolute inset-0 w-full h-full object-cover opacity-30"
          />

          {/* OVERLAY */}
          <div className="absolute inset-0 bg-blue-800/50"></div>

          {/* CONTENT */}
          <div className="relative z-10 h-full flex flex-col justify-center px-6 md:px-12 text-white max-w-xl mt-20">
            <div className="flex items-start gap-4">
              <div className="text-6xl font-bold opacity-80">“</div>

              {/* TEXT SLIDER */}
              <div className="relative min-h-20 overflow-hidden w-full">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={index}
                    className="w-full"
                    initial={{ x: 80, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    exit={{ x: -80, opacity: 0 }}
                    transition={{ duration: 0.6, ease: "easeInOut" }}
                  >
                    <p className="text-sm md:text-xl leading-relaxed">
                      {current?.text}
                    </p>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>

            {/* NAME */}
            <div className="mt-4">
              <h4 className="font-semibold text-lg">{current?.name}</h4>
              <p className="text-orange-400 text-base">{current?.city}</p>
            </div>
          </div>
        </div>

        {/* RIGHT CARD */}
        <motion.div
          initial={{ x: 80, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="bg-white shadow-xl p-6 lg:p-10 w-full lg:max-w-lg lg:absolute lg:right-0 lg:top-1/2 lg:-translate-y-1/2 mt-6 lg:mt-0 border-b-4 border-blue-950"
        >
          <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-4">
            Hear from Atlas Mentor Satisfied Students
          </h2>

          <p className="text-gray-600 text-base mb-6 leading-relaxed">
            Discover what our students have to say about their experiences with
            Atlas Mentor and how we’ve helped shape their futures.
          </p>

          <Link
            href="#whyus"
            className="bg-[#667cb0] text-white px-6 py-2 font-medium border border-transparent hover:bg-white hover:border-black hover:text-[#667cb0] transition cursor-pointer"
          >
            Discover More
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default SomeFromStudents;
