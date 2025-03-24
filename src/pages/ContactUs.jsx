import React from "react";

export default function ContactUs() {
  return (
    <div
      className="min-h-screen flex flex-col justify-evenly items-center bg-gray-100 px-6 relative"
      style={{
        backgroundImage:
          "url('https://www.buzzmakers.in/assets/frontend/images/group-1.webp')",
        backgroundPosition: "bottom right",
        backgroundRepeat: "no-repeat",
        backgroundSize: "450px", // Slightly increased size
      }}
    >
      <div>
        {/* Hindi Heading */}
        <h1
          className="text-5xl md:text-6xl font-extrabold tracking-wide"
          style={{ fontFamily: "'Tillana', sans-serif", color: "#000" }}
        >
          #बातचीत
        </h1>

        {/* English Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">
          Let's <span className="text-pink-500">Connect</span>
        </h2>
      </div>

      {/* Contact Section */}
      <div className="text-center w-2xl w-4/5 mt-4">
        <h1 className="text-2xl md:text-3xl font-bold text-gray-900 leading-relaxed">
          Now that you’ve scrolled to the bottom of the page, we’d love to
          translate this conversion into a conversation. Let’s talk!
        </h1>
        <button
          onClick={() => (window.location.href = "https://wa.me/+917982826408")}
          className="hover:cursor-pointer mt-6 px-8 py-3 text-lg font-semibold text-white bg-pink-500 rounded-full shadow-md hover:bg-pink-600 transition duration-300"
        >
          Contact Us
        </button>
      </div>
    </div>
  );
}
