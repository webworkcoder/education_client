/* eslint-disable @next/next/no-img-element */
"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight, Sparkles, Stethoscope, CircleDot } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center bg-[#fcfdfe] pt-10 lg:pt-0 overflow-hidden">
      {/* --- ABSTRACT BACKGROUND ELEMENTS --- */}
      <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-blue-100/50 rounded-full blur-[120px] -z-10" />
      <div className="absolute bottom-[-10%] left-[-5%] w-[400px] h-[400px] bg-sky-100/50 rounded-full blur-[100px] -z-10" />

      <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* --- LEFT CONTENT --- */}
        <div className="relative z-10 px-4 md:px-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="flex items-center gap-3 mb-8"
          >
            <div className="h-[1px] w-12 bg-[#0b1f4d]" />
            <span className="text-xs font-bold uppercase tracking-[0.4em] text-[#1e4e96] flex items-center gap-2">
              <CircleDot size={12} className="animate-pulse" />
              Topson Education Group
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-7xl font-black text-[#0b1f4d] leading-[1.1] lg:leading-[0.95] tracking-tighter"
          >
            Design Your Career
            <br className="" />
            <span className="relative">
              Medical Future
              <svg
                className="absolute -bottom-2 left-0 w-full"
                viewBox="0 0 300 20"
                fill="none"
              >
                <path
                  d="M5 15C50 5 150 5 295 15"
                  stroke="#38bdf8"
                  strokeWidth="4"
                  strokeLinecap="round"
                />
              </svg>
            </span>{" "}
            <br />
            Beyond Borders.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="mt-8 lg:mt-10 text-base md:text-lg text-slate-500 max-w-lg leading-relaxed border-l-2 border-sky-200 pl-6"
          >
            Transforming medical ambitions into successful global careers
            through trusted MBBS guidance and personalized admission support.
            Helping students secure opportunities at leading international
            medical universities.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="mt-10 lg:mt-12 flex flex-col sm:flex-row gap-6"
          >
            <Link
              href="#apply"
              className="px-8 py-4 bg-gradient-to-r from-[#1e4e96] to-[#2d68b3] text-white rounded-full font-bold flex items-center justify-center gap-3 hover:shadow-[#1e4e96]/30 hover:shadow-xl hover:-translate-y-0.5 transition-all group shadow-2xl shadow-blue-900/20"
            >
              Consult an Expert
              <ArrowUpRight
                size={20}
                className="group-hover:rotate-45 transition-transform"
              />
            </Link>

            <div className="flex -space-x-3 items-center ml-0 sm:ml-4 justify-center">
              {[1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className="w-10 h-10 rounded-full border-2 border-white bg-slate-200 overflow-hidden"
                >
                  <img src={`https://i.pravatar.cc/150?u=${i}`} alt="student" />
                </div>
              ))}
              <p className="ml-6 text-sm font-bold text-[#0b1f4d]">
                <span className="text-sky-500">+1.2k</span> Students
              </p>
            </div>
          </motion.div>
        </div>

        {/* --- RIGHT CONTENT: IMAGE SECTION (Mobile Full Width Fix) --- */}
        <div className="relative w-full px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="relative w-full rounded-none lg:rounded-[3rem] overflow-hidden rounded-3x shadow-2xl h-65 sm:h-95 md:h-125 lg:h-162
    "
          >
            <img
              src="/doc1.jpeg"
              alt="Medical Students"
              className="w-full h-full object-cover object-center"
            />

            <div className="absolute inset-0 bg-gradient-to-tr from-[#0b1f4d]/40 to-transparent" />
          </motion.div>
        </div>
      </div>

      {/* Unique Bottom Divider */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
    </section>
  );
};

export default Hero;
