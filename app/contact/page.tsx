"use client";
import React from "react";
import Image from "next/image";

import NavBar from "../components/NavBar";
import ContactForm from "../components/contactForm";
import ContactInfo from "../components/contactInfo";
import { Grid } from "@mui/material";

export default function MockRoute() {
  const TitleContent: React.FC<any> = ({
    title = "",
    content = "",
    titleClass = "",
    titleStyle = {},
    contentClass = "",
    contentStyle = {},
    cardClass = "",
    cardStyle = {},
  }) => {
    return (
      <div className={cardClass} style={cardStyle}>
        <div className={titleClass} style={titleStyle}>
          {title}
        </div>
        <div className={contentClass} style={contentStyle}>
          {content}
        </div>
      </div>
    );
  };

  return (
    <div className="">
      <NavBar />

      <div className="md:w-3/5 w-11/12 h-full mx-auto pt-[25%] md:pt-[5%]">
        <div className="text-center">
          <TitleContent
            title={<p className="">About Us</p>}
            content={<p className="">Molding Innovators for tomorrow</p>}
            titleClass="text-2xl font-bold"
            titleStyle={{ color: "#c2b7b1" }}
            contentClass="text-3xl font-bold mb-2.5"
            contentStyle={{ color: "#4e4039" }}
          />
          <hr className="w-14 m-auto h-0.5 bg-black" />
        </div>
        <TitleContent
          title={
            <p>
              We are committed to finding better opportunities for students,
              bridge the gap between the skillset of students and the
              requirements of the industry.
            </p>
          }
          titleClass="text-lg mt-11"
        />
        <TitleContent
          title={<p>Our Mission</p>}
          content={
            <p>
              To empower untapped or underutilized talent to become full stack
              developers capable of working with top-notch companies in the
              software industry. We have specially designed our training courses
              to upskill our students with quality education.
            </p>
          }
          titleClass="text-2xl font-bold mt-11"
          titleStyle={{ color: "#c2b7b1" }}
        />
        <TitleContent
          title={<p>Our Values</p>}
          content={
            <ul style={{ listStyle: "disc" }}>
              <li>Quality</li>
              <li>Trust</li>
              <li>Self-motivation</li>
              <li>Innovation</li>
              <li>Hands-on learning & teaching</li>
              <li>Equanimity</li>
            </ul>
          }
          titleClass="text-2xl font-bold mt-11"
          titleStyle={{ color: "#c2b7b1" }}
          contentClass="mt-8 ml-8"
        />
        <p className="mt-8">
          These values and characteristics define us, our students, and
          represent our unique combination of skills, attributes, and abilities.
        </p>
        <TitleContent
          title={<p>The Leaders who drive our future</p>}
          content={
            <p>
              Zetone is a startup run by IIT Kanpur Alumni. We train, counsel,
              and connect students to help them reach their goals and land their
              dream jobs. Talent is universal but opportunities are not. Coming
              from the same background of limited opportunities as our students.
              The founders understand the challenges students face in the
              absence of proper guidance, expert advice, and practical
              experience. Through Zetone, the founding team hopes to bridge the
              gap between students and employment opportunities. Here students
              can learn for industry experts, share experiences, and gain
              practical skills through live projects.
            </p>
          }
          titleClass="text-2xl font-bold mt-11 text-center mb-8"
          titleStyle={{ color: "#c2b7b1" }}
        />
        <TitleContent
          title={<p className="">Our Students</p>}
          content={<p className="">Work with established brands</p>}
          titleClass="text-2xl font-bold text-center"
          titleStyle={{ color: "#c2b7b1" }}
          contentClass="text-3xl font-bold mb-2.5 text-center"
          contentStyle={{ color: "#4e4039" }}
          cardClass="mt-24"
        />

        <hr className="w-14 m-auto h-0.5 bg-black" />
        <div className="mt-16 mb-16">
          {/* Mobile view logo */}
          <div className="md:hidden block p-50 w-screen ">
            <div className="flex justify-center">
              <div className="">
                <div className="">
                  <div className="item-center justify-center mx-auto">
                    <Image
                      src="/logo.png"
                      alt="iit kanpur"
                      height={150}
                      width={150}
                    />
                  </div>
                  <div className="item-center justify-center mx-auto">
                    <Image
                      src="/logo1.png"
                      alt="iit kanpur"
                      height={150}
                      width={150}
                    />
                  </div>
                  <div className="item-center justify-center mx-auto">
                    <Image
                      src="/logo2.png"
                      alt="iit kanpur"
                      height={150}
                      width={150}
                    />
                  </div>
                  <div className="item-center mx-auto">
                    <Image
                      src="/logo3.png"
                      alt="iit kanpur"
                      height={150}
                      width={150}
                    />
                  </div>
                  <div className="item-center mx-auto">
                    <Image
                      src="/logo4.png"
                      alt="iit kanpur"
                      height={150}
                      width={150}
                    />
                  </div>
                  <div className="item-center mx-auto">
                    <Image
                      src="/logo5.png"
                      alt="iit kanpur"
                      height={150}
                      width={150}
                    />
                  </div>
                </div>
              </div>
              <div className=" ">
                <div className="flex flex-col justify-between  h-full">
                  <div className="  mx-auto">
                    <Image
                      src="/logo6.png"
                      alt="iit kanpur"
                      height={150}
                      width={150}
                    />
                  </div>
                  <div className="  mx-auto">
                    <Image
                      src="/logo7.png"
                      alt="iit kanpur"
                      height={150}
                      width={150}
                    />
                  </div>
                  <div className=" mx-auto">
                    <Image
                      src="/logo8.png"
                      alt="iit kanpur"
                      height={150}
                      width={150}
                    />
                  </div>
                  <div className=" mx-auto">
                    <Image
                      src="/logo9.png"
                      alt="iit kanpur"
                      height={150}
                      width={150}
                    />
                  </div>
                  <div className=" mx-auto">
                    <Image
                      src="/logo10.png"
                      alt="iit kanpur"
                      height={150}
                      width={150}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="hidden md:block grid">
            <div className="grid md:grid-rows-1">
              <div className="flex items-center">
                <div className="item-center justify-center mx-auto">
                  <Image
                    src="/logo.png"
                    alt="iit kanpur"
                    height={150}
                    width={150}
                  />
                </div>
                <div className="item-center justify-center mx-auto">
                  <Image
                    src="/logo1.png"
                    alt="iit kanpur"
                    height={150}
                    width={150}
                  />
                </div>
                <div className="item-center justify-center mx-auto">
                  <Image
                    src="/logo2.png"
                    alt="iit kanpur"
                    height={150}
                    width={150}
                  />
                </div>
                <div className="item-center mx-auto">
                  <Image
                    src="/logo3.png"
                    alt="iit kanpur"
                    height={150}
                    width={150}
                  />
                </div>
                <div className="item-center mx-auto">
                  <Image
                    src="/logo4.png"
                    alt="iit kanpur"
                    height={150}
                    width={150}
                  />
                </div>
                <div className="item-center mx-auto">
                  <Image
                    src="/logo5.png"
                    alt="iit kanpur"
                    height={150}
                    width={150}
                  />
                </div>
              </div>
            </div>
            <div className="grid grid-rows-1">
              <div className="flex items-center">
                <div className="item-center justify-center mx-auto">
                  <Image
                    src="/logo6.png"
                    alt="iit kanpur"
                    height={150}
                    width={150}
                  />
                </div>
                <div className="item-center justify-center mx-auto">
                  <Image
                    src="/logo7.png"
                    alt="iit kanpur"
                    height={150}
                    width={150}
                  />
                </div>
                <div className="item-center mx-auto">
                  <Image
                    src="/logo8.png"
                    alt="iit kanpur"
                    height={150}
                    width={150}
                  />
                </div>
                <div className="item-center mx-auto">
                  <Image
                    src="/logo9.png"
                    alt="iit kanpur"
                    height={150}
                    width={150}
                  />
                </div>
                <div className="item-center mx-auto">
                  <Image
                    src="/logo10.png"
                    alt="iit kanpur"
                    height={150}
                    width={150}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <TitleContent
          title={<p className="">Contact Us</p>}
          titleClass="text-3xl font-bold mb-2.5 text-center"
          titleStyle={{ color: "#4e4039" }}
        />
        <hr className="w-14 m-auto mb-3.5 h-0.5 bg-black" />
        <br />
        <Grid container spacing={4} className="mb-20">
          <Grid item xs={12} md={4}>
            <ContactInfo />
          </Grid>
          <Grid item xs={12} md={8}>
            <ContactForm />
          </Grid>
        </Grid>
      </div>
    </div>
  );
}
