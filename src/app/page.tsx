import Image from "next/image";
import ContactUs from "./components/ContactUs";

export default function Home() {
  return (
    // hero section
    <>
      <div id="hero-section" className="flex flex-col ml-7   md:ml-9 pb-12 lg:ml-7 xl:ml-[10vw] md:mt-28 lg:mt-32 custom-poppins-font lg:flex-row gap-16">

        <div className=" pr-3 ">
          <div className="text-[2.5rem] lg:text-4xl mb-8 tracking-tighter max-w-[30ch] lg:max-w-[25ch]">
            <h1 className="text-[2.5rem] lg:text-4xl leading-[3rem] font-bold tracking-wide">Empowering <span className="custom-text-sky-blue italic">Innovation</span> Innovation Through <span className="custom-text-sky-blue italic"> Technology </span></h1>
          </div>
          <div className="text-[16px] max-w-[30em]">
            <p className="tracking-wide text-[16px]">We help startups, businesses, and enterprises build scalable apps, streamline processes, and accelerate digital growth with expert tech solutions tailored to your goals.</p>
          </div>
          <div className="mt-8">
            <button className="bg-[#31D2F2] hover:bg-[#29B8DB] px-6 py-3 text-xl font-bold ease-in duration-75 border-2 border-white" >Contact us</button>
          </div>
        </div>

        <div className="relative flex-1 ">
          <div className="relative  flex justify-end">
            <img src="/image/korasHeroBackground.png" alt="" className="w-[75%] lg:w-[100%] xl:w-[60%] " />

          </div>
        </div>


      </div>
      {/* What we do section  */}
      <div className="bg-white text-[#343a40] custom-poppins-font px-7 py-16 md:px-9 lg:px-19 ">
        {/* top section for heading and description */}
        <div className="mb-20 flex flex-col md:flex-row  md:gap-20">
          {/* heading section */}
          <div className="mb-4">
            <h5 className="uppercase mb-4 text-[17px] leading-4">What we do</h5>
            <h1 className="custom-times-new-roman-font capitalize mb-4 text-[4rem] font-extrabold leading-12 custom-neavy-blue-font">Our services</h1>
          </div>
          {/* description section */}
          <div className="">
            <p className="text-[1rem] font-light ">We provide complete tech solutions — from app development and management to website design and UI/UX services. Whether you're starting fresh or scaling up, we deliver smart, reliable, and modern digital solutions tailored to your needs.</p>
          </div>
        </div>
        <div className="grid grid-cols-1 grid-rows-8 md:grid-cols-2 md:grid-rows-4">
          <div className="pt-8 border-b-1 border-[#a0a7ae]">
            {/* SERVICE */}
            <p className="text-xl font-bold w-fit group custom-neavy-blue-font">
              Application Develpoment
              {/* underline */}
              <span className="block ease-out duration-200 w-0 group-hover:w-full h-0.5 bg-[#0A1A2E]"></span>
            </p>


            {/* description */}
            <p className="font-light mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, est?</p>
          </div>
          <div className="pt-8 border-b-1 border-[#a0a7ae]">
            {/* SERVICE */}
            <p className="text-xl font-bold w-fit group custom-neavy-blue-font">
              Application Develpoment
              {/* underline */}
              <span className="block ease-out duration-200 w-0 group-hover:w-full h-0.5 bg-[#0A1A2E]"></span>
            </p>


            {/* description */}
            <p className="font-light mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, est?</p>
          </div>
          <div className="pt-8 border-b-1 border-[#a0a7ae]">
            {/* SERVICE */}
            <p className="text-xl font-bold w-fit group custom-neavy-blue-font">
              Application Develpoment
              {/* underline */}
              <span className="block ease-out duration-200 w-0 group-hover:w-full h-0.5 bg-[#0A1A2E]"></span>
            </p>


            {/* description */}
            <p className="font-light mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, est?</p>
          </div>
          <div className="pt-8 border-b-1 border-[#a0a7ae]">
            {/* SERVICE */}
            <p className="text-xl font-bold w-fit group custom-neavy-blue-font">
              Application Develpoment
              {/* underline */}
              <span className="block ease-out duration-200 w-0 group-hover:w-full h-0.5 bg-[#0A1A2E]"></span>
            </p>


            {/* description */}
            <p className="font-light mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, est?</p>
          </div>
          <div className="pt-8 border-b-1 border-[#a0a7ae]">
            {/* SERVICE */}
            <p className="text-xl font-bold w-fit group custom-neavy-blue-font">
              Application Develpoment
              {/* underline */}
              <span className="block ease-out duration-200 w-0 group-hover:w-full h-0.5 bg-[#0A1A2E]"></span>
            </p>


            {/* description */}
            <p className="font-light mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, est?</p>
          </div>
          <div className="pt-8 border-b-1 border-[#a0a7ae]">
            {/* SERVICE */}
            <p className="text-xl font-bold w-fit group custom-neavy-blue-font">
              Application Develpoment
              {/* underline */}
              <span className="block ease-out duration-200 w-0 group-hover:w-full h-0.5 bg-[#0A1A2E]"></span>
            </p>


            {/* description */}
            <p className="font-light mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, est?</p>
          </div>
          <div className="pt-8 border-b-1 border-[#a0a7ae]">
            {/* SERVICE */}
            <p className="text-xl font-bold w-fit group custom-neavy-blue-font">
              Application Develpoment
              {/* underline */}
              <span className="block ease-out duration-200 w-0 group-hover:w-full h-0.5 bg-[#0A1A2E]"></span>
            </p>


            {/* description */}
            <p className="font-light mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, est?</p>
          </div>
          <div className="pt-8 border-b-1 border-[#a0a7ae]">
            {/* SERVICE */}
            <p className="text-xl font-bold w-fit group custom-neavy-blue-font">
              Application Develpoment
              {/* underline */}
              <span className="block ease-out duration-200 w-0 group-hover:w-full h-0.5 bg-[#0A1A2E]"></span>
            </p>


            {/* description */}
            <p className="font-light mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, est?</p>
          </div>

  
          
        </div>
      </div>
      {/* contact section */}
      <ContactUs/>
      
    </>

  );
}

