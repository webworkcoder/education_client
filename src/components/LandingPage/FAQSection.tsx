"use client";

import React from "react";
import { motion } from "framer-motion";

const faqs = [
  "What services does Atlas Mentor provide?",
  "How can Atlas Mentor help me with my MBBS application?",
  "What countries does Atlas Mentor cover for MBBS studies?",
  "Does Atlas Mentor provide assistance with visa applications and travel arrangements?",
  "How do I get started with Atlas Mentor?",
];

const FAQSection = () => {
  return (
    <section className="bg-gray-100 py-16 px-4 md:px-10 overflow-x-hidden">
      <div className="max-w-7xl mx-auto grid md:grid-cols-[1.2fr_2.5fr] gap-12 items-start">
        
        {/* LEFT SIDE */}
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <span className="border px-3 py-1 text-base tracking-widest text-gray-600 border-gray-400">
            F. A. Q
          </span>

          <h2 className="text-3xl md:text-4xl font-bold mt-4 text-gray-900 leading-tight">
            Frequently Asked <br /> Questions
          </h2>

          <p className="text-gray-600 mt-4 leading-relaxed max-w-md text-base">
            Frequently Asked Questions (FAQs) provide valuable insights into
            Atlas Mentor’s comprehensive MBBS advisory services. Here, we address
            common queries about our personalized guidance, university selection,
            application support, visa assistance, and more to ensure you’re
            well-informed as you embark on your journey to studying medicine abroad.
          </p>

          <div className="w-12 h-1 bg-orange-500 mt-6"></div>
        </motion.div>

        {/* RIGHT SIDE */}
        <div className="flex flex-col gap-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.5,
                delay: index * 0.15,
                ease: "easeOut",
              }}
              viewport={{ once: true }}
              className="bg-white border border-gray-300 px-5 py-4 text-gray-800 font-medium hover:bg-gray-50 transition cursor-pointer"
            >
              {faq}
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default FAQSection;