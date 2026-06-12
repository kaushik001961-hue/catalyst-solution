
"use client";

import { motion } from "framer-motion";
import {
  Cloud,
  ShieldCheck,
  Gauge,
} from "lucide-react";

const studies = [
  {
    icon: Cloud,
    title: "Cloud Migration",
    company: "FinTech Enterprise",
    description:
      "Successfully migrated critical workloads to AWS with zero downtime and improved scalability.",
    result: "40% Cost Savings",
  },
  {
    icon: ShieldCheck,
    title: "Security Hardening",
    company: "Healthcare Organization",
    description:
      "Implemented firewall protection, server hardening, malware prevention and compliance updates.",
    result: "99.99% Uptime",
  },
  {
    icon: Gauge,
    title: "Performance Optimization",
    company: "E-Commerce Platform",
    description:
      "Optimized databases, web servers and caching layers to improve application performance.",
    result: "60% Faster",
  },
];

export default function CaseStudies() {
  return (
    <section className="py-28 bg-slate-950 overflow-hidden">

      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center">

          <span className="uppercase tracking-[4px] text-blue-500 text-sm">
            CASE STUDIES
          </span>

          <h2 className="text-5xl font-bold mt-4">
            Success Stories
          </h2>

          <p className="mt-6 text-slate-400 max-w-3xl mx-auto text-lg">
            Real-world infrastructure solutions that improved
            performance, security and reliability.
          </p>

        </div>

        <div className="grid lg:grid-cols-3 gap-8 mt-16">

          {studies.map((item, index) => {

            const Icon = item.icon;

            return (

              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.15,
                }}
                whileHover={{
                  y: -10,
                  scale: 1.03,
                }}
                className="
                  group
                  relative
                  overflow-hidden
                  rounded-3xl
                  border
                  border-white/10
                  bg-white/5
                  backdrop-blur-xl
                  p-8
                  transition-all
                  duration-500
                "
              >

                <div className="
                  absolute
                  inset-0
                  opacity-0
                  group-hover:opacity-100
                  transition
                  duration-500
                  bg-gradient-to-r
                  from-blue-500/10
                  via-cyan-400/10
                  to-blue-500/10
                "></div>

                <div className="relative z-10">

                  <div className="relative w-16 h-16">

                    <div className="
                      absolute
                      inset-0
                      rounded-full
                      bg-blue-500/20
                      blur-xl
                      scale-125
                    "></div>

                    <div className="
                      relative
                      w-16
                      h-16
                      rounded-2xl
                      border
                      border-blue-500/30
                      bg-blue-500/10
                      flex
                      items-center
                      justify-center
                      shadow-[0_0_20px_rgba(59,130,246,0.35)]
                    ">

                      <Icon
                        size={32}
                        className="text-blue-400"
                      />

                    </div>

                  </div>

                  <p className="text-blue-400 uppercase tracking-wider text-sm mt-6">
                    {item.company}
                  </p>

                  <h3 className="text-2xl font-bold mt-3">
                    {item.title}
                  </h3>

                  <div className="mt-4">

                    <span className="
                      inline-block
                      rounded-full
                      bg-blue-500/10
                      border
                      border-blue-500/30
                      px-4
                      py-2
                      text-sm
                      font-semibold
                      text-blue-400
                    ">
                      {item.result}
                    </span>

                  </div>

                  <p className="text-slate-300 mt-6 leading-7">
                    {item.description}
                  </p>

                  <button
                    className="
                      group/button
                      mt-8
                      inline-flex
                      items-center
                      gap-2
                      font-semibold
                      text-blue-400
                    "
                  >

                    View Case Study

                    <span
                      className="
                        transition-transform
                        duration-300
                        group-hover/button:translate-x-2
                      "
                    >
                      →
                    </span>

                  </button>

                </div>

              </motion.div>

            );

          })}

        </div>

      </div>

    </section>
  );
}
