"use client"
import { useState } from "react"
import DownArrowicon from "../icons/DownArrowicon"

const WhatWeDo = () => {
    const [capabalitiesOpen, setCapabalitiesOpen] = useState(false)
    const [industriesOpen, setIndustriesOpen] = useState(false)
    return (
        // main page
        <div className=" my-12 text-sm text-white">
            {/* what we do */}
            <div className="flex gap-3 items-center  mb-10 text-xl font-semibold">
                What we do
                <div className="rotate-90 custom-sky-blue-background p-[2px]">
                    <DownArrowicon height={18} width={18} color="white" />
                </div>
            </div>
            {/* Capabilites and Industries section */}
            <div className="flex flex-col md:flex-row gap-1 lg:gap-12">
                {/* capabalities */}
                <div className="pb-3 mb-1 md:pb-2 flex-1 ">
                    <div className={`font-medium tracking-wide flex justify-between ease-in duration-300  ${capabalitiesOpen ?"text-[#6C7A89]": ""} ease-in duration-300 `} onClick={() => { setCapabalitiesOpen(!capabalitiesOpen); setIndustriesOpen(false) }}>
                        Capabalites
                        <div className={`md:hidden ${capabalitiesOpen ?"": "-rotate-180"} ease-in duration-300`}>
                            <DownArrowicon height={18} width={18} color="white" />
                        </div>
                    </div>
                    <div className={`overflow-hidden transition-all duration-500 ease-in-out ${capabalitiesOpen ? "max-h-[2000px] " : "max-h-0 " } md:max-h-[2000px]`}>
                        <ul className="list-none text-sm md:text-base lg:text-sm font-medium mx-2 lg:mt-2  md:mx-0 my-6 lg:max-h-[calc(70vh-200px)] lg:grid lg:grid-cols-2 lg:grid-rows-10 lg:gap-x-5 lg:gap-y-0 lg:mb-12">
                            <li className="py-4 px-3 underline-offset-4 md:py-2 md:px-0 hover:underline">IT Services & Consulting</li>
                            <li className="py-4 px-3 underline-offset-4 md:py-2 md:px-0 hover:underline">Application Development</li>
                            <li className="py-4 px-3 underline-offset-4 md:py-2 md:px-0 hover:underline">Cloud Solutions</li>
                            <li className="py-4 px-3 underline-offset-4 md:py-2 md:px-0 hover:underline">Cybersecurity Services</li>
                            <li className="py-4 px-3 underline-offset-4 md:py-2 md:px-0 hover:underline">Data Analytics & Insights</li>
                            <li className="py-4 px-3 underline-offset-4 md:py-2 md:px-0 hover:underline">AI Solution</li>
                            <li className="py-4 px-3 underline-offset-4 md:py-2 md:px-0 hover:underline">DevOps & Automation</li>
                            <li className="py-4 px-3 underline-offset-4 md:py-2 md:px-0 hover:underline">UI/UX Design</li>
                            <li className="py-4 px-3 underline-offset-4 md:py-2 md:px-0 hover:underline">Enterprise Software Solutions</li>
                            <li className="py-4 px-3 underline-offset-4 md:py-2 md:px-0 hover:underline">Mobile App Development</li>
                            <li className="py-4 px-3 underline-offset-4 md:py-2 md:px-0 hover:underline">Web Development</li>
                            <li className="py-4 px-3 underline-offset-4 md:py-2 md:px-0 hover:underline">IT Infrastructure Management</li>
                            <li className="py-4 px-3 underline-offset-4 md:py-2 md:px-0 hover:underline">Digital Transformation Consulting</li>
                            <li className="py-4 px-3 underline-offset-4 md:py-2 md:px-0 hover:underline">Internet of Things (IoT)</li>
                            <li className="py-4 px-3 underline-offset-4 md:py-2 md:px-0 hover:underline">Quality Assurance & Testing Services</li>
                            <li className="py-4 px-3 underline-offset-4 md:py-2 md:px-0 hover:underline">IT Support & Managed Services</li>
                            <li className="py-4 px-3 underline-offset-4 md:py-2 md:px-0 hover:underline">Legacy System Modernization</li>
                            <li className="py-4 px-3 underline-offset-4 md:py-2 md:px-0 hover:underline">E-commerce Development</li>
                            <li className="py-4 px-3 underline-offset-4 md:py-2 md:px-0 hover:underline">Website Management</li>
                        </ul>
                    </div>
                </div>
                {/* Industries */}
                <div className="pb-3 flex-1">
                    <div className={`font-medium tracking-wide flex justify-between ease-in duration-300 md:text-[#6C7A89]  ${industriesOpen ?"text-[#6C7A89]": ""} ease-in duration-300 `} onClick={() => { setIndustriesOpen(!industriesOpen); setCapabalitiesOpen(false) }}>
                        Industries
                        <div className={`md:hidden ${industriesOpen ?"": "-rotate-180"} ease-in duration-300`}>
                            <DownArrowicon height={18} width={18} color="white " />
                        </div>


                    </div>
                    <div className={`overflow-hidden transition-all duration-500 ease-in-out md:max-h-[2000px] ${industriesOpen ? "max-h-[2000px] " : "max-h-0 " } `}>
                      <ul className="list-none text-sm md:text-base lg:text-sm font-medium mx-2 lg:mt-2  md:mx-0 my-6 lg:max-h-[calc(70vh-200px)] lg:grid lg:grid-cols-2 lg:grid-rows-10 lg:gap-x-5 lg:gap-y-0 lg:mb-12">
                            <li className="py-4 px-3 underline-offset-4 md:py-2 md:px-0 hover:underline">E-commerce & Retail</li>
                            <li className="py-4 px-3 underline-offset-4 md:py-2 md:px-0 hover:underline">Healthcare</li>
                            <li className="py-4 px-3 underline-offset-4 md:py-2 md:px-0 hover:underline">Finance & Banking</li>
                            <li className="py-4 px-3 underline-offset-4 md:py-2 md:px-0 hover:underline">Education & E-learning</li>
                            <li className="py-4 px-3 underline-offset-4 md:py-2 md:px-0 hover:underline">Manufacturing</li>
                            <li className="py-4 px-3 underline-offset-4 md:py-2 md:px-0 hover:underline">Logistics & Supply Chain</li>
                            <li className="py-4 px-3 underline-offset-4 md:py-2 md:px-0 hover:underline">Real Estate</li>
                            <li className="py-4 px-3 underline-offset-4 md:py-2 md:px-0 hover:underline">Travel & Hospitality</li>
                            <li className="py-4 px-3 underline-offset-4 md:py-2 md:px-0 hover:underline">Telecommunications</li>
                            <li className="py-4 px-3 underline-offset-4 md:py-2 md:px-0 hover:underline">Energy & Utilities</li>
                            <li className="py-4 px-3 underline-offset-4 md:py-2 md:px-0 hover:underline">Media & Entertainment</li>
                            <li className="py-4 px-3 underline-offset-4 md:py-2 md:px-0 hover:underline">Government & Public Sector</li>
                            <li className="py-4 px-3 underline-offset-4 md:py-2 md:px-0 hover:underline">Automotive</li>
                            <li className="py-4 px-3 underline-offset-4 md:py-2 md:px-0 hover:underline">Insurance</li>
                            <li className="py-4 px-3 underline-offset-4 md:py-2 md:px-0 hover:underline">Legal & Law Firms</li>
                            <li className="py-4 px-3 underline-offset-4 md:py-2 md:px-0 hover:underline">Agriculture & AgriTech</li>
                            <li className="py-4 px-3 underline-offset-4 md:py-2 md:px-0 hover:underline">Construction & Infrastructure</li>
                            <li className="py-4 px-3 underline-offset-4 md:py-2 md:px-0 hover:underline">Non-Profit Organizations</li>
                            <li className="py-4 px-3 underline-offset-4 md:py-2 md:px-0 hover:underline">Aerospace & Defense</li>
                            <li className="py-4 px-3 underline-offset-4 md:py-2 md:px-0 hover:underline">Sports & Fitness Tech</li>
                        </ul>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default WhatWeDo
