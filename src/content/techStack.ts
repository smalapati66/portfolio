import type { TechStack } from "../types/content";
export const techStack: TechStack = {
  categories: [
    {
      label: "Languages",
      items: [
        "Python",
        "Go",
        "TypeScript",
        "JavaScript",
        "Rust",
        "C",
        "Java",
        "SQL",
      ],
    },
    {
      label: "Frameworks & Libraries",
      items: [
        "React",
        "FastAPI",
        "Flask",
        "WebSockets",
        "gRPC",
        "AWS",
        "Google Cloud Platform",
      ],
    },
    {
      label: "Data & Infrastructure",
      items: [
        "PostgreSQL",
        "Neo4j",
        "GKE",
        "Terraform",
        "Docker",
        "Kubernetes",
        "Redis",
      ],
    },
    {
      label: "Concepts",
      items: ["Database Design", "Event-Driven Systems", "Microservices"],
    },
  ],
};
