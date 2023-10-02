"use client";
import React, { useEffect, useState } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Typography from "@mui/material/Typography";
import Image from "next/image";

import NavBar from "../components/NavBar";

const coursesData = [
  {
    title: "Pay-After-Placement",
    name: "Pay-After-Placement End-to-End Course",
    content:
      "The Pay-After-Placement End-to-End Course is a unique educational opportunity designed for working professionals and students in their pre-final or final year of engineering. What sets this course apart is that it's meticulously crafted by industry experts who are alumni of the prestigious Indian Institutes of Technology (IIT). With a flexible payment structure, you only need to pay as little as 10% of your first-year base salary once you secure a job related to your course of study. The course itself spans six months and is conducted on weekends, ensuring it fits seamlessly into your busy schedule. What's more, class sizes are intentionally kept small, with fewer than seven students, allowing for personalized attention and an optimal learning experience. This innovative approach to education minimizes financial risk, maximizes your career prospects, and fosters an environment of focused learning",
  },
  {
    title: "Prepaid-End-to-End",
    name: "Prepaid End-to-End Course",
    content:
      "The Prepaid End-to-End Course is an excellent educational opportunity tailored for both working professionals and students in their pre-final or final year of engineering. This comprehensive course offers a deep dive into various aspects of learning, including advanced Data Structures and Algorithms (DSA), system design, interview preparation, resume building, and leveraging referrals for job opportunities. The course curriculum is carefully curated by industry experts who are esteemed alumni of the prestigious Indian Institutes of Technology (IIT). Delivered over six months during weekends, it is designed to accommodate busy schedules. Furthermore, class sizes are intentionally kept small, with fewer than 20 students, ensuring a focused and interactive learning environment. As an added benefit, students receive one-on-one mentorship to provide personalized guidance and support throughout their educational journey. This course equips individuals with valuable skills and knowledge, setting them on the path to success in their careers.",
  },
  {
    title: "Advanced-DSA-Batch",
    name: "Advanced DSA Batch",
    content:
      "The Advanced DSA Batch is a specialized program designed for working professionals who already possess a fundamental understanding of Data Structures and Algorithms (DSA). This intensive course is centered around advanced DSA concepts, system design, interview preparation, crafting compelling resumes, and leveraging referrals for career advancement. With a condensed duration of just 1.5 months and weekend classes, it accommodates busy schedules, making it accessible to those juggling work commitments. What sets this program apart is its commitment to personalized mentorship, ensuring that each student receives individualized guidance and support. Additionally, the course maintains a small class size, with fewer than 20 students, fostering an interactive and focused learning environment where every participant benefits from close attention. By participating in the Advanced DSA Batch, individuals can sharpen their skills and enhance their career prospects in a dynamic and supportive educational setting.",
  },
  {
    title: "Mentorship-Program",
    name: "Mentorship Program",
    content:
      "The Mentorship Program is a valuable opportunity designed for working professionals who already possess foundational knowledge in Data Structures and Algorithms (DSA). Over a span of two months, participants receive personalized guidance and support tailored to their specific needs and career goals. This comprehensive mentorship covers a wide array of crucial aspects, including assistance with job placements, mastering both basic and advanced DSA concepts, honing skills in system design, thorough interview preparation, crafting compelling resumes, and harnessing the power of professional referrals. With a focus on individual development, this program empowers professionals to excel in their careers by providing them with the necessary tools and expertise, making it a valuable investment in their future success.",
  },
];

const courseStyle = {
  title: {
    color: "#7a6960",
    fontFamily: '"Raleway", sans-serif',
  },
  content: {
    fontSize: "15px",
    color: "#5a6570",
  },
};

export default function MockRoute(props: any) {
  useEffect(() => {
    if (props.searchParams.id) {
      const element = document.getElementById(props.searchParams.id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, []);

  return (
    <div className="">
      <NavBar />
      <div
        className="w-full h-full mx-auto md:pt-[5%] pt-[25%] pb-[5%]"
        style={{ backgroundColor: "#c4e0e0" }}
      >
        <div className="text-center">
          <b className="text-4xl" style={{ color: "#37517e" }}>
            Course Structure
          </b>
        </div>
        <Image
          src="/topImg.png"
          width={750}
          height={750}
          alt=""
          className="mx-auto"
        />
      </div>
      <div className="w-full h-full mx-auto pt-[25%] md:pt-[10%]">
        <div
          className="grid md:grid-cols-2 sm:grid-cols-1 gap-4 w-4/5"
          style={{ margin: "auto" }}
        >
          <img src="/why-us.png" />
          <div className="grid md:grid-cols-2 sm:grid-cols-1 gap-4">
            {coursesData.map(({ title, name, content }, index) => {
              return (
                <div
                  id={title}
                  className={
                    index === coursesData.length - 1 && // checking if we reached at last course data
                    coursesData.length % 2 !== 0 // checking if we have odd number of courses
                      ? "md:col-span-2 sm:col-span-1" // take full row
                      : ""
                  }
                >
                  <h4
                    className="text-xl font-bold my-1.5"
                    style={courseStyle.title}
                  >
                    {name}
                  </h4>
                  <p
                    className="text-justify my-1.5"
                    style={courseStyle.content}
                  >
                    {content}
                  </p>
                </div>
              );
            })}
            <p
              className="md:col-span-2 sm:col-span-1 text-justify my-1.5"
              style={{
                fontSize: "15px",
                color: "#5a6570",
              }}
            >
              <span className="font-bold">Note :</span> For experienced
              candidates, we will teach them advanced coding concepts based on
              their experience level. All the basic DS and algo concepts will be
              covered as well. However, we will not cover any specific
              technologies that the candidate might have worked on in his/her
              previous job. Instead, we will have a different approach to
              interview preparation for these candidates, so that they are well
              prepared to answer any questions related to the work they did
              during their previous job as well.
            </p>
          </div>
        </div>
      </div>
      <div className="mt-20 md:p-14 p-5" style={{ backgroundColor: "#c4e0e0" }}>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography className="text-xl" style={{ color: "#343a40" }}>
              <span
                className="text-2xl font-bold pr-2.5"
                style={{ color: "#47b2e4" }}
              >
                01
              </span>
              Algorithms and Data Structures
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              The list of all the concepts and Data structures covered in our
              course is given below:
            </Typography>
            <ol>
              <li>1. Introduction to C++ and STL.</li>
              <li>2. Arrays.</li>
              <li>3. Sorting and searching.</li>
              <li>4. Hashing 5. Heaps.</li>
              <li>5. Heaps.</li>
              <li>6. Number Theory and Number System.</li>
              <li>7. Bit Manipulation.</li>
              <li>8. Two Pointers.</li>
              <li>9. Sliding Window.</li>
              <li>10. Stack.</li>
              <li>11. Queue.</li>
              <li>12. String.</li>
              <li>13. Linked List.</li>
              <li>14. Trie.</li>
              <li>15. Recursion.</li>
              <li>16. Trees.</li>
              <li>17. Backtracking.</li>
              <li>18. Dynamic Programming.</li>
              <li>19. Graphs.</li>
            </ol>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography className="text-xl" style={{ color: "#343a40" }}>
              <span
                className="text-2xl font-bold pr-2.5"
                style={{ color: "#47b2e4" }}
              >
                02
              </span>
              Competitive Coding
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <ol>
              <li>
                1. We will solve every question in class and break down the
                thought process behind every solution. You will learn first hand
                how to approach a question and how to arrive at an optimal
                solution..
              </li>
              <br />
              <li>
                2. Hands on practice to tackle and solve multiple coding
                questions from all domains of Algorithms and Data Structures..
              </li>
              <br />
              <li>
                3. Learn how to write the most efficient code. When it comes to
                coding, we at Zetone focus more on quality over quantity and
                hence we make sure every code you write meets the highest
                standards that we have set for ourselves.
              </li>
            </ol>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography className="text-xl" style={{ color: "#343a40" }}>
              <span
                className="text-2xl font-bold pr-2.5"
                style={{ color: "#47b2e4" }}
              >
                03
              </span>
              Full Stack Development
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <ol>
              <li>
                1. <b>Basics of web development :</b> Learn to develop simple
                and elegant HTML web pages and design the aesthetics of the web
                page using CSS and Bootstrap. Intro to DOM Tree parsing and
                manipulation using javascript to make the website more
                interactive. You will learn the following basic technologies
                required to make any interactive website and learn how to best
                utilize them in web development:
              </li>
              <ol className="ml-1.5">
                <li>a. HTML</li>
                <li>b. CSS</li>
                <li>c. Javascript</li>
              </ol>
              <br />
              <li>
                2. <b>Advanced Javascript :</b> Deeper dive into the class,
                modules, arrow functions, template strings, the most confusing
                this keyword defined in Javascript ES6 and frameworks and
                libraries like Angular and react. Build industry scale projects
                using reusable components and other advanced topics like state
                management, routing and many more.
              </li>
              <br />
              <li>
                3. <b>Backend :</b> Collaborate and create server side web
                application logics and integrate them with web apps using REST
                API’s. Conceptualize and implement solutions for data storage in
                the business logic.
              </li>
              <br />
              <li>
                4. <b>Industry scale project :</b> Throughout this module, you
                would use the skills you learn and work on a project. This
                project will include end to end deployment of a web application.
                You can showcase this project on your resume and get an actual
                insight on how projects are developed from scratch.
              </li>
            </ol>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography className="text-xl" style={{ color: "#343a40" }}>
              <span
                className="text-2xl font-bold pr-2.5"
                style={{ color: "#47b2e4" }}
              >
                04
              </span>
              Mock Interviews and Tests
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <ol>
              <li>
                1. Learn how to tackle interview problems in a systematic manner
                and how to best explain your answers.
              </li>
              <br />
              <li>
                2. Overall personality development. Improve your communication
                skills and interview etiquettes to make the interview process
                much smoother. These sessions will help you clear your HR and
                managerial interviews without any trouble.
              </li>
              <br />
              <li>
                3. Multiple rounds of one on one mock interviews with
                experienced industry experts working in leading MNCs. These mock
                interviews will make you accustomed to the gruelling process of
                tech interviews.
              </li>
              <br />
              <li>
                4. Monthly assessment tests to tack the progress of each student
                and to make sure they build the required skills and are ready
                for their actual tests and interviews.
              </li>
            </ol>
          </AccordionDetails>
        </Accordion>
      </div>
    </div>
  );
}
