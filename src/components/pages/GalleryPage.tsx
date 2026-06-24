/* eslint-disable @next/next/no-img-element */
"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Images } from "lucide-react";

type GalleryItem = {
  src: string;
  title: string;
  category: string;
};

const galleryItems: GalleryItem[] = [
  // Team
  { src: "/founder/ceo.jpeg", title: "CEO & Founder", category: "Team" },
  // { src: "/founder/team_head.jpeg", title: "Dr Madhurendar Kumar – Team Head Bihar", category: "Team" },
  // { src: "/founder/uttrakhand_head.jpeg", title: "Dr Anshu Tiwari – Team Head Uttrakhand", category: "Team" },
  { src: "/founder/director.jpeg", title: "Dr Masroor – Director Management", category: "Team" },

  // Russia
  { src: "/collegegroups/Russia/Permuniversity.jpg", title: "Perm State Medical University", category: "Russia" },
  { src: "/collegegroups/Russia/Orenburg.webp", title: "Orenburg State Medical University", category: "Russia" },
  { src: "/collegegroups/Russia/MariState.jpg", title: "Mari State University", category: "Russia" },
  { src: "/collegegroups/Russia/Kalmyk.jpg", title: "Kalmyk State University", category: "Russia" },
  { src: "/collegegroups/Russia/TverState.png", title: "Tver State Medical University", category: "Russia" },
  { src: "/collegegroups/Russia/PskovState.jpg", title: "Pskov State University", category: "Russia" },
  { src: "/collegegroups/Russia/AstrakhanState.jpg", title: "Astrakhan State Medical University", category: "Russia" },

  // Nepal
  { src: "/collegegroups/Nepal/nnmc.jpg", title: "NNMC Birgunj", category: "Nepal" },
  { src: "/collegegroups/Nepal/manipall.webp", title: "Manipal College of Medical Sciences", category: "Nepal" },

  // Bangladesh
  { src: "/collegegroups/Bangladesh/Dhaka.jpg", title: "Dhaka Medical College", category: "Bangladesh" },
  { src: "/collegegroups/Bangladesh/Salimullah.jpg", title: "Sir Salimullah Medical College", category: "Bangladesh" },
  { src: "/collegegroups/Bangladesh/Chittagong.jpg", title: "Chittagong Medical College", category: "Bangladesh" },
  { src: "/collegegroups/Bangladesh/Mymensingh.jpg", title: "Mymensingh Medical College", category: "Bangladesh" },
  { src: "/collegegroups/Bangladesh/Rajshahi.webp", title: "Rajshahi Medical College", category: "Bangladesh" },

  // Georgia
  { src: "/collegegroups/Georgia/Tbilisi.jpeg", title: "Tbilisi State Medical University", category: "Georgia" },
  { src: "/collegegroups/Georgia/David.jpg", title: "David Tvildiani Medical University", category: "Georgia" },
  { src: "/collegegroups/Georgia/NewVision.jpg", title: "New Vision University", category: "Georgia" },

  // Uzbekistan
  { src: "/collegegroups/Tashkent/Tashkent1.jpeg", title: "Tashkent Medical Academy", category: "Uzbekistan" },
  { src: "/collegegroups/Tashkent/Tashkent2.jpeg", title: "Tashkent Medical Academy", category: "Uzbekistan" },
  { src: "/collegegroups/Tashkent/Tashkent3.jpeg", title: "Tashkent Medical Academy", category: "Uzbekistan" },
  { src: "/collegegroups/Samarkand/samarkand1.jpeg", title: "Samarkand State Medical University", category: "Uzbekistan" },
  { src: "/collegegroups/Samarkand/samarkand2.jpeg", title: "Samarkand State Medical University", category: "Uzbekistan" },
  { src: "/collegegroups/Samarkand/samarkand3.jpeg", title: "Samarkand State Medical University", category: "Uzbekistan" },
];

const categories = ["All", "Team", "Russia", "Nepal", "Bangladesh", "Georgia", "Uzbekistan"];

const GalleryPage = () => {
  const [active, setActive] = useState("All");
  const [lightbox, setLightbox] = useState<GalleryItem | null>(null);

  const filtered =
    active === "All" ? galleryItems : galleryItems.filter((g) => g.category === active);

  return (
    <div className="min-h-screen bg-[#f8faff] pb-20">
      {/* Hero */}
      <div className="relative bg-gradient-to-br from-[#0b2a5b] to-[#1e4e96] py-20 px-4 text-center overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('/russia.jpg')] bg-cover bg-center" />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="relative z-10"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 mb-4">
            <Images size={14} className="text-blue-200" />
            <span className="text-[10px] font-bold text-blue-100 uppercase tracking-[0.2em]">
              Photo Gallery
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-black text-white leading-tight mb-3">
            Our Gallery
          </h1>
          <p className="text-blue-200 text-lg max-w-xl mx-auto">
            Explore our universities, campuses, and team across the world.
          </p>
        </motion.div>
      </div>

      {/* Filter Bar */}
      <div className="sticky top-16 z-20 bg-white border-b border-slate-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-3">

          {/* Mobile: dropdown */}
          <div className="sm:hidden">
            <select
              value={active}
              onChange={(e) => setActive(e.target.value)}
              className="w-full px-4 py-2.5 rounded-full border border-slate-200 bg-slate-50 text-sm font-semibold text-[#0b2a5b] focus:outline-none focus:ring-2 focus:ring-[#1e4e96]"
            >
              {categories.map((cat) => (
                <option key={cat} value={cat}>{cat}</option>
              ))}
            </select>
          </div>

          {/* Desktop: pill tabs */}
          <div className="hidden sm:flex gap-2 flex-wrap">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
                  active === cat
                    ? "bg-[#1e4e96] text-white shadow-md"
                    : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

        </div>
      </div>

      {/* Grid */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-4"
        >
          <AnimatePresence>
            {filtered.map((item, i) => (
              <motion.div
                key={item.src}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3, delay: i * 0.04 }}
                className="group relative overflow-hidden rounded-xl shadow-sm hover:shadow-xl transition-shadow duration-300 cursor-pointer bg-slate-200 aspect-[4/3]"
                onClick={() => setLightbox(item)}
              >
                <img
                  src={item.src}
                  alt={item.title}
                  className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0b2a5b]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-3">
                  <div>
                    <span className="text-[10px] font-bold text-blue-200 uppercase tracking-widest">
                      {item.category}
                    </span>
                    <p className="text-white text-sm font-semibold leading-tight">
                      {item.title}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {filtered.length === 0 && (
          <p className="text-center text-slate-400 py-20 text-lg">No images in this category yet.</p>
        )}
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
            onClick={() => setLightbox(null)}
          >
            <motion.div
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.85, opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="relative max-w-4xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={lightbox.src}
                alt={lightbox.title}
                className="w-full max-h-[80vh] object-contain rounded-xl shadow-2xl"
              />
              <div className="mt-3 text-center">
                <span className="text-blue-300 text-xs uppercase tracking-widest font-bold">
                  {lightbox.category}
                </span>
                <p className="text-white font-semibold text-lg">{lightbox.title}</p>
              </div>
              <button
                onClick={() => setLightbox(null)}
                className="absolute -top-4 -right-4 w-9 h-9 rounded-full bg-white text-[#0b2a5b] font-black text-lg flex items-center justify-center shadow-lg hover:bg-red-500 hover:text-white transition-colors"
              >
                ×
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default GalleryPage;
