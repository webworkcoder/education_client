"use client";

import Link from "next/link";

type TagItem = {
  label: string;
  link?: string;
};

type Props = {
  title?: string;
  tags: TagItem[];
};

const Tags = ({ title = "Tags :", tags }: Props) => {
  return (
    <div className="w-full max-w-4xl mx-auto p-4">
      {/* Title */}
      <h3 className="font-semibold mb-3">{title}</h3>

      {/* Tags */}
      <div className="flex flex-wrap gap-3">
        {tags.map((tag, index) => (
          <Link
            key={index}
            href={tag.link || "#"}
            className="px-6 py-2 bg-gray-200 text-[#667cb0] font-bold hover:bg-[#667cb0] hover:text-white transition"
          >
            {tag.label}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Tags;