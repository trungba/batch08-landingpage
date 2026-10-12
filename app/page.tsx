import { RevealObserver } from "@/components/reveal-observer";
import { SiteHeader } from "@/components/site-header";
import { StickyCta } from "@/components/sticky-cta";
import { Benefits } from "@/components/sections/benefits";
import { Curriculum } from "@/components/sections/curriculum";
import { Faq } from "@/components/sections/faq";
import { FinalCta } from "@/components/sections/final-cta";
import { Hero } from "@/components/sections/hero";
import { Pricing } from "@/components/sections/pricing";
import { Problem } from "@/components/sections/problem";
import { SiteFooter } from "@/components/sections/site-footer";
import { SocialProof } from "@/components/sections/social-proof";
import { Solution } from "@/components/sections/solution";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <Problem />
        <Solution />
        <Benefits />
        <Curriculum />
        <SocialProof />
        <Pricing />
        <FinalCta />
        <Faq />
      </main>
      <SiteFooter />
      <StickyCta />
      <RevealObserver />
    </>
  );
}
