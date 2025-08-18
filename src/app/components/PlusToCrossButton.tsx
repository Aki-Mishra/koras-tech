"use client";
import { useState } from "react";

export default function PlusToCrossButton() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <button
      onClick={() => setIsOpen(!isOpen)}
      className="w-5 h-5 rounded-full flex items-center justify-center relative outline-none"
    >
      {/* Horizontal bar */}
      <span
        className={`absolute w-5 h-[3px] bg-[linear-gradient(90deg,#31D2F2,#ffffff)] transition-all duration-300 ${
          isOpen ? "rotate-45" : "rotate-0"
        }`}
      ></span>
      {/* Vertical bar */}
      <span
        className={`absolute w-5 h-[3px] bg-[linear-gradient(90deg,#31D2F2,#ffffff)] transition-all duration-300 ${
          isOpen ? "-rotate-45" : "rotate-90"
        }`}
      ></span>
    </button>
  );
}
