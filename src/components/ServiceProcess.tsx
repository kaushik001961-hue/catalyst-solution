
"use client";

import { motion } from "framer-motion";
import {
  Search,
  ClipboardCheck,
  Rocket,
  Gauge,
  Headphones,
} from "lucide-react";

const process = [
  {
    icon: Search,
    title: "Consultation",
    desc: "Understand business goals and infrastructure requirements.",
  },
  {
    icon: ClipboardCheck,
    title: "Planning",
    desc: "Design a secure and scalable implementation strategy.",
  },
  {
    icon: Rocket,
    title: "Deployment",
    desc: "Execute migration and infrastructure deployment smoothly.",
  },
  {
    icon: Gauge,
    title: "Optimization",
    desc: "Improve performance, security and resource utilization.",
  },
  {
    icon: Headphones,
    title: "24×7 Support",
    desc: "Continuous monitoring and proactive maintenance services.",
  },
];

export default function ServiceProcess() {
  return (
    <section className="py-28 bg-slate-950 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center">
          <span className="uppercase tracking-[4px] text-blue-500 text-sm">
            OUR PROCESS
          </span>

          <h2 className="text-5xl font-bold mt-4 text-white">
            How We Deliver IT Excellence
          </h2>

          <p className="text-slate-300 max-w-3xl mx-auto mt-6 text-lg">
            A proven service delivery model designed to ensure reliability,
            scalability and long-term success.
          </p>
        </div>

        <div className="relative mt-24">

          {/* Timeline Line */}
          <div className="hidden lg:block absolute top-10 left-0 w-full h-1 bg-slate-700 rounded-full" />

          <div className="grid lg:grid-cols-5 gap-10">

            {process.map((step, index) => {
              const Icon = step.icon;

              return (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15 }}
                  whileHover={{ y: -8 }}
                  className="relative text-center"
                >
                  {/* Glow */}
                  <div className="absolute left-1/2 -translate-x-1/2 top-0 w-20 h-20 bg-blue-500/20 blur-2xl rounded-full animate-pulse" />

                  {/* Circle */}
                  <div className="relative z-10 mx-auto w-20 h-20 rounded-full bg-slate-900 border-4 border-blue-500 flex items-center justify-center shadow-[0_0_30px_rgba(59,130,246,0.35)]">
                    <Icon size={34} className="text-blue-400" />
                  </div>

                  <h3 className="text-2xl font-bold text-white mt-8">
                    {step.title}
                  </h3>

                  <p className="text-slate-300 mt-4 leading-7">
                    {step.desc}
                  </p>
                </motion.div>
              );
            })}

          </div>
        </div>
      </div>
    </section>
  );
}
