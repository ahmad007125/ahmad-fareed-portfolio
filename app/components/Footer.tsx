import Link from "next/link"
import { Button } from "@/components/ui/button"
import Image from "next/image"

const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Skills", href: "/skills" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Contact", href: "/contact" },
]

const socialLinks = [
  { label: "LinkedIn", href: "https://www.linkedin.com" },
  { label: "Dribbble", href: "https://dribbble.com" },
  { label: "Behance", href: "https://behance.net" },
]

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-border/60 bg-body/70">
      <div className="container mx-auto flex flex-col gap-12 lg:px-12 sm:px-8 px-4 py-12 md:gap-16 md:py-16">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr] md:items-center">
          <div className="space-y-4">
            <p className="text-sm font-medium uppercase tracking-[0.1em] text-primary/80">Let&apos;s collaborate</p>
            <h2 className="text-3xl font-semibold text-foreground md:text-4xl">
              Have a product challenge in mind?
            </h2>
            <p className="max-w-xl text-sm text-muted-foreground md:text-base">
              I work with product, growth, and marketing teams to design and ship user-centred experiences. Share your
              roadmap, and I&apos;ll help you plan a path to impact.
            </p>
            <div className="flex flex-wrap gap-3">
              <Button asChild className="rounded-full px-6">
                <Link href="mailto:ahmadfareedui360@gmail.com">Start a project</Link>
              </Button>
              <Button asChild variant="outline" className="rounded-full px-6">
                <Link href="/portfolio">View latest work</Link>
              </Button>
            </div>
          </div>
          {/* <div className="grid gap-6 rounded-3xl border border-border/60 bg-background/80 p-6 shadow-sm">
            <div>
              <p className="text-xs uppercase tracking-wide text-muted-foreground">Email</p>
              <a
                href="mailto:ahmadfareedui360@gmail.com"
                className="mt-1 block text-base font-semibold text-foreground underline-offset-4 hover:text-primary hover:underline"
              >
                ahmadfareedui360@gmail.com
              </a>
            </div>
            <div>
              <p className="text-xs uppercase tracking-wide text-muted-foreground">Based in</p>
              <p className="mt-1 text-base font-semibold text-foreground">Al Thuqbah, Eastern Saudi Arabia · Remote worldwide</p>
            </div>
            <div className="flex flex-wrap gap-3 text-sm text-muted-foreground">
              {socialLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  className="underline underline-offset-4 hover:text-primary"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div> */}
          <div className="flex flex-col gap-3 rounded-3xl border border-border/60 bg-background/80 p-6 shadow-sm">
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
                <a href="mailto:ahmadfareedui360@gmail.com" className="underline underline-offset-4 hover:text-primary">
                  ahmadfareedui360@gmail.com
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

        <div className="grid gap-6 border-t border-border/60 pt-6 md:grid-cols-[1fr_auto] md:items-center">
          <nav className="flex flex-wrap gap-4 text-sm text-muted-foreground">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href} className="transition hover:text-primary">
                {item.label}
              </Link>
            ))}
          </nav>
          <p className="text-xs text-muted-foreground">
            © {currentYear} Ahmad Fareed. Crafted with empathy and usability.
          </p>
        </div>
      </div>
    </footer>
  )
}

