// 'use client';
// import Image from "next/image";
import NavigationMenuDemo from "./components/Header";
import HeroSection from "./components/HeroSection";
import { PortfolioCard } from "./components/PortfolioCard";

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
    {
      tag: "Business",
      title: "Brand Landing Page",
      description: "A strategically crafted landing page designed to captivate visitors, communicate brand value, and drive conversions. Every section is optimized to tell a compelling story, build trust, and encourage users to take action—whether that’s signing up, making a purchase, or exploring your offerings.",
      button: "Full view",
      imageUrl: "/portfolio-3.jpg",
    },
  ]

  return (
    <div className="bg-background w-full min-h-screen font-[family-name:var(--font-geist-sans)]">
      <NavigationMenuDemo />
      <HeroSection />

      <div className="portfolio-section container flex flex-col mx-auto gap-20 px-4 md:py-16 lg:py-20">
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
      </div>

      {/* <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          Learn
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          Examples
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Go to nextjs.org →
        </a>
      </footer> */}
    </div>
  );
}
