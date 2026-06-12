
"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function IndustriesHero() {
  return (
    <section className="relative overflow-hidden bg-slate-950 py-28 text-white">

      {/* Background Glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 via-transparent to-cyan-500/10" />
      <div className="absolute w-96 h-96 bg-blue-500/20 blur-[140px] rounded-full -top-24 -left-24" />
      <div className="absolute w-96 h-96 bg-cyan-500/20 blur-[140px] rounded-full bottom-0 right-0" />

      <div className="relative max-w-7xl mx-auto px-6 text-center">

        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="uppercase tracking-[5px] text-blue-400 text-sm"
        >
          INDUSTRIES WE SERVE
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-5xl lg:text-7xl font-extrabold mt-6 leading-tight"
        >
          IT Solutions Built
          <br />
          For Every Industry
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-slate-300 text-xl max-w-3xl mx-auto mt-8"
        >
          Catalyst Solution delivers secure, scalable and enterprise-grade
          infrastructure solutions tailored for Healthcare, Banking,
          Manufacturing, Education, Retail, Government and more.
        </motion.p>

        <div className="flex flex-wrap justify-center gap-4 mt-12">

          <Link
            href="/contact"
            className="px-8 py-4 rounded-xl bg-blue-600 hover:bg-blue-700 transition flex items-center gap-2"
          >
            Contact Experts
            <ArrowRight size={18} />
          </Link>

          <Link
            href="#industries"
            className="px-8 py-4 rounded-xl border border-white/10 bg-white/5 backdrop-blur-xl hover:border-blue-500 transition"
          >
            Explore Industries
          </Link>

        </div>

      </div>
    </section>
  );
}
