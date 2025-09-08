import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";

interface FAQProps {
  question: string;
  answer: string;
  value: string;
}

const FAQList: FAQProps[] = [
  {
    question: "How do you prove ROI early and define success metrics before we scale?",
    answer: "We co-define KPIs, baseline current performance, and run a 2–6 week pilot. If ROI/KPI targets aren’t met, we replan before scaling.",
    value: "item-1",
  },
  {
    question: "Can you integrate AI and new features without ripping out our existing systems?",
    answer: "Yes—sidecar architecture, official connectors, and RAG over your data. Feature flags/canary releases keep workflows intact with rollback paths.",
    value: "item-2",
  },
  {
    question: "What guardrails reduce AI hallucinations and ensure traceability?",
    answer: "Curated data + RAG with citations, schema-constrained outputs, offline/online evals, confidence thresholds with human-in-the-loop, and full audit logs.",
    value: "item-3",
  },
  {
    question: "How long from idea to MVP, and what milestones will we hit?",
    answer: "Typical 4–10 weeks: Discovery → Tested Prototype → MVP (thin slice + analytics) → Pilot with “scale or replan” review.",
    value: "item-4",
  },
  {
    question: "How do you handle data privacy and compliance (e.g., GDPR/HIPAA/PCI)?",
    answer: "Privacy by design: least-privilege, encryption, logging, retention policies. Deploy in your VPC/on-prem. We support GDPR DSRs/DPAs, HIPAA BAAs/PHI controls, and PCI tokenization.",
    value: "item-5",
  },
  {
    question: "What are your engagement models and pricing—and who owns the IP after delivery?",
    answer: "Fixed-scope pilots, milestone projects, or retainers. Pricing matches complexity/impact. You own bespoke code/IP; we license any accelerators used. Full documentation and handover.",
    value: "item-6",
  },
];

export const FAQSection = () => {
  return (
    <section id="faq" className="container md:w-[800px] py-24 sm:py-32">
      <div className="text-center mb-8">
        <h2 className="text-lg text-primary text-center mb-2 tracking-wider">
          <Badge>FAQs</Badge>
        </h2>

        <h2 className="text-3xl md:text-4xl text-center font-bold">
          Common questions about software transformation
        </h2>
        <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
          Get answers to the most frequently asked questions about our software consulting and development services and approach.
        </p>
      </div>

      <Accordion type="single" collapsible className="AccordionRoot">
        {FAQList.map(({ question, answer, value }) => (
          <AccordionItem key={value} value={value} className="border-primary/20">
            <AccordionTrigger className="text-left hover:text-primary transition-colors">
              {question}
            </AccordionTrigger>

            <AccordionContent className="text-muted-foreground leading-relaxed">
              {answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
};
