import React from 'react';
import { motion } from 'framer-motion';
import Spline from '@splinetool/react-spline';

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: 'easeOut' },
  }),
};

export default function Hero() {
  return (
    <section className="relative w-full bg-white text-[#111111] overflow-hidden">
      {/* Background Spline Animation */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
        {/* Subtle gradient overlay to ensure text contrast */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/80 via-white/70 to-white/90" />
      </div>

      <div className="relative mx-auto max-w-[1180px] px-6 pt-28 pb-16 md:pt-36 md:pb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left: Copy */}
          <div>
            <motion.h1
              className="font-semibold leading-tight tracking-tight text-3xl sm:text-4xl md:text-5xl"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.4 }}
              variants={fadeUp}
            >
              “Learn AI Website Building in 3 Days — No Code, Just Creation.”
            </motion.h1>

            <motion.ul
              className="mt-6 space-y-2 text-base sm:text-lg text-[#111111]/80"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.4 }}
            >
              {[
                '3 Live Sessions • 1.5 Hours Each',
                'Build 10 Real AI-Powered Websites',
                'Get a Chance to Work with IIA',
              ].map((item, idx) => (
                <motion.li
                  key={item}
                  custom={idx + 1}
                  variants={fadeUp}
                  className="flex items-center gap-3"
                >
                  <span className="inline-block h-2 w-2 rounded-full bg-gradient-to-r from-[#3A5BFF] to-[#4B8DF8]" />
                  {item}
                </motion.li>
              ))}
            </motion.ul>

            <motion.div
              className="mt-8"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.4 }}
              variants={fadeUp}
              custom={4}
            >
              <a
                href="https://rzp.io/rzp/ADwb7OhH"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-xl px-6 py-3 text-white font-medium bg-gradient-to-r from-[#3A5BFF] to-[#4B8DF8] shadow-[0_10px_30px_rgba(58,91,255,0.35)] transition-all duration-300 hover:translate-y-[-2px] hover:shadow-[0_20px_50px_rgba(58,91,255,0.45)]"
              >
                Join Now (₹1000)
              </a>
              <p className="mt-3 text-sm text-[#111111]/70">Limited Batch — Only 100 Students Per Cohort.</p>
            </motion.div>
          </div>

          {/* Right: Image Card */}
          <motion.div
            className="relative"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
            variants={fadeUp}
            custom={2}
          >
            <div className="relative mx-auto aspect-[4/5] w-64 sm:w-72 md:w-80 rounded-2xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1200&auto=format&fit=crop"
                alt="Prince Singh"
                className="h-full w-full object-cover"
              />
              <div className="pointer-events-none absolute inset-0 ring-1 ring-black/5" />
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(59,130,246,0.18),transparent_40%)]" />
            </div>
            <p className="mt-4 text-sm text-[#111111]/80 leading-relaxed">
              “I believe every student can build something real — I just show them how.”
              <br /> — Prince Singh, Founder, IIA
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
