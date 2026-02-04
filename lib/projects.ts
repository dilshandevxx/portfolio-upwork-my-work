export type ProjectCategory = "Website Development" | "Frontend Development" | "Backend Development" | "Full-Stack Development" | "AI-Powered Applications" | "All";

export interface Project {
  id: string;
  title: string;
  category: ProjectCategory;
  description: string;
  longDescription?: string;
  image: string;
  tags: string[];
  year: string;
  link?: string;
  github?: string;
}

export const projects: Project[] = [
  {
    id: "1",
    title: "AI Image Generator",
    category: "AI-Powered Applications",
    description: "A powerful SaaS application that uses Stable Diffusion to generate high-quality images from text prompts.",
    longDescription: "Built with Next.js 14 and Python FastAPI backend, this application integrates deeply with Stability AI's API. It features a credit system using Stripe, user authentication with Clerk, and a responsive gallery view.",
    image: "/images/ai-saas.png",
    tags: ["Next.js", "Python", "FastAPI", "Stripe", "Tailwind CSS"],
    year: "2024",
    link: "#",
    github: "#"
  },
  {
    id: "2",
    title: "E-Commerce Dashboard",
    category: "Full-Stack Development",
    description: "Comprehensive admin dashboard for managing products, orders, and analytics in real-time.",
    longDescription: "A full-stack solution featuring a React frontend and Node.js/Express backend. Implements complex data visualization with Recharts, real-time socket updates for orders, and role-based access control.",
    image: "/images/ecommerce.png",
    tags: ["React", "Node.js", "PostgreSQL", "Socket.io", "Recharts"],
    year: "2023",
    link: "#",
    github: "#"
  },
  {
    id: "3",
    title: "Portfolio 2024",
    category: "Website Development",
    description: "My personal portfolio website featuring award-winning animations and a minimal dark aesthetic.",
    longDescription: "Designed to showcase credibility and skill. Uses Framer Motion for complex animations, Lenis for smooth scrolling, and a custom design system built with Tailwind.",
    image: "/images/portfolio-abstract.png",
    tags: ["Next.js", "Framer Motion", "GSAP", "Tailwind"],
    year: "2024",
    link: "#",
    github: "#"
  },
  {
    id: "4",
    title: "Fintech Mobile App",
    category: "Frontend Development",
    description: "A pixel-perfect implementation of a modern banking interface with smooth micro-interactions.",
    longDescription: "Focusing heavily on UI/UX, this project implements complex gestures and transitions using React Native and Reanimated. It features dark mode support and biometric authentication flows.",
    image: "/images/fintech-app.png",
    tags: ["React Native", "TypeScript", "Reanimated", "Figma"],
    year: "2023",
    link: "#",
    github: "#"
  },
  {
    id: "5",
    title: "API Gateway Service",
    category: "Backend Development",
    description: "High-performance API gateway handling rate limiting, caching, and request routing.",
    longDescription: "Built with Go for maximum concurrency. Handles up to 10k requests per second with Redis caching layer and JWT validation middleware.",
    image: "/images/api-gateway.png",
    tags: ["Go", "Redis", "Docker", "Kubernetes", "AWS"],
    year: "2024",
    link: "#",
    github: "#"
  }
];

export const categories: ProjectCategory[] = [
  "All",
  "Website Development",
  "Frontend Development",
  "Backend Development",
  "Full-Stack Development",
  "AI-Powered Applications"
];
