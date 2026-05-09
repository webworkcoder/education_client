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

// const tableData = [
//   {
//     id: 1,
//     slug: "population",
//     label: "Population",
//     value: "144,444,359 (as of May 2021)",
//   },
//   {
//     id: 2,
//     slug: "exchange-rate",
//     label: "Exchange Rate",
//     value: "1 Ruble = 0.011 USD (May 2024)",
//   },
//   { id: 3, slug: "climate", label: "Climate", value: "Continental" },
//   { id: 4, slug: "location", label: "Location", value: "Europe, Asia" },
//   { id: 5, slug: "capital", label: "Capital", value: "Moscow" },
//   { id: 6, slug: "currency", label: "Currency", value: "Ruble" },
//   {
//     id: 7,
//     slug: "travel-time",
//     label: "Travel time from Delhi",
//     value: "6 hours and 30 minutes",
//   },
//   {
//     id: 8,
//     slug: "time-difference",
//     label: "Time Difference",
//     value: "+2.5 hours IST",
//   },
//   {
//     id: 9,
//     slug: "student-count",
//     label: "Number of International Students",
//     value: "2,35,000 in 2022",
//   },
//   {
//     id: 10,
//     slug: "origin-countries",
//     label: "Students studying in Russia from different countries",
//     value: ["Uzbekistan", "Kazakhstan", "India", "Belarus", "China"],
//   },
//   {
//     id: 11,
//     slug: "languages",
//     label: "Language Spoken",
//     value: "English, Russian, Tatar, Bashkir, and Ukrainian",
//   },
//   {
//     id: 12,
//     slug: "academic-year",
//     label: "Academic Year",
//     value: "September – June",
//   },
//   {
//     id: 13,
//     slug: "course-duration",
//     label: "Duration of the Course",
//     value: "6 years (5 years + 1 year internship)",
//   },
// ];

// const data = [
//   {
//     id: "feat-1",
//     slug: "high-quality-education",
//     title: "High-Quality Education",
//     desc: "Russian medical universities provide top-class education with a strong focus on practical training in modern hospitals.",
//     dark: false,
//   },
//   {
//     id: "feat-2",
//     slug: "affordable-fees",
//     title: "Affordable Fees",
//     desc: "MBBS in Russia is budget-friendly, with tuition fees ranging from ₹2.5 lakh to ₹6 lakh per year, much lower than private Indian colleges.",
//     dark: false,
//   },
//   {
//     id: "feat-3",
//     slug: "globally-recognized-degree",
//     title: "Globally Recognized Degree",
//     desc: "Degrees from Russian universities are WHO & NMC-approved, allowing graduates to work in India, Russia, or other countries.",
//     dark: true,
//   },
// ];

// const eligibilityData = [
//   {
//     id: "elig-1",
//     slug: "neet-qualification",
//     title: "NEET Qualification",
//     desc: "Students must pass the NEET exam to apply for admission in MBBS course.",
//   },
//   {
//     id: "elig-2",
//     slug: "age-requirement",
//     title: "Age Requirement",
//     desc: "The student must be at least 17 years old by December 31 of the admission year. The maximum age limit is 25 years.",
//   },
//   {
//     id: "elig-3",
//     slug: "academic-qualification",
//     title: "Qualification",
//     desc: "Students must have 50% marks in PCB (Physics, Chemistry, Biology) in 12th grade (40% for reserved categories).",
//   },
//   {
//     id: "elig-4",
//     slug: "nationality-certificate",
//     title: "Nationality Certificate",
//     desc: "Students must provide proof of Indian nationality before applying for MBBS.",
//   },
// ];

// const safetyData = {
//   description:
//     "Yes, Russia is safe and student-friendly for Indian medical students. With thousands of Indian students already studying there, the country provides a secure and welcoming environment.",

//   points: [
//     {
//       id: "safe-1",
//       slug: "secure-hostels",
//       title: "Secure Hostels & Campuses",
//       desc: "Universities offer 24/7 security and CCTV surveillance in hostels and campuses.",
//     },
//     {
//       id: "safe-2",
//       slug: "friendly-cities",
//       title: "Student-Friendly Cities",
//       desc: "Russian cities are safe, and locals are friendly towards international students.",
//     },
//     {
//       id: "safe-3",
//       slug: "indian-community",
//       title: "Strong Indian Community",
//       desc: "Many Indian students are already studying in Russia, creating a supportive community.",
//     },
//     {
//       id: "safe-4",
//       slug: "public-transport",
//       title: "Public Transport & Safety Measures",
//       desc: "Russia has safe and well-connected public transport systems with security checks.",
//     },
//     {
//       id: "safe-5",
//       slug: "no-discrimination",
//       title: "No Racial Discrimination",
//       desc: "Russia is a multicultural country, and international students are treated with respect.",
//     },
//   ],

//   footer:
//     "By following basic safety precautions and carrying necessary ID documents, students can have a comfortable and secure stay.",
// };

// const advantagesData = {
//   description:
//     "Russia is one of the best destinations for Indian students to pursue MBBS due to its affordable fees, high-quality education, and globally recognized degree. With modern facilities, practical training, and a safe environment, Russia provides an excellent opportunity for students to fulfill their dream of becoming a doctor.",
//   points: [
//     {
//       id: "adv-1",
//       slug: "affordable-education",
//       title: "Affordable Education",
//       desc: "Tuition fees are much lower than private medical colleges in India.",
//     },
//     {
//       id: "adv-2",
//       slug: "high-quality-edu",
//       title: "High-Quality Education",
//       desc: "Universities offer modern facilities, advanced medical technology, and practical training.",
//     },
//     {
//       id: "adv-3",
//       slug: "no-donation",
//       title: "No Donation or Entrance Exam",
//       desc: "Admission is based on NEET qualification, with no extra charges.",
//     },
//     {
//       id: "adv-4",
//       slug: "english-medium",
//       title: "English Medium Courses",
//       desc: "Many universities teach in English, making it easier for Indian students.",
//     },
//     {
//       id: "adv-5",
//       slug: "global-recognition",
//       title: "Globally Recognized Degree",
//       desc: "MBBS degrees are approved by WHO, NMC, ECFMG, and other medical bodies.",
//     },
//     {
//       id: "adv-6",
//       slug: "part-time-work",
//       title: "Part-Time Work Opportunities",
//       desc: "Students can work while studying to gain experience.",
//     },
//     {
//       id: "adv-7",
//       slug: "indian-food",
//       title: "Indian Food Availability",
//       desc: "Many universities have Indian mess facilities for students.",
//     },
//     {
//       id: "adv-8",
//       slug: "safe-environment",
//       title: "Safe and Friendly Environment",
//       desc: "Russia is a secure country with a welcoming atmosphere for Indian students.",
//     },
//     {
//       id: "adv-9",
//       slug: "career-opportunities",
//       title: "International Career Opportunities",
//       desc: "Graduates can work in India, Russia, or other countries after clearing required exams.",
//     },
//     {
//       id: "adv-10",
//       slug: "nmc-training",
//       title: "NMC Screening Test Training",
//       desc: "Indian students get coaching for FMGE/NExT while studying.",
//     },
//   ],
// };

// const loanData = {
//   description:
//     "Indian students can apply for education loans to cover their tuition fees, hostel charges, and living expenses while studying MBBS in Russia. Many banks and financial institutions offer loans to help students fulfill their dream of becoming a doctor.",

//   points: [
//     {
//       id: "loan-1",
//       slug: "loan-coverage",
//       title: "Loan Coverage",
//       desc: "Covers tuition fees, hostel fees, travel, and other expenses related to studying abroad.",
//     },
//     {
//       id: "loan-2",
//       slug: "required-docs",
//       title: "Required Documents",
//       desc: "NEET scorecard, university admission letter, fee structure, parent's income proof, and property/assets details.",
//     },
//     {
//       id: "loan-3",
//       slug: "loan-amount",
//       title: "Loan Amount",
//       desc: "Varies based on the university and student's financial background. Can go up to ₹20–30 lakhs.",
//     },
//     {
//       id: "loan-4",
//       slug: "repayment-period",
//       title: "Repayment Period",
//       desc: "Usually 5–10 years, with repayment starting after course completion.",
//     },
//     {
//       id: "loan-5",
//       slug: "banking-partners",
//       title: "Government & Private Banks",
//       desc: "SBI, PNB, HDFC, Axis Bank, and other financial institutions offer education loans.",
//     },
//     {
//       id: "loan-6",
//       slug: "subsidy-rates",
//       title: "Subsidy & Interest Rates",
//       desc: "Some banks offer low-interest rates and subsidies for eligible students.",
//     },
//   ],
// };
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
