"use client";
import { useState } from "react";
import Image from "next/image";
import QutiationMark from "../icons/QutiationMark"

import StarIcon from "../icons/Start";
import LineArrow from "../icons/LineArrow";
export default function Slider() {

    const customers = [
        {
            name: "Ravi Kumar",
            company: "Suicide",
            designation: "CEO",
            rating: 4,
            review: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur quisquam quia, vitae sequi totam perspiciatis.",
            src: "/image/cust.jpg"
        },
        {
            name: "Anjali Sharma",
            company: "TechCorp",
            designation: "CTO",
            rating: 5,
            review: "Dolor sit amet consectetur adipisicing elit. Pariatur quisquam quia, vitae sequi totam perspiciatis.",
            src: "/image/cust.jpg"
        },
        {
            name: "Rahul Singh",
            company: "BuildIt",
            designation: "Manager",
            rating: 3,
            review: "Perspiciatis doloremque consequatur beatae laborum quidem! Pariatur quisquam quia, vitae sequi totam.",
            src: "/image/cust.jpg"
        },
        {
            name: "Sneha Verma",
            company: "DesignHub",
            designation: "Lead Designer",
            rating: 5,
            review: "Fugiat vero nemo molestiae, deleniti eaque. Lorem ipsum dolor sit amet consectetur adipisicing elit.",
            src: "/image/cust.jpg"

        },
        {
            name: "Amit Joshi",
            company: "CodeWorks",
            designation: "Senior Developer",
            rating: 4,
            review: "Voluptatem, sint. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur quisquam quia.",
            src: "/image/cust.jpg"
        }
    ];


    const [current, setCurrent] = useState(0);
    const length = customers.length;
    const [direction, setDirection] = useState("next");
    const [prevIndex, setPrevIndex] = useState(null);

    function setState(newIndex: any, dir: any) {
        setPrevIndex(current);
        setDirection(dir);
        setCurrent(newIndex);
    }

    function nextSlide() {
        setState((current + 1) % length, "next");
    }

    function prevSlide() {
        setState((current - 1 + length) % length, "prev");
    }

    const getClassName = (index: any) => {
        if (index === current) return "active";
        if (index === prevIndex) return direction === "next" ? "left" : "right";
        return direction === "next" ? "right" : "left";
    };

    return (
        <div className="relative flex   w-full overflow-hidden bg-[linear-gradient(to_bottom,rgba(49,210,242,0.1)_75%,rgba(49,210,242,0.3)_100%)] lg:bg-[linear-gradient(to_bottom,rgba(49,210,242,0.12)_0%,rgba(49,210,242,0.12)_80%,rgba(49,210,242,0.3)_100%)] h-[670px] md:h-[875px] lg:h-[900px] max-h-[100vh] " id="customer-review">
            <h1 className="text-black text-[2.5rem] font-semibold px-7 md:px-9 lg:px-19 pt-7 custom-poppins-font ">Customer Review</h1>

            {/* custormer review box */}
            <div className="absolute top-0 left-0 w-full z-10 bg-white   ">
                {/* Slides */}
                {customers.map((customer, i) => (
                    <div id="target" key={i} className={`slideBox absolute inset-0 ${getClassName(i)}   px-7 md:px-9 lg:px-19  ${i === current ? "active" : ""}`}  >

                        {/* customer Card */}
                        <div id="customerCard" className=" flex justify-center items-center flex-col mt-24 p-4 ]">
                            {/* image */}
                            <div className="w-full flex justify-center items-center pb-4 max-w-[1000px]  ">
                                <img src={customer.src} alt="" className="object-cover w-[60vw] h-[60vw] lg:h-[40vw] lg:w-[40vw] xl:h-[25vw] xl:w-[25vw] rounded-full " />

                            </div>
                            {/* description */}
                            <div className="max-w-[40vw]">
                                {/* rating */}
                                <div className="flex justify-center items-center gap-4 pb-4">
                                    {
                                        Array.from({ length: 5 }).map((_, i) => (
                                            <>
                                                <div key={i} className="md:hidden">
                                                    <StarIcon size={20} color={(i < customer.rating) ? "#31D2F2" : "#CDCDCD"} />
                                                </div>
                                                <div key={i} className="hidden md:block lg:hidden ">
                                                    <StarIcon size={24} color={(i < customer.rating) ? "#31D2F2" : "#CDCDCD"} />
                                                </div>
                                                <div key={i} className="hidden lg:block xl:hidden ">
                                                    <StarIcon size={28} color={(i < customer.rating) ? "#31D2F2" : "#CDCDCD"} />
                                                </div>
                                                <div key={i} className="hidden xl:block ">
                                                    <StarIcon size={32} color={(i < customer.rating) ? "#31D2F2" : "#CDCDCD"} />
                                                </div>
                                            </>
                                        ))
                                    }
                                </div>
                                {/* reiview */}
                                <p className="text-[#0A1A2E] text-lg md:text-[1.3125rem] lg:text-[1.5rem]  text-center pb-4 ">
                                    <span className="inline-block md:hidden"><QutiationMark size={18} color="#0A1A2E" /></span>
                                    <span className="hidden md:inline-block lg:hidden"><QutiationMark size={21} color="#0A1A2E" /></span>
                                    <span className="hidden lg:inline-block "><QutiationMark size={24} color="#0A1A2E" /></span>
                                    {/* <span className="hidden xl:inline-block "><QutiationMark size={28} color="#0A1A2E" /></span> */}
                                    <span className="text-center"> {customer.review} </span>
                                    <span className="inline-block md:hidden rotate-180"><QutiationMark size={18} color="#0A1A2E" /></span>
                                    <span className="hidden md:inline-block lg:hidden rotate-180"><QutiationMark size={21} color="#0A1A2E" /></span>
                                    <span className="hidden lg:inline-block rotate-180"><QutiationMark size={24} color="#0A1A2E" /></span>
                                    {/* <span className="hidden xl:inline-block  rotate-180"><QutiationMark size={28} color="#0A1A2E" /></span> */}

                                </p>
                                {/* Name and Role */}
                                <div className="text-[#0A1A2E] text-[15px] md:text-[18px] lg:text-[21px]  font-bold text-center flex gap-6 pb-4 justify-center"><span id="name">{customer.name}</span><span className="text-[13px] md:text-[15px] lg:text-[18px]  text-[#283357] font-semibold"><span id="designation">{customer.designation},</span><span id="company">{customer.company}</span></span></div>
                            </div>
                        </div>

                    </div>
                ))}
                {/* Controls */}

            </div>
            <div id="controls" className="absolute top-[580px] md:top-[50%] left-0 right-0 z-10 flex py-4 px-8 md:px-14  justify-between transform  -translate-y-1/2 ">
                <button onClick={prevSlide} className="bg-[#31D2F2]  justify-center items-center rounded-full h-[40px] w-[40px] flex  cursor-pointer rotate-0  md:hidden text-[#fff] text-[1.5rem] font-bold"> &lt; </button>
                <button onClick={prevSlide} className="bg-[#31D2F2]  justify-center items-center rounded-full h-[48px] w-[48px] cursor-pointer hidden md:flex lg:hidden text-[#fff] text-[1.8rem] font-bold "> &lt; </button>
                <button onClick={prevSlide} className="bg-[#31D2F2]  justify-center items-center rounded-full h-[60px] w-[60px] cursor-pointer rotate-0 hidden lg:flex xl:hidden text-[#fff] text-[2rem] font-bold"> &lt; </button>
                <button onClick={prevSlide} className="bg-[#31D2F2]  justify-center items-center rounded-full h-[72px] w-[72px] cursor-pointer rotate-0 hidden xl:flex text-[#fff] text-[2.3rem] font-bold" > &lt; </button>

                {/*  */}
                <button onClick={nextSlide} className="bg-[#31D2F2]  justify-center items-center rounded-full h-[40px] w-[40px] flex  cursor-pointer rotate-0  md:hidden text-[#fff] text-[1.5rem] font-bold"> &gt; </button>
                <button onClick={nextSlide} className="bg-[#31D2F2]  justify-center items-center rounded-full h-[48px] w-[48px] cursor-pointer hidden md:flex lg:hidden text-[#fff] text-[1.8rem] font-bold "> &gt; </button>
                <button onClick={nextSlide} className="bg-[#31D2F2]  justify-center items-center rounded-full h-[60px] w-[60px] cursor-pointer rotate-0 hidden lg:flex xl:hidden text-[#fff] text-[2rem] font-bold"> &gt; </button>
                <button onClick={nextSlide} className="bg-[#31D2F2]  justify-center items-center rounded-full h-[72px] w-[72px] cursor-pointer rotate-0 hidden xl:flex text-[#fff] text-[2.3rem] font-bold" > &gt; </button>
            </div>
            {/* Styles */}
            <style jsx>{`
   .slideBox {
    position: absolute;
    top: 50%;
    left: 0;
    width: 100%;
    transition: transform 0.5s ease, opacity 0.5s ease, scale 0.5s ease;
    opacity: 0;
    transform: translateY(-50%) scale(1);
    z-index: 1;
  }
    #customerCard{
    transition: transform 0.5s ease, scale 0.5s ease;
    }
  .active {
    transform: translateY(-50%) translateX(0%) scale(1);
    opacity: 1;
    z-index: 2;
  }

  .left {
    transform: translateY(-50%) translateX(-100%) ;
    opacity: 0;
  }
    .left>div{
    transform: scale(0.4);
  }
  .right {
    transform: translateY(-50%) translateX(100%);
    opacity: 0;
  }
    .right>div{
    transform: scale(0.4);
  }
      `}</style>
        </div>
    );
}














