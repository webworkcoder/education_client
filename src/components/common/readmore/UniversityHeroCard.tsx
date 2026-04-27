/* eslint-disable @next/next/no-img-element */
"use client";

import { motion } from "framer-motion";
import { Calendar, User, BookOpen, MapPin } from "lucide-react";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const UniversityHeroCard = ({ university }: any) => {
  return (
    <section className="relative w-full min-h-[24rem] md:h-[35rem] flex items-center overflow-hidden">
      {/* Background Image with subtle Zoom Animation */}
      <motion.div
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5 }}
        className="absolute inset-0 z-0"
      >
        <img
          src={university.image}
          alt={university.title}
          className="w-full h-full object-cover"
        />
        {/* Modern Multi-layer Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#1e3a8a] via-[#1e3a8a]/80 to-transparent"></div>
        <div className="absolute inset-0 bg-black/20"></div>
      </motion.div>

      <div className="relative z-10 max-w-7xl mx-auto w-full px-4 md:px-8 py-10">
        <div className="flex flex-col md:flex-row gap-6 md:gap-10 items-center md:items-start text-center md:text-left">
          {/* Animated Logo Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="relative group"
          >
            <div className="w-28 h-28 md:w-44 md:h-44 rounded-2xl bg-white/95 p-3 md:p-5 shadow-2xl backdrop-blur-sm border border-white/20 flex items-center justify-center">
              <img
                src={university.logo}
                alt="University Logo"
                className="w-full h-full object-contain transform group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            {/* Decorative ring */}
            <div className="absolute inset-0 rounded-2xl border-2 border-white/10 -m-2"></div>
          </motion.div>

          {/* Text Content Area */}
          <div className="flex-1 space-y-4 md:space-y-6">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-400/20 border border-blue-300/30 text-blue-100 text-xs font-semibold uppercase tracking-wider mb-4">
                <MapPin size={14} className="text-blue-300" />
                Featured Institution
              </div>

              <h1 className="text-3xl md:text-6xl font-black text-white leading-tight drop-shadow-md">
                {university.title}
              </h1>
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-white/80 text-base md:text-lg max-w-2xl font-medium leading-relaxed"
            >
              {university.desc}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="flex flex-wrap justify-center md:justify-start gap-4 md:gap-6 pt-2"
            >
              <div className="flex items-center gap-2 bg-white/10 px-3 py-1.5 rounded-full backdrop-blur-md border border-white/5 text-blue-50 text-sm">
                <User size={16} className="text-blue-300" />
                <span>{university.author}</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 px-3 py-1.5 rounded-full backdrop-blur-md border border-white/5 text-blue-50 text-sm">
                <BookOpen size={16} className="text-blue-300" />
                <span>{university.category}</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 px-3 py-1.5 rounded-full backdrop-blur-md border border-white/5 text-blue-50 text-sm">
                <Calendar size={16} className="text-blue-300" />
                <span>{university.date}</span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
    </section>
  );
};

export default UniversityHeroCard;
