import HeroBaneer from "@/components/common/countries/HeroBaneer";
import UniversityCard from "@/components/common/countries/UniversityCard";

const country = {
  name: "Russia",
  slug: "russia",
  flag: "/russiaflag.jpg",
  image: "/russiaflag.jpg",
  description:
    "Russia is one of the best destinations for Indian students to study MBBS. With world-class medical universities, affordable fees, and globally recognized degrees, Russia offers an excellent opportunity for students who want to become doctors.",
};

const data = [
  {
    name: "Lomonosov Moscow State University",
    image: "/russia.jpg",
    location: "Moscow, Russia",
    desc:"Kuban State Medical University (KSMU) Specifically, KSMU’s headquarters is in Krasnodar. The school which has a reputation of being one of the oldest and the most prominent universities in Russia dating back to 1920, is well known for its quality education in medicine, pharmacy, and dentistry."
  },
  {
    name: "Kazan Federal University",
    image: "/russia.jpg",
    location: "Kazan, Russia",
    desc:"In 1932, Bashkir State Medical University commonly referred to as BSMU, was founded in Ufa which is in Russia and has become one of the nations oldest medical schools."
  },
  {
    name: "Crimea Federal University",
    image: "/russia.jpg",
    location: "Simferopol, Russia",
    desc:"Founded in 1804, this University is based in one of the oldest cities in Russia, Kazan. It is reputed to be one of the largest and oldest universities in the country."
  },
  {
    name: "Crimea Federal University",
    image: "/russia.jpg",
    location: "Simferopol, Russia",
    desc:"Founded in 1804, this University is based in one of the oldest cities in Russia, Kazan. It is reputed to be one of the largest and oldest universities in the country."
  },
  {
    name: "Crimea Federal University",
    image: "/russia.jpg",
    location: "Simferopol, Russia",
    desc:"Founded in 1804, this University is based in one of the oldest cities in Russia, Kazan. It is reputed to be one of the largest and oldest universities in the country."
  },
  {
    name: "Crimea Federal University",
    image: "/russia.jpg",
    location: "Simferopol, Russia",
    desc:"Founded in 1804, this University is based in one of the oldest cities in Russia, Kazan. It is reputed to be one of the largest and oldest universities in the country."
  },
];

const RussiaUniversities = () => {
  return (
    <section className="pb-15">
      <HeroBaneer country={country} />
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-6 py-15">
        {data.map((uni, index) => (
          <UniversityCard key={index} {...uni} />
        ))}
      </div>
    </section>
  );
};

export default RussiaUniversities;
