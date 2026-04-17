/* eslint-disable @next/next/no-img-element */
"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { testimonialsFromStudents } from "@/data/studentstestonomial";
import Link from "next/link";
import { Quote, Sparkles, ArrowRight } from "lucide-react";

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
    <section className="w-full bg-[#f8fafc] py-20  px-4 md:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto relative">
        {/* LEFT SECTION - THE TESTIMONIAL VIEWPORT */}
        <div className="lg:max-w-5xl relative rounded-[2rem] overflow-hidden shadow-2xl min-h-[500px] flex items-center">
          {/* BACKGROUND IMAGE WITH PREMIUM OVERLAY */}
          <img
            src="/doctors.jpg"
            alt="student success"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0b2a5b] via-[#0b2a5b]/80 to-transparent" />

          {/* CONTENT AREA */}
          <div className="relative z-10 px-8 md:px-20 py-16 text-white max-w-2xl">
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              className="mb-8 w-14 h-14 bg-white/10 backdrop-blur-md rounded-2xl flex items-center justify-center border border-white/20"
            >
              <Quote className="text-sky-300 w-8 h-8 fill-sky-300" />
            </motion.div>

            <div className="min-h-[160px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={index}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -20, opacity: 0 }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                >
                  <p className="text-xl md:text-2xl font-medium leading-relaxed italic text-slate-100">
                    &rdquo;{current?.text}&rdquo;
                  </p>

                  <div className="mt-8 flex items-center gap-4">
                    <div className="h-[2px] w-12 bg-sky-400" />
                    <div>
                      <h4 className="font-black text-lg tracking-tight">
                        {current?.name}
                      </h4>
                      <p className="text-sky-300 text-xs font-bold uppercase tracking-[0.2em]">
                        {current?.city}
                      </p>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* PROGRESS INDICATORS */}
          <div className="absolute bottom-10 left-20 flex gap-2">
            {testimonialsFromStudents.map((_, i) => (
              <div
                key={i}
                className={`h-1 transition-all duration-500 rounded-full ${i === index ? "w-8 bg-sky-400" : "w-2 bg-white/30"}`}
              />
            ))}
          </div>
        </div>

        {/* RIGHT FLOATING CARD - THE BRAND STATEMENT */}
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="bg-white rounded-2xl shadow-[0_50px_100px_-20px_rgba(11,42,91,0.15)] p-8 lg:p-12 w-full lg:max-w-lg lg:absolute lg:right-0 lg:top-1/2 lg:-translate-y-1/2 mt-8 lg:mt-0 border border-slate-100 z-20"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-50 rounded-full mb-6">
            <Sparkles size={14} className="text-[#1e4e96]" />
            <span className="text-[10px] font-bold text-[#1e4e96] uppercase tracking-widest">
              Student Stories
            </span>
          </div>

          <h2 className="text-3xl md:text-4xl font-black text-[#0b2a5b] mb-6 leading-[1.2]">
            Voices of Our{" "}
            <span className="text-[#1e4e96]">Future Doctors.</span>
          </h2>

          <p className="text-slate-500 text-base mb-8 leading-relaxed">
            Discover how Topson Education has empowered students to bridge the
            gap between their dreams and global medical excellence.
          </p>

          <Link
            href="#whyus"
            className="group inline-flex items-center justify-center gap-3 bg-gradient-to-r from-[#1e4e96] to-[#2d68b3] hover:shadow-[#1e4e96]/30 hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0 text-white px-8 py-4 rounded-full font-bold hover:bg-[#1e4e96] transition-all shadow-lg shadow-blue-900/20 w-full md:w-fit justify-center"
          >
            Explore Success Stories
            <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default SomeFromStudents;
