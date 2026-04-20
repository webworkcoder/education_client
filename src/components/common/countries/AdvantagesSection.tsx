"use client";

import { motion } from "framer-motion";

type Advantage = {
  title: string;
  desc: string;
};

type Props = {
  country: string;
  description: string;
  data: Advantage[];
};

const AdvantagesSection = ({ country, description, data }: Props) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      transition: { duration: 0.5, ease: "easeOut" as any },
    },
  };

  return (
    <section className="w-full py-12 px-6 md:px-8 bg-[#f8f9fa] overflow-hidden">
      <div className="">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-5xl font-black mb-6 text-[#0b1f4d] tracking-tight">
            Advantages of Studying MBBS in{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1e4e96] to-[#2d68b3]">
              {country}
            </span>
          </h2>
          <p className="text-gray-500 mb-12 text-lg leading-relaxed max-w-3xl">
            {description}
          </p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 gap-x-16 gap-y-10"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {data.map((item, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ x: 10 }}
              className="group cursor-default"
            >
              <div className="flex gap-4 items-start">
                {/* Number indicator with animation */}
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-100 text-[#1e4e96] flex items-center justify-center font-bold text-sm group-hover:bg-[#1e4e96] group-hover:text-white transition-colors duration-300">
                  {index + 1}
                </span>

                <div>
                  <h3 className="font-bold text-xl mb-2 text-[#0b1f4d] group-hover:text-[#1e4e96] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-base leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default AdvantagesSection;
