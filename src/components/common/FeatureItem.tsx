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
    <div className="flex items-start gap-4 px-4 py-2 rounded-lg border border-gray-100 bg-gray-50 hover:shadow-md transition-shadow">
      {/* ICON */}
      <div className="shrink-0 w-11 h-11 flex items-center justify-center rounded-full bg-blue-100 text-blue-600">
        {icon}
      </div>

      {/* TEXT */}
      <div>
        <p className="font-semibold text-base md:text-lg text-gray-800 leading-tight">
          {title}
        </p>
        <p className="text-gray-500 text-sm mt-1 leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
};

export default FeatureItem;
