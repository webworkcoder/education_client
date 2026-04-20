/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

type LoanPoint = {
  title: string;
  desc: string;
};

type Props = {
  tag?: string;
  country: string;
  title?: string;
  description: string;
  points: LoanPoint[];
};

const LoanSection = ({
  tag = "Loan",
  country,
  title,
  description,
  points,
}: Props) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.08 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -15 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.4, ease: "easeOut" as any },
    },
  };

  return (
    <section className="w-full py-12  px-4 md:px-8 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-10"
        >
          {/* TAG WITH BRAND COLOR */}
          <span className="text-[10px] tracking-[0.2em] border border-[#1e4e96]/20 text-[#1e4e96] px-3 py-1.5 uppercase font-black rounded-full bg-[#1e4e96]/5">
            {tag}
          </span>

          <h2 className="text-3xl md:text-5xl font-black mt-6 mb-6 text-[#0b1f4d] tracking-tight leading-[1.1]">
            {title || (
              <>
                Education Loan for Indian Students to Study MBBS in{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1e4e96] to-[#2d68b3]">
                  {country}
                </span>
              </>
            )}
          </h2>

          <p className="text-gray-500 text-lg md:text-xl max-w-4xl leading-relaxed">
            {description}
          </p>
        </motion.div>

        <motion.div
          className="space-y-6 md:space-y-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {points.map((item, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ x: 8 }}
              className="group flex gap-4 items-start max-w-5xl"
            >
              <div className="mt-1 flex-shrink-0">
                <CheckCircle2
                  size={22}
                  className="text-[#1e4e96] group-hover:scale-110 transition-transform duration-300"
                  strokeWidth={2.5}
                />
              </div>

              <div className="space-y-1">
                <p className="text-gray-700 text-base md:text-lg leading-relaxed">
                  <span className="font-bold text-[#0b1f4d] group-hover:text-[#1e4e96] transition-colors duration-300">
                    {item.title}
                  </span>
                  <span className="mx-2 text-gray-300">|</span>
                  <span className="text-gray-600 font-medium">{item.desc}</span>
                </p>
                {/* Subtle underline effect on hover */}
                <div className="h-[1px] w-0 bg-gradient-to-r from-[#1e4e96]/20 to-transparent group-hover:w-full transition-all duration-500" />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default LoanSection;
