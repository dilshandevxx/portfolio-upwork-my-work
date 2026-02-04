import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Services from "@/components/Services";
import WhyChooseMe from "@/components/WhyChooseMe";
import CTA from "@/components/CTA";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="bg-black min-h-screen text-white selection:bg-orange-500 selection:text-white">
      <Header />
      <Hero />
      <Projects />
      <Services />
      <WhyChooseMe />
      <CTA />
      <Testimonials />
      <FAQ />
      <Footer />
    </main>
  );
}
