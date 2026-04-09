import React from "react";

type Props = {
  icon: React.ReactNode;
  title: string;
  desc: string;
};

const WhyUsCard = ({ icon, title, desc }: Props) => {
  return (
    <div className="bg-white text-gray-800 p-6 rounded-md shadow-md text-center group transition-all duration-300 hover:shadow-xl h-full flex flex-col">
      
      {/* ICON */}
      <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center bg-[#5b76b3] rounded-full 
        transition-all duration-300 transform group-hover:-translate-y-2">
        {icon}
      </div>

      {/* TITLE */}
      <h3 className="font-semibold text-xl mb-2 text-[#667cb0]">
        {title}
      </h3>

      {/* DESCRIPTION */}
      <p className="text-base max-w-xs mx-auto flex-grow">
        {desc}
      </p>
    </div>
  );
};

export default WhyUsCard;