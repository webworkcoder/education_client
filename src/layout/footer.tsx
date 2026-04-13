"use client";

import React from "react";
import Link from "next/link";
import {
  Mail,
  Phone,
  MapPin,
  ArrowRight,
  GraduationCap,
  Send,
} from "lucide-react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-[#0a0f1a] pt-24 text-white font-sans">
      <div className="relative -mt-44 z-10 px-6">
        <div className="max-w-6xl mx-auto overflow-hidden rounded-lg  p-[1px] shadow-2xl shadow-blue-900/40">
          <div className="bg-[#0f172a]/90 backdrop-blur-xl rounded-lg p-8 md:p-12">
            <div className="grid lg:grid-cols-2 gap-10 items-center">
              {/* Left Content */}
              <div>
                <span className="inline-block px-4 py-1.5 rounded-full bg-blue-500/10 text-blue-400 text-xs font-bold uppercase tracking-wider mb-4 border border-blue-500/20">
                  Direct Guidance
                </span>
                <h2 className="text-3xl md:text-4xl font-extrabold mb-4 leading-tight">
                  Start Your Medical <br />{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
                    Journey Abroad
                  </span>
                </h2>
                <p className="text-gray-400 text-base md:text-lg max-w-md leading-relaxed">
                  Need expert advice? Leave your details and our senior mentors
                  will call you back within 24 hours.
                </p>
              </div>

              {/* Right Form */}
              {/* RIGHT FORM */}
              <div className="w-full">
                <div className="relative overflow-hidden  bg-white/5 p-6 border border-white/10 shadow-2xl backdrop-blur-sm">
                  {/* Modern Gradient Left Border Indicator */}
                  <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-gradient-to-b from-blue-400 to-cyan-300" />

                  <div className="relative z-10">
                    {/* INPUTS */}
                    <div className="flex flex-col md:flex-row gap-4 mb-4">
                      <div className="w-full md:w-1/2 group">
                        <input
                          type="text"
                          placeholder="Full Name"
                          className="w-full px-4 py-2 bg-slate-800/40 text-white border border-slate-700  outline-none focus:border-blue-400/50 focus:bg-slate-800/60 transition-all placeholder:text-gray-500"
                        />
                      </div>
                      <div className="w-full md:w-1/2 group">
                        <input
                          type="tel"
                          placeholder="Mobile Number"
                          className="w-full px-4 py-2 bg-slate-800/40 text-white border border-slate-700  outline-none focus:border-blue-400/50 focus:bg-slate-800/60 transition-all placeholder:text-gray-500"
                        />
                      </div>
                    </div>

                    {/* BUTTON */}
                    <button className="group w-full bg-gradient-to-r from-[#1e4e96] to-[#2d68b3] text-white py-2.5 font-bold transition-all flex items-center justify-center gap-2 shadow-lg shadow-blue-600/20 active:scale-[0.98] cursor-pointer">
                      Request Callback
                      <Send
                        size={18}
                        className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
                      />
                    </button>

                    <p className="text-[10px] text-center text-gray-500 mt-4 uppercase tracking-widest font-medium">
                      No Spam • Expert Consultation
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* --- MAIN FOOTER --- */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* 1. Brand Section */}
          <div className="space-y-6">
            <Link href="/" className="flex items-center gap-2.5 group">
              <div className="w-10 h-10 bg-gradient-to-br from-[#1e4e96] to-[#2d68b3] rounded-full flex items-center justify-center shadow-lg group-hover:rotate-6 transition-all duration-300">
                <GraduationCap className="text-white w-6 h-6" />
              </div>
              <div className="flex flex-col">
                <span className="font-extrabold text-xl tracking-tight leading-none text-white">
                  TOPSON
                </span>
                <span className="text-[10px] tracking-[0.15em] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300 uppercase leading-none mt-1">
                  Education
                </span>
              </div>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed">
              Leading education consultancy helping students achieve their
              dreams of studying MBBS abroad with transparency and excellence.
            </p>
            <div className="flex gap-4">
              {[FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube].map(
                (Icon, i) => (
                  <Link
                    key={i}
                    href="#"
                    className="w-9 h-9 flex items-center justify-center rounded-full bg-slate-800/50 text-gray-400 hover:bg-[#1e4e96] hover:text-white transition-all border border-slate-700"
                  >
                    <Icon size={16} />
                  </Link>
                ),
              )}
            </div>
          </div>

          {/* 2. Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-white relative inline-block">
              Quick Links
              <span className="absolute -bottom-1 left-0 w-8 h-1 bg-gradient-to-br from-[#1e4e96] to-[#2d68b3] rounded-full"></span>
            </h3>
            <ul className="space-y-3">
              {[
                "About Company",
                "MBBS Countries",
                "Partner Universities",
                "Admission Process",
                "Success Stories",
              ].map((item) => (
                <li key={item}>
                  <Link
                    href="#"
                    className="text-gray-400 text-sm hover:text-blue-400 hover:translate-x-1 transition-all flex items-center gap-2"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-900"></span>
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* 3. Global Locations */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-white relative inline-block">
              Study Abroad
              <span className="absolute -bottom-1 left-0 w-8 h-1 bg-gradient-to-br from-[#1e4e96] to-[#2d68b3] rounded-full"></span>
            </h3>
            <div className="grid grid-cols-2 gap-3">
              {[
                "Russia",
                "Georgia",
                "Uzbekistan",
                "Kazakhstan",
                "Kyrgyzstan",
                "Egypt",
                "Philippines",
                "Moldova",
              ].map((country) => (
                <Link
                  key={country}
                  href="#"
                  className="text-gray-400 text-sm hover:text-blue-400 transition-colors"
                >
                  {country}
                </Link>
              ))}
            </div>
          </div>

          {/* 4. Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-white relative inline-block">
              Get In Touch
              <span className="absolute -bottom-1 left-0 w-8 h-1 bg-gradient-to-br from-[#1e4e96] to-[#2d68b3] rounded-full"></span>
            </h3>
            <ul className="space-y-4">
              <li className="flex gap-3 text-sm text-gray-400">
                <MapPin className="text-blue-500 shrink-0" size={18} />
                <span>Delhi, Chhattisgarh, Jaipur, Chandigarh, Patna</span>
              </li>
              <li className="flex gap-3 text-sm text-gray-400 group">
                <Mail className="text-blue-500 shrink-0" size={18} />
                <span className="group-hover:text-blue-400 transition-colors">
                  info@topsoneducation.com
                </span>
              </li>
              <li className="flex gap-3 text-sm text-gray-400 group">
                <Phone className="text-blue-500 shrink-0" size={18} />
                <div className="flex flex-col">
                  <span className="group-hover:text-blue-400 transition-colors">
                    +91 92205 82597
                  </span>
                  <span className="group-hover:text-blue-400 transition-colors">
                    +91 82268 88163
                  </span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-gray-500 text-sm text-center">
            &copy; {new Date().getFullYear()}{" "}
            <span className="text-gray-300 font-semibold">
              Topson Education
            </span>
            . All rights reserved.
          </p>
          <div className="flex gap-8">
            {["Terms", "Privacy", "Sitemap"].map((text) => (
              <Link
                key={text}
                href="#"
                className="text-gray-500 hover:text-white text-sm transition-colors"
              >
                {text}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
