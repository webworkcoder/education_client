/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { motion } from "framer-motion";
import {
  ShieldCheck,
  GraduationCap,
  Calendar,
  Award,
  FileText,
  ClipboardCheck,
  ArrowRight,
} from "lucide-react";

type EligibilityItem = {
  title: string;
  desc: string;
};

type Props = {
  country: string;
  data: EligibilityItem[];
  gridClassName?: string;
};

const iconMap = [Calendar, Award, FileText, ClipboardCheck];

const EligibilitySection = ({ country, data, gridClassName }: Props) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as any },
    },
  };

  return (
    <section className="relative w-full bg-[#f8faff] py-12 overflow-hidden">
      {/* Background Orbs for Depth */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] bg-blue-100/40 rounded-full blur-[120px]" />
        <div className="absolute -bottom-[10%] -right-[10%] w-[40%] h-[40%] bg-indigo-100/30 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">
        <div className="max-w-3xl mb-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-[#1e4e96]/5 border border-[#1e4e96]/10 mb-6"
          >
            <ShieldCheck size={14} className="text-[#1e4e96]" />
            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-[#1e4e96]">
              Entry Protocol
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-black text-[#0b1f4d] leading-[1.1] tracking-tight mb-6"
          >
            Eligibility to Study in
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1e4e96] to-[#2d68b3]">
              {country}
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-slate-500 text-lg md:text-xl font-medium max-w-2xl"
          >
            Ensure you meet these core requirements set by the medical councils
            for a seamless admission journey.
          </motion.p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className={`grid gap-6 ${gridClassName || "sm:grid-cols-2 lg:grid-cols-3"}`}
        >
          {data.map((item, index) => {
            const IconComponent = iconMap[index % iconMap.length];
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className="group relative bg-white border border-slate-200/60 p-8 rounded-xl shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_30px_60px_rgba(30,78,150,0.1)] transition-all duration-500"
              >
                {/* Background Pattern Hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-[0.03] transition-opacity duration-500 pointer-events-none rounded-[2.5rem] bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />

                {/* Icon Wrapper */}
                <div className="relative mb-10">
                  <div className="w-16 h-16 rounded-full bg-[#f0f4fa] flex items-center justify-center text-[#1e4e96] group-hover:bg-[#1e4e96] group-hover:text-white group-hover:rotate-[10deg] transition-all duration-500">
                    <IconComponent size={28} strokeWidth={2.5} />
                  </div>
                  {/* Floating Number Tag */}
                  <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-white shadow-sm border border-slate-100 flex items-center justify-center text-[10px] font-black text-[#0b1f4d]">
                    0{index + 1}
                  </div>
                </div>

                <h3 className="text-xl font-black text-[#0b1f4d] mb-4 tracking-tight group-hover:text-[#1e4e96] transition-colors">
                  {item.title}
                </h3>

                <p className="text-slate-500 text-sm md:text-base leading-relaxed font-medium">
                  {item.desc}
                </p>

                {/* Corner Decoration */}
                <div className="absolute bottom-6 right-8 opacity-0 group-hover:opacity-100 group-hover:translate-x-2 transition-all duration-500">
                  <ArrowRight size={20} className="text-[#1e4e96]" />
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 flex flex-col md:flex-row items-center justify-between gap-8 p-8 md:p-12  bg-[#0b1f4d] text-white overflow-hidden relative"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/20 rounded-full blur-3xl -mr-20 -mt-20" />
          <div className="absolute bottom-0 left-0 w-40 h-40 bg-indigo-500/10 rounded-full blur-2xl -ml-10 -mb-10" />

          <div className="flex flex-col md:flex-row items-center gap-6 relative z-10 text-center md:text-left">
            <div className="shrink-0 w-16 h-16 rounded-full bg-white/10 flex items-center justify-center backdrop-blur-xl border border-white/10 shadow-inner">
              <GraduationCap size={32} className="text-white" />
            </div>

            <div className="space-y-2">
              <h4 className="text-2xl md:text-3xl font-black tracking-tight">
                Have Specific Questions?
              </h4>
              <p className="text-blue-200/70 text-base md:text-lg font-medium max-w-md">
                Our expert counselors are ready to help you with documentation.
              </p>
            </div>
          </div>

          {/* Button - Full width on mobile, auto on desktop */}
          <button className="relative w-full md:w-fit z-10 px-10 py-3.5 bg-white text-[#0b1f4d] rounded-full cursor-pointer font-black text-lg hover:bg-blue-50 transition-all active:scale-95 shadow-xl shadow-black/20 flex items-center justify-center gap-3 group">
            Consult Now
            <ArrowRight
              size={20}
              className="group-hover:translate-x-1 transition-transform"
            />
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default EligibilitySection;
