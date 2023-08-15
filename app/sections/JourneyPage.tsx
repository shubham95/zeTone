'use client'
import React from "react";
import Image from "next/image";
import { Variants, motion } from "framer-motion"

const introHeaderVariants: Variants = {
    hide: {
        opacity: 0,
        x: -300,
    },
    show: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 1,
        },
    },
};

const JourneyPage = () => {
    return(
        <motion.div className=""
            initial="hide"
            whileInView="show"
            variants={introHeaderVariants}  
            viewport={{ once: true }}      
        >
            <Image className="" src="/journey.png" alt="journey" height={4000} width={6000}></Image>
        </motion.div>
    )
}

export default JourneyPage;