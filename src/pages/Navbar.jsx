import { useState, useRef } from "react";
import {
  RiPhoneFill,
  RiMailFill,
  RiInstagramFill,
  RiMenu3Fill,
  RiCloseFill,
  RiWhatsappFill,
} from "@remixicon/react";

export default function Navbar() {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [isMenuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <nav className="fixed top-0 left-0 w-full bg-[rgba(245,240,255,0.95)] backdrop-blur-lg shadow-md z-50 px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <div
          className="text-3xl font-bold text-[#5a189a] tracking-wide"
          style={{ fontFamily: "'DM Serif Display', serif" }}
        >
          VR GROUP
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-[#5a189a] transition-transform duration-300"
          onClick={() => setMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? (
            <RiCloseFill size={30} className="rotate-180 transition duration-300" />
          ) : (
            <RiMenu3Fill size={30} className="rotate-0 transition duration-300" />
          )}
        </button>

        {/* Menu */}
        <div
          className={`absolute md:static top-full left-0 w-full md:w-auto bg-white md:bg-transparent flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6 p-4 md:p-0 transition-all duration-500 ease-in-out transform ${
            isMenuOpen ? "opacity-100 translate-y-0 scale-100" : "opacity-0 -translate-y-5 scale-95 pointer-events-none md:pointer-events-auto md:opacity-100 md:translate-y-0 md:scale-100"
          }`}
        >
          <a href="#services" className="block md:inline-block text-gray-700 hover:text-[#b87aff] transition duration-300">
            Services
          </a>
          <a href="#about" className="block md:inline-block text-gray-700 hover:text-[#b87aff] transition duration-300">
            About Us
          </a>

          {/* Contact Dropdown */}
          <div
            className="relative block md:inline-block"
            onMouseEnter={() => setDropdownOpen(true)}
            onMouseLeave={() => setTimeout(() => setDropdownOpen(false), 200)}
          >
            <button className="hover:text-[#b87aff] transition duration-300">Contact</button>
            <div
              className={`absolute right-0 mt-2 w-60 bg-white shadow-lg rounded-md overflow-hidden border border-gray-300 transition-all duration-300 transform ${
                isDropdownOpen ? "opacity-100 scale-100 translate-y-0" : "opacity-0 scale-90 -translate-y-2 pointer-events-none"
              }`}
            >
              <a href="tel:+917982826408" className="block px-4 py-2 hover:bg-gray-100 flex items-center">
                <RiPhoneFill className="mr-2 text-[#5a189a]" size={20} /> +91 798 282 6408
              </a>
              <a href="https://wa.me/+917982826408" className="block px-4 py-2 hover:bg-gray-100 flex items-center">
                <RiWhatsappFill className="mr-2 text-[#5a189a]" size={20} /> +91 798 282 6408
              </a>
              <a href="mailto:vrgroup.insta@gmail.com" className="block px-4 py-2 hover:bg-gray-100 flex items-center">
                <RiMailFill className="mr-2 text-[#5a189a]" size={20} /> vrgroup.insta@gmail.com
              </a>
              <a href="https://instagram.com/_vrgroup" className="block px-4 py-2 hover:bg-gray-100 flex items-center">
                <RiInstagramFill className="mr-2 text-[#5a189a]" size={20} /> @_vrgroup
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Floating Contact Icons */}
      <div className="fixed bottom-6 left-6 flex flex-col space-y-3 z-50">
        <a
          href="tel:+91 798 282 6408"
          className="relative bg-blue-600 text-white p-3 rounded-full shadow-lg hover:scale-110 transition-transform duration-300 flex items-center group"
        >
          <RiPhoneFill size={24} />
          <span className="absolute left-full ml-2 bg-gray-800 text-white text-sm px-2 py-1 rounded hidden group-hover:block transition duration-300">
            +91&nbsp;798&nbsp;282&nbsp;6408
          </span>
        </a>
        <a
          href="https://wa.me/+917982826408"
          className="relative bg-gradient-to-r from-green-500 to-green-700 text-white p-3 rounded-full shadow-lg hover:scale-110 transition-transform duration-300 flex items-center group"
        >
          <RiWhatsappFill size={24} />
          <span className="absolute left-full ml-2 bg-gray-800 text-white text-sm px-2 py-1 rounded hidden group-hover:block transition duration-300">
            +91&nbsp;798&nbsp;282&nbsp;6408
          </span>
        </a>
        <a
          href="mailto:vrgroup.insta@gmail.com"
          className="relative bg-red-600 text-white p-3 rounded-full shadow-lg hover:scale-110 transition-transform duration-300 flex items-center group"
        >
          <RiMailFill size={24} />
          <span className="absolute left-full ml-2 bg-gray-800 text-white text-sm px-2 py-1 rounded hidden group-hover:block transition duration-300">
            vrgroup.insta@gmail.com
          </span>
        </a>
        <a
          href="https://instagram.com/_vrgroup"
          className="relative bg-pink-600 text-white p-3 rounded-full shadow-lg hover:scale-110 transition-transform duration-300 flex items-center group"
        >
          <RiInstagramFill size={24} />
          <span className="absolute left-full ml-2 bg-gray-800 text-white text-sm px-2 py-1 rounded hidden group-hover:block transition duration-300">
            @_vrgroup
          </span>
        </a>
      </div>
    </>
  );
}

