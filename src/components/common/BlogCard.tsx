/* eslint-disable @next/next/no-img-element */
"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, CalendarDays } from "lucide-react";
import Link from "next/link";

type BlogCardProps = {
  title: string;
  description: string;
  coverImage: string[];
  slug: string;
  createdAt?: string;
};

const BlogCard: React.FC<BlogCardProps> = ({
  title,
  description,
  coverImage,
  slug,
  createdAt,
}) => {
  const image = coverImage?.[0] || "/doctors.jpg";

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true, amount: 0.15 }}
      className="group relative bg-white overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 border border-slate-100 flex flex-col h-full"
    >
      {/* Image */}
      <div className="relative h-56 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0b2a5b]/90 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />

        {createdAt && (
          <div className="absolute bottom-4 left-4 flex items-center gap-1.5 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full shadow-sm">
            <CalendarDays className="w-3.5 h-3.5 text-[#1e4e96]" />
            <span className="text-[10px] font-bold text-[#0b2a5b] uppercase tracking-wider">
              {new Date(createdAt).toLocaleDateString("en-US", {
                month: "short",
                day: "numeric",
                year: "numeric",
              })}
            </span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-grow bg-white relative">
        <div className="w-12 h-1 bg-gradient-to-r from-[#1e4e96] to-[#2d68b3] mb-4 group-hover:w-20 transition-all duration-500" />

        <h3 className="text-xl font-extrabold text-[#0b2a5b] mb-3 group-hover:text-[#1e4e96] transition-colors line-clamp-2">
          {title}
        </h3>

        <p className="text-sm text-slate-500 leading-relaxed mb-6 line-clamp-3">
          {description}
        </p>

        <div className="mt-auto">
          <Link
            href={`/blog/${slug}`}
            className="flex items-center gap-2 text-sm font-bold text-[#0b2a5b] group-hover:text-[#1e4e96] transition-all uppercase tracking-widest"
          >
            Read More
            <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
          </Link>
        </div>
      </div>

      {/* Top border glow on hover */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#1e4e96] to-[#2d68b3] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
    </motion.div>
  );
};

export default BlogCard;
