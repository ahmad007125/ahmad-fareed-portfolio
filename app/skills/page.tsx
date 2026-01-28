import NavigationMenuDemo from "../components/Header"
import SkillCard from "../components/SkillCard"
import { skills } from "../lib/skills"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const partners = [
  "SaaS products",
  "Marketing teams",
  "Growth squads",
  "Design systems",
  "Founding teams",
  "Agency collaborations",
]

export default function SkillsPage() {
  return (
    <div className="bg-background w-full min-h-screen font-[family-name:var(--font-geist-sans)]">
      <NavigationMenuDemo />
      <main className="container mx-auto flex flex-col gap-16 lg:px-12 sm:px-8 px-4 py-16 md:gap-20 md:py-20 lg:py-24">
        <section className="space-y-6 text-center md:space-y-8">
          <p className="text-sm font-medium uppercase tracking-[0.1em] text-primary/80">
            Capabilities
          </p>
          <h1 className="text-3xl font-semibold text-foreground md:text-4xl lg:text-5xl">
            A multidisciplinary toolkit for product teams
          </h1>
          <p className="mx-auto max-w-2xl text-sm text-muted-foreground md:text-base">
            From discovery to deployment, I combine strategic thinking, design craft, and production-ready code
            to help teams move faster and deliver measurable outcomes.
          </p>
          <div className="flex flex-wrap justify-center gap-3 pt-2 text-xs font-medium uppercase tracking-[0.1em] text-muted-foreground">
            {partners.map((partner) => (
              <span
                key={partner}
                className="rounded-full border border-border/70 px-4 py-2 text-muted-foreground/80"
              >
                {partner}
              </span>
            ))}
          </div>
        </section>

        <section className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {skills.map((skill) => (
            <SkillCard
              key={skill.id}
              title={skill.title}
              description={skill.description}
              image={skill.image}
              focusAreas={skill.focusAreas}
            />
          ))}
        </section>

        <section className="rounded-3xl border border-border/60 bg-body/60 p-8 md:p-12">
          <div className="grid gap-8 md:grid-cols-[1.5fr_1fr] md:items-center">
            <div className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground md:text-3xl">How we can work together</h2>
              <p className="text-sm text-muted-foreground md:text-base">
                Engagements are tailored to your stage and goals. Some teams bring me in for a focused sprint,
                others embed me as an extension of their product org.
              </p>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li>
                  <span className="font-medium text-foreground">UX & product strategy: </span>
                  Discovery workshops, journey mapping, and success metrics.
                </li>
                <li>
                  <span className="font-medium text-foreground">Design systems & UI craft: </span>
                  Token architecture, component libraries, and documentation.
                </li>
                <li>
                  <span className="font-medium text-foreground">Frontend engineering: </span>
                  Production-ready React/Next.js builds with performance and accessibility baked in.
                </li>
              </ul>
            </div>
            <div className="flex flex-col gap-4 rounded-2xl border border-border/40 bg-background/80 p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-foreground">Need something specific?</h3>
              <p className="text-sm text-muted-foreground">
                Let&apos;s chat about your roadmap, timelines, and what success looks like.
              </p>
              <Button asChild className="mt-auto rounded-full px-6">
                <Link href="/contact">Start the conversation</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
