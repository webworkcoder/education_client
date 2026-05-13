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

const country = {
  name: "China",
  slug: "china",
  flag: "/chinaflag.jpg",
  image: "/doc2.jpeg",
  description:
    "China is one of the most preferred destinations for MBBS abroad due to its globally recognized universities, advanced medical infrastructure, affordable tuition fees, and high-quality education system. Chinese medical universities provide excellent clinical exposure, modern laboratories, experienced faculty, and internationally accepted MBBS degrees for Indian students.",
};

const tableData = [
  { label: "Population", value: "1,41,00,00,000 (as of 2024)" },
  {
    label: "Exchange Rate",
    value: "1 Chinese Yuan = Approx ₹11.5 INR",
  },
  {
    label: "Climate",
    value: "Varies from tropical in the south to subarctic in the north",
  },
  { label: "Location", value: "East Asia" },
  { label: "Capital", value: "Beijing" },
  { label: "Currency", value: "Chinese Yuan (CNY)" },
  {
    label: "Travel time from Delhi",
    value: "Approximately 5–7 hours",
  },
  {
    label: "Time Difference",
    value: "+2.5 Hours ahead of IST",
  },
  {
    label: "Number of International Students",
    value: "4,90,000+",
  },
  {
    label: "Percentage of International Students",
    value: "Approx 6%",
  },
  {
    label: "Students studying in China from different countries",
    value: ["India", "Pakistan", "Thailand", "South Korea", "USA"],
  },
  {
    label: "Languages Spoken",
    value: "Mandarin Chinese, English",
  },
  {
    label: "Academic Year",
    value: "September – July",
  },
  {
    label: "Duration of the Course",
    value: "6 Years (Including Internship)",
  },
];

const data = [
  {
    title: "Affordable Tuition Fees",
    desc: "MBBS in China offers quality education at affordable tuition fees compared to private medical colleges in India.",
    dark: false,
  },
  {
    title: "Globally Recognized Universities",
    desc: "Medical universities in China are recognized by WHO, NMC, and other international medical bodies.",
    dark: false,
  },
  {
    title: "Advanced Infrastructure",
    desc: "Students get access to modern hospitals, research labs, digital classrooms, and advanced medical technologies.",
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

const universities = [
  {
    name: "China Medical University",
    location: "China",
    image: "/russia.jpg",
    slug: "china-medical-university",
  },
  {
    name: "Jilin University Medical College",
    location: "China",
    image: "/russia.jpg",
    slug: "jilin-university-medical-college",
  },
  {
    name: "Dalian Medical University",
    location: "China",
    image: "/russia.jpg",
    slug: "dalian-medical-university",
  },
  {
    name: "Harbin Medical University",
    location: "China",
    image: "/russia.jpg",
    slug: "harbin-medical-university",
  },
  {
    name: "Nanjing Medical University",
    location: "China",
    image: "/russia.jpg",
    slug: "nanjing-medical-university",
  },
  {
    name: "Wuhan University School of Medicine",
    location: "China",
    image: "/russia.jpg",
    slug: "wuhan-university-school-of-medicine",
  },
];

const safetyData = {
  description:
    "China is considered a safe destination for international students with secure campuses, modern infrastructure, and strict law enforcement systems.",

  points: [
    {
      title: "Low Crime Rate",
      desc: "Major student cities maintain strict law enforcement ensuring student safety.",
    },
    {
      title: "Modern Infrastructure",
      desc: "Chinese cities are highly developed with surveillance and smart transportation systems.",
    },
    {
      title: "International Student Support",
      desc: "Universities provide dedicated support departments for foreign students.",
    },
    {
      title: "Secure Hostels",
      desc: "Campus accommodations are safe, affordable, and monitored 24/7.",
    },
    {
      title: "Reliable Public Transport",
      desc: "Students can travel safely through metro systems, buses, and high-speed trains.",
    },
  ],

  footer:
    "Following basic precautions and university guidelines ensures a safe and comfortable experience while studying MBBS in China.",
};

const advantagesData = {
  description:
    "Top advantages of studying MBBS in China for international students.",

  points: [
    {
      title: "Affordable MBBS Programs",
      desc: "Lower tuition fees compared to many private medical colleges in India.",
    },
    {
      title: "Globally Recognized Degrees",
      desc: "Degrees are recognized by WHO, NMC, ECFMG, and other medical councils.",
    },
    {
      title: "English-Medium Courses",
      desc: "Many universities offer complete MBBS programs in English.",
    },
    {
      title: "Modern Medical Facilities",
      desc: "Students gain practical exposure through advanced hospitals and laboratories.",
    },
    {
      title: "No Donation or Capitation Fees",
      desc: "Admissions are transparent without extra donation charges.",
    },
    {
      title: "Strong Clinical Exposure",
      desc: "Large patient inflow helps students gain practical medical experience.",
    },
    {
      title: "International Environment",
      desc: "Students interact with peers from different countries and cultures.",
    },
    {
      title: "Simple Admission Process",
      desc: "Admission procedures are easy and straightforward for Indian students.",
    },
    {
      title: "Affordable Living Expenses",
      desc: "Hostel and food expenses are budget-friendly for students.",
    },
    {
      title: "Research Opportunities",
      desc: "Universities encourage research activities with advanced medical technologies.",
    },
  ],
};

const loanData = {
  description:
    "Education loans are available for Indian students planning to pursue MBBS in China.",

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
    qun: "Why should I study MBBS in China?",
    ans: "China offers globally recognized medical universities, affordable tuition fees, modern infrastructure, and excellent clinical exposure for international students.",
  },
  {
    qun: "Is NEET mandatory for MBBS in China?",
    ans: "Yes, NEET qualification is mandatory for Indian students pursuing MBBS in China.",
  },
  {
    qun: "Are Chinese medical universities recognized by NMC?",
    ans: "Many Chinese medical universities are recognized by NMC, WHO, and other international medical organizations.",
  },
  {
    qun: "What is the duration of MBBS in China?",
    ans: "The MBBS course duration in China is generally 6 years including internship.",
  },
  {
    qun: "Is MBBS in China affordable for Indian students?",
    ans: "Yes, China provides affordable MBBS education with comparatively lower tuition and living expenses.",
  },
];
const ChinaPage = () => {
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
        country="China"
        gridClassName="md:grid-cols-2"
        data={eligibilityData}
      />
      <UniversitiesSection country="China" data={universities} />
      <SafetySection
        country="China"
        description={safetyData.description}
        points={safetyData.points}
        footer={safetyData.footer}
      />
      <AdvantagesSection
        country="China"
        description={advantagesData.description}
        data={advantagesData.points}
      />
      <LoanSection
        country="China"
        description={loanData.description}
        points={loanData.points}
      />
      <FAQSection
        title="FAQs About MBBS in China"
        description="Get answers to common questions about studying MBBS abroad."
        data={faqs}
        faqClass="w-full bg-white py-12 px-6 md:px-16 overflow-hidden"
      />
    </section>
  );
};

export default ChinaPage;
