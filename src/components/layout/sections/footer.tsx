import { Separator } from "@/components/ui/separator";
import { ChevronsDownIcon, Target, Users, Lightbulb, Mail, MessageSquare, ArrowRight } from "lucide-react";
import Link from "next/link";
import OniImage from "@/components/ui/oni-image";

export const FooterSection = () => {
  return (
    <footer id="footer" className="container py-24 sm:py-32">
      {/* Main Footer Content */}
      <div className="relative overflow-hidden">
        {/* Background with gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-primary/3 to-transparent rounded-3xl"></div>
        
        {/* Content */}
        <div className="relative p-10 lg:p-16 bg-card/80 backdrop-blur-sm border border-primary/20 rounded-3xl shadow-xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 lg:gap-12">
            
            {/* Company Info */}
            <div className="lg:col-span-2 space-y-6">
              <Link href="/" className="inline-flex items-center space-x-3 group">
              <OniImage
                className="relative h-20 w-200 rounded-lg border-2 border-white/20"
                src="/app_logo_full.png"
                width={200}
                height={20}
                alt="MigoLoop Logo"
                priority
              />
              </Link>
              
              <div className="space-y-4">
                <p className="text-muted-foreground text-sm leading-relaxed max-w-md">
                  “Turning every cycle into value, even the smallest ones.”
                </p>
                <p className="text-muted-foreground text-sm leading-relaxed max-w-md">
                  We accompany you on the path to upgrading your business through strategic software consulting, custom development, and progressive digital transformation.
                </p>
              </div>

              {/* Contact Info */}
              <div className="flex items-center space-x-3 text-sm text-muted-foreground">
                <Mail className="w-4 h-4 text-primary" />
                <span>adsyourself.vn@gmail.com</span>
              </div>
            </div>

            {/* Services */}
            <div className="space-y-4">
              <h3 className="font-semibold text-lg text-foreground flex items-center space-x-2">
                <Target className="w-5 h-5 text-primary" />
                <span>Services</span>
              </h3>
              <div className="space-y-3">
                {[
                  "Ignite",
                  "Fit", 
                  "Scale"
                ].map((service, index) => (
                  <Link 
                    key={index}
                    href="/#services" 
                    className="block text-sm text-muted-foreground hover:text-primary transition-colors group"
                  >
                    <div className="flex items-center space-x-2">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full opacity-60 group-hover:opacity-100 transition-opacity"></div>
                      <span>{service}</span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* Company */}
            <div className="space-y-4">
              <h3 className="font-semibold text-lg text-foreground flex items-center space-x-2">
                <Users className="w-5 h-5 text-primary" />
                <span>Company</span>
              </h3>
              <div className="space-y-3">
                {[
                  { href: "/#about", label: "About Us" },
                  { href: "/#features", label: "Our Approach" },
                  { href: "/blog", label: "Resources" }
                ].map((link, index) => (
                  <Link 
                    key={index}
                    href={link.href} 
                    className="block text-sm text-muted-foreground hover:text-primary transition-colors group"
                  >
                    <div className="flex items-center space-x-2">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full opacity-60 group-hover:opacity-100 transition-opacity"></div>
                      <span>{link.label}</span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* Support */}
            <div className="space-y-4">
              <h3 className="font-semibold text-lg text-foreground flex items-center space-x-2">
                <MessageSquare className="w-5 h-5 text-primary" />
                <span>Support</span>
              </h3>
              <div className="space-y-3">
                {[
                  { href: "/#contact", label: "Contact us" },
                  { href: "/#faq", label: "FAQ" },
                  { href: "/#contact", label: "Free Consultation" }
                ].map((link, index) => (
                  <Link 
                    key={index}
                    href={link.href} 
                    className="block text-sm text-muted-foreground hover:text-primary transition-colors group"
                  >
                    <div className="flex items-center space-x-2">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full opacity-60 group-hover:opacity-100 transition-opacity"></div>
                      <span>{link.label}</span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* Connect */}
            <div className="space-y-4">
              <h3 className="font-semibold text-lg text-foreground flex items-center space-x-2">
                <Lightbulb className="w-5 h-5 text-primary" />
                <span>Connect</span>
              </h3>
              <div className="space-y-3">
                {[
                  { href: "#", label: "LinkedIn", icon: "💼" },
                  { href: "#", label: "Twitter", icon: "🐦" },
                  { href: "mailto:adsyourself.vn@gmail.com", label: "Email", icon: "✉️" }
                ].map((link, index) => (
                  <Link 
                    key={index}
                    href={link.href} 
                    className="block text-sm text-muted-foreground hover:text-primary transition-colors group"
                  >
                    <div className="flex items-center space-x-2">
                      <span className="text-xs">{link.icon}</span>
                      <span>{link.label}</span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="mt-12 pt-8 border-t border-primary/20">
            <div className="text-center space-y-4">
              <h3 className="text-xl font-semibold text-primary">
                Ready to start your digital transformation journey?
              </h3>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Let's discuss how we can help you take the first step toward software transformation. 
                Our team is ready to accompany you on this journey.
              </p>
              <Link 
                href="/#contact"
                className="inline-flex items-center space-x-2 bg-primary hover:bg-primary/90 text-secondary px-6 py-3 rounded-lg font-medium transition-colors group"
              >
                <span>Get Started</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

          {/* Bottom Section */}
          <Separator className="my-8" />
          <div className="text-center">
            <p className="text-muted-foreground text-sm">
              &copy; 2025 MigoLoop - A solution provided by OniBioCare.
            </p>
            <p className="text-muted-foreground text-sm mt-1">
              Empowering businesses through progressive software transformation.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
