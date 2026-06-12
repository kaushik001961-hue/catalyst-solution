"use client";

import { motion } from "framer-motion";
import {
  Clock3,
  ShieldCheck,
  Cpu,
  BadgeCheck,
  Headphones,
  TrendingUp,
} from "lucide-react";

const features = [
  {
    icon: Clock3,
    title: "24×7 Proactive Monitoring",
    description:
      "Our engineers continuously monitor your infrastructure to detect and resolve issues before they impact your business.",
  },
  {
    icon: ShieldCheck,
    title: "Enterprise Security",
    description:
      "Advanced firewall management, malware protection, vulnerability patching, and security audits.",
  },
  {
    icon: Cpu,
    title: "High Performance",
    description:
      "Optimize CPU, RAM, storage, and application performance for maximum efficiency and uptime.",
  },
  {
    icon: BadgeCheck,
    title: "Certified Experts",
    description:
      "Experienced Linux, Windows, Cloud, and DevOps engineers managing your infrastructure.",
  },
  {
    icon: Headphones,
    title: "Dedicated Support",
    description:
      "Fast response times with professional technical support available whenever you need assistance.",
  },
  {
    icon: TrendingUp,
    title: "Scalable Solutions",
    description:
      "Infrastructure designed to grow with your business without sacrificing reliability or security.",
  },
];

export default function WhyChoose() {
  return (
    <section className="py-28 bg-slate-900">

      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center">

          <span className="uppercase tracking-[4px] text-blue-500 text-sm">
            WHY CHOOSE US
          </span>

          <h2 className="text-4xl lg:text-5xl font-bold mt-4">
            Why Choose Catalyst Solution
          </h2>

          <p className="text-slate-400 max-w-3xl mx-auto mt-6 text-lg">
            We deliver enterprise-grade server management and cloud
            infrastructure solutions that maximize uptime, improve
            security, and reduce operational costs.
          </p>

        </div>

        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8 mt-16">

          {features.map((item, index) => {

            const Icon = item.icon;

            return (

              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.08,
                }}
                whileHover={{
                  y: -8,
                }}
                className="rounded-3xl border border-slate-800 bg-slate-950 p-8 hover:border-blue-500 transition-all"
              >

                <div className="w-16 h-16 rounded-2xl bg-blue-600/20 flex items-center justify-center">

                  <Icon
                    size={34}
                    className="text-blue-500"
                  />

                </div>

                <h3 className="text-2xl font-semibold mt-6">
                  {item.title}
                </h3>

                <p className="text-slate-400 mt-4 leading-7">
                  {item.description}
                </p>

              </motion.div>

            );
          })}

        </div>

      </div>

    </section>
  );
}