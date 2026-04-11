"use client";

import { motion } from "framer-motion";

type CardItem = {
  title: string;
  desc: string;
  dark?: boolean;
};

type Props = {
  data: CardItem[];
  sectionClass?: string;
};

const InfoCards = ({ data, sectionClass }: Props) => {
  return (
    <section
      className={
        sectionClass ||
        "py-16 bg-[#f5f7fb] px-4 md:px-10 overflow-hidden"
      }
    >
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-0 border">
        {data.map((item, index) => (
          <div
            key={index}
            className={`relative border px-6 pb-8 pt-0 ${
              item.dark
                ? "bg-gradient-to-r from-[#4b66a1] to-[#1e3a8a] text-white"
                : "bg-white text-gray-700"
            }`}
          >
            <motion.div
              initial={{ x: 100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.7, delay: index * 0.2 }}
              viewport={{ once: true }}
              className={`inline-block px-4 py-2 pt-3 mb-4 font-bold text-2xl ${
                item.dark
                  ? "bg-white text-blue-900"
                  : "bg-[#5b6f9e] text-white"
              }`}
            >
              {item.title}
            </motion.div>

            <p className="leading-relaxed text-sm md:text-base">
              {item.desc}
            </p>

            <div className="w-10 h-1 bg-orange-500 mt-6"></div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default InfoCards;