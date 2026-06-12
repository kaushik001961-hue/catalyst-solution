"use client";

import { motion } from "framer-motion";
import {
  HeartPulse,
  Landmark,
  ShoppingCart,
  Factory,
  GraduationCap,
  Building2,
  Laptop,
  Rocket,
  Leaf,
} from "lucide-react";

const industries = [
  {
    icon: HeartPulse,
    title: "Healthcare",
    desc: "Secure infrastructure and compliance-ready cloud solutions.",
  },
  {
    icon: Landmark,
    title: "Banking & Finance",
    desc: "High-availability servers with enterprise-grade security.",
  },
  {
    icon: ShoppingCart,
    title: "E-Commerce",
    desc: "Scalable cloud infrastructure for high-traffic platforms.",
  },
  {
    icon: Factory,
    title: "Manufacturing",
    desc: "Reliable IT infrastructure for industrial automation.",
  },
  {
    icon: GraduationCap,
    title: "Education",
    desc: "Digital learning infrastructure and managed hosting.",
  },
  {
    icon: Building2,
    title: "Government",
    desc: "Secure server management and mission-critical systems.",
  },
  {
    icon: Laptop,
    title: "IT & SaaS",
    desc: "Cloud-native architecture and DevOps automation.",
  },
  {
    icon: Rocket,
    title: "Startups",
    desc: "Cost-effective cloud deployment and rapid scaling.",
  },
  {
    icon: Leaf,
    title: "Agriculture",
    desc: "Remote sensing, GIS and smart agriculture platforms.",
  },
];

export default function Industries() {
  return (
    <section className="py-28 bg-slate-950">

      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center">

          <span className="uppercase tracking-[4px] text-blue-500 text-sm">
            INDUSTRIES
          </span>

          <h2 className="text-5xl font-bold mt-4">
            Industries We Serve
          </h2>

          <p className="text-slate-400 max-w-3xl mx-auto mt-6 text-lg">
            Catalyst Solution delivers cloud infrastructure, managed IT,
            DevOps and enterprise server solutions across diverse industries.
          </p>

        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">

          {industries.map((item, index) => {

            const Icon = item.icon;

            return (

              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: index * 0.08,
                }}
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
                  duration-300
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
                  shadow-[0_0_30px_rgba(59,130,246,0.20)]
                  group-hover:bg-blue-500/20
                  transition
                ">

                  <Icon
                    size={34}
                    className="text-blue-400"
                  />

                </div>

                <h3 className="text-2xl font-semibold mt-6">
                  {item.title}
                </h3>

                <p className="text-slate-400 mt-4 leading-7">
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