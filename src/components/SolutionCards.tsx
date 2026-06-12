"use client";

import { motion } from "framer-motion";
import {
Cloud,
ShieldCheck,
Cpu,
Database,
Server,
Globe,
ArrowRight,
Boxes,
} from "lucide-react";

const solutions = [
{
icon: Cloud,
title: "Cloud Transformation",
desc: "Modern cloud migration and hybrid infrastructure solutions.",
},
{
icon: Server,
title: "Managed Infrastructure",
desc: "Complete server lifecycle management and optimization.",
},
{
icon: ShieldCheck,
title: "Cyber Security",
desc: "Enterprise-grade infrastructure protection and monitoring.",
},
{
icon: Cpu,
title: "DevOps Automation",
desc: "CI/CD pipelines and Kubernetes orchestration.",
},
{
icon: Database,
title: "Database Solutions",
desc: "High-performance managed database infrastructure.",
},
{
icon: Globe,
title: "Remote Monitoring",
desc: "24×7 proactive monitoring and incident management.",
},
{
icon: Boxes,
title: "Disaster Recovery",
desc: "Reliable backup and business continuity planning.",
},
{
icon: ArrowRight,
title: "Digital Transformation",
desc: "Accelerate innovation with scalable IT infrastructure.",
},
];

export default function SolutionCards() {
  return (
    <section
      id="solutions"
      className="py-28 bg-slate-900"
    >

      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center">

          <span className="uppercase tracking-[4px] text-blue-500 text-sm">
            SOLUTIONS
          </span>

          <h2 className="text-5xl font-bold mt-4">
            Enterprise Solutions
          </h2>

          <p className="text-slate-400 max-w-3xl mx-auto mt-6 text-lg">
            Helping organizations modernize infrastructure and accelerate
            digital transformation through innovative technology solutions.
          </p>

        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">

          {solutions.map((item, index) => {

            const Icon = item.icon;

            return (

              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                whileHover={{
                  y: -8,
                  scale: 1.02,
                }}
                className="
                  group
                  rounded-3xl
                  border
                  border-white/10
                  bg-white/5
                  backdrop-blur-xl
                  p-8
                  transition-all
                  hover:border-blue-500
                  hover:shadow-[0_0_40px_rgba(59,130,246,0.30)]
                "
              >

                <div className="
                  w-16
                  h-16
                  rounded-2xl
                  bg-blue-500/10
                  flex
                  items-center
                  justify-center
                ">

                  <Icon
                    size={32}
                    className="text-blue-400"
                  />

                </div>

                <h3 className="text-2xl font-semibold mt-6">
                  {item.title}
                </h3>

                <p className="text-slate-400 mt-4 leading-7">
                  {item.desc}
                </p>

                <button className="mt-8 text-blue-400 group-hover:translate-x-2 transition flex items-center gap-2">
                  Learn More →
                </button>

              </motion.div>

            );

          })}

        </div>

      </div>

    </section>
  );
}