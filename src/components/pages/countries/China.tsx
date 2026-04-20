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
  { label: "Population", value: "1,41,00,00,000 (as of 2024)" },
  {
    label: "Exchange Rate",
    value: "1 CNY = 11.5 Indian Rupees (approx)",
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
    value: "5–7 hours (depending on city)",
  },
  { label: "Time Difference", value: "+2.5 hours IST" },
  {
    label: "Number of International Students",
    value: "4,90,000+ (recent years)",
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
    value: "Mandarin Chinese, English (limited in some areas)",
  },
  { label: "Academic Year", value: "September – July" },
  {
    label: "Duration of the Course",
    value: "6 years (including internship)",
  },
];

const data = [
  {
    title: "Affordable Education",
    desc: "MBBS in China costs around INR 20–30 lakhs, making it affordable compared to private colleges in India.",
    dark: false,
  },
  {
    title: "Globally Recognized Universities",
    desc: "Universities are recognized by WHO and NMC, allowing global practice.",
    dark: false,
  },
  {
    title: "Advanced Infrastructure",
    desc: "China offers modern hospitals, labs, and research facilities.",
    dark: true,
  },
];

const eligibilityData = [
  {
    title: "Academic Qualification",
    desc: "Minimum 50% in Physics, Chemistry, and Biology in 12th grade.",
  },
  {
    title: "NEET Qualification",
    desc: "Qualifying NEET is mandatory.",
  },
  {
    title: "Age Requirement",
    desc: "Minimum age must be 17 years.",
  },
  {
    title: "English Proficiency",
    desc: "Basic English is required (some universities may ask for tests).",
  },
];

const universities = [
  {
    name: "China Medical University",
    location: "China",
    image: "/china.jpg",
    slug: "china-medical-university",
  },
  {
    name: "Jilin University Medical College",
    location: "China",
    image: "/china.jpg",
    slug: "jilin-medical-university",
  },
  {
    name: "Dalian Medical University",
    location: "China",
    image: "/china.jpg",
    slug: "dalian-medical-university",
  },
];

const safetyData = {
  description:
    "China is generally safe for international students, with strict laws and well-maintained campuses.",

  points: [
    {
      title: "Low Crime Rate",
      desc: "Strict law enforcement ensures safety in most cities.",
    },
    {
      title: "Modern Cities",
      desc: "Well-developed infrastructure and surveillance systems.",
    },
    {
      title: "International Student Support",
      desc: "Universities offer support services for foreign students.",
    },
    {
      title: "Safe Campuses",
      desc: "Universities provide secure hostels and facilities.",
    },
    {
      title: "Efficient Public Transport",
      desc: "Safe and reliable transport systems across cities.",
    },
  ],

  footer:
    "Following basic precautions ensures a safe and comfortable stay in China.",
};

const advantagesData = {
  description: "Benefits of studying MBBS in China",
  points: [
    {
      title: "Affordable Tuition Fees",
      desc: "Lower fees compared to private medical colleges in India.",
    },
    {
      title: "Globally Recognized Degree",
      desc: "Recognized by WHO, NMC, and other medical bodies.",
    },
    {
      title: "No Donation",
      desc: "No capitation fee required for admission.",
    },
    {
      title: "English-Medium Programs",
      desc: "Many universities offer MBBS in English.",
    },
    {
      title: "Advanced Medical Facilities",
      desc: "Access to modern hospitals and labs.",
    },
    {
      title: "Simple Admission Process",
      desc: "No entrance exams apart from NEET.",
    },
    {
      title: "Good Clinical Exposure",
      desc: "High patient flow provides practical experience.",
    },
    {
      title: "Cultural Exposure",
      desc: "Opportunity to experience a new culture.",
    },
    {
      title: "Part-Time Opportunities",
      desc: "Limited options for part-time work.",
    },
    {
      title: "Hostel Facilities",
      desc: "Affordable and well-equipped accommodation.",
    },
  ],
};

const country = {
  name: "China",
  slug: "china",
  flag: "/chinaflag.jpg",
  image: "/chinaflag.jpg",
  description:
    "China is a leading destination for MBBS abroad due to its advanced medical education system, globally recognized universities, and affordable tuition fees. With modern infrastructure, experienced faculty, and extensive clinical exposure, China provides excellent opportunities for Indian students pursuing a medical career.",
};

const loanData = {
  description:
    "Indian students can avail education loans for MBBS in China from various banks and financial institutions.",

  points: [
    {
      title: "NEET Qualification",
      desc: "A valid NEET score is required.",
    },
    {
      title: "University Recognition",
      desc: "University must be NMC-approved.",
    },
    {
      title: "Loan Amount",
      desc: "Covers tuition, hostel, and living expenses.",
    },
    {
      title: "Required Documents",
      desc: "Admission letter, academic records, income proof.",
    },
    {
      title: "Repayment Flexibility",
      desc: "Repayment starts after course completion.",
    },
  ],
};

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
