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

const tableData = [
  { label: "Population", value: "144,444,359 (as of May 2021)" },
  { label: "Exchange Rate", value: "1 Ruble = 0.011 USD (May 2024)" },
  { label: "Climate", value: "Continental" },
  { label: "Location", value: "Europe, Asia" },
  { label: "Capital", value: "Moscow" },
  { label: "Currency", value: "Ruble" },
  { label: "Travel time from Delhi", value: "6 hours and 30 minutes" },
  { label: "Time Difference", value: "+2.5 hours IST" },
  { label: "Number of International Students", value: "2,35,000 in 2022" },
  {
    label: "Students studying in Russia from different countries",
    value: ["Uzbekistan", "Kazakhstan", "India", "Belarus", "China"],
  },
  {
    label: "Language Spoken",
    value: "English, Russian, Tatar, Bashkir, and Ukrainian",
  },
  { label: "Academic Year", value: "September – June" },
  {
    label: "Duration of the Course",
    value: "6 years (5 years + 1 year internship)",
  },
];

const data = [
  {
    title: "High-Quality Education",
    desc: "Russian medical universities provide top-class education with a strong focus on practical training in modern hospitals.",
    dark: false,
  },
  {
    title: "Affordable Fees",
    desc: "MBBS in Russia is budget-friendly, with tuition fees ranging from ₹2.5 lakh to ₹6 lakh per year, much lower than private Indian colleges.",
    dark: false,
  },
  {
    title: "Globally Recognized Degree",
    desc: "Degrees from Russian universities are WHO & NMC-approved, allowing graduates to work in India, Russia, or other countries.",
    dark: true,
  },
];

const eligibilityData = [
  {
    title: "NEET Qualification",
    desc: "Students must pass the NEET exam to apply for admission in MBBS course.",
  },
  {
    title: "Age Requirement",
    desc: "The student must be at least 17 years old by December 31 of the admission year. The maximum age limit is 25 years.",
  },
  {
    title: "Qualification",
    desc: "Students must have 50% marks in PCB (Physics, Chemistry, Biology) in 12th grade (40% for reserved categories).",
  },
  {
    title: "Nationality Certificate",
    desc: "Students must provide proof of Indian nationality before applying for MBBS.",
  },
];

const universities = [
  {
    name: "Kuban State Medical University (KSMU), Russia",
    location: "Russia",
    image: "/russia.jpg",
  },
  {
    name: "Bashkir State Medical University, Russia",
    location: "Russia",
    image: "/russia.jpg",
  },
  {
    name: "Kazan Federal University (KFU), Russia",
    location: "Russia",
    image: "/russia.jpg",
  },
  {
    name: "Kursk State Medical University (KSMU), Russia",
    location: "Russia",
    image: "/russia.jpg",
  },
  {
    name: "Mari State University (MarSU), Russia",
    location: "Russia",
    image: "/russia.jpg",
  },
  {
    name: "Orenburg State Medical University (OSMU), Russia",
    location: "Russia",
    image: "/russia.jpg",
  },
];

const safetyData = {
  description:
    "Yes, Russia is safe and student-friendly for Indian medical students. With thousands of Indian students already studying there, the country provides a secure and welcoming environment.",

  points: [
    {
      title: "Secure Hostels & Campuses",
      desc: "Universities offer 24/7 security and CCTV surveillance in hostels and campuses.",
    },
    {
      title: "Student-Friendly Cities",
      desc: "Russian cities are safe, and locals are friendly towards international students.",
    },
    {
      title: "Strong Indian Community",
      desc: "Many Indian students are already studying in Russia, creating a supportive community.",
    },
    {
      title: "Public Transport & Safety Measures",
      desc: "Russia has safe and well-connected public transport systems with security checks.",
    },
    {
      title: "No Racial Discrimination",
      desc: "Russia is a multicultural country, and international students are treated with respect.",
    },
  ],

  footer:
    "By following basic safety precautions and carrying necessary ID documents, students can have a comfortable and secure stay.",
};

const advantagesData = [
  {
    title: "Affordable Education",
    desc: "Tuition fees are much lower than private medical colleges in India.",
  },
  {
    title: "High-Quality Education",
    desc: "Universities offer modern facilities, advanced medical technology, and practical training.",
  },
  {
    title: "No Donation or Entrance Exam",
    desc: "Admission is based on NEET qualification, with no extra charges.",
  },
  {
    title: "English Medium Courses",
    desc: "Many universities teach in English, making it easier for Indian students.",
  },
  {
    title: "Globally Recognized Degree",
    desc: "MBBS degrees are approved by WHO, NMC, ECFMG, and other medical bodies.",
  },
  {
    title: "Part-Time Work Opportunities",
    desc: "Students can work while studying to gain experience.",
  },
  {
    title: "Indian Food Availability",
    desc: "Many universities have Indian mess facilities for students.",
  },
  {
    title: "Safe and Friendly Environment",
    desc: "Russia is a secure country with a welcoming atmosphere for Indian students.",
  },
  {
    title: "International Career Opportunities",
    desc: "Graduates can work in India, Russia, or other countries after clearing required exams.",
  },
  {
    title: "NMC Screening Test Training",
    desc: "Indian students get coaching for FMGE/NExT while studying.",
  },
];

const loanData = {
  description:
    "Indian students can apply for education loans to cover their tuition fees, hostel charges, and living expenses while studying MBBS in Russia. Many banks and financial institutions offer loans to help students fulfill their dream of becoming a doctor.",

  points: [
    {
      title: "Loan Coverage",
      desc: "Covers tuition fees, hostel fees, travel, and other expenses related to studying abroad.",
    },
    {
      title: "Required Documents",
      desc: "NEET scorecard, university admission letter, fee structure, parent's income proof, and property/assets details.",
    },
    {
      title: "Loan Amount",
      desc: "Varies based on the university and student's financial background. Can go up to ₹20–30 lakhs.",
    },
    {
      title: "Repayment Period",
      desc: "Usually 5–10 years, with repayment starting after course completion.",
    },
    {
      title: "Government & Private Banks",
      desc: "SBI, PNB, HDFC, Axis Bank, and other financial institutions offer education loans.",
    },
    {
      title: "Subsidy & Interest Rates",
      desc: "Some banks offer low-interest rates and subsidies for eligible students.",
    },
  ],
};

const RussiaPage = () => {
  const country = {
    name: "Russia",
    slug: "russia",
    flag: "/russiaflag.jpg",
    image: "/russiaflag.jpg",
    description:
      "Russia is one of the best destinations for Indian students to study MBBS. With world-class medical universities, affordable fees, and globally recognized degrees, Russia offers an excellent opportunity for students who want to become doctors.",
  };

  return (
    <section className="pb-15">
      <HeroBaneer country={country} />
      <RussiaHero country={country} />
      <InfoTable data={tableData} />;
      <InfoCards
        data={data}
        sectionClass="w-full bg-white py-12 px-6 md:px-16 overflow-hidden"
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
        description="Russia is one of the best destinations for Indian students to pursue MBBS due to its affordable fees, high-quality education, and globally recognized degree. With modern facilities, practical training, and a safe environment, Russia provides an excellent opportunity for students to fulfill their dream of becoming a doctor."
        data={advantagesData}
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
