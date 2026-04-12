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
  { label: "Population", value: "3,56,00,000 (as of Jul, 2024)" },
  {
    label: "Exchange Rate",
    value: "1 = 0.0066 Indian rupees (May, 2024)",
  },
  {
    label: "Climate",
    value: "Continental in the West and Rainy in the East",
  },
  { label: "Location", value: "Central Asia" },
  { label: "Capital", value: "Tashkent" },
  { label: "Currency", value: "Uzbekistan Som" },
  {
    label: "Travel time from Delhi",
    value: "3 hours and 5 minutes",
  },
  { label: "Time Difference", value: "-0.5 hours IST" },
  {
    label: "Number of International Students",
    value: "5,000+ in 2023",
  },
  {
    label: "Percentage of International Students",
    value: "4%",
  },
  {
    label: "Students studying in Uzbekistan from different countries",
    value: ["Ukraine", "Kazakhstan", "Russia", "Tajikistan", "India"],
  },
  {
    label: "Languages Spoken",
    value: "Uzbek, English, Russian, Tajik",
  },
  { label: "Academic Year", value: "September – June" },
  {
    label: "Duration of the Course",
    value: "6 years (5 years of classes and 1 year of internship)",
  },
];

const data = [
  {
    title: "Affordable Education",
    desc: "MBBS in Uzbekistan costs INR 15–20 lakhs, making it a budget-friendly choice for Indian students.",
    dark: false,
  },
  {
    title: "Globally Recognized Universities",
    desc: "MCI & WHO-approved universities allow graduates to practice in India and abroad.",
    dark: false,
  },
  {
    title: "Safe & Student-Friendly",
    desc: "Uzbekistan has a low crime rate and a welcoming environment for Indian students.",
    dark: true,
  },
];

const eligibilityData = [
  {
    title: "Academic Qualification",
    desc: "Must have completed 12th grade with at least 50% in Physics, Chemistry, and Biology.",
  },
  {
    title: "NEET Qualification",
    desc: "Qualifying NEET exam is mandatory for admission.",
  },
  {
    title: "Age Requirement",
    desc: "Must be at least 17 years old by December 31st of the admission year",
  },
  {
    title: "English Proficiency",
    desc: "Basic understanding of English is required as the medium of instruction is English.",
  },
];

const universities = [
  {
    name: "Andijan State Medical Institute Ranking, Uzbekistan",
    location: "Uzbekistan",
    image: "/russia.jpg",
    slug: "andijan-state-medical-institute",
  },
  {
    name: "Fergana Medical Institute of Public Health, Uzbekistan",
    location: "Uzbekistan",
    image: "/russia.jpg",
    slug: "fergana-medical-institute",
  },
  {
    name: "Samarkand State Medical Institute, Uzbekistan",
    location: "Uzbekistan",
    image: "/russia.jpg",
    slug: "samarkand-state-medical-institute",
  },
];

const safetyData = {
  description:
    "Yes, Uzbekistan is a safe country for Indian medical students. It has a low crime rate, a friendly local population, and strong government support for international students, ensuring a secure and comfortable study experience.",

  points: [
    {
      title: "Low Crime Rate",
      desc: "Uzbekistan ranks high in safety compared to other countries in the region.",
    },
    {
      title: "Friendly Locals",
      desc: "Uzbek people are welcoming, and Indian students are treated with respect.",
    },
    {
      title: "Large Indian Community ",
      desc: "Many Indian students study in Uzbekistan, creating a supportive environment.",
    },
    {
      title: "Government Support ",
      desc: "The Uzbek government ensures the safety and well-being of foreign students.",
    },
    {
      title: "Safe University Campuses",
      desc: "Medical universities have secure hostels and strict safety measures.",
    },
  ],

  footer:
    "By following basic safety precautions and carrying necessary ID documents, students can have a comfortable and secure stay.",
};

const advantagesData = {
  description: "description",
  points: [
    {
      title: "Affordable Tuition Fees",
      desc: "Lower tuition fees than Indian private medical colleges.",
    },
    {
      title: "Globally Recognized Degree",
      desc: "Approved by MCI, WHO, and other medical councils.",
    },
    {
      title: "No Donation or Capitation Fee",
      desc: "Unlike private medical colleges in India, admission is purely based on merit, with no extra donation required.",
    },
    {
      title: "English-Medium Instruction",
      desc: "No need to learn a new language.",
    },
    {
      title: "High-Quality Education & Modern Infrastructure",
      desc: "Universities have well-equipped labs, advanced hospitals, and experienced faculty for practical training.",
    },
    {
      title: "Simple Admission Process",
      desc: "No donation or entrance exam required apart from NEET.",
    },
    {
      title: "Safe & Student-Friendly Environment",
      desc: "Uzbekistan is a safe country with a welcoming atmosphere and a large community of international students.",
    },
    {
      title: "Opportunity for Part-Time Work",
      desc: "Some students can work part-time to gain practical experience and manage expenses.",
    },
    {
      title: "Cultural Similarities",
      desc: "Easy adaptation due to shared traditions with India.",
    },
    {
      title: "Budget Friendly Accommodation",
      desc: "MBBS in Uzbekistan is much cheaper than private medical colleges in India.",
    },
  ],
};

const country = {
  name: "Uzbekistan",
  slug: "uzbekistan",
  flag: "/uzbekistanflag.jpg",
  image: "/uzbekistanflag.jpg",
  description:
    "Uzbekistan has become a popular destination for Indian students seeking to pursue an MBBS degree abroad. With its well-developed medical education system, globally recognized universities, affordable tuition fees, and English-medium instruction, Uzbekistan offers an excellent opportunity for Indian students to fulfill their dream of becoming doctors.Russia is one of the best destinations for Indian students to study MBBS. With world-class medical universities, affordable fees, and globally recognized degrees, Russia offers an excellent opportunity for students who want to become doctors.",
};

const loanData = {
  description:
    "Indian students can apply for education loans to study MBBS in Uzbekistan. Banks and financial institutions offer loans based on eligibility criteria, including the student’s NEET score, university admission, and family income.",

  points: [
    {
      title: "NEET Qualification",
      desc: "A valid NEET score is required for loan approval.",
    },
    {
      title: "University Recognition",
      desc: "The university must be MCI-approved.",
    },
    {
      title: "Loan Amount",
      desc: "Depends on tuition fees, hostel charges, and living expenses.",
    },
    {
      title: "Required Documents",
      desc: "Admission letter, income proof, and collateral (if required).",
    },
    {
      title: "Repayment Flexibility",
      desc: "Loan repayment starts after course completion with a grace period.",
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
        sectionClass="w-full bg-white py-12 px-6 md:px-16 overflow-hidden"
      />
      <EligibilitySection
        country="Uzbekistan"
        gridClassName="md:grid-cols-2"
        data={eligibilityData}
      />
      <UniversitiesSection country="Russia" data={universities} />
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
