import DownArrowicon from "../icons/DownArrowicon"
const ContactUs = () => {

  return (
    <>
      <div  id="contatUs" className="flex flex-col lg:flex-row px-7 md:px-9 py-7 custom-poppins-font mb-[10rem] lg:pt-15" >
        <div className="w-full lg:w-[50%]">
          <div className="w-full flex justify-between items-center mb-[1rem] md:text-[1.875rem]">
            <h1 className="capitalize font-extralight text-[2.5rem] ">Contact Us </h1>
            <div className="lg:hidden">
              <DownArrowicon height={28} width={28} color="white" />
            </div>
          </div>
          <p className="w-full font-light mb-2  text-xl lg:text-[1.125rem] pr-[5rem]">Have a project in mind or need expert tech guidance?</p>
          <p className="font-light mb-4 lg:text-[1.125rem] pr-[5rem]">We’re here to help you build, scale, and optimize your digital solutions. Whether it’s software development, IT strategy, or system integration—reach out to our team for tailored support and reliable consultancy. Let’s bring your ideas to life.</p>
          <p className="custom-text-sky-blue font-bold mb-4 lg:text-[1.125rem] pr-[5rem]"> Let's reinvent the future</p>
        </div>
        <div className="mt lg:w-[50%] flex-1">
          <form action="">
            {/* for name and last name */}
            <div className="flex flex-col lg:flex-row gap-10 w-full">
              {/* name */}
              <div className="relative w-full pt-[1.85rem]">
                <input type="mail" className="peer w-full border-b-2 border-white  py-[0.375rem] text-[1rem] outline-none h-10" placeholder=" " />
                <p className=" peer-focus:top-[12px] peer-placeholder-shown:top-[calc(100%-31px)] top-[12px] capitalize absolute left-0  text-[1rem] ease-in duration-200">First Name</p>
              </div>
              {/* last name */}
              <div className="relative w-full pt-[1.85rem]">
                <input type="mail" className="peer w-full border-b-2 border-white  py-[0.375rem] text-[1rem] outline-none h-10" placeholder=" " />
                <p className=" peer-focus:top-[12px] peer-placeholder-shown:top-[calc(100%-31px)] top-[12px] capitalize absolute left-0  text-[1rem] ease-in duration-200">Last Name</p>
              </div>
            </div>
            {/* for job title and work email */}
            <div className="flex flex-col lg:flex-row gap-10 w-full">
              {/* work email */}
              <div className="relative w-full pt-[1.85rem]">
                <input type="mail" className="peer w-full border-b-2 border-white  py-[0.375rem] text-[1rem] outline-none h-10" placeholder=" " />
                <p className=" peer-focus:top-[12px] peer-placeholder-shown:top-[calc(100%-31px)] top-[12px] capitalize absolute left-0  text-[1rem] ease-in duration-200">Work Email</p>
              </div>
              {/* job title */}
              <div className="w-full pt-[1.85rem] relative group">

                <select name="job-title" id="" className="peer border-b-2 w-full  py-[0.375rem] text-[1rem] outline-none h-10" required >
                  <option value=""></option>
                  <option value="Startup_Founders" className="text-black ">Startup Founders</option>
                  <option value="Product_Managers" className="text-black">Product Managers</option>
                  <option value="Project_Managers" className="text-black">Project Managers</option>
                  <option value="Operations_Managers" className="text-black">Operations Managers</option>
                  <option value="Business_Analysts" className="text-black">Business Analysts</option>
                  <option value="CEO_or_CTOs" className="text-black">CEOs / CTOs</option>
                  <option value="Digita_ Transformation_Leads" className="text-black">Digital Transformation Leads</option>
                  <option value="Ohers" className="text-black">Others</option>
                </select>
                <p className="peer-focus:top-[12px] peer-user-valid:top-[12px] top-[calc(100%-31px)] capitalize absolute left-0  text-[1rem] ease-in duration-200">Job Title</p>



              </div>

            </div>
            {/* for company name and industry */}
            <div className="flex flex-col lg:flex-row gap-10 w-full">
              {/* company name  */}
              <div className="relative w-full pt-[1.85rem]">
                <input type="mail" className="peer w-full border-b-2 border-white  py-[0.375rem] text-[1rem] outline-none h-10" placeholder=" " />
                <p className=" peer-focus:top-[12px] peer-placeholder-shown:top-[calc(100%-31px)] top-[12px] capitalize absolute left-0  text-[1rem] ease-in duration-200">Company Name</p>
              </div>
              {/* industry */}
              <div className="w-full pt-[1.85rem] relative group">

                <select name="job-title" id="" className="peer border-b-2 w-full  py-[0.375rem] text-[1rem] outline-none h-10" required >
                  <option value=""></option>
                  <option value="Information_Technology" className="text-black ">Information Technology</option>
                  <option value="Healthcare" className="text-black ">Healthcare</option>
                  <option value="Finance" className="text-black ">Finance & Banking</option>
                  <option value="Education" className="text-black ">Education</option>
                  <option value="E-Commerce" className="text-black">E-Commerce</option>
                  <option value="Manufacturing" className="text-black">Manufacturing</option>
                  <option value="Retail" className="text-black">Retail</option>
                  <option value="Telecommunications" className="text-black">Telecommunications</option>
                  <option value="Real_Estate" className="text-black">Real Estate</option>
                  <option value="Travel_Hospitality" className="text-black">Travel & Hospitality</option>
                  <option value="Logistics_SupplyChain" className="text-black">Logistics & Supply Chain</option>
                  <option value="Media_Entertainment" className="text-black">Media & Entertainment</option>
                  <option value="Automotive" className="text-black">Automotive</option>
                  <option value="Energy_Utilities" className="text-black">Energy & Utilities</option>
                  <option value="Government_PublicSector" className="text-black">Government & Public Sector</option>
                  <option value="Legal" className="text-black">Legal Services</option>
                  <option value="Agriculture" className="text-black">Agriculture</option>
                  <option value="Non_Profit" className="text-black">Non-Profit</option>
                  <option value="Construction" className="text-black">Construction</option>
                  <option value="Others">Other</option>
                </select>
                <p className="peer-focus:top-[12px] peer-user-valid:top-[12px] top-[calc(100%-31px)] capitalize absolute left-0  text-[1rem] ease-in duration-200">Industry</p>



              </div>
            </div>
            {/* for country */}
            <div className="w-full pt-[1.85rem] relative group">
              <select name="job-title" id="" className="peer border-b-2 w-full  py-[0.375rem] text-[1rem] outline-none h-10" required >
                <option value="" className="text-black"></option>
                <option value="AU" className="text-black">Australia</option>
                <option value="BR" className="text-black">Brazil</option>
                <option value="CA" className="text-black">Canada</option>
                <option value="CN" className="text-black">China</option>
                <option value="FR" className="text-black">France</option>
                <option value="DE" className="text-black">Germany</option>
                <option value="IN" className="text-black">India</option>
                <option value="IT" className="text-black">Italy</option>
                <option value="JP" className="text-black">Japan</option>
                <option value="MX" className="text-black">Mexico</option>
                <option value="NL" className="text-black">Netherlands</option>
                <option value="NZ" className="text-black">New Zealand</option>
                <option value="SG" className="text-black">Singapore</option>
                <option value="ZA" className="text-black">South Africa</option>
                <option value="KR" className="text-black">South Korea</option>
                <option value="ES" className="text-black">Spain</option>
                <option value="AE" className="text-black">United Arab Emirates</option>
                <option value="GB" className="text-black">United Kingdom</option>
                <option value="US" className="text-black">United States</option>
                <option value="OT" className="text-black">Other</option>
              </select>
              <p className="peer-focus:top-[12px] peer-user-valid:top-[12px] top-[calc(100%-31px)] capitalize absolute left-0  text-[1rem] ease-in duration-200">Country</p>



            </div>
            {/* for how we can hel u  */}
            <div className="w-full pt-[1.85rem] relative group">
              <select name="job-title" id="" className="peer border-b-2 w-full  py-[0.375rem] text-[1rem] outline-none h-10" required >
                <option value="" className="text-black"></option>
                <option value="New Bussiness" className="text-black">New Bussiness</option>
                <option value="Want_to_work_at_koras" className="text-black">Want to work at Koras</option>
                <option value="partnerships" className="text-black">Parnetnerships</option>
                <option value="I_am_a_vendor" className="text-black">I am a vendor</option>
                <option value="Other" className="text-black">Other</option>
              </select>
              <p className="peer-focus:top-[12px] peer-user-valid:top-[12px] top-[calc(100%-31px)] capitalize absolute left-0  text-[1rem] ease-in duration-200">How we can help you</p>
            </div>
            {/* message */}
            <div className=" w-full pt-[1.85rem]">
              {/* <input type="mail" className="peer w-full border-b-2 border-white  py-[0.375rem] text-[1rem] outline-none" placeholder=" " /> */}

              <p className=" capitalize  left-0  text-[1rem] ease-in duration-200 pb-[0.625rem] text-[#d1d3ca]">Message</p>
              <textarea name="message" id="" className="peer w-full border-2 border-white  p-[0.625rem] text-[1rem] outline-none h-[180px]" ></textarea>
            </div>
            {/* term and conditons */}
            <div className="flex w-full pt-[1.85rem] items-center ">
              <input type="checkbox" className="peer  border-b-2 border-white   text-[1rem] outline-none bg-transparent mr-2" />
              <p className=" capitalize  left-0  text-[1rem] ease-in duration-200  text-[#d1d3ca] ">Term and Contionditions</p>
            </div>
            {/* submit */}
            <div className="mt-8 lg:mt-16 xl:mt-12  flex justify-center items-center lg:justify-start">
              <button className="bg-[#31D2F2] hover:bg-[#29B8DB] px-6 py-3 text-xl font-bold ease-in duration-75 border-2 border-white" >Contact us</button>
            </div>
          </form>
        </div>

      </div>
    </>
  )
}

export default ContactUs