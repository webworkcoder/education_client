"use client";

import UniversityCard from "./UniversityCard";

type University = {
  name: string;
  image: string;
  location: string;
  slug: string;
};

type Props = {
  country: string;
  data: University[];
};

const UniversitiesSection = ({ country, data }: Props) => {
  return (
    <section className="w-full bg-[#0b1f4d] py-12 px-6 md:px-8">
      {/* TITLE */}
      <h2 className="text-center text-white text-2xl md:text-3xl font-bold mb-10">
        Universities For MBBS in {country}
      </h2>

      {/* GRID */}
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-6">
        {data.map((uni, index) => (
          <UniversityCard key={index} {...uni} />
        ))}
      </div>
    </section>
  );
};

export default UniversitiesSection;
