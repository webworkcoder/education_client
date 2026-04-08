"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="relative h-[90vh] flex items-center">

      {/* BACKGROUND IMAGE */}
      <div className="absolute inset-0">
        <img
          src="/heroimg.jpg" 
          alt="hero"
          className="w-full h-full object-cover object-center"
        />
        {/* DARK OVERLAY */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0b1f4d]/90 to-transparent"></div>
      </div>

      {/* CONTENT */}
      <div className="relative px-5 sm:px-15 text-white">
        
        {/* SMALL TAG */}
        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="uppercase tracking-widest text-sm font-semibold border inline-block px-3 py-1  mb-4"
        >
          Welcome to TopSun Edu
        </motion.p>

        {/* TITLE */}
        <motion.h1
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-3xl md:text-6xl font-bold leading-tight max-w-3xl"
        >
          Atlas Mentor Shaping Your Medical Career Globally
        </motion.h1>

        {/* DESCRIPTION */}
        <motion.p
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-4 text-sm md:text-base max-w-2xl"
        >
          At Atlas Mentor owned by Elitestudy Abroad Pvt. Ltd. , we specialize in guiding aspiring medical professionals toward their dreams of studying MBBS abroad. Our expert team provides personalized support, ensuring you secure admission to prestigious medical universities worldwide. We are dedicated to shaping your career with confidence and excellence, paving the way for your success in the medical field.
        </motion.p>

        {/* BUTTON */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-6"
        >
          <Link
            href="#apply"
            className="bg-[#405b9c] hover:bg-[#133585] px-6 py-3 rounded-md font-semibold inline-block"
          >
            Apply Now
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;