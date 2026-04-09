"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import Link from "next/link";

const AboutAtlasMentor = () => {
  const dream = [
    "Top Universities",
    "Career Shaping",
    "Expert Guidance",
    "Confidence Building",
    "Personalized Support",
    "Comprehensive Solutions",
  ];

  return (
    <section className="bg-[#f5f7fb] py-16 px-6 md:px-8 lg:px-10 overflow-hidden">
      {/* 🔥 IMPORTANT CHANGE HERE */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-10">
        
        {/* IMAGE SECTION */}
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative pb-16 lg:pb-0 order-2 lg:order-1"
        >
          <img
            src="/class-room.jpg"
            alt="Atlas Mentor"
            className="shadow-lg w-full"
          />

          {/* FLOATING CARD */}
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="
              absolute 
              -bottom-10 right-2 
              md:right-4 
              lg:-right-3 
              border-t-[5px] border-t-blue-500 
              bg-white p-5 md:p-6 
              shadow-xl 
              w-[85%] sm:w-[70%] md:w-[60%] lg:w-[40%]
            "
          >
            <h3 className="text-lg font-semibold mb-2">
              Atlas Mentor <br /> Gateway to a Global Medical Career
            </h3>
            <p className="text-gray-600 text-sm">
              Start your MBBS dream with Atlas Mentor, your trusted partner in
              navigating the journey to becoming a medical professional.
            </p>
          </motion.div>
        </motion.div>

        {/* TEXT SECTION */}
        <div className="order-1 lg:order-2">
          
          {/* LABEL */}
          <motion.p
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="inline-block border px-3 py-1 text-xs tracking-widest mb-4"
          >
            ABOUT ATLAS MENTOR
          </motion.p>

          {/* HEADING */}
          <motion.h2
            initial={{ y: 80, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-3xl md:text-3xl lg:text-4xl font-bold mb-4"
          >
            Start Your MBBS Dream With Atlas Mentor
          </motion.h2>

          {/* DESCRIPTION */}
          <p className="text-gray-600 mb-6">
            At Atlas Mentor, we offer expert guidance, personalized support, and
            comprehensive solutions to help you secure admission to top medical
            universities worldwide. Our dedicated team ensures your journey is
            smooth, confident, and successful.
          </p>

          {/* FEATURES */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-2">
            {dream.map((item, index) => (
              <div key={index} className="py-2 flex items-center gap-2">
                <Check className="w-5 h-5 text-[#667cb0]" />
                {item}
              </div>
            ))}
          </div>

          {/* BUTTON */}
          <Link
            href="#apply"
            className="inline-block bg-[#2c4a9e] mt-5 text-white px-6 py-2.5 hover:bg-[#1e3a8a] transition"
          >
            Apply Now
          </Link>
        </div>
      </div>
    </section>
  );
};

export default AboutAtlasMentor;