"use client";

import { useState } from 'react';

const ContactPage = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Sending...');

    const res = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    });

    if (res.ok) {
      setStatus('Message sent successfully!');
      setFormData({ name: '', email: '', message: '' });
    } else {
      setStatus('Failed to send. Please try again.');
    }
  };

  return (
    <section className="relative bg-gradient-to-b from-[#0a0a0a] to-[#1a1a1a] min-h-[calc(100vh-5rem)]  border-t border-[#c5e5e4] py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 flex items-center justify-center overflow-hidden z-10">
      {/* Background grid pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.1)_1px,transparent_0)] bg-[length:20px_20px] opacity-20 pointer-events-none" />

      <div className="max-w-2xl mx-auto w-full relative z-10">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-[#c5e5e4] to-[#7dd3fc] mb-8 sm:mb-10 animate-fadeIn [animation-duration:1s]">
          Get in Touch
        </h1>

        <form onSubmit={handleSubmit} className="space-y-6">
          {['name', 'email'].map((field, i) => (
            <div
              key={field}
              className={`relative animate-slideInUp`}
              style={{ animationDuration: '0.8s', animationDelay: `${0.1 + i * 0.1}s`, animationFillMode: 'both' }}
            >
              <input
                name={field}
                type={field === 'email' ? 'email' : 'text'}
                placeholder={`Your ${field.charAt(0).toUpperCase() + field.slice(1)}`}
                value={formData[field]}
                onChange={handleChange}
                required
                className="w-full px-5 py-3 bg-[#1a1a1a]/80 border-2 border-gray-700 rounded-xl text-gray-200 placeholder-gray-400 focus:outline-none focus:border-[#7dd3fc] focus:ring-2 focus:ring-[#7dd3fc]/50 transition-all duration-300 text-sm sm:text-base"
              />
            </div>
          ))}

          <div
            className="relative animate-slideInUp"
            style={{ animationDuration: '0.8s', animationDelay: '0.3s', animationFillMode: 'both' }}
          >
            <textarea
              name="message"
              rows="5"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              required
              className="w-full px-5 py-3 bg-[#1a1a1a]/80 border-2 border-gray-700 rounded-xl text-gray-200 placeholder-gray-400 focus:outline-none focus:border-[#7dd3fc] focus:ring-2 focus:ring-[#7dd3fc]/50 transition-all duration-300 resize-y text-sm sm:text-base"
            />
          </div>

          <div
            className="group animate-slideInUp"
            style={{ animationDuration: '0.8s', animationDelay: '0.4s', animationFillMode: 'both' }}
          >
            <button
              type="submit"
              className="relative w-full bg-gradient-to-r from-[#c5e5e4] to-[#7dd3fc] hover:from-[#7dd3fc] hover:to-[#c5e5e4] text-[#0a0a0a] font-semibold py-3 px-6 rounded-xl shadow-[0_4px_14px_rgba(125,211,252,0.3)] transition-all duration-300 hover:shadow-[0_6px_20px_rgba(125,211,252,0.5)] hover:scale-105 active:scale-95 text-sm sm:text-base"
            >
              <span className="relative z-10">Send Message</span>
              <span className="absolute inset-0 bg-white/20 rounded-xl scale-0 group-hover:scale-100 transition-transform duration-500 origin-center" />
            </button>
          </div>

          {status && (
            <p className={`text-sm text-center mt-4 animate-fadeIn duration-500 ${status.includes('Failed') ? 'text-red-400' : 'text-green-400'}`}>
              {status}
            </p>
          )}
        </form>

        {/* Floating accent shapes */}
        <div className="absolute -top-6 -left-6 w-10 h-10 bg-[#c5e5e4]/10 rounded-full animate-float [animation-duration:3s]" />
        <div className="absolute -bottom-6 -right-6 w-8 h-8 bg-[#7dd3fc]/10 rounded-full animate-float [animation-duration:4s] [animation-delay:1s]" />
      </div>

      {/* Custom animations */}
      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes slideInUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-12px); }
        }

        .animate-fadeIn {
          animation: fadeIn forwards ease-out;
        }
        .animate-slideInUp {
          animation: slideInUp forwards ease-out;
        }
        .animate-float {
          animation: float infinite ease-in-out;
        }
      `}</style>
    </section>
  );
};

export default ContactPage;
