"use client";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight, Code, Database, Target } from "lucide-react";
import { useTheme } from "next-themes";
import Link from "next/link";

export const HeroSection = () => {
  const { theme } = useTheme();
  return (
    <section className="container w-full">
      <div className="grid place-items-center lg:max-w-screen-xl gap-8 mx-auto py-20 md:py-32">
        <div className="text-center space-y-8">
          <Badge variant="outline" className="text-sm py-2 border-primary/20">
            <span className="mr-2 text-primary">
              <Badge className="bg-primary text-secondary">Outcomes First</Badge>
            </span>
            <span>Tools Second.</span>
          </Badge>

          <div className="max-w-screen-md mx-auto text-center text-4xl md:text-6xl font-bold text-secondary">
            <h1>
              You need outcomes - not another shiny tool
            </h1>
          </div>

          <p className="max-w-screen-sm mx-auto text-xl text-muted-foreground">
            We help SMEs design software, embed AI into real workflows, and prove ROI—so your team gains leverage, not extra stress.
          </p>

          <div className="space-y-4 md:space-y-0 md:space-x-4">
            <Button className="w-5/6 md:w-auto font-bold group/arrow bg-primary hover:bg-primary/90 text-secondary">
              Plan My Enablement
              <ArrowRight className="size-5 ml-2 group-hover/arrow:translate-x-1 transition-transform" />
            </Button>

            <Button
              asChild
              variant="outline"
              className="w-5/6 md:w-auto font-bold border-primary/20 hover:bg-primary/5"
            >
              <Link href="/#services">
                Explore Services
              </Link>
            </Button>
          </div>
        </div>

        {/* Feature highlights */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-4xl mt-16">
          <div className="text-center space-y-3 p-6 rounded-xl bg-muted/30 hover:bg-muted/50 transition-colors">
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto">
              <Target className="w-6 h-6 text-primary" />
            </div>
            <h3 className="font-semibold">Idea-to-Blueprint Sprint</h3>
            <p className="text-sm text-muted-foreground">Shape raw ideas into usable products in days, not weeks.</p>
          </div>

          <div className="text-center space-y-3 p-6 rounded-xl bg-muted/30 hover:bg-muted/50 transition-colors">
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto">
              <Code className="w-6 h-6 text-primary" />
            </div>
            <h3 className="font-semibold">AI That Fits Your Stack</h3>
            <p className="text-sm text-muted-foreground">Layer AI onto your ERP/CRM without disruption.</p>
          </div>

          <div className="text-center space-y-3 p-6 rounded-xl bg-muted/30 hover:bg-muted/50 transition-colors">
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto">
              <Database className="w-6 h-6 text-primary" />
            </div>
            <h3 className="font-semibold">Trusted AI & Hallucination Control</h3>
            <p className="text-sm text-muted-foreground">Grounded in trusted data, with hallucination control built in.</p>
          </div>
        </div>

        <div className="relative group mt-14">
          <div className="absolute top-2 lg:-top-8 left-1/2 transform -translate-x-1/2 w-[90%] mx-auto h-24 lg:h-80 bg-primary/20 rounded-full blur-3xl"></div>

          <div className="w-full max-w-4xl mx-auto p-8 rounded-2xl bg-gradient-to-br from-muted/60 to-muted/50 border border-primary/10">
            <div className="text-center space-y-4">
              <h3 className="text-2xl font-semibold text-secondary">"Micro Going - Take a small step ahead consistently"</h3>
              <p className="text-secondary max-w-2xl mx-auto">
                In the AI era, any business needs to be ready to upgrade itself.
                We are happy to accompany you on this path, true to our core value of continuous improvement.
              </p>
            </div>
          </div>

          <div className="absolute bottom-0 left-0 w-full h-20 md:h-28 bg-gradient-to-b from-background/0 via-background/50 to-background rounded-lg"></div>
        </div>
      </div>
    </section>
  );
};
