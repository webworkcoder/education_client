"use client";

type LoanPoint = {
  title: string;
  desc: string;
};

type Props = {
  tag?: string;
  country: string;
  title?: string;
  description: string;
  points: LoanPoint[];
};

const LoanSection = ({
  tag = "Loan",
  country,
  title,
  description,
  points,
}: Props) => {
  return (
    <section className="w-full py-12 px-6 md:px-16  bg-white">
      
      <div className="max-w-7xl mx-auto">
        
        {/* TAG */}
        <span className="text-xs tracking-widest border px-3 py-1 uppercase">
          {tag}
        </span>

        {/* TITLE */}
        <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-4">
          {title || `Education Loan for Indian Students to Study MBBS in ${country}`}
        </h2>

        {/* DESCRIPTION */}
        <p className="text-gray-700 mb-6">
          {description}
        </p>

        {/* POINTS */}
        <div className="space-y-4">
          {points.map((item, index) => (
            <div key={index} className="flex gap-3">
              
              {/* ICON */}
              <span className="text-orange-500 mt-1">✔</span>

              <p className="text-gray-700">
                <span className="font-semibold">{item.title}</span> –{" "}
                {item.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default LoanSection;