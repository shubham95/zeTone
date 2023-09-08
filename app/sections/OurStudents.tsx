import React from "react";
import Image from "next/image";
import "./sliderAnimationCSS.css";

const OurStudents = () => {
    return (
        <div className="mt-20">
            <div className="text-center">
                <p className="text-2xl md:text-4xl font-semibold uppercase">Our Students</p>
                <p className="text-lg md:text-2xl text-gray-500">Work with established 50+ brands</p>
                <hr className="mx-[35%]"/>
            </div>
            <div className="text-center text-base md:text-xl pt-10 p-6 md:mx-20">
                <p className="px-4 md:px-20">Our mentors come from prestigious universities and know exactly what you need to crack that interview. They are established professionals who have abundant industry exposure. You will be paired with a mentor to give you one-on-one guidance, share industry experience and help you get your dream job.</p>
            </div>
            <div className="pt-40 pb-40">
                
                {/* Mobile view logo */}
                <div className="md:hidden block p-50 w-screen ">
                    <div className="flex justify-center">
                        <div className="">
                            <div className="">

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
                        <div className=" ">
                            <div className="flex flex-col justify-between  h-full">

                                <div className="  mx-auto">
                                    <Image src="/logo6.png" alt="iit kanpur" height={150} width={150} />
                                </div>
                                <div className="  mx-auto">
                                    <Image src="/logo7.png" alt="iit kanpur" height={150} width={150} />
                                </div>
                                <div className=" mx-auto">
                                    <Image src="/logo8.png" alt="iit kanpur" height={150} width={150} />
                                </div>
                                <div className=" mx-auto">
                                    <Image src="/logo9.png" alt="iit kanpur" height={150} width={150} />
                                </div>
                                <div className=" mx-auto">
                                    <Image src="/logo10.png" alt="iit kanpur" height={150} width={150} />
                                </div>

                            </div>
                        </div>
                    </div>
                </div>


                <div className="hidden md:block grid">
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
    );
}

export default OurStudents;