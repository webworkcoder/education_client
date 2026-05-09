"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Send, Sparkles } from "lucide-react";

const StartJourney = () => {
  return (
    <section className="relative w-full py-20  overflow-hidden bg-[#0b2a5b]">
      {/* Background Image with Parallax-like Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center  bg-fixed scale-110"
        style={{
          backgroundImage: "url('/doc1.jpeg')",
        }}
      />

      {/* Premium Multi-layered Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#0b2a5b] via-[#0b2a5b]/90 to-[#1e4e96]/60"></div>

      {/* Animated Decorative Shapes */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-400/20 rounded-full blur-[120px] -mr-48 -mt-48 animate-pulse" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-sky-400/10 rounded-full blur-[120px] -ml-48 -mb-48" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10 text-white">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 mb-8"
          >
            <Sparkles size={14} className="text-sky-300" />
            <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-sky-100">
              Admissions Open for 2026 Session
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-4xl md:text-7xl font-black mb-8 leading-[1.1] tracking-tighter"
          >
            Begin Your{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-300 to-white">
              Medical Career
            </span>{" "}
            Abroad
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-xl text-slate-200 mb-8 leading-relaxed font-medium"
          >
            Take the first step toward your dream of studying MBBS abroad with
            trusted guidance from{" "}
            <span className="text-white font-bold">Topson Education</span>. From
            university selection to admission and visa support, we are with you
            at every stage of your journey.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-wrap gap-6 items-center mb-10"
          >
            <Link
              href="#apply"
              className="group relative bg-white text-[#0b2a5b] text-base font-black px-8 py-2.5 rounded-full transition-all hover:scale-105 active:scale-95 shadow-[0_20px_50px_rgba(255,255,255,0.1)] flex items-center gap-3 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-sky-100 to-white opacity-0 group-hover:opacity-100 transition-opacity" />
              <span className="relative z-10 uppercase tracking-wider">
                Start Application
              </span>
              <Send
                size={20}
                className="relative z-10 group-hover:translate-x-2 group-hover:-translate-y-1 transition-transform duration-300"
              />
            </Link>

            <div className="flex items-center gap-4 text-white/80 group cursor-pointer">
              <div className="w-6 h-6 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-white/10 transition-colors">
                <div className="w-2 h-2 bg-sky-400 rounded-full animate-ping" />
              </div>
              <p className="text-sm font-bold uppercase tracking-widest">
                Free Career Counseling Available
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Floating Bottom Bar (Desktop Only) */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-sky-400/50 to-transparent" />
    </section>
  );
};

export default StartJourney;
