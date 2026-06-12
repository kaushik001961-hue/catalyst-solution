"use client";

import Image from "next/image";
import { motion } from "framer-motion";


const techs = [
  { name: "Linux", logo: "/logos/linux.svg" },
  { name: "Ubuntu", logo: "/logos/ubuntu.svg" },
  { name: "AWS", logo: "/logos/aws.svg" },
  { name: "Azure", logo: "/logos/azure.svg" },
  { name: "Google Cloud", logo: "/logos/gcp.svg" },
  { name: "Docker", logo: "/logos/docker.svg" },
  { name: "Kubernetes", logo: "/logos/kubernetes.svg" },
  { name: "Nginx", logo: "/logos/nginx.svg" },
  { name: "Apache", logo: "/logos/apache.svg" },
  { name: "MySQL", logo: "/logos/mysql.svg" },
  { name: "PostgreSQL", logo: "/logos/postgresql.svg" },
  { name: "Jenkins", logo: "/logos/jenkins.svg" },
  { name: "Git", logo: "/logos/git.svg" },
  { name: "GitHub", logo: "/logos/github.svg" },
  { name: "Cloudflare", logo: "/logos/cloudflare.svg" },
  { name: "VMware", logo: "/logos/vmware.svg" },
  { name: "cPanel", logo: "/logos/cpanel.svg" },
  { name: "Plesk", logo: "/logos/plesk.svg" },
];
export default function Technologies() {
  return (
    <section className="py-28 bg-slate-950">

      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center">

          <span className="text-blue-500 uppercase tracking-[4px] text-sm">
            TECHNOLOGIES
          </span>

            <h2 className="text-5xl font-bold text-white mt-4">
            Technologies We Work With
          </h2>

          <p className="text-slate-400 max-w-3xl mx-auto mt-6 text-lg">
            Modern cloud platforms, DevOps tools, operating systems,
            databases and enterprise technologies trusted worldwide.
          </p>

        </div>

        {/* Grid Here */}

      </div>

    </section>
  );
}