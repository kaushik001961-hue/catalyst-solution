"use client";

import { motion } from "framer-motion";
import {
Cloud,
Server,
ShieldCheck,
Database,
Cpu,
Globe,
Gauge,
HardDrive,
ArrowRight,
} from "lucide-react";

const services = [
{
icon: Cloud,
title: "Cloud Migration",
desc: "AWS, Azure and Google Cloud migration with zero downtime.",
},
{
icon: Server,
title: "Managed Servers",
desc: "Linux & Windows server administration and maintenance.",
},
{
icon: Cpu,
title: "DevOps Automation",
desc: "CI/CD pipelines and Kubernetes orchestration.",
},
{
icon: ShieldCheck,
title: "Cyber Security",
desc: "Firewall, server hardening and malware protection.",
},
{
icon: Database,
title: "Database Management",
desc: "MySQL, PostgreSQL and MongoDB optimization.",
},
{
icon: Globe,
title: "24×7 Monitoring",
desc: "Remote infrastructure monitoring and incident response.",
},
{
icon: Gauge,
title: "Performance Optimization",
desc: "Speed optimization and server tuning.",
},
{
icon: HardDrive,
title: "Backup & Recovery",
desc: "Automated backup and disaster recovery planning.",
},
];

export default function ServiceGrid() {

return (

<section id="services" className="py-28 bg-[#020617] text-white" >

<div className="max-w-7xl mx-auto px-6">

<div className="text-center">

<span className="uppercase tracking-[4px] text-blue-500 text-sm">
OUR SERVICES
</span>

<h2 className="text-5xl font-bold mt-4 text-white">
  Enterprise IT Solutions
</h2>

<p className="text-slate-300 max-w-3xl mx-auto mt-6 text-lg">
  Reliable, scalable and secure infrastructure solutions
  for businesses of every size.
</p>
</div>

<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">

{services.map((item,index)=>{

const Icon=item.icon;

return(
<motion.div key={item.title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.08 }} whileHover={{ y: -8, scale: 1.03 }} className=" group rounded-3xl bg-slate-900/70 backdrop-blur-xl border border-white/10 p-8 hover:border-blue-500 hover:bg-slate-900 hover:shadow-[0_0_40px_rgba(59,130,246,0.25)] transition-all duration-300 " > <div className="w-16 h-16 rounded-2xl bg-blue-500/10 flex items-center justify-center mb-6"> <Icon className="w-8 h-8 text-blue-400" /> </div> <h3 className="text-2xl font-bold text-white mb-4"> {item.title} </h3> <p className="text-slate-300 leading-8 mb-8"> {item.desc} </p> <button className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition"> Learn More <ArrowRight size={18} /> </button> </motion.div>

)

})}

</div>

</div>

</section>

)

}