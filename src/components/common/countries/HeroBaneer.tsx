"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";

type Props = {
  country?: {
    name: string;
    slug: string;
    flag: string;
  };
  title?: string;
};

const HeroBaneer = ({ country, title }: Props) => {
  const pageTitle = title || (country ? `MBBS In ${country.name}` : "Page");

  return (
    <section className="relative h-75 md:h-87 flex items-center overflow-hidden bg-[#2b4a94] text-white">
      {/* BACKGROUND TEXT */}
      <div
        className={`absolute inset-0 grid ${
          title ? "grid-cols-1" : "grid-cols-2"
        } items-center opacity-10 px-6`}
      >
        {/* LEFT TEXT (only for country) */}
        {!title && country && (
          <h1 className="text-3xl md:text-6xl font-bold leading-tight">
            Study MBBS <br />
            in
            <span className="font-bold text-orange-600"> {country.name} </span>
            <br />
            for Indian Students
          </h1>
        )}

        {/* IMAGE */}
        <div
          className={`${title ? "flex justify-center" : "flex justify-end"} h-full`}
        >
          <img
            src={country ? country.flag : "/uzbekistan.jpg"}
            alt={country ? country.name : "Default Country"}
            className={`object-contain ${title ? "w-full h-full" : "h-full"}`}
          />
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto w-full px-6">
        <h1 className="text-3xl md:text-5xl font-bold mb-3">{pageTitle}</h1>

        {/* BREADCRUMB */}
        <div className="text-sm">
          <Link
            href="#"
            className="border border-white px-3 py-1 inline-flex items-center gap-2 hover:bg-white hover:text-[#2f4b8f] transition"
          >
            <span>Home</span>
            <span>&gt;</span>
            <span>{title || country?.name}</span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroBaneer;
