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
import { bosniaUniversities } from "@/data/universities";

const country = {
  name: "Bosnia",
  slug: "bosnia",
  flag: "/flags/bosnia.png",
  image: "/doc2.jpeg",
  description:
    "Bosnia and Herzegovina is an emerging destination for MBBS abroad, offering affordable tuition fees, European-standard universities, experienced faculty, and quality medical education. Medical universities in Bosnia provide excellent clinical exposure, modern infrastructure, and internationally accepted degrees for international students.",
};

const tableData = [
  { label: "Population", value: "3,200,000+ (as of 2024)" },
  { label: "Exchange Rate", value: "1 BAM = Approx ₹46 INR" },
  { label: "Climate", value: "Continental climate with warm summers and cold winters" },
  { label: "Location", value: "Southeastern Europe (Balkans)" },
  { label: "Capital", value: "Sarajevo" },
  { label: "Currency", value: "Bosnia and Herzegovina Convertible Mark (BAM)" },
  { label: "Travel time from Delhi", value: "Approximately 9–11 hours" },
  { label: "Time Difference", value: "-3:30 Hours behind IST" },
  { label: "Number of International Students", value: "5,000+" },
  { label: "Percentage of International Students", value: "Approx 5%" },
  {
    label: "Students studying in Bosnia from different countries",
    value: ["India", "Turkey", "Pakistan", "Albania", "Kosovo"],
  },
  { label: "Languages Spoken", value: "Bosnian, Croatian, Serbian, English" },
  { label: "Academic Year", value: "October – June" },
  { label: "Duration of the Course", value: "6 Years (Including Internship)" },
];

const data = [
  {
    title: "European Standard Education",
    desc: "MBBS in Bosnia follows European academic standards with globally recognized curricula and modern teaching methods.",
    dark: false,
  },
  {
    title: "Globally Recognized Universities",
    desc: "Medical universities in Bosnia are recognized by WHO, NARIC, and other international medical organizations.",
    dark: false,
  },
  {
    title: "Affordable Cost of Living",
    desc: "Bosnia offers one of the most affordable living costs in Europe, making it ideal for international students.",
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
    desc: "Basic English communication skills are necessary for English-medium MBBS programs.",
  },
];

const safetyData = {
  description:
    "Bosnia and Herzegovina is considered a safe destination for international students with welcoming cities and a supportive academic environment.",
  points: [
    {
      title: "Student-Friendly Environment",
      desc: "Universities provide a welcoming and inclusive atmosphere for international students.",
    },
    {
      title: "Secure Hostels",
      desc: "Student accommodations are equipped with security systems and support services.",
    },
    {
      title: "Affordable Living",
      desc: "Students can comfortably manage living expenses within a reasonable budget in Bosnia.",
    },
    {
      title: "International Student Support",
      desc: "Dedicated university departments assist foreign students with accommodation and academics.",
    },
    {
      title: "European Environment",
      desc: "Bosnia's location in Europe offers students access to a rich cultural experience.",
    },
  ],
  footer:
    "Following university guidelines and basic precautions ensures a safe and comfortable stay while studying in Bosnia.",
};

const advantagesData = {
  description: "Top advantages of studying MBBS in Bosnia and Herzegovina for international students.",
  points: [
    {
      title: "European Academic Standards",
      desc: "Programs follow European academic frameworks recognized globally.",
    },
    {
      title: "Globally Recognized Degrees",
      desc: "Degrees are recognized by WHO, NARIC, and other international bodies.",
    },
    {
      title: "English-Medium Courses",
      desc: "Many universities offer complete programs in English for international students.",
    },
    {
      title: "Affordable Tuition Fees",
      desc: "Tuition is significantly lower compared to Western European countries.",
    },
    {
      title: "Experienced Faculty",
      desc: "Universities have qualified professors with extensive academic and clinical experience.",
    },
    {
      title: "Rich Cultural Experience",
      desc: "Students experience a unique blend of Eastern and Western European cultures.",
    },
    {
      title: "Low Cost of Living",
      desc: "Bosnia offers one of the most affordable living standards in Europe.",
    },
    {
      title: "Safe Environment",
      desc: "Universities maintain secure campuses and student accommodation facilities.",
    },
    {
      title: "Strategic Location",
      desc: "Bosnia's central European location allows easy travel to neighboring EU countries.",
    },
    {
      title: "Growing International Community",
      desc: "An increasing number of students from around the world choose Bosnia for higher education.",
    },
  ],
};

const loanData = {
  description:
    "Education loans are available for Indian students planning to pursue studies in Bosnia and Herzegovina.",
  points: [
    {
      title: "NEET Qualification Required",
      desc: "Students must possess a valid NEET qualification for loan approval (for medical programs).",
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
      desc: "Repayment usually begins after completion of the course.",
    },
  ],
};

const faqs = [
  {
    qun: "Why should I study MBBS in Bosnia?",
    ans: "Bosnia offers European-standard medical education, affordable fees, and globally recognized universities for international students.",
  },
  {
    qun: "Is NEET mandatory for MBBS in Bosnia?",
    ans: "Yes, NEET qualification is mandatory for Indian students pursuing MBBS in Bosnia.",
  },
  {
    qun: "Are Bosnian medical universities recognized by NMC?",
    ans: "Several medical universities in Bosnia are recognized by WHO, NMC, and other international medical organizations.",
  },
  {
    qun: "What is the duration of MBBS in Bosnia?",
    ans: "The MBBS course duration in Bosnia is generally 6 years including internship.",
  },
  {
    qun: "Is Bosnia affordable for Indian students?",
    ans: "Yes, Bosnia is one of the most affordable European destinations for higher education with low tuition and living costs.",
  },
];

const BosniaPage = () => {
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
        country="Bosnia"
        gridClassName="md:grid-cols-2"
        data={eligibilityData}
      />

      <UniversitiesSection
        country="Bosnia"
        data={bosniaUniversities}
      />

      <SafetySection
        country="Bosnia"
        description={safetyData.description}
        points={safetyData.points}
        footer={safetyData.footer}
      />

      <AdvantagesSection
        country="Bosnia"
        description={advantagesData.description}
        data={advantagesData.points}
      />

      <LoanSection
        country="Bosnia"
        description={loanData.description}
        points={loanData.points}
      />

      <FAQSection
        title="FAQs About MBBS in Bosnia"
        description="Get answers to common questions about studying MBBS in Bosnia and Herzegovina."
        data={faqs}
        faqClass="w-full bg-white py-12 px-6 md:px-16 overflow-hidden"
      />
    </section>
  );
};

export default BosniaPage;
