"use client";

import { motion } from "framer-motion";

const skills: Record<string, string[]> = {
  "AI/LLM": [
    "LangChain",
    "Groq API",
    "Llama 3.3 70B",
    "RAG",
    "Prompt Eng",
    "MCP",
    "Deepgram",
    "ElevenLabs",
  ],
  MLOps: [
    "Docker",
    "CI/CD",
    "n8n",
    "MT5 API",
    "Webhooks",
    "Kubernetes",
  ],
  Languages: ["Python", "TypeScript", "Go", "Rust", "C++", "Pine Script"],
  Web: ["Next.js 14", "Fastify", "FastAPI", "GraphQL", "React"],
  Data: ["PostgreSQL", "MongoDB", "Redis", "ChromaDB"],
};

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 14 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.4, delay },
});

export default function About() {
  return (
    <section
      id="about"
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
          About
        </motion.h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 60,
          }}
          className="about-grid"
        >
          {/* Bio */}
          <motion.div {...fadeUp(0.08)}>
            <p
              style={{
                color: "#ccc",
                fontSize: 15,
                lineHeight: 1.75,
                whiteSpace: "pre-line",
              }}
            >
              {`I build things that run in production. Currently finishing B.Tech CS at Sharda University while interning as a Full-Stack Developer at Generation Entertainment building an Event Booking Platform.

I got tired of tutorial projects and started shipping real things — a live XAUUSD trading bot (62.5% win rate), 8 MCP server integrations, an IEEE-submitted accent translation research paper, and an AI resume analyzer with real users.

I write Python, TypeScript, Go, and Rust. I care about latency, correctness, and systems that don't break at 3am.`}
            </p>
          </motion.div>

          {/* Skills grid */}
          <motion.div {...fadeUp(0.16)}>
            <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
              {Object.entries(skills).map(([category, tags], i) => (
                <motion.div
                  key={category}
                  {...fadeUp(0.16 + i * 0.06)}
                >
                  <p
                    style={{
                      fontFamily: "JetBrains Mono, monospace",
                      fontSize: 11,
                      color: "#444",
                      letterSpacing: "0.1em",
                      textTransform: "uppercase",
                      marginBottom: 8,
                    }}
                  >
                    {category}
                  </p>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                    {tags.map((tag) => (
                      <span key={tag} className="tag">
                        {tag}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 768px) {
          .about-grid {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
          }
        }
      `}</style>
    </section>
  );
}
