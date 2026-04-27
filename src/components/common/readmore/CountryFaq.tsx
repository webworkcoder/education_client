"use client";

import { CountryFaqs } from "@/data/CountryFaqs";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function CountryFaq() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="max-w-4xl mx-auto p-4 space-y-4">
      {/* Optional: Section Title */}
      <h2 className="text-2xl font-bold text-gray-800 mb-6 px-2">
        Frequently Asked Questions
      </h2>

      {CountryFaqs.map((faq, index) => {
        const isOpen = activeIndex === index;

        return (
          <div
            key={index}
            className="border border-gray-300 rounded bg-gray-100 overflow-hidden shadow-sm"
          >
            {/* Question Section */}
            <motion.button
              onClick={() => toggleFAQ(index)}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              className="w-full text-left px-5 py-4 font-semibold text-[#1e4e96] flex justify-between items-center hover:bg-gray-200/50 transition-colors cursor-pointer border-l-2 border-l-[#1e4e96]"
            >
              <span className="pr-4 leading-tight">{faq.question}</span>

              {/* Animated Plus/Cross Icon */}
              <motion.span
                animate={{
                  rotate: isOpen ? 45 : 0,
                  color: isOpen ? "#1e4e96" : "black",
                }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="text-2xl font-light shrink-0"
              >
                +
              </motion.span>
            </motion.button>

            {/* Answer Section with Height Animation */}
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  key="content"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="overflow-hidden bg-white" // Answer area white for better readability
                >
                  <div className="px-5 py-4 text-gray-700 leading-relaxed border-t border-gray-200 text-[15px]">
                    {faq.answer}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
