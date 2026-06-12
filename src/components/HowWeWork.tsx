"use client";

import { motion } from "framer-motion";
import {
  Search,
  Settings,
  ShieldCheck,
  TrendingUp,
} from "lucide-react";

const steps = [
  {
    icon: Search,
    title: "Assessment",
    desc: "Infrastructure audit and business requirement analysis.",
  },
  {
    icon: Settings,
    title: "Implementation",
    desc: "Deployment, migration and infrastructure configuration.",
  },
  {
    icon: ShieldCheck,
    title: "Monitoring",
    desc: "24×7 monitoring, security updates and proactive maintenance.",
  },
  {
    icon: TrendingUp,
    title: "Optimization",
    desc: "Performance tuning, scaling and continuous improvements.",
  },
];

export default function HowWeWork() {
  return (
    <section className="py-28 bg-slate-900 overflow-hidden">

      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-20">

          <span className="uppercase tracking-[4px] text-blue-500 text-sm">
            OUR PROCESS
          </span>

          <h2 className="text-5xl font-bold mt-4">
            How We Work
          </h2>

          <p className="text-slate-400 mt-6 max-w-3xl mx-auto">
            From planning to optimization, our engineers ensure your
            infrastructure remains secure, scalable and available.
          </p>

        </div>

        <div className="relative">

          {/* Animated Line */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2 }}
            className="hidden lg:block absolute top-10 left-0 right-0 h-1 origin-left rounded-full bg-gradient-to-r from-blue-600 via-cyan-400 to-blue-600"
          />

          <div className="grid lg:grid-cols-4 gap-10 relative">

            {steps.map((step, index) => {

              const Icon = step.icon;

              return (

                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    delay: index * 0.15,
                    duration: 0.6,
                  }}
                  className="text-center relative"
                >

                  {/* Circle */}

                <div
  className="
    relative
    mx-auto
    w-20
    h-20
    rounded-full
    bg-slate-950
    border-4
    border-blue-500
    flex
    items-center
    justify-center
    timeline-glow
    shadow-[0_0_25px_rgba(59,130,246,0.35)]
    hover:shadow-[0_0_45px_rgba(59,130,246,0.8)]
    transition-all
    duration-300
  "
>
  <div className="absolute inset-0 rounded-full bg-blue-500/10 blur-xl scale-125"></div>

  <Icon
    size={34}
    className="relative z-10 text-blue-500"
  />
</div>

                  {/* Number */}

                  <div className="mt-5 text-blue-500 font-bold text-xl">
                    0{index + 1}
                  </div>

                  {/* Card */}

                  <div className="mt-6 rounded-3xl bg-slate-950 border border-slate-800 p-8 hover:border-blue-500 transition">

                    <h3 className="text-2xl font-bold">
                      {step.title}
                    </h3>

                    <p className="text-slate-400 mt-4 leading-7">
                      {step.desc}
                    </p>

                  </div>

                </motion.div>

              );

            })}

          </div>

        </div>

      </div>

    </section>
  );
}