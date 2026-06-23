import HeroBaneer from "@/components/common/countries/HeroBaneer";
import UniversityCard from "@/components/common/countries/UniversityCard";
import { nepalUniversities } from "@/data/universities";

const country = {
  name: "Nepal",
  slug: "nepal",
  flag: "/nepallogo.png",
  image: "/nepallogo.png",
  description:
    "Nepal is an excellent destination for Indian students to study MBBS. With recognized medical colleges, affordable fees, cultural similarity, and no language barrier, Nepal offers a convenient and quality medical education opportunity.",
};

const NepalUniversities = () => {
  return (
    <section className="pb-15">
      <HeroBaneer country={country} />
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-6 py-12 px-4 md:px-8">
        {nepalUniversities.map((uni, index) => (
          <UniversityCard key={index} {...uni} />
        ))}
      </div>
    </section>
  );
};

export default NepalUniversities;
