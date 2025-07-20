"use client"
import { useState } from "react"
import DownArrowicon from "../icons/DownArrowicon"

const WhatWeDo = () => {
    const [capabalitiesOpen, setCapabalitiesOpen] = useState(false)
    const [industriesOpen, setIndustriesOpen] = useState(false)
    return (
        // main page
        <div className=" my-12 text-sm lg:hidden">
            {/* what we do */}
            <div className="flex gap-3 items-center  mb-4 text-xl font-semibold">
                What we do
                <div className="rotate-90 custom-sky-blue-background p-[2px]">
                    <DownArrowicon height={18} width={18} color="white" />
                </div>
            </div>
            {/* Capabilites and Industries section */}
            <div className="">
                {/* capabalities */}
                <div className="pb-3 mb-1">
                    <div className={`font-medium tracking-wide flex justify-between ease-in duration-300  ${capabalitiesOpen ?"text-[#6C7A89]": ""} ease-in duration-300 `} onClick={() => { setCapabalitiesOpen(!capabalitiesOpen); setIndustriesOpen(false) }}>
                        Capabalites
                        <div className={`${capabalitiesOpen ?"": "-rotate-180"} ease-in duration-300`}>
                            <DownArrowicon height={18} width={18} color="white" />
                        </div>
                    </div>
                    <div className={`overflow-hidden transition-all duration-500 ease-in-out ${capabalitiesOpen ? "max-h-[2000px] " : "max-h-0 " }`}>
                        <ul className="list-none text-sm font-medium mx-2 my-6">
                            <li className="my-4 mx-3">IT Services & Consulting</li>
                            <li className="my-4 mx-3">Application Development & Maintenance</li>
                            <li className="my-4 mx-3">Cloud Solutions</li>
                            <li className="my-4 mx-3">Cybersecurity Services</li>
                            <li className="my-4 mx-3">Data Analytics & Insights</li>
                            <li className="my-4 mx-3">Artificial Intelligence Solution</li>
                            <li className="my-4 mx-3">DevOps & Automation</li>
                            <li className="my-4 mx-3">UI/UX Design</li>
                            <li className="my-4 mx-3">Enterprise Software Solutions</li>
                            <li className="my-4 mx-3">Mobile App Development</li>
                            <li className="my-4 mx-3">Web Development</li>
                            <li className="my-4 mx-3">IT Infrastructure Management</li>
                            <li className="my-4 mx-3">Digital Transformation Consulting</li>
                            <li className="my-4 mx-3">Internet of Things (IoT)</li>
                            <li className="my-4 mx-3">Quality Assurance & Testing Services</li>
                            <li className="my-4 mx-3">IT Support & Managed Services</li>
                            <li className="my-4 mx-3">Legacy System Modernization</li>
                            <li className="my-4 mx-3">E-commerce Development</li>
                            <li className="my-4 mx-3">Website Management</li>
                        </ul>
                    </div>
                </div>
                {/* Industries */}
                <div className="pb-3">
                    <div className={`font-semibold tracking-wide flex justify-between ease-in duration-300  ${industriesOpen ?"text-[#6C7A89]": ""} ease-in duration-300 `} onClick={() => { setIndustriesOpen(!industriesOpen); setCapabalitiesOpen(false) }}>
                        Industries
                        <div className={`${industriesOpen ?"": "-rotate-180"} ease-in duration-300`}>

                            <DownArrowicon height={18} width={18} color="white" />
                        </div>


                    </div>
                    <div className={`overflow-hidden transition-all duration-500 ease-in-out ${industriesOpen ? "max-h-[2000px] " : "max-h-0 " }`}>
                        <ul className="list-none text-sm font-medium mx-2 my-6">
                            <li className="my-4 mx-3">E-commerce & Retail</li>
                            <li className="my-4 mx-3">Healthcare</li>
                            <li className="my-4 mx-3">Finance & Banking</li>
                            <li className="my-4 mx-3">Education & E-learning</li>
                            <li className="my-4 mx-3">Manufacturing</li>
                            <li className="my-4 mx-3">Logistics & Supply Chain</li>
                            <li className="my-4 mx-3">Real Estate</li>
                            <li className="my-4 mx-3">Travel & Hospitality</li>
                            <li className="my-4 mx-3">Telecommunications</li>
                            <li className="my-4 mx-3">Energy & Utilities</li>
                            <li className="my-4 mx-3">Media & Entertainment</li>
                            <li className="my-4 mx-3">Government & Public Sector</li>
                            <li className="my-4 mx-3">Automotive</li>
                            <li className="my-4 mx-3">Insurance</li>
                            <li className="my-4 mx-3">Legal & Law Firms</li>
                            <li className="my-4 mx-3">Agriculture & AgriTech</li>
                            <li className="my-4 mx-3">Construction & Infrastructure</li>
                            <li className="my-4 mx-3">Non-Profit Organizations</li>
                            <li className="my-4 mx-3">Aerospace & Defense</li>
                            <li className="my-4 mx-3">Sports & Fitness Tech</li>
                        </ul>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default WhatWeDo
