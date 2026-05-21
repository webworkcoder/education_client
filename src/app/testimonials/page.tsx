"use client";

import { motion } from "framer-motion";
import VideoCards from "@/components/common/VideoCards";
import { useEffect, useState } from "react";
import Link from "next/link";

type TestimonialType = {
  title: string;
  description: string;
  video: string[];
};

const TestimonialsPage = () => {
  const [testimonials, setTestimonials] = useState<TestimonialType[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchVideo = async () => {
      try {
        const res = await fetch(
          // "https://education-admin-two.vercel.app/api/testimonials",
          "http://localhost:3001/api/testimonials",
        );
        const data = await res.json();
        setTestimonials(data.data || []);
      } catch (error) {
        console.error("Fetch error:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchVideo();
  }, []);

  return (
    <section className="pb-20">
      {/* HERO */}
      <div className="w-full h-70 md:h-80 relative overflow-hidden bg-[#0b2a5b]">
        <div className="absolute inset-0 z-0 opacity-10">
          <div className="absolute right-10 top-1/2 -translate-y-1/2 w-64 h-64 rounded-full bg-orange-400" />
          <div className="absolute left-20 top-1/4 w-40 h-40 rounded-full bg-orange-500" />
        </div>

        <div className="relative z-10 h-full flex items-center min-h-[180px]">
          <div className="w-full max-w-7xl mx-auto px-6 md:px-16 text-white">
            <h1 className="text-3xl md:text-4xl font-bold mb-3">
              Success Stories
            </h1>

            <div className="flex items-center gap-2 text-sm border border-white/30 rounded-md w-fit backdrop-blur-sm bg-white/10">
              <Link href="/">
                <span className="px-3 py-1">Home</span>
              </Link>
              <span className="opacity-70">›</span>
              <span className="px-3 py-1">Testimonials</span>
            </div>
          </div>
        </div>
      </div>

      {/* CONTENT */}
      <div className="bg-[#f8fafc] px-4 md:px-10 py-16">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <span className="text-orange-500 font-bold tracking-[0.3em] text-xs uppercase mb-3 block">
              All Success Stories
            </span>
            <h2 className="text-3xl md:text-5xl font-black text-[#0b2a5b] mb-4">
              Hear From Our Future Doctors
            </h2>
            <div className="w-24 h-1.5 bg-gradient-to-r from-orange-400 to-orange-600 mx-auto rounded-full" />
          </motion.div>

          {loading ? (
            <div className="flex justify-center items-center py-24">
              <div className="w-10 h-10 border-4 border-orange-400 border-t-transparent rounded-full animate-spin" />
            </div>
          ) : (
            <div className="space-y-24">
              {testimonials.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="relative"
                >
                  <div className="mb-10 flex flex-col items-center text-center">
                    <h3 className="text-2xl md:text-3xl font-extrabold text-[#0b2a5b] mb-3">
                      {item.title}
                    </h3>
                    <p className="text-slate-500 text-base max-w-2xl leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
                    {item.video.map((url, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: idx * 0.08 }}
                        viewport={{ once: true }}
                      >
                        <VideoCards data={{ videoUrl: url }} />
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsPage;
