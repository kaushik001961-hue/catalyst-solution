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