import Link from "next/link"
import KorasLogo from "../icons/KorasLogo"
import FacebookLogo from "../icons/FacebookLogo"
import LinkedInLogo from "../icons/LinkedInLogo"
import TwitterLogo from "../icons/TwitterLogo"
const Footer = () => {
  return (
    <>
      <div className="bg-black px-9 pb-10  pt-10 md:pt-[100px] lg:pt-30 lg:px-16 xl:px-28">
        <div className="pb-10 flex lg:flex-row gap-9 lg:gap-0 flex-col lg:pb-20">
          <div className="lg:hidden md:pb-12">
            <KorasLogo size={70} color="white" />
          </div>
          <div className="hidden lg:block w-[40%]">
            <KorasLogo size={80}  color="white" />
          </div>
          <div className="text-xl md:pb-20 md:text-5xl lg:text-[45px]  flex justify-center items-center lg:flex-1">
            <p className="font-medium">We craft scalable digital solutions that help businesses grow, innovate, and stay ahead in a fast-changing world</p>
          </div>
        </div>
        {/* bottom section */}
        <div className="flex flex-col justify-between text-sm w-full pb-20">
          {/* right section */}
          <div className="hidden"></div>
          {/* left sectio */}
          <div className="flex flex-col md:flex-row md:justify-between lg:justify-start md:text-[20px] gap-2">
            {/* address */}
            <div className="pb-10 lg:w-[40%]">
              <p className="pb-1 text-[#7b7c7e]">Offices:</p>
              <p className=" pl-3 ">
                Regd. Address: 35/1/A
                <span className="block"> Maan Road, Infotech Park(Hinjewadi)</span>
                <span className="block"> Pune-411057, Maharashtra </span>
              </p>
            </div>
            <div className="text-[1rem] md:text-[20px]  lg:flex-1 ">
              {/* email */}
              <div className="pb-10 md:pb-5 lg:pb-4">
                <p className="pb-1 text-[#7b7c7e]">Email:</p>
                <p className="pl-3">contactus@koras-tech.com</p>
              </div>
              {/* phone */}
              <div className="pb-10">
                <p className="pb-1 text-[#7b7c7e]">Phone:</p>
                <div className="pl-3">
                  <p className="pb-0.5">+918180963236</p>
                  <p className="pb-0.5">+919890408928</p>
                </div>
              </div>
              {/* social media icons */}
              <div className="flex flex-row  gap-15">
                <div className="">
                  <Link href={""}>
                    <LinkedInLogo height={30} width={30} />
                  </Link>
                </div>
                <div className="">
                  <Link href={"https://www.facebook.com/share/1AGsv6csp4/"}>
                    <FacebookLogo height={30} width={30} />
                  </Link>
                </div>
                <div className="">
                  <Link href={""}>
                    <TwitterLogo height={30} width={30} />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>



      <div className="bg-[#121212] text-center text-[14px] py-[10px]">
        <p>&copy; 2025 KORAS Technologies. All rights reserved.</p>

      </div>
    </>
  )
}

export default Footer