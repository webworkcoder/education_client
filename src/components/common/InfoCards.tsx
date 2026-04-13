/* eslint-disable react/jsx-key */
"use client";

import React from "react";
import { motion } from "framer-motion";
import { GraduationCap, Globe2, HeartHandshake } from "lucide-react";

type CardItem = {
  title: string;
  desc: string;
  dark?: boolean;
  icon?: React.ReactNode;
};

type Props = {
  data: CardItem[];
  sectionClass?: string;
};

const defaultIcons = [
  <GraduationCap className="w-8 h-8" />,
  <Globe2 className="w-8 h-8" />,
  <HeartHandshake className="w-8 h-8" />,
];

const InfoCards = ({ data, sectionClass }: Props) => {
  return (
    <section
      className={
        sectionClass || "py-16 bg-slate-50 px-4 md:px-8 overflow-hidden"
      }
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {data.map((item, index) => (
            <motion.div
              key={index}
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              whileHover={{ y: -10 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`group relative overflow-hidden  p-8 transition-all duration-500 shadow-sm ${
                item.dark
                  ? "bg-gradient-to-br from-[#1e4e96] to-[#2d68b3] text-white shadow-blue-900/20"
                  : "bg-white text-slate-700 border border-slate-100 hover:border-blue-200"
              }`}
            >
              {/* Decorative Background Shape */}
              <div
                className={`absolute -right-10 -top-10 w-40 h-40 rounded-full opacity-10 transition-transform duration-700 group-hover:scale-150 ${
                  item.dark ? "bg-white" : "bg-blue-600"
                }`}
              />

              {/* Icon Container */}
              <div
                className={`inline-flex items-center justify-center w-16 h-16 rounded-full mb-8 transition-all duration-300 group-hover:rotate-6 ${
                  item.dark
                    ? "bg-white/10 backdrop-blur-md text-white border border-white/20"
                    : "bg-blue-50 text-[#1e4e96]"
                }`}
              >
                {item.icon || defaultIcons[index % 3]}
              </div>

              {/* Content */}
              <h3
                className={`text-2xl font-extrabold mb-4 tracking-tight ${
                  item.dark ? "text-white" : "text-slate-900"
                }`}
              >
                {item.title}
              </h3>

              <p
                className={`leading-relaxed text-sm md:text-base mb-6 ${
                  item.dark ? "text-blue-100" : "text-slate-500"
                }`}
              >
                {item.desc}
              </p>

              {/* Modern Decorative Line */}
              <div className="flex items-center gap-2">
                <div
                  className={`h-1 rounded-full transition-all duration-500 group-hover:w-16 ${
                    item.dark ? "w-8 bg-blue-300" : "w-8 bg-[#1e4e96]"
                  }`}
                />
                <div
                  className={`w-2 h-2 rounded-full ${
                    item.dark ? "bg-blue-300" : "bg-[#1e4e96]"
                  }`}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InfoCards;
