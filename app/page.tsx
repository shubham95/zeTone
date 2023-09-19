"use client";
import React from "react";

import NavBar from "./components/NavBar";
import MainPage from "./sections/MainPage";
import AreYouReadySection from "./sections/AreYouReadySection";
import OurMentorsPage from "./sections/OurMentorsPage";
import JourneyPage from "./sections/JourneyPage";
import OurStudents from "./sections/OurStudents";
import Testimonials from "./sections/Testimonials";
import FooterPage from "./sections/FooterPage";
import CoursesSectionPage from "./sections/CoursesSectionPage";

export default function Home() {
  return (
    <div className=" w-full h-screen ">
      <NavBar />
      <MainPage />
      <AreYouReadySection />
      <CoursesSectionPage />
      <OurMentorsPage />
      <JourneyPage />
      <OurStudents />
      <Testimonials />
      <FooterPage />
    </div>
  );
}
