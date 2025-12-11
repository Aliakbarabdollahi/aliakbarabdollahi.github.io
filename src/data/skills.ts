export interface Skill {
  id: number;
  title: string;
  description: string;
}

export const skills: Skill[] = [
  {
    id: 1,
    title: "Web Design",
    description: "Designing clean, modern and responsive web interfaces.",
  },
  {
    id: 2,
    title: "App Design",
    description: "Crafting intuitive mobile app experiences and flows.",
  },
  {
    id: 3,
    title: "Branding",
    description: "Creating cohesive visual identities and design systems.",
  },
  {
    id: 4,
    title: "Frontend",
    description: "Building UI with React, TypeScript and Tailwind.",
  },
];
