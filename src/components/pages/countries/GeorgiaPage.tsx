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
import { georgiaUniversities } from "@/data/universities";

const country = {
  name: "Georgia",
  slug: "georgia",
  flag: "/flags/georgia.png",
  image: "/doc2.jpeg",
  description:
    "Georgia is one of the most sought-after destinations for Indian students pursuing MBBS abroad. With WHO and NMC recognized universities, affordable tuition fees, English-medium programs, European academic standards, and a safe student-friendly environment, Georgia offers world-class medical education at an accessible cost.",
};

const tableData = [
  { label: "Population", value: "3,700,000+ (as of 2024)" },
  { label: "Exchange Rate", value: "1 Georgian Lari = Approx ₹29 INR" },
  { label: "Climate", value: "Humid Subtropical to Alpine" },
  { label: "Location", value: "Eastern Europe / Western Asia" },
  { label: "Capital", value: "Tbilisi" },
  { label: "Currency", value: "Georgian Lari (GEL)" },
  { label: "Travel time from Delhi", value: "Approximately 4–5 hours (by air)" },
  { label: "Time Difference", value: "+1:30 Hours ahead of IST" },
  { label: "Number of International Students", value: "15,000+" },
  { label: "Percentage of International Students", value: "Approx 20%" },
  {
    label: "Students studying in Georgia from different countries",
    value: ["India", "Nepal", "Bangladesh", "Nigeria", "Sri Lanka"],
  },
  { label: "Languages Spoken", value: "Georgian, Russian, English" },
  { label: "Academic Year", value: "September – June" },
  { label: "Duration of the Course", value: "6 Years (Including Internship)" },
];

const data = [
  {
    title: "European Standard Education",
    desc: "Georgia follows European academic standards making the MBBS degree widely accepted globally.",
    dark: false,
  },
  {
    title: "Globally Recognized Universities",
    desc: "Medical universities in Georgia are recognized by WHO, NMC, ECFMG, FAIMER, and WDOMS.",
    dark: false,
  },
  {
    title: "English-Medium Programs",
    desc: "All MBBS courses are taught entirely in English, eliminating language barriers for Indian students.",
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
    "Georgia is considered one of the safest countries in Europe for international students with low crime rates and a welcoming environment.",
  points: [
    {
      title: "Low Crime Rate",
      desc: "Georgia consistently ranks among the safest countries in Europe with very low crime rates.",
    },
    {
      title: "Secure Hostels",
      desc: "University hostels are equipped with security systems and round-the-clock support for students.",
    },
    {
      title: "Affordable Living",
      desc: "Students can manage living expenses comfortably within a reasonable budget.",
    },
    {
      title: "International Student Support",
      desc: "Dedicated university departments assist foreign students with accommodation and academics.",
    },
    {
      title: "Reliable Transportation",
      desc: "Tbilisi has efficient and affordable public transportation for students.",
    },
  ],
  footer:
    "Following university guidelines and basic precautions ensures a safe and enjoyable stay while studying MBBS in Georgia.",
};

const advantagesData = {
  description: "Top advantages of studying MBBS in Georgia for international students.",
  points: [
    { title: "European Academic Standards", desc: "Georgia follows European medical education norms recognized worldwide." },
    { title: "Globally Recognized Degrees", desc: "Degrees recognized by WHO, NMC, ECFMG, FAIMER, and WDOMS." },
    { title: "Fully English-Medium", desc: "All MBBS courses are taught in English — no language barrier." },
    { title: "Affordable Tuition Fees", desc: "Much lower tuition compared to private colleges in India." },
    { title: "No Donation Required", desc: "Admissions are merit-based with no capitation or donation fees." },
    { title: "Safe Country", desc: "Georgia is one of the safest countries in Europe for students." },
    { title: "Good Clinical Exposure", desc: "Students train in modern hospitals with high patient volume." },
    { title: "Affordable Living", desc: "Tbilisi offers a very affordable cost of living for students." },
    { title: "Visa on Arrival", desc: "Indian students can get visa on arrival in Georgia, simplifying travel." },
    { title: "International Exposure", desc: "Students interact with peers from across the world." },
  ],
};

const loanData = {
  description: "Education loans are available for Indian students planning to pursue MBBS in Georgia.",
  points: [
    { title: "NEET Qualification Required", desc: "Students must possess a valid NEET qualification for loan approval." },
    { title: "Recognized Universities", desc: "Loans are provided for universities approved by NMC and WHO." },
    { title: "Comprehensive Coverage", desc: "Loans generally cover tuition fees, hostel fees, and living expenses." },
    { title: "Required Documents", desc: "Passport, admission letter, academic certificates, and income proof are required." },
    { title: "Flexible Repayment", desc: "Repayment usually begins after completion of the MBBS course." },
  ],
};

const faqs = [
  {
    qun: "Why should I study MBBS in Georgia?",
    ans: "Georgia offers European-standard medical education, affordable tuition, English-medium programs, WHO and NMC recognized universities, and a very safe environment.",
  },
  {
    qun: "Is NEET mandatory for MBBS in Georgia?",
    ans: "Yes, NEET qualification is mandatory for Indian students pursuing MBBS in Georgia.",
  },
  {
    qun: "Are Georgian medical universities recognized by NMC?",
    ans: "Yes, leading medical universities in Georgia are recognized by NMC, WHO, ECFMG, FAIMER, and WDOMS.",
  },
  {
    qun: "What is the duration of MBBS in Georgia?",
    ans: "The MBBS course duration in Georgia is 6 years including internship.",
  },
  {
    qun: "Do I need to learn Georgian to study MBBS there?",
    ans: "No, all MBBS programs at Georgian medical universities are taught entirely in English.",
  },
];

const GeorgiaPage = () => {
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
        country="Georgia"
        gridClassName="md:grid-cols-2"
        data={eligibilityData}
      />

      <UniversitiesSection
        country="Georgia"
        data={georgiaUniversities}
      />

      <SafetySection
        country="Georgia"
        description={safetyData.description}
        points={safetyData.points}
        footer={safetyData.footer}
      />

      <AdvantagesSection
        country="Georgia"
        description={advantagesData.description}
        data={advantagesData.points}
      />

      <LoanSection
        country="Georgia"
        description={loanData.description}
        points={loanData.points}
      />

      <FAQSection
        title="FAQs About MBBS in Georgia"
        description="Get answers to common questions about studying MBBS abroad."
        data={faqs}
        faqClass="w-full bg-white py-12 px-6 md:px-16 overflow-hidden"
      />
    </section>
  );
};

export default GeorgiaPage;
