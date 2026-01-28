'use client'

import { Button } from "@/components/ui/button"
import NavigationMenuDemo from "./components/Header"
import HeroSection from "./components/HeroSection"
import { PortfolioCard } from "./components/PortfolioCard"
import Link from "next/link"
import { skills } from "./lib/skills"
import SkillCard from "./components/SkillCard"
import Image from "next/image"
import { portfolioProjects } from "./lib/portfolio"

const process = [
  {
    title: "Discover & Define",
    description:
      "We start with collaborative workshops and user research to frame the problem, surface opportunities, and align on success metrics.",
  },
  {
    title: "Design & Prototype",
    description:
      "Translate insights into wireframes, design systems, and interactive prototypes that we can validate with real users quickly.",
  },
  {
    title: "Build & Iterate",
    description:
      "Ship production-ready experiences with modern frontend tooling, measure impact, and iterate based on live product data.",
  },
]

export default function Home() {
  const featuredProjects = portfolioProjects.filter((project) => project.featured).slice(0, 2)

  return (
    <div className="bg-background w-full min-h-screen font-[family-name:var(--font-geist-sans)]">
      <NavigationMenuDemo />
      <HeroSection />

      <section className="container mx-auto flex flex-col gap-12 lg:px-12 sm:px-8 px-4 py-16 md:gap-16 md:py-20 lg:py-24">
        <div className="flex flex-col items-start gap-4 text-left md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.1em] text-primary/80">
              Selected Work
            </p>
            <h2 className="mt-2 text-3xl font-semibold text-foreground md:text-4xl">
              Product experiences that balance craft and performance
            </h2>
          </div>
          <Link
            href="/portfolio"
            className="inline-flex items-center rounded-full border border-border/70 px-5 py-2 text-sm font-medium text-muted-foreground transition hover:border-primary/40 hover:text-primary"
          >
            Browse all projects
          </Link>
        </div>
        <div className="flex flex-col gap-8 md:gap-12">
          {featuredProjects.map((project, index) => (
            <PortfolioCard key={project.slug} project={project} index={index} />
          ))}
        </div>
      </section>

      <section className="bg-body/60">
        <div className="container mx-auto flex flex-col gap-12 lg:px-12 sm:px-8 px-4 py-16 md:gap-16 md:py-20 lg:py-24">
          <div className="flex flex-col items-center text-center">
            <p className="text-sm font-medium uppercase tracking-[0.1em] text-primary/80">
              Capabilities
            </p>
            <h2 className="mt-2 max-w-2xl text-3xl font-semibold text-foreground md:text-4xl">
              From UX strategy to production-ready interfaces, I ship the full stack of product design
            </h2>
            <p className="mt-3 max-w-2xl text-sm text-muted-foreground md:text-base">
              Here’s a snapshot of how I help teams move quickly, stay aligned, and launch experiences their users love.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {skills.slice(0, 6).map((skill) => (
              <SkillCard
                key={skill.id}
                title={skill.title}
                description={skill.description}
                image={skill.image}
                focusAreas={skill.focusAreas}
              />
            ))}
          </div>
          <div className="flex justify-center">
            <Link href="/skills">
              <Button variant="outline" className="rounded-full px-6">
                Explore the full skillset
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="container mx-auto flex flex-col gap-12 lg:px-12 sm:px-8 px-4 py-16 md:gap-16 md:py-20 lg:py-24">
        <div className="flex flex-col items-center text-center">
          <p className="text-sm font-medium uppercase tracking-[0.1em] text-primary/80">
            Process
          </p>
          <h2 className="mt-2 text-3xl font-semibold text-foreground md:text-4xl">
            A collaborative, insight-driven approach
          </h2>
          <p className="mt-3 max-w-2xl text-sm text-muted-foreground md:text-base">
            Every engagement is tailored, but the pillars stay consistent—understand the problem, design the right solution, and ship with care.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {process.map((step) => (
            <div
              key={step.title}
              className="flex flex-col gap-3 rounded-2xl border border-border/70 bg-background/80 p-6 text-left shadow-sm"
            >
              <h3 className="text-lg font-semibold text-foreground">{step.title}</h3>
              <p className="text-sm text-muted-foreground">{step.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10">
        <div className="container mx-auto flex flex-col items-center gap-10 lg:px-12 sm:px-8 px-4 py-16 text-center md:flex-row md:items-center md:justify-between md:text-left lg:py-20">
          <div className="flex flex-col gap-4 max-w-2xl">
            <p className="text-sm font-medium uppercase tracking-[0.1em] text-primary">
              About Ahmad
            </p>
            <h2 className="text-3xl font-semibold text-foreground md:text-4xl">
              Hybrid designer-engineer with a love for human-centred products
            </h2>
            <p className="text-sm text-muted-foreground md:text-base">
              I partner with founders and product teams to translate customer insight into design clarity—and then into fast, reliable code. Over the last five years I&apos;ve led redesigns, design system rollouts, and growth experiments for startups and scale-ups.
            </p>
          </div>
          <div className="relative">
            <Image
              src="/ahmad-fareed.jpg"
              alt="Ahmad Fareed"
              width={220}
              height={220}
              className="rounded-3xl border border-primary/30 object-cover shadow-xl"
            />
          </div>
        </div>
      </section>
    </div>
  )
}
