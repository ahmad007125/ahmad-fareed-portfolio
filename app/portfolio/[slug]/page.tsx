import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import NavigationMenuDemo from "../../components/Header"
import { Button } from "@/components/ui/button"
import { portfolioProjects } from "../../lib/portfolio"

type PortfolioPageProps = {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return portfolioProjects.map((project) => ({ slug: project.slug }))
}

export async function generateMetadata({ params }: PortfolioPageProps) {
  const { slug } = await params
  const project = portfolioProjects.find((item) => item.slug === slug)

  if (!project) {
    return {}
  }

  const title = `${project.title} — Case Study | Ahmad Fareed`
  const description = project.excerpt

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      images: [{ url: project.heroImage }],
    },
  }
}

export default async function PortfolioDetailPage({ params }: PortfolioPageProps) {
  const { slug } = await params
  const project = portfolioProjects.find((item) => item.slug === slug)

  if (!project) {
    notFound()
  }

  return (
    <div className="bg-background w-full min-h-screen font-[family-name:var(--font-geist-sans)]">
      <NavigationMenuDemo />
      <main className="container mx-auto flex flex-col gap-16 lg:px-12 sm:px-8 px-4 py-16 md:gap-20 md:py-20 lg:py-24">
        <section className="grid gap-10 md:grid-cols-[1.2fr_0.8fr]">
          <div className="space-y-6 md:sticky static top-[150px] h-max">
            <Link
              href="/portfolio"
              className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.1em] text-muted-foreground transition hover:text-primary"
            >
              ← Back to portfolio
            </Link>
            <h1 className="text-3xl font-semibold text-foreground md:text-4xl lg:text-5xl">{project.title}</h1>
            <p className="text-sm text-muted-foreground md:text-base">{project.excerpt}</p>
            <div className="flex flex-wrap gap-4">
              <div className="rounded-2xl border border-border/70 bg-card/80 p-4">
                <p className="text-xs uppercase tracking-wide text-muted-foreground">Industry</p>
                <p className="text-lg font-semibold text-foreground">{project.industry}</p>
              </div>
              <div className="rounded-2xl border border-border/70 bg-card/80 p-4">
                <p className="text-xs uppercase tracking-wide text-muted-foreground">Year</p>
                <p className="text-lg font-semibold text-foreground">{project.year}</p>
              </div>
            </div>
            <div className="flex flex-wrap gap-10">
              <div>
                <p className="text-xs uppercase tracking-wide text-muted-foreground">Roles</p>
                <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
                  {project.role.map((role) => (
                    <li key={role} className="text-foreground">{role}</li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="text-xs uppercase tracking-wide text-muted-foreground">Services</p>
                <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
                  {project.services.map((service) => (
                    <li key={service} className="text-foreground">{service}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <div className="relative overflow-hidden rounded-3xl border border-border/60 bg-body/60 shadow-xl">
            <Image
              src={project.heroImage}
              alt={project.title}
              width={1280}
              height={720}
              className="h-full w-full object-cover"
              priority
            />
          </div>
        </section>

        <section className="grid gap-8 md:grid-cols-3">
          {project.stats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-3xl border border-border/70 bg-card/80 p-6 text-center shadow-sm"
            >
              <p className="text-xs uppercase tracking-wide text-muted-foreground">{stat.label}</p>
              <p className="mt-2 text-3xl font-semibold text-foreground">{stat.value}</p>
            </div>
          ))}
        </section>

        <section className="grid gap-12 md:grid-cols-2 md:items-start">
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-foreground md:text-3xl">The challenge</h2>
            <p className="text-sm text-muted-foreground md:text-base">{project.challenge}</p>
          </div>
          <div className="space-y-4 rounded-3xl border border-border/60 bg-body/60 p-6 shadow-sm">
            <h3 className="text-xl font-semibold text-foreground">Outcome</h3>
            <p className="text-sm text-muted-foreground md:text-base">{project.outcome}</p>
            <div className="flex flex-wrap gap-2 pt-4">
              {project.techStack.map((tech) => (
                <span
                  key={tech}
                  className="inline-flex items-center rounded-full border border-border px-3 py-1 text-xs font-medium text-muted-foreground"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </section>

        <section className="grid gap-6 md:grid-cols-2">
          {project.highlights.map((highlight) => (
            <div
              key={highlight.title}
              className="rounded-3xl border border-border/60 bg-card/80 p-6 shadow-sm transition hover:border-primary/40 hover:shadow-lg"
            >
              <h3 className="text-lg font-semibold text-foreground">{highlight.title}</h3>
              <p className="mt-3 text-sm text-muted-foreground">{highlight.description}</p>
            </div>
          ))}
        </section>

        <section className="flex flex-col gap-10">
          {project.caseStudy.map((section) => (
            <article
              key={section.heading}
              className="rounded-3xl border border-border/60 bg-body/60 p-6 md:p-8"
            >
              <h3 className="text-xl font-semibold text-foreground md:text-2xl">{section.heading}</h3>
              <p className="mt-3 text-sm text-muted-foreground md:text-base">{section.body}</p>
            </article>
          ))}
        </section>

        <section className="rounded-3xl border border-primary/30 bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10 p-8 text-center md:p-12">
          <h2 className="text-2xl font-semibold text-foreground md:text-3xl">
            Interested in a deep dive or similar engagement?
          </h2>
          <p className="mt-4 text-sm text-muted-foreground md:text-base">
            I can walk you through design files, research insights, and implementation details tailored to your team&apos;s needs.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <Button asChild className="rounded-full px-6">
              <Link href="/contact">Book a walkthrough</Link>
            </Button>
            <Button asChild variant="outline" className="rounded-full px-6">
              <Link href="/portfolio">Explore more projects</Link>
            </Button>
          </div>
        </section>
      </main>
    </div>
  )
}

