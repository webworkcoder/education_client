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
import { bangladeshUniversities } from "@/data/universities";

const country = {
  name: "Bangladesh",
  slug: "bangladesh",
  flag: "/flags/bangladesh.png",
  image: "/doc2.jpeg",
  description:
    "Bangladesh is a growing destination for Indian students pursuing MBBS abroad due to its cultural similarity, affordable tuition fees, no language barrier, and globally recognized government medical colleges. Medical colleges in Bangladesh provide excellent clinical exposure, modern infrastructure, and internationally accepted MBBS degrees for Indian students.",
};

const tableData = [
  { label: "Population", value: "170,000,000+ (as of 2024)" },
  { label: "Exchange Rate", value: "1 Bangladeshi Taka = Approx ₹0.77 INR" },
  { label: "Climate", value: "Tropical — Hot, Humid & Monsoon" },
  { label: "Location", value: "South Asia" },
  { label: "Capital", value: "Dhaka" },
  { label: "Currency", value: "Bangladeshi Taka (BDT)" },
  { label: "Travel time from Delhi", value: "Approximately 2–3 hours (by air)" },
  { label: "Time Difference", value: "+30 Minutes ahead of IST" },
  { label: "Number of International Students", value: "2,000+" },
  { label: "Percentage of International Students", value: "Approx 5%" },
  {
    label: "Students studying in Bangladesh from different countries",
    value: ["India", "Nepal", "Sri Lanka", "Bhutan", "Maldives"],
  },
  { label: "Languages Spoken", value: "Bengali, English" },
  { label: "Academic Year", value: "January – December" },
  { label: "Duration of the Course", value: "5 Years + 1 Year Internship" },
];

const data = [
  {
    title: "Cultural Similarity",
    desc: "Bangladesh shares close cultural, linguistic, and religious ties with India, making it easy for Indian students to adapt.",
    dark: false,
  },
  {
    title: "Globally Recognized Colleges",
    desc: "Government medical colleges in Bangladesh are recognized by WHO, NMC, BMDC, and FAIMER.",
    dark: false,
  },
  {
    title: "Excellent Clinical Exposure",
    desc: "Students gain hands-on experience through large affiliated teaching hospitals with thousands of patients daily.",
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
    "Bangladesh is considered a safe destination for Indian students due to cultural affinity, close proximity, and supportive college environments.",
  points: [
    {
      title: "Cultural Affinity",
      desc: "Bangladesh shares deep cultural and linguistic connections with India, helping students feel comfortable.",
    },
    {
      title: "Secure Hostels",
      desc: "College hostels are equipped with security systems and wardens for student safety.",
    },
    {
      title: "Affordable Living",
      desc: "Students can manage living expenses comfortably within a reasonable budget.",
    },
    {
      title: "International Student Support",
      desc: "Dedicated college departments assist foreign students with accommodation and academics.",
    },
    {
      title: "Reliable Transportation",
      desc: "Public transportation is easily available and affordable for students.",
    },
  ],
  footer:
    "Following college guidelines and basic precautions ensures a safe and comfortable stay while studying MBBS in Bangladesh.",
};

const advantagesData = {
  description: "Top advantages of studying MBBS in Bangladesh for Indian students.",
  points: [
    { title: "Cultural Similarity", desc: "Shared culture, food habits, and lifestyle with India make adaptation easy." },
    { title: "Globally Recognized Degrees", desc: "Degrees are recognized by WHO, NMC, BMDC, and other international medical councils." },
    { title: "English-Medium Courses", desc: "MBBS programs are conducted entirely in English." },
    { title: "Affordable Tuition Fees", desc: "Tuition fees at government colleges are much lower than private colleges in India." },
    { title: "Experienced Faculty", desc: "Colleges have qualified professors and experienced medical professionals." },
    { title: "Massive Clinical Exposure", desc: "Affiliated teaching hospitals handle thousands of patients daily, giving students exceptional clinical experience." },
    { title: "Indian Food Availability", desc: "Indian food is easily available due to cultural and culinary similarities." },
    { title: "Affordable Living Expenses", desc: "Hostel and living costs are very budget-friendly for Indian students." },
    { title: "Close Proximity to India", desc: "Bangladesh's proximity to India makes it easy and affordable to travel home." },
    { title: "No Visa on Arrival Issues", desc: "The process for student visas is straightforward for Indian students." },
  ],
};

const loanData = {
  description: "Education loans are available for Indian students planning to pursue MBBS in Bangladesh.",
  points: [
    { title: "NEET Qualification Required", desc: "Students must possess a valid NEET qualification for loan approval." },
    { title: "Recognized Colleges", desc: "Loans are provided for colleges approved by NMC and WHO." },
    { title: "Comprehensive Coverage", desc: "Loans generally cover tuition fees, hostel fees, and living expenses." },
    { title: "Required Documents", desc: "Passport, admission letter, academic certificates, and income proof are required." },
    { title: "Flexible Repayment", desc: "Repayment usually begins after completion of the MBBS course." },
  ],
};

const faqs = [
  {
    qun: "Why should I study MBBS in Bangladesh?",
    ans: "Bangladesh offers affordable tuition fees, cultural similarity with India, globally recognized government medical colleges, and massive clinical exposure.",
  },
  {
    qun: "Is NEET mandatory for MBBS in Bangladesh?",
    ans: "Yes, NEET qualification is mandatory for Indian students pursuing MBBS in Bangladesh.",
  },
  {
    qun: "Are Bangladesh medical colleges recognized by NMC?",
    ans: "Yes, leading government medical colleges in Bangladesh are recognized by NMC, WHO, BMDC, and FAIMER.",
  },
  {
    qun: "What is the duration of MBBS in Bangladesh?",
    ans: "The MBBS course duration in Bangladesh is 5 years plus 1 year of internship.",
  },
  {
    qun: "Is MBBS in Bangladesh affordable for Indian students?",
    ans: "Yes, Bangladesh provides affordable MBBS education especially at government colleges, with low tuition and living expenses.",
  },
];

const BangladeshPage = () => {
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
        country="Bangladesh"
        gridClassName="md:grid-cols-2"
        data={eligibilityData}
      />

      <UniversitiesSection
        country="Bangladesh"
        data={bangladeshUniversities}
      />

      <SafetySection
        country="Bangladesh"
        description={safetyData.description}
        points={safetyData.points}
        footer={safetyData.footer}
      />

      <AdvantagesSection
        country="Bangladesh"
        description={advantagesData.description}
        data={advantagesData.points}
      />

      <LoanSection
        country="Bangladesh"
        description={loanData.description}
        points={loanData.points}
      />

      <FAQSection
        title="FAQs About MBBS in Bangladesh"
        description="Get answers to common questions about studying MBBS abroad."
        data={faqs}
        faqClass="w-full bg-white py-12 px-6 md:px-16 overflow-hidden"
      />
    </section>
  );
};

export default BangladeshPage;
