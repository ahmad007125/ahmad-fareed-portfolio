import Image from "next/image"
import Link from "next/link"
import { cn } from "@/lib/utils"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import type { PortfolioProject } from "@/app/lib/portfolio"

type PortfolioCardProps = {
  project: PortfolioProject
  index: number
}

export function PortfolioCard({ project, index }: PortfolioCardProps) {
  return (
    <article
      className={cn(
        "group flex flex-col items-stretch gap-8 rounded-3xl border border-border/60 bg-card/80 p-6 shadow-sm transition hover:border-primary/40 hover:shadow-lg md:flex-row md:p-8",
        index % 2 !== 0 && "md:flex-row-reverse"
      )}
    >
      <div className="flex w-full max-w-[50%] flex-1 flex-col justify-between gap-6">
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <span className="inline-flex items-center rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-medium uppercase tracking-[0.1em] text-primary">
              {project.industry}
            </span>
            <span className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
              {project.year}
            </span>
          </div>
            <h3 className="text-2xl font-semibold text-foreground md:text-3xl">{project.title}</h3>
          <p className="text-sm text-muted-foreground md:text-base">{project.summary}</p>
        </div>

        <div className="space-y-4">
          <div className="flex flex-wrap gap-2">
            {project.services.slice(0, 3).map((service) => (
              <span
                key={service}
                className="inline-flex items-center rounded-full border border-border px-3 py-1 text-xs font-medium text-muted-foreground transition group-hover:border-primary/30 group-hover:text-primary"
              >
                {service}
              </span>
            ))}
            {project.services.length > 3 && (
              <span className="inline-flex items-center rounded-full border border-border px-3 py-1 text-xs font-medium text-muted-foreground">
                +{project.services.length - 3} more
              </span>
            )}
          </div>
          <div className="flex gap-2 items-center">
            <Button asChild className="w-max rounded-full">
              <Link href={`/portfolio/${project.slug}`}>View case study</Link>
            </Button>
            <Button variant="outline" asChild className="w-max rounded-full">
              <Link href={`${project.liveLink}`} target="blank">Visit Website</Link>
            </Button>
          </div>
        </div>
      </div>
      <Card className="relative flex w-full flex-1 overflow-hidden rounded-2xl border border-border/70 bg-background/40 !py-0">
        <div className="relative h-[280px] w-full overflow-hidden md:h-full">
          <Image
            src={project.thumbnail}
            alt={project.title}
            fill
            className="h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.04]"
            sizes="(min-width: 1024px) 540px, 100vw"
          />
        </div>
      </Card>
    </article>
  )
}
