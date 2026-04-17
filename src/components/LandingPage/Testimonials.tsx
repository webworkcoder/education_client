/* eslint-disable react-hooks/set-state-in-effect */
"use client";

import { motion } from "framer-motion";
import VideoCards from "../common/VideoCards";
import { useEffect, useState } from "react";

type TestimonialType = {
  title: string;
  description: string;
  video: string[];
};

const Testimonials = () => {
  const [testimonials, setTestimonials] = useState<TestimonialType[]>([]);

  const fetchVideo = async () => {
    try {
      const res = await fetch(
        "https://education-admin-two.vercel.app/api/testimonials",
      );
      const data = await res.json();
      setTestimonials(data.data || []);
    } catch (error) {
      console.error("Fetch error:", error);
    }
  };

  useEffect(() => {
    fetchVideo();
  }, []);

  return (
    <section className="px-4 md:px-10 bg-[#f8fafc] overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-orange-500 font-bold tracking-[0.3em] text-xs uppercase mb-3 block">
            Success Stories
          </span>
          <h2 className="text-3xl md:text-5xl font-black text-[#0b2a5b] mb-4">
            Hear From Our Future Doctors
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-orange-400 to-orange-600 mx-auto rounded-full" />
        </motion.div>

        <div className="space-y-24">
          {testimonials.map((item, index) => (
            <div key={index} className="relative">
              {/* Category Info */}
              <div className="mb-10 flex flex-col items-center text-center">
                <h3 className="text-2xl md:text-3xl font-extrabold text-[#0b2a5b] mb-3">
                  {item.title}
                </h3>
                <p className="text-slate-500 text-base max-w-2xl leading-relaxed">
                  {item.description}
                </p>
              </div>

              {/* Videos Grid - Horizontal scroll on mobile, grid on desktop */}
              <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
                {item.video.map((url, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: idx * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <VideoCards data={{ videoUrl: url }} />
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
