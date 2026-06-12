
"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function BlogCTA() {
  return (
    <section className="py-28 bg-slate-950 text-white">

      <div className="max-w-5xl mx-auto px-6">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-[40px] bg-white/5 border border-white/10 backdrop-blur-xl p-14 text-center"
        >

          <span className="uppercase tracking-[4px] text-blue-400 text-sm">
            STAY UPDATED
          </span>

          <h2 className="text-5xl font-bold mt-5">
            Get the Latest Technology Insights
          </h2>

          <p className="text-slate-300 mt-6 max-w-2xl mx-auto text-lg">
            Follow Catalyst Solution for expert articles on Cloud,
            AI Infrastructure, DevOps, Server Management and
            Enterprise IT Solutions.
          </p>

          <Link
            href="/contact"
            className="inline-flex items-center gap-2 mt-10 px-8 py-4 rounded-xl bg-blue-600 hover:bg-blue-700 transition"
          >
            Contact Our Experts
            <ArrowRight size={18} />
          </Link>

        </motion.div>

      </div>

    </section>
  );
}
