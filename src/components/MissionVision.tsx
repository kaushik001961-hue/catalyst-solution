"use client";

import { motion } from "framer-motion";
import { Target, Eye } from "lucide-react";

export default function MissionVision() {
  return (
    <section className="py-24 bg-[#06122d]">
      <div className="max-w-7xl mx-auto px-6">

        {/* Section Header */}

        <div className="text-center mb-16">

          <span className="uppercase tracking-[4px] text-blue-500 text-sm">
            Mission & Vision
          </span>

          <h2 className="text-5xl font-bold text-white mt-4">
            Driven by Innovation & Reliability
          </h2>

          <p className="text-slate-300 max-w-3xl mx-auto mt-6 text-lg">
            We help organizations build secure, scalable and
            high-performance infrastructure that powers business growth.
          </p>

        </div>

        <div className="grid lg:grid-cols-2 gap-10">

          {/* Mission */}

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl p-10"
          >

            <div className="w-16 h-16 rounded-2xl bg-blue-500/10 flex items-center justify-center mb-8">
              <Target className="text-blue-500" size={32} />
            </div>

            <h3 className="text-3xl font-bold text-white mb-6">
              Our Mission
            </h3>

            <p className="text-slate-300 leading-8 text-lg">
              To empower businesses with secure, scalable and
              high-performance server infrastructure backed by
              expert engineers, proactive monitoring and
              world-class support.
            </p>

          </motion.div>

          {/* Vision */}

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl p-10"
          >

            <div className="w-16 h-16 rounded-2xl bg-blue-500/10 flex items-center justify-center mb-8">
              <Eye className="text-blue-500" size={32} />
            </div>

            <h3 className="text-3xl font-bold text-white mb-6">
              Our Vision
            </h3>

            <p className="text-slate-300 leading-8 text-lg">
              To become a trusted global technology partner by
              delivering innovative cloud, DevOps and enterprise
              infrastructure solutions that maximize uptime,
              security and operational excellence.
            </p>

          </motion.div>

        </div>

      </div>
    </section>
  );
}