import Image from "next/image";
import ContactUs from "./components/ContactUs";
import ImageSlider from "./components/ImageSlider";
import Projects from "./components/Projects";
import Leadership from "./components/Leadership";
import CustomerReview from "./components/CustomerReview"
import HeroSection from "./components/HeroSection";

export default function Home() {



  return (
    // hero section
    <>
    <HeroSection/>
   
      {/* What we do section  */}
      <div className="bg-white text-[#343a40] custom-poppins-font px-7 py-16 md:px-9 lg:px-19 ">
        {/* top section for heading and description */}
        <div className="mb-12 flex flex-col md:flex-row  md:gśap-20">
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
              Application Development and Maintenance
              {/* underline */}
              <span className="block ease-out duration-200 w-0 group-hover:w-full h-0.5 bg-[#0A1A2E]"></span>
            </p>

            {/* description */}
            <p className="font-light mb-4">Building and maintaining reliable applications to support your business.</p>
          </div>
          <div className="pt-8 border-b-1 border-[#a0a7ae]">
            {/* SERVICE */}
            <p className="text-xl font-bold w-fit group custom-neavy-blue-font">
              IT Services & Consulting
              {/* underline */}
              <span className="block ease-out duration-200 w-0 group-hover:w-full h-0.5 bg-[#0A1A2E]"></span>
            </p>
            {/* description */}
            <p className="font-light mb-4">Expert IT solutions and strategic consulting to drive business growth.</p>
          </div>
          <div className="pt-8 border-b-1 border-[#a0a7ae]">
            {/* SERVICE */}
            <p className="text-xl font-bold w-fit group custom-neavy-blue-font">
              Cloud Solutions
              {/* underline */}
              <span className="block ease-out duration-200 w-0 group-hover:w-full h-0.5 bg-[#0A1A2E]"></span>
            </p>
            {/* description */}
            <p className="font-light mb-4">Scalable and secure cloud services for modern business needs.</p>
          </div>
          <div className="pt-8 border-b-1 border-[#a0a7ae]">
            {/* SERVICE */}
            <p className="text-xl font-bold w-fit group custom-neavy-blue-font">
              Cybersecurity Services
              {/* underline */}
              <span className="block ease-out duration-200 w-0 group-hover:w-full h-0.5 bg-[#0A1A2E]"></span>
            </p>
            {/* description */}
            <p className="font-light mb-4">Protecting your digital assets with advanced security solutions.</p>
          </div>
          <div className="pt-8 border-b-1 border-[#a0a7ae]">
            {/* SERVICE */}
            <p className="text-xl font-bold w-fit group custom-neavy-blue-font">
              Data Analytics & Insights

              {/* underline */}
              <span className="block ease-out duration-200 w-0 group-hover:w-full h-0.5 bg-[#0A1A2E]"></span>
            </p>


            {/* description */}
            <p className="font-light mb-4">Turning data into actionable business intelligence.</p>
          </div>
          <div className="pt-8 border-b-1 border-[#a0a7ae]">
            {/* SERVICE */}
            <p className="text-xl font-bold w-fit group custom-neavy-blue-font">
              UI/UX Design
              {/* underline */}
              <span className="block ease-out duration-200 w-0 group-hover:w-full h-0.5 bg-[#0A1A2E]"></span>
            </p>


            {/* description */}
            <p className="font-light mb-4">Creating intuitive and engaging user experiences.</p>
          </div>
          <div className="pt-8 border-b-1 border-[#a0a7ae]">
            {/* SERVICE */}
            <p className="text-xl font-bold w-fit group custom-neavy-blue-font">
              E-commerce Development
              {/* underline */}
              <span className="block ease-out duration-200 w-0 group-hover:w-full h-0.5 bg-[#0A1A2E]"></span>
            </p>


            {/* description */}
            <p className="font-light mb-4">Building powerful online stores for seamless shopping experiences.</p>
          </div>
          <div className="pt-8 border-b-1 border-[#a0a7ae]">
            {/* SERVICE */}
            <p className="text-xl font-bold w-fit group custom-neavy-blue-font">
              Internet of Things (IoT)
              {/* underline */}
              <span className="block ease-out duration-200 w-0 group-hover:w-full h-0.5 bg-[#0A1A2E]"></span>
            </p>

            {/* description */}
            <p className="font-light mb-4">Connecting devices to enable smart, data-driven operations.</p>
          </div>



        </div>
      </div>
      <Projects />
      {/* contact section */}
      <ContactUs />
      {/* projects section */}
      <CustomerReview/>
      <Leadership />

    </>

  );
}

