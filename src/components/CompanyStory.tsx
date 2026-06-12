"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Server, ShieldCheck, Cloud, Cpu } from "lucide-react";

const features = [
  {
    icon: Server,
    title: "500+ Servers Managed",
  },
  {
    icon: Cloud,
    title: "Cloud & DevOps Experts",
  },
  {
    icon: ShieldCheck,
    title: "99.99% Infrastructure Uptime",
  },
  {
    icon: Cpu,
    title: "24×7 Monitoring & Support",
  },
];

export default function CompanyStory() {
  return (
    <section className="py-28 bg-slate-950">

      <div className="max-w-7xl mx-auto px-6">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left Image */}

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >

          <Image
  src="/images/company-story.jpg"
  alt="Catalyst Solution"
  width={700}
  height={700}
  priority
  className="rounded-[30px] shadow-2xl object-cover w-full h-[600px]"
/>

          </motion.div>

          {/* Right Content */}

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >

            <span className="uppercase tracking-[4px] text-blue-500 text-sm">
              OUR STORY
            </span>

            <h2 className="text-5xl font-bold mt-5 leading-tight">
              Delivering Reliable Infrastructure
              <span className="text-blue-500"> Since Day One</span>
            </h2>

            <p className="mt-8 text-slate-300 text-lg leading-8">
              Catalyst Solution was founded with a simple mission:
              to provide businesses with secure, scalable and
              high-performance server infrastructure backed by
              experienced engineers and proactive support.
            </p>

            <p className="mt-6 text-slate-400 leading-8">
              We specialize in Linux server management, cloud migration,
              DevOps automation, monitoring, security hardening and
              enterprise infrastructure optimization. Our goal is to
              reduce downtime, improve reliability and enable businesses
              to focus on growth while we manage the technology.
            </p>

            <div className="grid grid-cols-2 gap-5 mt-10">

              {features.map((item) => {

                const Icon = item.icon;

                return (

                  <motion.div
                    key={item.title}
                    whileHover={{ y: -5 }}
                    className="
                      rounded-2xl
                      border
                      border-white/10
                      bg-white/5
                      backdrop-blur-xl
                      p-5
                      flex
                      items-center
                      gap-4
                      hover:border-blue-500
                      transition
                    "
                  >

                    <div className="
                      w-12
                      h-12
                      rounded-xl
                      bg-blue-500/10
                      flex
                      items-center
                      justify-center
                    ">
                      <Icon
                        className="text-blue-400"
                        size={24}
                      />
                    </div>

                    <span className="font-medium text-white">
                      {item.title}
                    </span>

                  </motion.div>

                );

              })}

            </div>

          </motion.div>

        </div>

      </div>

    </section>
  );
}