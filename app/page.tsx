"use client";
import React, { useState } from "react";
import NavBar from "./components/NavBar";
import MainPage from "./sections/MainPage";
import AreYouReadySection from "./sections/AreYouReadySection";
import OurMentorsPage from "./sections/OurMentorsPage";
import JourneyPage from "./sections/JourneyPage";
import OurStudents from "./sections/OurStudents";
import Testimonials from "./sections/Testimonials";
import FooterPage from "./sections/FooterPage";
import CoursesSectionPage from "./sections/CoursesSectionPage";
import LoadingIndicator from "./Loading/LoadingIndicator";

export default function Home() {
  const [loading, setLoading] = useState(false);
  return (
    <div className=" w-full h-screen ">
      <LoadingIndicator state={{ loading, setLoading }}>
        <NavBar state={{ loading, setLoading }} />
        <MainPage />
        <AreYouReadySection />
        <CoursesSectionPage />
        <OurMentorsPage />
        <JourneyPage />
        <OurStudents />
        <Testimonials />
        <FooterPage />
      </LoadingIndicator>
    </div>
  );
}
