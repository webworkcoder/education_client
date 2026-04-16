"use client";

import { motion } from "framer-motion";
import {
  Check,
  ShieldCheck,
  FileUp,
  ArrowRight,
  GraduationCap,
} from "lucide-react";
import { useState } from "react";

const choosen = [
  "Top Universities",
  "Expert Guidance",
  "Personalized Support",
  "Career Shaping",
  "Confidence Building",
  "Comprehensive Solutions",
];

const options = ["MBBS In Georgia", "MBBS in Russia", "MBBS in Kazakhstan"];

// Unique Staggered Animation
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.5 } },
};

const MAX_FILE_SIZE_MB = 5;

const BookYourSeat = () => {
  const [fileError, setFileError] = useState<string | null>(null);
  const [form, setForm] = useState({
    fullName: "",
    mobileNumber: "",
    emailAddress: "",
    preferredCountry: "MBBS In Georgia",
    preferredUniversity: "",
  });
  const [file, setFile] = useState<File | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selected = e.target.files?.[0];
    if (!selected) return;
    if (selected.size > MAX_FILE_SIZE_MB * 1024 * 1024) {
      setFileError(`File size must be under ${MAX_FILE_SIZE_MB}MB.`);
      e.target.value = "";
      setFile(null);
    } else {
      setFileError(null);
      setFile(selected);
    }
  };

  const handleSubmit = (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form Data:", { ...form, file });
  };

  return (
    <section id="apply" className="bg-[#f4f7fa] py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="relative overflow-hidden rounded-[2rem] shadow-xl bg-[#0b2a5b]">
          {/* Background Elements */}
          <div className="absolute inset-0 opacity-20 z-0">
            <div className="absolute top-[-10%] left-[-5%] w-72 h-72 bg-blue-400 rounded-full blur-[120px]" />
            <div className="absolute bottom-[-10%] right-[-5%] w-96 h-96 bg-gradient-to-br from-[#1e4e96] to-[#2d68b3] rounded-full blur-[150px]" />
          </div>

          <div className="relative z-10 grid lg:grid-cols-12 gap-0">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="lg:col-span-5 p-8 md:p-12 lg:p-16 text-white"
            >
              <motion.div
                variants={itemVariants}
                className="flex items-center gap-3 mb-6"
              >
                <div className="p-3 bg-gradient-to-br from-[#1e4e96] to-[#2d68b3] rounded-xl shadow-lg shadow-[#1e4e96]">
                  <GraduationCap className="w-8 h-8 text-white" />
                </div>
                <span className="font-bold tracking-[0.2em] text-orange-400 text-sm">
                  TOPSON EDUCATION
                </span>
              </motion.div>

              <motion.h2
                variants={itemVariants}
                className="text-4xl md:text-5xl font-extrabold leading-[1.1] mb-6"
              >
                Empowering <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-300 to-orange-500">
                  Future Doctors
                </span>
              </motion.h2>

              <motion.p
                variants={itemVariants}
                className="text-blue-100/80 text-lg mb-8 leading-relaxed"
              >
                Start your journey towards a bright medical future now. Our
                expert team provides personalized support tailored to your
                unique needs.
              </motion.p>

              <motion.div
                variants={itemVariants}
                className="grid grid-cols-1 gap-4 mb-10"
              >
                {choosen.map((text, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-green-500/20 flex items-center justify-center">
                      <Check className="w-3 h-3 text-green-400" />
                    </div>
                    <span className="text-sm text-blue-50/90 font-medium">
                      {text}
                    </span>
                  </div>
                ))}
              </motion.div>

              <motion.button
                variants={itemVariants}
                className="group flex items-center gap-2 text-white font-semibold border-b-2 border-[#1e4e96] pb-1 hover:text-orange-400 transition-all cursor-pointer"
              >
                Learn about our process
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </motion.button>
            </motion.div>

            {/* RIGHT SIDE: Form (7 Columns) */}
            <div className="lg:col-span-7 bg-white/95 backdrop-blur-md p-8 md:p-12 lg:p-16">
              <div className="max-w-lg mx-auto">
                <div className="mb-10">
                  <h3 className="text-2xl font-bold text-slate-800 mb-2">
                    Book Your Counseling Seat
                  </h3>
                  <div className="w-20 h-1.5 bg-gradient-to-br from-[#1e4e96] to-[#2d68b3] rounded-full" />
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-black uppercase tracking-wider">
                        Full Name *
                      </label>
                      <input
                        name="fullName"
                        onChange={handleChange}
                        className="w-full border-b-2 border-slate-200 py-2 outline-none focus:border-[#0b2a5b] transition-colors text-slate-800 placeholder:text-slate-300"
                        placeholder="Enter your full name"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-black uppercase tracking-wider">
                        Mobile Number *
                      </label>
                      <input
                        name="mobileNumber"
                        onChange={handleChange}
                        className="w-full border-b-2 border-slate-200 py-2 outline-none focus:border-[#0b2a5b] transition-colors text-slate-800"
                        placeholder="Enter your mobile number"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-bold text-black uppercase tracking-wider">
                      Email Address *
                    </label>
                    <input
                      name="emailAddress"
                      onChange={handleChange}
                      className="w-full border-b-2 border-slate-200 py-2 outline-none focus:border-[#0b2a5b] transition-colors text-slate-800"
                      placeholder="Enter your email address"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-black uppercase tracking-wider">
                        Preferred Country
                      </label>
                      <div className="relative">
                        <select
                          name="preferredCountry"
                          onChange={handleChange}
                          className="w-full border-b-2 border-slate-200 py-2 outline-none focus:border-[#0b2a5b] transition-colors text-slate-800 appearance-none bg-transparent"
                        >
                          {options.map((opt) => (
                            <option key={opt} value={opt}>
                              {opt}
                            </option>
                          ))}
                        </select>
                        <div className="absolute right-0 bottom-3 pointer-events-none">
                          <svg
                            className="w-4 h-4 text-slate-400"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M19 9l-7 7-7-7"
                            />
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-black uppercase tracking-wider">
                        University
                      </label>
                      <input
                        name="preferredUniversity"
                        onChange={handleChange}
                        className="w-full border-b-2 border-slate-200 py-2 outline-none focus:border-[#0b2a5b] transition-colors text-slate-800"
                        placeholder="If any..."
                      />
                    </div>
                  </div>

                  <div className="bg-slate-50 p-4 rounded-xl border border-dashed border-slate-300 cursor-pointer">
                    <div className="flex items-center gap-4">
                      <div className="p-2 bg-white rounded-lg shadow-sm">
                        <FileUp className="w-6 h-6 text-slate-400" />
                      </div>
                      <div className="flex-1">
                        <p className="text-[11px] font-bold text-black uppercase mb-1">
                          Upload Marksheets / Passport
                        </p>
                        <input
                          type="file"
                          accept=".pdf"
                          onChange={handleFileChange}
                          className="text-xs text-slate-400 file:hidden cursor-pointer"
                        />
                      </div>
                    </div>
                    {fileError && (
                      <p className="text-red-500 text-[10px] mt-2 font-bold">
                        {fileError}
                      </p>
                    )}
                  </div>

                  <button
                    type="submit"
                    className="w-full cursor-pointer bg-gradient-to-br from-[#1e4e96] to-[#2d68b3] text-white py-3 rounded-full font-bold  transition-all  hover:shadow-[#1e4e96]/30 hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0"
                  >
                    Send Application
                  </button>

                  <div className="flex items-center justify-between pt-4">
                    <div className="flex items-center gap-2">
                      <ShieldCheck className="w-5 h-5 text-green-500" />
                      <span className="text-[10px] font-bold text-slate-400 uppercase tracking-tighter">
                        Verified by Razorpay
                      </span>
                    </div>
                    <button className="flex items-center gap-2 bg-slate-100 hover:bg-slate-200 px-4 py-2 rounded-lg transition-colors">
                      <div className="w-1.5 h-1.5 rounded-full bg-orange-400 animate-pulse" />
                      <span className="text-xs font-bold text-[#0b2a5b]">
                        Registration Fee via Razorpay
                      </span>
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookYourSeat;
