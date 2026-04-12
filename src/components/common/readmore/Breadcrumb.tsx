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
    <div className="w-full bg-gray-100 py-3 px-6 md:px-16 flex items-center justify-between ">
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
      <div className="bg-[#5c6ea7] text-white text-sm px-34 py-2 font-bold rounded">
        # {items[1]?.label}
      </div>
    </div>
  );
};

export default Breadcrumb;
