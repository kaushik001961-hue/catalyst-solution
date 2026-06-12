"use client";

import { motion } from "framer-motion";
import {
  Shield,
  HeartHandshake,
  Lightbulb,
  Users,
} from "lucide-react";

const values = [
  {
    icon: Shield,
    title: "Reliability",
    desc: "Stable infrastructure and maximum uptime for mission-critical systems.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    desc: "Modern cloud technologies and DevOps automation for growth.",
  },
  {
    icon: HeartHandshake,
    title: "Integrity",
    desc: "Transparent communication and long-term customer relationships.",
  },
  {
    icon: Users,
    title: "Customer Success",
    desc: "Your business goals become our technical priorities.",
  },
];

export default function CoreValues() {
  return (
    <section className="py-24 bg-slate-950">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}

        <div className="text-center">

          <span className="uppercase tracking-[4px] text-blue-500 text-sm">
            CORE VALUES
          </span>

          <h2 className="text-5xl font-bold text-white mt-4">
            What Drives Our Success
          </h2>

          <p className="text-slate-300 max-w-3xl mx-auto mt-6 text-lg">
            Our values define how we deliver secure, scalable and
            innovative infrastructure solutions while building lasting
            partnerships with our clients.
          </p>

        </div>

        {/* Cards */}

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">

          {values.map((item, index) => {

            const Icon = item.icon;

            return (

              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: index * 0.1,
                  duration: 0.5,
                }}
                whileHover={{
                  y: -8,
                  scale: 1.03,
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

                <div
                  className="
                    w-14
                    h-14
                    rounded-xl
                    bg-blue-500/10
                    flex
                    items-center
                    justify-center
                    group-hover:bg-blue-500/20
                    transition
                  "
                >
                  <Icon
                    size={28}
                    className="text-blue-400"
                  />
                </div>

                <h3 className="text-2xl font-bold text-white mt-6">
                  {item.title}
                </h3>

                <p className="text-slate-300 mt-5 leading-7">
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