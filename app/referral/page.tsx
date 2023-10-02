"use client";
import React, { useState } from "react";
import Image from "next/image";
import NavBar from "../components/NavBar";
import InterviewModalForm from "../components/InterviewModalForm";
import GradientButton from "../components/GradientButton";
import FooterPage from "../sections/FooterPage";

export default function ReferralRoute() {
  const [openModal, setOpenModal] = useState(false);

  const toggleShowModal = () => {
    setOpenModal(!openModal);
  };

  return (
    <div className="">
      <NavBar />

      <div className="w-full h-full mx-auto pt-[25%] md:pt-[10%]">
        <div className="text-center">
          <div className="text-4xl md:text-7xl">
            <p className="">
              Claim <span className="text-[#4287f5]">Your</span> job{" "}
            </p>
            <p className="">
              <span className="text-[#4287f5]">Referral </span>
            </p>
          </div>
          <div className="text-2xl md:text-4xl pt-10">
            <p className="">
              Unlocking Job Opportunities Through Our Mentor and Alumni Referral
              Network.
            </p>
          </div>
          <div className="pt-10">
            <GradientButton
              title="Get Referral"
              clickAction={toggleShowModal}
            />
          </div>
          <InterviewModalForm
            openModal={openModal}
            toggleShowModal={toggleShowModal}
            type={"referralForm"}
          />

          <div className="mx-8 pt-10 flex justify-center items-center">
            <div className="">
              <div className="flex -space-x-4">
                <Image
                  className="border-2 border-white rounded-full dark:border-gray-800"
                  src="/profile-picture-1.jpg"
                  alt="1"
                  width={40}
                  height={40}
                ></Image>
                <Image
                  className="border-2 border-white rounded-full dark:border-gray-800"
                  src="/profile-picture-2.jpg"
                  alt="1"
                  width={40}
                  height={40}
                ></Image>
                <Image
                  className="border-2 border-white rounded-full dark:border-gray-800"
                  src="/profile-picture-3.jpg"
                  alt="1"
                  width={40}
                  height={40}
                ></Image>
                <Image
                  className="border-2 border-white rounded-full dark:border-gray-800"
                  src="/profile-picture-4.jpg"
                  alt="1"
                  width={40}
                  height={40}
                ></Image>
              </div>
            </div>
            <div className="text-base md:text-xl items-center justify-center">
              <p>280+ Alumni and mentor</p>
            </div>
          </div>
        </div>

        {/* Mid part */}
        <div className="grid grid-cols-1 m-20 mx-[20%]">
          <div className="grid grid-cols-1 md:grid-cols-2 mt-20 px-30">
            <div className="">
              <div className="ic">
                <Image src="/interview.svg" width={150} height={150} alt="/" />
              </div>
              <div className="text-3xl">
                <p>Submit Your Resume</p>
              </div>
              <div className="text-lg w-[80%]">
                <p>
                  Entrust Your Resume to Our Accomplished Mentors for In-Depth
                  Analysis and Constructive Feedback, Paving the Way for
                  Meaningful Enhancements.
                </p>
              </div>
            </div>
            <div className="">
              <Image
                src="/resume.jpeg"
                width={1000}
                height={700}
                alt="mock"
              />
            </div>
          </div>

          <hr className="my-5" />

          <div className="grid grid-cols-1 md:grid-cols-2 mt-20 px-30">
            <div className="">
              <Image
                src="/coding.png"
                width={900}
                height={700}
                alt="mock"
              />
            </div>

            <div className="justify-end items-end text-end">
              <div className="ml-[70%]">
                <Image src="/feedback.svg" width={150} height={150} alt="/" />
              </div>
              <div className="text-3xl ">
                <p>Personal screening</p>
              </div>
              <div className="text-lg ml-[20%] w-[80%]">
                <p>
                  One of our mentors will reach out to you for a callback and
                  evaluate your credentials for authenticity.
                </p>
              </div>
            </div>
          </div>

          <hr className="my-5" />

          <div className="grid grid-cols-1 md:grid-cols-2 mt-20 px-30 items-center">
            <div className="">
              <div className="ic">
                <Image src="/code.svg" width={150} height={150} alt="/" />
              </div>
              <div className="text-3xl">
                <p>Forwarding Resume</p>
              </div>
              <div className="text-lg w-[80%]">
                <p>
                  After meticulous screening, we will strategically circulate
                  your resume within our expansive network, targeting your
                  preferred companies
                </p>
              </div>
            </div>
            <div className="">
              <Image
                src="/referral.png"
                width={900}
                height={700}
                alt="mock"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Know your interviewer */}

      {/* Testimonials */}
      <div className="bg-[#12313c] grid grid-cols-1 md:grid-cols-2 justify-between text-center">
        <div className="svg p-10 md:p-20">
          <div className="svg">
            <svg
              className="h-12 mx-auto text-gray-400 dark:text-gray-600"
              viewBox="0 0 24 27"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z"
                fill="currentColor"
              ></path>
            </svg>
          </div>
          <div className="text-xl text-white p-5 md:p-10">
            <p>
            Wow, Zetone has truly transformed my career prospects! Thanks to their exceptional support, I achieved remarkable results in my recent interviews. I'm thrilled to share that I secured offers from some industry giants including Oracle. A heartfelt thank you to the entire Zetone team for their invaluable assistance
            </p>
          </div>
        </div>

        <div className="svg p-10 md:p-20">
          <div className="svg">
            <svg
              className="h-12 mx-auto text-gray-400 dark:text-gray-600"
              viewBox="0 0 24 27"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z"
                fill="currentColor"
              ></path>
            </svg>
          </div>
          <div className="text-xl text-white p-5 md:p-10">
            <p>
            Zetone Interview was an absolute game changer! After using it to
              prepare, my interview game hit another level. I was able to land 6
              big-name offers from Discord, Doordash, JP Morgan, Docusign, and
              Zip. Massive thanks to the Zetone Interview team!
            </p>
          </div>
          <div className="im"></div>
        </div>
      </div>

      <FooterPage />
    </div>
  );
}
