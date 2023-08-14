import React from "react"
import NavBar from './components/NavBar'
import MainPage from "./sections/MainPage"
import WhyUsPage from "./sections/WhyUsPage"
import OurMentorsPage from "./sections/OurMentorsPage"
import JourneyPage from "./sections/JourneyPage"
import OurStudents from "./sections/OurStudents"
import Testimonials from "./sections/Testimonials"
import FooterPage from "./sections/FooterPage"

export default function Home() {
  return (
    <div className=" w-full h-screen ">
      <NavBar/>
      <MainPage />
      <WhyUsPage />
      <OurMentorsPage />
      <JourneyPage />
      <OurStudents/>
      <Testimonials/>
      <FooterPage/>
    </div>
  )
}
