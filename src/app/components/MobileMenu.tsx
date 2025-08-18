"use client"
import Link from "next/link"
import { useRef, useState } from "react"
import DownArrowicon from "../icons/DownArrowicon"
import WhatWeDo from "./WhatWeDo"
import { ActivityIcon } from "lucide-react"
import WhatWeAre from "./WhatWeAre"
import Carrers from "./Carrers"
import HamBurgerMenu from "../icons/HamBurgerMenu"
import CloseMenu from "../icons/CloseMenu"
const MobileMenu = () => {
    const [isOpen, setisOpen] = useState(false)
    const [open, setOpen] = useState(false)
    const [activeIndex, setActiveIndex] = useState(0)

    return (
        <div className="z-10 lg:hidden w-[100%] overflow-hidden   ">
            <div className="" onClick={() => { setisOpen(!isOpen) }}>
                <HamBurgerMenu />
            </div>
    
            {/* Cross Icon */}


            <div className={`z-30 custom-gradient-background-style py-2.5  md:py-8 px-4 md:px-12 absolute top-0 flex flex-col  ease-in-out duration-200 lg:hidden text-white h-full w-[100%] ${isOpen ? 'left-0' : "-left-[100%]"}`}>
               
                <div className="py-2.5 flex items-center justify-end" onClick={() => { setisOpen(!isOpen) }}>
                    <CloseMenu />
                </div>
                <div className="flex flex-col flex-1 w-full text-sm text-white my-12 px-1 justify-between ">
                    <div className="flex flex-col gap-5  items-center justify-center w-[100%] ">
                        <div className="flex gap-2 items-center justify-between w-[100%] relative font-semibold inter-font">

                            <Link href="/" className={` hover:bg-[#31D2F2] `}>
                                What we do
                                <span className={`ease-in duration-200 h-[1px] bg-[#fff] mt-0.5 block ${activeIndex === 1 ? "w-[100%]" : "w-0"}`}>

                                </span>
                            </Link>
                            <div className="rotate-90" onClick={() => { setActiveIndex(1) }}>
                                <DownArrowicon height={18} width={18} color="white" />
                            </div>
                        </div>
                        <div className="flex gap-2 items-center justify-between w-[100%] font-semibold inter-font">
                            <Link href="/" className="hover:bg-[#31D2F2]  ">What we are</Link>
                            <div className="rotate-90" onClick={() => { setActiveIndex(2) }}>
                                <DownArrowicon height={16} width={16} color="white" />
                            </div>
                        </div>
                        <div className="flex gap-2 items-center justify-between w-[100%]">
                            <Link href="/" className="hover:bg-[#31D2F2] font-semibold inter-font ">Carrers</Link>
                            <div className="rotate-90" onClick={() => { setActiveIndex(3) }}>
                                <DownArrowicon height={16} width={16} color="white" />
                            </div>
                        </div>
                        <div className="flex gap-2 items-center justify-between w-[100%] group">
                            <Link href="/" className="group-[.group]:group  font-semibold inter-font">
                                What we think
                                <span className={`ease-in duration-200 h-[1px] bg-[#fff] mt-0.5 block group-hover:w-full w-0`}>

                                </span>
                            </Link>

                        </div>
                    </div>
                    <div className="flex flex-col gap-5  items-center justify-end w-[100%]">

                        <div className="flex gap-2 items-center justify-between w-[100%]">

                            <Link href="/" className="hover:bg-[#31D2F2] inter-font font-semibold text-sm  inter-font ">Careers</Link>

                        </div>

                    </div>
                    {/* for Social Media Icons */}
                    <div className=""></div>
                </div>
            </div>
            <div className={`z-40 custom-gradient-background-style py-5 md:py-8 px-4 md:px-12 absolute top-0 flex flex-col  ease-in-out duration-500 lg:hidden text-white h-auto min-h-[100%] w-[100%] ${[1, 2, 3].includes(activeIndex) ? 'left-0' : "-left-[100%]"}`}>
                {/* back button */}
                <div className="flex  gap-1 lg:hidden cursor-pointer items-center" onClick={() => { setActiveIndex(0) }} >
                    <div className="-rotate-90">
                        <DownArrowicon height={20} width={20} color="white" />
                    </div>
                    <div className="">
                        <p className="custom-poppins-font ">Back</p>
                    </div>

                </div>
                <div className={`${activeIndex === 1 ? "" : "hidden"}`}>
                    <WhatWeDo />
                    {/* <WhatWeAre/> */}
                </div>
                <div className={`${activeIndex === 2 ? "" : "hidden"}`}>
                    <WhatWeAre />
                </div>
                <div className={`${activeIndex === 3 ? "" : "hidden"}`}>
                    <Carrers />
                </div>

            </div>


        </div>
    )
}

export default MobileMenu