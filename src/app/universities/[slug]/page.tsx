"use client";

import { useParams } from "next/navigation";
import React from "react";

const UniversityDetails = () => {
  const params = useParams();
  const slug = params?.slug;

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="bg-green-400 p-4 rounded-lg">{slug}</div>
    </div>
  );
};

export default UniversityDetails;
