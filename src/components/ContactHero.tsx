"use client";

import { motion } from "framer-motion";

export default function ContactHero() {
  return (
    <section className="relative py-28 bg-slate-950 overflow-hidden text-white">

      <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 via-transparent to-cyan-500/10" />
      <div className="absolute w-96 h-96 bg-blue-500/20 blur-[140px] rounded-full -top-20 -left-20" />
      <div className="absolute w-96 h-96 bg-cyan-500/20 blur-[140px] rounded-full bottom-0 right-0" />

      <div className="relative max-w-7xl mx-auto px-6 text-center">

        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="uppercase tracking-[4px] text-blue-400 text-sm"
        >
          CONTACT US
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl lg:text-7xl font-bold mt-6"
        >
          Let's Build Your
          <br />
          Next Infrastructure
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-slate-300 max-w-3xl mx-auto mt-8 text-xl"
        >
          Connect with Catalyst Solution for Cloud, AI Infrastructure,
          Server Management, DevOps and Enterprise IT Solutions.
        </motion.p>

      </div>

    </section>
  );
}