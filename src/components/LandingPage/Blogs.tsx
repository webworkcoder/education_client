"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Link from "next/link";
import BlogCard from "../common/BlogCard";

type BlogType = {
  _id: string;
  title: string;
  description: string;
  coverImage: string[];
  slug: string;
  createdAt: string;
};

const Blogs = () => {
  const [blogs, setBlogs] = useState<BlogType[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const res = await fetch(
          "https://education-admin-two.vercel.app/api/blog",
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

  const visibleBlogs = blogs.slice(0, 3);

  if (!loading && blogs.length === 0) return null;

  return (
    <section className="px-4 md:px-10 py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-[#1e4e96] font-bold tracking-[0.3em] text-xs uppercase mb-3 block">
            From Our Doctors
          </span>
          <h2 className="text-3xl md:text-5xl font-black text-[#0b2a5b] mb-4">
            Blogs From Doctors
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-[#1e4e96] to-[#2d68b3] mx-auto rounded-full" />
        </motion.div>

        {/* Blog Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {visibleBlogs.map((blog, index) => (
            <motion.div
              key={blog._id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
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

        {/* View More Button */}
        {blogs.length > 3 && (
          <div className="flex justify-center mt-12">
            <Link
              href="/blog"
              className="px-8 py-3 bg-[#1e4e96] hover:bg-[#0b2a5b] text-white font-bold rounded-full transition-colors duration-200"
            >
              View More
            </Link>
          </div>
        )}
      </div>
    </section>
  );
};

export default Blogs;
