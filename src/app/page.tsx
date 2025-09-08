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
  description: "We accompany you on the path to upgrading your business through strategic software consulting, custom development, and progressive digital transformation. Micro Going - Take a small step ahead consistently.",
  openGraph: {
    type: "website",
    url: "https://migoloop.com",
    title: "MigoLoop - Software Consulting & Development Services",
    description: "We accompany you on the path to upgrading your business through strategic software consulting, custom development, and progressive digital transformation.",
    images: [
      // {
      //   url: "https://res.cloudinary.com/dbzv9xfjp/image/upload/v1723499276/og-images/shadcn-vue.jpg",
      //   width: 1200,
      //   height: 630,
      //   alt: "MigoLoop Software Consulting Services",
      // },
    ],
  },
  // twitter: {
  //   card: "summary_large_image",
  //   site: "https://github.com/nobruf/shadcn-landing-page.git",
  //   title: "MigoLoop - Software Consulting & Development",
  //   description: "We accompany you on the path to upgrading your business through strategic software consulting, custom development, and progressive digital transformation.",
  //   images: [
  //     "https://res.cloudinary.com/dbzv9xfjp/image/upload/v1723499276/og-images/shadcn-vue.jpg",
  //   ],
  // },
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
