import React, { useState, useEffect } from "react";
import TestimonialCard from "../components/TestimonialCard";
import { 
  RiChatSmile3Fill, 
  RiMessage2Fill, 
  RiStarSmileFill, 
  RiDiscussFill, 
  RiFeedbackFill, 
  RiHeart3Fill 
} from "@remixicon/react";

export default function Testimonial() {
  const reviews = [
    {
      username: "Arjun Singh",
      text: "This agency has transformed my Instagram growth! Highly recommend! 🚀",
    },
    {
      username: "Priya Creations",
      text: "Amazing content creation service! My reels are performing much better! 🎬",
    },
    {
      username: "Rahul Digital",
      text: "Engagement has skyrocketed since I started using their Instagram ads service! 🔥",
    }
  ];

  const [currentReviewIndex, setCurrentReviewIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentReviewIndex((prevIndex) => (prevIndex + 1) % reviews.length);
    }, 3000); // Change review every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center bg-gray-100 py-12 overflow-hidden">
      {/* Floating Icons for Background Creativity */}
      <div className="absolute inset-0 flex justify-center items-center">
        <RiChatSmile3Fill className="absolute text-pink-300 opacity-50 text-[450px] top-[-50px] left-[-30px] rotate-[25deg] animate-pulse" />
        <RiMessage2Fill className="absolute text-blue-300 opacity-50 text-[400px] bottom-[-80px] right-[10px] rotate-[-20deg] animate-bounce" />
        <RiStarSmileFill className="absolute text-yellow-400 opacity-50 text-[430px] top-[200px] left-[50px] rotate-[15deg] animate-spin-slow" />
        <RiDiscussFill className="absolute text-purple-300 opacity-50 text-[420px] bottom-[150px] left-[10px] rotate-[-10deg] animate-wiggle" />
        <RiFeedbackFill className="absolute text-green-300 opacity-50 text-[440px] top-[120px] right-[50px] rotate-[18deg] animate-pulse" />
        <RiHeart3Fill className="absolute text-red-300 opacity-50 text-[460px] bottom-[10px] right-[100px] rotate-[-25deg] animate-bounce" />
      </div>

      {/* Branding Heading */}
      <h1 className="text-6xl md:text-7xl font-extrabold tracking-wide z-10" style={{ fontFamily: "'Tillana', sans-serif", color: "#000" }}>
        #क्या कहना
      </h1>

      {/* Page Title */}
      <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-12 z-10">
        What Our <span className="text-pink-500">Clients Say</span>
      </h1>

      {/* Animated Review Card */}
      <div className="relative w-full flex justify-center z-10">
        <TestimonialCard review={reviews[currentReviewIndex]} />
      </div>

      {/* Extra Content to Avoid Empty Look */}
      <div className="mt-10 px-6 text-center z-10">
        <p className="text-gray-600 text-lg max-w-3xl">
          Our clients love our services! We strive to provide the best Instagram growth, content creation, and engagement strategies.
        </p>
        <p className="mt-4 text-gray-700 font-semibold">Join the success today! 🚀</p>
      </div>
    </div>
  );
}
