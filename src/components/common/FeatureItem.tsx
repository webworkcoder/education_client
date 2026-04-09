import React from "react";

interface FeatureItemProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const FeatureItem: React.FC<FeatureItemProps> = ({
  icon,
  title,
  description,
}) => {
  return (
    <div className="flex items-start gap-4">
      {/* ICON */}
      <div className="text-blue-600 mt-1">{icon}</div>

      {/* TEXT */}
      <div>
        <p className="font-semibold text-lg md:text-xl text-gray-800 leading-tight">
          {title}
        </p>
        <p className="text-gray-600 text-sm md:text-base max-w-60 mt-1 leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
};

export default FeatureItem;