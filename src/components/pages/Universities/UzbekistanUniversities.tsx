import HeroBaneer from "@/components/common/countries/HeroBaneer";
import UniversityCard from "@/components/common/countries/UniversityCard";
import { universities } from "@/data/universities";


const country = {
  name: "Uzbekistan",
  slug: "Uzbekistan",
  flag: "/Uzbekistanflag.jpg",
  image: "/Uzbekistanflag.jpg",
  description:
    "Uzbekistan is one of the best destinations for Indian students to study MBBS. With world-class medical universities, affordable fees, and globally recognized degrees, Uzbekistan offers an excellent opportunity for students who want to become doctors.",
};

const UzbekistanUniversities = () => {
  return (
    <section className="pb-15">
      <HeroBaneer country={country} />
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-6 py-15">
        {universities.map((uni, index) => (
          <UniversityCard key={index} {...uni} />
        ))}
      </div>
    </section>
  );
};

export default UzbekistanUniversities;
