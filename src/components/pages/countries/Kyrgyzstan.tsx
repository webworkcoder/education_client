import AdvantagesSection from "@/components/common/countries/AdvantagesSection";
import EligibilitySection from "@/components/common/countries/EligibilitySection";
import HeroBaneer from "@/components/common/countries/HeroBaneer";
import InfoTable from "@/components/common/countries/InfoTable";
import LoanSection from "@/components/common/countries/LoanSection";
import SafetySection from "@/components/common/countries/SafetySection";
import CountryHero from "@/components/common/countries/StudyMbbs";
import UniversitiesSection from "@/components/common/countries/UniversitiesSection";
import InfoCards from "@/components/common/InfoCards";
import FAQSection from "@/components/LandingPage/FAQSection";
import { kyrgyzstanUniversities } from "@/data/universities";

const country = {
  name: "Kyrgyzstan",
  slug: "kyrgyzstan",
  flag: "/kyrgyzstanflag.jpg",
  image: "/doc2.jpeg",
  description:
    "Kyrgyzstan is one of the most popular destinations for MBBS abroad due to its affordable tuition fees, globally recognized universities, experienced faculty, and quality medical education. Medical universities in Kyrgyzstan provide excellent clinical exposure, modern infrastructure, and internationally accepted MBBS degrees for Indian students.",
};

const tableData = [
  { label: "Population", value: "70,00,000+ (as of 2024)" },
  {
    label: "Exchange Rate",
    value: "1 Kyrgyzstani Som = Approx ₹0.95 INR",
  },
  {
    label: "Climate",
    value: "Continental climate with cold winters and warm summers",
  },
  { label: "Location", value: "Central Asia" },
  { label: "Capital", value: "Bishkek" },
  { label: "Currency", value: "Kyrgyzstani Som (KGS)" },
  {
    label: "Travel time from Delhi",
    value: "Approximately 3–5 hours",
  },
  {
    label: "Time Difference",
    value: "+30 Minutes ahead of IST",
  },
  {
    label: "Number of International Students",
    value: "20,000+",
  },
  {
    label: "Percentage of International Students",
    value: "Approx 10%",
  },
  {
    label: "Students studying in Kyrgyzstan from different countries",
    value: ["India", "Pakistan", "Nepal", "Bangladesh", "Kazakhstan"],
  },
  {
    label: "Languages Spoken",
    value: "Kyrgyz, Russian, English",
  },
  {
    label: "Academic Year",
    value: "September – June",
  },
  {
    label: "Duration of the Course",
    value: "6 Years (Including Internship)",
  },
];

const data = [
  {
    title: "Affordable Tuition Fees",
    desc: "MBBS in Kyrgyzstan offers quality medical education at highly affordable tuition fees for Indian students.",
    dark: false,
  },
  {
    title: "Globally Recognized Universities",
    desc: "Medical universities in Kyrgyzstan are recognized by WHO, NMC, and other international medical organizations.",
    dark: false,
  },
  {
    title: "Excellent Clinical Exposure",
    desc: "Students gain practical experience through hospitals, laboratories, and modern medical facilities.",
    dark: true,
  },
];

const eligibilityData = [
  {
    title: "Academic Qualification",
    desc: "Students must secure at least 50% marks in Physics, Chemistry, and Biology in Class 12.",
  },
  {
    title: "NEET Qualification",
    desc: "Qualifying NEET is mandatory for Indian students pursuing MBBS abroad.",
  },
  {
    title: "Age Requirement",
    desc: "The applicant must be at least 17 years old before admission.",
  },
  {
    title: "English Proficiency",
    desc: "Basic English communication skills are necessary for MBBS programs.",
  },
];

const safetyData = {
  description:
    "Kyrgyzstan is considered a safe destination for international students with supportive universities and student-friendly cities.",

  points: [
    {
      title: "Student-Friendly Environment",
      desc: "Universities provide a welcoming and supportive atmosphere for international students.",
    },
    {
      title: "Secure Hostels",
      desc: "Hostels are equipped with security systems and wardens for student safety.",
    },
    {
      title: "Affordable Living",
      desc: "Students can comfortably manage living expenses within a reasonable budget.",
    },
    {
      title: "International Student Support",
      desc: "Dedicated university departments assist foreign students with accommodation and academics.",
    },
    {
      title: "Reliable Transportation",
      desc: "Public transportation is easily available and affordable for students.",
    },
  ],

  footer:
    "Following university guidelines and basic precautions ensures a safe and comfortable stay while studying MBBS in Kyrgyzstan.",
};

const advantagesData = {
  description:
    "Top advantages of studying MBBS in Kyrgyzstan for international students.",

  points: [
    {
      title: "Affordable MBBS Programs",
      desc: "Tuition fees are much lower compared to private medical colleges in India.",
    },
    {
      title: "Globally Recognized Degrees",
      desc: "Degrees are recognized by WHO, NMC, and other international medical councils.",
    },
    {
      title: "English-Medium Courses",
      desc: "Many universities offer complete MBBS programs in English.",
    },
    {
      title: "Simple Admission Process",
      desc: "Admissions are straightforward without donation or entrance exams.",
    },
    {
      title: "Experienced Faculty",
      desc: "Universities have qualified professors and experienced medical professionals.",
    },
    {
      title: "Good Clinical Exposure",
      desc: "Students receive practical training through affiliated hospitals.",
    },
    {
      title: "Indian Food Availability",
      desc: "Indian food and restaurants are easily available for students.",
    },
    {
      title: "Affordable Living Expenses",
      desc: "Hostel and living costs are budget-friendly for Indian students.",
    },
    {
      title: "Safe Environment",
      desc: "Universities maintain secure campuses and hostel facilities.",
    },
    {
      title: "International Exposure",
      desc: "Students interact with peers from various countries and cultures.",
    },
  ],
};

const loanData = {
  description:
    "Education loans are available for Indian students planning to pursue MBBS in Kyrgyzstan.",

  points: [
    {
      title: "NEET Qualification Required",
      desc: "Students must possess a valid NEET qualification for loan approval.",
    },
    {
      title: "Recognized Universities",
      desc: "Loans are provided for universities approved by NMC and WHO.",
    },
    {
      title: "Comprehensive Coverage",
      desc: "Loans generally cover tuition fees, hostel fees, and living expenses.",
    },
    {
      title: "Required Documents",
      desc: "Passport, admission letter, academic certificates, and income proof are required.",
    },
    {
      title: "Flexible Repayment",
      desc: "Repayment usually begins after completion of the MBBS course.",
    },
  ],
};

const faqs = [
  {
    qun: "Why should I study MBBS in Kyrgyzstan?",
    ans: "Kyrgyzstan offers affordable tuition fees, globally recognized universities, and quality medical education for international students.",
  },
  {
    qun: "Is NEET mandatory for MBBS in Kyrgyzstan?",
    ans: "Yes, NEET qualification is mandatory for Indian students pursuing MBBS in Kyrgyzstan.",
  },
  {
    qun: "Are Kyrgyzstan medical universities recognized by NMC?",
    ans: "Many medical universities in Kyrgyzstan are recognized by NMC, WHO, and other international medical organizations.",
  },
  {
    qun: "What is the duration of MBBS in Kyrgyzstan?",
    ans: "The MBBS course duration in Kyrgyzstan is generally 6 years including internship.",
  },
  {
    qun: "Is MBBS in Kyrgyzstan affordable for Indian students?",
    ans: "Yes, Kyrgyzstan provides affordable MBBS education with low tuition and living expenses.",
  },
];

const KyrgyzstanPage = () => {
  return (
    <section className="pb-15">
      <HeroBaneer country={country} />
      <CountryHero country={country} />
      <InfoTable data={tableData} />
      
      <InfoCards
        data={data}
        sectionClass="w-full bg-white py-12 px-4 md:px-8 overflow-hidden"
      />

      <EligibilitySection
        country="Kyrgyzstan"
        gridClassName="md:grid-cols-2"
        data={eligibilityData}
      />

      <UniversitiesSection
        country="Kyrgyzstan"
        data={kyrgyzstanUniversities}
      />

      <SafetySection
        country="Kyrgyzstan"
        description={safetyData.description}
        points={safetyData.points}
        footer={safetyData.footer}
      />

      <AdvantagesSection
        country="Kyrgyzstan"
        description={advantagesData.description}
        data={advantagesData.points}
      />

      <LoanSection
        country="Kyrgyzstan"
        description={loanData.description}
        points={loanData.points}
      />

      <FAQSection
        title="FAQs About MBBS in Kyrgyzstan"
        description="Get answers to common questions about studying MBBS abroad."
        data={faqs}
        faqClass="w-full bg-white py-12 px-6 md:px-16 overflow-hidden"
      />
    </section>
  );
};

export default KyrgyzstanPage;