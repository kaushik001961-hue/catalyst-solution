"use client";

import { motion } from "framer-motion";
import { Target, Eye } from "lucide-react";

export default function MissionVision() {
  return (
    <section className="py-28 bg-slate-900">

      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center">

          <span className="uppercase tracking-[4px] text-blue-500 text-sm">
            MISSION & VISION
          </span>

          <h2 className="text-5xl font-bold mt-4">
            Driven by Innovation & Reliability
          </h2>

        </div>

        <div className="grid lg:grid-cols-2 gap-10 mt-16">

          {/* Mission */}

          <motion.div
            whileHover={{ y: -8 }}
            className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-10"
          >

            <div className="w-16 h-16 rounded-2xl bg-blue-500/10 flex items-center justify-center">
              <Target className="text-blue-400" size={34} />
            </div>

            <h3 className="text-3xl font-bold mt-8">
              Our Mission
            </h3>

            <p className="mt-6 text-slate-300 leading-8">
              To empower businesses with secure, scalable and
              high-performance infrastructure through proactive
              server management, cloud technologies and DevOps
              automation.
            </p>

          </motion.div>

          {/* Vision */}

          <motion.div
            whileHover={{ y: -8 }}
            className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-10"
          >

            <div className="w-16 h-16 rounded-2xl bg-blue-500/10 flex items-center justify-center">
              <Eye className="text-blue-400" size={34} />
            </div>

            <h3 className="text-3xl font-bold mt-8">
              Our Vision
            </h3>

            <p className="mt-6 text-slate-300 leading-8">
              To become a trusted global technology partner by
              delivering innovative cloud infrastructure solutions
              that enable organizations to grow confidently and
              securely.
            </p>

          </motion.div>

        </div>

      </div>

    </section>
  );
}