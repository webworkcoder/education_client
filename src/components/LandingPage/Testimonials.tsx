/* eslint-disable react-hooks/set-state-in-effect */
"use client";

/* eslint-disable @typescript-eslint/no-explicit-any */

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
    <section className="py-16 px-4 md:px-10 bg-gray-100 overflow-x-hidden">
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
        className="max-w-7xl mx-auto text-center"
      >
        <p className="text-sm tracking-widest font-semibold text-[#34495e] border border-[#34495e] inline-block px-3 py-1 mb-4">
          HEAR FROM STUDENTS
        </p>

        {/* <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
          Testimonials & Reviews
        </h2>

        <p className="text-gray-600 text-base mt-4 max-w-xl mx-auto">
          Read what our students say about their journey with Atlas Mentor.
        </p> */}

        <div className="space-y-12">
          {testimonials.map((item, index) => (
            <div key={index}>
              {/* Title */}
              <h3 className="text-3xl md:text-4xl font-bold text-gray-800">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 text-base mt-4 max-w-xl mx-auto mb-6">
                {item.description}
              </p>

              {/* Videos */}
              <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
                {item.video.map((url, idx) => (
                  <VideoCards key={idx} data={{ videoUrl: url }} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Testimonials;
