"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

interface Project {
  name: string;
  year: string;
  tags: string[];
  description: string;
  github: string;
  live?: string;
}

const projects: Project[] = [
  {
    name: "MCP Server Suite",
    year: "2025",
    tags: [
      "Python",
      "MCP",
      "AWS",
      "Kubernetes",
      "Slack",
      "MongoDB",
      "Redis",
      "Docker",
      "Jira",
      "Notion",
    ],
    description:
      "8 production MCP servers enabling AI agents to interface with cloud infrastructure. Reduced manual ops tasks ~60%.",
    github: "https://github.com/P1Piyush",
  },
  {
    name: "AccentShift",
    year: "2025",
    tags: ["Next.js", "Fastify", "Deepgram", "ElevenLabs", "WebSocket"],
    description:
      "Real-time accent translation pipeline — STT → dialect transform → TTS in under 2 seconds. IEEE NLPAI 2026 paper submitted.",
    github: "https://github.com/P1Piyush",
  },
  {
    name: "XAUUSD Institutional Trading System",
    year: "2025–2026",
    tags: ["Pine Script v6", "Python", "MetaTrader5", "Flask", "ICT/SMC", "ML"],
    description:
      "End-to-end algo trading: TradingView → webhook → MT5 execution. 62.5% win rate, 2.90 profit factor on live demo.",
    github: "https://github.com/P1Piyush/XAUUSD-Trading-Bots",
  },
  {
    name: "AI Resume Analyzer",
    year: "2025",
    tags: ["Next.js 14", "TypeScript", "Groq", "Llama 3.3 70B", "Vercel"],
    description:
      "ATS scoring, keyword gap analysis, bullet rewrites, cover letter gen. Built with structured prompt engineering.",
    github: "https://github.com/P1Piyush/ai-resume-analyzer",
    live: "https://ai-resume-analyzerz.vercel.app",
  },
  {
    name: "LLM Developer Toolchain",
    year: "2025",
    tags: ["Python", "CLI", "Go", "LLM APIs"],
    description:
      "prompt-optimizer-cli, llm-cost-estimator, context-compressor, auto-refactor-agent. Practical LLM cost and quality tooling.",
    github: "https://github.com/P1Piyush",
  },
  {
    name: "n8n Agentic Lead Gen Pipeline",
    year: "2024",
    tags: ["n8n", "LangChain", "REST APIs", "Google Sheets"],
    description:
      "Multi-source data ingestion → LLM enrichment → automated reporting for Delhi SMEs. Cut manual research ~70%.",
    github: "https://github.com/P1Piyush",
  },
];

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 14 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.4, delay },
});

function ProjectCard({ project, delay }: { project: Project; delay: number }) {
  return (
    <motion.div
      {...fadeUp(delay)}
      style={{
        background: "#111",
        border: "1px solid #222",
        borderRadius: 6,
        padding: "24px",
        display: "flex",
        flexDirection: "column",
        gap: 12,
        position: "relative",
        transition: "border-color 0.2s, transform 0.2s",
        cursor: "default",
      }}
      whileHover={{
        y: -3,
        borderColor: "#2563eb",
        transition: { duration: 0.15 },
      }}
    >
      {/* Top row */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
        }}
      >
        <div>
          <h3
            style={{
              fontWeight: 600,
              fontSize: 15,
              color: "#f0f0f0",
              lineHeight: 1.3,
            }}
          >
            {project.name}
          </h3>
          <span
            style={{
              fontFamily: "JetBrains Mono, monospace",
              fontSize: 11,
              color: "#444",
            }}
          >
            {project.year}
          </span>
        </div>
        <div style={{ display: "flex", gap: 10, flexShrink: 0 }}>
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#60a5fa" }}
              title="Live demo"
            >
              <ExternalLink size={15} />
            </a>
          )}
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "#666" }}
            title="GitHub"
            className="gh-icon"
          >
            <svg
              width="15"
              height="15"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
            </svg>
          </a>
        </div>
      </div>

      {/* Tags */}
      <div style={{ display: "flex", flexWrap: "wrap", gap: 5 }}>
        {project.tags.map((tag) => (
          <span key={tag} className="tag">
            {tag}
          </span>
        ))}
      </div>

      {/* Description */}
      <p style={{ fontSize: 14, color: "#888", lineHeight: 1.6 }}>
        {project.description}
      </p>

      <style jsx>{`
        .gh-icon:hover {
          color: #f0f0f0;
        }
      `}</style>
    </motion.div>
  );
}

export default function Projects() {
  return (
    <section
      id="projects"
      style={{
        borderTop: "1px solid #222",
        padding: "72px 0",
      }}
    >
      <div
        style={{
          maxWidth: 1100,
          margin: "0 auto",
          padding: "0 24px",
        }}
      >
        <motion.h2
          {...fadeUp(0)}
          style={{
            fontSize: 12,
            fontFamily: "JetBrains Mono, monospace",
            color: "#666",
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            marginBottom: 40,
          }}
        >
          Featured Projects
        </motion.h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
            gap: 16,
          }}
          className="projects-grid"
        >
          {projects.map((project, i) => (
            <ProjectCard
              key={project.name}
              project={project}
              delay={i * 0.08}
            />
          ))}
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 768px) {
          .projects-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
