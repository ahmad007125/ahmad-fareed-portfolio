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
  liveLink: string
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
    liveLink: "https://www.figma.com/design/2mi1611BeLSD3S37H4fTtu/Real-Estate-Web-Design?node-id=0-1&t=6N5IJTV9w6bjpXkR-1",
    title: "Landsy Real Estate Platform",
    industry: "Real Estate",
    year: "2025",
    summary:
      "A responsive real estate platform that lets buyers explore curated listings with personalized financing guidance.",
    excerpt:
      "Led the product design and frontend engineering for a platform that helps home shoppers compare properties, understand financing, and connect with brokers in one place.",
    thumbnail: "/landsy-homepage.jpg",
    heroImage: "/landsy-homepage.jpg",
    services: ["UX Research", "Product Design", "Design System", "UI Design"],
    techStack: ["Figma", "Adobe Illustrator", "Adobe Photoshop"],
    role: ["Product Designer", "UI Designer"],
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
    slug: "ionic-x",
    liveLink: "https://www.ionicx.io/",
    title: "IonicX",
    industry: "Architecture & Design",
    year: "2025",
    summary:
      "IonicX is an AI-powered interior design platform that makes professional-quality room redesigns accessible to everyone.",
    excerpt:
      "We're on a mission to democratize interior design by making professional-quality room redesigns accessible to everyone through the power of artificial intelligence.",
    thumbnail: "/portfolio-4.jpg",
    heroImage: "/portfolio-4.jpg",
    services: ["UX Research", "Product Design", "UI Design", "Frontend Design", "Vercel Deployment"],
    techStack: ["Figma", "Adobe Photoshop", "Next.js", "Tailwind CSS", "ShadCN"],
    role: ["Product Designer and Developer"],
    highlights: [
  {
    title: "AI-Powered Design Experience",
    description:
      "Designed and developed an intuitive 2D and 3D interior design interface powered by AI, enabling users to instantly generate and visualize professional-quality room transformations.",
  },
  {
    title: "End-to-End Product Execution",
    description:
      "Led the complete UI/UX design and front-end development process, ensuring seamless user journeys, responsive performance, and a visually immersive design environment.",
  },
    ],

    stats: [
      { label: "Responsive Design", value: "100%" },
      { label: "Pixel-Perfect UI", value: "100%" },
      { label: "Cross-Browser Compatibility", value: "100%" },
    ],

    challenge:
      "Users often struggle to access affordable, professional interior design solutions, and existing tools can feel complex, technical, or overwhelming for non-designers.",

    outcome:
      "By combining AI-driven automation with a simplified and immersive interface, IonicX makes high-quality interior design accessible, reducing complexity while delivering realistic, build-ready visualizations.",

    caseStudy: [
      {
        heading: "Understanding User Needs",
        body:
          "Researched user pain points around traditional interior design processes and identified the need for a simplified, AI-assisted platform that works for both beginners and professionals.",
      },
      {
        heading: "Designing & Developing the Platform",
        body:
          "Crafted the full UI/UX experience and implemented responsive front-end architecture, building interactive 2D and 3D design modes with smooth navigation and real-time visual feedback.",
      },
      {
        heading: "Delivering Real-World Value",
        body:
          "Optimized performance, usability, and cross-device compatibility to ensure users could easily transform ideas into realistic interior designs without technical barriers.",
      },
    ],

    featured: true,
  },
  {
    slug: "gyrate-digital",
    liveLink: "https://gyratedigital.com/",
    title: "Gyrate Digital",
    industry: "SaaS",
    year: "2025",
    summary:
    "A high-performance digital marketing and web development platform for GyrateDigital, a leading agency delivering fast, scalable IT and marketing solutions.",

    excerpt:
      "Designed and developed a modern agency website showcasing digital marketing expertise, web development services, and performance-driven solutions.",

    thumbnail: "/portfolio-5.jpg",
    heroImage: "/portfolio-5.jpg",

    services: [
      "UI/UX Design",
      "Web Development",
      "Digital Marketing Strategy",
    ],

    techStack: [
      "Figma",
      "Next.js",
      "React",
      "Node.js",
      "SEO Tools",
    ],

    role: [
      "UI/UX Designer",
      "Front-End Developer",
      "Web Developer",
    ],

    highlights: [
      {
        title: "Conversion-Focused Design",
        description:
          "Designed a modern, high-converting user interface that clearly communicates services, builds trust, and drives lead generation for digital marketing campaigns.",
      },
      {
        title: "Fast & Scalable Development",
        description:
          "Developed a responsive, SEO-optimized website ensuring fast performance, cross-browser compatibility, and scalability for future marketing expansions.",
      },
    ],

    stats: [
      { label: "Responsive Design", value: "100%" },
      { label: "SEO Optimization", value: "Advanced" },
      { label: "Performance Optimization", value: "High Speed" },
    ],

    challenge:
      "The agency needed a strong digital presence that clearly positioned GyrateDigital as a leading marketing and IT solutions provider while generating consistent client leads.",

    outcome:
      "Delivered a modern, performance-driven website that strengthens brand credibility, improves user engagement, and supports scalable digital marketing growth.",

    caseStudy: [
      {
        heading: "Brand Positioning & Strategy",
        body:
          "Defined a clear visual identity and messaging structure to position GyrateDigital as a top-tier digital marketing and web development agency.",
      },
      {
        heading: "Design & Development Execution",
        body:
          "Handled complete UI/UX design and full-stack development, building a responsive, SEO-friendly, and conversion-optimized platform.",
      },
      {
        heading: "Performance & Optimization",
        body:
          "Implemented performance best practices, optimized loading speeds, and structured content for improved search visibility and lead generation.",
      },
    ],

    featured: true,
  },
  {
    slug: "lets-speak-up",
    liveLink: "https://www.figma.com/design/Uvkc1Go2aMTRRh3HClZbWK/Let-s-Speak-Up?node-id=0-1&t=dvOogocJojZC0Uvn-1",
    title: "Let's Speak Up",
    industry: "Educational",
    year: "2025",
    summary:
      "A complete website redesign project where I transformed the brand’s digital presence through modern UI/UX design in Figma and implemented it using WordPress with WPBakery Theme Builder.",

    excerpt:
      "Redesigned the full user interface for improved clarity, responsiveness, and conversion, then developed the website using WPBakery to ensure flexibility and easy content management.",

    thumbnail: "/portfolio-6.jpg",
    heroImage: "/portfolio-6.jpg",

    services: [
      "UI/UX Redesign",
      "WordPress Development",
      "Responsive Web Design",
    ],

    techStack: [
      "Figma",
      "WordPress",
      "WPBakery Page Builder",
      "HTML",
      "CSS",
    ],

    role: [
      "UI/UX Designer",
      "WordPress Developer",
    ],

    highlights: [
      {
        title: "Modern UI Redesign",
        description:
          "Redesigned the complete website in Figma with a clean layout system, improved typography, structured content hierarchy, and enhanced visual consistency.",
      },
      {
        title: "WordPress Implementation",
        description:
          "Translated the Figma designs into a fully functional WordPress website using WPBakery, ensuring responsive behavior, performance optimization, and easy backend customization.",
      },
    ],

    stats: [
      { label: "Responsive Design", value: "100%" },
      { label: "UI Consistency", value: "Improved" },
      { label: "Cross-Device Compatibility", value: "Optimized" },
    ],

    challenge:
      "The existing website lacked modern design standards, clear content hierarchy, and responsiveness, which impacted user engagement and brand perception.",

    outcome:
      "Delivered a visually refined and fully responsive website that improved user experience, strengthened brand identity, and enabled easier content management through WordPress.",

    caseStudy: [
      {
        heading: "UI/UX Redesign in Figma",
        body:
          "Audited the existing interface, restructured layout systems, improved spacing and typography, and created high-fidelity mockups focused on usability and visual clarity.",
      },
      {
        heading: "Development with WPBakery",
        body:
          "Rebuilt the website in WordPress using WPBakery Theme Builder, carefully translating design components into modular, reusable sections.",
      },
      {
        heading: "Optimization & Responsiveness",
        body:
          "Ensured full responsiveness across devices, optimized performance, and maintained design accuracy while adapting to WordPress constraints.",
      },
    ],

    featured: false,
  },
  {
    slug: "bank-tracker",
    liveLink: "https://banktracker.de/",
    title: "Bank Tracker Pro",
    industry: "FinTech",
    year: "2025",
      summary:
      "A financial intelligence platform that monitors savings interest rates and product terms across 50+ German banks, helping institutions optimize their rate strategies.",

    excerpt:
      "Contributed to the platform by resolving UI inconsistencies and developing new screens and features using Next.js, Tailwind CSS, and shadcn/ui components.",

    thumbnail: "/bank-tracker.jpg",
    heroImage: "/bank-tracker.jpg",

    services: [
      "Frontend Development",
      "UI Refinement",
      "Feature Implementation",
    ],

    techStack: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "shadcn/ui",
    ],

    role: [
      "Frontend Developer",
    ],

    highlights: [
      {
        title: "UI Improvements & Optimization",
        description:
          "Identified and resolved layout inconsistencies, responsiveness issues, and component styling gaps to enhance usability and visual consistency.",
      },
      {
        title: "Feature & Screen Development",
        description:
          "Built new dashboard screens and interactive features using reusable shadcn components, ensuring performance, scalability, and clean code structure.",
      },
    ],

    stats: [
      { label: "Banks Monitored", value: "50+" },
      { label: "UI Consistency", value: "Enhanced" },
      { label: "Frontend Performance", value: "Optimized" },
    ],

    challenge:
      "The platform required improved UI consistency and additional frontend features to better support complex savings rate comparisons and financial data presentation.",

    outcome:
      "Delivered refined user interfaces and new functional screens that improved clarity, responsiveness, and overall frontend stability of the intelligence platform.",

    caseStudy: [
      {
        heading: "UI Audit & Refinement",
        body:
          "Reviewed existing components and layouts to identify spacing, responsiveness, and styling inconsistencies, then standardized them using Tailwind CSS.",
      },
      {
        heading: "Building New Screens",
        body:
          "Developed additional dashboard views and feature modules in Next.js, leveraging shadcn/ui for accessible, reusable component patterns.",
      },
      {
        heading: "Improving Frontend Quality",
        body:
          "Refactored components for maintainability and performance, ensuring the application remained scalable as new data features were introduced.",
      },
    ],

    featured: true,
  },
  // ===============================9t5 projects===============================
  {
    slug: "work-in-aus",
    liveLink: "https://workinaus.com.au/",
    title: "Work in Aus",
    industry: "Jobs & Careers",
    year: "2024",
    summary:
      "A guided onboarding and activation experience for a data analytics SaaS product serving product and growth teams.",
    excerpt:
      "Reduced activation friction by introducing contextual education, progressive data setup flows, and in-app lifecycle messaging.",
    thumbnail: "/work-in-aus.jpg",
    heroImage: "/work-in-aus.jpg",
    services: ["Responsiveness", "UI Enhancements", "Frontend Development"],
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
  {
    slug: "migration-marketplace",
    liveLink: "https://migrationmarketplace.com.au/",
    title: "Migration Marketplace",
    industry: "Immigration",
    year: "2024",
    summary:
      "A migration services marketplace platform providing guidance and resources for Australia’s skilled migration and visa programs.",

    excerpt:
      "Enhanced the platform’s user interface by improving responsiveness, refining layouts, and optimizing frontend components using Laravel and SCSS.",

    thumbnail: "/migration-marketplace.jpg",
    heroImage: "/migration-marketplace.jpg",

    services: [
      "UI Enhancements",
      "Frontend Refinement",
      "Responsive Optimization",
    ],

    techStack: [
      "Laravel",
      "SCSS",
      "Blade Templates",
      "JavaScript",
    ],

    role: [
      "Frontend Developer",
    ],

    highlights: [
      {
        title: "UI Refinement & Consistency",
        description:
          "Improved visual hierarchy, spacing, and component consistency across marketplace pages to enhance clarity and usability.",
      },
      {
        title: "Responsive Improvements",
        description:
          "Optimized layouts and styling using SCSS to ensure smooth performance and seamless user experience across desktop and mobile devices.",
      },
    ],

    stats: [
      { label: "Platform Type", value: "Migration Marketplace" },
      { label: "Frontend Stack", value: "Laravel + SCSS" },
      { label: "UI Quality", value: "Enhanced" },
    ],

    challenge:
      "The platform required UI improvements to strengthen visual consistency, improve readability of migration-related content, and ensure responsiveness across devices.",

    outcome:
      "Delivered cleaner layouts, improved styling structure, and enhanced frontend responsiveness, resulting in a more professional and user-friendly migration marketplace experience.",

    caseStudy: [
      {
        heading: "Auditing the Existing UI",
        body:
          "Reviewed frontend components and Blade templates to identify layout inconsistencies, spacing issues, and responsiveness gaps.",
      },
      {
        heading: "Enhancing the Interface",
        body:
          "Refined SCSS architecture, standardized reusable UI components, and improved content presentation for migration guides and marketplace listings.",
      },
      {
        heading: "Optimizing Responsiveness",
        body:
          "Adjusted breakpoints and layout behaviors to ensure accessibility and usability across various screen sizes and devices.",
      },
    ],

    featured: false,
  },

  // ===============================Applicon Soft Projects===============================
  {
    slug: "pioneer-auction",
    liveLink: "https://pioneerauctions.ae/",
    title: "Pioneer Auction",
    industry: "Auctions & E-commerce",
    year: "2021",
    summary:
      "An online vehicle auction platform in the UAE offering a wide range of cars, from luxury sedans to family SUVs, through a competitive bidding experience.",

    excerpt:
      "Enhanced the platform’s user interface by refining layouts, improving responsiveness, and optimizing frontend components within a PHP CodeIgniter architecture.",

    thumbnail: "/pioneer-auction.jpg",
    heroImage: "/pioneer-auction.jpg",

    services: [
      "UI Enhancements",
      "Frontend Optimization",
      "Responsive Improvements",
    ],

    techStack: [
      "PHP",
      "CodeIgniter",
      "HTML",
      "CSS",
      "Bootstrap",
      "jQuery",
    ],

    role: [
      "UI Engineer",
    ],

    highlights: [
      {
        title: "UI Consistency & Refinement",
        description:
          "Improved visual hierarchy, standardized UI components, and enhanced layout structure across auction listings, bidding pages, and vehicle detail screens.",
      },
      {
        title: "Responsive & Usability Enhancements",
        description:
          "Optimized responsiveness using Bootstrap and custom CSS to ensure smooth bidding experiences across desktop, tablet, and mobile devices.",
      },
    ],

    stats: [
      { label: "Platform Type", value: "Online Car Auction" },
      { label: "Backend Framework", value: "CodeIgniter" },
      { label: "UI Quality", value: "Enhanced" },
    ],

    challenge:
      "The platform required UI refinements to improve clarity in auction listings, streamline the bidding interface, and ensure consistent performance across different screen sizes.",

    outcome:
      "Delivered cleaner layouts, improved component consistency, and enhanced mobile responsiveness, resulting in a more intuitive and engaging online auction experience.",

    caseStudy: [
      {
        heading: "Reviewing Existing UI Components",
        body:
          "Audited frontend templates and bidding flows to identify layout inconsistencies, alignment issues, and usability gaps within the CodeIgniter structure.",
      },
      {
        heading: "Enhancing Auction Interfaces",
        body:
          "Refined listing cards, vehicle detail pages, and bidding modules to improve readability, user trust, and interaction clarity.",
      },
      {
        heading: "Optimizing Responsiveness",
        body:
          "Improved Bootstrap grid usage and adjusted breakpoints to ensure smooth performance and accessibility across multiple devices.",
      },
    ],

    featured: false,
  },
  {
    slug: "bundl-design",
    liveLink: "https://bundldesigns.com/",
    title: "Bundl Designs",
    industry: "Digital Design",
    year: "2022",
    summary:
      "A design resource platform providing premium graphics, SVGs, PNGs, and embroidery files for crafters, designers, and businesses.",

    excerpt:
      "Enhanced the platform’s UI for improved clarity and responsiveness, and created email templates using core HTML and CSS to strengthen user communication.",

    thumbnail: "/bundl-design.jpg",
    heroImage: "/bundl-design.jpg",

    services: [
      "UI Enhancements",
      "Email Template Design",
      "Frontend Optimization",
    ],

    techStack: [
      "PHP",
      "CodeIgniter",
      "HTML",
      "CSS",
      "Bootstrap",
    ],

    role: [
      "Frontend Developer",
      "UI Engineer",
    ],

    highlights: [
      {
        title: "UI Refinement & Consistency",
        description:
          "Improved visual hierarchy, spacing, and component consistency across graphics listings, download pages, and user dashboard interfaces.",
      },
      {
        title: "Email Template Design",
        description:
          "Created responsive and visually appealing email templates in core HTML/CSS for newsletters, notifications, and marketing campaigns.",
      },
    ],

    stats: [
      { label: "Platform Type", value: "Design Resource Marketplace" },
      { label: "Frontend Stack", value: "CodeIgniter + Bootstrap" },
      { label: "UI Quality", value: "Enhanced" },
    ],

    challenge:
      "The platform required UI improvements to make graphics discovery and download workflows clearer, and visually consistent email templates to engage users effectively.",

    outcome:
      "Delivered a cleaner, more consistent UI and professional email templates, improving usability, user engagement, and the overall user experience of the Bundl Design platform.",

    caseStudy: [
      {
        heading: "Auditing Existing UI",
        body:
          "Reviewed CodeIgniter templates and frontend components to identify inconsistencies, layout issues, and usability gaps across the marketplace interface.",
      },
      {
        heading: "UI Enhancements",
        body:
          "Refined layouts, standardized reusable components, and improved spacing, typography, and visual hierarchy for all key pages and graphics listings.",
      },
      {
        heading: "Email Template Development",
        body:
          "Designed and coded responsive email templates in HTML and CSS, ensuring cross-client compatibility and maintaining brand consistency for communications.",
      },
    ],

    featured: false,
  },
  {
    slug: "applicon-tech",
    liveLink: "https://applicontech.com/",
    title: "Applicon Tech",
    industry: "IT Solutions",
    year: "2023",
    summary:
      "A software development company portfolio showcasing custom web and mobile solutions to drive business growth in Dubai.",

    excerpt:
      "Enhanced the portfolio website by fixing UI issues, designing key modules, and optimizing frontend performance using custom HTML, CSS, and JavaScript.",

    thumbnail: "/applicon-tech.jpg",
    heroImage: "/applicon-tech.jpg",

    services: [
      "UI Enhancements",
      "Module Development",
      "Frontend Optimization",
    ],

    techStack: [
      "HTML",
      "CSS",
      "JavaScript",
    ],

    role: [
      "Frontend Developer",
      "UI Engineer",
    ],

    highlights: [
      {
        title: "UI Refinement & Module Design",
        description:
          "Resolved layout inconsistencies, improved component styling, and designed new interactive modules to enhance usability and visual appeal.",
      },
      {
        title: "Speed & Performance Optimization",
        description:
          "Optimized page loading times, minimized render-blocking scripts, and improved CSS and JS efficiency to enhance user experience and site responsiveness.",
      },
    ],

    stats: [
      { label: "Platform Type", value: "Portfolio Website" },
      { label: "Frontend Stack", value: "Custom HTML/CSS/JS" },
      { label: "Performance", value: "Optimized" },
    ],

    challenge:
      "The portfolio website required UI fixes, improved interactive modules, and speed optimization to deliver a professional, fast, and engaging user experience.",

    outcome:
      "Delivered a polished, responsive, and faster portfolio site with improved module interactivity and consistent visual design, enhancing user engagement and overall experience.",

    caseStudy: [
      {
        heading: "UI Audit & Issue Fixes",
        body:
          "Reviewed all pages to identify layout inconsistencies, visual misalignments, and styling gaps, then implemented corrections across the platform.",
      },
      {
        heading: "Module Development",
        body:
          "Designed and implemented new interactive sections and modules using custom HTML, CSS, and JavaScript to showcase services, projects, and company highlights.",
      },
      {
        heading: "Frontend Performance Optimization",
        body:
          "Optimized CSS and JS, deferred non-critical scripts, and reduced page load times to improve responsiveness and enhance user experience.",
      },
    ],

    featured: false,
  },
]

