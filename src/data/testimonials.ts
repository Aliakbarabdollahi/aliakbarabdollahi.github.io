export interface Testimonial {
  id: number;
  name: string;
  role: string;
  message: string;
}

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Cody Fisher",
    role: "Product Manager",
    message:
      "Working with Aliakbar was seamless. The interfaces he designed were clean, modern and easy to ship.",
  },
  {
    id: 2,
    name: "Jane Cooper",
    role: "Founder, SaaS Startup",
    message:
      "He quickly understood our product and turned complex flows into simple, intuitive user journeys.",
  },
];
