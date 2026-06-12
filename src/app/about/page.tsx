import CompanyStory from "@/components/CompanyStory";
import MissionVision from "@/components/MissionVision";
import CoreValues from "@/components/CoreValues";
import Stats from "@/components/Stats";
import Technologies from "@/components/Technologies";
import ContactCTA from "@/components/ContactCTA";
import CompanyTimeline from "@/components/CompanyTimeline";
import LeadershipTeam from "@/components/LeadershipTeam";
import Certifications from "@/components/Certifications";
import Industries from "@/components/Industries";

export default function AboutPage() {
  return (
    <main>
      <section className="bg-slate-950 py-24">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <span className="uppercase tracking-[4px] text-blue-500 text-sm">
            ABOUT US
          </span>

          <h1 className="text-5xl md:text-6xl font-bold text-white mt-4">
            About Catalyst Solution
          </h1>

          <p className="text-slate-300 max-w-3xl mx-auto mt-6 text-lg">
            We provide enterprise server management, cloud infrastructure,
            DevOps automation and 24×7 monitoring services to businesses
            worldwide.
          </p>
        </div>
      </section>

      <CompanyStory />
      <MissionVision />
      <CoreValues />
      <Stats />
      <Technologies />
      <LeadershipTeam />
      <CompanyTimeline />
      <Certifications />
      <Industries />
      <ContactCTA />
    </main>
  );
}