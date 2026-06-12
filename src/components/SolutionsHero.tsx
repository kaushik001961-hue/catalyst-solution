"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function SolutionsHero() {
  return (
    <section className="relative overflow-hidden py-32 bg-slate-950">

      <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 via-transparent to-cyan-500/10" />

      <div className="absolute -top-20 -left-20 w-96 h-96 bg-blue-500/20 blur-[140px] rounded-full" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-500/20 blur-[140px] rounded-full" />

      <div className="relative max-w-7xl mx-auto px-6 text-center">

        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="uppercase tracking-[4px] text-blue-500 text-sm"
        >
          BUSINESS SOLUTIONS
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl lg:text-7xl font-bold mt-6"
        >
          Modern IT Solutions
          <br />
          For Digital Enterprises
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-slate-400 text-xl max-w-3xl mx-auto mt-8"
        >
          Cloud transformation, DevOps automation, enterprise security,
          server modernization and scalable infrastructure solutions.
        </motion.p>

        <div className="flex justify-center gap-5 mt-12">

          <Link
            href="/contact"
            className="bg-blue-600 hover:bg-blue-700 px-8 py-4 rounded-xl flex items-center gap-2 transition"
          >
            Get Consultation
            <ArrowRight size={18} />
          </Link>

          <Link
            href="#solutions"
            className="border border-white/10 bg-white/5 backdrop-blur-xl px-8 py-4 rounded-xl hover:border-blue-500 transition"
          >
            Explore Solutions
          </Link>

        </div>

      </div>

    </section>
  );
}