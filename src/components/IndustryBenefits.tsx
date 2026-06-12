"use client";

import { ShieldCheck, Cloud, Server, Headphones } from "lucide-react";

const benefits = [
  {
    icon: ShieldCheck,
    title: "Enterprise Security",
    desc: "Advanced cybersecurity and data protection.",
  },
  {
    icon: Cloud,
    title: "Cloud Infrastructure",
    desc: "Scalable cloud solutions for every business.",
  },
  {
    icon: Server,
    title: "Managed Services",
    desc: "24×7 server management and monitoring.",
  },
  {
    icon: Headphones,
    title: "Expert Support",
    desc: "Dedicated technical support whenever you need it.",
  },
];

export default function IndustryBenefits() {
  return (
    <section className="py-28 bg-slate-950 text-white">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">
          <span className="uppercase tracking-[4px] text-blue-400 text-sm">
            WHY CHOOSE US
          </span>

          <h2 className="text-5xl font-bold mt-4">
            Why Industries Choose Catalyst Solution
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="rounded-3xl bg-white/5 border border-white/10 p-8 hover:border-blue-500 transition"
              >
                <Icon className="w-10 h-10 text-blue-400 mb-5" />

                <h3 className="text-2xl font-bold text-white mb-3">
                  {item.title}
                </h3>

                <p className="text-slate-300">
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