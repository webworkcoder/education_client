"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { UserCheck, Globe, Settings, Search } from "lucide-react";
import FeatureItem from "../common/FeatureItem";

const features = [
  {
    icon: <UserCheck size={30} />,
    title: "Expert Guidance",
    description:
      "Get personalized support and expert advice from seasoned professionals for navigating MBBS admissions abroad.",
  },
  {
    icon: <Search size={30} />,
    title: "Comprehensive Solutions",
    description:
      "Get complete assistance from university selection to visa guidance, ensuring a smooth transition abroad.",
  },
  {
    icon: <Settings size={30} />,
    title: "Tailored Approach",
    description:
      "Benefit from a personalized strategy tailored to your academic background and career goals.",
  },
  {
    icon: <Globe size={30} />,
    title: "Global Reach",
    description:
      "Explore opportunities across multiple countries with our extensive university network.",
  },
];

const AtlasMentor = () => {
  return (
    <section id="about" className="py-16 pb-30 px-4 md:px-10 overflow-hidden">
      <div className="max-w-7xl mx-auto grid md:grid-cols-[1.2fr_0.8fr] gap-10 items-center">
        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="text-base tracking-widest border border-gray-600 inline-block px-2 py-1 mb-4 text-gray-700">
            ATLAS MENTOR FOR MBBS JOURNEY
          </p>

          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-snug">
            Discover the Benefits of Partnering with Atlas Mentor
          </h2>

          <p className="text-gray-600 mt-4 text-sm md:text-base max-w-2xl">
            Choosing the right partner for your MBBS journey is crucial to
            achieving your dreams. Discover the benefits of partnering with
            Atlas Mentor and embark on your path to a rewarding medical career
            with confidence.
          </p>

          {/* FEATURES */}
          <div className="grid sm:grid-cols-2 gap-8 mt-8">
            {features.map((item, index) => (
              <FeatureItem
                key={index}
                icon={item.icon}
                title={item.title}
                description={item.description}
              />
            ))}
          </div>

          <button className="mt-6 px-3 py-2 border bg-[#667cb0] text-white font-bold hover:bg-[#455a8d] cursor-pointer ">Why Atlas Mentor?</button>
        </motion.div>

        {/* RIGHT IMAGE*/}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="relative  bottom-10"
        >
          <div className="overflow-hidden shadow-lg">
            <Image
              src="/doctors.jpg"
              alt="Doctor"
              width={500}
              height={600}
              className="object-cover w-full h-[420px]"
            />
          </div>

          <div className="absolute -left-2 bg-white p-4 shadow-md max-w-sm border-l-4 border-blue-600">
            <p className="text-base text-gray-600">
              Empowering dreams, shaping futures – Atlas Mentor guides your
              journey.
            </p>
            <p className="mt-2 font-bold text-gray-800 text-base">
              Atlas Mentor
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AtlasMentor;
