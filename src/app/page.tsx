import { CtaBlock } from "@/components/landing/cta";
import { FeatureDemos } from "@/components/landing/feature-demos";
import { Features } from "@/components/landing/features";
import { Footer } from "@/components/landing/footer";
import { Hero } from "@/components/landing/hero";
import { HeaderWithAnnouncement } from "@/components/landing/header-with-announcement";
import { HowItWorks } from "@/components/landing/how-it-works";
import { Pricing } from "@/components/landing/pricing";
import { SocialProof } from "@/components/landing/social-proof";
import { FAQ } from "@/components/landing/faq";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <HeaderWithAnnouncement />
      <main>
        <Hero />
        <SocialProof />
        <HowItWorks />
        <Features />
        <FeatureDemos />
        <Pricing />
        <FAQ />
        <CtaBlock />
      </main>
      <Footer />
    </div>
  );
}
