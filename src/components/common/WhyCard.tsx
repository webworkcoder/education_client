/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React from "react";
import { motion } from "framer-motion";

type Props = {
  icon: React.ReactNode;
  title: string;
  desc: string;
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" as any },
  },
};

const WhyUsCard = ({ icon, title, desc }: Props) => {
  return (
    <motion.div
      variants={fadeUp}
      whileHover={{ y: -8 }}
      className="group relative bg-white p-8 rounded-xl border border-slate-100 shadow-sm hover:shadow-2xl hover:shadow-blue-900/10 transition-all duration-500 flex flex-col items-start text-left h-full"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-[2rem]" />

      <div className="relative z-10 w-14 h-14 mb-6 flex items-center justify-center bg-blue-50 text-[#1e4e96] rounded-2xl group-hover:bg-[#1e4e96] group-hover:text-white transition-all duration-500 shadow-inner">
        {icon}
      </div>

      <h3 className="relative z-10 font-bold text-xl mb-3 text-[#0b2a5b] tracking-tight group-hover:text-[#1e4e96] transition-colors">
        {title}
      </h3>

      <p className="relative z-10 text-slate-500 text-sm leading-relaxed mb-4">
        {desc}
      </p>

      <div className="mt-auto pt-4">
        <div className="h-1 w-8 bg-slate-100 group-hover:w-16 group-hover:bg-[#1e4e96] transition-all duration-500 rounded-full" />
      </div>
    </motion.div>
  );
};

export default WhyUsCard;
