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
    title: "Graphic Design",
    description:
      "Crafting impactful visual designs through concept development, creative layouts, typography, and thoughtful visual communication.",
    image: "/ui-ux-design.png",
    focusAreas: ["Brand identity design", "Logo design", "Typography", "Layout design", "Social media graphics", "Marketing materials", "Web design", "Visual identity systems", "Creative concept development"],
  },
  {
    id: 2,
    title: "UI/UX Design",
    description:
      "Crafting intuitive, user-centered digital experiences through research-driven design, wireframing, prototyping, and thoughtful usability testing.",
    image: "/ui-ux-design.png",
    focusAreas: ["User research", "Journey mapping", "User-centered design", "Wireframing", "High-fidelity UI design", "Design systems", "Reusable components", "Prototyping", "Interaction design"],
  },
  {
    id: 3,
    title: "Frontend Development",
    description:
      "Building responsive, high-performance web interfaces with HTML5, CSS3, JavaScript, React, Next.js, and cross-browser compatibility.",
    image: "/graphic-design.png",
    focusAreas: ["HTML5", "CSS3", "JavaScript & jQuery", "React.js & Next.js", "Tailwind CSS & ShadCN UI", "Responsive UI implementation", "Cross-browser and device compatibility"],
  },
  {
    id: 4,
    title: "Speed Optimization",
    description:
      "Improving website speed by fixing performance bottlenecks, optimizing FCP & LCP, reducing render-blocking resources, and enhancing SEO.",
    image: "/web-development.png",
    focusAreas: ["Speed optimization", "Identifying performance bottlenecks", "Optimizing render-blocking resources", "Improve FCP & LCP", "Efficient asset loading strategies", "Improve SEO"],
  },
]



