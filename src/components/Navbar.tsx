"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
 {  name: "Services", href: "/services"},
  { name: "Solutions", href: "/solutions" },
  { name: "Industries", href: "/industries" },
  { name: "Blog", href: "/blog" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-slate-950/80 backdrop-blur-lg border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-6">

        <div className="flex justify-between items-center h-20">

          <Link href="/" className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-blue-600 flex items-center justify-center font-bold text-xl">
              C
            </div>

            <div>
              <h2 className="font-bold text-xl text-white">
                Catalyst Solution
              </h2>

              <p className="text-xs text-slate-400">
                Server Management Experts
              </p>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-slate-300 hover:text-blue-400 transition"
              >
                {item.name}
              </Link>
            ))}

            <button className="bg-blue-600 px-5 py-3 rounded-xl hover:bg-blue-700 transition">
              Get Quote
            </button>
          </nav>

          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden"
          >
            {open ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {open && (
          <div className="pb-6 lg:hidden flex flex-col gap-5">
            {navLinks.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setOpen(false)}
              >
                {item.name}
              </Link>
            ))}

            <button className="bg-blue-600 py-3 rounded-lg">
              Get Quote
            </button>
          </div>
        )}

      </div>
    </header>
  );
}