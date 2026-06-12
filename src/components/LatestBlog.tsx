"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Calendar, ArrowRight } from "lucide-react";

const posts = [
  {
    title: "10 Best Practices for Linux Server Security",
    image: "/blog/blog1.jpg",
    category: "Security",
    date: "June 2026",
    href: "/blog/linux-server-security",
    excerpt:
      "Learn the essential security practices every production Linux server should follow.",
  },
  {
    title: "Why Every Business Needs Proactive Server Monitoring",
    image: "/blog/blog2.jpg",
    category: "Monitoring",
    date: "June 2026",
    href: "/blog/server-monitoring",
    excerpt:
      "Discover how proactive monitoring reduces downtime and improves infrastructure reliability.",
  },
  {
    title: "Docker & Kubernetes for Modern Infrastructure",
    image: "/blog/blog3.jpg",
    category: "DevOps",
    date: "June 2026",
    href: "/blog/docker-kubernetes",
    excerpt:
      "How containerization helps businesses scale applications securely and efficiently.",
  },
];

export default function LatestBlog() {
  return (
    <section className="py-28 bg-slate-950">

      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center">

          <span className="uppercase tracking-[4px] text-blue-500 text-sm">
            LATEST INSIGHTS
          </span>

          <h2 className="text-5xl font-bold mt-4">
            Latest Articles & Resources
          </h2>

          <p className="text-slate-400 mt-6 max-w-3xl mx-auto">
            Stay updated with cloud infrastructure, server management,
            DevOps and cybersecurity best practices.
          </p>

        </div>

        <div className="grid lg:grid-cols-3 gap-8 mt-20">

          {posts.map((post, index) => (

            <motion.div
              key={post.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: index * 0.1,
                duration: 0.5,
              }}
              whileHover={{
                y: -8,
              }}
              className="
                group
                overflow-hidden
                rounded-3xl
                border
                border-white/10
                bg-white/5
                backdrop-blur-xl
                transition-all
                duration-500
              "
            >

              <div className="overflow-hidden">

                <Image
                  src={post.image}
                  alt={post.title}
                  width={800}
                  height={500}
                  className="
                    w-full
                    h-64
                    object-cover
                    transition-transform
                    duration-700
                    group-hover:scale-110
                  "
                />

              </div>

              <div className="p-8">

                <div className="flex items-center justify-between">

                  <span className="
                    rounded-full
                    bg-blue-500/10
                    border
                    border-blue-500/20
                    px-4
                    py-1
                    text-sm
                    text-blue-400
                  ">
                    {post.category}
                  </span>

                  <span className="flex items-center gap-2 text-slate-400 text-sm">
                    <Calendar size={15} />
                    {post.date}
                  </span>

                </div>

                <h3 className="text-2xl font-bold mt-6">
                  {post.title}
                </h3>

                <p className="text-slate-400 mt-5 leading-7">
                  {post.excerpt}
                </p>

                <Link
                  href={post.href}
                  className="
                    group/link
                    inline-flex
                    items-center
                    gap-2
                    mt-8
                    text-blue-400
                    font-semibold
                  "
                >

                  Read Article

                  <ArrowRight
                    size={18}
                    className="
                      transition-transform
                      duration-300
                      group-hover/link:translate-x-2
                    "
                  />

                </Link>

              </div>

            </motion.div>

          ))}

        </div>

      </div>

    </section>
  );
}
