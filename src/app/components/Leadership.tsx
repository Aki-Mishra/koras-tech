import { DessertIcon, Fullscreen } from "lucide-react";
import Image from "next/image";
import LederDescriptionVector from "../icons/LederDescriptionVector"
import LeaderPicBackground from "../icons/LeaderPicBackground";
import LinkedInLogo from "../icons/LinkedInLogo";
import PlusToCrossButton from "./PlusToCrossButton"
interface Leader {
    name: string;
    designation: string;
    image: string;
    linkedIn: string;
}
const Leaders = [
    {
        name: "Rahul",
        designation: "CEO",
        image: "/assets/rahul.jpg",
        linkedIn: "https://www.linkedin.com/in/rahul-kumar-784566196/",
    },
    {
        name: "Rahul",
        designation: "CEO",
        image: "/assets/rahul.jpg",
        linkedIn: "https://www.linkedin.com/in/rahul-kumar-784566196/",
    },

]
const leaderCard = () => {
    return (

        <>
        </>
    )
}


const Leadership = () => {
    return (
        <div className="px-4 md:px-9 lg:px-19 py-16  primary-dark pb-[6rem]">
            {/* top section for heading and description */}
            <div className="mb-12 flex flex-col md:flex-row  md:gap-20 ">
                {/* heading section */}
                <div className="mb-4">
                    <h1 className="inter-font capitalize mb-4 text-4xl  md:text-5xl lg:text-6xl font-semibold leading-tight text-white">Our Leadership</h1>
                </div>
                {/* description section */}
                <div className="">
                    <p className="text-[1rem] font-light "></p>
                </div>
            </div>
            {/* here we have all Our leaders */}
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-x-6 gap-y-10  md:flex-row content  ">
                {/* leaderCard */}
                <div className="w-fit flex gap-4 border-b-2 border-solid [border-image:linear-gradient(90deg,#31D2F2_46.15%,#FFF6F6_100%)_1] pb-2.5">
                    {/* Picture Section */}
                    <div className="h-[150px] w-[150px] bg-white flex justify-center rounded-full overflow-hidden" >
                        <img src="/image/withoutbg.png" alt="/images/withoutbg.png" className="object-cover" />
                    </div>
                    {/* description Section */}

                    <div className="pt-6 flex flex-col pb-3">
                        {/* name */}
                        <p className="text-2xl  pb-2 inter-font leading-[28px] font-medium ">John Thomson </p>
                        {/* role */}
                        <p className="text-[16px] inter-font max-w-[15ch] flex-1 pb-4">Cheif Executive Officers</p>
                        {/* social Handle description Btn */}
                        <div className="flex flex-1 items-end justify-between ">
                            <div className="flex items-center justify-between w-full">
                            <LinkedInLogo height={24} width={24} />
                            <PlusToCrossButton/>
                            </div>
                        </div>
                    </div>
                </div>




            </div>
        </div>
    )
}

export default Leadership