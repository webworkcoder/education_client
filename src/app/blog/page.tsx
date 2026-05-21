"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Link from "next/link";
import BlogCard from "@/components/common/BlogCard";
import { BookOpen } from "lucide-react";

type BlogType = {
  _id: string;
  title: string;
  description: string;
  coverImage: string[];
  slug: string;
  createdAt: string;
};

const BlogsPage = () => {
  const [blogs, setBlogs] = useState<BlogType[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const res = await fetch(
          // "https://education-admin-two.vercel.app/api/blog",
          "http://localhost:3001/api/blog",
        );
        const data = await res.json();
        setBlogs(data.data || []);
      } catch (error) {
        console.error("Fetch error:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchBlogs();
  }, []);

  return (
    <section className="pb-20">
      {/* HERO */}
      <div className="w-full min-h-[180px] h-70 md:h-80 relative overflow-hidden bg-[#0b2a5b]">
        <div className="absolute inset-0 z-0 opacity-10">
          <div className="absolute right-10 top-1/2 -translate-y-1/2 w-64 h-64 rounded-full bg-[#1e4e96]" />
          <div className="absolute left-20 top-1/4 w-40 h-40 rounded-full bg-[#2d68b3]" />
        </div>

        <div className="relative z-10 h-full flex items-center min-h-[180px]">
          <div className="w-full max-w-7xl mx-auto px-6 md:px-16 text-white">
            <h1 className="text-3xl md:text-4xl font-bold mb-3">
              Blogs From Doctors
            </h1>
            <div className="flex items-center gap-2 text-sm border border-white/30 rounded-md w-fit backdrop-blur-sm bg-white/10">
              <Link href="/">
                <span className="px-3 py-1">Home</span>
              </Link>
              <span className="opacity-70">›</span>
              <span className="px-3 py-1">Blogs</span>
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
            <span className="text-[#1e4e96] font-bold tracking-[0.3em] text-xs uppercase mb-3 block">
              From Our Doctors
            </span>
            <h2 className="text-3xl md:text-5xl font-black text-[#0b2a5b] mb-4">
              All Doctor Blogs
            </h2>
            <div className="w-24 h-1.5 bg-gradient-to-r from-[#1e4e96] to-[#2d68b3] mx-auto rounded-full" />
          </motion.div>

          {loading ? (
            <div className="flex justify-center items-center py-24">
              <div className="w-10 h-10 border-4 border-[#1e4e96] border-t-transparent rounded-full animate-spin" />
            </div>
          ) : blogs.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-24 text-center">
              <div className="w-20 h-20 rounded-full bg-slate-100 flex items-center justify-center mb-5">
                <BookOpen className="text-slate-300 w-9 h-9" />
              </div>
              <h3 className="text-2xl font-bold text-[#0b2a5b]">
                No Blogs Yet
              </h3>
              <p className="text-slate-500 text-sm mt-2">
                Check back soon for stories from our doctors.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {blogs.map((blog, index) => (
                <motion.div
                  key={blog._id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.08 }}
                  viewport={{ once: true }}
                >
                  <BlogCard
                    title={blog.title}
                    description={blog.description}
                    coverImage={blog.coverImage}
                    slug={blog.slug}
                    createdAt={blog.createdAt}
                  />
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default BlogsPage;
