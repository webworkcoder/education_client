import HeroBaneer from "@/components/common/countries/HeroBaneer";
import UniversityCard from "@/components/common/countries/UniversityCard";
import { universities } from "@/data/universities";

const country = {
  name: "Russia",
  slug: "russia",
  flag: "/russiaflag.jpg",
  image: "/russiaflag.jpg",
  description:
    "Russia is one of the best destinations for Indian students to study MBBS. With world-class medical universities, affordable fees, and globally recognized degrees, Russia offers an excellent opportunity for students who want to become doctors.",
};

const RussiaUniversities = () => {
  return (
    <section className="pb-15">
      <HeroBaneer country={country} />
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 py-12 px-4 md:px-8">
        {universities.map((uni, index) => (
          <UniversityCard key={index} {...uni} />
        ))}
      </div>
    </section>
  );
};

export default RussiaUniversities;
