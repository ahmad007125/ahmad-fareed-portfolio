import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import Image from "next/image"

const FORM_ENDPOINT =
  process.env.NEXT_PUBLIC_FORM_ENDPOINT ?? "https://formsubmit.co/hello@ahmadfareed.design"

export default function ContactForm({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card className="overflow-hidden border border-border/70 bg-background/95">
        <CardContent className="grid gap-0 p-0 md:grid-cols-[1.1fr_0.9fr]">
          <form
            action={FORM_ENDPOINT}
            method="POST"
            className="flex flex-col gap-6 p-6 md:p-8"
          >
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_subject" value="New project inquiry via portfolio" />

            <div className="flex flex-col gap-2 text-left">
              <h1 className="text-2xl font-semibold text-foreground md:text-3xl">Tell me about your project</h1>
              <p className="text-sm text-muted-foreground">
                Share a few details and I&apos;ll follow up within two business days. Prefer email? Reach me at{" "}
                <a href="mailto:hello@ahmadfareed.design" className="text-primary underline underline-offset-4">
                  hello@ahmadfareed.design
                </a>
                .
              </p>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              <div className="grid gap-2">
                <Label htmlFor="name">Name</Label>
                <Input id="name" name="name" type="text" placeholder="Your name" required />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="you@company.com"
                  required
                  autoComplete="email"
                />
              </div>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              <div className="grid gap-2">
                <Label htmlFor="company">Company / Team</Label>
                <Input id="company" name="company" type="text" placeholder="Optional" />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="timeline">Timeline</Label>
                <Input id="timeline" name="timeline" type="text" placeholder="e.g. Q1 launch" />
              </div>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              <div className="grid gap-2">
                <Label htmlFor="projectType">What are you building?</Label>
                <Input
                  id="projectType"
                  name="projectType"
                  type="text"
                  placeholder="Product redesign, Design system, ..."
                  required
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="budget">Budget range</Label>
                <Input id="budget" name="budget" type="text" placeholder="Optional" />
              </div>
            </div>

            <div className="grid gap-2">
              <Label htmlFor="message">Project details</Label>
              <textarea
                id="message"
                name="message"
                placeholder="What problem are you solving? What does success look like?"
                required
                className="min-h-[140px] w-full rounded-lg border border-input bg-background px-3 py-2 text-sm text-foreground shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/50"
              />
            </div>

            <div className="flex flex-col gap-2">
              <Label htmlFor="attachment">Share a brief or deck (link)</Label>
              <Input
                id="attachment"
                name="attachment"
                type="url"
                placeholder="https://..."
              />
            </div>

            <Button type="submit" className="mt-2 w-full rounded-full md:w-max md:px-8">
              Send message
            </Button>
          </form>

          <div className="relative flex flex-col justify-between gap-10 bg-body/60 p-6 md:p-8">
            <div className="space-y-6">
              <div className="space-y-3">
                <p className="text-sm font-medium uppercase tracking-[0.3em] text-primary/80">Availability</p>
                <h2 className="text-2xl font-semibold text-foreground">Currently welcoming new collaborations</h2>
                <p className="text-sm text-muted-foreground">
                  Based in Lahore, collaborating remotely with teams across timezones in MENA, Europe, and North America.
                </p>
              </div>
              <div className="rounded-2xl border border-border/70 bg-background/80 p-4 shadow-sm">
                <p className="text-xs uppercase tracking-wide text-muted-foreground">Project formats</p>
                <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                  <li>• Product discovery sprints</li>
                  <li>• Design system builds & audits</li>
                  <li>• End-to-end product shipping</li>
                  <li>• Growth & conversion experiments</li>
                </ul>
              </div>
            </div>
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-3">
                <Image
                  src="/ahmad-fareed.jpg"
                  alt="Ahmad Fareed"
                  width={48}
                  height={48}
                  className="h-12 w-12 rounded-full object-cover"
                />
                <div>
                  <p className="text-sm font-semibold text-foreground">Ahmad Fareed</p>
                  <p className="text-xs text-muted-foreground">Product Designer & Frontend Developer</p>
                </div>
              </div>
              <div className="flex flex-wrap gap-3 text-sm text-muted-foreground">
                <a href="mailto:hello@ahmadfareed.design" className="underline underline-offset-4 hover:text-primary">
                  hello@ahmadfareed.design
                </a>
                <span>·</span>
                <a href="https://www.linkedin.com" target="_blank" rel="noreferrer" className="underline underline-offset-4 hover:text-primary">
                  LinkedIn
                </a>
                <a href="https://dribbble.com" target="_blank" rel="noreferrer" className="underline underline-offset-4 hover:text-primary">
                  Dribbble
                </a>
                <a href="https://behance.net" target="_blank" rel="noreferrer" className="underline underline-offset-4 hover:text-primary">
                  Behance
                </a>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
