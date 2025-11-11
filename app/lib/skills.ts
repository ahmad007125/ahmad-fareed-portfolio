export type Skill = {
  id: number
  title: string
  description: string
  image?: string
  focusAreas?: string[]
}

export const skills: Skill[] = [
  {
    id: 1,
    title: "Product & UX Strategy",
    description:
      "Translating business goals and user insights into measurable product outcomes, user journeys, and north-star experience maps.",
    image: "/ui-ux-design.png",
    focusAreas: ["User research", "Journey mapping", "Experience audits"],
  },
  {
    id: 2,
    title: "Interface & Visual Design",
    description:
      "Designing elegant and accessible interfaces that express the brand while keeping usability, clarity, and conversion top of mind.",
    image: "/graphic-design.png",
    focusAreas: ["Design systems", "Responsive layouts", "Design ops"],
  },
  {
    id: 3,
    title: "Frontend Engineering",
    description:
      "Bringing high-fidelity product design to life with performant, scalable code using React, Next.js, and modern tooling.",
    image: "/web-development.png",
    focusAreas: ["Next.js", "TypeScript", "Tailwind CSS"],
  },
  {
    id: 4,
    title: "Prototyping & Motion",
    description:
      "Validating product ideas quickly with interactive prototypes, detailed micro-interactions, and motion studies.",
    image: "/globe.svg",
    focusAreas: ["Figma prototypes", "Framer", "Usability testing"],
  },
  {
    id: 5,
    title: "Design Facilitation",
    description:
      "Leading collaborative workshops and sprint planning sessions that align product, engineering, and stakeholders.",
    image: "/window.svg",
    focusAreas: ["Design sprints", "Stakeholder alignment", "Team coaching"],
  },
  {
    id: 6,
    title: "Growth Experimentation",
    description:
      "Partnering with marketing teams to design, implement, and measure conversion experiments across key acquisition flows.",
    image: "/file.svg",
    focusAreas: ["Landing page optimization", "A/B testing", "Analytics"],
  },
]
