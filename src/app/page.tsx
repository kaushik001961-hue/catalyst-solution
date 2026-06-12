import Hero from "@/components/Hero";
import Trusted from "@/components/Trusted";
import Services from "@/components/Services";
import WhyChoose from "@/components/WhyChoose";
import Stats from "@/components/Stats";
import Technologies from "@/components/Technologies";
import HowWeWork from "@/components/HowWeWork";
import CaseStudies from "@/components/CaseStudies";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import LatestBlog from "@/components/LatestBlog";
import ContactCTA from "@/components/ContactCTA";

export default function Home() {
  return (
    <main className="bg-slate-950 text-white">
      <Hero />
      <Trusted />
      <Services />
      <WhyChoose />
      <Stats />
      <Technologies />
      <HowWeWork />
      <CaseStudies />
      <Testimonials />
      <FAQ />
      <LatestBlog />
      <ContactCTA />
    </main>
  );
}