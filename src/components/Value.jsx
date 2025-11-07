import React from 'react';
import { motion } from 'framer-motion';

const rows = [
  { feature: '3 Live Sessions (1.5 hr each)', value: '₹1,499' },
  { feature: '10 Real Websites (Built Live)', value: '₹1,499' },
  { feature: 'AI Tools & Prompts Access', value: '₹499' },
  { feature: 'Portfolio Setup Help', value: '₹499' },
  { feature: 'Opportunity to Work with IIA', value: 'Priceless' },
];

export default function Value() {
  return (
    <section className="relative bg-white py-16 md:py-24">
      <div className="mx-auto max-w-[1180px] px-6">
        <motion.h2
          className="text-2xl sm:text-3xl font-semibold text-center text-[#111111]"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          What You’ll Get Inside the Program
        </motion.h2>

        <div className="mt-10 overflow-hidden rounded-2xl border border-black/5 bg-white shadow-[0_8px_30px_rgba(17,17,17,0.05)]">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="divide-y divide-black/5">
              {rows.map((r, idx) => (
                <div key={r.feature} className="flex items-center justify-between p-4 sm:p-5">
                  <span className="text-[#111111] font-medium">{r.feature}</span>
                  <span className="text-[#111111]/80">{r.value}</span>
                </div>
              ))}
            </div>
            <div className="p-6 sm:p-8 bg-gradient-to-br from-white to-[#F8FAFF]">
              <div className="text-center">
                <p className="text-sm uppercase tracking-wide text-[#111111]/70">Total Value</p>
                <p className="text-3xl font-semibold text-[#111111] mt-1">₹3,996</p>
                <div className="mt-6 rounded-xl border border-black/5 bg-white p-6 shadow-sm">
                  <p className="text-sm text-[#111111]/70">You Pay Only</p>
                  <p className="text-2xl font-semibold text-[#111111]">₹1000 <span className="text-sm font-normal text-[#111111]/70">(Launch Offer)</span></p>
                  <a
                    href="https://rzp.io/rzp/ADwb7OhH"
                    target="_blank"
                    rel="noreferrer"
                    className="mt-5 inline-flex items-center justify-center rounded-xl px-6 py-3 text-white font-medium bg-gradient-to-r from-[#3A5BFF] to-[#4B8DF8] shadow-[0_10px_30px_rgba(58,91,255,0.35)] transition-all duration-300 hover:translate-y-[-2px] hover:shadow-[0_20px_50px_rgba(58,91,255,0.45)]"
                  >
                    Join the 3-Day Live Sessions (₹1000)
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
