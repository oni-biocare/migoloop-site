import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ArrowRight, Bot, Layers, Rocket, TrendingUp } from "lucide-react";

enum ProService {
  YES = 1,
  NO = 0,
}

interface ServiceProps {
  title: string;
  pro: ProService;
  description: string;
  icon: React.ReactNode;
  features: string[];
}
// Import any icons you like from lucide-react, e.g.:
// import { Rocket, Bot, Workflow, Database, BarChart3, ShieldCheck } from "lucide-react";

// import { Rocket, Bot, Layers } from "lucide-react";

const serviceList: ServiceProps[] = [
  {
    title: "Ignite",
    description:
      "From idea to traction in weeks, not months. We turn concepts into working MVPs that deliver results with real customers—not just a demo.",
    pro: 0,
    icon: <Rocket className="w-6 h-6" />,
    features: [
      "Prove value with measurable outcomes",
      "Real user feedback baked in early",
      "Rapid prototype to tested MVP",
      "Roadmap built for scaling traction"
    ]
  },
  {
    title: "Fit",
    description:
      "Integrate AI seamlessly into current workflows with guardrails, data you can trust, and ROI you can measure.",
    pro: 1, // featured
    icon: <Bot className="w-6 h-6" />,
    features: [
      "System audit (no rip-and-replace)",
      "Data pipelines for clean, reliable retrieval",
      "Guardrails & evaluation to reduce errors",
      "ROI dashboard + human-in-the-loop workflows"
    ]
  },
  {
    title: "Scale",
    description:
      "Build and evolve robust software with modern architecture, smooth integrations, and ongoing optimization.",
    pro: 0,
    icon: <Layers className="w-6 h-6" />,
    features: [
      "Full-stack development & APIs",
      "Legacy system upgrades & integrations",
      "CI/CD, monitoring & reliability targets",
      "Continuous support & iteration"
    ]
  }
];


export const ServicesSection = () => {
  return (
    <section id="services" className="container py-24 sm:py-32">
      <h2 className="text-lg text-primary text-center mb-2 tracking-wider">
        <Badge>Our Services</Badge>
      </h2>

      <h2 className="text-3xl md:text-4xl text-center font-bold mb-4">
        Software Consulting & Development Services
      </h2>
      <h3 className="md:w-2/3 mx-auto text-xl text-center text-muted-foreground mb-12">
        We accompany you on the path to upgrading your business through strategic software consulting, custom development, and progressive digital transformation.
      </h3>

      <div className="grid sm:grid-cols-1 lg:grid-cols-3 gap-8 w-full max-w-6xl mx-auto">
        {serviceList.map(({ title, description, pro, icon, features }) => (
          <Card
            key={title}
            className="bg-muted/30 dark:bg-card h-full relative group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-primary/10"
          >
            <CardHeader className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary">
                  {icon}
                </div>
                {pro === ProService.YES && (
                  <Badge
                    variant="secondary"
                    className="bg-primary text-secondary"
                  >
                    FEATURED
                  </Badge>
                )}
              </div>
              <CardTitle className="text-xl text-secondary">{title}</CardTitle>
              <CardDescription className="text-base">{description}</CardDescription>

              <div className="space-y-2 pt-4">
                <h4 className="font-medium text-sm text-primary">What's included:</h4>
                <ul className="space-y-1">
                  {features.map((feature, index) => (
                    <li key={index} className="flex items-center text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </CardHeader>

            <div className="p-6 pt-0">
              <button className="w-full group/btn flex items-center justify-center space-x-2 text-primary hover:text-primary/80 transition-colors">
                <span className="font-medium">Learn More</span>
                <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
              </button>
            </div>
          </Card>
        ))}
      </div>

      <div className="text-center mt-16">
        <div className="inline-flex items-center space-x-2 text-muted-foreground">
          <TrendingUp className="w-5 h-5 text-primary" />
          <span className="text-sm">Ready to start your digital transformation journey?</span>
        </div>
        <p className="text-2xl font-semibold mt-2 text-primary">
          “Turning every cycle into value, even the smallest ones.”
        </p>
      </div>
    </section>
  );
};
