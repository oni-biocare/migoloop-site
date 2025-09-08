"use client";
import { Menu } from "lucide-react";
import React from "react";
import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet";
import { Separator } from "../ui/separator";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "../ui/navigation-menu";
import { Button } from "../ui/button";
import Link from "next/link";
import OniImage from "@/components/ui/oni-image";
import { ToggleTheme } from "./toogle-theme";

interface RouteProps {
  href: string;
  label: string;
}

interface FeatureProps {
  title: string;
  description: string;
}

const routeList: RouteProps[] = [
  {
    href: "/#about",
    label: "About",
  },
  {
    href: "/#testimonials",
    label: "Success Stories",
  },
  {
    href: "/#contact",
    label: "Contact",
  },
  {
    href: "/blog",
    label: "Resources",
  },
];

const featureList: FeatureProps[] = [
  {
    title: "Turning Every Cycle Into Value",
    description: "Turning every cycle into value, even the smallest ones.",
  },
  {
    title: "Continuous Improvement",
    description: "Agile methodology drives our approach to business innovation.",
  },
  {
    title: "AI Revolution Ready",
    description: "We prepare businesses for the future through strategic AI adoption.",
  },
  {
    title: "Progressive Innovation",
    description: "Step-by-step approach to digital transformation and growth.",
  },
  {
    title: "Strategic Partnership",
    description: "We accompany you on your journey to AI-powered business success.",
  },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <header className="sticky top-0 z-40 w-full bg-background/95 backdrop-blur-md border-b border-primary/20 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-3 lg:py-4">

          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 group">
            <div className="relative">
              <div className="absolute"></div>
              <OniImage
                className="relative h-18 w-120 rounded-lg border-2 border-white/20"
                src="/app_logo_full.png"
                width={120}
                height={19}
                alt="MigoLoop Logo"
                priority
              />
            </div>
            {/* <span className="text-lg lg:text-xl font-bold text-secondary bg-clip-text">
              Migoloop
            </span> */}
          </Link>

          {/* Mobile Menu */}
          <div className="flex items-center lg:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="sm"
                  className="p-2 hover:bg-primary/10 hover:text-primary transition-colors"
                >
                  <Menu className="h-4 w-4" />
                </Button>
              </SheetTrigger>

              <SheetContent
                side="left"
                className="flex flex-col justify-between rounded-tr-2xl rounded-br-2xl bg-card/95 backdrop-blur-md border-primary/20"
              >
                <div>
                  <SheetHeader className="mb-6">
                    <SheetTitle className="flex items-center">
                      <Link href="/" className="flex items-center space-x-3" onClick={() => setIsOpen(false)}>
                        <OniImage
                          className="w-10 h-10 rounded-xl border-2 border-primary/20"
                          src="/onibiocare-logo.png"
                          width={40}
                          height={40}
                          alt="MigoLoop Logo"
                          priority
                        />
                        <span className="text-xl font-bold text-primary">MigoLoop</span>
                      </Link>
                    </SheetTitle>
                  </SheetHeader>

                  <div className="flex flex-col gap-3">
                    {routeList.map(({ href, label }) => (
                      <Button
                        key={href}
                        onClick={() => setIsOpen(false)}
                        asChild
                        variant="ghost"
                        className="justify-start text-base hover:bg-primary/10 hover:text-primary transition-colors"
                      >
                        <Link href={href}>{label}</Link>
                      </Button>
                    ))}
                  </div>
                </div>

                <SheetFooter className="flex-col sm:flex-col justify-start items-start">
                  <Separator className="mb-4 w-full" />
                  <ToggleTheme />
                </SheetFooter>
              </SheetContent>
            </Sheet>
          </div>

          {/* Desktop Navigation */}
          <NavigationMenu className="hidden lg:block">
            <NavigationMenuList className="space-x-2">
              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-transparent hover:bg-primary/10 hover:text-secondary data-[state=open]:bg-primary/10 data-[state=open]:text-primary transition-colors px-3 py-2 rounded-lg font-medium text-sm">
                  Services
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="grid w-[800px] grid-cols-2 gap-6 p-6 bg-card/95 backdrop-blur-md border border-primary/20 rounded-xl shadow-xl">
                    <div className="space-y-4">
                      <div className="flex items-center space-x-3 mb-4">
                        <div className="w-10 h-10 bg-secondary rounded-lg flex items-center justify-center">
                          <OniImage
                            className="relative h-18 w-120"
                            src="/app_logo.png"
                            width={120}
                            height={19}
                            alt="MigoLoop Logo"
                            priority />
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold text-primary">Software Consulting & Development</h3>
                          <p className="text-sm text-muted-foreground">Strategic consulting & custom development</p>
                        </div>
                      </div>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        We accompany you on the path to upgrading your business through strategic software consulting, custom development, and progressive digital transformation.
                      </p>
                      <div className="space-y-2">
                        {["Software Strategy Consulting", "Custom Development", "Digital Transformation"].map((service, index) => (
                          <div key={index} className="flex items-center space-x-2">
                            <div className="w-2 h-2 bg-primary rounded-full"></div>
                            <span className="text-sm font-medium">{service}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    <ul className="space-y-3">
                      {featureList.map(({ title, description }) => (
                        <li
                          key={title}
                          className="rounded-lg p-3 text-sm hover:bg-primary/5 transition-colors group"
                        >
                          <p className="mb-1 font-semibold leading-none text-foreground group-hover:text-secondary transition-colors">
                            {title}
                          </p>
                          <p className="line-clamp-2 text-muted-foreground text-xs leading-relaxed">
                            {description}
                          </p>
                        </li>
                      ))}
                    </ul>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                {routeList.map(({ href, label }) => (
                  <NavigationMenuLink key={href} asChild>
                    <Link
                      href={href}
                      className="px-3 py-2 rounded-lg font-medium hover:bg-primary/10 hover:text-secondary transition-colors text-sm"
                    >
                      {label}
                    </Link>
                  </NavigationMenuLink>
                ))}
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          {/* Theme Toggle */}
          <div className="hidden lg:flex items-center space-x-2">
            <ToggleTheme />
          </div>
        </div>
      </div>
    </header>
  );
};
