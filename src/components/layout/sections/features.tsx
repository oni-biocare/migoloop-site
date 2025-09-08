import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Icon } from "@/components/ui/icon";
import { icons } from "lucide-react";

interface FeaturesProps {
  icon: string;
  title: string;
  description: string;
}

const featureList: FeaturesProps[] = [
  {
    icon: "TrendingUp",
    title: "From Idea to Impact",
    description:
      "We don’t just plan, we build. Turning concepts into MVPs, then scaling them into real products with measurable results",
  },
  {
    icon: "RefreshCw",
    title: "Seamless Integrations",
    description:
      "Your stack stays running. We plug in AI and systems around your ERP/CRM with smart adapters and phased rollouts.",
  },
  {
    icon: "Target",
    title: "People-First Change",
    description:
      "We ease fears about AI by designing human-in-the-loop workflows, role-based training, and aligned incentives.",
  },
  {
    icon: "Users",
    title: "Truth Over Hype",
    description:
      "No misleading demos. We use your approved data, add checks, and eliminate costly hallucinations.",
  },
  {
    icon: "Shield",
    title: "Data Rehab",
    description:
      "Messy CRM/data? We clean, enrich, dedupe, and monitor so your automation is reliable and decisions solid.",
  },
  {
    icon: "Handshake",
    title: "ROI or Replan",
    description:
      "With budgets tight, we define success upfront, track weekly, and quickly pivot if value isn’t showing.",
  },
];

export const FeaturesSection = () => {
  return (
    <section id="features" className="container py-24 sm:py-32">
      <h2 className="text-lg text-primary text-center mb-2 tracking-wider">
        <Badge>Our Approach</Badge>
      </h2>

      <h2 className="text-3xl md:text-4xl text-center font-bold mb-4">
        Why choose MigoLoop for software consulting?
      </h2>

      <h3 className="md:w-2/3 mx-auto text-xl text-center text-muted-foreground mb-12">
        Our philosophy, “Turning every cycle into value, even the smallest ones.” ensures that every step toward software modernization is strategic, sustainable, and aligned with your business goals.
      </h3>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {featureList.map(({ icon, title, description }) => (
          <div key={title}>
            <Card className="h-full bg-muted/30 border-primary/20 hover:border-primary/30 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
              <CardHeader className="flex justify-center items-center">
                <div className="bg-primary/20 p-3 rounded-full ring-8 ring-primary/10 mb-4">
                  <Icon
                    name={icon as keyof typeof icons}
                    size={24}
                    color="hsl(var(--primary))"
                    className="text-primary"
                  />
                </div>

                <CardTitle className="text-center text-lg">{title}</CardTitle>
              </CardHeader>

              <CardContent className="text-muted-foreground text-center text-sm leading-relaxed">
                {description}
              </CardContent>
            </Card>
          </div>
        ))}
      </div>

      <div className="text-center mt-16 p-8 rounded-2xl bg-gradient-to-r from-primary/5 to-primary/10 border border-primary/20">
        <h3 className="text-2xl font-semibold text-primary mb-4">
          “Turning every cycle into value, even the smallest ones.”
        </h3>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          In the AI era, any business needs to be ready to upgrade itself.
          We are happy to accompany you on this path, true to our core value of continuous improvement.        </p>
      </div>
    </section>
  );
};
