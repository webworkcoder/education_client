import AdvantagesSection from "@/components/common/countries/AdvantagesSection";
import EligibilitySection from "@/components/common/countries/EligibilitySection";
import HeroBaneer from "@/components/common/countries/HeroBaneer";
import InfoTable from "@/components/common/countries/InfoTable";
import LoanSection from "@/components/common/countries/LoanSection";
import SafetySection from "@/components/common/countries/SafetySection";
import RussiaHero from "@/components/common/countries/StudyMbbs";
import UniversitiesSection from "@/components/common/countries/UniversitiesSection";
import InfoCards from "@/components/common/InfoCards";
import FAQSection from "@/components/LandingPage/FAQSection";
import { faqs } from "@/data/faqs";
import { uzbekistanUniversities } from "@/data/universities";

const tableData = [
  {
    id: 1,
    slug: "population",
    label: "Population",
    value: "36,000,000+",
  },
  {
    id: 2,
    slug: "exchange-rate",
    label: "Exchange Rate",
    value: "1 Uzbekistan Som = ₹0.0065 INR (Approx)",
  },
  {
    id: 3,
    slug: "climate",
    label: "Climate",
    value: "Continental Climate",
  },
  {
    id: 4,
    slug: "location",
    label: "Location",
    value: "Central Asia",
  },
  {
    id: 5,
    slug: "capital",
    label: "Capital",
    value: "Tashkent",
  },
  {
    id: 6,
    slug: "currency",
    label: "Currency",
    value: "Uzbekistani Som (UZS)",
  },
  {
    id: 7,
    slug: "travel-time",
    label: "Travel Time from Delhi",
    value: "3–4 Hours",
  },
  {
    id: 8,
    slug: "time-difference",
    label: "Time Difference",
    value: "-30 Minutes IST",
  },
  {
    id: 9,
    slug: "student-count",
    label: "International Students",
    value: "10,000+",
  },
  {
    id: 10,
    slug: "origin-countries",
    label: "Students From Different Countries",
    value: ["India", "Kazakhstan", "Russia", "Nepal", "Bangladesh"],
  },
  {
    id: 11,
    slug: "languages",
    label: "Languages Spoken",
    value: "Uzbek, Russian & English",
  },
  {
    id: 12,
    slug: "academic-year",
    label: "Academic Session",
    value: "September – June",
  },
  {
    id: 13,
    slug: "course-duration",
    label: "MBBS Course Duration",
    value: "6 Years Including Internship",
  },
];

const data = [
  {
    id: "feat-1",
    slug: "affordable-medical-study",
    title: "Affordable Medical Education",
    desc: "Uzbekistan offers low-cost MBBS programs with quality education, making it an ideal destination for Indian students.",
    dark: false,
  },
  {
    id: "feat-2",
    slug: "recognized-medical-universities",
    title: "Recognized Medical Universities",
    desc: "Medical universities in Uzbekistan are approved by WHO, NMC, and other international medical bodies.",
    dark: false,
  },
  {
    id: "feat-3",
    slug: "student-friendly-country",
    title: "Safe & Student-Friendly",
    desc: "Uzbekistan provides a secure environment, modern hostels, and a welcoming atmosphere for international students.",
    dark: true,
  },
];

const eligibilityData = [
  {
    id: "elig-1",
    slug: "academic-criteria",
    title: "Academic Qualification",
    desc: "Students must complete 12th grade with at least 50% marks in Physics, Chemistry, and Biology.",
  },
  {
    id: "elig-2",
    slug: "neet-required",
    title: "NEET Qualification",
    desc: "NEET qualification is mandatory for Indian students applying for MBBS abroad.",
  },
  {
    id: "elig-3",
    slug: "minimum-age",
    title: "Age Requirement",
    desc: "Students must be at least 17 years old during the admission year.",
  },
  {
    id: "elig-4",
    slug: "english-language",
    title: "English Proficiency",
    desc: "Basic English understanding is required since MBBS courses are taught in English.",
  },
];

const safetyData = {
  description:
    "Uzbekistan is considered one of the safest and most student-friendly countries in Central Asia for Indian medical students.",

  points: [
    {
      id: "safe-1",
      slug: "low-crime-rate",
      title: "Low Crime Rate",
      desc: "Uzbekistan maintains a safe environment with strict law enforcement and secure public places.",
    },
    {
      id: "safe-2",
      slug: "friendly-local-community",
      title: "Friendly Local Community",
      desc: "Indian students receive warm hospitality and support from local residents.",
    },
    {
      id: "safe-3",
      slug: "international-student-support",
      title: "International Student Support",
      desc: "Universities provide dedicated support services for foreign students.",
    },
    {
      id: "safe-4",
      slug: "secure-hostels",
      title: "Secure Hostel Facilities",
      desc: "Medical universities offer secure hostels equipped with modern amenities.",
    },
    {
      id: "safe-5",
      slug: "comfortable-lifestyle",
      title: "Comfortable Student Lifestyle",
      desc: "Affordable living costs and modern facilities make student life easier.",
    },
  ],

  footer:
    "Students can enjoy a peaceful and comfortable academic journey in Uzbekistan by following university guidelines and standard safety precautions.",
};

const advantagesData = {
  description:
    "Uzbekistan has become a preferred destination for MBBS abroad because of affordable tuition fees, recognized universities, and quality education.",

  points: [
    {
      id: "adv-1",
      slug: "budget-friendly-fees",
      title: "Affordable Tuition Fees",
      desc: "MBBS in Uzbekistan is much more affordable compared to private colleges in India.",
    },
    {
      id: "adv-2",
      slug: "global-recognition",
      title: "Globally Recognized Degree",
      desc: "Degrees are recognized by WHO, NMC, and other international medical councils.",
    },
    {
      id: "adv-3",
      slug: "no-capitation",
      title: "No Donation Required",
      desc: "Students can secure admission without any capitation or donation fees.",
    },
    {
      id: "adv-4",
      slug: "english-medium-program",
      title: "English-Medium Education",
      desc: "MBBS programs are available fully in English for international students.",
    },
    {
      id: "adv-5",
      slug: "modern-medical-training",
      title: "Modern Medical Infrastructure",
      desc: "Universities provide advanced laboratories, hospitals, and clinical exposure.",
    },
    {
      id: "adv-6",
      slug: "easy-admission",
      title: "Simple Admission Process",
      desc: "The admission process is straightforward with minimal documentation.",
    },
    {
      id: "adv-7",
      slug: "safe-country",
      title: "Safe & Friendly Environment",
      desc: "Uzbekistan is safe, peaceful, and suitable for international students.",
    },
    {
      id: "adv-8",
      slug: "part-time-opportunities",
      title: "Practical Exposure",
      desc: "Students gain practical experience through clinical training programs.",
    },
    {
      id: "adv-9",
      slug: "cultural-comfort",
      title: "Cultural Similarities",
      desc: "Indian students adapt easily because of cultural similarities and food availability.",
    },
    {
      id: "adv-10",
      slug: "low-living-cost",
      title: "Affordable Living Expenses",
      desc: "Hostel and daily living expenses are economical for international students.",
    },
  ],
};

const country = {
  id: "country-uzbekistan",
  name: "Uzbekistan",
  slug: "uzbekistan",
  flag: "/uzbekistanflag.jpg",
  image: "/doc2.jpeg",
  description:
    "Uzbekistan is rapidly becoming a top destination for Indian students pursuing MBBS abroad. With affordable tuition fees, globally recognized medical universities, English-medium education, and modern infrastructure, Uzbekistan offers an excellent opportunity for students aiming to build a successful medical career.",
};

const loanData = {
  description:
    "Indian students can easily apply for education loans to study MBBS in Uzbekistan through government and private banks.",

  points: [
    {
      id: "loan-1",
      slug: "neet-score",
      title: "NEET Qualification",
      desc: "A valid NEET score is required for education loan approval.",
    },
    {
      id: "loan-2",
      slug: "recognized-university",
      title: "Recognized University",
      desc: "The selected university should be approved by NMC and recognized internationally.",
    },
    {
      id: "loan-3",
      slug: "loan-expenses",
      title: "Expense Coverage",
      desc: "Education loans cover tuition fees, hostel expenses, travel, and living costs.",
    },
    {
      id: "loan-4",
      slug: "documents-required",
      title: "Required Documents",
      desc: "Admission letter, passport, NEET scorecard, and family income proof are required.",
    },
    {
      id: "loan-5",
      slug: "easy-repayment-plan",
      title: "Flexible Repayment",
      desc: "Students receive repayment flexibility with grace periods after course completion.",
    },
  ],
};
const UzbekistanPage = () => {
  return (
    <section className="pb-15">
      <HeroBaneer country={country} />
      <RussiaHero country={country} />
      <InfoTable data={tableData} />;
      <InfoCards
        data={data}
        sectionClass="w-full bg-white py-12 px-4 md:px-8 overflow-hidden"
      />
      <EligibilitySection
        country="Uzbekistan"
        gridClassName="md:grid-cols-2"
        data={eligibilityData}
      />
      <UniversitiesSection country="Uzbekistan" data={uzbekistanUniversities} />
      <SafetySection
        country="Uzbekistan"
        description={safetyData.description}
        points={safetyData.points}
        footer={safetyData.footer}
      />
      <AdvantagesSection
        country="Uzbekistan"
        description={advantagesData.description}
        data={advantagesData.points}
      />
      <LoanSection
        country="Russia"
        description={loanData.description}
        points={loanData.points}
      />
      <FAQSection
        title="FAQs About MBBS in Russia"
        description="Get answers to common questions about studying MBBS abroad."
        data={faqs}
        faqClass="w-full bg-white py-12 px-6 md:px-16 overflow-hidden"
      />
    </section>
  );
};

export default UzbekistanPage;
