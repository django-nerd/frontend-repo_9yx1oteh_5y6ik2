import React from 'react';
import Hero from './components/Hero';
import Sessions from './components/Sessions';
import Value from './components/Value';
import ProofAndWhy from './components/ProofAndWhy';
import FinalCtaFooter from './components/FinalCtaFooter';

export default function App() {
  return (
    <div className="min-h-screen bg-white text-[#111111]">
      {/* Sticky top bar with CTA on mobile */}
      <div className="sticky top-0 z-40 backdrop-blur bg-white/70 border-b border-black/5">
        <div className="mx-auto max-w-[1180px] px-6 h-14 flex items-center justify-between">
          <div className="font-semibold">IIA • 3-Day AI Website Creation</div>
          <a
            href="https://rzp.io/rzp/ADwb7OhH"
            target="_blank"
            rel="noreferrer"
            className="hidden sm:inline-flex items-center justify-center rounded-lg px-4 py-2 text-white text-sm font-medium bg-gradient-to-r from-[#3A5BFF] to-[#4B8DF8] shadow-[0_6px_20px_rgba(58,91,255,0.35)] transition-all duration-300 hover:translate-y-[-2px] hover:shadow-[0_14px_36px_rgba(58,91,255,0.45)]"
          >
            Join Now (₹1000)
          </a>
        </div>
      </div>

      {/* Sections */}
      <Hero />
      <Sessions />
      <Value />
      <ProofAndWhy />
      <FinalCtaFooter />

      {/* Mobile sticky CTA */}
      <div className="fixed bottom-4 left-0 right-0 z-40 sm:hidden">
        <div className="mx-auto max-w-[1180px] px-6">
          <a
            href="https://rzp.io/rzp/ADwb7OhH"
            target="_blank"
            rel="noreferrer"
            className="block w-full text-center rounded-xl px-6 py-3 text-white font-medium bg-gradient-to-r from-[#3A5BFF] to-[#4B8DF8] shadow-[0_10px_30px_rgba(58,91,255,0.35)] transition-all duration-300 active:translate-y-[-1px]"
          >
            Join Now (₹1000)
          </a>
        </div>
      </div>
    </div>
  );
}
