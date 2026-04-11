"use client";

type EligibilityItem = {
  title: string;
  desc: string;
};

type Props = {
  country: string;
  data: EligibilityItem[];
};

const EligibilitySection = ({ country, data }: Props) => {
  return (
    <section className="w-full bg-white py-12 px-6 md:px-16">
      
      {/* HEADING */}
      <div className="text-center mb-12">
        <span className="text-xs tracking-widest border px-4 py-1 uppercase">
          Eligibility
        </span>

        <h2 className="text-3xl md:text-4xl font-bold mt-4 max-w-xl mx-auto">
          Eligibility for MBBS in {country} for Indian Students
        </h2>

        <p className="text-gray-600 mt-4">
          Indian students who wish to study MBBS in {country} must meet the following requirements
        </p>
      </div>

      {/* CARDS */}
      <div className="grid md:grid-cols-4 gap-6 max-w-7xl mx-auto">
        {data.map((item, index) => (
          <div
            key={index}
            className="bg-white border p-6 text-center hover:shadow-md transition"
          >
            {/* ICON */}
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-[#6c7bbf] flex items-center justify-center text-white text-2xl">
              ✓
            </div>

            <h3 className="font-semibold text-lg text-[#5b6f9e] mb-2">
              {item.title}
            </h3>

            <p className="text-sm text-gray-600 leading-relaxed">
              {item.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default EligibilitySection;