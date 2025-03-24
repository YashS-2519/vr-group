import React from "react";

export default function Card({ icon, title, description }) {
  return (
    <div className="bg-white shadow-lg rounded-2xl p-6 flex flex-col items-center text-center 
                    transition-transform duration-300 hover:scale-105 hover:shadow-pink-500/50 border border-gray-200">
      {/* Icon */}
      <div className="text-4xl text-pink-500 mb-4">{icon}</div>
      {/* Title */}
      <h3 className="text-xl font-bold text-gray-900">{title}</h3>
      {/* Description */}
      <p className="text-gray-600 text-sm mt-2">{description}</p>
    </div>
  );
}
