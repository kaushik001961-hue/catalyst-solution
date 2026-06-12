
"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const blogs = [
  {
    title: "Cloud Migration Best Practices",
    category: "Cloud",
    desc: "Strategies for migrating enterprise workloads with zero downtime.",
  },
  {
    title: "AI Infrastructure for Enterprises",
    category: "Artificial Intelligence",
    desc: "Build scalable GPU infrastructure for AI and machine learning.",
  },
  {
    title: "Cyber Security in 2026",
    category: "Security",
    desc: "Protect servers and cloud infrastructure against modern threats.",
  },
  {
    title: "DevOps Automation",
    category: "DevOps",
    desc: "Accelerate deployments using CI/CD and Kubernetes.",
  },
  {
    title: "Database Optimization",
    category: "Database",
    desc: "Improve PostgreSQL and MySQL performance with tuning techniques.",
  },
  {
    title: "Linux Server Management",
    category: "Servers",
    desc: "Best practices for enterprise Linux administration.",
  },
];

export default function BlogGrid() {
  return (
    <section
      id="blogs"
      className="py-28 bg-slate-950 text-white"
    >
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center">

          <span className="uppercase tracking-[4px] text-blue-400 text-sm">
            LATEST ARTICLES
          </span>

          <h2 className="text-5xl font-bold mt-4">
            Explore Our Latest Blogs
          </h2>

          <p className="text-slate-300 mt-6 max-w-3xl mx-auto">
            Learn from our experts about cloud infrastructure,
            cybersecurity, AI and enterprise technology.
          </p>

        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">

          {blogs.map((blog, index) => (
            <motion.div
              key={blog.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              whileHover={{ y: -8 }}
              className="rounded-3xl bg-white/5 border border-white/10 p-8 hover:border-blue-500 transition"
            >
              <span className="text-blue-400 text-sm uppercase">
                {blog.category}
              </span>

              <h3 className="text-2xl font-bold mt-4 text-white">
                {blog.title}
              </h3>

              <p className="text-slate-300 mt-4">
                {blog.desc}
              </p>

              <button className="mt-8 flex items-center gap-2 text-blue-400 hover:text-blue-300 transition">
                Read Article
                <ArrowRight size={18} />
              </button>

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}
