"use client";

import { motion } from "framer-motion";
import InfoCards from "../common/InfoCards";

const data = [
  {
    title: "Our Vision",
    desc: "To empower students with the right guidance and opportunities to pursue quality medical education at globally recognized universities.",
    dark: false,
  },
  {
    title: "Our Mission",
    desc: "To simplify the MBBS admission journey abroad through expert counseling, transparent processes, and complete student support.",
    dark: false,
  },
  {
    title: "Our Values",
    desc: "Integrity, dedication, student-first guidance, and a commitment to helping future doctors achieve academic success with confidence.",
    dark: true,
  },
];

const OurMission = () => {
  return <InfoCards data={data} />;
};

export default OurMission;
