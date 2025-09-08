"use client";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader
} from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { zodResolver } from "@hookform/resolvers/zod";
import { Mail, MessageSquare, Target } from "lucide-react";
import { useForm } from "react-hook-form";
import { z } from "zod";

const formSchema = z.object({
  firstName: z.string().min(2).max(255),
  lastName: z.string().min(2).max(255),
  email: z.string().email(),
  company: z.string().min(2).max(255),
  service: z.string().min(2).max(255),
  message: z.string(),
});

export const ContactSection = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      company: "",
      service: "Software Strategy Consulting",
      message: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    const { firstName, lastName, email, company, service, message } = values;
    console.log(values);

    const mailToLink = `mailto:adsyourself.vn@gmail.com?subject=Software Consulting Inquiry - ${service}&body=Hello, I am ${firstName} ${lastName} from ${company}. My email is ${email}. %0D%0A%0D%0AI'm interested in your ${service} services. %0D%0A%0D%0AMy message: ${message}`;

    window.location.href = mailToLink;
  }

  return (
    <section id="contact" className="container py-24 sm:py-32">
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <div className="mb-4">
            <h2 className="text-lg text-primary mb-2 tracking-wider">
              <Badge>Get Started</Badge>
            </h2>

            <h2 className="text-3xl md:text-4xl font-bold">Ready to transform your business with software?</h2>
          </div>
          <p className="mb-8 text-muted-foreground lg:w-5/6">
            Let's discuss how we can help you take the first step toward digital transformation. 
            Our team is ready to accompany you on this journey.
          </p>

          <div className="flex flex-col gap-6">
            <div className="p-4 rounded-lg bg-primary/5 border border-primary/20">
              <div className="flex gap-3 mb-2">
                <Target className="w-5 h-5 text-primary" />
                <div className="font-semibold text-primary">Free Consultation</div>
              </div>
              <p className="text-sm text-muted-foreground">
                Schedule a free 30-minute consultation to discuss your software transformation goals.
              </p>
            </div>

            <div className="p-4 rounded-lg bg-primary/5 border border-primary/20">
              <div className="flex gap-3 mb-2">
                <MessageSquare className="w-5 h-5 text-primary" />
                <div className="font-semibold text-primary">Quick Response</div>
              </div>
              <p className="text-sm text-muted-foreground">
                We'll respond within 24 hours to discuss your specific needs and timeline.
              </p>
            </div>

            <div>
              <div className="flex gap-2 mb-1">
                <Mail className="w-5 h-5 text-primary" />
                <div className="font-semibold">Email us</div>
              </div>
              <div className="text-muted-foreground">adsyourself.vn@gmail.com</div>
            </div>
          </div>
        </div>

        <Card className="bg-muted/30 border-primary/10">
          <CardHeader>
            <h3 className="text-xl font-semibold text-primary">Start Your Digital Journey</h3>
            <p className="text-sm text-muted-foreground">
              Tell us about your business and software transformation goals.
            </p>
          </CardHeader>
          <CardContent>
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="grid w-full gap-4"
              >
                <div className="flex flex-col md:!flex-row gap-4">
                  <FormField
                    control={form.control}
                    name="firstName"
                    render={({ field }) => (
                      <FormItem className="w-full">
                        <FormLabel>First name</FormLabel>
                        <FormControl>
                          <Input placeholder="Your first name" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="lastName"
                    render={({ field }) => (
                      <FormItem className="w-full">
                        <FormLabel>Last name</FormLabel>
                        <FormControl>
                          <Input placeholder="Your last name" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                          <Input
                            type="email"
                            placeholder="you@company.com"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <FormField
                    control={form.control}
                    name="company"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Company</FormLabel>
                        <FormControl>
                          <Input placeholder="Your company name" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <FormField
                    control={form.control}
                    name="service"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Service of interest</FormLabel>
                        <Select
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                        >
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Select a service" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="Software Strategy Consulting" >
                              Software Strategy Consulting
                            </SelectItem>
                            <SelectItem value="Custom Software Development">
                              Custom Software Development
                            </SelectItem>
                            <SelectItem value="Digital Transformation">
                              Digital Transformation
                            </SelectItem>
                            <SelectItem value="General Inquiry">
                              General Inquiry
                            </SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Tell us about your goals</FormLabel>
                        <FormControl>
                          <Textarea
                            rows={4}
                            placeholder="What are your software transformation goals? What challenges are you facing?"
                            className="resize-none"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <Button className="mt-4 bg-primary hover:bg-primary/90 text-secondary">
                  Start My Digital Journey
                </Button>
              </form>
            </Form>
          </CardContent>
        </Card>
      </section>
    </section>
  );
};
