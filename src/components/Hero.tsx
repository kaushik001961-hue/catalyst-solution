"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden py-24 lg:py-36">

      <div className="absolute inset-0 bg-gradient-to-r from-blue-950 via-slate-950 to-slate-950" />

      <div className="container mx-auto px-6 relative">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          <div>

            <span className="px-4 py-2 rounded-full bg-blue-900/30 text-blue-300 text-sm">
              24×7 Server Management Experts
            </span>

            <motion.h1
              initial={{opacity:0,y:40}}
              animate={{opacity:1,y:0}}
              transition={{duration:.8}}
              className="text-6xl font-bold mt-8 leading-tight"
            >
              Enterprise Server
              <br />
              Management &
              <span className="text-blue-500">
                {" "}Cloud Infrastructure
              </span>
            </motion.h1>

            <p className="text-slate-300 mt-8 text-xl leading-8">
              Linux Server Management, Cloud Infrastructure,
              DevOps Automation, Security Hardening and
              24×7 Monitoring for businesses worldwide.
            </p>

            <div className="flex gap-5 mt-10">

              <button className="bg-blue-600 px-7 py-4 rounded-xl hover:bg-blue-700">
                Get Free Consultation
              </button>

              <button className="border border-slate-700 px-7 py-4 rounded-xl flex items-center gap-2">
                View Services
                <ArrowRight size={18}/>
              </button>

            </div>

          </div>

          <div>

            <img
              src="/images/server.png"
              className="w-full"
              alt=""
            />

          </div>

        </div>

      </div>

    </section>
    
  );
}