/* eslint-disable @next/next/no-img-element */
"use client";

import { motion } from "framer-motion";
import { CheckCircle2, ArrowRight } from "lucide-react";
import Link from "next/link";

const AboutTopson = () => {
  const highlights = [
    "Top Global Universities",
    "NMC & WHO Recognized",
    "Expert Career Counseling",
    "Hassle-free Documentation",
    "Post-Admission Support",
    "Affordable Fee Structure",
  ];

  return (
    <section className="bg-white py-16 px-4 md:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ x: -80, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="relative order-2 lg:order-1"
        >
          {/* Main Image with decorative elements */}
          <div className="relative z-10 overflow-hidden  shadow-2xl">
            <img
              src="/class-room.jpg"
              alt="Medical Students Classroom"
              className="w-full h-auto object-cover hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1e4e96]/30 to-transparent" />
          </div>

          <motion.div
            initial={{ y: 60, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="absolute -bottom-10 -right-2 md:-right-6 z-20 bg-white p-6 md:p-8 rounded-xl shadow-[0_20px_50px_rgba(30,78,150,0.15)] border-t-4 border-[#1e4e96] max-w-[280px] md:max-w-[340px]"
          >
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 bg-blue-50 rounded-full flex items-center justify-center">
                <span className="text-[#1e4e96] font-bold text-xl">10+</span>
              </div>
              <p className="font-bold text-slate-800 text-sm leading-tight">
                Years of Excellence in <br />
                Medical Education
              </p>
            </div>
            <p className="text-slate-500 text-xs leading-relaxed">
              We&#39;ve helped 2000+ students secure seats in prestigious
              medical universities globally.
            </p>
          </motion.div>

          <div className="absolute -top-10 -left-10 w-64 h-64 bg-blue-50 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-pulse" />
        </motion.div>

        {/* --- TEXT SECTION --- */}
        <div className="order-1 lg:order-2">
          {/* LABEL */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 bg-blue-50 px-4 py-2 rounded-full mb-6 border border-blue-100"
          >
            <span className="w-1 h-1 bg-[#1e4e96] rounded-full animate-ping" />
            <span className="text-[#1e4e96] font-bold text-[10px] tracking-[0.2em] uppercase">
              Discover Topson Education
            </span>
          </motion.div>

          {/* HEADING */}
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-slate-900 mb-6 leading-[1.1]"
          >
            Your Trusted Gateway To A <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1e4e96] to-[#2d68b3]">
              Global Medical Career
            </span>
          </motion.h2>

          {/* DESCRIPTION */}
          <p className="text-slate-600 mb-8 text-lg leading-relaxed">
            At Topson Education, we don&#39;t just provide admissions; we shape
            futures. Navigating the path to an international MBBS degree can be
            complex—our expert mentors simplify every step, from university
            selection to visa processing.
          </p>

          {/* FEATURES GRID */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4 mb-10">
            {highlights.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-center gap-3 group"
              >
                <div className="p-1 bg-blue-50 rounded-full group-hover:bg-[#1e4e96] transition-colors duration-300">
                  <CheckCircle2 className="w-4 h-4 text-[#1e4e96] group-hover:text-white" />
                </div>
                <span className="text-slate-700 font-medium text-sm md:text-base">
                  {item}
                </span>
              </motion.div>
            ))}
          </div>

          {/* BUTTON GROUP */}
          <div className="flex flex-wrap gap-4">
            <Link
              href="#apply"
              className="group flex items-center gap-2 bg-gradient-to-r from-[#1e4e96] to-[#2d68b3] text-white px-8 py-4 hover:shadow-[#1e4e96]/30 hover:shadow-xl hover:-translate-y-0.5  font-bold shadow-lg shadow-blue-900/20  transition-all"
            >
              Start Your Application
              <ArrowRight
                size={18}
                className="group-hover:translate-x-1 transition-transform"
              />
            </Link>

            <Link
              href="/about"
              className="flex items-center gap-2 bg-slate-50 text-slate-700 px-8 py-4 hover:shadow-[#1e4e96]/30 hover:shadow-xl hover:-translate-y-0.5 font-bold border border-slate-200 hover:bg-white hover:border-blue-300 transition-all"
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutTopson;
