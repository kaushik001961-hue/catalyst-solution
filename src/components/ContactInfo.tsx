"use client";

import {
  Mail,
  Phone,
  MapPin,
  Clock,
} from "lucide-react";

export default function ContactInfo() {
  return (
    <section className="py-20 bg-slate-950 text-white">

      <div className="max-w-7xl mx-auto px-6">

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          <div className="bg-white/5 rounded-3xl p-8 border border-white/10">
            <Mail className="text-blue-400 mb-4" size={34} />
            <h3 className="text-2xl font-bold mb-2">
              Email
            </h3>
            <p className="text-slate-300">
              info@catalystsolution.in
            </p>
          </div>

          <div className="bg-white/5 rounded-3xl p-8 border border-white/10">
            <Phone className="text-blue-400 mb-4" size={34} />
            <h3 className="text-2xl font-bold mb-2">
              Phone
            </h3>
            <p className="text-slate-300">
              +91 99999 99999
            </p>
          </div>

          <div className="bg-white/5 rounded-3xl p-8 border border-white/10">
            <MapPin className="text-blue-400 mb-4" size={34} />
            <h3 className="text-2xl font-bold mb-2">
              Office
            </h3>
            <p className="text-slate-300">
              Ahmedabad, Gujarat, India
            </p>
          </div>

          <div className="bg-white/5 rounded-3xl p-8 border border-white/10">
            <Clock className="text-blue-400 mb-4" size={34} />
            <h3 className="text-2xl font-bold mb-2">
              Working Hours
            </h3>
            <p className="text-slate-300">
              Mon - Sat
              <br />
              9:00 AM - 7:00 PM
            </p>
          </div>

        </div>

      </div>

    </section>
  );
}