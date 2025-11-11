export type ProjectHighlight = {
  title: string
  description: string
}

export type ProjectStat = {
  label: string
  value: string
}

export type ProjectCaseStudySection = {
  heading: string
  body: string
}

export type PortfolioProject = {
  slug: string
  title: string
  industry: string
  year: string
  summary: string
  excerpt: string
  thumbnail: string
  heroImage: string
  services: string[]
  techStack: string[]
  role: string[]
  highlights: ProjectHighlight[]
  stats: ProjectStat[]
  challenge: string
  outcome: string
  caseStudy: ProjectCaseStudySection[]
  featured?: boolean
}

export const portfolioProjects: PortfolioProject[] = [
  {
    slug: "landsy-real-estate-platform",
    title: "Landsy Real Estate Platform",
    industry: "PropTech",
    year: "2024",
    summary:
      "A responsive real estate platform that lets buyers explore curated listings with personalized financing guidance.",
    excerpt:
      "Led the product design and frontend engineering for a platform that helps home shoppers compare properties, understand financing, and connect with brokers in one place.",
    thumbnail: "/landsy-homepage.jpg",
    heroImage: "/landsy-homepage.jpg",
    services: ["UX Research", "Product Design", "Design System", "Frontend Development"],
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "Supabase"],
    role: ["Product Designer", "Frontend Developer"],
    highlights: [
      {
        title: "Unified discovery flow",
        description:
          "Mapped the end-to-end buyer journey and removed three redundant steps between browsing and booking a viewing.",
      },
      {
        title: "Design system foundations",
        description:
          "Introduced a reusable design token library and component architecture that cut handoff time by 40%.",
      },
    ],
    stats: [
      { label: "Time-on-platform", value: "+32%" },
      { label: "Qualified leads", value: "+21%" },
      { label: "Design-to-dev handoff", value: "−40%" },
    ],
    challenge:
      "Real-estate leads were dropping off after discovering listings because the experience to schedule tours and understand financing was fragmented and confusing.",
    outcome:
      "The redesigned flow increased buyer confidence, improved lead quality, and helped the sales team prioritise high-intent customers.",
    caseStudy: [
      {
        heading: "Understanding the buyer journey",
        body:
          "Conducted stakeholder interviews and analysed analytics to identify the highest drop-off points. I synthesised findings into a journey map that highlighted hand-off gaps between discovery, mortgage guidance, and broker communication.",
      },
      {
        heading: "Designing for clarity and trust",
        body:
          "Developed modular property detail templates with at-a-glance financing insights and a guided scheduling flow. Component specs and responsive behaviours were delivered in a shared Figma library and Storybook documentation.",
      },
      {
        heading: "Proving the impact",
        body:
          "Partnered with growth and engineering to ship an incremental rollout. A/B testing showed a 32% lift in time-on-platform and a 21% increase in qualified leads within the first six weeks.",
      },
    ],
    featured: true,
  },
  {
    slug: "orbit-ecommerce-redesign",
    title: "Orbit Commerce Experience",
    industry: "E-commerce",
    year: "2023",
    summary:
      "An end-to-end redesign of a multi-brand ecommerce storefront focused on conversion, merchandising flexibility, and storytelling.",
    excerpt:
      "Worked alongside marketing and engineering to rebuild the Orbit storefront—from IA and product discovery to checkout. Implemented the frontend with a performant Next.js architecture.",
    thumbnail: "/portfolio-2.png",
    heroImage: "/portfolio-2.png",
    services: ["Experience Strategy", "UI Design", "Design System", "Frontend Development"],
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Shopify Hydrogen", "Storybook"],
    role: ["Lead Product Designer", "Frontend Engineer"],
    highlights: [
      {
        title: "Conversion-led storytelling",
        description:
          "Introduced visual merchandising modules that allowed the team to pair editorial storytelling with conversion triggers.",
      },
      {
        title: "Performance budget",
        description:
          "Audited assets and interactions, cutting page weight by 38% while maintaining rich product imagery.",
      },
    ],
    stats: [
      { label: "Checkout conversion", value: "+18%" },
      { label: "Page weight", value: "−38%" },
      { label: "New SKU launch speed", value: "2× faster" },
    ],
    challenge:
      "Orbit needed to increase conversion across mobile and international shoppers without losing the editorial storytelling that defined the brand.",
    outcome:
      "The modular design system empowered the internal team to launch new campaigns in hours, supporting sustained conversion growth quarter over quarter.",
    caseStudy: [
      {
        heading: "Mapping the funnel",
        body:
          "Analysed analytics and ran customer interviews to identify the biggest leaks across product listing pages and checkout. Crafted hypotheses for high-impact experiments.",
      },
      {
        heading: "Designing modular merchandising",
        body:
          "Built a library of visual storytelling blocks with configurable messaging, badges, and bundle logic. Documented composition rules to keep layouts on-brand.",
      },
      {
        heading: "Shipping with velocity",
        body:
          "Delivered production-ready components with Storybook documentation. Paired with developers to integrate a Hydrogen storefront, achieving a sub-second Largest Contentful Paint.",
      },
    ],
    featured: true,
  },
  {
    slug: "aurora-saas-onboarding",
    title: "Aurora SaaS Onboarding",
    industry: "SaaS",
    year: "2022",
    summary:
      "A guided onboarding and activation experience for a data analytics SaaS product serving product and growth teams.",
    excerpt:
      "Reduced activation friction by introducing contextual education, progressive data setup flows, and in-app lifecycle messaging.",
    thumbnail: "/portfolio-3.jpg",
    heroImage: "/portfolio-3.jpg",
    services: ["UX Research", "Product Design", "Motion Design"],
    techStack: ["Figma", "Framer", "Next.js", "Segment", "SendGrid"],
    role: ["Product Designer"],
    highlights: [
      {
        title: "Progressive profiling",
        description:
          "Split account setup into milestone-based steps with inline guidance and personalised recommendations.",
      },
      {
        title: "Lifecycle orchestration",
        description:
          "Built experiment-ready messaging playbooks that tied product events to lifecycle email and in-app nudges.",
      },
    ],
    stats: [
      { label: "Day-7 activation", value: "+24%" },
      { label: "Support tickets", value: "−31%" },
      { label: "Onboarding time", value: "−45%" },
    ],
    challenge:
      "Teams signed up but stalled before integrating data sources, which meant they never reached the aha moment that showcased Aurora’s value.",
    outcome:
      "By pairing onboarding flows with contextual education, Aurora’s activation rate improved and support load dropped substantially.",
    caseStudy: [
      {
        heading: "Diagnosing drop-offs",
        body:
          "Instrumented funnel analytics and ran usability tests with new signups. Identified confusion around data connectors and a lack of clear success milestones.",
      },
      {
        heading: "Designing guided flows",
        body:
          "Created a progressive onboarding experience with smart defaults and contextual support. Documented component behaviours for engineering handoff.",
      },
      {
        heading: "Measuring success",
        body:
          "Partnered with growth to roll out the new onboarding in phases, measuring activation uplift and iterating on lifecycle messaging based on cohort analysis.",
      },
    ],
    featured: false,
  },
]

