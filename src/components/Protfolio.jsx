"use client"
import React from 'react'
import Link from 'next/link'

function Portfolio() {
  return (
    <section className="bg-gradient-to-b from-[#0a0a0a] to-[#1a1a1a] text-white flex items-center justify-center px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16 min-h-[calc(100vh-5rem)] overflow-hidden mt-16 sm:mt-20 lg:mt-24 relative border-t border-[#c5e5e4]">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.1)_1px,transparent_0)] bg-[length:20px_20px] opacity-20 pointer-events-none" />
      
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center relative z-10">
        {/* Portfolio Text */}
        <div className="flex flex-col justify-center space-y-4 sm:space-y-6 animate-fadeIn [animation-duration:1s]">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-[#c5e5e4] to-[#7dd3fc] leading-tight">
            My Portfolio
          </h1>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-300 max-w-md lg:max-w-lg leading-relaxed font-light">
            Discover my curated collection of innovative web development projects, showcasing creativity and technical expertise.
          </p>
          {/* Enhanced Animated Button */}
          <Link href={'/Projects'}>
          <button className="relative group flex items-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 border-2 border-transparent text-sm sm:text-base font-semibold bg-gradient-to-r from-[#c5e5e4] to-[#7dd3fc] rounded-full text-[#0a0a0a] shadow-[0_4px_14px_rgba(125,211,252,0.3)] cursor-pointer overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] hover:shadow-[0_6px_20px_rgba(125,211,252,0.5)] hover:scale-105 active:scale-95 w-fit">
            <span className="circle absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-0 h-0 bg-white/20 rounded-full transition-all duration-700 ease-[cubic-bezier(0.4,0,0.2,1)] group-hover:w-[200px] group-hover:h-[200px]" />
            <span className="relative z-10 font-medium transition-colors duration-500 group-hover:text-[#0a0a0a]">
              Explore Projects
            </span>
            <svg
              className="relative w-4 sm:w-5 fill-current z-10 transition-transform duration-500 group-hover:translate-x-1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M16.01 11H4v2h12.01v3L20 12l-3.99-4z" />
            </svg>
          </button>
          </Link>
        </div>
        {/* Portfolio Image */}
        <div className="relative order-first lg:order-last animate-slideInRight [animation-duration:1.2s] max-w-[240px] sm:max-w-[300px] md:max-w-[360px] lg:max-w-[420px] xl:max-w-[480px] mx-auto">
          <div className="relative group">
            <img
              src="/portfolio.jpg"
              alt="Portfolio Showcase"
              className="w-full h-auto rounded-2xl shadow-2xl object-cover transform transition-all duration-700 ease-[cubic-bezier(0.4,0,0.2,1)] group-hover:scale-105 group-hover:shadow-[0_8px_30px_rgba(125,211,252,0.3)]"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a]/50 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
          </div>
          {/* Decorative floating elements */}
          <div className="absolute -top-4 -left-4 w-8 h-8 bg-[#c5e5e4]/20 rounded-full animate-float [animation-duration:3s]" />
          <div className="absolute -bottom-4 -right-4 w-6 h-6 bg-[#7dd3fc]/20 rounded-full animate-float [animation-duration:4s] [animation-delay:1s]" />
        </div>
      </div>

      {/* Custom animations */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes slideInRight {
          from { opacity: 0; transform: translateX(20px); }
          to { opacity: 1; transform: translateX(0); }
        }
        .animate-float {
          animation: float infinite ease-in-out;
        }
        .animate-fadeIn {
          animation: fadeIn forwards ease-out;
        }
        .animate-slideInRight {
          animation: slideInRight forwards ease-out;
        }
      `}</style>
    </section>
  )
}

export default Portfolio