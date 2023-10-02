'use client'

import React from "react";
import Image from "next/image";
import GradientButton from "../components/GradientButton";
import { Variants, motion } from "framer-motion"

const introVariants: Variants = {
    hide: {
        opacity: 0,
        scale:0.5,
        // x: 300,
    },
    show: {
        opacity: 1,
        scale:1,
        x: 0,
        transition:{
            duration: 0.8,
            delay: 0,
            ease: [0, 0.71, 0.2, 1.01]
        }
    },
};

const clickAction = () => {
    window.alert("clicked");
}
const WhyUsPage = () => {

    return(
        <div className="w-full my-20">
            <div className="w-full h-full mx-auto  grid items-center text-center">
                <motion.div className="px-8 font-semibold justify-center items-center"
                    initial="hide"
                    whileInView="show"
                    variants={introVariants}
                >
                    <p className="text-4xl ">WHAT ZETONE OFFERS</p>
                    <hr className="mx-[35%]"/>
                </motion.div>
                <motion.div className="grid pt-20 mx-20"
                    initial="hide"
                    whileInView="show"
                    variants={introVariants}  
                >
                    <div className="grid grid-rows-1 md:grid-cols-4 gap-8 mx-auto ">
                    {/* card-1 */}

                        <div className="flex items-center hover:scale-105 ease-in duration-300">
                            <div className="rounded-xl shadow-lg shadow-gray-400">
                                <div className="p-8">
                                    <div className="">
                                        <h4 className="mb-4 text-2xl font-semibold">Mock Interview</h4>
                                    </div>
                                    <div className="flex justify-center">
                                        <Image src="/interview.svg" alt="" width={100} height={100}/>
                                    </div>
                                    <div className="text-sm"><p>Hone your skills by working on projects to solve real life problems. Enhance your coding skills and improve your fluency and people skills.</p></div>
                                    <div className="pt-10">
                                        <GradientButton title="Learn More" clickAction={clickAction} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    {/* card2 */}
                        <div className="flex items-center hover:scale-105 ease-in duration-300">
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
                        </div>
                    {/* card3 */}
                        <div className="flex items-center hover:scale-105 ease-in duration-300">
                                <div className="rounded-xl shadow-lg shadow-gray-400">
                                    <div className="p-8">
                                        <div className="">
                                            <h4 className="mb-4 text-2xl font-semibold">Mock Interview</h4>
                                        </div>
                                        <div className="flex justify-center">
                                            <Image src="/interview.svg" alt="" width={100} height={100}/>
                                        </div>
                                        <div className="text-sm"><p>Hone your skills by working on projects to solve real life problems. Enhance your coding skills and improve your fluency and people skills.</p></div>
                                        <div className="pt-10">
                                            <GradientButton title="Learn More" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                    {/* card4 */}
                            <div className="flex items-center hover:scale-105 ease-in duration-300">
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
                            </div>
   
                    </div>
                </motion.div>
            </div>
        </div>
    );
}

export default WhyUsPage;
