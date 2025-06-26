'use client';
import React from 'react';
import Image from 'next/image';

function AboutMe() {
  return (
    <section className="relative w-full bg-[#0a0a0a] text-white px-4 sm:px-6 md:px-8 py-16 sm:py-20 md:py-24 border-t border-[#c5e5e4] overflow-hidden">
      {/* Glow Background */}
      <div className="absolute -top-32 -left-32 w-[500px] h-[500px] bg-[#c5e5e4] opacity-10 blur-[160px] z-0" />

      {/* Main Content */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12 relative z-10">
        {/* Image */}
        <div className="w-full md:w-1/2 flex justify-center md:justify-start">
          <div className="relative rounded-2xl shadow-[0_0_60px_rgba(197,229,228,0.2)] overflow-hidden group transition-all duration-500 ease-in-out max-w-xs sm:max-w-sm md:max-w-md w-full">
            <Image
              src="/me2.jpg"
              alt="Ahad Sheikh, Web Developer"
              width={400}
              height={500}
              className="w-full h-auto rounded-2xl object-cover group-hover:scale-105 transition-transform duration-500"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-2xl pointer-events-none" />
          </div>
        </div>

        {/* Text */}
        <div className="w-full md:w-1/2 text-center md:text-left px-2">
          <h2 className="text-4xl sm:text-5xl font-bold mb-8 bg-gradient-to-r from-[#c5e5e4] to-white text-transparent bg-clip-text drop-shadow-lg">
            About Me
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-300 leading-relaxed mb-6">
            👋 I'm <span className="text-[#c5e5e4] font-semibold">Ahad Sheikh</span>, a frontend developer
            passionate about building clean, interactive, and performance-focused websites that blend design and functionality.
          </p>
          <p className="text-base sm:text-lg md:text-xl text-gray-400 leading-relaxed mb-6">
            With a strong eye for detail and a love for technology, I create responsive interfaces using modern tools
            like React, Next.js, and Tailwind CSS. I take pride in writing accessible, scalable, and maintainable code.
          </p>
          <p className="text-base sm:text-lg md:text-xl text-gray-500 leading-relaxed">
            Outside the editor, I’m exploring new tech, designing sleek UIs, or enjoying a great movie 🎬.
          </p>
        </div>
      </div>
    </section>
  );
}

export default AboutMe;
