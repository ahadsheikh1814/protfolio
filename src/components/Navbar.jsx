'use client';
import Link from 'next/link';
import React, { useState } from 'react';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="w-full bg-[#0a0a0a] text-white px-6 py-4 flex justify-between items-center shadow-lg border-b-[0.1px] border-[#c5e5e4] relative z-50">
      {/* Logo */}
      <div className="flex flex-col leading-tight">
        <Link href="/" className="text-2xl font-bold transition duration-300">
          Ahad<span className="text-xl text-[#c5e5e4]">Sheikh</span>
        </Link>
      </div>

      {/* Hamburger Menu */}
      <div className="md:hidden">
        <button onClick={toggleMenu} aria-label="Toggle navigation">
          <svg
            className="w-6 h-6 fill-current"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {isOpen ? (
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M18.278 5.707L12 12l-6.278-6.293a1 1 0 00-1.414 1.414L10.586 13.414l-6.6 6.6a1 1 0 001.414 1.414L12 14.828l6.6 6.6a1 1 0 001.414-1.414l-6.6-6.6 6.6-6.6a1 1 0 00-1.414-1.414z"
              />
            ) : (
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M3 6h18v2H3V6zm0 5h18v2H3v-2zm0 5h18v2H3v-2z"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Navigation Links and Contact Button */}
      <ul
        className={`${
          isOpen ? 'flex' : 'hidden'
        } md:flex flex-col md:flex-row gap-4 md:gap-8 text-lg font-medium absolute md:static top-16 left-0 w-full md:w-auto bg-[#0a0a0a] md:bg-transparent p-6 md:p-0 transition-all duration-300 ease-in-out z-10`}
      >
        <li>
          <Link
            href="/"
            className="hover:text-[#c5e5e4] transition duration-300 block py-2 md:py-0"
            onClick={() => setIsOpen(false)}
          >
            Home
          </Link>
        </li>
        
        <li>
          <Link
            href="/Me"
            className="hover:text-[#c5e5e4] transition duration-300 block py-2 md:py-0"
            onClick={() => setIsOpen(false)}
          >
            About Me
          </Link>
        </li>
        <li>
          <Link
            href="/Projects"
            className="hover:text-[#c5e5e4] transition duration-300 block py-2 md:py-0"
            onClick={() => setIsOpen(false)}
          >
            Projects
          </Link>
        </li>
        <li className="mt-4 md:hidden">
          <button
            className="animated-button relative flex items-center gap-1 px-9 py-3 border-4 border-transparent text-base font-semibold bg-[#c5e5e4] rounded-full text-[#1f387e] shadow-[0_0_0_2px_#ffffff] cursor-pointer overflow-hidden transition-all duration-600 ease-[cubic-bezier(0.23,1,0.32,1)] hover:shadow-[0_0_0_12px_transparent] hover:text-[#212121] hover:rounded-xl active:scale-95 active:shadow-[0_0_0_4px_greenyellow] group w-full justify-center"
          >
            <span className="circle absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-5 h-5 bg-white rounded-full opacity-0 transition-all duration-800 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:w-[220px] group-hover:h-[220px] group-hover:opacity-100"></span>
            <span className="text relative z-10 -translate-x-3 transition-all duration-800 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:translate-x-3">
              <Link
                href="/Contact"
                onClick={() => setIsOpen(false)}
                className="block w-full h-full"
              >
                Contact Me
              </Link>
            </span>
            <svg
              className="arr-1 absolute w-6 fill-[#1f387e] z-10 right-4 transition-all duration-800 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:-right-1/4"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                d="M5 12h14M13 6l6 6-6 6"
                stroke="#1f387e"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <svg
              className="arr-2 absolute w-6 h-6 fill-[#1f387e] z-0 -left-1/4 transition-all duration-800 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:left-4"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                d="M5 12h14M13 6l6 6-6 6"
                stroke="#1f387e"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </li>
      </ul>

      {/* Desktop Contact Button */}
      <button
        className="animated-button relative hidden md:flex items-center gap-1 px-9 py-3 border-4 border-transparent text-base font-semibold bg-[#c5e5e4] rounded-full text-[#1f387e] shadow-[0_0_0_2px_#ffffff] cursor-pointer overflow-hidden transition-all duration-600 ease-[cubic-bezier(0.23,1,0.32,1)] hover:shadow-[0_0_0_12px_transparent] hover:text-[#212121] hover:rounded-xl active:scale-95 active:shadow-[0_0_0_4px_greenyellow] group"
      >
        <span className="circle absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-5 h-5 bg-white rounded-full opacity-0 transition-all duration-800 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:w-[220px] group-hover:h-[220px] group-hover:opacity-100"></span>
        <span className="text relative z-10 -translate-x-3 transition-all duration-800 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:translate-x-3">
          <Link href="/Contact">Contact Me</Link>
        </span>
        <svg
          className="arr-1 absolute w-6 fill-[#1f387e] z-10 right-4 transition-all duration-800 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:-right-1/4"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          aria-hidden="true"
        >
          <path
            d="M5 12h14M13 6l6 6-6 6"
            stroke="#1f387e"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <svg
          className="arr-2 absolute w-6 h-6 fill-[#1f387e] z-0 -left-1/4 transition-all duration-800 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:left-4"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          aria-hidden="true"
        >
          <path
            d="M5 12h14M13 6l6 6-6 6"
            stroke="#1f387e"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
    </nav>
  );
}

export default Navbar;