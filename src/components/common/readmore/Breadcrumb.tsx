"use client";

import Link from "next/link";

type BreadcrumbItem = {
  label: string;
  href?: string;
};

type Props = {
  items: BreadcrumbItem[];
};

const Breadcrumb = ({ items }: Props) => {
  return (
    <div className="w-full bg-gray-100 py-3 px-4 md:px-16 flex flex-col lg:flex-row gap-3 lg:items-center lg:justify-between">
      
      {/* LEFT SIDE */}
      <div className="text-sm text-gray-600 flex items-center gap-2 flex-wrap">
        {items.map((item, index) => (
          <span key={index} className="flex items-center gap-2">
            {item.href ? (
              <Link href={item.href} className="hover:underline">
                {item.label}
              </Link>
            ) : (
              <span className="text-gray-800 font-medium">{item.label}</span>
            )}

            {index !== items.length - 1 && (
              <span className="text-gray-400">›</span>
            )}
          </span>
        ))}
      </div>

      {/* RIGHT SIDE TAG */}
      <div className="w-full lg:w-auto bg-[#5c6ea7] text-white text-sm py-2 px-6 font-bold rounded text-center">
        # {items[1]?.label}
      </div>
    </div>
  );
};

export default Breadcrumb;