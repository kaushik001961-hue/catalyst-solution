"use client";

import Link from "next/link";

export default function ContactCTA() {
  return (
    <section className="py-28 bg-slate-950 text-white">

      <div className="max-w-5xl mx-auto px-6">

        <div className="rounded-[40px] bg-white/5 border border-white/10 p-14 text-center backdrop-blur-xl">

          <span className="uppercase tracking-[4px] text-blue-400 text-sm">
            GET STARTED
          </span>

          <h2 className="text-5xl font-bold mt-5">
            Ready to Transform Your IT Infrastructure?
          </h2>

          <p className="text-slate-300 mt-6 max-w-2xl mx-auto text-lg">
            Contact Catalyst Solution today and discover scalable,
            secure and enterprise-grade IT solutions for your business.
          </p>

          <Link
            href="/"
            className="inline-block mt-10 px-8 py-4 bg-blue-600 hover:bg-blue-700 rounded-xl transition"
          >
            Back to Home
          </Link>

        </div>

      </div>

    </section>
  );
}