"use client"
import { useState } from "react"
import Link from "next/link"
import DownArrowicon from "../icons/DownArrowicon"
const Menu = () => {
    const [isRotated, setisRotated] = useState(false)


    return (
        <div className="hidden lg:flex text-white items-center  gap-10 text-sm font-medium">
            <div className=" cursor-pointer flex gap-2 items-center justify-between text-sm text-white " >
                <Link href="" className="">What we do</Link>
                <div onClick={() => setisRotated(!isRotated)} className={`ease-in-out duration-500  ${isRotated ? 'rotate-180 custom-text-sky-blue' : ''}`}>
                    <DownArrowicon height={12} width={12} color="white" />
                </div>

            </div>
            <div className=" cursor-pointer flex gap-2 items-center justify-between text-sm  text-white " >
                <Link href="">Who we are</Link>
                <div onClick={() => setisRotated(!isRotated)} className={`ease-in-out duration-500  ${isRotated ? 'rotate-180 custom-text-sky-blue' : ''}`}>
                    <DownArrowicon height={12} width={12} color="white" />
                </div>
            </div>
            <div className=" cursor-pointer flex gap-2 items-center justify-between text-sm  text-white " >
                <Link href="">Carrers</Link>
                <div onClick={() => setisRotated(!isRotated)} className={`ease-in-out duration-500  ${isRotated ? 'rotate-180 custom-text-sky-blue' : ''}`}>
                    <DownArrowicon height={12} width={12} color="white" />
                </div>
            </div>
            <div className=" cursor-pointer flex gap-2 items-center justify-between text-sm  text-white " >
                <Link href="">What we think</Link>
                <div onClick={() => setisRotated(!isRotated)} className={`ease-in-out duration-500  ${isRotated ? 'rotate-180 custom-text-sky-blue' : ''}`}>
                    <DownArrowicon height={12} width={12} color="white" />
                </div>
            </div>

        </div>
    )
}

export default Menu