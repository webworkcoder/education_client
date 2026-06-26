import HeroBaneer from "@/components/common/countries/HeroBaneer";
import UniversityCard from "@/components/common/countries/UniversityCard";
import { bosniaUniversities } from "@/data/universities";

const country = {
  name: "Bosnia",
  slug: "bosnia",
  flag: "/flags/bosnia.png",
  image: "/flags/bosnia.png",
  description:
    "Bosnia and Herzegovina is an emerging destination for international students seeking quality higher education in Europe. With internationally recognized universities, affordable fees, and a rich cultural environment, Bosnia offers excellent opportunities for students pursuing medicine and other professional programs.",
};

const BosniaUniversities = () => {
  return (
    <section className="pb-15">
      <HeroBaneer country={country} />
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-6 py-12 px-4 md:px-8">
        {bosniaUniversities.map((uni, index) => (
          <UniversityCard key={index} {...uni} />
        ))}
      </div>
    </section>
  );
};

export default BosniaUniversities;
