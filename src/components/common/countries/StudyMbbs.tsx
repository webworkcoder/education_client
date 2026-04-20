"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { GraduationCap, ArrowRight, MapPin } from "lucide-react";

type Props = {
  country: { name: string; image: string; description: string };
};

const CountryHero = ({ country }: Props) => {
  return (
    <section className="w-full bg-[#f8faff] py-12 px-6 md:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 lg:gap-16 items-center">
        {/* --- LEFT CONTENT: TEXT & ACTION --- */}
        <div className="px-6 md:px-0">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-2 mb-6"
          >
            <span className="flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.3em] text-blue-600 bg-blue-50 px-4 py-2 rounded-full border border-blue-100">
              <MapPin size={12} />
              Featured Destination
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-3xl md:text-5xl font-black text-[#0b1f4d] leading-[1.1] mb-6 tracking-tighter"
          >
            Study MBBS in{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1e4e96] to-[#2d68b3]">
              {country.name}
            </span>{" "}
            <br className="hidden md:block" />
            for Indian Students
          </motion.h2>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="relative border-l-4 border-blue-500/20 pl-6 mb-8"
          >
            <p className="text-gray-500 text-lg leading-relaxed font-medium">
              {country.description}
            </p>
          </motion.div>

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="group w-full sm:w-auto bg-gradient-to-r from-[#1e4e96] to-[#2d68b3] text-white px-8 py-4 rounded-full font-bold flex items-center justify-center gap-3 transition-all shadow-md hover:shadow-[#1e4e96]/30 hover:shadow-xl hover:-translate-y-0.5 cursor-pointer"
          >
            <GraduationCap size={20} />
            Universities In {country.name}
            <ArrowRight
              size={18}
              className="group-hover:translate-x-1 transition-transform"
            />
          </motion.button>
        </div>

        {/* --- RIGHT IMAGE: MOBILE FULL-WIDTH FIX --- */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative w-full"
        >
          {/* Mobile: rounded-none & w-full | Desktop: rounded-3xl */}
          <div className="relative w-full aspect-[4/3] lg:aspect-[3/2] overflow-hidden rounded-none shadow-2xl">
            <Image
              src={country.image}
              alt={`Study MBBS in ${country.name}`}
              fill
              className="object-cover transition-transform duration-700 hover:scale-105"
            />
            {/* Soft Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0b1f4d]/20 to-transparent" />
          </div>

          {/* Decorative Element - Hidden on mobile */}
          <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-sky-100 rounded-full blur-3xl -z-10 hidden md:block" />
        </motion.div>
      </div>
    </section>
  );
};

export default CountryHero;
