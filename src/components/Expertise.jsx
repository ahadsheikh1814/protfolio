'use client';
import React from 'react';
import {
  Code,
  Paintbrush,
  Rocket,
  GitBranch,
  Layers,
} from 'lucide-react';

const expertiseList = [
  {
    title: 'Frontend Development',
    description: 'Building responsive UIs using React & Next.js.',
    icon: <Code className="w-8 h-8 text-[#c5e5e4] transition-transform duration-300" />,
  },
  {
    title: 'Tailwind CSS Design',
    description: 'Crafting clean, scalable styles with Tailwind CSS.',
    icon: <Paintbrush className="w-8 h-8 text-[#c5e5e4] transition-transform duration-300" />,
  },
  {
    title: 'Performance & SEO',
    description: 'Optimizing load speed and accessibility.',
    icon: <Rocket className="w-8 h-8 text-[#c5e5e4] transition-transform duration-300" />,
  },
  {
    title: 'Version Control',
    description: 'Collaborating via Git & GitHub efficiently.',
    icon: <GitBranch className="w-8 h-8 text-[#c5e5e4] transition-transform duration-300" />,
  },
  {
    title: 'Scalable Architecture',
    description: 'Writing reusable, maintainable code.',
    icon: <Layers className="w-8 h-8 text-[#c5e5e4] transition-transform duration-300" />,
  },
];

function Expertise() {
  return (
    <section className="bg-[#0a0a0a] text-white px-4 sm:px-6 md:px-8 py-16 sm:py-20 md:py-24 overflow-hidden border-t border-[#c5e5e4]">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-[#c5e5e4] to-white text-transparent bg-clip-text drop-shadow-xl mb-6">
          My Expertise
        </h2>
        <p className="text-base sm:text-lg md:text-xl text-gray-400 mb-12 sm:mb-16 px-2 sm:px-0">
          I craft modern, fast, and scalable web solutions tailored to business needs.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 sm:gap-10">
          {expertiseList.map((item, index) => (
            <div
              key={index}
              className="group bg-[#111111]/60 backdrop-blur-md border border-[#c5e5e41a] rounded-2xl p-5 sm:p-6 shadow-lg 
                         transition-transform duration-300 ease-in-out
                         hover:-translate-y-3 hover:scale-105 hover:shadow-[#c5e5e4]/40"
            >
              <div className="flex items-center gap-4 mb-4">
                <div
                  className="p-3 rounded-full bg-[#c5e5e4]/10 border border-[#c5e5e4]/20
                             transition-transform duration-300
                             group-hover:scale-110"
                >
                  {item.icon}
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-[#c5e5e4]">
                  {item.title}
                </h3>
              </div>
              <p className="text-gray-300 text-sm sm:text-base leading-relaxed text-left">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        <p className="text-md sm:text-lg text-gray-500 mt-12 sm:mt-16 max-w-2xl mx-auto px-2 sm:px-0">
          I constantly explore new tools and technologies to stay ahead in the ever-evolving web development landscape.
        </p>
      </div>
    </section>
  );
}

export default Expertise;
