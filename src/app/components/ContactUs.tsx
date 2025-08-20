"use client";
import { useState } from "react";
import DownArrowicon from "../icons/DownArrowicon";
const ContactUs = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    jobTitle: "",
    companyName: "",
    industry: "",
    country: "",
    howWeCanHelpYou: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setStatus("Sending...");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (res.ok) {
        setStatus("Message sent successfully!");
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          jobTitle: "",
          companyName: "",
          industry: "",
          country: "",
          howWeCanHelpYou: "",
          message: "",
        });
      } else {
        setStatus("Failed to send message.");
      }
    } catch (err) {
      setStatus("Failed to send message.");
    }
  };

  return (
    <>
      <div id="contatUs" className="flex flex-col lg:flex-row px-7 md:px-9 lg:px-19 py-7 custom-poppins-font pb-[10rem] lg:pt-15 primary-dark">
        <div className="w-full lg:w-[50%]">
          <div className="w-full flex justify-between items-center mb-[1rem] md:text-[1.875rem]">
            <h1 className="inter-font capitalize mb-4 text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight text-white">Contact Us</h1>
            <div className="lg:hidden">
              <DownArrowicon height={28} width={28} color="white" />
            </div>
          </div>
          <p className="w-full font-light mb-2 text-xl lg:text-[1.125rem] pr-[5rem]">Have a project in mind or need expert tech guidance?</p>
          <p className="font-light mb-4 lg:text-[1.125rem] pr-[5rem]">We’re here to help you build, scale, and optimize your digital solutions. Whether it’s software development, IT strategy, or system integration—reach out to our team for tailored support and reliable consultancy. Let’s bring your ideas to life.</p>
          <p className="custom-text-sky-blue font-bold mb-4 lg:text-[1.125rem] pr-[5rem]">Let's reinvent the future</p>
        </div>

        <div className="mt lg:w-[50%] flex-1">
          <form onSubmit={handleSubmit}>
            {/* Name fields */}
            <div className="flex flex-col lg:flex-row gap-0 lg:gap-10 w-full">
              <div className="relative w-full pt-[1.85rem]">
                <input type="text" name="firstName" className="peer w-full border-b-2 border-white py-[0.375rem] text-[1rem] outline-none h-10" placeholder=" " value={formData.firstName} onChange={handleChange} required />
                <label className="peer-focus:top-[12px] peer-placeholder-shown:top-[calc(100%-31px)] top-[12px] capitalize absolute left-0 text-[1rem] ease-in duration-200">First Name</label>
              </div>
              <div className="relative w-full pt-[1.85rem]">
                <input type="text" name="lastName" className="peer w-full border-b-2 border-white py-[0.375rem] text-[1rem] outline-none h-10" placeholder=" " value={formData.lastName} onChange={handleChange} required />
                <label className="peer-focus:top-[12px] peer-placeholder-shown:top-[calc(100%-31px)] top-[12px] capitalize absolute left-0 text-[1rem] ease-in duration-200">Last Name</label>
              </div>
            </div>

            {/* Email & Job Title */}
            <div className="flex flex-col lg:flex-row gap-0 lg:gap-10 w-full">
              <div className="relative w-full pt-[1.85rem]">
                <input type="email" name="email" className="peer w-full border-b-2 border-white py-[0.375rem] text-[1rem] outline-none h-10" placeholder=" " value={formData.email} onChange={handleChange} required />
                <label className="peer-focus:top-[12px] peer-placeholder-shown:top-[calc(100%-31px)] top-[12px] capitalize absolute left-0 text-[1rem] ease-in duration-200">Work Email</label>
              </div>
              <div className="w-full pt-[1.85rem] relative group">
                <select name="jobTitle" className="peer border-b-2 w-full py-[0.375rem] text-[1rem] outline-none h-10" value={formData.jobTitle} onChange={handleChange} required>
                  <option value=""></option>
                  <option value="Startup Founders" className="text-[#0A1A2E]">Startup Founders</option>
                  <option value="Product Managers" className="text-[#0A1A2E]" >Product Managers</option>
                  <option value="Project Managers" className="text-[#0A1A2E]" >Project Managers</option>
                  <option value="Operations Managers" className="text-[#0A1A2E]" >Operations Managers</option>
                  <option value="Business Analysts" className="text-[#0A1A2E]" >Business Analysts</option>
                  <option value="CEOs / CTOs" className="text-[#0A1A2E]" >CEOs / CTOs</option>
                  <option value="Digital Transformation Leads" className="text-[#0A1A2E]" >Digital Transformation Leads</option>
                  <option value="Others" className="text-[#0A1A2E]" >Others</option>
                </select>
                <label className="peer-focus:top-[12px] peer-user-valid:top-[12px] top-[calc(100%-31px)] capitalize absolute left-0 text-[1rem] ease-in duration-200">Job Title</label>
              </div>
            </div>

            {/* Company & Industry */}
            <div className="flex flex-col lg:flex-row gap-0 lg:gap-10 w-full">
              <div className="relative w-full pt-[1.85rem]">
                <input type="text" name="companyName" className="peer w-full border-b-2 border-white py-[0.375rem] text-[1rem] outline-none h-10" placeholder=" " value={formData.companyName} onChange={handleChange} required />
                <label className="peer-focus:top-[12px] peer-placeholder-shown:top-[calc(100%-31px)] top-[12px] capitalize absolute left-0 text-[1rem] ease-in duration-200">Company Name</label>
              </div>
              <div className="w-full pt-[1.85rem] relative group">
                <select name="industry" className="peer border-b-2 w-full py-[0.375rem] text-[1rem] outline-none h-10" value={formData.industry} onChange={handleChange} required>
                  <option value=""></option>
                  <option value="Information Technology" className="text-[#0A1A2E]">Information Technology</option>
                  <option value="Healthcare" className="text-[#0A1A2E]">Healthcare</option>
                  <option value="Finance & Banking" className="text-[#0A1A2E]">Finance & Banking</option>
                  <option value="Education" className="text-[#0A1A2E]">Education</option>
                  <option value="E-Commerce" className="text-[#0A1A2E]">E-Commerce</option>
                  <option value="Manufacturing" className="text-[#0A1A2E]">Manufacturing</option>
                  <option value="Retail" className="text-[#0A1A2E]">Retail</option>
                  <option value="Telecommunications" className="text-[#0A1A2E]">Telecommunications</option>
                  <option value="Real Estate" className="text-[#0A1A2E]">Real Estate</option>
                  <option value="Travel & Hospitality" className="text-[#0A1A2E]">Travel & Hospitality</option>
                  <option value="Logistics & Supply Chain" className="text-[#0A1A2E]">Logistics & Supply Chain</option>
                  <option value="Media & Entertainment" className="text-[#0A1A2E]">Media & Entertainment</option>
                  <option value="Automotive" className="text-[#0A1A2E]">Automotive</option>
                  <option value="Energy & Utilities" className="text-[#0A1A2E]">Energy & Utilities</option>
                  <option value="Government & Public Sector" className="text-[#0A1A2E]">Government & Public Sector</option>
                  <option value="Legal Services" className="text-[#0A1A2E]">Legal Services</option>
                  <option value="Agriculture" className="text-[#0A1A2E]">Agriculture</option>
                  <option value="Non-Profit" className="text-[#0A1A2E]">Non-Profit</option>
                  <option value="Construction" className="text-[#0A1A2E]">Construction</option>
                  <option value="Others" className="text-[#0A1A2E]">Other</option>

                </select>
                <label className="peer-focus:top-[12px] peer-user-valid:top-[12px] top-[calc(100%-31px)] capitalize absolute left-0 text-[1rem] ease-in duration-200">Industry</label>
              </div>
            </div>

            {/* Country & How We Can Help */}
            <div className="flex flex-col lg:flex-row gap-0 lg:gap-10 w-full">
              <div className="w-full pt-[1.85rem] relative group">
                <select name="country" className="peer border-b-2 w-full py-[0.375rem] text-[1rem] outline-none h-10 " value={formData.country} onChange={handleChange} required>
                  <option value="" className="text-[#0A1A2E]"></option>
                  <option value="Australia" className="text-[#0A1A2E]">Australia</option>
                  <option value="Brazil" className="text-[#0A1A2E]">Brazil</option>
                  <option value="Canada" className="text-[#0A1A2E]">Canada</option>
                  <option value="China" className="text-[#0A1A2E]">China</option>
                  <option value="France" className="text-[#0A1A2E]">France</option>
                  <option value="Germany" className="text-[#0A1A2E]">Germany</option>
                  <option value="India" className="text-[#0A1A2E]">India</option>
                  <option value="Italy" className="text-[#0A1A2E]">Italy</option>
                  <option value="Japan" className="text-[#0A1A2E]">Japan</option>
                  <option value="Mexico" className="text-[#0A1A2E]">Mexico</option>
                  <option value="Netherlands" className="text-[#0A1A2E]">Netherlands</option>
                  <option value="New Zealand" className="text-[#0A1A2E]">New Zealand</option>
                  <option value="Singapore" className="text-[#0A1A2E]">Singapore</option>
                  <option value="South Africa" className="text-[#0A1A2E]">South Africa</option>
                  <option value="South Korea" className="text-[#0A1A2E]">South Korea</option>
                  <option value="Spain" className="text-[#0A1A2E]">Spain</option>
                  <option value="United Arab Emirates" className="text-[#0A1A2E]">United Arab Emirates</option>
                  <option value="United Kingdom" className="text-[#0A1A2E]">United Kingdom</option>
                  <option value="United States" className="text-[#0A1A2E]">United States</option>

                  <option value="Other" className="text-[#0A1A2E]" >Other</option>
                </select>
                <label className="peer-focus:top-[12px] peer-user-valid:top-[12px] top-[calc(100%-31px)] capitalize absolute left-0 text-[1rem] ease-in duration-200">Country</label>
              </div>

              <div className="w-full pt-[1.85rem] relative group">
                <select name="howWeCanHelpYou" className="peer border-b-2 w-full py-[0.375rem] text-[1rem] outline-none h-10" value={formData.howWeCanHelpYou} onChange={handleChange} required>
                  <option value="" className="text-[#0A1A2E]"></option>
                  <option value="New Business" className="text-[#0A1A2E]">New Business</option>
                  <option value="Want to work at Koras" className="text-[#0A1A2E]">Want to work at Koras</option>
                  <option value="Partnerships" className="text-[#0A1A2E]">Partnerships</option>
                  <option value="I am a vendor" className="text-[#0A1A2E]">I am a vendor</option>
                  <option value="Other" className="text-[#0A1A2E]">Other</option>

                </select>
                <label className="peer-focus:top-[12px] peer-user-valid:top-[12px] top-[calc(100%-31px)] capitalize absolute left-0 text-[1rem] ease-in duration-200">How we can help you</label>
              </div>
            </div>

            {/* Message */}
            <div className="w-full pt-[1.85rem]">
              <p className="capitalize left-0 text-[1rem] ease-in duration-200 pb-[0.625rem] text-[#d1d3ca]">Message</p>
              <textarea name="message" className="peer w-full border-2 border-white p-[0.625rem] text-[1rem] outline-none h-[180px]" value={formData.message} onChange={handleChange} required></textarea>
            </div>

            {/* Terms */}
            <div className="flex w-full pt-[1.85rem] items-center">
              <input type="checkbox" className="peer border-b-2 border-white text-[1rem] outline-none bg-transparent mr-2" required />
              <p className="capitalize left-0 text-[1rem] ease-in duration-200 text-[#d1d3ca]">Term and Conditions</p>
            </div>

            {/* Submit */}
            <div className="mt-8 lg:mt-16 xl:mt-12 flex justify-center items-center lg:justify-start">
              <button className="bg-[#31D2F2] hover:bg-[#29B8DB] px-6 py-3 text-xl font-bold ease-in duration-75 border-2 border-white">Contact us</button>
            </div>

            {status && <p className="mt-4 text-white">{status}</p>}
          </form>
        </div>
      </div>
    </>
  );
};

export default ContactUs;
