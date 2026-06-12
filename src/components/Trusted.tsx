export default function Trusted() {

  const companies = [
    "AWS",
    "Azure",
    "Google Cloud",
    "Docker",
    "Kubernetes",
    "VMware",
    "cPanel",
    "Plesk",
  ];

  return (

    <section className="py-16 bg-slate-900 border-y border-slate-800">

      <div className="max-w-7xl mx-auto px-6">

        <p className="text-center text-slate-400 uppercase tracking-[4px] text-sm">
          Trusted Technologies
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6 mt-10">

          {companies.map((company) => (

            <div
              key={company}
              className="bg-slate-950 rounded-xl border border-slate-800 py-6 flex justify-center items-center hover:border-blue-600 transition"
            >
              <span className="text-slate-300 font-semibold">
                {company}
              </span>

            </div>

          ))}

        </div>

      </div>

    </section>

  );
}