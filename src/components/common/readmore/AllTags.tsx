// Header

type HeaderProps = {
  title: string;
};

export const Header = ({ title }: HeaderProps) => {
  return (
    <h2 className="text-4xl font-bold text-[#667cb0] mt-4 mb-2">{title}</h2>
  );
};

// Paragraph

type ParagraphProps = {
  para: string;
};

export const Paragraph = ({ para }: ParagraphProps) => {
  return <p className="text-sm text-gray-800 mb-2 leading-relaxed">{para}</p>;
};

// SubHeading

type SubHeading = {
  subheading: string;
};

export const SubHeading = ({ subheading }: SubHeading) => {
  return <p className="text-base font-bold mb-2 leading-relaxed">{subheading}</p>;
};

// Points

type PointsProps = {
  heading: string;
  child: string;
};

export const Points = ({ heading, child }: PointsProps) => {
  return (
    <li className="text-sm text-gray-800 mb-1">
      <span className="font-medium">{heading} </span>
      {child}
    </li>
  );
};
