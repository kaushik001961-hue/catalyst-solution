"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";



const testimonials = [
  {
    name: "John Smith",
    role: "CTO, ABC Technologies",
    image: "https://ui-avatars.com/api/?name=John+Smith&background=2563eb&color=fff",
    text: "Catalyst Solution transformed our cloud infrastructure with zero downtime. Their team is highly professional and proactive.",
  },
  {
    name: "Sarah Johnson",
    role: "IT Manager, FinCore",
    image: "https://ui-avatars.com/api/?name=John+Smith&background=2563eb&color=fff",
    text: "Outstanding DevOps expertise and 24×7 support. Our infrastructure is now faster, more secure and highly reliable.",
  },
  {
    name: "Michael Brown",
    role: "CEO, Nexa Commerce",
    image: "https://ui-avatars.com/api/?name=John+Smith&background=2563eb&color=fff",
    text: "Their server optimization reduced our response time dramatically. Excellent communication and technical skills.",
  },
];

export default function Testimonials() {
  return (
    <section className="py-28 bg-slate-900">

      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center">

          <span className="uppercase tracking-[4px] text-blue-500 text-sm">
            TESTIMONIALS
          </span>

          <h2 className="text-5xl font-bold mt-4">
            What Our Clients Say
          </h2>

          <p className="text-slate-400 mt-6 max-w-3xl mx-auto">
            Trusted by businesses worldwide for reliable server management,
            cloud infrastructure and DevOps solutions.
          </p>

        </div>

        <div className="grid lg:grid-cols-3 gap-8 mt-20">

          {testimonials.map((item, index) => (

            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: index * 0.15,
                duration: 0.5,
              }}
              whileHover={{
                y: -10,
                scale: 1.03,
              }}
              className="
                group
                relative
                overflow-hidden
                rounded-3xl
                border
                border-white/10
                bg-white/5
                backdrop-blur-xl
                p-8
                transition-all
                duration-500
              "
            >

              <div className="
                absolute
                inset-0
                opacity-0
                group-hover:opacity-100
                transition
                duration-500
                bg-gradient-to-r
                from-blue-500/10
                via-cyan-400/10
                to-blue-500/10
              "></div>

              <div className="relative z-10">

                <div className="flex items-center gap-4">

                  <div className="relative">

                    <div className="
                      absolute
                      inset-0
                      rounded-full
                      bg-blue-500/20
                      blur-xl
                      scale-150
                    "></div>

                    <img
                      src={item.image}
                      alt={item.name}
                      className="
                        relative
                        w-16
                        h-16
                        rounded-full
                        object-cover
                        border-2
                        border-blue-500
                      "
                    />

                  </div>

                  <div>

                    <h4 className="font-bold text-lg">
                      {item.name}
                    </h4>

                    <p className="text-slate-400 text-sm">
                      {item.role}
                    </p>

                  </div>

                </div>

                <div className="flex gap-1 mt-6">

                  {[1,2,3,4,5].map((star) => (

                    <Star
                      key={star}
                      size={18}
                      fill="#3b82f6"
                      className="text-blue-500"
                    />

                  ))}

                </div>

                <p className="text-slate-300 mt-6 leading-7 italic">
                  "{item.text}"
                </p>

              </div>

            </motion.div>

          ))}

        </div>

      </div>

    </section>
  );
}