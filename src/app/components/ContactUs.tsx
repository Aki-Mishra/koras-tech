import DownArrowicon from "../icons/DownArrowicon"

const ContactUs = () => {
  return (
    <>
      <div className="px-7 md:px-9 py-7 custom-poppins-font mb-[10rem]" >
        <div className="w-full">
          <div className="w-full flex justify-between items-center mb-[1rem]">
            <h1 className="capitalize text-4xl">Contact Us </h1>
            <DownArrowicon height={28} width={28} color="white"/>
          </div>
          <p className="w-full font-light mb-2  text-xl">Have a project in mind or need expert tech guidance?</p>
          <p className="font-light mb-4">We’re here to help you build, scale, and optimize your digital solutions. Whether it’s software development, IT strategy, or system integration—reach out to our team for tailored support and reliable consultancy. Let’s bring your ideas to life.</p>
          <p className="custom-text-sky-blue font-bold mb-4"> Let's reinvent the future</p>
        </div>
        <div className="mt">
          <form action="">
            {/* for name and last name */}
            <div className="flex flex-col w-full">
              {/* name */}
              <div className="relative w-full pt-[1.85rem]">
                <input type="text" className="w-full border-b-2 border-white bg-green-600 py-[0.375rem]" />
                <p className="capitalize absolute left-0 top-0 ">First Name</p>
              </div>
              {/* last name */}
              <div className=""></div>
            </div>
            {/* for job title and work email */}
            <div className="">
              {/* job title */}
              <div className=""></div>
              {/* work email */}
              <div className=""></div>
            </div>
            {/* for company name and industry */}
            <div className="">
              {/* company name  */}
              <div className=""></div>
              {/* industry */}
              <div className=""></div>
            </div>
            {/* for country */}
            <div className=""></div>
            {/* for how we can hel u  */}
            <div className=""></div>
          </form>
        </div>

      </div>
    </>
  )
}

export default ContactUs