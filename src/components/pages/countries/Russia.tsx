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
import { universities } from "@/data/universities";
import { describe } from "node:test";

const tableData = [
  {
    id: 1,
    slug: "population",
    label: "Population",
    value: "144,444,359+",
  },
  {
    id: 2,
    slug: "exchange-rate",
    label: "Exchange Rate",
    value: "1 Russian Ruble = ₹0.90 INR (Approx)",
  },
  {
    id: 3,
    slug: "climate",
    label: "Climate",
    value: "Cold Continental Climate",
  },
  {
    id: 4,
    slug: "location",
    label: "Location",
    value: "Eastern Europe & Northern Asia",
  },
  {
    id: 5,
    slug: "capital",
    label: "Capital",
    value: "Moscow",
  },
  {
    id: 6,
    slug: "currency",
    label: "Currency",
    value: "Russian Ruble (RUB)",
  },
  {
    id: 7,
    slug: "travel-time",
    label: "Travel Time from Delhi",
    value: "6–8 Hours",
  },
  {
    id: 8,
    slug: "time-difference",
    label: "Time Difference",
    value: "+2.5 Hours IST",
  },
  {
    id: 9,
    slug: "student-count",
    label: "International Students",
    value: "3,00,000+",
  },
  {
    id: 10,
    slug: "origin-countries",
    label: "Students From Different Countries",
    value: ["India", "Nepal", "Bangladesh", "Kazakhstan", "China"],
  },
  {
    id: 11,
    slug: "languages",
    label: "Languages Spoken",
    value: "Russian & English",
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
    slug: "modern-medical-education",
    title: "Modern Medical Education",
    desc: "Russian universities provide advanced MBBS education with modern laboratories, smart classrooms, and practical clinical exposure.",
    dark: false,
  },
  {
    id: "feat-2",
    slug: "budget-friendly-mbbs",
    title: "Budget-Friendly MBBS",
    desc: "Study MBBS in Russia at affordable tuition fees compared to private medical colleges in India without donation charges.",
    dark: false,
  },
  {
    id: "feat-3",
    slug: "international-recognition",
    title: "International Recognition",
    desc: "Russian MBBS degrees are recognized by WHO, NMC, ECFMG, and other global medical organizations.",
    dark: true,
  },
];

const eligibilityData = [
  {
    id: "elig-1",
    slug: "neet-required",
    title: "NEET Qualification",
    desc: "Indian students must qualify NEET to become eligible for MBBS admission in Russia.",
  },
  {
    id: "elig-2",
    slug: "minimum-age",
    title: "Age Criteria",
    desc: "Students should complete 17 years of age before 31st December of the admission year.",
  },
  {
    id: "elig-3",
    slug: "pcb-marks",
    title: "Academic Qualification",
    desc: "Minimum 50% marks in Physics, Chemistry, and Biology in Class 12th are required.",
  },
  {
    id: "elig-4",
    slug: "valid-passport",
    title: "Valid Passport",
    desc: "Students must possess a valid passport for visa processing and admission procedures.",
  },
];

const safetyData = {
  description:
    "Russia offers a safe and comfortable environment for international students with secure campuses, hostel facilities, and student-friendly cities.",

  points: [
    {
      id: "safe-1",
      slug: "secure-campus",
      title: "Secure Campuses",
      desc: "Universities provide CCTV surveillance and 24/7 security for students.",
    },
    {
      id: "safe-2",
      slug: "safe-hostels",
      title: "Safe Hostel Facilities",
      desc: "Separate hostel accommodations are available for boys and girls with modern amenities.",
    },
    {
      id: "safe-3",
      slug: "student-support",
      title: "International Student Support",
      desc: "Dedicated support staff assist international students throughout their studies.",
    },
    {
      id: "safe-4",
      slug: "transport-security",
      title: "Reliable Transportation",
      desc: "Russia has well-connected and safe public transportation systems.",
    },
    {
      id: "safe-5",
      slug: "friendly-environment",
      title: "Friendly Environment",
      desc: "Indian students enjoy a welcoming atmosphere with multicultural communities.",
    },
  ],

  footer:
    "Following university guidelines and maintaining basic precautions ensures a smooth and safe student life in Russia.",
};

const advantagesData = {
  description:
    "Russia has become one of the top destinations for Indian students pursuing MBBS because of affordable education, advanced medical training, and globally recognized universities.",

  points: [
    {
      id: "adv-1",
      slug: "low-tuition-fees",
      title: "Affordable Tuition Fees",
      desc: "Study MBBS at low costs compared to Indian private medical colleges.",
    },
    {
      id: "adv-2",
      slug: "world-class-universities",
      title: "World-Class Universities",
      desc: "Russian universities offer advanced medical education with modern technology.",
    },
    {
      id: "adv-3",
      slug: "no-donation-fee",
      title: "No Donation Required",
      desc: "Students can get admission without paying capitation or donation fees.",
    },
    {
      id: "adv-4",
      slug: "english-medium-programs",
      title: "English-Medium MBBS",
      desc: "Many universities offer complete MBBS courses in English medium.",
    },
    {
      id: "adv-5",
      slug: "global-medical-recognition",
      title: "Globally Approved Degrees",
      desc: "Degrees are recognized by WHO, NMC, FAIMER, and ECFMG.",
    },
    {
      id: "adv-6",
      slug: "excellent-clinical-training",
      title: "Excellent Clinical Exposure",
      desc: "Students receive practical hospital training from early academic years.",
    },
    {
      id: "adv-7",
      slug: "modern-hostels",
      title: "Modern Hostel Facilities",
      desc: "Comfortable hostels with Indian food options are available for students.",
    },
    {
      id: "adv-8",
      slug: "international-career",
      title: "Global Career Opportunities",
      desc: "Graduates can practice medicine worldwide after qualifying required exams.",
    },
    {
      id: "adv-9",
      slug: "research-opportunities",
      title: "Research Opportunities",
      desc: "Students can participate in international medical research programs.",
    },
    {
      id: "adv-10",
      slug: "next-fmge-support",
      title: "FMGE/NExT Preparation",
      desc: "Universities support Indian students with FMGE and NExT coaching.",
    },
  ],
};

const loanData = {
  description:
    "Education loans are available for Indian students pursuing MBBS in Russia through government and private banks.",

  points: [
    {
      id: "loan-1",
      slug: "tuition-coverage",
      title: "Complete Expense Coverage",
      desc: "Loans cover tuition fees, hostel charges, travel, and living expenses.",
    },
    {
      id: "loan-2",
      slug: "easy-documentation",
      title: "Simple Documentation",
      desc: "Students need admission letter, NEET scorecard, passport, and income proof.",
    },
    {
      id: "loan-3",
      slug: "higher-loan-limit",
      title: "Higher Loan Amount",
      desc: "Students can avail loans up to ₹30 lakhs depending on eligibility.",
    },
    {
      id: "loan-4",
      slug: "easy-repayment",
      title: "Flexible Repayment",
      desc: "Repayment starts after course completion with flexible EMI options.",
    },
    {
      id: "loan-5",
      slug: "trusted-banks",
      title: "Trusted Banking Partners",
      desc: "SBI, HDFC, Axis Bank, ICICI, and PNB provide education loans.",
    },
    {
      id: "loan-6",
      slug: "student-subsidy",
      title: "Low Interest Benefits",
      desc: "Eligible students may receive lower interest rates and subsidies.",
    },
  ],
};

const RussiaPage = () => {
  const country = {
    id: "country-russia",
    name: "Russia",
    slug: "russia",
    flag: "/russiaflag.jpg",
    image: "/doc1.jpeg",
    description:
      "Russia is among the most preferred destinations for Indian students pursuing MBBS abroad. With affordable fees, globally recognized medical universities, advanced infrastructure, and high-quality education, Russia offers exceptional opportunities for future doctors.",
  };

  return (
    <section className="pb-15">
      <HeroBaneer country={country} />
      <RussiaHero country={country} />
      <InfoTable data={tableData} />
      <InfoCards
        data={data}
        sectionClass="w-full bg-white py-12 px-4 md:px-8 overflow-hidden"
      />
      <EligibilitySection country="Russia" data={eligibilityData} />
      <UniversitiesSection country="Russia" data={universities} />
      <SafetySection
        country="Russia"
        description={safetyData.description}
        points={safetyData.points}
        footer={safetyData.footer}
      />
      <AdvantagesSection
        country="Russia"
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

export default RussiaPage;
