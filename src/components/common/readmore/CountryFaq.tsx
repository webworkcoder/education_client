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
      {CountryFaqs.map((faq, index) => (
        <div
          key={index}
          className="border border-gray-300 rounded-md bg-gray-100 overflow-hidden"
        >
          {/* Question */}
          <motion.button
            onClick={() => toggleFAQ(index)}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.05 }}
            className="w-full text-left px-4 py-4 font-semibold text-orange-600 flex justify-between items-center"
          >
            {faq.question}
            <motion.span
              animate={{ rotate: activeIndex === index ? 45 : 0 }}
              transition={{ duration: 0.2 }}
              className="text-xl"
            >
              +
            </motion.span>
          </motion.button>

          {/* Answer */}
          <AnimatePresence initial={false}>
            {activeIndex === index && (
              <motion.div
                key="content"
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="px-4 text-gray-700 overflow-hidden"
              >
                <div className="py-4">{faq.answer}</div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
}