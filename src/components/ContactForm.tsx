"use client";

export default function ContactForm() {
  return (
    <section className="py-20 bg-slate-950 text-white">

      <div className="max-w-3xl mx-auto px-6">

        <div className="bg-white/5 border border-white/10 rounded-3xl p-10 backdrop-blur-xl">

          <h2 className="text-4xl font-bold mb-8">
            Send Us a Message
          </h2>

          <form className="space-y-6">

            <input
              type="text"
              placeholder="Full Name"
              className="w-full p-4 rounded-xl bg-slate-900 border border-white/10 outline-none"
            />

            <input
              type="email"
              placeholder="Email Address"
              className="w-full p-4 rounded-xl bg-slate-900 border border-white/10 outline-none"
            />

            <input
              type="text"
              placeholder="Subject"
              className="w-full p-4 rounded-xl bg-slate-900 border border-white/10 outline-none"
            />

            <textarea
              rows={6}
              placeholder="Your Message"
              className="w-full p-4 rounded-xl bg-slate-900 border border-white/10 outline-none"
            />

            <button
              className="bg-blue-600 hover:bg-blue-700 px-8 py-4 rounded-xl font-semibold transition"
            >
              Send Message
            </button>

          </form>

        </div>

      </div>

    </section>
  );
}