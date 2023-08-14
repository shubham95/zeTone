import React from "react";
import Image from "next/image";
import "./sliderAnimationCSS.css";

const OurStudents = () => {
    return (
        <div className="mt-40">
            <div className="text-center">
                <p className="text-4xl">Our Students</p>
                <p className="text-4xl">Work with established 50+ brands</p>
            </div>
            <div className="text-center text-xl md:text-2xl pt-20 p-6">
                <p>Our mentors come from prestigious universities and know exactly what you need to crack that interview. They are established professionals who have abundant industry exposure. You will be paired with a mentor to give you one-on-one guidance, share industry experience and help you get your dream job.</p>
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

export default OurStudents;