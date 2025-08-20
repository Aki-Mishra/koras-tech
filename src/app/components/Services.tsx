const Services = () => {
    return (
        <>
            <div className="bg-white text-[#343a40] custom-poppins-font px-4 sm:px-6 md:px-9 lg:px-16 py-12 sm:py-16">
                {/* top section for heading and description */}
                <div className="mb-12 flex flex-col md:flex-row md:gap-12 lg:gap-20">
                    {/* heading section */}
                    <div className="mb-6 md:mb-0">
                        <h5 className="uppercase mb-2 text-sm sm:text-base md:text-lg leading-5">
                            What we do
                        </h5>
                        <h1 className="custom-times-new-roman-font capitalize mb-4 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight custom-neavy-blue-font">
                            Our services
                        </h1>
                    </div>
                    {/* description section */}
                    <div className="text-sm sm:text-base md:text-lg leading-relaxed">
                        <p>
                            We provide complete tech solutions — from app development and
                            management to website design and UI/UX services. Whether you're
                            starting fresh or scaling up, we deliver smart, reliable, and
                            modern digital solutions tailored to your needs.
                        </p>
                    </div>
                </div>

                {/* services grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-x-8 gap-y-8">
                    {/* SERVICE */}
                    <div className="pt-6 border-b border-[#a0a7ae]">
                        <p className="text-lg sm:text-xl font-bold w-fit group custom-neavy-blue-font">
                            Application Development and Maintenance
                            <span className="block ease-out duration-200 w-0 lg:group-hover:w-full h-0.5 bg-[#0A1A2E]"></span>
                        </p>
                        <p className="text-sm sm:text-base font-light mb-3">
                            Building and maintaining reliable applications to support your
                            business.
                        </p>
                    </div>

                    <div className="pt-6 border-b border-[#a0a7ae]">
                        <p className="text-lg sm:text-xl font-bold w-fit group custom-neavy-blue-font">
                            IT Services & Consulting
                            <span className="block ease-out duration-200 w-0 lg:group-hover:w-full h-0.5 bg-[#0A1A2E]"></span>
                        </p>
                        <p className="text-sm sm:text-base font-light mb-3">
                            Expert IT solutions and strategic consulting to drive business
                            growth.
                        </p>
                    </div>

                    <div className="pt-6 border-b border-[#a0a7ae]">
                        <p className="text-lg sm:text-xl font-bold w-fit group custom-neavy-blue-font">
                            Cloud Solutions
                            <span className="block ease-out duration-200 w-0 lg:group-hover:w-full h-0.5 bg-[#0A1A2E]"></span>
                        </p>
                        <p className="text-sm sm:text-base font-light mb-3">
                            Scalable and secure cloud services for modern business needs.
                        </p>
                    </div>

                    <div className="pt-6 border-b border-[#a0a7ae]">
                        <p className="text-lg sm:text-xl font-bold w-fit group custom-neavy-blue-font">
                            Cybersecurity Services
                            <span className="block ease-out duration-200 w-0 lg:group-hover:w-full h-0.5 bg-[#0A1A2E]"></span>
                        </p>
                        <p className="text-sm sm:text-base font-light mb-3">
                            Protecting your digital assets with advanced security solutions.
                        </p>
                    </div>

                    <div className="pt-6 border-b border-[#a0a7ae]">
                        <p className="text-lg sm:text-xl font-bold w-fit group custom-neavy-blue-font">
                            Data Analytics & Insights
                            <span className="block ease-out duration-200 w-0 lg:group-hover:w-full h-0.5 bg-[#0A1A2E]"></span>
                        </p>
                        <p className="text-sm sm:text-base font-light mb-3">
                            Turning data into actionable business intelligence.
                        </p>
                    </div>

                    <div className="pt-6 border-b border-[#a0a7ae]">
                        <p className="text-lg sm:text-xl font-bold w-fit group custom-neavy-blue-font">
                            UI/UX Design
                            <span className="block ease-out duration-200 w-0 lg:group-hover:w-full h-0.5 bg-[#0A1A2E]"></span>
                        </p>
                        <p className="text-sm sm:text-base font-light mb-3">
                            Creating intuitive and engaging user experiences.
                        </p>
                    </div>

                    <div className="pt-6 border-b border-[#a0a7ae]">
                        <p className="text-lg sm:text-xl font-bold w-fit group custom-neavy-blue-font">
                            E-commerce Development
                            <span className="block ease-out duration-200 w-0 lg:group-hover:w-full h-0.5 bg-[#0A1A2E]"></span>
                        </p>
                        <p className="text-sm sm:text-base font-light mb-3">
                            Building powerful online stores for seamless shopping experiences.
                        </p>
                    </div>

                    <div className="pt-6 border-b border-[#a0a7ae]">
                        <p className="text-lg sm:text-xl font-bold w-fit group custom-neavy-blue-font">
                            Internet of Things (IoT)
                            <span className="block ease-out duration-200 w-0 lg:group-hover:w-full h-0.5 bg-[#0A1A2E]"></span>
                        </p>
                        <p className="text-sm sm:text-base font-light mb-3">
                            Connecting devices to enable smart, data-driven operations.
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Services