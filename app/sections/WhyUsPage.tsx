'use client'

import React from "react";
import Image from "next/image";
import GradientButton from "../components/GradientButton";


const clickAction = () => {
    window.alert("clicked");
}
const WhyUsPage = () => {

    return(
        <div className="w-full">
            <div className="w-full h-full mx-auto  grid items-center text-center">
                <div className="px-8 font-semibold">
                    <p className="text-2xl justify-center">Zetone is every professionals choice</p>
                </div>
                <div className="grid pt-10 mx-10">
                    <div className="grid grid-rows-1 md:grid-cols-4 gap-4 mx-auto ">
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
                </div>
            </div>
        </div>
    );
}

export default WhyUsPage;
