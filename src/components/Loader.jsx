'use client';

import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';

export default function Loader({ duration = 3 }) {
  const textRef = useRef(null);
  const loaderRef = useRef(null);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const letters = textRef.current.querySelectorAll('span');

    // Animate letters fade/scale/y with infinite yoyo while loader visible
    const letterAnim = gsap.fromTo(
      letters,
      { opacity: 0, scale: 0.8, y: 20 },
      {
        opacity: 1,
        scale: 1,
        y: 0,
        stagger: 0.1,
        ease: 'power3.out',
        duration: 0.5,
        repeat: -1,
        yoyo: true,
      }
    );

    // After "duration" seconds, animate loader slide up and hide it
    const timer = setTimeout(() => {
      letterAnim.kill(); // stop letters animation

      gsap.to(loaderRef.current, {
        y: '-100%',
        ease: 'power3.inOut',
        duration: 1,
        onComplete: () => setVisible(false),
      });
    }, duration * 1000);

    return () => {
      clearTimeout(timer);
      letterAnim.kill();
    };
  }, [duration]);

  // Don't render loader when hidden
  if (!visible) return null;

  return (
    <div
      ref={loaderRef}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-[#0a0a0a] overflow-hidden"
    >
      <h1
        ref={textRef}
        className="text-5xl sm:text-6xl font-extrabold text-[#c5e5e4] select-none flex space-x-1"
        aria-label="Loading Ahad Sheikh"
      >
        {'Ahad Sheikh'.split('').map((char, idx) => (
          <span key={idx} className="inline-block">
            {char === ' ' ? '\u00A0' : char}
          </span>
        ))}
      </h1>
    </div>
  );
}
