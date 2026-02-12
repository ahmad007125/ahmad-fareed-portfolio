'use client'

import Image from "next/image"
import { cn } from "@/lib/utils"

type SkillCardProps = {
  title: string
  description: string
  image?: string
  focusAreas?: string[]
  className?: string
}

export default function SkillCard({ title, description, image, focusAreas, className }: SkillCardProps) {
  return (
    <div
      className={cn(
        "flex h-full flex-col gap-4 rounded-2xl border border-border/60 bg-card/80 shadow-sm transition hover:border-primary/40 hover:shadow-lg overflow-hidden",
        className
      )}
    >
      <div className="p-6">
        <div className="flex items-center gap-4">
          {image && (
            <div className="relative h-12 w-12 flex-shrink-0 overflow-hidden rounded-xl border border-border/60 bg-body/60">
              <Image src={image} alt={title} width={48} height={48} className="h-full w-full object-contain p-2" />
            </div>
          )}
          <h3 className="text-lg font-semibold text-foreground">{title}</h3>
        </div>
        <p className="text-sm text-muted-foreground">{description}</p>
      </div>
      {/* <hr className="border-t border-border/60 my-2" /> */}
      {focusAreas && focusAreas.length > 0 && (
        <ul className="flex flex-wrap gap-2 p-6 pt-0">
          {focusAreas.map((area) => (
            <li
              key={area}
              className="inline-flex items-center rounded-full bg-foreground/70 px-3 py-1 text-xs font-medium text-background"
            >
              {area}
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
