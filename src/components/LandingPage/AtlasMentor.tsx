"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { UserCheck, Globe, Settings, Search } from "lucide-react";
import FeatureItem from "../common/FeatureItem";

const features = [
  {
    icon: <UserCheck size={28} />,
    title: "Expert Guidance",
    description:
      "Get personalized support and expert advice from seasoned professionals for navigating MBBS admissions abroad.",
  },
  {
    icon: <Search size={28} />,
    title: "Comprehensive Solutions",
    description:
      "Get complete assistance from university selection to visa guidance, ensuring a smooth transition abroad.",
  },
  {
    icon: <Settings size={28} />,
    title: "Tailored Approach",
    description:
      "Benefit from a personalized strategy tailored to your academic background and career goals.",
  },
  {
    icon: <Globe size={28} />,
    title: "Global Reach",
    description:
      "Explore opportunities across multiple countries with our extensive university network.",
  },
];

const AtlasMentor = () => {
  return (
    <section id="about" className="py-12 lg:py-16 px-4 sm:px-6 lg:px-10 overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-10 lg:gap-16 items-center">

        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="text-xs sm:text-sm tracking-widest border border-gray-600 inline-block px-2 py-1 mb-4 text-gray-700">
            ATLAS MENTOR FOR MBBS JOURNEY
          </p>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 leading-snug">
            Discover the Benefits of Partnering with Atlas Mentor
          </h2>

          <p className="text-gray-600 mt-4 text-sm lg:text-base max-w-2xl">
            Choosing the right partner for your MBBS journey is crucial to
            achieving your dreams. Discover the benefits of partnering with
            Atlas Mentor and embark on your path to a rewarding medical career
            with confidence.
          </p>

          {/* FEATURES */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-1 lg:gap-8 mt-8">
            {features.map((item, index) => (
              <FeatureItem
                key={index}
                icon={item.icon}
                title={item.title}
                description={item.description}
              />
            ))}
          </div>

          <button className="mt-8 px-5 py-3 bg-[#667cb0] text-white text-sm font-bold hover:bg-[#455a8d] transition-colors cursor-pointer">
            Why Atlas Mentor?
          </button>
        </motion.div>

        {/* RIGHT IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="relative mt-10 lg:mt-0"
        >
          <div className="overflow-hidden shadow-lg">
            <Image
              src="/doctors.jpg"
              alt="Doctor"
              width={500}
              height={600}
              className="object-cover w-full h-70 lg:h-105"
            />
          </div>

          {/* QUOTE CARD */}
          <div className="relative lg:absolute lg:-left-2 lg:bottom-0 bg-white p-4 shadow-md w-full lg:max-w-xs border-l-4 border-blue-600 mt-4 lg:mt-0">
            <p className="text-sm sm:text-base text-gray-600">
              Empowering dreams, shaping futures – Atlas Mentor guides your
              journey.
            </p>
            <p className="mt-2 font-bold text-gray-800 text-sm sm:text-base">
              Atlas Mentor
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default AtlasMentor;
