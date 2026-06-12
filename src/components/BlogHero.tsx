
"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function BlogHero() {
  return (
    <section className="relative overflow-hidden bg-slate-950 py-28 text-white">

      <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 via-transparent to-cyan-500/10" />
      <div className="absolute w-96 h-96 bg-blue-500/20 blur-[140px] rounded-full -top-20 -left-20" />
      <div className="absolute w-96 h-96 bg-cyan-500/20 blur-[140px] rounded-full bottom-0 right-0" />

      <div className="relative max-w-7xl mx-auto px-6 text-center">

        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="uppercase tracking-[5px] text-blue-400 text-sm"
        >
          CATALYST INSIGHTS
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-5xl lg:text-7xl font-extrabold mt-6"
        >
          Technology
          <br />
          Insights & Blogs
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-slate-300 text-xl max-w-3xl mx-auto mt-8"
        >
          Stay updated with Cloud Computing, AI Infrastructure,
          DevOps, Cyber Security and Enterprise Server Technologies.
        </motion.p>

        <div className="mt-12">
          <Link
            href="#blogs"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-blue-600 hover:bg-blue-700 transition"
          >
            Explore Articles
            <ArrowRight size={18} />
          </Link>
        </div>

      </div>

    </section>
  );
}