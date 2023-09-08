'use client'

import React from "react";

const BasicButton = (props:any) => {
    return (
        <div className="grid gap-8 items-start justify-center ">
            <div className="relative group">
                <div className="absolute inset-0 rounded-lg blur opacity-75 
                hover:scale-105 duration-300"></div>
                <button onClick={props.clickAction} className="relative px-7 py-4 rounded-lg bg-[#0b57d0] text-base text-white leading-none hover:scale-105 duration-300">{props.title} &rarr;</button>
            </div>
        </div>
    )
}

export default BasicButton;