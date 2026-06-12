
"use client";

import { motion } from "framer-motion";
import {
  Building2,
  HeartPulse,
  Landmark,
  GraduationCap,
  ShoppingCart,
  Factory,
  Tractor,
  Shield,
} from "lucide-react";

const industries = [
  {
    icon: HeartPulse,
    title: "Healthcare",
    desc: "Secure hospital infrastructure, cloud hosting and disaster recovery.",
  },
  {
    icon: Landmark,
    title: "Banking & Finance",
    desc: "High-security infrastructure with compliance and backup solutions.",
  },
  {
    icon: Factory,
    title: "Manufacturing",
    desc: "ERP hosting, production servers and industrial cloud platforms.",
  },
  {
    icon: GraduationCap,
    title: "Education",
    desc: "Cloud infrastructure for universities and learning platforms.",
  },
  {
    icon: ShoppingCart,
    title: "Retail & E-Commerce",
    desc: "High-performance hosting for online businesses and retailers.",
  },
  {
    icon: Tractor,
    title: "Agriculture",
    desc: "IoT, Remote Sensing and AI-powered smart farming solutions.",
  },
  {
    icon: Shield,
    title: "Government",
    desc: "Secure digital infrastructure and virtualization solutions.",
  },
  {
    icon: Building2,
    title: "Enterprise",
    desc: "Scalable IT infrastructure for large organizations and corporations.",
  },
];

export default function IndustryGrid() {
  return (
    <section
      id="industries"
      className="py-28 bg-slate-950 text-white"
    >
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center">

          <span className="uppercase tracking-[4px] text-blue-500 text-sm">
            INDUSTRIES
          </span>

          <h2 className="text-5xl font-bold mt-4 text-white">
            Industries We Empower
          </h2>

          <p className="text-slate-300 max-w-3xl mx-auto mt-6 text-lg">
            Delivering enterprise infrastructure solutions designed for
            reliability, scalability and business growth.
          </p>

        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">

          {industries.map((item, index) => {
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
                  scale: 1.03,
                }}
                className="
                  group
                  rounded-3xl
                  bg-white/5
                  backdrop-blur-xl
                  border
                  border-white/10
                  p-8
                  hover:border-blue-500
                  hover:shadow-[0_0_40px_rgba(59,130,246,0.25)]
                  transition-all
                "
              >

                <div className="w-16 h-16 rounded-2xl bg-blue-500/10 flex items-center justify-center mb-6">
                  <Icon className="w-8 h-8 text-blue-400" />
                </div>

                <h3 className="text-2xl font-bold text-white mb-4">
                  {item.title}
                </h3>

                <p className="text-slate-300 leading-7">
                  {item.desc}
                </p>

              </motion.div>
            );
          })}

        </div>

      </div>
    </section>
  );
}