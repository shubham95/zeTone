"use client";
import React from "react";
import Image from "next/image";
import Lottie from "lottie-react";
import a1 from "../../public/a1.json";
import a2 from "../../public/a2.json";
import a3 from "../../public/a3.json";
import a4 from "../../public/a4.json";
import a5 from "../../public/a5.json";
import a6 from "../../public/a6.json";
import { Variants, motion } from "framer-motion";

const introHeaderVariants: Variants = {
  hide: {
    opacity: 0,
    x: -300,
  },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 1,
    },
  },
};

const introPictureVariants: Variants = {
  hide: {
    opacity: 0,
    x: 500,
  },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 2,
    },
  },
};

const MainPage = () => {
  return (
    <div className="w-full h-screen justify-center items-center ">
      <div className="w-[80%] h-[80%] mx-auto flex justify-center items-center">
        <div className="grid mt-40">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mx-auto">
            <motion.div
              className="order-last md:order-first flex items-center font-medium pt-10"
              initial="hide"
              whileInView="show"
              variants={introHeaderVariants}
            >
              <div className="z-10 duration-100 text-2xl md:text-6xl">
                We give <span className="text-[#4287f5]">you</span> the tools to
                carve your path to{" "}
                <span className="text-[#4287f5]">Success</span>
                <div className="text-base md:text-3xl text-gray-600 pt-5 md:pt-10">
                  Upskill yourself with industry specific courses employers are
                  looking for in a candidate
                </div>
              </div>
            </motion.div>
            <div
              className="w-full h-full flex items-center justify-center"
              data-aos="fade-up"
            >
              <Lottie animationData={a3} />
              {/* <Image className="h-[80%] w-[80%]" src="/h1.png" width={400} height={400} alt="dummy" / > */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainPage;
