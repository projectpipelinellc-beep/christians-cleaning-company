import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Intro } from "@/components/Intro";
import { Approach } from "@/components/Approach";
import { Reviews } from "@/components/Reviews";
import { ServiceAreas } from "@/components/ServiceAreas";
import { QuoteSection } from "@/components/QuoteSection";
import { Footer } from "@/components/Footer";
import { StructuredData } from "@/components/StructuredData";

export default function Home() {
  return (
    <>
      <StructuredData />
      <Header />
      <main>
        <Hero />
        <Intro />
        <Approach />
        <Reviews />
        <ServiceAreas />
        <QuoteSection />
      </main>
      <Footer />
    </>
  );
}
