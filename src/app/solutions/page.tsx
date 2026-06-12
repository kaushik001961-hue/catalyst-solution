import SolutionsHero from "@/components/SolutionsHero";
import SolutionCards from "@/components/SolutionCards";
import ContactCTA from "@/components/ContactCTA";

export default function SolutionsPage() {
  return (
    <main className="bg-slate-950 text-white">

      <SolutionsHero />

      <SolutionCards />

      <ContactCTA />

    </main>
  );
}