import KorasLogo from "../icons/KorasLogo"
import MobileMenu from "./MobileMenu"
import Menu from "./Menu"

import Link from "next/link"
import DownArrowicon from "../icons/DownArrowicon"
const Navbar = () => {
    return (
        <div className="flex items-center justify-between my-3 md:my-5 custom-poppins-font">
            {/* left */}
            <div className="flex items-center">.
                <KorasLogo height={40} width={82} color="white" />
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