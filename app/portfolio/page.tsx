import NavigationMenuDemo from "../components/Header";
import { PortfolioCard } from "../components/PortfolioCard";

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
      </div>
    </div>
  );
}
