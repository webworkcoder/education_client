import { Navbar } from "@/layout/navbar";
import React from "react";
import Hero from "../LandingPage/Hero";
import AboutAtlasMentor from "../LandingPage/AboutAtlasMentor";
import Topbar from "@/layout/topbar";
import OurMission from "../LandingPage/OurMission";
import BookYourSeat from "../LandingPage/BookYourSeat";

const HomePage = () => {
  return (
    <>
      <Topbar/>
      <Navbar />
      <Hero/>
      <AboutAtlasMentor/>
      <OurMission/>
      <BookYourSeat/>
      
    </>
  );
};

export default HomePage;
