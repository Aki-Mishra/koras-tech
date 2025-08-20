"use client"
import { useState } from "react"
import DownArrowicon from "../icons/DownArrowicon"
import { Facebook } from "lucide-react"

const WhatWeDo = () => {
    const [capabalitiesOpen, setCapabalitiesOpen] = useState(false)
    const [industriesOpen, setIndustriesOpen] = useState(false)
    return (
        // main page
        <div className=" my-12 text-sm text-white">
            {/* About us section */}
            <div className="flex gap-3 items-center  mb-10 text-xl font-semibold inter-font">
                About Koras Tech
                <div className="rotate-90 custom-sky-blue-background p-[2px]">
                    <DownArrowicon height={18} width={18} color="white" />
                </div>
            </div>
            {/*Our organization and How we serve section */}
            <div className="flex flex-col md:flex-row gap-1 lg:gap-12">
                {/* Our organization */}
                <div className="pb-3 mb-1 md:pb-2 flex-1 ">
                    <div className={`font-semibold text-xs inter-font tracking-wide flex justify-between ease-in duration-300  ${capabalitiesOpen ?"text-[#6C7A89]": ""} ease-in duration-300 `} onClick={() => { setCapabalitiesOpen(!capabalitiesOpen); setIndustriesOpen(false) }}>
                        Our organization
                        <div className={`md:hidden ${capabalitiesOpen ?"": "-rotate-180"} ease-in duration-300`}>
                            <DownArrowicon height={18} width={18} color="white" />
                        </div>
                    </div>
                    <div className={`overflow-hidden transition-all duration-500 ease-in-out ${capabalitiesOpen ? "max-h-[2000px] " : "max-h-0 " } md:max-h-[2000px]`}>
                        <ul className="list-none text-xs font-semibold inter-font md:text-base lg:text-sm - inter-font mx-2 lg:mt-2  md:mx-0 my-6 lg:max-h-[calc(70vh-200px)] lg:grid lg:grid-cols-2 lg:grid-rows-10 lg:gap-x-5 lg:gap-y-0 lg:mb-12">
                            <li className="py-4 px-3 underline-offset-4 md:py-2 md:px-0 hover:text-[#31D2F2]">Our Mission & Vision</li>
                            <li className="py-4 px-3 underline-offset-4 md:py-2 md:px-0 hover:text-[#31D2F2]">Leadership Team</li>
                            <li className="py-4 px-3 underline-offset-4 md:py-2 md:px-0 hover:text-[#31D2F2]">Partnerships & Alliances</li>
                            <li className="py-4 px-3 underline-offset-4 md:py-2 md:px-0 hover:text-[#31D2F2]">Achievements & Milestones </li>
                            <li className="py-4 px-3 underline-offset-4 md:py-2 md:px-0 hover:text-[#31D2F2]">Client-Centric Approach</li>
                            <li className="py-4 px-3 underline-offset-4 md:py-2 md:px-0 hover:text-[#31D2F2]">Our Journey</li>
                            <li className="py-4 px-3 underline-offset-4 md:py-2 md:px-0 hover:text-[#31D2F2]">Future Goals </li>
                          
                        </ul>
                    </div>
                </div>
                {/* How we serve */}
                <div className="pb-3 flex-1">
                    <div className={`font-semibold inter-font text-xs tracking-wide flex justify-between ease-in duration-300 md:text-[#6C7A89]  ${industriesOpen ?"text-[#6C7A89]": ""} ease-in duration-300 `} onClick={() => { setIndustriesOpen(!industriesOpen); setCapabalitiesOpen(false) }}>
                        How we serve
                        <div className={`md:hidden ${industriesOpen ?"": "-rotate-180"} ease-in duration-300`}>
                            <DownArrowicon height={18} width={18} color="white " />
                        </div>


                    </div>
                    <div className={`overflow-hidden transition-all duration-500 ease-in-out md:max-h-[2000px] ${industriesOpen ? "max-h-[2000px] " : "max-h-0 " }`}>
                      <ul className="list-none text-xs md:text-base lg:text-md font-semibold inter-font mx-2 lg:mt-2  md:mx-0 my-6 lg:max-h-[calc(70vh-200px)] lg:grid lg:grid-cols-2 lg:grid-rows-10 lg:gap-x-5 lg:gap-y-0 lg:mb-12">
                            <li className="py-4 px-3 underline-offset-4 md:py-2 md:px-0 hover:text-[#31D2F2]">Client-Centric Methodology</li>
                            <li className="py-4 px-3 underline-offset-4 md:py-2 md:px-0 hover:text-[#31D2F2]">End-to-End Delivery Model</li>
                            <li className="py-4 px-3 underline-offset-4 md:py-2 md:px-0 hover:text-[#31D2F2]">Dedicated Teams</li>
                            <li className="py-4 px-3 underline-offset-4 md:py-2 md:px-0 hover:text-[#31D2F2]">Collaborative Process</li>
                            <li className="py-4 px-3 underline-offset-4 md:py-2 md:px-0 hover:text-[#31D2F2]">Custom Solutions</li>
                            <li className="py-4 px-3 underline-offset-4 md:py-2 md:px-0 hover:text-[#31D2F2]">Communication & Transparency</li>
                          
                        </ul>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default WhatWeDo

