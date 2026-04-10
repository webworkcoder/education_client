"use client";

import Link from "next/link";
import React from "react";

const Startjourny = () => {
  return (
    <section className="relative w-full md:h-125 flex items-center py-25 md:py-0">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url(‘/doctors.jpg’)",
        }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-blue-900/70"></div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto w-full px-6 md:px-10 text-white">
        <div className="max-w-2xl">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Start Your MBBS Journey Today!
          </h1>

          <p className="text-lg mb-4">
            Ready to pursue your dream of studying MBBS abroad?
          </p>

          <p className="text-sm md:text-base leading-relaxed mb-4">
            <span className="font-bold">Atlas Mentor</span> is here to help you
            every step of the way. From expert guidance on university selection
            to comprehensive support with applications and visa processes, we
            ensure a seamless transition to your chosen destination.
          </p>

          <p className="text-sm md:text-base mb-6">
            Don’t wait any longer—apply now and let us help you achieve your
            aspirations in the field of medicine.
          </p>

          <Link
            href="#apply"
            className="bg-white/30 hover:bg-white/50 text-white text-base px-6 py-3 transition inline-block"
          >
            Apply Now !
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Startjourny;
