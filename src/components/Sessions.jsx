import React from 'react';
import { motion } from 'framer-motion';

const sessions = [
  {
    title: 'Session 1 – Build with AI',
    desc: 'Learn AI builders (Base44, Lovable) and create your first website.',
    icon: '1️⃣',
  },
  {
    title: 'Session 2 – Design & Automate',
    desc: 'Use 5 powerful AI tools to design, automate, and improve your website.',
    icon: '2️⃣',
  },
  {
    title: 'Session 3 – Deploy & Grow',
    desc: 'Deploy your project, learn real-world application, and explore how to work with IIA.',
    icon: '3️⃣',
  },
];

export default function Sessions() {
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
          3 Live Sessions • 4.5 Hours • One Transformative Skill
        </motion.h2>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          {sessions.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1, ease: 'easeOut' }}
              className="group rounded-2xl border border-black/5 bg-white p-6 shadow-[0_8px_30px_rgba(17,17,17,0.05)] transition-transform duration-300 hover:-translate-y-1"
            >
              <div className="text-2xl">{s.icon}</div>
              <h3 className="mt-3 text-lg font-semibold text-[#111111]">{s.title}</h3>
              <p className="mt-2 text-sm text-[#111111]/75">{s.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Progress bar */}
        <div className="mt-10">
          <div className="flex items-center justify-between text-sm text-[#111111]/80 mb-2">
            <span>⚡ 60 of 100 Seats Filled — Enroll Now!</span>
            <span>60%</span>
          </div>
          <div className="h-3 w-full rounded-full bg-black/5 overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: '60%' }}
              viewport={{ once: true }}
              transition={{ duration: 2.5, ease: 'easeInOut' }}
              className="h-full rounded-full bg-gradient-to-r from-[#4B8DF8] to-[#3A5BFF]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
