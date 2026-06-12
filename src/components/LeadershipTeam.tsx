"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FaLinkedinIn, FaEnvelope } from "react-icons/fa";

const leaders = [
  {
    name: "Jaldhi Mehta",
    role: "Founder & CEO",
    image: "/team/ceo.jpg",
    desc: "15+ years of experience delivering enterprise server management and cloud infrastructure solutions.",
  },
  {
    name: "Amit Shah",
    role: "Chief Technology Officer",
    image: "/team/cto.jpg",
    desc: "Specialist in DevOps automation, Kubernetes, Docker and cloud-native infrastructure.",
  },
  {
    name: "Priya Mehta",
    role: "Cloud Solutions Architect",
    image: "/team/architect.jpg",
    desc: "Expert in designing secure, scalable and highly available cloud environments.",
  },
];

export default function LeadershipTeam() {
  return (
    <section className="py-24 bg-slate-950">
      <div className="max-w-7xl mx-auto px-6">

        {/* Section Header */}

        <div className="text-center">

          <span className="uppercase tracking-[4px] text-blue-500 text-sm">
            OUR LEADERSHIP
          </span>

          <h2 className="text-5xl font-bold text-white mt-4">
            Meet Our Leadership Team
          </h2>

          <p className="text-slate-300 max-w-3xl mx-auto mt-6 text-lg">
            Experienced professionals helping organizations modernize
            infrastructure with cloud, DevOps and enterprise solutions.
          </p>

        </div>

        {/* Team Grid */}

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">

          {leaders.map((person, index) => (

            <motion.div
              key={person.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.5 }}
              whileHover={{ y: -10 }}
              className="
                group
                rounded-3xl
                border
                border-white/10
                bg-white/5
                backdrop-blur-xl
                p-8
                text-center
                transition-all
                duration-300
                hover:border-blue-500
                hover:shadow-[0_0_40px_rgba(59,130,246,0.30)]
              "
            >

              <div className="relative w-40 h-40 mx-auto">

                <div
                  className="
                    absolute
                    inset-0
                    rounded-full
                    bg-blue-500/20
                    blur-3xl
                    scale-110
                    group-hover:scale-125
                    transition
                    duration-300
                  "
                />

                <Image
                  src={person.image}
                  alt={person.name}
                  width={160}
                  height={160}
                  className="
                    relative
                    rounded-full
                    object-cover
                    border-4
                    border-blue-500/30
                  "
                />

              </div>

              <h3 className="text-2xl font-bold text-white mt-8">
                {person.name}
              </h3>

              <p className="text-blue-400 mt-2 font-medium">
                {person.role}
              </p>

              <p className="text-slate-300 mt-5 leading-7">
                {person.desc}
              </p>

              <div className="flex justify-center gap-4 mt-8">

                <a
                  href="#"
                  className="
                    w-11
                    h-11
                    rounded-full
                    bg-blue-500/10
                    hover:bg-blue-600
                    flex
                    items-center
                    justify-center
                    transition
                  "
                >
                  <FaLinkedinIn className="text-white text-sm" />
                </a>

                <a
                  href="#"
                  className="
                    w-11
                    h-11
                    rounded-full
                    bg-blue-500/10
                    hover:bg-blue-600
                    flex
                    items-center
                    justify-center
                    transition
                  "
                >
                  <FaEnvelope className="text-white text-sm" />
                </a>

              </div>

            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
}