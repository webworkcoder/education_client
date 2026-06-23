import HeroBaneer from "@/components/common/countries/HeroBaneer";
import UniversityCard from "@/components/common/countries/UniversityCard";
import { bangladeshUniversities } from "@/data/universities";

const country = {
  name: "Bangladesh",
  slug: "bangladesh",
  flag: "/flags/bangladesh.png",
  image: "/flags/bangladesh.png",
  description:
    "Bangladesh is an emerging destination for Indian students to study MBBS. With top government medical colleges, affordable fees, cultural affinity, and WHO/NMC recognized degrees, Bangladesh offers a quality medical education opportunity close to home.",
};

const BangladeshUniversities = () => {
  return (
    <section className="pb-15">
      <HeroBaneer country={country} />
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-6 py-12 px-4 md:px-8">
        {bangladeshUniversities.map((uni, index) => (
          <UniversityCard key={index} {...uni} />
        ))}
      </div>
    </section>
  );
};

export default BangladeshUniversities;
