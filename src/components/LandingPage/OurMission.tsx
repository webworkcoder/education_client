"use client";

import { motion } from "framer-motion";
import InfoCards from "../common/InfoCards";

const data = [
  {
    title: "Our Vision",
    desc: "To be the leading mentor for students seeking admission to top medical universities worldwide.",
    dark: false,
  },
  {
    title: "Our Mission",
    desc: "To guide aspiring medical professionals in achieving their dreams of studying MBBS abroad.",
    dark: false,
  },
  {
    title: "Our Values",
    desc: "Commitment to excellence, personalized support, and fostering confidence for a brighter future.",
    dark: true,
  },
];

const OurMission = () => {
  return <InfoCards data={data} />;
};

export default OurMission;
