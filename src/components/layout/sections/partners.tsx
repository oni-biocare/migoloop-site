"use client";

import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import Link from "next/link";

type Partner = {
  name: string;
  logoSrc: string;
  description: string;
  link: string;
};

// Replace logoSrc values with real partner logo paths in /public as they become available.
const partners: Partner[] = [
  {
    name: "CognifyMetrics",
    logoSrc: "/cognify_metrics_logo.png",
    description: "Powerful AI-driven tools designed specifically for e-commerce",
    link: "https://cognifymetrics.com"
  },
  {
    name: "Onibiocare",
    logoSrc: "/onibiocare-logo.png",
    description: "CRM & Sales Automation System",
    link: "https://migoloop.com"
  }
];

export const PartnersSection = () => {
  return (
    <section id="partners" className="container py-24 sm:py-32">
      <div className="text-center mb-12">
        <h2 className="text-lg text-primary text-center mb-2 tracking-wider">
          <Badge>Our Works</Badge>
        </h2>
        <h2 className="text-3xl md:text-4xl text-center font-bold mb-4">
          Product we were built
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Discover our works and products we was built who collaborate with us to deliver comprehensive software solutions for our clients.
        </p>
      </div>

      <div className="max-w-[75%] mx-auto relative overflow-hidden">
        <div className="flex gap-12 whitespace-nowrap animate-marquee-left [--marquee-gap:3rem]">
          {partners.map(({ name, logoSrc, description, link }, index) => (
            <Link href={link} target="_blank" key={`${name}-${index}`}
            >

              <div
                key={`${name}-${index}`}
                className="group inline-flex flex-col items-center gap-3 opacity-80 hover:opacity-100 transition-all duration-300 animate-fade-in-up"
                style={{ animationDelay: `${(index % partners.length) * 120}ms` }}
              >
                <Image
                  src={logoSrc}
                  alt={`${name} logo`}
                  width={128}
                  height={128}
                  className=" object-contain grayscale group-hover:grayscale-0 drop-shadow-sm group-hover:drop-shadow group-hover:scale-[1.03] animate-float"
                  priority={false}
                />
                <div className="text-center">
                  <h2 className="font-semibold text-foreground">{name}</h2>
                  <p className="text-xs text-muted-foreground">{description}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;


