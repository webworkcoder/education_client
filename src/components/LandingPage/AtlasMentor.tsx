"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { CheckCircle2, ArrowRight } from "lucide-react";

const features = [
  "International University Partnerships",
  "Complete Admission Assistance",
  "Visa & Documentation Support",
  "Dedicated Student Guidance",
];

const AtlasMentor = () => {
  return (
    <section className="relative py-20 px-6 bg-[#fcfdfe] overflow-hidden">
      {/* Background Decorative Element */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-slate-50 -z-10" />

      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
        {/* LEFT: Content */}
        <div className="flex-1 space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h4 className="text-[#1e4e96] font-bold tracking-[0.4em] text-xs uppercase mb-4">
              Trusted MBBS Guidance
            </h4>
            <h2 className="text-4xl md:text-6xl font-black text-[#0b2a5b] leading-[1.1] tracking-tight">
              Creating Pathways For <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1e4e96] to-[#2d68b3] italic">
                Future Medical Leaders.
              </span>{" "}
            </h2>
          </motion.div>

          <p className="text-slate-500 text-lg leading-relaxed max-w-xl">
            Topson Education offers personalized counseling and complete
            admission support for students planning to pursue MBBS abroad at
            globally recognized medical universities.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {features.map((feature, i) => (
              <div key={i} className="flex items-center gap-3 group">
                <CheckCircle2
                  className="text-[#1e4e96] group-hover:scale-110 transition-transform"
                  size={20}
                />
                <span className="text-sm font-semibold text-slate-700">
                  {feature}
                </span>
              </div>
            ))}
          </div>

          <div className="pt-6 flex flex-wrap gap-6 items-center">
            <button className="px-10 py-4 bg-[#0b2a5b] text-white rounded-full font-bold hover:bg-[#1e4e96] transition-all shadow-[0_20px_40px_rgba(11,42,91,0.2)] flex items-center gap-3">
              Book Free Counseling <ArrowRight size={18} />
            </button>
            <div className="flex -space-x-3">
              {[1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className="w-10 h-10 rounded-full border-2 border-white bg-slate-200 overflow-hidden shadow-sm"
                >
                  <div className="w-full h-full bg-[#1e4e96]/10" />
                </div>
              ))}
              <div className="pl-6 text-xs font-bold text-slate-400 self-center uppercase tracking-tighter">
                Trusted by 1000+ Students
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT: Visual Frame */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className="relative flex-1"
        >
          {/* Main Image Frame */}
          <div className="relative z-10 p-4 bg-white shadow-2xl rounded-[3rem] rotate-2 hover:rotate-0 transition-transform duration-700">
            <Image
              src="/doctors.jpg"
              alt="Medical Students"
              width={600}
              height={700}
              className="rounded-[2.5rem] object-cover w-full h-[500px]"
            />
          </div>

          {/* Floating Experience Card */}
          <div className="absolute -left-2 md:-left-12 bottom-20 z-20 bg-white/80 backdrop-blur-xl p-4 sm:p-6 rounded-3xl shadow-2xl border border-white/40 ">
            <h5 className="text-4xl font-black text-[#0b2a5b]">10+</h5>
            <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">
              Years of Student Guidance
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AtlasMentor;
