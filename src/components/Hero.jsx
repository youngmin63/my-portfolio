import React from "react";

export default function Hero() {
  return (
    <div className="mb-16 flex flex-col items-start text-left">
      <h1 className="text-4xl font-bold text-[#ccd6f6]">Youngmin Kwon</h1>
      <p className="text-base  text-[#8892b0] mb-4">Software Developer</p>

      <img
        src="/me2.jpg"
        className="w-40 aspect-[3/4] object-cover border border-gray-300 rounded-lg"
      />
    </div>
  );
}
