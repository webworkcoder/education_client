/* eslint-disable @next/next/no-img-element */
"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ChevronRight, Home, Globe2 } from "lucide-react";

type Props = {
  country?: {
    name: string;
    slug: string;
    flag: string;
  };
  title?: string;
};

const HeroBaneer = ({ country, title }: Props) => {
  const pageTitle =
    title || (country ? `MBBS In ${country.name}` : "Medical Programs");

  return (
    <section className="relative h-[300px] md:h-[400px] flex items-center overflow-hidden bg-[#0b1f4d] text-white">
      {/* --- PREMIUM BACKGROUND LAYER --- */}
      <div className="absolute inset-0 z-0">
        {/* Background Image/Flag with Overlay */}
        <img
          src={country ? country.flag : "/uzbekistan.jpg"}
          alt={country ? country.name : "Topson Education"}
          className="w-full h-full object-cover opacity-40 mix-blend-overlay scale-105"
        />

        {/* Animated Gradients for Depth */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0b1f4d] via-[#0b1f4d]/80 to-transparent z-10" />
        <div className="absolute top-[-20%] right-[-10%] w-[400px] h-[400px] bg-sky-500/20 rounded-full blur-[100px] z-10" />
      </div>

      {/* --- CONTENT AREA --- */}
      <div className="relative z-20 max-w-7xl mx-auto w-full px-4 md:px-8">
        <div className="flex flex-col gap-4">
          {/* Badge - Animated */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center gap-2 w-fit px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20"
          >
            <Globe2 size={14} className="text-sky-400" />
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-sky-100">
              {country ? "Study Abroad Destination" : "Topson Global Education"}
            </span>
          </motion.div>

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="text-4xl md:text-6xl font-black tracking-tighter leading-tight"
          >
            {pageTitle.split(" ").map((word, i) => (
              <span
                key={i}
                className={
                  word.toLowerCase() === country?.name.toLowerCase()
                    ? "text-transparent bg-clip-text bg-gradient-to-r from-[#1e4e96] to-[#2d68b3]"
                    : ""
                }
              >
                {word}{" "}
              </span>
            ))}
          </motion.h1>

          {/* BREADCRUMB - Modern Design */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="flex items-center gap-2 mt-4"
          >
            <Link
              href="/"
              className="flex items-center gap-1.5 text-xs font-bold text-slate-300 hover:text-white transition-colors group"
            >
              <Home
                size={14}
                className="group-hover:scale-110 transition-transform"
              />
              <span>Home</span>
            </Link>

            <ChevronRight size={14} className="text-slate-500" />

            <div className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-bold text-white backdrop-blur-sm">
              {title || country?.name}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Subtle Bottom Pattern */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
    </section>
  );
};

export default HeroBaneer;
