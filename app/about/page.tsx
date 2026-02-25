import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import NavigationMenuDemo from "../components/Header"
import Footer from "../components/Footer"

const experience = [
  {
    company: "Freelance & Studio Collaborations",
    role: "Product Designer & Frontend Developer",
    timeframe: "2021 — Present",
    summary:
      "Partnering with SaaS founders, product teams, and creative studios to launch end-to-end product experiences and design systems.",
  },
  {
    company: "Nova Creative",
    role: "Senior UI/UX Designer",
    timeframe: "2019 — 2021",
    summary:
      "Led multidisciplinary squads delivering marketing sites, ecommerce storefronts, and growth experimentation for international clients.",
  },
  {
    company: "Pixel Forge",
    role: "Frontend Engineer",
    timeframe: "2017 — 2019",
    summary:
      "Implemented component libraries, accessibility practices, and performance optimisations for large-scale web applications.",
  },
]

const principles = [
  {
    title: "Clarity first",
    description:
      "Customers should understand the value in seconds. Every interface decision is rooted in helping people achieve their goals quickly and confidently.",
  },
  {
    title: "Collaborate early",
    description:
      "Product, engineering, and stakeholders stay involved from day one. Co-creation fuels better solutions and shortens the feedback loop.",
  },
  {
    title: "Ship and learn",
    description:
      "Design isn’t finished when it’s handed off. I partner through implementation, measurement, and iteration to make sure what we ship moves the needle.",
  },
]

const toolkit = {
  Design: ["Figma", "FigJam", "Framer", "Adobe CC", "Design tokens"],
  Frontend: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Storybook"],
  Collaboration: ["Notion", "Linear", "Miro", "Slack", "Maze"],
}

export default function AboutPage() {
  return (
    <div className="bg-background w-full min-h-screen font-[family-name:var(--font-geist-sans)]">
      <NavigationMenuDemo />
      <main className="container mx-auto flex flex-col gap-16 lg:px-12 sm:px-8 px-4 py-16 md:gap-20 md:py-20 lg:py-24">
        <section className="grid gap-12 md:grid-cols-[1fr_360px] md:items-center">
          <div className="space-y-6">
            <p className="text-sm font-medium uppercase tracking-[0.1em] text-primary/80">Nice to meet you</p>
            <h1 className="text-3xl font-semibold text-foreground md:text-4xl lg:text-5xl">
              I help teams design, build, and scale product experiences that feel effortless to use.
            </h1>
            <p className="text-base text-muted-foreground md:text-lg">
              Over the last five years I&apos;ve partnered with SaaS startups, ecommerce brands, and enterprise teams to launch high-impact product initiatives. From facilitating discovery workshops to implementing design systems and production-ready code, I thrive at the intersection of design clarity and technical craft.
            </p>
            <div className="grid gap-4 sm:grid-cols-3">
              <div className="rounded-2xl border border-border/70 bg-card/50 p-4">
                <p className="text-xs uppercase tracking-wide text-muted-foreground">Experience</p>
                <p className="text-2xl font-semibold text-foreground">5+ years</p>
              </div>
              <div className="rounded-2xl border border-border/70 bg-card/50 p-4">
                <p className="text-xs uppercase tracking-wide text-muted-foreground">Projects launched</p>
                <p className="text-2xl font-semibold text-foreground">35+</p>
              </div>
              <div className="rounded-2xl border border-border/70 bg-card/50 p-4">
                <p className="text-xs uppercase tracking-wide text-muted-foreground">Teams partnered</p>
                <p className="text-2xl font-semibold text-foreground">20+</p>
              </div>
            </div>
            <div className="flex flex-wrap gap-3">
              <Button asChild className="rounded-full px-6">
                <Link href="/portfolio">View projects</Link>
              </Button>
              <Button asChild variant="outline" className="rounded-full px-6">
                <Link href="/contact">Book a discovery call</Link>
              </Button>
            </div>
          </div>
          <div className="relative mx-auto w-full max-w-sm">
            <div className="absolute inset-0 -translate-x-6 -translate-y-6 rounded-3xl bg-primary/10 blur-3xl" />
            <div className="relative overflow-hidden rounded-3xl border border-border/70 bg-body/70 shadow-xl">
              <Image
                src="/ahmad-fareed.jpg"
                alt="Ahmad Fareed portrait"
                width={640}
                height={800}
                className="h-full w-full object-cover object-top"
              />
            </div>
          </div>
        </section>

        <section className="grid gap-10 md:grid-cols-2 md:gap-12">
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-foreground md:text-3xl">Experience snapshot</h2>
            <p className="text-sm text-muted-foreground md:text-base">
              I&apos;ve led and contributed to cross-functional teams across multiple industries. Here are a few of the roles that shaped how I work today.
            </p>
          </div>
          <div className="flex flex-col gap-6">
            {experience.map((item) => (
              <div
                key={`${item.company}-${item.timeframe}`}
                className="rounded-2xl border border-border/60 bg-card/50 p-6 shadow-sm"
              >
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <h3 className="text-lg font-semibold text-foreground">{item.company}</h3>
                  <span className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
                    {item.timeframe}
                  </span>
                </div>
                <p className="text-sm font-medium text-primary/80">{item.role}</p>
                <p className="mt-2 text-sm text-muted-foreground">{item.summary}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="grid gap-12 md:grid-cols-2 md:items-start">
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-foreground md:text-3xl">How I partner with teams</h2>
            <p className="text-sm text-muted-foreground md:text-base">
              Success is a shared outcome. I embed with your team, help facilitate alignment,
              and create the foundations that keep product work moving quickly after launch.
            </p>
          </div>
          <div className="grid gap-4">
            {principles.map((principle) => (
              <div
                key={principle.title}
                className="rounded-2xl border border-border/60 bg-card/50 p-6 shadow-sm transition hover:border-primary/40 hover:shadow-lg"
              >
                <h3 className="text-lg font-semibold text-foreground">{principle.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{principle.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="rounded-3xl border border-border/60 bg-body/60 p-8 md:p-12">
          <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
            <div className="max-w-xl space-y-4">
              <h2 className="text-2xl font-semibold text-foreground md:text-3xl">Tooling & collaboration stack</h2>
              <p className="text-sm text-muted-foreground md:text-base">
                I plug into the tools your team already loves. Here are a few you&apos;ll often find in my workflow.
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-3">
              {Object.entries(toolkit).map(([category, tools]) => (
                <div key={category} className="rounded-2xl border border-border/40 bg-card/50 p-4 shadow-sm">
                  <h3 className="text-sm font-semibold uppercase tracking-wide text-primary/80">{category}</h3>
                  <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                    {tools.map((tool) => (
                      <li key={tool}>{tool}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="rounded-3xl border border-primary/30 bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10 p-8 text-center md:p-12">
          <h2 className="text-2xl font-semibold text-foreground md:text-3xl">
            Let&apos;s build something people will love
          </h2>
          <p className="mt-4 text-sm text-muted-foreground md:text-base">
            Whether you need a product discovery sprint, a design system refresh, or a partner to ship a new feature, I&apos;m here to help.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <Button asChild className="rounded-full px-6">
              <Link href="/contact">Tell me about your project</Link>
            </Button>
            <Button asChild variant="outline" className="rounded-full px-6">
              <Link href="/portfolio">See recent work</Link>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}