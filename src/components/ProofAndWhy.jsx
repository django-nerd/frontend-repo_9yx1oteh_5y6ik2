import React from 'react';
import { motion } from 'framer-motion';

const testimonials = [
  { quote: '“Sir ke session me maine apni pehli website live kar li.”', name: 'Aarav' },
  { quote: '“Non-tech background hone ke baad bhi 3 din me site bana li.”', name: 'Riya' },
  { quote: '“Session ke end me mujhe IIA ke saath kam karne ka chance mila.”', name: 'Deepanshu' },
];

export default function ProofAndWhy() {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="mx-auto max-w-[1180px] px-6">
        {/* Reviews Carousel (simple auto fade) */}
        <motion.h2
          className="text-2xl sm:text-3xl font-semibold text-center text-[#111111]"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          What Our Learners Say
        </motion.h2>

        <div className="relative mt-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <motion.div
                key={t.name}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="rounded-2xl border border-black/5 bg-white p-6 shadow-[0_8px_30px_rgba(17,17,17,0.05)]"
              >
                <p className="text-[#111111]">{t.quote}</p>
                <p className="mt-3 text-sm text-[#111111]/70">— {t.name}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Why Choose IIA Table */}
        <div className="mt-14">
          <h3 className="text-xl sm:text-2xl font-semibold text-center text-[#111111]">Why Choose IIA</h3>
          <div className="mt-6 overflow-hidden rounded-2xl border border-black/5 bg-white">
            <div className="grid grid-cols-3 text-sm sm:text-base">
              <div className="p-3 sm:p-4 font-medium text-[#111111] bg-black/5">Feature</div>
              <div className="p-3 sm:p-4 font-medium text-[#111111] bg-black/5 text-center">IIA Live Sessions</div>
              <div className="p-3 sm:p-4 font-medium text-[#111111] bg-black/5 text-center">Others</div>

              {[ 
                { k: '100% Live', iia: '✅', other: '❌' },
                { k: 'Real Website Projects', iia: '✅', other: '❌' },
                { k: 'AI Builders Training', iia: '✅', other: '❌' },
                { k: 'Chance to Work with IIA', iia: '✅', other: '❌' },
              ].map((r, idx) => (
                <React.Fragment key={r.k}>
                  <div className="p-3 sm:p-4 border-t border-black/5 text-[#111111]">{r.k}</div>
                  <div className="p-3 sm:p-4 border-t border-black/5 text-center">{r.iia}</div>
                  <div className="p-3 sm:p-4 border-t border-black/5 text-center">{r.other}</div>
                </React.Fragment>
              ))}
            </div>
          </div>
          <p className="mt-3 text-center text-xs sm:text-sm text-[#111111]/70">“We don’t teach AI — we build with AI.”</p>
        </div>
      </div>
    </section>
  );
}
