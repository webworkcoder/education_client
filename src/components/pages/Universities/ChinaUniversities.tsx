import HeroBaneer from "@/components/common/countries/HeroBaneer";
import UniversityCard from "@/components/common/countries/UniversityCard";
import { chinaUniversities } from "@/data/universities";

const country = {
  name: "China",
  slug: "china",
  flag: "/chinalogo.png",
  image: "/chinalogo.png",
  description:
    "China is one of the best destinations for Indian students to study MBBS. With world-class medical universities, affordable fees, and globally recognized degrees, China offers an excellent opportunity for students who want to become doctors.",
};

const ChinaUniversities = () => {
  return (
    <section className="pb-15">
      <HeroBaneer country={country} />
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-6 py-12 px-4 md:px-8">
        {chinaUniversities.map((uni, index) => (
          <UniversityCard key={index} {...uni} />
        ))}
      </div>
    </section>
  );
};

export default ChinaUniversities;
