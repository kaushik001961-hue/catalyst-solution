"use client";

import { Shield, HeartHandshake, Lightbulb, Users } from "lucide-react";

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
    <section className="py-28 bg-slate-950">

      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center">

      <span className="uppercase tracking-[4px] text-blue-500 text-sm">
    CORE VALUES
  </span>
          <h2 className="text-5xl font-bold text-white mt-4">
            What Drives Catalyst Solution
          </h2>

        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">

          {values.map((item) => {

            const Icon = item.icon;

            return (

              <div
                key={item.title}
                className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8 hover:border-blue-500 transition"
              >

                <div className="w-14 h-14 rounded-xl bg-blue-500/10 flex items-center justify-center">
                  <Icon className="text-blue-400" />
                </div>

                <h3 className="text-2xl font-bold mt-6">
                  {item.title}
                </h3>

                <p className="text-slate-300 mt-5 leading-7">
                  {item.desc}
                </p>

              </div>

            );

          })}

        </div>

      </div>

    </section>
  );
}