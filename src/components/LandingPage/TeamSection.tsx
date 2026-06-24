/* eslint-disable @next/next/no-img-element */
"use client";

import { motion } from "framer-motion";
import { team } from "@/data/teamdata";
import { Mail, Sparkles } from "lucide-react";
import { LiaLinkedin } from "react-icons/lia";

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" as const, delay: i * 0.15 },
  }),
};

const TeamSection = () => {
  return (
    <section className="bg-[#f8faff] py-24 px-4 lg:px-8 overflow-hidden relative">
      {/* Background decorative blobs */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-100/40 rounded-full blur-3xl -z-0 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-indigo-100/30 rounded-full blur-3xl -z-0 pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-100"
          >
            <Sparkles size={14} className="text-[#1e4e96]" />
            <span className="text-[10px] font-bold text-[#1e4e96] uppercase tracking-[0.2em]">
              Our Excellence
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-4xl md:text-5xl font-black text-[#0b2a5b] leading-[1.1] tracking-tighter"
          >
            Meet The Experts{" "}
            <span className="">
              Guiding Your Journey
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-slate-500 text-lg max-w-xl mx-auto leading-relaxed"
          >
            Our experienced leadership team is committed to helping students
            achieve their dream of studying MBBS abroad through trusted guidance
            and dedicated support.
          </motion.p>
        </div>

        {/* All team members — uniform 4-column grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {team.map((member, i) => (
            <motion.div
              key={i}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="group relative bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-500 overflow-hidden border border-slate-100 flex flex-col"
            >
              {/* Top gradient accent */}
              <div className="h-1.5 w-full bg-gradient-to-r from-[#1e4e96] to-[#4f86d8]" />

              {/* Image */}
              <div className="relative h-56 min-h-56 max-h-56 w-full overflow-hidden shrink-0">
                <img
                  src={member.image}
                  alt={member.name}
                  className="absolute inset-0 w-full h-full object-fit object-top transition-transform duration-700 group-hover:scale-105"
                />
                {/* Overlay with socials */}
                <div className="absolute inset-0 bg-[#0b2a5b]/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3">
                  <button className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-[#1e4e96] hover:bg-[#1e4e96] hover:text-white transition-all duration-300 shadow">
                    <LiaLinkedin size={18} />
                  </button>
                  <button className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-[#1e4e96] hover:bg-[#1e4e96] hover:text-white transition-all duration-300 shadow">
                    <Mail size={16} />
                  </button>
                </div>

                {/* Number badge */}
                <div className="absolute top-4 left-4 w-8 h-8 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center text-[#1e4e96] text-xs font-black shadow">
                  0{i + 1}
                </div>
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col items-center text-center flex-1">
                <h3 className="font-black text-lg text-[#0b2a5b] mb-1 group-hover:text-[#1e4e96] transition-colors tracking-tight leading-tight">
                  {member.name}
                </h3>
                <p className="text-[10px] font-bold text-[#1e4e96] uppercase tracking-[0.2em] mb-4">
                  {member.role}
                </p>
                <div className="w-8 h-1 bg-slate-100 group-hover:w-16 group-hover:bg-gradient-to-r group-hover:from-[#1e4e96] group-hover:to-[#4f86d8] transition-all duration-500 rounded-full mt-auto" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom tagline */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center text-slate-400 text-sm font-medium mt-12"
        >
          "Guiding students toward a successful medical future." —{" "}
          <span className="text-[#0b2a5b] font-bold">Topson Education</span>
        </motion.p>
      </div>
    </section>
  );
};

export default TeamSection;
