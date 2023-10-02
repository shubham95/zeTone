"use client";

import React from "react";
import Image from "next/image";
import BasicButton from "../components/BasicButton";
import Link from "next/link";

// const introVariants: Variants = {
//     hide: {
//         opacity: 0,
//         scale:0.5,
//         // x: 300,
//     },
//     show: {
//         opacity: 1,
//         scale:1,
//         x: 0,
//         transition:{
//             duration: 0.8,
//             delay: 0,
//             ease: [0, 0.71, 0.2, 1.01]
//         }
//     },
// };

const clickAction = () => {
  window.alert("clicked");
};
const AreYouReadySection = () => {
  return (
    <div className="w-full">
      <div className="w-full h-full mx-auto  grid items-center text-center">
        <div className="px-8 font-semibold justify-center items-center">
          <p className="text-2xl md:text-4xl ">Are You Ready?</p>
          <hr className="mx-[35%]" />
        </div>
        <div className="text-center text-base md:text-xl pt-10 items-center md:mx-20">
          <p className="px-20">
          Book Your <span className=" text-red-700 font-bold">Free</span> Slot Now to Harness Zetone's Expertise and Gain Clarity on Your Current Position. Get Started Today!!
          </p>
        </div>
        <div
          className="grid pt-20 mx-5"
          // initial="hide"
          // whileInView="show"
          // variants={introVariants}
        >
          <div className="grid grid-rows-1 md:grid-cols-3 gap-8">
            {/* card-1 */}

            <div className="flex items-center hover:scale-105 ease-in duration-300">
              <div className="rounded-xl border-red/50 border-2">
                <div className="p-8">
                  <div className="">
                    <h4 className="mb-4 text-xl md:text-2xl font-semibold">
                      Mock Interview
                    </h4>
                  </div>
                  <div className="flex justify-center">
                    <Image
                      src="/interview.svg"
                      alt=""
                      width={100}
                      height={100}
                    />
                  </div>
                  <div className="text-lg md:text-xl mt-4">
                    <p>
                      Ace Your next Interview with Expert-Led Mock Interviews!
                    </p>
                  </div>
                  <div className="pt-10">
                    <Link
                      href={{
                        pathname: "/interview",
                      }}
                    >
                      <BasicButton title="Learn More" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            {/* card2 */}
            <div className="flex items-center hover:scale-105 ease-in duration-300">
              <div className="rounded-xl border-red/50 border-2">
                <div className="p-8">
                  <div className="">
                    <h4 className="text-cenetr mb-4 text-xl md:text-2xl font-semibold">
                      Get Referral
                    </h4>
                  </div>
                  <div className="flex justify-center">
                    <Image
                      className=""
                      src="/refrall.svg"
                      alt=""
                      width={100}
                      height={100}
                    />
                  </div>
                  <div className="text-lg md:text-xl mt-4">
                    <p>
                      Pinpoint target companies, and access relevant job
                      referrals through guided discussions.
                    </p>
                  </div>
                  <div className="pt-10">
                    <Link
                      href={{
                        pathname: "/referral",
                      }}
                    >
                      <BasicButton title="Learn More" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            {/* card3 */}
            <div className="flex items-center hover:scale-105 ease-in duration-300">
              <div className="rounded-xl border-red/50 border-2 ">
                <div className="p-8">
                  <div className="">
                    <h4 className="mb-4 text-xl md:text-2xl font-semibold">
                      Resume Review
                    </h4>
                  </div>
                  <div className="flex justify-center">
                    <Image
                      src="/interview.svg"
                      alt=""
                      width={100}
                      height={100}
                    />
                  </div>
                  <div className="text-lg md:text-xl mt-4">
                    <p>
                      Elevate your chances have your IT resume professionally
                      reviewed.
                    </p>
                  </div>
                  <div className="pt-10">
                    <Link
                      href={{
                        pathname: "/referral",
                      }}
                    >
                      <BasicButton title="Learn More" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            {/* card4 */}
            {/* <div className="flex items-center hover:scale-105 ease-in duration-300">
                                <div className="rounded-xl shadow-lg shadow-gray-400">
                                    <div className="p-8">
                                        <div className="">
                                            <h4 className="text-cenetr mb-4 text-2xl font-semibold">Get Referral</h4>
                                        </div>
                                        <div className="flex justify-center">
                                            <Image className="" src="/refrall.svg" alt="" width={100} height={100}/>
                                        </div>
                                        <div className="text-sm"><p>Hone your skills by working on projects to solve real life problems. Enhance your coding skills and improve your fluency and people skills.</p></div>
                                        <div className="pt-10">
                                            <GradientButton title="Learn More" />
                                        </div>                                
                                    </div>
                                </div>
                            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AreYouReadySection;
