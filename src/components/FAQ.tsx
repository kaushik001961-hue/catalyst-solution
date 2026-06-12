"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    question: "Do you provide 24×7 server monitoring?",
    answer:
      "Yes. Our expert engineers monitor your infrastructure around the clock to detect and resolve issues before they impact your business.",
  },
  {
    question: "Which cloud platforms do you support?",
    answer:
      "We manage AWS, Microsoft Azure, Google Cloud Platform, DigitalOcean, Linode, Vultr and hybrid cloud environments.",
  },
  {
    question: "Do you provide emergency server support?",
    answer:
      "Absolutely. Our emergency response team is available 24×7 to handle outages, security incidents and critical infrastructure issues.",
  },
  {
    question: "Can you migrate our servers with zero downtime?",
    answer:
      "Yes. We carefully plan migrations using replication and failover strategies to minimize or eliminate downtime wherever possible.",
  },
  {
    question: "Do you provide DevOps and Kubernetes management?",
    answer:
      "Yes. We provide CI/CD pipelines, Docker, Kubernetes, Infrastructure as Code, automation and complete DevOps consulting services.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-28 bg-slate-900">

      <div className="max-w-5xl mx-auto px-6">

        <div className="text-center">

          <span className="uppercase tracking-[4px] text-blue-500 text-sm">
            FAQ
          </span>

          <h2 className="text-5xl font-bold mt-4">
            Frequently Asked Questions
          </h2>

          <p className="text-slate-400 mt-6 max-w-2xl mx-auto">
            Everything you need to know about our server management,
            cloud infrastructure and DevOps services.
          </p>

        </div>

        <div className="mt-16 space-y-5">

          {faqs.map((item, index) => (

            <motion.div
              key={index}
              whileHover={{ scale: 1.01 }}
              className="
                group
                overflow-hidden
                rounded-3xl
                border
                border-white/10
                bg-white/5
                backdrop-blur-xl
                transition-all
                duration-300
                hover:border-blue-500/50
              "
            >

              <button
                onClick={() =>
                  setOpenIndex(openIndex === index ? null : index)
                }
                className="
                  w-full
                  flex
                  justify-between
                  items-center
                  px-8
                  py-6
                  text-left
                "
              >

                <h3 className="text-lg lg:text-xl font-semibold">
                  {item.question}
                </h3>

                <div className="
                  w-10
                  h-10
                  rounded-full
                  bg-blue-500/10
                  flex
                  items-center
                  justify-center
                ">

                  {openIndex === index ? (
                    <Minus className="text-blue-400" />
                  ) : (
                    <Plus className="text-blue-400" />
                  )}

                </div>

              </button>

              <AnimatePresence>

                {openIndex === index && (

                  <motion.div
                    initial={{
                      opacity: 0,
                      height: 0,
                    }}
                    animate={{
                      opacity: 1,
                      height: "auto",
                    }}
                    exit={{
                      opacity: 0,
                      height: 0,
                    }}
                    transition={{
                      duration: 0.3,
                    }}
                  >

                    <div className="
                      px-8
                      pb-8
                      text-slate-400
                      leading-8
                    ">

                      {item.answer}

                    </div>

                  </motion.div>

                )}

              </AnimatePresence>

            </motion.div>

          ))}

        </div>

      </div>

    </section>
  );
}
