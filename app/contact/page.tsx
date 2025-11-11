import NavigationMenuDemo from "../components/Header"
import ContactForm from "../components/ContactForm"
import { Button } from "@/components/ui/button"

const faqs = [
  {
    question: "What types of projects do you take on?",
    answer:
      "Product discovery, UX/UI redesigns, design system builds, conversion optimisation, and end-to-end frontend implementation with React/Next.js.",
  },
  {
    question: "How soon can we start?",
    answer:
      "I typically book 2–4 weeks in advance. Let me know if you have a fixed launch date—we can prioritise a discovery sprint to get aligned quickly.",
  },
  {
    question: "Do you collaborate with in-house teams?",
    answer:
      "Absolutely. I embed with product, growth, and engineering teams, joining ceremonies, documenting decisions, and ensuring the work is easy to evolve.",
  },
]

export default function ContactPage() {
  return (
    <div className="bg-background w-full min-h-screen font-[family-name:var(--font-geist-sans)]">
      <NavigationMenuDemo />
      <main className="container mx-auto flex flex-col gap-16 px-4 py-16 md:gap-20 md:py-20 lg:py-24">
        <section className="grid gap-10 md:grid-cols-[1.1fr_0.9fr] md:items-center">
          <div className="space-y-6">
            <p className="text-sm font-medium uppercase tracking-[0.3em] text-primary/80">Let&apos;s collaborate</p>
            <h1 className="text-3xl font-semibold text-foreground md:text-4xl lg:text-5xl">
              Ready to design and ship something your customers will love?
            </h1>
            <p className="text-sm text-muted-foreground md:text-base">
              Share a little about the product, timeline, and what success looks like. I&apos;ll follow up with next steps,
              availability, and how we can structure a collaboration that fits your team.
            </p>
            <div className="flex flex-wrap gap-3 text-sm text-muted-foreground">
              <div className="rounded-2xl border border-border/70 bg-background/80 p-4">
                <p className="text-xs uppercase tracking-wide text-muted-foreground">Email</p>
                <a
                  href="mailto:hello@ahmadfareed.design"
                  className="mt-1 block text-base font-semibold text-foreground underline-offset-4 hover:text-primary hover:underline"
                >
                  hello@ahmadfareed.design
                </a>
              </div>
              <div className="rounded-2xl border border-border/70 bg-background/80 p-4">
                <p className="text-xs uppercase tracking-wide text-muted-foreground">Location</p>
                <p className="mt-1 text-base font-semibold text-foreground">Lahore · Remote worldwide</p>
              </div>
            </div>
            <Button asChild variant="outline" className="rounded-full px-6">
              <a href="https://cal.com" target="_blank" rel="noreferrer">
                Book a 30-min intro call
              </a>
            </Button>
          </div>
          <div className="rounded-3xl border border-border/60 bg-body/60 p-6 md:p-8">
            <h2 className="text-xl font-semibold text-foreground md:text-2xl">Frequently asked</h2>
            <div className="mt-6 space-y-6">
              {faqs.map((faq) => (
                <div key={faq.question} className="space-y-2 rounded-2xl border border-border/40 bg-background/80 p-4">
                  <p className="text-sm font-medium text-foreground">{faq.question}</p>
                  <p className="text-sm text-muted-foreground">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <ContactForm />
      </main>
    </div>
  )
}
