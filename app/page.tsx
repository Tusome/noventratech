import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Stats from "@/components/Stats";
import Clients from "@/components/Clients";
import Contact from "@/components/Contact";
import FadeInSection from "@/components/FadeInSection";
import WhyChooseUs from "@/components/WhyChooseUs";

export default function Home() {
  return (
    <>
      <Hero />

      <FadeInSection>
        <Services />
      </FadeInSection>

      <FadeInSection>
      <WhyChooseUs />
      </FadeInSection>

      <FadeInSection>
        <Stats />
      </FadeInSection>

      <FadeInSection>
        <Clients />
      </FadeInSection>

      <FadeInSection>
        <Contact />
      </FadeInSection>
    </>
  );
}