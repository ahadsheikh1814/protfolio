'use client';
import Link from 'next/link';
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

function Footer() {
  const footerRef = useRef(null);
  const logoRef = useRef(null);
  const linksRef = useRef([]);
  const socialRef = useRef(null);
  const copyrightRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

    tl.fromTo(
      logoRef.current,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.6 },
    )
      .fromTo(
        linksRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.6, stagger: 0.1 },
        '-=0.4',
      )
      .fromTo(
        socialRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.6 },
        '-=0.4',
      )
      .fromTo(
        copyrightRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.6 },
        '-=0.4',
      );

    return () => tl.kill();
  }, []);

  return (
    <footer
      ref={footerRef}
      className="w-full bg-[#0a0a0a] text-white px-6 py-12 border-t-[0.1px] border-[#c5e5e4]"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Logo/Brand */}
        <div ref={logoRef} className="flex flex-col items-center md:items-start">
          <Link href="/" className="text-2xl font-bold transition duration-300">
            Ahad<span className="text-xl text-[#c5e5e4]">Sheikh</span>
          </Link>
          <p className="mt-2 text-sm text-gray-400 text-center md:text-left">
            Building innovative solutions with passion.
          </p>
        </div>

        {/* Navigation Links */}
        <div className="flex flex-col items-center md:items-center">
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-center md:text-left">
            <li ref={(el) => (linksRef.current[0] = el)}>
              <Link
                href="/"
                className="text-gray-400 hover:text-[#c5e5e4] transition duration-300"
              >
                Home
              </Link>
            </li>
            <li ref={(el) => (linksRef.current[1] = el)}>
              <Link
                href="/Portfolio"
                className="text-gray-400 hover:text-[#c5e5e4] transition duration-300"
              >
                Portfolio
              </Link>
            </li>
            <li ref={(el) => (linksRef.current[2] = el)}>
              <Link
                href="/Me"
                className="text-gray-400 hover:text-[#c5e5e4] transition duration-300"
              >
                About Me
              </Link>
            </li>
            <li ref={(el) => (linksRef.current[3] = el)}>
              <Link
                href="/Expertise"
                className="text-gray-400 hover:text-[#c5e5e4] transition duration-300"
              >
                Expertise
              </Link>
            </li>
            <li ref={(el) => (linksRef.current[4] = el)}>
              <Link
                href="/Contact"
                className="text-gray-400 hover:text-[#c5e5e4] transition duration-300"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Social Media Icons */}
        <div
          ref={socialRef}
          className="flex flex-col items-center md:items-end"
        >
          <h3 className="text-lg font-semibold mb-4">Connect</h3>
          <div className="flex gap-4 flex-wrap justify-center">
            <a
              href="https://x.com/AhadSheikh1814_"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-[#c5e5e4] transition duration-300"
              aria-label="Twitter/X"
            >
              <svg
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>
            <a
              href="https://www.linkedin.com/in/md-ahad-shaeikh-50419a371/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-[#c5e5e4] transition duration-300"
              aria-label="LinkedIn"
            >
              <svg
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
              </svg>
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=61577620942280"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-[#c5e5e4] transition duration-300"
              aria-label="Facebook"
            >
              <svg
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
            </a>
            <a
              href="https://www.instagram.com/ahadsheikh_____ahs/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-[#c5e5e4] transition duration-300"
              aria-label="Instagram"
            >
              <svg
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.33 3.608 1.306.975.975 1.243 2.242 1.306 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.063 1.366-.33 2.633-1.306 3.608-.975.975-2.242 1.243-3.608 1.306-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.063-2.633-.33-3.608-1.306-.975-.975-1.243-2.242-1.306-3.608C2.175 15.584 2.163 15.204 2.163 12s.012-3.584.07-4.85c.063-1.366.33-2.633 1.306-3.608.975-.975 2.242-1.243 3.608-1.306 1.266-.058 1.646-.07 4.85-.07zM12 0C8.741 0 8.332.015 7.052.072 5.775.13 4.513.39 3.483 1.42 2.453 2.45 2.193 3.712 2.135 4.989 2.078 6.269 2.063 6.678 2.063 12s.015 5.731.072 7.011c.058 1.277.318 2.539 1.348 3.569 1.03 1.03 2.292 1.29 3.569 1.348 1.28.057 1.689.072 7.011.072s5.731-.015 7.011-.072c1.277-.058 2.539-.318 3.569-1.348 1.03-1.03 1.29-2.292 1.348-3.569.057-1.28.072-1.689.072-7.011s-.015-5.731-.072-7.011c-.058-1.277-.318-2.539-1.348-3.569-1.03-1.03-2.292-1.29-3.569-1.348C15.668.015 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zm0 10.162a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0-2.88 1.44 1.44 0 0 0 0 2.88z" />
              </svg>
            </a>
            
            <a
              href="https://github.com/ahadsheikh1814/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-[#c5e5e4] transition duration-300"
              aria-label="GitHub"
            >
              <svg
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 17.07 3.633 16.703 3.633 16.703c-1.498-.93.114-.885.114-.885 1.657.117 2.525 1.703 2.525 1.703 1.475 2.528 3.87 1.797 4.815 1.374.15-1.068.577-1.797 1.05-2.21-3.675-.418-7.54-1.837-7.54-8.177 0-1.807.642-3.283 1.695-4.44-.17-.418-.733-2.1.16-4.375 0 0 1.383-.443 4.53 1.685 1.313-.364 2.723-.547 4.125-.552 1.402.005 2.812.188 4.125.552 3.145-2.128 4.527-1.685 4.527-1.685.895 2.275.332 3.957.162 4.375 1.053 1.157 1.695 2.633 1.695 4.44 0 6.352-3.87 7.755-7.552 8.17.592.51 1.125 1.523 1.125 3.067 0 2.21-.015 3.99-.015 4.535 0 .32.217.695.825.577C20.565 21.795 24 17.297 24 12.297c0-6.627-5.373-12-12-12z" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* Copyright Notice */}
      <div
        ref={copyrightRef}
        className="mt-12 text-center text-sm text-gray-400 border-t-[0.1px] border-[#c5e5e4] pt-6"
      >
        © {new Date().getFullYear()} Ahad Sheikh. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;