"use client";

type Advantage = {
  title: string;
  desc: string;
};

type Props = {
  country: string;
  description: string;
  data: Advantage[];
};

const AdvantagesSection = ({ country, description, data }: Props) => {
  return (
    <section className="w-full py-12 px-6 md:px-16 bg-[#f2f2f2]">
      {/* CENTER CONTAINER */}
      <div className="max-w-[65rem] mx-auto">
        {/* HEADING */}
        <h2 className="text-3xl md:text-4xl font-bold mb-4 ">
          Advantages of Studying MBBS in {country}
        </h2>

        <p className="text-gray-700 mb-10 text-base mx-auto">{description}</p>

        {/* GRID */}
        <div className="grid md:grid-cols-2 gap-x-16 gap-y-8">
          {data.map((item, index) => (
            <div key={index}>
              <h3 className="font-semibold text-lg mb-1">
                {index + 1}. {item.title}
              </h3>

              <p className="text-gray-600 text-sm leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AdvantagesSection;
