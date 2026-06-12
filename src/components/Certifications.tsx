"use client";

import { motion } from "framer-motion";
import {
  Cloud,
  Server,
  ShieldCheck,
  Database,
  Cpu,
  Globe,
} from "lucide-react";

const certifications = [
  {
    icon: Cloud,
    title: "Cloud Infrastructure",
    tech: "AWS • Azure • Google Cloud",
  },
  {
    icon: Server,
    title: "Linux Server Management",
    tech: "Ubuntu • CentOS • Debian",
  },
  {
    icon: Cpu,
    title: "DevOps Automation",
    tech: "Docker • Kubernetes • Jenkins",
  },
  {
    icon: ShieldCheck,
    title: "Cyber Security",
    tech: "Firewall • Hardening • Monitoring",
  },
  {
    icon: Database,
    title: "Database Management",
    tech: "MySQL • PostgreSQL • MongoDB",
  },
  {
    icon: Globe,
    title: "24×7 Remote Support",
    tech: "Global Infrastructure Monitoring",
  },
];

export default function Certifications() {
  return (
    <section className="py-28 bg-slate-900">

      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center">

          <span className="uppercase tracking-[4px] text-blue-500 text-sm">
            EXPERTISE
          </span>

          <h2 className="text-5xl font-bold mt-4">
            Certifications & Expertise
          </h2>

          <p className="text-slate-400 max-w-3xl mx-auto mt-6 text-lg">
            We specialize in enterprise infrastructure, cloud technologies,
            DevOps automation and mission-critical server management.
          </p>

        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">

          {certifications.map((item, index) => {

            const Icon = item.icon;

            return (

              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
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
                  shadow-[0_0_30px_rgba(59,130,246,0.25)]
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
                  {item.tech}
                </p>

              </motion.div>

            );

          })}

        </div>

      </div>

    </section>
  );
}