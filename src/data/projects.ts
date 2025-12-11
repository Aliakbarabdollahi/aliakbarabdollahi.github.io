export interface Project {
  id: number;
  title: string;
  subtitle: string;
  year: string;
  tags: string[];
  image: string;        // مسیر تصویر
  linkedinUrl: string;  // لینک پست یا مقاله لینکدین
}

export const projects: Project[] = [
  {
    id: 1,
    title: "Dashboard Socials",
    subtitle: "Social media analytics dashboard UI",
    year: "2024",
    tags: ["UI/UX", "Dashboard"],
    image: "/images/projects/p1.png",
    linkedinUrl: "https://www.linkedin.com/posts/aliakbar-abdollahi-508b92174_aliakbaruiuxdev-uiuxdev-ui-activity-7354770906981793792-yrns?utm_source=share&utm_medium=member_desktop&rcm=ACoAACl3LVgBBXh5M8xj4vNO_0mE2V19uMgSO-E",
  },
  {
    id: 2,
    title: "Sales Analytics UI",
    subtitle: "Sales analytics dashboard concept",
    year: "2024",
    tags: ["Analytics", "Product"],
    image: "/images/projects/p2.png",
    linkedinUrl: "https://www.linkedin.com/posts/aliakbar-abdollahi-508b92174_enter-your-text-hereusing-this-sales-analytics-activity-7355257129731080193-h-Od?utm_source=share&utm_medium=member_desktop&rcm=ACoAACl3LVgBBXh5M8xj4vNO_0mE2V19uMgSO-E",
  },
  {
    id: 3,
    title: "UI Motion Study",
    subtitle: "Micro‑interactions for product UI",
    year: "2024",
    tags: ["Motion", "UI"],
    image: "/images/projects/p3.png",
    linkedinUrl: "https://www.linkedin.com/posts/aliakbar-abdollahi-508b92174_ui-ux-uiux-activity-7357425675907006464-l1El?utm_source=share&utm_medium=member_desktop&rcm=ACoAACl3LVgBBXh5M8xj4vNO_0mE2V19uMgSO-E",
  },
  {
    id: 4,
    title: "Payou Wallet App",
    subtitle: "Digital wallet dark UI kit",
    year: "2024",
    tags: ["Mobile", "Dark UI"],
    image: "/images/projects/p4.png",
    linkedinUrl: "https://www.linkedin.com/posts/aliakbar-abdollahi-508b92174_ui-ux-uiux-activity-7360761353780850688-AlP6?utm_source=share&utm_medium=member_desktop&rcm=ACoAACl3LVgBBXh5M8xj4vNO_0mE2V19uMgSO-E",
  },
  {
    id: 5,
    title: "Meal Ordering App",
    subtitle: "Food ordering mobile app UI",
    year: "2023",
    tags: ["Mobile", "Product"],
    image: "/images/projects/p5.png",
    linkedinUrl: "https://www.linkedin.com/posts/aliakbar-abdollahi-508b92174_ui-ux-uiux-activity-7360766291059585024-GFVk?utm_source=share&utm_medium=member_desktop&rcm=ACoAACl3LVgBBXh5M8xj4vNO_0mE2V19uMgSO-E",
  },
  {
    id: 6,
    title: "AI Chatbot UI",
    subtitle: "Chat interface for AI assistant",
    year: "2023",
    tags: ["AI", "UI Design"],
    image: "/images/projects/p6.png",
    linkedinUrl: "https://www.linkedin.com/posts/aliakbar-abdollahi-508b92174_ui-ux-uiux-activity-7362151771781152768-Vj9d?utm_source=share&utm_medium=member_desktop&rcm=ACoAACl3LVgBBXh5M8xj4vNO_0mE2V19uMgSO-E",
  },
];
