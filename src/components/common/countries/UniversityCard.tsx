"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

type Props = {
  name: string;
  image: string;
  location: string;
  desc?: string;
  country?: string;
  slug: string;
};

const UniversityCard = ({
  name,
  image,
  location,
  desc,
  slug,
  country = "Russia",
}: Props) => {
  const pathname = usePathname();

  const isUniversityPage = pathname.startsWith("/universities");

  return (
    <div className="bg-white overflow-hidden shadow-sm hover:shadow-lg transition duration-300">
      {/* IMAGE */}
      <div className="relative">
        <Image
          src={image}
          alt={name}
          width={400}
          height={250}
          className="w-full h-50 object-cover"
        />

        {/* COUNTRY BADGE */}
        <span className="absolute top-3 right-3 bg-gray-700 text-white text-[11px] px-3 py-1 rounded-full">
          {country.toUpperCase()}
        </span>

        {/* LOGO */}
        <div className="absolute -bottom-6 left-4 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-md border">
          <Image src="/logo.png" alt="logo" width={30} height={30} />
        </div>
      </div>

      {/* CONTENT */}
      <div className="p-5 pt-8">
        <h3 className="text-base font-semibold text-gray-900 mb-2 leading-snug">
          {name}
        </h3>

        {isUniversityPage && desc && (
          <p className="text-sm text-gray-600 mb-3 line-clamp-3">{desc}</p>
        )}

        <Link
          href={`/universities/${slug}`}
          className="text-xs font-semibold text-black hover:underline inline-block"
        >
          READ MORE »
        </Link>
      </div>
    </div>
  );
};

export default UniversityCard;
