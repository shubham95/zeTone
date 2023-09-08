import React from "react"
import Image from "next/image";
import GradientButton from "../components/GradientButton";
import BasicButton from "../components/BasicButton";



const CoursesSectionPage = () => {

    return(
        <div className="w-full my-20 mt-40">
            <div className="w-full h-full mx-auto  grid ">
                <div className="px-8 font-semibod flex justify-center">
                    <div>
                        <p className="text-2xl font-semibold md:text-4xl uppercase ">Courses</p>
                        <hr className=""/>
                    </div>
                </div>
                <div className="grid pt-20 mx-6">
                    <div className="grid grid-rows-1 md:grid-cols-4 gap-8 mx-auto ">
                    {/* card-1 */}

                        <div className="flex hover:scale-105 ease-in duration-300">
                            <div className="rounded-xl shadow-lg shadow-gray-400">
                                <div className="p-8">
                                    <div className="flex justify-center">
                                        <h4 className="mb-4 text-2xl font-semibold">Pay-After-Placement End-to-End Course</h4>
                                    </div>
                                    <div className="flex justify-center">
                                        {/* <Image src="/interview.svg" alt="" width={100} height={100}/> */}
                                    </div>
                                    <div>
                                        <ul className="space-y-4  list-disc list-inside dark:text-gray-400">
                                                <ol className="pl-5 mt-2 space-y-1 list-decimal list-inside">
                                                    <li>Working professionals, pre-final/final year engineering students.</li>
                                                    <li> Crafted by IIT Alumni Industry experts.</li>
                                                    <li> Pay as low as 10% of your first-year base salary upon placement.</li>
                                                    <li> Engage in a 6-month weekend batch.</li>
                                                    <li> Benefit from a limited class size of under 7 students.</li>
                                                </ol>
                                        </ul>
                                    </div>
                                    <div className="pt-10">
                                        <GradientButton title="Learn More" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    {/* card2 */}
                    <div className="flex hover:scale-105 ease-in duration-300">
                            <div className="rounded-xl shadow-lg shadow-gray-400">
                                <div className="p-8">
                                    <div className="flex justify-center">
                                        <h4 className="mb-4 text-2xl font-semibold">Prepaid End-to-End Course</h4>
                                    </div>
                                    <div className="flex justify-center">
                                        {/* <Image src="/interview.svg" alt="" width={100} height={100}/> */}
                                    </div>
                                    <div>
                                        <ul className="space-y-4  list-disc list-inside dark:text-gray-400">
                                                <ol className="pl-5 mt-2 space-y-1 list-decimal list-inside">
                                                    <li>Working professionals, pre-final/final year engineering students.</li>
                                                    <li> In-depth learning: Advanced DSA, system design, interview prep, resume building, referrals.</li>
                                                    <li> Crafted by IIT Alumni Industry experts.</li>
                                                    <li> 6-month weekend batch less than 20 students</li>
                                                    <li>Enjoy one-on-one mentorship for personalized guidance</li>
                                                </ol>
                                        </ul>
                                    </div>
                                    <div className="pt-10">
                                        <GradientButton title="Learn More" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    {/* card3 */}
                    <div className="flex hover:scale-105 ease-in duration-300">
                            <div className="rounded-xl shadow-lg shadow-gray-400">
                                <div className="p-8">
                                    <div className="flex justify-center">
                                        <h4 className="mb-4 text-2xl font-semibold">Advanced DSA Batch</h4>
                                    </div>
                                    <div className="flex justify-center">
                                        {/* <Image src="/interview.svg" alt="" width={100} height={100}/> */}
                                    </div>
                                    <div>
                                        <ul className="space-y-4  list-disc list-inside dark:text-gray-400">
                                                <ol className="pl-5 mt-2 space-y-1 list-decimal list-inside">
                                                    <li>Working professionals with basic DSA knowledge.</li>
                                                    <li> Focus: Advanced DSA, system design, interview prep, resume crafting, referrals</li>
                                                    <li> 1.5-month weekend batch (less than 20 students)</li>
                                                    <li> Personalized mentorship.</li>
                                                    <li> Benefit from a limited class size of under 7 students.</li>
                                                </ol>
                                        </ul>
                                    </div>
                                    <div className="pt-10">
                                        <GradientButton title="Learn More" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    {/* card4 */}
                    <div className="flex hover:scale-105 ease-in duration-300">
                            <div className="rounded-xl shadow-lg shadow-gray-400">
                                <div className="p-8">
                                    <div className="flex justify-center">
                                        <h4 className="mb-4 text-2xl font-semibold">Mentorship Program</h4>
                                    </div>
                                    <div className="flex justify-center">
                                        {/* <Image src="/interview.svg" alt="" width={100} height={100}/> */}
                                    </div>
                                    <div>
                                        <ul className="space-y-4  list-disc list-inside dark:text-gray-400">
                                                <ol className="pl-5 mt-2 space-y-1 list-decimal list-inside">
                                                    <li> Working professionals with DSA knowledge</li>
                                                    <li>Two month personalized guidance</li>
                                                    <li> Tailored mentorship: placements, DSA (Basic & Advanced), system design, interview prep, resume building, referrals.</li>
                                                </ol>
                                        </ul>
                                    </div>
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

export default CoursesSectionPage;