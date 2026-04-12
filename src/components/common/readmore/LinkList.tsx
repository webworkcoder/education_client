"use client";

import Link from "next/link";

type Item = {
  label: string;
  slug: string;
};

type Props = {
  title?: string;
  items: Item[];
};

const LinkList = ({ title = "Explore", items }: Props) => {
    console.log("ITEMS:", items);
  return (
    <div className="w-full p-5">
      {/* TITLE */}
      <h4 className="font-semibold text-lg mb-3">{title}</h4>

      {/* LIST */}
      <ul className="space-y-2">
        {items?.map((item, index) => (
          <li key={index} className="pb-2">
            <Link
              href={`/country/${item.slug}`}
              className="flex items-center gap-2 text-base font-bold text-black hover:text-blue-600 hover:underline transition"
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LinkList;
