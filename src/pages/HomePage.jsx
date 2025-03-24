import React, { useEffect, useState } from "react";
import img from "../assets/home-page-right-side-img.jpg";

export default function HomePage() {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setTimeout(() => setAnimate(true), 100); // Delay for smooth effect
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-[url('/path-to-doodle-background.svg')] bg-cover bg-center">
      <div className="container mx-auto px-6 md:px-12 lg:px-24 flex flex-col md:flex-row items-center mt-20 relative">
        {/* Left Section */}
        <div
          className={`md:w-1/2 text-center md:text-left space-y-6 transition-all duration-700 ease-out 
                         ${animate ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"}`}
        >
          <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 leading-tight relative">
            {/* Left Quote */}
            <span
              className="select-none text-pink-500 opacity-40 text-5xl xs:text-6xl sm:text-7xl md:text-8xl 
                absolute left-0 top-2 sm:top-4 md:-left-8 md:-top-8"
            >
              “
            </span>
            <span className="block pt-6 sm:pt-8 md:pt-0">
              From Posts to Popularity – We’ve Got You!
            </span>
            {/* Right Quote */}
            <span
              className="select-none text-pink-500 opacity-40 text-5xl xs:text-6xl sm:text-7xl md:text-8xl 
                absolute right-0 bottom-2 sm:bottom-4 md:-right-8 md:-bottom-8"
            >
              ”
            </span>
          </h1>
          <p className="text-lg text-gray-700 transition-all duration-700 ease-out delay-150">
            Empowering creators and businesses to thrive on Instagram.
          </p>

          {/* Contact Us Button with Continuous Border Animation */}
          <div className="relative inline-block">
            <button
              onClick={() =>
                (window.location.href = "https://wa.me/+917982826408")
              }
              className="relative z-10 select-none hover:cursor-pointer bg-gradient-to-r from-pink-500 to-red-500 
                         text-white px-6 py-3 rounded-full text-lg font-semibold shadow-lg"
            >
              Contact Us
            </button>
            {/* Animated Border */}
            <span className="absolute inset-0 rounded-full border-2 border-pink-500 animate-border-move"></span>
          </div>
        </div>

        {/* Right Section (Shift Image Slightly Right) */}
        <div
          className={`md:w-1/2 flex justify-center mt-10 md:mt-0 transition-all duration-700 ease-out delay-300
                         ${animate ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"}`}
        >
          <img
            src={img}
            alt="Agency Work"
            className="max-w-sm md:max-w-md lg:max-w-lg pointer-events-none select-none ml-4 md:ml-8 lg:ml-12"
            draggable="false"
          />
        </div>
      </div>
    </div>
  );
}
