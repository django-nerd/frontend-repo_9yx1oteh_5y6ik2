import React from 'react';

export default function FinalCtaFooter() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-[1180px] px-6 py-16 md:py-24 text-center">
        <p className="text-2xl sm:text-3xl font-semibold text-[#111111] leading-snug">
          Learn. Build. Grow.
          <br />
          Be a Part of the IIA AI Creator Journey.
        </p>
        <a
          href="https://rzp.io/rzp/ADwb7OhH"
          target="_blank"
          rel="noreferrer"
          className="mt-6 inline-flex items-center justify-center rounded-xl px-7 py-4 text-white font-medium bg-gradient-to-r from-[#3A5BFF] to-[#4B8DF8] shadow-[0_10px_30px_rgba(58,91,255,0.35)] transition-all duration-300 hover:translate-y-[-2px] hover:shadow-[0_20px_50px_rgba(58,91,255,0.45)] text-lg"
        >
          Join Now (₹1000)
        </a>
        <p className="mt-3 text-sm text-[#111111]/70">Seats Filling Fast — Only 40 Left!</p>
      </div>

      {/* Footer */}
      <footer className="border-t border-black/5">
        <div className="mx-auto max-w-[1180px] px-6 py-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 text-[#111111]">
          <div>
            <div className="text-lg font-semibold">IIA</div>
            <p className="text-sm text-[#111111]/70">Where Innovation Meets Opportunity.</p>
          </div>
          <div className="text-sm text-right">
            <p>📧 iiabusiness.india@gmail.com</p>
            <p>📞 +91 6283479912</p>
            <p className="text-xs text-[#111111]/60 mt-2">© 2025 IIA — All Rights Reserved</p>
          </div>
        </div>
      </footer>
    </section>
  );
}
