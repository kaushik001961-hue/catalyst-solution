import ServicesHero from "@/components/ServicesHero";
import ServiceGrid from "@/components/ServiceGrid";
import ServiceProcess from "@/components/ServiceProcess";
import ContactCTA from "@/components/ContactCTA";

export default function ServicesPage() {
  return (
    <>
      <ServicesHero />
      <ServiceGrid />
      <ServiceProcess />
      <ContactCTA />
    </>
  );
}