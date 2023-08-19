import React from "react";
import Image from "next/image";
import "./sliderAnimationCSS.css";

const YourInterviewer = () => {
    return (
        <div className="mt-20">
            <div className="text-center">
                <p className="text-2xl md:text-4xl font-semibold uppercase">Your InterViewer</p>
                <p className="text-lg md:text-2xl text-gray-500"></p>
                <hr className="mx-[35%]"/>
            </div>
            <div className="text-center text-base md:text-xl pt-10 p-6 mx-20">
                <p className="px-20">Your Interviewer are working professional working</p>
            </div>
            <div className="ts pt-40 pb-40">

                <div className="p-50 w-screen">
                    <div className="grid">
                        <div className="grid md:grid-rows-1">
                            <div className="flex items-center">
                                <div className="item-center justify-center mx-auto">
                                    <Image src="/logo.png" alt="iit kanpur" height={150} width={150} />
                                </div>
                                <div className="item-center justify-center mx-auto">
                                    <Image src="/logo1.png" alt="iit kanpur" height={150} width={150} />
                                </div>
                                <div className="item-center justify-center mx-auto">
                                    <Image src="/logo2.png" alt="iit kanpur" height={150} width={150} />
                                </div>
                                <div className="item-center mx-auto">
                                    <Image src="/logo3.png" alt="iit kanpur" height={150} width={150} />
                                </div>
                                <div className="item-center mx-auto">
                                    <Image src="/logo4.png" alt="iit kanpur" height={150} width={150} />
                                </div>
                                <div className="item-center mx-auto">
                                    <Image src="/logo5.png" alt="iit kanpur" height={150} width={150} />
                                </div>
                            </div>
                        </div>
                        <div className="grid grid-rows-1">
                            <div className="flex items-center">
                                <div className="item-center justify-center mx-auto">
                                    <Image src="/logo6.png" alt="iit kanpur" height={150} width={150} />
                                </div>
                                <div className="item-center justify-center mx-auto">
                                    <Image src="/logo7.png" alt="iit kanpur" height={150} width={150} />
                                </div>
                                <div className="item-center mx-auto">
                                    <Image src="/logo8.png" alt="iit kanpur" height={150} width={150} />
                                </div>
                                <div className="item-center mx-auto">
                                    <Image src="/logo9.png" alt="iit kanpur" height={150} width={150} />
                                </div>
                                <div className="item-center mx-auto">
                                    <Image src="/logo10.png" alt="iit kanpur" height={150} width={150} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default YourInterviewer;