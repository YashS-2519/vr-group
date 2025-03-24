import React from "react";

export default function TestimonialCard({ review }) {
  return (
    <div className="w-full max-w-lg bg-white shadow-lg rounded-lg overflow-hidden border border-gray-300 p-6">
      {/* Review Content */}
      <p className="text-gray-700 text-lg font-medium text-center">"{review.text}"</p>

      {/* Name Section */}
      <div className="mt-4 text-center">
        <p className="font-semibold text-pink-500 text-xl">{review.username}</p>
      </div>
    </div>
  );
}

