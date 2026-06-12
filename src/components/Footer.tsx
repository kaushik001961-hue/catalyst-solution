"use client";

import Link from "next/link";
import {
  Mail,
  Phone,
  MapPin,
  Shield,
  Clock3,
  Rocket,
  Headphones,
} from "lucide-react";

import {
  FaFacebookF,
  FaLinkedinIn,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-slate-800">

      <div className="max-w-7xl mx-auto px-6 py-20">

        <div className="grid lg:grid-cols-4 gap-14">

          {/* Company */}

          <div>

            <h2 className="text-4xl font-bold text-white">
              Catalyst Solution
            </h2>

            <p className="mt-6 text-slate-300 leading-8 text-lg">
              Enterprise Server Management,
              Cloud Infrastructure,
              DevOps Automation and Managed IT Services.
            </p>

            <div className="mt-8 space-y-4">

              <div className="flex items-center gap-3 text-slate-300">
                <Shield className="text-blue-400" size={20} />
                Secure Infrastructure
              </div>

              <div className="flex items-center gap-3 text-slate-300">
                <Clock3 className="text-blue-400" size={20} />
                24×7 Monitoring
              </div>

              <div className="flex items-center gap-3 text-slate-300">
                <Rocket className="text-blue-400" size={20} />
                High Performance
              </div>

              <div className="flex items-center gap-3 text-slate-300">
                <Headphones className="text-blue-400" size={20} />
                Expert Support
              </div>

            </div>

          </div>

          {/* Services */}

          <div>

            <h3 className="text-2xl font-bold text-white mb-6">
              Services
            </h3>

            <div className="space-y-4">

              {[
                "Linux Management",
                "Cloud Migration",
                "DevOps Services",
                "Monitoring",
                "Security Hardening",
                "Backup Solutions",
              ].map((item) => (

                <Link
                  key={item}
                  href="/services"
                  className="block text-slate-300 hover:text-blue-400 transition"
                >
                  {item}
                </Link>

              ))}

            </div>

          </div>

          {/* Company */}

          <div>

            <h3 className="text-2xl font-bold text-white mb-6">
              Company
            </h3>

            <div className="space-y-4">

              <Link href="/" className="block text-slate-300 hover:text-blue-400">
                Home
              </Link>

              <Link href="/about" className="block text-slate-300 hover:text-blue-400">
                About Us
              </Link>

              <Link href="/blog" className="block text-slate-300 hover:text-blue-400">
                Blog
              </Link>

              <Link href="/careers" className="block text-slate-300 hover:text-blue-400">
                Careers
              </Link>

              <Link href="/contact" className="block text-slate-300 hover:text-blue-400">
                Contact
              </Link>

            </div>

          </div>

          {/* Contact */}

          <div>

            <h3 className="text-2xl font-bold text-white mb-6">
              Contact
            </h3>

            <div className="space-y-5">

              <div className="flex items-center gap-3 text-slate-300">
                <Mail className="text-blue-400" size={20} />
                info@catalystsolution.in
              </div>

              <div className="flex items-center gap-3 text-slate-300">
                <Phone className="text-blue-400" size={20} />
                +91 99999 99999
              </div>

              <div className="flex items-center gap-3 text-slate-300">
                <MapPin className="text-blue-400" size={20} />
                Ahmedabad, Gujarat
              </div>

            </div>

            <h4 className="mt-10 text-xl font-semibold text-white">
              Follow Us
            </h4>

            <div className="flex gap-4 mt-5">

              {[FaFacebookF, FaLinkedinIn, FaTwitter, FaInstagram].map(
                (Icon, index) => (
                  <div
                    key={index}
                    className="w-12 h-12 rounded-full bg-slate-800 hover:bg-blue-600 flex items-center justify-center transition cursor-pointer"
                  >
                    <Icon className="text-white" />
                  </div>
                )
              )}

            </div>

          </div>

        </div>

        {/* Bottom */}

        <div className="border-t border-slate-800 mt-16 pt-8">

          <div className="flex flex-col lg:flex-row justify-between items-center gap-5">

            <p className="text-slate-400">
              © 2026 Catalyst Solution. All Rights Reserved.
            </p>

            <div className="flex gap-6 text-slate-400">

              <Link href="/privacy" className="hover:text-blue-400">
                Privacy Policy
              </Link>

              <Link href="/terms" className="hover:text-blue-400">
                Terms
              </Link>

            </div>

          </div>

        </div>

      </div>

    </footer>
  );
}