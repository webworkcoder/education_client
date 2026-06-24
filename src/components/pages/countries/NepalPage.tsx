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
import { nepalUniversities } from "@/data/universities";

const country = {
  name: "Nepal",
  slug: "nepal",
  flag: "/flags/nepal.png",
  image: "/doc2.jpeg",
  description:
    "Nepal is one of the most preferred destinations for Indian students pursuing MBBS abroad due to its cultural similarity, affordable tuition fees, no language barrier, and globally recognized medical colleges. Medical colleges in Nepal provide excellent clinical exposure, modern infrastructure, and internationally accepted MBBS degrees for Indian students.",
};

const tableData = [
  { label: "Population", value: "30,000,000+ (as of 2024)" },
  {
    label: "Exchange Rate",
    value: "1 Nepalese Rupee = Approx ₹0.62 INR",
  },
  {
    label: "Climate",
    value: "Subtropical to Alpine depending on region",
  },
  { label: "Location", value: "South Asia" },
  { label: "Capital", value: "Kathmandu" },
  { label: "Currency", value: "Nepalese Rupee (NPR)" },
  {
    label: "Travel time from Delhi",
    value: "Approximately 8–10 hours (by road)",
  },
  {
    label: "Time Difference",
    value: "+15 Minutes ahead of IST",
  },
  {
    label: "Number of International Students",
    value: "5,000+",
  },
  {
    label: "Percentage of International Students",
    value: "Approx 15%",
  },
  {
    label: "Students studying in Nepal from different countries",
    value: ["India", "Bangladesh", "Sri Lanka", "Bhutan", "Maldives"],
  },
  {
    label: "Languages Spoken",
    value: "Nepali, Hindi, English",
  },
  {
    label: "Academic Year",
    value: "August – June",
  },
  {
    label: "Duration of the Course",
    value: "5.5 Years (Including Internship)",
  },
];

const data = [
  {
    title: "No Language Barrier",
    desc: "Hindi is widely spoken in Nepal, making it easy for Indian students to adapt and communicate comfortably.",
    dark: false,
  },
  {
    title: "Globally Recognized Colleges",
    desc: "Medical colleges in Nepal are recognized by WHO, NMC, and other international medical organizations.",
    dark: false,
  },
  {
    title: "Excellent Clinical Exposure",
    desc: "Students gain hands-on practical experience through affiliated teaching hospitals and modern medical facilities.",
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
    "Nepal is considered a very safe destination for Indian students due to cultural similarity, close proximity, and welcoming local communities.",

  points: [
    {
      title: "Cultural Similarity",
      desc: "Nepal shares close cultural, religious, and linguistic ties with India, making students feel at home.",
    },
    {
      title: "Secure Hostels",
      desc: "College hostels are equipped with security systems and wardens for student safety.",
    },
    {
      title: "Affordable Living",
      desc: "Students can comfortably manage living expenses within a reasonable budget.",
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
    "Following college guidelines and basic precautions ensures a safe and comfortable stay while studying MBBS in Nepal.",
};

const advantagesData = {
  description:
    "Top advantages of studying MBBS in Nepal for Indian students.",

  points: [
    {
      title: "No Language Barrier",
      desc: "Hindi is widely understood, making daily life easier for Indian students.",
    },
    {
      title: "Globally Recognized Degrees",
      desc: "Degrees are recognized by WHO, NMC, and other international medical councils.",
    },
    {
      title: "English-Medium Courses",
      desc: "MBBS programs are conducted entirely in English.",
    },
    {
      title: "Simple Admission Process",
      desc: "Admissions are straightforward without donations or entrance exams beyond NEET.",
    },
    {
      title: "Experienced Faculty",
      desc: "Colleges have qualified professors and experienced medical professionals.",
    },
    {
      title: "Good Clinical Exposure",
      desc: "Students receive practical training through large affiliated teaching hospitals.",
    },
    {
      title: "Indian Food Availability",
      desc: "Indian food is easily available due to cultural and culinary similarities.",
    },
    {
      title: "Affordable Living Expenses",
      desc: "Hostel and living costs are very budget-friendly for Indian students.",
    },
    {
      title: "Safe Environment",
      desc: "Colleges maintain secure campuses and hostel facilities for students.",
    },
    {
      title: "Close Proximity to India",
      desc: "Nepal's proximity to India makes it easy and affordable to travel home.",
    },
  ],
};

const loanData = {
  description:
    "Education loans are available for Indian students planning to pursue MBBS in Nepal.",

  points: [
    {
      title: "NEET Qualification Required",
      desc: "Students must possess a valid NEET qualification for loan approval.",
    },
    {
      title: "Recognized Colleges",
      desc: "Loans are provided for colleges approved by NMC and WHO.",
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
    qun: "Why should I study MBBS in Nepal?",
    ans: "Nepal offers affordable tuition fees, no language barrier, cultural similarity with India, and globally recognized medical colleges.",
  },
  {
    qun: "Is NEET mandatory for MBBS in Nepal?",
    ans: "Yes, NEET qualification is mandatory for Indian students pursuing MBBS in Nepal.",
  },
  {
    qun: "Are Nepal medical colleges recognized by NMC?",
    ans: "Yes, leading medical colleges in Nepal are recognized by NMC, WHO, and other international medical organizations.",
  },
  {
    qun: "What is the duration of MBBS in Nepal?",
    ans: "The MBBS course duration in Nepal is generally 5.5 years including internship.",
  },
  {
    qun: "Is MBBS in Nepal affordable for Indian students?",
    ans: "Yes, Nepal provides affordable MBBS education with low tuition and living expenses, making it ideal for Indian students.",
  },
];

const NepalPage = () => {
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
        country="Nepal"
        gridClassName="md:grid-cols-2"
        data={eligibilityData}
      />

      <UniversitiesSection
        country="Nepal"
        data={nepalUniversities}
      />

      <SafetySection
        country="Nepal"
        description={safetyData.description}
        points={safetyData.points}
        footer={safetyData.footer}
      />

      <AdvantagesSection
        country="Nepal"
        description={advantagesData.description}
        data={advantagesData.points}
      />

      <LoanSection
        country="Nepal"
        description={loanData.description}
        points={loanData.points}
      />

      <FAQSection
        title="FAQs About MBBS in Nepal"
        description="Get answers to common questions about studying MBBS abroad."
        data={faqs}
        faqClass="w-full bg-white py-12 px-6 md:px-16 overflow-hidden"
      />
    </section>
  );
};

export default NepalPage;
