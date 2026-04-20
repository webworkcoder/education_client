/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
"use client";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const UniversityHeroCard = ({ university }: any) => {
  return (
    <div className="relative w-full h-[7rem] md:h-[31rem] overflow-hidden">
      <img
        src={university.image}
        alt="bg"
        className="absolute inset-0 w-full h-full object-cover"
      />
     
      <div className="absolute inset-0 bg-[#1f3c88]/80"></div>

      <div className="relative z-10 max-w-7xl mx-auto h-full flex items-center px-6 md:px-16 text-white">
        <div className="flex gap-6 items-start">
          <div className="w-24 h-24 md:w-28 md:h-28 rounded-full bg-white flex items-center justify-center overflow-hidden">
            <img src={university.logo} className="w-20 object-contain" />
          </div>

          <div className="w-full">
            <h1 className="text-2xl md:text-5xl font-bold mb-3 max-w-xl">
              {university.title}
            </h1>

            <p className="text-white/90 mb-4 text-base max-w-2xl">
              {university.desc}
            </p>

            <div className="flex gap-6 text-sm text-white/80">
              <span>By {university.author}</span>
              <span>{university.category}</span>
              <span>{university.date}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UniversityHeroCard;
