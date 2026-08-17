import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { InfiniteMarquee } from "@/components/InfiniteMarquee";
import { Services } from "@/components/Services";
import { Differentials } from "@/components/Differentials";
import { Process } from "@/components/Process";
import { Portfolio } from "@/components/Portfolio";
import { CTA } from "@/components/CTA";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <InfiniteMarquee />
      <Services />
      <Differentials />
      <Process />
      <Portfolio />
      <CTA />
      <Contact />
      <Footer />
    </main>
  );
}
