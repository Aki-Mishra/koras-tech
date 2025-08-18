"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { StaticImageData } from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

// Interface for image data
interface ImageData {
  src: string;
}

// Image data array
let images: ImageData[] = [
    {
    src: "https://cdn.pixabay.com/photo/2024/07/18/04/41/programmer-8903087_1280.jpg",

  },
  {
    src: "https://images.pexels.com/photos/221185/pexels-photo-221185.jpeg",
  },
  {
    src: "https://cdn.pixabay.com/photo/2020/07/08/04/12/work-5382501_1280.jpg",
  },

];

export default function ImageSlider() {
  // State to keep track of the current image index
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  // State to determine if the image is being hovered over
  const [isHovered, setIsHovered] = useState<boolean>(false);

  // Function to show the previous slide
  const prevSlide = (): void => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  // Function to show the next slide
  const nextSlide = (): void => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  // useEffect hook to handle automatic slide transition
  useEffect(() => {
    // Start interval for automatic slide change if not hovered
    if (!isHovered) {
      const interval = setInterval(() => {
        nextSlide();
      }, 5000);

      // Cleanup the interval on component unmount
      return () => {
        clearInterval(interval);
      };
    }
  }, [isHovered]);

  // Handle mouse over event
  const handleMouseOver = (): void => {
    setIsHovered(true);
  };

  // Handle mouse leave event
  const handleMouseLeave = (): void => {
    setIsHovered(false);
  };

  return (
    <div className="relative w-full mx-auto mt-4 lg:mt-0">
      <div className="relative h-[450px] lg:h-[calc(100vh-100px)]  group bg-pink-500" onMouseOver={handleMouseOver} onMouseLeave={handleMouseLeave} >
        <div className="absolute top-0 left-0 w-full h-full bg-[#0000006b]  z-10"></div>
        <Image
          src={images[currentIndex].src}
          alt={`Slider Image ${currentIndex + 1}`}
          layout="fill"
          objectFit="cover"
          className="transition-all duration-500 ease-in-out cursor-pointer bg-red-700"
        />
      </div>
      {/* <button
        className="absolute flex justify-center items-center left-0 top-1/2 transform h-2.5 rounded-full hover:bg-[#1a222f] mx-1 -mt-[10px] -translate-y-1/2 bg-[#111927] text-white p-2 group"
        onClick={prevSlide}
      >
        <ChevronLeft className="text-gray-400 group-hover:text-white" />
      </button> */}
      {/* <button
        className="bg-red-500 absolute right-0 top-50%"
        onClick={nextSlide}
      >
        <ChevronRight className="text-gray-400 group-hover:text-white" />
      </button> */}
      <div className="flex justify-center ">
        {images.map((_, index) => (
          <div
            key={index}
            className={`h-2 w-2 rounded-full mx-1 cursor-pointer relative bottom-10 ${index === currentIndex
                ? "bg-black rounded-xl"
                : "bg-gray-300 rounded-xl"
              } transition-all duration-500 ease-in-out`}
          ></div>
        ))}
      </div>
    </div>
  );
}