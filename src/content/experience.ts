import type { Experience } from "../types/content";
export const experiences: Experience[] = [
  {
    id: "apex-fintech-solutions",
    role: "Software Engineer Intern",
    company: "Apex Fintech Solutions",
    startDate: "Jun 2026",
    endDate: "Aug 2026",
    bullets: [
      "Built and launched a loan rerate tool for securities lenders, comparing contracts against market rates at scale.",
      "Designed and deployed a Go microservice on GKE backed by PostgreSQL and integrated through gRPC.",
      "Owned the React/TypeScript frontend, using direct user feedback to improve the interface.",
    ],
    tags: ["Go", "React", "TypeScript", "PostgreSQL", "GKE"],
  },
  {
    id: "recreaish",
    role: "Software Engineer Intern",
    company: "Recreaish",
    startDate: "Apr 2025",
    endDate: "Aug 2025",
    bullets: [
      "Built end-to-end payments infrastructure with Stripe Connect for onboarding, processing, and platform fee routing.",
      "Developed real-time game and notification updates with Socket.IO and event-driven JavaScript.",
      "Built backend systems in Go and PostgreSQL for game lifecycle management and concurrent jobs.",
    ],
    tags: ["Go", "PostgreSQL", "Stripe Connect", "Socket.IO"],
  },
  {
    id: "adventures-with-mr-math",
    role: "Lead Teacher Assistant",
    company: "Adventures with Mr. Math",
    startDate: "Aug 2019",
    endDate: "Jun 2024",
    bullets: [
      "Led logistics for nationwide competitive math events serving students across the country.",
      "Mentored students individually on advanced mathematical topics and problem-solving techniques.",
    ],
  },
];
