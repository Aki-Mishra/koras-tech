import KorasLogo from "../icons/KorasLogo"
import MobileMenu from "./MobileMenu"
import Menu from "./Menu"

import Link from "next/link"
import DownArrowicon from "../icons/DownArrowicon"
const Navbar = () => {
    return (
        <div className="bg-white   z-10  flex items-center justify-between  lg:px-0 lg:pt-0 pt-2.5 custom-poppins-font lg:h-[72px] h:[64px] ">
            {/* left */}
            <div className="flex items-center bg-white p-2.5 pl-7 md:pl-9 lg:pl-19 lg:w-[20%] lg:h-full">
                <KorasLogo height={50} width={104} color="white" />
            </div>
            <div className="lg:bg-[#0A1A2E] lg:flex  justify-center items-center lg:flex-1 rounded-bl-xl lg:h-full">
                {/* center */}
                <div className=" pt-2.5  hidden lg:flex items-center">
                    <Menu />
                </div>

                {/* right */}
                <div className="pt-2.5 pr-7 md:pr-9 lg:pr-19 lg:hidden">
                    <MobileMenu />
                </div>
            </div>
        </div>
    )
}

export default Navbar