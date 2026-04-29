"use client";

import { motion } from "framer-motion";

export default function GitHubStats() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      style={{
        borderTop: "1px solid #222",
        borderBottom: "1px solid #222",
        padding: "20px 24px",
        background: "#0d0d0d",
      }}
    >
      <div
        style={{
          maxWidth: 1100,
          margin: "0 auto",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: 12,
        }}
      >
        <p
          style={{
            fontFamily: "JetBrains Mono, monospace",
            fontSize: 13,
            color: "#555",
          }}
        >
          122 public repositories &nbsp;·&nbsp; Python &nbsp;·&nbsp; TypeScript
          &nbsp;·&nbsp; Go &nbsp;·&nbsp; Rust &nbsp;·&nbsp; Pine Script
        </p>
        <a
          href="https://github.com/P1Piyush"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            fontFamily: "JetBrains Mono, monospace",
            fontSize: 12,
            color: "#444",
            transition: "color 0.2s",
          }}
          className="gh-stats-link"
        >
          github.com/P1Piyush →
        </a>
      </div>

      <style jsx>{`
        .gh-stats-link:hover {
          color: #f0f0f0;
        }
      `}</style>
    </motion.div>
  );
}
