"use client";

import { motion } from "framer-motion";
import {
  Server,
  Users,
  ShieldCheck,
  Headphones,
} from "lucide-react";

const stats = [
  {
    icon: Server,
    value: "500+",
    title: "Servers Managed",
    description: "Linux, Windows & Cloud Infrastructure",
  },
  {
    icon: Users,
    value: "150+",
    title: "Happy Clients",
    description: "Businesses across multiple industries",
  },
  {
    icon: ShieldCheck,
    value: "99.99%",
    title: "Service Uptime",
    description: "Reliable and secure infrastructure",
  },
  {
    icon: Headphones,
    value: "24×7",
    title: "Expert Support",
    description: "Round-the-clock technical assistance",
  },
];

export default function Stats() {
  return (
    <section className="py-28 bg-gradient-to-b from-slate-950 to-slate-900">

      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center">

          <span className="uppercase tracking-[4px] text-blue-500 text-sm">
            ACHIEVEMENTS
          </span>

          <h2 className="text-4xl lg:text-5xl font-bold mt-4">
            Trusted Infrastructure Partner
          </h2>

          <p className="text-slate-400 max-w-3xl mx-auto mt-6 text-lg">
            We help organizations maintain secure, high-performance,
            and highly available server infrastructure with enterprise-grade support.
          </p>

        </div>

        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8 mt-16">

          {stats.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                }}
                whileHover={{ y: -8 }}
                className="rounded-3xl bg-slate-900 border border-slate-800 p-8 text-center hover:border-blue-500 transition-all"
              >
                <div className="w-16 h-16 mx-auto rounded-2xl bg-blue-600/20 flex items-center justify-center">
                  <Icon size={34} className="text-blue-500" />
                </div>

                <h3 className="text-5xl font-bold mt-6 text-blue-400">
                  {item.value}
                </h3>

                <h4 className="text-xl font-semibold mt-3">
                  {item.title}
                </h4>

                <p className="text-slate-400 mt-3">
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