import type { Project } from "../types/project.types";

export const dummyProjectData: Project[] = [
  {
    id: "1",
    title: "E-Commerce Microservices Architecture",
    description:
      "A highly scalable, fault-tolerant e-commerce backend built using a microservices architecture. It handles heavy traffic loads, manages distributed transactions cleanly, and ensures eventual consistency across services.",
    technologies: [
      "Node.js",
      "TypeScript",
      "Docker",
      "Kubernetes",
      "RabbitMQ",
      "Redis",
      "PostgreSQL",
    ],
    image:
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&auto=format&fit=crop&q=60",
    backendRepo: "https://github.com/username/ecommerce-backend",
    liveLink: "https://api.ecommerce-demo.com/docs",
    features: [
      "Event-driven communication using RabbitMQ service bus.",
      "Distributed caching layers using Redis to optimize read-heavy database routes.",
      "Robust API Gateway handling authentication, rate limiting, and dynamic routing.",
    ],
    impactAndVision:
      "Reduced API latency by 40% and improved system reliability during high-concurrency scenarios. Designed with the vision of providing an open-source blueprint for enterprise-grade backend scalability.",
  },
  {
    id: "2",
    title: "Real-Time Collaborative Analytics Engine",
    description:
      "A real-time data ingestion and analytics pipeline capable of processing streaming data and updating live dashboards with sub-second latency.",
    technologies: [
      "Python",
      "FastAPI",
      "Apache Kafka",
      "WebSockets",
      "MongoDB",
      "InfluxDB",
    ],
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop&q=60",
    frontendRepo: "https://github.com/username/analytics-ui",
    backendRepo: "https://github.com/username/analytics-engine",
    liveLink: "https://analytics-demo.com",
    features: [
      "Real-time bi-directional data streaming over WebSockets.",
      "Time-series data optimization utilizing InfluxDB for metric tracking.",
      "Scalable message ingestion queues via Apache Kafka brokers.",
    ],
    impactAndVision:
      "Empowered internal business teams to monitor vital system metrics dynamically, preventing system overloads before they reached critical thresholds.",
  },
];
