import { ContactSection } from "@/components/layout/sections/contact";
import { FAQSection } from "@/components/layout/sections/faq";
import { FeaturesSection } from "@/components/layout/sections/features";
import { FindUsSection } from "@/components/layout/sections/findus";
import { FooterSection } from "@/components/layout/sections/footer";
import { HeroSection } from "@/components/layout/sections/hero";
import { PartnersSection } from "@/components/layout/sections/partners";
import { ServicesSection } from "@/components/layout/sections/services";
import { TeamSection } from "@/components/layout/sections/team";
import { TestimonialSection } from "@/components/layout/sections/testimonial";

export const metadata = {
  title: "MigoLoop - Software Consulting & Development Services",
  description: "We accompany you on the path to upgrading your business through strategic software consulting, custom development, and progressive digital transformation. “Turning every cycle into value, even the smallest ones.”",
  openGraph: {
    type: "website",
    url: "https://migoloop.com",
    title: "MigoLoop - Software Consulting & Development Services",
    description: "We accompany you on the path to upgrading your business through strategic software consulting, custom development, and progressive digital transformation.",
    images: ['/og-image.png'],
  },
  twitter: {
    card: "summary_large_image",
    title: "MigoLoop - Software Consulting & Development",
    description: "We accompany you on the path to upgrading your business through strategic software consulting, custom development, and progressive digital transformation.",
    images: ['/og-image.png'],
  },
};

export default function Home() {
  return (
    <>
      <HeroSection />
      <PartnersSection />
      {/* <BenefitsSection /> */}
      <FeaturesSection />
      <ServicesSection />
      <TestimonialSection />
      {/* <TeamSection /> */}
      {/* <FindUsSection /> */}
      {/* <CommunitySection /> */}
      {/* <PricingSection /> */}
      <ContactSection />
      <FAQSection />
      <FooterSection />
    </>
  );
}
