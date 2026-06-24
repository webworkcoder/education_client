import HeroBaneer from "@/components/common/countries/HeroBaneer";
import UniversityCard from "@/components/common/countries/UniversityCard";
import { georgiaUniversities } from "@/data/universities";

const country = {
  name: "Georgia",
  slug: "georgia",
  flag: "/flags/georgia.png",
  image: "/flags/georgia.png",
  description:
    "Georgia is one of the top destinations for Indian students to study MBBS. With WHO and NMC recognized universities, affordable fees, English-medium programs, and European-standard education, Georgia offers an excellent medical education opportunity.",
};

const GeorgiaUniversities = () => {
  return (
    <section className="pb-15">
      <HeroBaneer country={country} />
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-6 py-12 px-4 md:px-8">
        {georgiaUniversities.map((uni, index) => (
          <UniversityCard key={index} {...uni} />
        ))}
      </div>
    </section>
  );
};

export default GeorgiaUniversities;
