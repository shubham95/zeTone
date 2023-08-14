import React from "react";
import Image from "next/image";
import "./sliderAnimationCSS.css";

const OurMentorsPage = () => {
    return (
        <div className="t">
            <div className="text-center text-4xl md:text-6xl">Our Mentors</div>
            <div className="text-center text-xl md:text-2xl pt-20 p-6">
                <p>Our mentors come from prestigious universities and know exactly what you need to crack that interview. They are established professionals who have abundant industry exposure. You will be paired with a mentor to give you one-on-one guidance, share industry experience and help you get your dream job.</p>
            </div>
            <div className="ts pt-40 pb-40">

                <div className="logo-slide w-screen">
                    <div className="flex justify-between">

                        <div className="item-center justify-center mx-auto">
                            <Image src="/iit1.png" alt="iit kanpur" height={150} width={150} />
                        </div>
                        <div className="item-center justify-center mx-auto">
                            <Image src="/iit2.png" alt="iit kanpur" height={150} width={150} />
                        </div>
                        <div className="item-center justify-center mx-auto">
                            <Image src="/iit3.jpg" alt="iit kanpur" height={150} width={150} />
                        </div>
                        <div className="item-center mx-auto">
                            <Image src="/iit4.png" alt="iit kanpur" height={150} width={150} />
                        </div>
                        <div className="item-center mx-auto">
                            <Image src="/iit5.png" alt="iit kanpur" height={150} width={150} />
                        </div>
                        <div className="item-center mx-auto">
                            <Image src="/iit6.png" alt="iit kanpur" height={150} width={150} />
                        </div>
                    </div>
                </div>
                <div className="logo-slide w-screen">
                    <div className="flex justify-between">

                        <div className="item-center justify-center mx-auto">
                            <Image src="/iit1.png" alt="iit kanpur" height={150} width={150} />
                        </div>
                        <div className="item-center justify-center mx-auto">
                            <Image src="/iit2.png" alt="iit kanpur" height={150} width={150} />
                        </div>
                        <div className="item-center justify-center mx-auto">
                            <Image src="/iit3.jpg" alt="iit kanpur" height={150} width={150} />
                        </div>
                        <div className="item-center mx-auto">
                            <Image src="/iit4.png" alt="iit kanpur" height={150} width={150} />
                        </div>
                        <div className="item-center mx-auto">
                            <Image src="/iit5.png" alt="iit kanpur" height={150} width={150} />
                        </div>
                        <div className="item-center mx-auto">
                            <Image src="/iit6.png" alt="iit kanpur" height={150} width={150} />
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default OurMentorsPage;