export interface StackItem {
  id: number;
  name: string;
  label: string;
}

export const stack: StackItem[] = [
  { id: 1, name: "React", label: "React" },
  { id: 2, name: "TypeScript", label: "TypeScript" },
  { id: 3, name: "Tailwind", label: "Tailwind CSS" },
  { id: 4, name: "Next.js", label: "Next.js" },
  { id: 5, name: "Figma", label: "Figma" },
  { id: 6, name: "Node.js", label: "Node.js" },
];
