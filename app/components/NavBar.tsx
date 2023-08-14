'use client'

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import {AiOutlineClose, AiOutlineMail, AiOutlineMenu} from 'react-icons/ai';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { BsWhatsapp } from 'react-icons/bs';


const NavBar = () =>{
    
    const [mobNav, setMobNav] = useState(false);
    const [showTopShadow, setShowTopShadow] = useState(false)


    const toggleMobNav = () => {
        setMobNav(!mobNav);
    }

    useEffect(()=>{
        const handleShadow = () =>{
            if(window.scrollY >=90) {
                setShowTopShadow(true)
            } else{
                setShowTopShadow(false)
            }
        };
        window.addEventListener('scroll', handleShadow)
    },[]);

    return(
        <div className={showTopShadow?"fixed w-full h-20 shadow-xl z-[100] opacity-75 bg-white":"fixed w-full h-20 z-[100] bg-white"}>
            {/* Desktop View of NavBar */}
            <div className={mobNav?"hidden":"flex justify-between items-center w-full h-full px-6 2xl:px-16"}>
                <Image className="hover:scale-110 ease-in duration-300" src="/logo.png" width={125} height={30} alt="/" />

                <div className="justify-between">
                    <ul className="hidden md:flex">
                        <Link href="/">
                            <li className="ml-5 text-base uppercase hover:scale-110 ease-in duration-300">Home</li>
                        </Link>
                        <Link href="/mock">
                            <li className="ml-5 text-base uppercase hover:scale-110 ease-in duration-300">Mock Interview</li>
                        </Link>
                        <Link href="/">
                            <li className="ml-5 text-base uppercase hover:scale-110 ease-in duration-300">Referral</li>
                        </Link>
                        <Link href="/">
                            <li className="ml-5 text-base uppercase hover:scale-110 ease-in duration-300">Courses</li>
                        </Link>
                        <Link href="/">
                            <li className="ml-5 text-base uppercase hover:scale-110 ease-in duration-300">Contact</li>
                        </Link>
                    </ul>
                </div>

                <div className="md:hidden" onClick={toggleMobNav}>
                    <AiOutlineMenu size={25}/>
                </div>
            </div>

            {/* creating NavBar for Mobile View */}
            <div className={mobNav?"md:hidden fixed left-0 top-0 w-full h-screen bg-black/70":""}> 
                <div className={mobNav
                                ?"fixed left-0 top-0 w-[80%] h-screen bg-white p-10 ease-in duration-500"
                                :"fixed left-[-100%] ease-in duration-500"
                                }>
                    <div className="flex justify-between items-center">
                        <Image className="hover:scale-110 ease-in duration-300" src="/logo.png" width={125} height={50} alt="/" />
                        <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer" onClick={toggleMobNav}><AiOutlineClose size={25}/></div>
                    </div>
                    <div className="justify-between">
                        <ul className="flex flex-col" onClick={toggleMobNav}>
                            <Link href="/">
                                <li className="mt-10 text-xl uppercase hover:scale-110 ease-in duration-300">Home</li>
                            </Link>
                            <Link href="/mock">
                                <li className="mt-10 text-xl uppercase hover:scale-110 ease-in duration-300">Mock Interview</li>
                            </Link>
                            <Link href="/">
                                <li className="mt-10 text-xl uppercase hover:scale-110 ease-in duration-300">Get Referral</li>
                            </Link>
                            <Link href="/">
                                <li className="mt-10 text-xl uppercase hover:scale-110 ease-in duration-300">Courses</li>
                            </Link>
                            <Link href="/">
                                <li className="mt-10 text-xl uppercase hover:scale-110 ease-in duration-300">Contact</li>
                            </Link>
                        </ul>
                    </div>
                    {/* Bottom connect */}
                    <div className="pt-20">
                        <p className="uppercase tracking-wide text-blue-400"> Lets Connet</p>
                        <div className="flex justify-between items my-4 w-full sm:w-[80%]">
                            <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                                <FaLinkedinIn />
                            </div>
                            <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                                <FaGithub />
                            </div>
                            <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                                <AiOutlineMail />
                            </div>
                            <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                                <BsWhatsapp />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>        
    )
}

export default NavBar;