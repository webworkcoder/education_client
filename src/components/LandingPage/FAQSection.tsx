"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type FAQ = {
  qun: string;
  ans: string;
};

type Props = {
  tag?: string;
  title?: string;
  description?: string;
  data: FAQ[];
  faqClass?: string;
};

const FAQSection = ({
  tag = "F. A. Q",
  title = "Frequently Asked Questions",
  description,
  data,
  faqClass,
}: Props) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section
      className={
        faqClass || "bg-gray-100 py-10 lg:py-16 px-4 lg:px-8 overflow-x-hidden"
      }
    >
      <div className="max-w-7xl grid lg:grid-cols-[1.2fr_2.5fr] gap-6 lg:gap-12 items-start">
        {/* LEFT SIDE */}
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <span className="border rounded-full px-3 py-1 text-base tracking-widest text-gray-600 border-[#1e4e96]">
            {tag}
          </span>

          <h2 className="text-3xl lg:text-4xl font-bold mt-4 text-gray-900">
            {title}
          </h2>

          {description && (
            <p className="text-gray-600 mt-4 text-sm lg:text-base w-full lg:max-w-md">
              {description}
            </p>
          )}

          <div className="w-20 h-1 bg-gradient-to-r from-[#1e4e96] to-transparent rounded-full mt-4 lg:mt-6"></div>
        </motion.div>

        {/* RIGHT SIDE */}
        <div className="flex flex-col gap-4">
          {data.map((faq, index) => (
            <div key={index}>
              {/* QUESTION */}
              <motion.div
                initial={{ x: 80, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.7 }}
                viewport={{ once: true }}
                onClick={() => toggleFAQ(index)}
                className={`bg-white border border-gray-300 border-l-2 border-l-[#1e4e96] px-5 py-4 font-bold text-lg cursor-pointer flex justify-between items-center ${
                  activeIndex === index ? "text-[#667bb3]" : "text-gray-800"
                }`}
              >
                {faq.qun}
                <span>{activeIndex === index ? "-" : "+"}</span>
              </motion.div>

              {/* ANSWER */}
              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="bg-white border border-t-0 border-gray-300 px-5 overflow-hidden"
                  >
                    <p className="py-4 text-gray-600 text-base">{faq.ans}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
