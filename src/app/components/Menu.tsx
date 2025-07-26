"use client"
import { useState } from "react"
import Link from "next/link"
import DownArrowicon from "../icons/DownArrowicon"
import WhatWeAre from "./WhatWeAre"
import WhatWeDo from "./WhatWeDo"
import Carrers from "./Carrers"
const Menu = () => {
    const [isRotated, setisRotated] = useState(false)
    const [activeIndex, setActiveIndex] = useState(0)


    return (
        <div className="">


            <div className="hidden lg:flex text-white items-center  gap-10 text-sm font-medium">
                <div onClick={() => { setActiveIndex(activeIndex > 0? 0: 1);}} className=" cursor-pointer flex gap-2 items-center justify-between text-sm text-white " >
                    <Link href="" className="">What we do <span className={`h-[1px] ease-in duration-300 bg-white block ${activeIndex===1 ? 'w-[100%]' : 'w-0'}`}></span></Link>
                    <div  className={`ease-in-out duration-500  ${activeIndex===1 ? '-rotate-180 custom-text-sky-blue' : ''}`}>
                        <DownArrowicon height={12} width={12} color="white" />
                    </div>

                </div>
                <div onClick={() => { setActiveIndex(activeIndex > 0? 0: 2);}} className=" cursor-pointer flex gap-2 items-center justify-between text-sm  text-white " >
                    <Link href="">Who we are <span className={`h-[1px] ease-in duration-300 bg-white block ${activeIndex===2 ? 'w-[100%]' : 'w-0'}`}></span></Link>
                    <div className={`ease-in-out duration-500  ${activeIndex===2  ? 'rotate-180 custom-text-sky-blue' : ''}`}>
                        <DownArrowicon height={12} width={12} color="white" />
                    </div>
                </div>
                <div  onClick={() => { setActiveIndex(activeIndex > 0? 0: 3);}} className=" cursor-pointer flex gap-2 items-center justify-between text-sm  text-white " >
                    <Link href="">Carrers <span className={`h-[1px] ease-in duration-300 bg-white block ${activeIndex===3 ? 'w-[100%]' : 'w-0'}`}></span></Link>
                    <div className={`ease-in-out duration-500  ${activeIndex===3  ? 'rotate-180 custom-text-sky-blue' : ''}`}>
                        <DownArrowicon height={12} width={12} color="white" />
                    </div>
                </div>
                <div className=" cursor-pointer flex gap-2 items-center justify-between text-sm  text-white " >
                    <Link href="">What we think</Link>
                </div>

            </div>
            <div className={`hidden z-10 lg:block custom-gradient-background-style  w-[100%] top-[72px] left-0 absolute px-36   border-b-[#31D2F2] ease duration-300 ${activeIndex===1?"h-[75vh] p-t-8 border-b-1": "pt-0 h-0 border-b-0"} overflow-hidden`}>
                <WhatWeDo />
            </div>
            <div className={`hidden z-10 lg:block custom-gradient-background-style  w-[100%] top-[72px] left-0 absolute px-36   border-b-[#31D2F2] ease duration-300 ${activeIndex===2?"h-[75vh] p-t-8 border-b-1": "pt-0 h-0 border-b-0"} overflow-hidden`}>
                <WhatWeAre />
            </div>
            <div className={`hidden z-10 lg:block custom-gradient-background-style  w-[100%] top-[72px] left-0 absolute px-36   border-b-[#31D2F2] ease duration-300 ${activeIndex===3?"h-[75vh] p-t-8 border-b-1": "pt-0 h-0 border-b-0"} overflow-hidden`}>
                <Carrers />
            </div>
        </div>

    )
}

export default Menu