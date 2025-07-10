// 'use client'

import Image from "next/image"
import { cn } from "@/lib/utils"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function PortfolioCard({
  tag,
  title,
  description,
  button,
  imageUrl,
  index,
}: {
  tag: string
  title: string
  description: string
  button: string
  imageUrl: string
  index: number
}) {
  return (
    <div
        className={`flex flex-col-reverse items-center justify-between gap-8 ${
        index % 2 === 0 ? "sm:flex-row" : "sm:flex-row-reverse"
        }`}
    >
      <div className="card-info sm:max-w-1/2 max-w-full flex-1 w-full">
        <div className="flex flex-col gap-2">
          <span data-slot="badge" className="w-max inline-flex items-center justify-center gap-1 rounded-full border border-transparent bg-secondary px-2 py-0.5 text-xs font-medium text-secondary-foreground shadow transition-colors hover:bg-secondary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/50 focus-visible:ring-offset-2">{tag}</span>
          <h3 className="text-xl font-semibold">{title}</h3>
          <p className="font-normal text-muted-foreground">{description}</p>
          <Button className="w-max h-8 items-center justify-center">
            <Link href="#">{button}</Link>
          </Button>
        </div>
      </div>
      <Card className="overflow-hidden group w-full sm:max-w-1/2 max-w-full flex-1 border border-xl !rounded-0 p-0 shadow-lg">
        <div className="relative h-64 overflow-hidden">
          <Image
            src={imageUrl}
            alt={title}
            fill
            className={cn(
              "w-full !h-auto transition-transform duration-[6000ms] linear group-hover:-translate-y-[calc(100%-16rem)]"
            )}
          />
        </div>
      </Card>
    </div>
  )
}

