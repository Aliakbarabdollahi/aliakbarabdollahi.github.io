export interface Testimonial {
  id: number;
  name: string;
  title: string;
  company: string;
  message: string;
  rating: number; // 4 or 5
  avatar: string; // لینک avatar از اینترنت
}

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Sarah Johnson",
    title: "Creative Director",
    company: "Digital Innovations Co.",
    message:
      "Working with this designer elevated our entire brand identity. The attention to detail and creative solutions were exceptional.",
    rating: 5,
    avatar: "https://i.pravatar.cc/150?img=1",
  },
  {
    id: 2,
    name: "Michael Chen",
    title: "CEO",
    company: "TechFlow Solutions",
    message:
      "Outstanding work on our product redesign. The UI/UX improvements resulted in a 40% increase in user engagement.",
    rating: 5,
    avatar: "https://i.pravatar.cc/150?img=2",
  },
  {
    id: 3,
    name: "Emma Williams",
    title: "Product Manager",
    company: "Creative Studios Inc.",
    message:
      "Highly professional and responsive to feedback. Delivered project on time with amazing results that exceeded expectations.",
    rating: 4,
    avatar: "https://i.pravatar.cc/150?img=3",
  },
  {
    id: 4,
    name: "David Rodriguez",
    title: "Founder",
    company: "StartupHub Media",
    message:
      "The motion graphics work was incredible. Our marketing videos now get triple the views thanks to this talent.",
    rating: 5,
    avatar: "https://i.pravatar.cc/150?img=4",
  },
  {
    id: 5,
    name: "Lisa Anderson",
    title: "Head of Design",
    company: "Global Brand Agency",
    message:
      "Exceptional skills in both UI design and video editing. A true professional who understands client needs perfectly.",
    rating: 5,
    avatar: "https://i.pravatar.cc/150?img=5",
  },
  {
    id: 6,
    name: "James Thompson",
    title: "Director",
    company: "Visual Content Ltd.",
    message:
      "Fantastic attention to typography and color theory. The design system created was scalable and intuitive.",
    rating: 4,
    avatar: "https://i.pravatar.cc/150?img=6",
  },
  {
    id: 7,
    name: "Priya Patel",
    title: "Marketing Lead",
    company: "Digital Strategy Group",
    message:
      "Transformed our brand presence completely. The designs are modern, functional, and user-centric. Highly recommended!",
    rating: 5,
    avatar: "https://i.pravatar.cc/150?img=7",
  },
  {
    id: 8,
    name: "Christopher Lee",
    title: "VP of Product",
    company: "Innovation Labs",
    message:
      "Great collaboration and creative problem-solving. Delivered stunning visuals that perfectly matched our vision.",
    rating: 4,
    avatar: "https://i.pravatar.cc/150?img=8",
  },
  {
    id: 9,
    name: "Natasha Volkov",
    title: "Brand Manager",
    company: "Luxury Brands Collective",
    message:
      "The motion design work was phenomenal. Every frame was carefully crafted to convey our brand message perfectly.",
    rating: 5,
    avatar: "https://i.pravatar.cc/150?img=9",
  },
  {
    id: 10,
    name: "Ahmed Hassan",
    title: "Creative Strategist",
    company: "Future Vision Studios",
    message:
      "Professional, talented, and easy to work with. The delivered design system exceeded all our expectations and timelines.",
    rating: 5,
    avatar: "https://i.pravatar.cc/150?img=10",
  },
];
