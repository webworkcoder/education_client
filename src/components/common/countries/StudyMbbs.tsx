"use client";

import Image from "next/image";

type Props = {
  country: { name: string; image: string; description: string };
};

const CountryHero = ({ country }: Props) => {
  return (
    <section className="w-full bg-white py-12 px-6 md:px-16">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        {/* LEFT CONTENT */}
        <div>
          <span className="text-xs tracking-widest border px-3 py-1 inline-block mb-4 uppercase">
            {country.name}
          </span>

          <h1 className="text-3xl md:text-4xl font-bold leading-snug mb-4">
            Study MBBS in {country.name} for Indian Students
          </h1>

          <p className="text-gray-600 mb-6">{country.description}</p>

          <button className="bg-[#6c7bbf] hover:bg-[#5a68a8] text-white px-6 py-3  transition">
            Universities In {country.name}?
          </button>
        </div>

        {/* RIGHT IMAGE */}
        <div className="w-full">
          <Image
            src={country.image}
            alt={`Study MBBS in ${country.name}`}
            width={600}
            height={400}
            className="rounded-md w-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default CountryHero;
