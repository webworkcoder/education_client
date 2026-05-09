"use client";

import {
  User,
  DollarSign,
  FileText,
  Globe,
  PhoneCall,
  BookOpenCheck,
  Sparkles,
} from "lucide-react";
import { motion } from "framer-motion";
import WhyUsCard from "../common/WhyCard";

const features = [
  {
    icon: <User className="w-7 h-7" />,
    title: "Personalized Counseling",
    desc: "Get expert one-to-one guidance to choose the right university and build a successful medical career abroad.",
  },
  {
    icon: <DollarSign className="w-7 h-7" />,
    title: "Affordable MBBS Guidance",
    desc: "Explore budget-friendly medical universities with complete fee transparency and financial planning support.",
  },
  {
    icon: <FileText className="w-7 h-7" />,
    title: "Admission & Documentation",
    desc: "Receive professional support for applications, documentation, and visa processing with a smooth workflow.",
  },
  {
    icon: <Globe className="w-7 h-7" />,
    title: "International Opportunities",
    desc: "Access globally recognized universities offering quality education, modern infrastructure, and practical learning.",
  },
  {
    icon: <PhoneCall className="w-7 h-7" />,
    title: "Complete Student Support",
    desc: "From counseling to post-admission assistance, our team supports students throughout their study abroad journey.",
  },
  {
    icon: <BookOpenCheck className="w-7 h-7" />,
    title: "Career-Focused Guidance",
    desc: "We help students make informed academic decisions that support long-term growth in the medical field.",
  },
];

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.1, delayChildren: 0.1 },
  },
};

const WhyChooseUs = () => {
  return (
    <section
      id="whyus"
      className="bg-[#f8fafc] py-20 px-4 overflow-hidden relative"
    >
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-40 bg-gradient-to-b from-blue-50/50 to-transparent" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-100 mb-6"
          >
            <Sparkles size={14} className="text-[#1e4e96]" />
            <span className="text-[10px] font-bold text-[#1e4e96] uppercase tracking-[0.2em]">
              Why Students Trust Us
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-black text-[#0b2a5b] mb-6 tracking-tight"
          >
            Why Choose <span className="text-[#1e4e96]">Topson Education?</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-slate-500 text-lg max-w-2xl mx-auto"
          >
            We provide trusted guidance, transparent admission support, and
            personalized assistance to help students achieve their dream of
            studying MBBS abroad.
          </motion.p>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          {features.map((item, index) => (
            <WhyUsCard
              key={index}
              icon={item.icon}
              title={item.title}
              desc={item.desc}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
