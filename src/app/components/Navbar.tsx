import KorasLogo from "../icons/KorasLogo"
import MobileMenu from "./MobileMenu"
import Menu from "./Menu"

import Link from "next/link"
import DownArrowicon from "../icons/DownArrowicon"
const Navbar = () => {
    return (
        <div className="bg-white   z-10  flex items-center justify-end  lg:px-0 lg:pt-0 py-2.5 custom-poppins-font lg:h-[72px]   ">
            {/* left */}
            <div className="hidden  md:hidden items-center bg-white pl-7 md:pl-9 lg:pl-19 lg:w-[20%] lg:h-full">
                <KorasLogo height={40} width={82} color="white" />
            </div>
            <div className="hidden md:flex items-center bg-white p-2.5 pl-7 md:pl-9 lg:pl-19 lg:w-[20%] lg:h-full">
                <KorasLogo height={50} width={104} color="white" />
            </div>
            <div className="lg:bg-[#0A1A2E] lg:flex  justify-center items-center lg:flex-1 rounded-bl-xl lg:h-full">
                {/* center */}
                <div className=" pt-2.5  hidden lg:flex items-center">
                    <Menu />
                </div>

                {/* right */}
                <div className=" pr-7 md:pr-9 lg:pr-19 lg:hidden">
                    <MobileMenu />
                </div>
            </div>
        </div>
    )
}

export default Navbar