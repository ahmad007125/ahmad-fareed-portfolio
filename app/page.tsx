'use client'

import { Button } from "@/components/ui/button";
import NavigationMenuDemo from "./components/Header";
import HeroSection from "./components/HeroSection";
import { PortfolioCard } from "./components/PortfolioCard";
import Link from "next/link";
import { services } from "./lib/services";
import ServiceCard from "./components/ServiceCard";
import Image from "next/image";

export default function Home() {
  const portfolioItems = [
    {
      tag: "Real Estate",
      title: "Modern Web App",
      description: "A sleek and scalable application for modern businesses refers to a software solution that combines clean, user-friendly design (sleek) with robust architecture that supports growth and high performance (scalable), tailored to meet the evolving needs of contemporary, fast-paced companies.",
      button: "Full view",
      imageUrl: "/landsy-homepage.jpg",
    },
    {
      tag: "E Commerce",
      title: "E-commerce Design",
      description: "A visually stunning, user-centric e-commerce user interface designed to deliver an effortless shopping experience across all devices. Built with responsiveness at its core, this UI adapts flawlessly to mobile, tablet, and desktop screens—ensuring high engagement and conversion rates.",
      button: "Full view",
      imageUrl: "/portfolio-2.png",
    },
  ]

  return (
    <div className="bg-background w-full min-h-screen font-[family-name:var(--font-geist-sans)]">
      <NavigationMenuDemo />
      <HeroSection />

      <div className="portfolio-section container flex flex-col mx-auto sm:gap-20 gap-12 px-4 md:py-16 lg:py-20 py-12">
        <h2 className="title text-4xl font-bold text-foreground text-center">Portfolio</h2>
        {portfolioItems.map((item, index) => (
          <PortfolioCard
            key={index}
            index={index}
            tag={item.tag}
            title={item.title}
            description={item.description}
            button={item.button}
            imageUrl={item.imageUrl}
          />
        ))}
        <Link href="/portfolio" className="w-full inline-block text-center">
          <Button type="button" className="w-full cursor-pointer w-max">
            View More...
          </Button>
        </Link>
      </div>
      {/* Services section */}
      <div className="services-section bg-body">
        <div className="container flex flex-col mx-auto sm:gap-12 gap-10 px-4 md:py-16 lg:py-20 py-12">
          <div className="services-heading">
            <h2 className="title text-4xl font-bold text-foreground text-center mb-1">Services</h2>
            <p className="text-sm text-muted-foreground text-center">Crafting Digital Experiences with Design, Creativity & Code.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.slice(0, 3).map((service, index) => (
              <ServiceCard
                key={index}
                title={service.title}
                description={service.description}
                image={service.image}
              />
            ))}
          </div>
          <Link href="/services" className="w-full inline-block text-center">
            <Button type="button" className="w-full cursor-pointer w-max">
              View More...
            </Button>
          </Link>
        </div>
      </div>
      {/* About section */}
      <div className="about-section bg-background">
        <div className="container max-w-xl mx-auto text-center md:py-16 lg:py-20 py-12 px-4">
          <div className="flex flex-col items-center gap-4">
            <Image
              src="/ahmad-fareed.jpg"
              alt="Profile"
              width={150}
              height={150}
              className="rounded-full object-cover shadow-md w-[150px] h-[150px]"
            />
            <div className="about-text">
              <h2 className="title text-4xl font-bold text-foreground text-center mb-1">Ahmad Fareed</h2>
              <p className="text-sm mt-0 text-foreground">
                UI/UX Designer & Frontend Developer
              </p>
            </div>
            <p className="text-muted-foreground text-sm max-w-md">
              I craft user-friendly interfaces and bring designs to life with clean, responsive code. With years of experience in design and development, I help brands build beautiful, functional web experiences.
            </p>
            <Link href="/about" className="w-full inline-block text-center">
              <Button type="button" className="w-full cursor-pointer w-max mt-1">
                More info...
              </Button>
            </Link>
          </div>
        </div>
      </div>
      
    </div>
  );
}
