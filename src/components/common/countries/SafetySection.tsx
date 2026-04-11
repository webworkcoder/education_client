"use client";
import { motion } from "framer-motion";
type Point = {
  title: string;
  desc: string;
};

type Props = {
  country: string;
  title?: string;
  description: string;
  points: Point[];
  footer?: string;
};

const SafetySection = ({
  country,
  title,
  description,
  points,
  footer,
}: Props) => {
  return (
    <section className="w-full bg-white py-12 px-6 md:px-16">
      {/* HEADER */}
      <div className="max-w-7xl mx-auto">
        <span className="text-xs tracking-widest border px-3 py-1 uppercase">
          {country}
        </span>

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold mt-4 mb-4"
        >
          {title || `Is ${country} safe for Indian medical students?`}
        </motion.h2>

        <p className="text-gray-700 mb-6">{description}</p>

        {/* POINTS */}
        <div className="space-y-4">
          {points.map((item, index) => (
            <div key={index} className="flex gap-3">
              {/* CHECK ICON */}
              <span className="text-blue-600 mt-1">✔</span>

              <p className="text-gray-700">
                <span className="font-semibold">{item.title}</span> –{" "}
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        {/* FOOTER */}
        {footer && <p className="mt-6 text-gray-800">{footer}</p>}
      </div>
    </section>
  );
};

export default SafetySection;
