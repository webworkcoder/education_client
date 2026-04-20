"use client";

import { motion } from "framer-motion";
import {
  PhoneCall,
  ShieldCheck,
  Building2,
  Lock,
  Users,
  Bus,
  CheckCircle,
} from "lucide-react";

type Point = {
  title: string;
  desc: string;
};

type Props = {
  country: string;
  title?: string;
  description: string;
  points: Point[];
  footer?: string;
};

const safetyIcons = [ShieldCheck, Lock, Users, Building2, Bus, CheckCircle];

const SafetySection = ({
  country,
  title,
  description,
  points,
  footer,
}: Props) => {
  return (
    <section className="relative w-full bg-white py-12  overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">
        <div className="mb-16 md:mb-24">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-transparent bg-clip-text bg-gradient-to-r from-[#1e4e96] to-[#2d68b3] font-bold tracking-[0.2em] text-sm uppercase mb-4"
          >
            Student Security Protocol
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-black text-[#0b1f4d] tracking-tight mb-6"
          >
            {title || `Is ${country} Safe for Indian Students?`}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="max-w-2xl text-slate-500 text-lg md:text-xl font-medium leading-relaxed"
          >
            {description}
          </motion.p>
        </div>

        <div className="relative">
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-[2px] bg-slate-200 -translate-x-1/2" />

          <div className="space-y-12 md:space-y-20">
            {points?.map((item, index) => {
              const IconComponent = safetyIcons[index % safetyIcons.length];
              const isEven = index % 2 === 0;

              return (
                <div
                  key={index}
                  className="relative flex flex-col md:flex-row items-center"
                >
                  <div className="absolute left-6 md:left-1/2 -translate-x-1/2 z-20">
                    <motion.div
                      whileHover={{ scale: 1.2 }}
                      className="w-10 h-10 md:w-14 md:h-14 rounded-full bg-white border-2 border-[#1e4e96] shadow-xl flex items-center justify-center text-[#1e4e96] transition-colors hover:bg-blue-600 hover:text-white"
                    >
                      <IconComponent size={24} />
                    </motion.div>
                  </div>

                  {/* Dynamic Content Card */}
                  <div
                    className={`w-full md:w-1/2 pl-16 md:pl-0 ${
                      isEven ? "md:pr-20 md:text-left" : "md:ml-auto md:pl-20"
                    }`}
                  >
                    <motion.div
                      initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="bg-slate-100 py-3 px-5 md:p-7 rounded-lg border border-slate-100 md:shadow-md  transition-all duration-500 group"
                    >
                      <span className="inline-block px-4 py-1 rounded bg-blue-100 text-[#1e4e96] text-[10px] font-black uppercase tracking-widest mb-4">
                        Safety Measure 0{index + 1}
                      </span>

                      <h3 className="text-base md:text-2xl font-black text-[#0b1f4d] mb-3 group-hover:text-[#1e4e96] transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-slate-500 text-sm md:text-lg leading-relaxed font-medium">
                        {item.desc}
                      </p>
                    </motion.div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {footer && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="mt-24 p-8 md:p-14  bg-[#0b1f4d] text-white flex flex-col lg:flex-row items-center justify-between gap-10 shadow-2xl shadow-blue-900/20"
          >
            <div className="flex flex-col md:flex-row items-center gap-6 text-center md:text-left">
              <div className="w-16 h-16 md:w-20 md:h-20 bg-white rounded-full flex items-center justify-center shadow-lg">
                <PhoneCall size={32} className="text-[#0b1f4d]" />
              </div>
              <div>
                <h4 className="text-2xl font-black mb-2 tracking-tight">
                  24/7 Helpline for Indians
                </h4>
                <p className="text-blue-100/70 text-lg font-medium max-w-xl">
                  {footer}
                </p>
              </div>
            </div>
            <button className="whitespace-nowrap px-10 py-3.5 bg-white text-[#0b1f4d] rounded-full cursor-pointer font-black text-lg hover:bg-blue-50 transition-all active:scale-95 shadow-xl">
              Contact Support
            </button>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default SafetySection;
