"use client";

import { motion } from "framer-motion";
import { team } from "@/data/teamdata";

const TeamSection = () => {
  const TeamCard = ({
    image,
    name,
    role,
  }: {
    image: string;
    name: string;
    role: string;
  }) => (
    <div className="bg-white p-2 shadow-md overflow-hidden text-center flex-1">
      <img src={image} alt={name} className="w-full h-52 sm:h-72 md:h-105 object-cover" />
      <div className="p-4">
        <h3 className="font-semibold text-lg text-gray-900">{name}</h3>
        <p className="text-sm text-blue-600">{role}</p>
      </div>
    </div>
  );


  // Parent container animation (stagger effect)
  const containerVariant = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.25,
      },
    },
  };

  return (
    <section className="bg-[#f5f5f5] py-16 px-4 md:px-10">
      <div className="max-w-7xl mx-auto grid md:grid-cols-[1fr_2.5fr] gap-10 md:gap-16 items-start">
        {/* LEFT */}
        <div className="text-center md:text-left">
          <span className="inline-block text-xs font-semibold tracking-widest border border-gray-400 px-3 py-1 text-gray-600">
            OUR TEAM
          </span>

          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mt-4 text-gray-900 leading-tight"
          >
            Meet Atlas Mentor <br /> Dedicated Team
          </motion.h2>

          <div className="w-12 h-1 bg-blue-600 mt-4 mx-auto md:mx-0" />

          <p className="text-gray-600 mt-4 text-sm md:text-base leading-relaxed max-w-sm mx-auto md:mx-0">
            Meet the dedicated team behind AtlasMentor (Elitestudy Abroad Pvt.
            Ltd.)! Led by{" "}
            <span className="font-bold">Dr. Jitesh & Pramod Kumar</span>, the
            visionary and an experienced{" "}
            <span className="font-bold">Company Director. Mr. Raj,</span> the
            dynamic <span className="font-bold">CEO</span>, drives innovation
            and growth, ensuring excellence in every endeavor. Together, this
            expert team is committed to guiding and mentoring individuals toward
            success, making AtlasMentor a trusted name in its field.
          </p>
        </div>

        {/* RIGHT */}
        <motion.div
          variants={containerVariant}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row gap-6"
        >
          {team.map((member, index) => (
            <TeamCard
              key={index}
              image={member.image}
              name={member.name}
              role={member.role}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TeamSection;
