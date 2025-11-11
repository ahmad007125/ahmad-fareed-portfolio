'use client'

import Image from "next/image"
import Link from "next/link"

const highlights = [
  { label: "Projects delivered", value: "35+" },
  { label: "Conversion lift", value: "28%" },
  { label: "Years experience", value: "5+" },
]

export default function HeroSection() {
  return (
    <section className="w-full bg-gradient-to-b from-background via-background/95 to-body">
      <div className="container mx-auto flex flex-col items-center gap-10 px-4 py-16 md:flex-row md:gap-16 md:py-20 lg:py-24">
        <div className="flex w-full flex-1 flex-col gap-6">
          <span className="w-max rounded-full border border-primary/20 bg-primary/10 px-4 py-1 text-xs font-medium uppercase tracking-[0.2em] text-primary">
            Product Designer & Frontend Developer
          </span>
          <h1 className="max-w-2xl text-4xl font-semibold leading-tight text-foreground md:text-5xl lg:text-[3.25rem] lg:leading-[1.1]">
            I design conversion-focused experiences and build them with modern web tech.
          </h1>
          <p className="max-w-xl text-base text-muted-foreground md:text-lg">
            I help SaaS and product teams translate complex ideas into intuitive interfaces. From
            user research and UX strategy to polished React and Next.js builds, I deliver digital
            products that feel effortless to use.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4">
            <Link
              href="/portfolio"
              className="inline-flex h-11 items-center justify-center rounded-lg bg-primary px-6 text-sm font-medium text-primary-foreground shadow transition hover:bg-primary/90"
            >
              View Selected Work
            </Link>
            <Link
              href="/contact"
              className="inline-flex h-11 items-center justify-center rounded-lg border border-input px-6 text-sm font-medium text-foreground transition hover:border-primary/40 hover:text-primary"
            >
              Start a Project
            </Link>
          </div>
          <dl className="grid w-full gap-4 pt-4 grid-cols-2 sm:grid-cols-3 sm:max-w-lg">
            {highlights.map((item) => (
              <div key={item.label} className="rounded-lg border border-border/60 bg-background/80 p-4 shadow-sm">
                <dt className="text-xs uppercase tracking-wide text-muted-foreground">{item.label}</dt>
                <dd className="text-2xl font-semibold text-foreground">{item.value}</dd>
              </div>
            ))}
          </dl>
        </div>
        <div className="relative flex w-full flex-1 justify-center">
          <div className="relative aspect-[4/5] w-full max-w-sm overflow-hidden rounded-3xl border border-primary/10 bg-gradient-to-br from-body via-background to-background shadow-2xl">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(99,102,241,0.12),transparent_55%)]" />
            <Image
              src="/ahmad-fareed.jpg"
              alt="Ahmad Fareed portrait"
              width={640}
              height={800}
              priority
              className="relative z-10 h-full w-full object-cover object-top"
            />
            <div className="absolute bottom-4 left-4 right-4 z-20 rounded-xl bg-background/80 p-4 backdrop-blur">
              <p className="text-xs uppercase tracking-wide text-muted-foreground">Toolbox</p>
              <p className="text-sm font-medium text-foreground">
                Figma · Framer · Next.js · Tailwind · TypeScript
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}