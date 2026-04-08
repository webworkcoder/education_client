import { Navbar } from "@/layout/navbar";
import React from "react";
import Hero from "../LandingPage/Hero";
import AboutAtlasMentor from "../LandingPage/AboutAtlasMentor";
import Topbar from "@/layout/topbar";
import OurMission from "../LandingPage/OurMission";
import BookYourSeat from "../LandingPage/BookYourSeat";
import AbroadLocations from "../LandingPage/AbroadLocations";

const HomePage = () => {
  return (
    <>
   
      <Hero/>
      <AboutAtlasMentor/>
      <OurMission/>
      <BookYourSeat/>
      <AbroadLocations/>
      
    </>
  );
};

export default HomePage;
