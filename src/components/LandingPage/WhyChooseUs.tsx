"use client";

import {
  User,
  DollarSign,
  FileText,
  Globe,
  Phone,
  BookOpen,
} from "lucide-react";
import { motion } from "framer-motion";
import WhyUsCard from "../common/WhyCard";

const WhyChooseUs = () => {
  const features = [
    {
      icon: <User className="w-8 h-8 text-white" />,
      title: "One-On-One Counseling",
      desc: "Receive personalized guidance from our experienced mentors to ensure your application stands out.",
    },
    {
      icon: <DollarSign className="w-8 h-8 text-white" />,
      title: "Financial Aid Resources",
      desc: "Access comprehensive resources and support to secure financial aid for your medical studies abroad.",
    },
    {
      icon: <FileText className="w-8 h-8 text-white" />,
      title: "Application & Visa Assistance",
      desc: "Benefit from expert assistance with your application process and visa requirements, ensuring a smooth journey.",
    },
    {
      icon: <Globe className="w-8 h-8 text-white" />,
      title: "Travel & Accommodation",
      desc: "We help in arranging your travel and accommodation, making your transition seamless and comfortable.",
    },
    {
      icon: <Phone className="w-8 h-8 text-white" />,
      title: "Transitions Support",
      desc: "Get support before departure and after arrival including settling assistance.",
    },
    {
      icon: <BookOpen className="w-8 h-8 text-white" />,
      title: "Exam Preparation Support",
      desc: "Prepare using online and offline resources for essential exams.",
    },
  ];

  // Parent animation
  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  // Child animation (premium feel)
  const fadeUp = {
    hidden: {
      opacity: 0,
      y: 50,
      scale: 0.95,
      filter: "blur(6px)",
    },
    show: {
      opacity: 1,
      y: 0,
      scale: 1,
      filter: "blur(0px)",
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1] as const,
      },
    },
  };

  return (
    <section id="whyus" className="bg-gradient-to-r from-[#3f5fa3] to-[#5b76b3] py-24 px-4 overflow-hidden">
      <div className="max-w-7xl mx-auto text-center text-white">

        {/* TOP TAG */}
        <motion.p
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-sm font-bold bg-white text-[#344978] tracking-widest border inline-block px-3 py-1 mb-4"
        >
          WHY CHOOSE US
        </motion.p>

        {/* TITLE */}
        <motion.p
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold mb-4"
        >
          Why choose Atlas Mentor?
        </motion.p>

        {/* DESCRIPTION */}
        <motion.p
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="text-sm md:text-base max-w-2xl mx-auto mb-12 text-gray-200"
        >
          We provide personalized support to help you achieve your MBBS dreams abroad.
        </motion.p>

        {/* GRID */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-6"
        >
          {features.map((item, index) => (
            <motion.div
              key={index}
              variants={fadeUp}
              whileHover={{
                scale: 1.05,
                y: -5,
                transition: { duration: 0.3 },
              }}
            >
              <WhyUsCard
                icon={item.icon}
                title={item.title}
                desc={item.desc}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUs;