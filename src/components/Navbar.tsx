"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Solutions", href: "/solutions" },
  { name: "Industries", href: "/industries" },
  { name: "Blog", href: "/blog" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-slate-950 border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-6">

        <div className="flex justify-between items-center h-20">

          <Link href="/" className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-blue-600 flex items-center justify-center font-bold text-xl text-white">
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

          {/* Desktop Menu */}

          <nav className="hidden lg:flex items-center gap-8">

            {navLinks.map((item) => (

              <Link
                key={item.name}
                href={item.href}
                className={`transition ${
                  pathname === item.href
                    ? "text-blue-500 font-semibold"
                    : "text-white hover:text-blue-400"
                }`}
              >
                {item.name}
              </Link>

            ))}

            <button className="bg-blue-600 px-5 py-3 rounded-xl hover:bg-blue-700 transition text-white">
              Get Quote
            </button>

          </nav>

          {/* Mobile Button */}

          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden text-white"
          >
            {open ? <X size={28} /> : <Menu size={28} />}
          </button>

        </div>

        {/* Mobile Menu */}

        {open && (
          <div className="lg:hidden py-5 flex flex-col gap-4 bg-slate-950">

            {navLinks.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setOpen(false)}
                className={`transition ${
                  pathname === item.href
                    ? "text-blue-500 font-semibold"
                    : "text-white hover:text-blue-400"
                }`}
              >
                {item.name}
              </Link>
            ))}

          </div>
        )}

      </div>
    </header>
  );
}