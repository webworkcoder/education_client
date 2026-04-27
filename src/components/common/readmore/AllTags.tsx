import React from "react";

// --- Header ---
type HeaderProps = {
  title: string;
};

export const Header = ({ title }: HeaderProps) => {
  return (
    <div className="relative mb-6 mt-8 group">
      <h2 className="text-2xl md:text-4xl font-black text-[#1e3a8a] tracking-tight">
        {title}
      </h2>
      {/* Decorative underline for a premium feel */}
      <div className="absolute -bottom-2 left-0 w-16 h-1.5 bg-[#1e4e96] rounded-full transition-all group-hover:w-24" />
    </div>
  );
};

// --- Paragraph ---
type ParagraphProps = {
  para: string;
};

export const Paragraph = ({ para }: ParagraphProps) => {
  return (
    <p className="text-[15px] md:text-base text-gray-600 mb-5 leading-0.5 font-medium opacity-90">
      {para}
    </p>
  );
};

// --- SubHeading ---
type SubHeadingProps = {
  subheading: string;
};

export const SubHeading = ({ subheading }: SubHeadingProps) => {
  return (
    <h3 className="text-lg md:text-xl font-bold text-gray-800 mt-6 mb-3 flex items-center gap-2">
      <span className="w-1 h-6 bg-[#1e4e96] rounded-full inline-block" />
      {subheading}
    </h3>
  );
};

// --- Points (List Item) ---
type PointsProps = {
  heading?: string;
  child: string;
};

export const Points = ({ heading, child }: PointsProps) => {
  return (
    <li className="flex items-start gap-3 mb-3 list-none">
      {/* Custom Bullet Icon */}
      <span className="mt-1.5 shrink-0 w-1.5 h-1.5 rounded-full bg-[#1e4e96]" />

      <div className="text-[15px] text-gray-700 leading-relaxed">
        {heading && (
          <span className="font-bold text-[#1e3a8a] mr-1">{heading}:</span>
        )}
        <span className="font-medium">{child}</span>
      </div>
    </li>
  );
};
