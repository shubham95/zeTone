'use client'

import React from "react";

const GradientButton = (props:any) => {
    return (
        <div className="grid gap-8 items-start justify-center ">
            <div className="relative group">
                <div className="absolute inset-0 bg-orange-500 rounded-lg blur opacity-75 bg-gradient-to-r from-orange-600 to-green-600
                hover:scale-105 duration-300"></div>
                <button onClick={props.clickAction} className="relative px-7 py-4 rounded-lg bg-[#0b57d0] text-xl text-white leading-none hover:scale-105 duration-300">{props.title} &rarr;</button>
            </div>
        </div>
    )
}

export default GradientButton;