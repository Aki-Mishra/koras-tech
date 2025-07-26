"use client"
import { useState } from "react"
import DownArrowicon from "../icons/DownArrowicon"

const WhatWeDo = () => {
    const [capabalitiesOpen, setCapabalitiesOpen] = useState(false)
    const [industriesOpen, setIndustriesOpen] = useState(false)
    return (
        // main page
        <div className=" my-12 text-sm text-white">
            {/* Carrers*/}
            <div className="flex gap-3 items-center  mb-10 text-xl font-semibold">
                What we do
                <div className="rotate-90 custom-sky-blue-background p-[2px]">
                    <DownArrowicon height={18} width={18} color="white" />
                </div>
            </div>
            {/* find a job and How we are*/}
            <div className="flex flex-col md:flex-row gap-1 lg:gap-12">
                {/* find a job */}
                <div className="pb-3 mb-1 md:pb-2 flex-1 ">
                    <div className={`font-medium tracking-wide flex justify-between ease-in duration-300  ${capabalitiesOpen ? "text-[#6C7A89]" : ""} ease-in duration-300 `} onClick={() => { setCapabalitiesOpen(!capabalitiesOpen); setIndustriesOpen(false) }}>
                        Find a job
                        <div className={`md:hidden ${capabalitiesOpen ? "" : "-rotate-180"} ease-in duration-300`}>
                            <DownArrowicon height={18} width={18} color="white" />
                        </div>
                    </div>
                    <div className={`overflow-hidden transition-all duration-500 ease-in-out ${capabalitiesOpen ? "max-h-[2000px] " : "max-h-0 "} md:max-h-[2000px]`}>
                        <ul className="list-none text-sm md:text-base lg:text-sm font-medium mx-2 lg:mt-2  md:mx-0 my-6 lg:max-h-[calc(70vh-200px)] lg:grid lg:grid-cols-2 lg:grid-rows-10 lg:gap-x-5 lg:gap-y-0 lg:mb-12">
                            <li className="py-4 px-3 underline-offset-4 md:py-2 md:px-0 hover:underline">Carrear Areas at Koras</li>
                        </ul>
                    </div>
                </div>
                {/* How we are */}
                <div className="pb-3 flex-1">
                    <div className={`font-medium tracking-wide flex justify-between ease-in duration-300 md:text-[#6C7A89]  ${industriesOpen ? "text-[#6C7A89]" : ""} ease-in duration-300 `} onClick={() => { setIndustriesOpen(!industriesOpen); setCapabalitiesOpen(false) }}>
                        How we hire
                        <div className={`md:hidden ${industriesOpen ? "" : "-rotate-180"} ease-in duration-300`}>
                            <DownArrowicon height={18} width={18} color="white " />
                        </div>


                    </div>
                    <div className={`overflow-hidden transition-all duration-500 ease-in-out md:max-h-[2000px] ${industriesOpen ? "max-h-[2000px] " : "max-h-0 "} `}>
                        <ul className="list-none text-sm md:text-base lg:text-sm font-medium mx-2 lg:mt-2  md:mx-0 my-6 lg:max-h-[calc(70vh-200px)] lg:grid lg:grid-cols-2 lg:grid-rows-10 lg:gap-x-5 lg:gap-y-0 lg:mb-12">
                            <li className="py-4 px-3 underline-offset-4 md:py-2 md:px-0 hover:underline">Hiring Journey</li>
                            <li className="py-4 px-3 underline-offset-4 md:py-2 md:px-0 hover:underline">Pro tip</li>
                        </ul>
                        
                    </div>

                </div>
            </div>
        </div>
    )
}

export default WhatWeDo
