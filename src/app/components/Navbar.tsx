import KorasLogo from "../icons/KorasLogo"
import MobileMenu from "./MobileMenu"
import Menu from "./Menu"

import Link from "next/link"
import DownArrowicon from "../icons/DownArrowicon"
const Navbar = () => {
    return (
        <div className="z-10 mb-12 pb-3 flex items-center justify-between mt-2 mx-4 md:mx-6 sm:mx-4 lg:mx-16 xl:mx-20 2xl:mx-32  pl-3 pr-3 lg:px-20 custom-poppins-font lg:h-[72px] h:[64px]">
            {/* left */}
            <div className="flex items-center">
                <KorasLogo height={50} width={103} color="white" />
            </div>
            {/* center */}
                <Menu />


            {/* right */}
            <div className="">
                <MobileMenu /> 
            </div>
        </div>
    )
}

export default Navbar