import type { Metadata } from "next";
import { WebDevelopment } from "./components/WebDevelopment";
import { MobileApps } from "./components/MobileApps";
import { TechConsulting } from "./components/TechConsulting";
import { TechnicalSupport } from "./components/TechnicalSupport";
import ServicesHero from "./components/ServicesHero";
import { BackToTop } from "@/components/ui/back-to-top";

export const metadata: Metadata = {
  title: "Nossos Serviços - PrimeCode Solutions",
  description: "Conheça nossos serviços especializados: Desenvolvimento Web, Aplicativos Mobile, Consultoria Tech e Suporte Técnico. Soluções personalizadas para o seu negócio.",
  keywords: "desenvolvimento web, aplicativos mobile, consultoria tecnológica, suporte técnico, PrimeCode Solutions",
  openGraph: {
    title: "Nossos Serviços - PrimeCode Solutions",
    description: "Soluções tecnológicas completas para impulsionar seu negócio",
    type: "website",
  },
};

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-neutral-50 to-neutral-100 dark:from-neutral-950 dark:to-neutral-900">
      <ServicesHero />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-32">
        <WebDevelopment />
        <MobileApps />
        <TechConsulting />
        <TechnicalSupport />
      </div>
      
      <BackToTop />
    </main>
  );
}