/* eslint-disable @next/next/no-img-element */
"use client";

import { motion } from "framer-motion";
import { team } from "@/data/teamdata";
import { Mail, Sparkles } from "lucide-react";
import { LiaLinkedin } from "react-icons/lia";

const TeamSection = () => {
  const TeamCard = ({
    image,
    name,
    role,
  }: {
    image: string;
    name: string;
    role: string;
    index: number;
  }) => (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 30 },
        show: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.6, ease: "easeOut" },
        },
      }}
      className="group relative bg-white shadow-sm hover:shadow-2xl transition-all duration-500 border border-slate-100 flex-1 overflow-hidden"
    >
      {/* Image Wrapper */}
      <div className="relative h-auto w-full  overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-110 group-hover:rotate-1"
        />

        {/* Hover Overlay with Socials */}
        <div className="absolute inset-0 bg-[#0b2a5b]/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3">
          <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-[#1e4e96] cursor-pointer hover:bg-sky-50 transition-colors">
            <LiaLinkedin size={18} />
          </div>
          <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-[#1e4e96] cursor-pointer hover:bg-sky-50 transition-colors">
            <Mail size={18} />
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="p-6 text-center">
        <h3 className="font-black text-xl text-[#0b2a5b] mb-1 group-hover:text-[#1e4e96] transition-colors tracking-tight">
          {name}
        </h3>
        <p className="text-[10px] font-bold text-[#1e4e96] uppercase tracking-[0.2em] mb-4">
          {role}
        </p>

        {/* Subtle separator */}
        <div className="w-8 h-1 bg-slate-100 mx-auto group-hover:w-16 group-hover:bg-[#1e4e96] transition-all duration-500 rounded-full" />
      </div>
    </motion.div>
  );

  return (
    <section className="bg-white py-20 px-4 lg:px-8 overflow-hidden relative">
      {/* Subtle background text for premium feel */}
      <div className="absolute top-10 left-10 text-[15rem] font-black text-slate-50 pointer-events-none select-none -z-10 opacity-50">
        Leadership Team
      </div>

      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 items-start relative z-10">
        {/* LEFT: Branding & Text */}
        <div className="lg:sticky lg:top-32 w-full lg:w-[50%] space-y-8 text-center lg:text-left">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-100"
          >
            <Sparkles size={14} className="text-[#1e4e96]" />
            <span className="text-[10px] font-bold text-[#1e4e96] uppercase tracking-[0.2em]">
              Our Excellence
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-4xl md:text-5xl font-black text-[#0b2a5b] leading-[1.1] tracking-tighter"
          >
            Meet The Experts{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1e4e96] to-[#2d68b3]">
              Guiding Your Journey
            </span>
          </motion.h2>

          <p className="text-slate-500 text-lg leading-relaxed max-w-sm mx-auto lg:mx-0">
            Our experienced leadership team is committed to helping students
            achieve their dream of studying MBBS abroad through trusted guidance
            and dedicated support.
          </p>

          <div className="pt-6 hidden lg:block">
            <div className="h-[2px] w-20 bg-gradient-to-r from-[#1e4e96] to-transparent" />
          </div>

          <div className="space-y-4 text-sm text-slate-400 font-medium">
            <p>
              “Guiding students toward a successful medical future.” —{" "}
              <span className="text-[#0b2a5b]">Topson Education</span>
            </p>
          </div>
        </div>

        {/* RIGHT: Team Cards */}
        <motion.div
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.2 } },
          }}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="flex flex-col md:flex-row gap-8 w-full lg:w-[65%]"
        >
          {team.map((member, index) => (
            <TeamCard
              key={index}
              index={index}
              image={member.image}
              name={member.name}
              role={member.role}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TeamSection;
