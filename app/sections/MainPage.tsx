import React from "react";
import Image from "next/image";


const MainPage = () => {

    return(
        <div className="w-full h-[80%] justify-center items-center ">
            <div className="w-[80%] h-[80%] mx-auto flex justify-center items-center">
                <div className="grid mt-40">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mx-auto">
                        <div className="order-last md:order-first flex items-center font-medium">
                            <div className="z-10 duration-100 text-2xl md:text-6xl">We give <span className="text-[#4287f5]">you</span> the tools to carve your path to <span className="text-[#4287f5]">Success</span>
                                <div className="pt-2 text-base md:text-4xl text-gray-700">Upskill yourself with industry specific courses employers are looking for in a candidate</div>
                            </div>
                        </div>
                        <div className="w-full h-full flex items-center justify-center">
                            <Image className="h-[80%] w-[80%]" src="/h1.png" width={400} height={400} alt="dummy" / >
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MainPage;
