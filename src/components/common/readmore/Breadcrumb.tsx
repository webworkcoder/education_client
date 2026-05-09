"use client";

import Link from "next/link";
import { ChevronRight, Home, Hash } from "lucide-react";
import { motion } from "framer-motion";

type BreadcrumbItem = {
  label: string;
  href?: string;
};

type Props = {
  items: BreadcrumbItem[];
};

const Breadcrumb = ({ items }: Props) => {
  return (
    <div className="w-full bg-white border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto py-4 px-4 md:px-8 flex flex-col md:flex-row gap-4 md:items-center md:justify-between">
        {/* LEFT SIDE: Navigation Path */}
        <nav
          className="flex items-center space-x-2 overflow-x-auto no-scrollbar whitespace-nowrap"
          aria-label="Breadcrumb"
        >
          <Link
            href="/"
            className="flex items-center text-gray-400 hover:text-[#1e4e96] transition-colors"
          >
            <Home size={16} />
          </Link>

          {items.map((item, index) => (
            <div key={index} className="flex items-center gap-2">
              <ChevronRight size={14} className="text-gray-300 shrink-0" />

              {item.href ? (
                <Link
                  href={item.href}
                  className="text-sm font-medium text-gray-500 hover:text-[#1e4e96] transition-all"
                >
                  {item.label}
                </Link>
              ) : (
                <motion.span
                  initial={{ opacity: 0, x: -5 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="text-sm font-bold text-[#1e4e96] truncate max-w-[150px] md:max-w-none"
                >
                  {item.label}
                </motion.span>
              )}
            </div>
          ))}
        </nav>

        {items[1] && (
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="inline-flex items-center gap-2 bg-gradient-to-r from-[#1e4e96] to-[#2d68b3] text-white text-[12px] uppercase tracking-wider py-1.5 px-4 font-black rounded-full self-start md:self-auto shadow-md shadow-blue-900/10"
          >
            <Hash size={12} className="text-blue-200" />
            {items[1].label}
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default Breadcrumb;
