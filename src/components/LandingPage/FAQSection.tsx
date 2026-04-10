"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { faqs } from "@/data/faqs";



const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="bg-gray-100 py-10 lg:py-16 px-4 lg:px-10 overflow-x-hidden">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-[1.2fr_2.5fr] gap-6 lg:gap-12 items-start">
        {/* LEFT SIDE */}
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <span className="border px-3 py-1 text-base tracking-widest text-gray-600 border-gray-400">
            F. A. Q
          </span>

          <h2 className="text-3xl lg:text-4xl font-bold mt-4 text-gray-900">
            Frequently Asked <br className="hidden lg:block" /> Questions
          </h2>

          <p className="text-gray-600 mt-4 text-sm lg:text-base w-full lg:max-w-md">
            Frequently Asked Questions (FAQs) provide valuable insights into
            Atlas Mentor’s comprehensive MBBS advisory services. Here, we
            address common queries about our personalized guidance, university
            selection, application support, visa assistance, and more to ensure
            you’re well-informed as you embark on your journey to studying
            medicine abroad.
          </p>

          <div className="w-12 h-1 bg-orange-500 mt-4 lg:mt-6"></div>
        </motion.div>

        {/* RIGHT SIDE */}
        <div className="flex flex-col gap-4">
          {faqs.map((faq, index) => (
            <div key={index}>
              {/* QUESTION */}
              <motion.div
                initial={{ x: 80, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.7 }}
                viewport={{ once: true }}
                onClick={() => toggleFAQ(index)}
                className={`bg-white border border-gray-300 px-5 py-4  font-bold text-lg cursor-pointer flex justify-between 
                items-center  ${
                  activeIndex === index ? " text-[#667bb3]" : "text-gray-800"
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
