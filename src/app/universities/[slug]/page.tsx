"use client";

import { universities } from "@/components/pages/countries/Russia";
import { useParams } from "next/navigation";

const UniversityDetails = () => {
  const params = useParams();
  const slug = params?.slug;

  const university = universities.find((item) => item.slug === slug);
  console.log("University -> ", university);

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="bg-green-400 p-4 rounded-lg">{slug}</div>
    </div>
  );
};

export default UniversityDetails;
