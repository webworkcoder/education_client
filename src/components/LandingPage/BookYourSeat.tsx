"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { useState } from "react";
import { FaUserDoctor } from "react-icons/fa6";

const choosen = [
  "Top Universities",
  "Expert Guidance",
  "Personalized Support",
  "Career Shaping",
  "Confidence Building",
  "Comprehensive Solutions",
];

const fadeUp = {
  initial: { y: 60, opacity: 0 },
  whileInView: { y: 0, opacity: 1 },
  transition: { duration: 0.6 },
  viewport: { once: true },
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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
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
    if (fileError) return;
    console.log("Form Data:", { ...form, file });
  };

  return (
    <section id="apply" className="bg-gray-200 py-10 px-4">
      <div className="max-w-8xl mx-auto">
        <div className="relative overflow-hidden p-4">
          {/* BACKGROUND IMAGE */}
          <div
            className="absolute inset-0 bg-cover bg-center z-0"
            style={{
              backgroundImage: "url('/class-room.jpg')",
            }}
          />

          <div className="absolute inset-0 bg-[#0b2a5b]/70 z-0" />

          <div className="relative z-10 border border-white">
            <div className="py-20 px-6 md:px-4 text-white">
              <div className="grid md:grid-cols-2 gap-10 items-center">
                {/* LEFT SIDE */}
                <div className="space-y-6">
                  <motion.div {...fadeUp}>
                    <FaUserDoctor className="w-10 h-10 text-orange-400" />
                  </motion.div>

                  <motion.div
                    {...fadeUp}
                    className="text-xs font-semibold border border-[#7784a1] inline-block px-3 py-1 tracking-widest"
                  >
                    PREMIER STUDY ABROAD ADVISORS
                  </motion.div>

                  <motion.h2
                    {...fadeUp}
                    className="text-3xl md:text-4xl font-bold leading-tight max-w-md"
                  >
                    Personalized Consultation with Specialist Advisors!
                  </motion.h2>

                  <motion.p {...fadeUp} className="text-sm">
                    Ready to pursue your MBBS dream?
                  </motion.p>
                  <motion.p {...fadeUp} className="text-base max-w-xl">
                    Join hands with Atlas Mentor and let us guide you to
                    success. Our expert team is here to provide personalized
                    support and comprehensive solutions tailored to your unique
                    needs. Don’t wait—start your journey towards a bright
                    medical future now. Apply today and secure your place in a
                    prestigious medical university abroad!
                  </motion.p>

                  <ul className="grid grid-cols-2 gap-3 text-sm">
                    {choosen.map((text, i) => (
                      <motion.li
                        key={i}
                        {...fadeUp}
                        className="flex items-center gap-2"
                      >
                        <span className="w-5 h-5 bg-orange-400/60 rounded-full flex items-center justify-center">
                          <Check className="w-3 h-3 text-white" />
                        </span>
                        {text}
                      </motion.li>
                    ))}
                  </ul>

                  <motion.button
                    {...fadeUp}
                    className="bg-white text-blue-900 px-7 py-2 text-base font-semibold hover:bg-gray-200 transition"
                  >
                    Why Atlas Mentor?
                  </motion.button>
                </div>

                {/* RIGHT FORM */}
                <motion.div
                  {...fadeUp}
                  className="bg-white text-gray-800 rounded-xl p-6 shadow-2xl"
                >
                  {/* HEADER */}
                  <div className="text-center mb-6">
                    <span className="text-[11px] tracking-widest border border-gray-400 px-4 py-1 inline-block">
                      BOOK YOUR SEAT NOW
                    </span>

                    <h3 className="text-2xl font-bold mt-4 text-[#2c3e50]">
                      Do You Want To Be A Doctor?
                    </h3>

                    <p className="text-sm text-gray-500 mt-3 leading-relaxed">
                      Help us to know you better. Fill in the details and our
                      team will contact you in the next 24 hours.
                    </p>
                  </div>

                  {/* FORM */}
                  <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-4 text-sm">
                    {/* FULL NAME */}
                    <div>
                      <label className="block mb-1 text-gray-700">
                        Full Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        name="fullName"
                        value={form.fullName}
                        onChange={handleChange}
                        placeholder="Full Name"
                        className="w-full border border-gray-300 p-2.5 bg-white outline-none focus:border-blue-500"
                      />
                    </div>

                    {/* MOBILE */}
                    <div>
                      <label className="block mb-1 text-gray-700">
                        Mobile Number <span className="text-red-500">*</span>
                      </label>
                      <input
                        name="mobileNumber"
                        value={form.mobileNumber}
                        onChange={handleChange}
                        placeholder="Mobile Number"
                        className="w-full border border-gray-300 p-2.5 bg-white outline-none focus:border-blue-500"
                      />
                    </div>

                    {/* EMAIL */}
                    <div>
                      <label className="block mb-1 text-gray-700">
                        Email Address <span className="text-red-500">*</span>
                      </label>
                      <input
                        name="emailAddress"
                        value={form.emailAddress}
                        onChange={handleChange}
                        placeholder="Email Address"
                        className="w-full border border-gray-300 p-2.5 bg-white outline-none focus:border-blue-500"
                      />
                    </div>

                    {/* COUNTRY */}
                    <div>
                      <label className="block mb-1 text-gray-700">
                        Preferred Country{" "}
                        <span className="text-red-500">*</span>
                      </label>
                      <select
                        name="preferredCountry"
                        value={form.preferredCountry}
                        onChange={handleChange}
                        className="w-full border border-gray-300 p-2.5 bg-white outline-none focus:border-blue-500"
                      >
                        <option>MBBS In Georgia</option>
                        <option>MBBS in Russia</option>
                        <option>MBBS in Kazakhstan</option>
                      </select>
                    </div>

                    {/* UNIVERSITY */}
                    <div className="col-span-2">
                      <label className="block mb-1 text-gray-700">
                        Preferred University
                      </label>
                      <input
                        name="preferredUniversity"
                        value={form.preferredUniversity}
                        onChange={handleChange}
                        placeholder="Preferred University"
                        className="w-full border border-gray-300 p-2.5 bg-white outline-none focus:border-blue-500"
                      />
                    </div>

                    {/* FILE UPLOAD */}
                    <div className="col-span-2">
                      <label className="block mb-1 text-gray-700">
                        Upload Passport ,10th ,12th , Neet Marksheet
                      </label>
                      <input
                        type="file"
                        accept=".pdf,application/pdf"
                        onChange={handleFileChange}
                        className={`w-full border p-2 bg-white text-xs ${fileError ? "border-red-500" : "border-gray-300"}`}
                      />
                      {fileError && (
                        <p className="text-red-500 text-xs mt-1">{fileError}</p>
                      )}
                    </div>

                    {/* SUBMIT BUTTON */}
                    <button type="submit" className="col-span-2 w-full mt-1 bg-[#5b6fa6] hover:bg-[#4d5f8f] text-white py-3 font-semibold">
                      Submit Now
                    </button>
                  </form>

                  {/* PAY NOW BUTTON */}
                  <div className="mt-4">
                    <button className="bg-[#0f2a56] text-white px-4 py-2 text-sm flex items-center gap-2">
                      <span className="font-bold text-lg">1</span>
                      <div className="text-left leading-tight">
                        <p className="text-xs font-semibold">Pay Now</p>
                        <p className="text-[10px] opacity-80">
                          Secured by Razorpay
                        </p>
                      </div>
                    </button>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookYourSeat;
