import NavigationMenuDemo from "../components/Header"
import { PortfolioCard } from "../components/PortfolioCard"
import { portfolioProjects } from "../lib/portfolio"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function PortfolioPage() {
  return (
    <div className="bg-background w-full min-h-screen font-[family-name:var(--font-geist-sans)]">
      <NavigationMenuDemo />
      <main className="container mx-auto flex flex-col gap-16 lg:px-12 sm:px-8 px-4 py-16 md:gap-20 md:py-20 lg:py-24">
        <section className="flex flex-col gap-4 text-center">
          <p className="text-sm font-medium uppercase tracking-[0.1em] text-primary/80">Portfolio</p>
          <h1 className="text-3xl font-semibold text-foreground md:text-4xl lg:text-5xl">
            A selection of product work across SaaS, ecommerce, and growth.
          </h1>
          <p className="mx-auto max-w-2xl text-sm text-muted-foreground md:text-base">
            Each project pairs strategic insight with hands-on execution—from research and product definition
            to interface design and production-ready frontend builds.
          </p>
        </section>

        <section className="flex flex-col gap-10 md:gap-12">
          {portfolioProjects.map((project, index) => (
            <PortfolioCard key={project.slug} project={project} index={index} />
          ))}
        </section>

        <section className="relative rounded-3xl bg-body/60 p-8 text-center md:p-12 bg-[url('/case-study.jpg')] bg-cover bg-center">
          <div className="absolute inset-0 rounded-3xl bg-primary/80 brightness-75 contrast-110" />
          <div className="relative z-10">
            <h2 className="text-2xl font-semibold text-foreground md:text-3xl">
              Looking for a case study tailored to your industry?
            </h2>
            <p className="mt-4 text-sm text-muted-foreground md:text-base">
              I&apos;d love to share more detail about relevant work, walk through design files, or spin up a short discovery sprint together.
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-3">
              <Button asChild className="rounded-full px-6">
                <Link href="/contact">Start a project conversation</Link>
              </Button>
              <Button asChild variant="outline" className="rounded-full px-6">
                <Link href="/skills">See how I can help</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
