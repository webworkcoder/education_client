/* eslint-disable @next/next/no-img-element */
"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import { motion } from "framer-motion";
import { CalendarDays, ArrowLeft } from "lucide-react";

type BlogType = {
  title: string;
  description: string;
  content: string;
  coverImage: string[];
  slug: string;
  createdAt: string;
};

const BlogDetailPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const [blog, setBlog] = useState<BlogType | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!slug) return;
    const fetchBlog = async () => {
      try {
        const res = await fetch(
          `https://education-admin-two.vercel.app/api/blog/${slug}`,
          // `http://localhost:3001/api/blog/${slug}`,
        );
        const data = await res.json();
        console.log("data single blog -> ", data);
        if (data.success) setBlog(data.data);
      } catch (error) {
        console.error("Fetch error:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchBlog();
  }, [slug]);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="w-10 h-10 border-4 border-[#1e4e96] border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  if (!blog) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen text-center px-6">
        <h2 className="text-2xl font-bold text-[#0b2a5b] mb-3">
          Blog Not Found
        </h2>
        <Link
          href="/blog"
          className="text-[#1e4e96] font-semibold flex items-center gap-2 mt-2"
        >
          <ArrowLeft className="w-4 h-4" /> Back to Blogs
        </Link>
      </div>
    );
  }

  return (
    <section className="pb-20">
      {/* HERO with cover image */}
      <div className="w-full min-h-[220px] md:min-h-[340px] relative overflow-hidden bg-[#0b2a5b]">
        {blog.coverImage?.[0] && (
          <img
            src={blog.coverImage[0]}
            alt={blog.title}
            className="absolute inset-0 w-full h-full object-cover opacity-30"
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0b2a5b] via-[#0b2a5b]/70 to-transparent" />

        <div className="relative z-10 h-full flex items-end min-h-[220px] md:min-h-[340px]">
          <div className="w-full max-w-4xl mx-auto px-6 md:px-10 pb-10 text-white">
            <div className="flex items-center gap-2 text-sm mb-5">
              <Link
                href="/"
                className="opacity-70 hover:opacity-100 transition-opacity"
              >
                Home
              </Link>
              <span className="opacity-50">›</span>
              <Link
                href="/blog"
                className="opacity-70 hover:opacity-100 transition-opacity"
              >
                Blogs
              </Link>
              <span className="opacity-50">›</span>
              <span className="opacity-90 line-clamp-1">{blog.title}</span>
            </div>
            <h1 className="text-2xl md:text-4xl font-black leading-tight mb-4">
              {blog.title}
            </h1>
            {blog.createdAt && (
              <div className="flex items-center gap-2 text-sm text-white/70">
                <CalendarDays className="w-4 h-4" />
                {new Date(blog.createdAt).toLocaleDateString("en-US", {
                  month: "long",
                  day: "numeric",
                  year: "numeric",
                })}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* CONTENT */}
      <div className="bg-[#f8fafc] px-4 md:px-10 py-14">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto"
        >
          {/* Cover image gallery */}
          {blog.coverImage.length > 1 && (
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-10">
              {blog.coverImage.slice(1).map((img, i) => (
                <img
                  key={i}
                  src={img}
                  alt={`${blog.title} image ${i + 2}`}
                  className="w-full h-48 object-cover rounded-xl shadow-sm"
                />
              ))}
            </div>
          )}

          {/* Description */}
          <p className="text-lg text-slate-600 leading-relaxed mb-8 font-medium border-l-4 border-[#1e4e96] pl-5">
            {blog.description}
          </p>

          {/* Content */}
          <div className="prose prose-lg max-w-none text-slate-700 leading-relaxed whitespace-pre-wrap">
            {blog.content}
          </div>

          {/* Back link */}
          <div className="mt-14 pt-8 border-t border-slate-200">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-sm font-bold text-[#0b2a5b] hover:text-[#1e4e96] transition-colors uppercase tracking-widest"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to All Blogs
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default BlogDetailPage;
