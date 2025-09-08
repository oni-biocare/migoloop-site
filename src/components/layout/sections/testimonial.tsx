"use client";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Star, Quote, TrendingUp, Users, Target } from "lucide-react";

interface ReviewProps {
  image: string;
  name: string;
  userName: string;
  company: string;
  comment: string;
  rating: number;
  service: string;
}

const reviewList: ReviewProps[] = [
  {
    image: "https://github.com/shadcn.png",
    name: "",
    userName: "Development Team",
    company: "",
    comment:
      "We built a platform that help e-commerce businesses to scale their sales and marketing efforts.",
    rating: 5.0,
    service: "Scale"
  },
  {
    image: "https://github.com/shadcn.png",
    name: "Trang Trinh",
    userName: "CEO",
    company: "Onibiocare",
    comment:
      "Migoloop helped us build a scalable and efficient CRM & Sales Automation System that has transformed our sales process. Our team is now able to close deals faster and more efficiently.",
    rating: 5.0,
    service: "Fit"
  },
  {
    image: "https://github.com/shadcn.png",
    name: "Anonymous",
    userName: "CEO",
    company: "Anonymous",
    comment:
      "Migoloop make us understand about how AI can help our business to scale. Help us build workflow that AI and human can work together, remove all the fear of employee about the idea: \"AI will replace them\".",
    rating: 4.5,
    service: "Fit"
  }
];

export const TestimonialSection = () => {
  return (
    <section id="testimonials" className="container py-24 sm:py-32">
      <div className="text-center mb-12">
        <h2 className="text-lg text-primary text-center mb-2 tracking-wider">
          <Badge>Success Stories</Badge>
        </h2>

        <h2 className="text-3xl md:text-4xl text-center font-bold mb-4">
          What our clients say about software transformation
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
          Discover how businesses are achieving remarkable results through our progressive software implementation approach.
        </p>
      </div>

      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        className="relative w-[90%] sm:w-[95%] lg:max-w-6xl mx-auto"
      >
        <CarouselContent>
          {reviewList.map((review) => (
            <CarouselItem
              key={review.name}
              className="md:basis-1/2 lg:basis-1/3" 
            >
              <Card className="h-full bg-muted/30 border-primary/20 hover:border-primary/40 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group">
                <CardContent className="pt-6 pb-0">
                  {/* Service Badge */}
                  <div className="mb-4">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs text-secondary font-medium bg-primary/10 border border-primary/20">
                      {review.service}
                    </span>
                  </div>

                  {/* Quote Icon */}
                  <div className="mb-4">
                    <Quote className="w-8 h-8 text-primary/30 group-hover:text-primary/50 transition-colors" />
                  </div>

                  {/* Rating */}
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        className={`w-4 h-4 ${
                          i < Math.floor(review.rating) 
                            ? "fill-primary text-primary" 
                            : "fill-muted text-muted-foreground"
                        }`} 
                      />
                    ))}
                    <span className="ml-2 text-sm text-muted-foreground">
                      {review.rating}
                    </span>
                  </div>

                  {/* Comment */}
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {review.comment}
                  </p>
                </CardContent>

                <CardHeader className="pt-0">
                  <div className="flex items-center gap-4">
                    <Avatar className="w-12 h-12 border-2 border-primary/20">
                      <AvatarFallback className="bg-primary/10 text-primary font-semibold text-lg">
                        {review.name.charAt(0)}
                      </AvatarFallback>
                    </Avatar>

                    <div className="flex-1">
                      <CardTitle className="text-base font-semibold text-foreground">
                        {review.name}
                      </CardTitle>
                      <CardDescription className="text-sm font-medium text-primary">
                        {review.userName}
                      </CardDescription>
                      <CardDescription className="text-xs text-muted-foreground">
                        {review.company}
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        
        {/* Custom Navigation Buttons */}
        <CarouselPrevious className="left-4 bg-primary hover:bg-primary/90 text-primary-foreground border-primary/20" />
        <CarouselNext className="right-4 bg-primary hover:bg-primary/90 text-primary-foreground border-primary/20" />
      </Carousel>

      {/* Bottom CTA */}
      <div className="text-center mt-16">
        <div className="inline-flex items-center space-x-2 text-muted-foreground mb-4">
          <TrendingUp className="w-5 h-5 text-primary" />
          <span className="text-sm">Ready to join our success stories?</span>
        </div>
        <p className="text-2xl font-semibold text-primary mb-4">
          “Turning every cycle into value, even the smallest ones.”
        </p>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Let's transform your business with modern software, one step at a time. 
          Join the companies that have already achieved remarkable results.
        </p>
      </div>
    </section>
  );
};
