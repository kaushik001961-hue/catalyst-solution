"use client";

import { motion } from "framer-motion";
import {
  Rocket,
  Server,
  Cloud,
  ShieldCheck,
  Globe,
} from "lucide-react";

const timeline = [
  {
    year: "2018",
    title: "Company Founded",
    description:
      "Catalyst Solution was established with a mission to provide reliable server management services.",
    icon: Rocket,
  },
  {
    year: "2019",
    title: "Linux Server Management",
    description:
      "Expanded into enterprise Linux administration and proactive server monitoring.",
    icon: Server,
  },
  {
    year: "2021",
    title: "Cloud & DevOps",
    description:
      "Started delivering AWS, Azure, Docker and Kubernetes infrastructure solutions.",
    icon: Cloud,
  },
  {
    year: "2023",
    title: "Security & Compliance",
    description:
      "Introduced enterprise security hardening, backup and disaster recovery services.",
    icon: ShieldCheck,
  },
  {
    year: "2026",
    title: "Global Infrastructure Partner",
    description:
      "Supporting businesses worldwide with scalable cloud and managed infrastructure services.",
    icon: Globe,
  },
];

export default function CompanyTimeline() {
  return (
    <section className="py-24 bg-slate-950">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}

        <div className="text-center">

          <span className="uppercase tracking-[4px] text-blue-500 text-sm">
            OUR JOURNEY
          </span>

          <h2 className="text-5xl font-bold text-white mt-4">
            Company Growth Timeline
          </h2>

          <p className="mt-6 text-slate-300 max-w-3xl mx-auto text-lg">
            Our journey of innovation, reliability and continuous growth
            in cloud infrastructure and server management.
          </p>

        </div>

        {/* Timeline */}

        <div className="relative mt-20">

          <div className="hidden lg:block absolute top-8 left-0 right-0 h-[2px] bg-blue-500/20"></div>

          <div className="grid lg:grid-cols-5 gap-10">

            {timeline.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    delay: index * 0.15,
                    duration: 0.5,
                  }}
                  whileHover={{ y: -8 }}
                  className="relative text-center"
                >

                  <div
                    className="
                      w-20
                      h-20
                      rounded-full
                      bg-blue-500/10
                      mx-auto
                      flex
                      items-center
                      justify-center
                      border
                      border-blue-500/30
                      shadow-[0_0_40px_rgba(59,130,246,0.35)]
                    "
                  >
                    <Icon
                      size={34}
                      className="text-blue-400"
                    />
                  </div>

                  <h3 className="text-3xl font-bold text-blue-400 mt-6">
                    {item.year}
                  </h3>

                  <h4 className="text-xl font-bold text-white mt-3">
                    {item.title}
                  </h4>

                  <p className="text-slate-300 mt-4 leading-7">
                    {item.description}
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