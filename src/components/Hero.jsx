import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

function Hero() {
  return (
    <section className="bg-[#0a0a0a] text-white flex items-center justify-center px-4 sm:px-6 md:px-8 py-4 sm:py-6 md:py-8 max-h-[calc(100vh-4rem)] overflow-hidden mt-16 sm:mt-20 md:mt-24">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8 items-center">
        {/* Hero Text */}
        <div className="flex flex-col justify-center space-y-3 animate-fadeIn">
          <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-extrabold tracking-tight text-[#c5e5e4] leading-tight">
            Hello, I'm <span className="block bg-clip-text text-transparent bg-gradient-to-r from-[#c5e5e4] to-[#ffffff]">Ahad Sheikh</span>
          </h1>
          <p className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl text-[#d1d5db] max-w-xs sm:max-w-sm md:max-w-md leading-relaxed">
            A passionate web developer crafting beautiful, functional, and responsive websites with creativity and precision.
          </p>
          {/* Animated Button */}
          <button className="animated-button relative flex items-center gap-1 px-4 sm:px-5 py-2 sm:py-2.5 border-4 border-transparent text-xs sm:text-sm font-semibold bg-[#c5e5e4] rounded-full text-[#1f387e] shadow-[0_0_0_2px_#ffffff] cursor-pointer overflow-hidden transition-all duration-600 ease-[cubic-bezier(0.23,1,0.32,1)] hover:shadow-[0_0_0_12px_transparent] hover:text-[#212121] hover:rounded-xl active:scale-95 active:shadow-[0_0_0_4px_greenyellow] group w-fit">
            <span className="circle absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 sm:w-3 h-2 sm:h-3 bg-white rounded-full opacity-0 transition-all duration-800 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:w-[140px] sm:group-hover:w-[160px] group-hover:h-[140px] sm:group-hover:h-[160px] group-hover:opacity-100"></span>
            <span className="text relative z-10 -translate-x-1 sm:-translate-x-1.5 transition-all duration-800 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:translate-x-1 sm:group-hover:translate-x-1.5">
              <Link href="/contact">Contact Me</Link>
            </span>
            <svg
              className="arr-1 absolute w-3 sm:w-4 fill-[#1f387e] z-10 right-2 sm:right-2.5 transition-all duration-800 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:-right-1/4"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M16.01 11H4v2h12.01v3L20 12l-3.99-4z" />
            </svg>
            <svg
              className="arr-2 absolute w-3 sm:w-4 fill-[#1f387e] z-10 -left-1/4 transition-all duration-800 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:left-2 sm:group-hover:left-2.5"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M16.01 11H4v2h12.01v3L20 12l-3.99-4z" />
            </svg>
          </button>
        </div>
        {/* Hero Image */}
        <div className="relative order-first md:order-last animate-slideInRight max-w-[200px] sm:max-w-[240px] md:max-w-[300px] lg:max-w-[360px] xl:max-w-[400px] mx-auto z-0">
          <Image
            src="/me1.jpg"
            alt="Ahad Sheikh, Web Developer"
            width={300}
            height={300}
            className="w-full h-auto rounded-2xl shadow-2xl object-cover transform hover:scale-105 transition-transform duration-500"
            priority
            sizes="(max-width: 640px) 100vw, (max-width: 768px) 80vw, (max-width: 1024px) 50vw, 30vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a]/30 to-transparent rounded-2xl pointer-events-none" />
        </div>
      </div>
    </section>
  );
}

export default Hero;