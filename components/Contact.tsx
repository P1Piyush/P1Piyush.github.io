"use client";

import { motion } from "framer-motion";

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 14 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.4, delay },
});

export default function Contact() {
  return (
    <section
      id="contact"
      style={{
        borderTop: "1px solid #222",
        padding: "72px 0 80px",
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
            marginBottom: 32,
          }}
        >
          Contact
        </motion.h2>

        <motion.h3
          {...fadeUp(0.08)}
          style={{
            fontSize: "clamp(32px, 6vw, 52px)",
            fontWeight: 700,
            color: "#f0f0f0",
            letterSpacing: "-0.02em",
            marginBottom: 16,
          }}
        >
          Let&apos;s talk.
        </motion.h3>

        <motion.p
          {...fadeUp(0.16)}
          style={{
            fontSize: 15,
            color: "#666",
            maxWidth: 520,
            marginBottom: 36,
            lineHeight: 1.6,
          }}
        >
          I&apos;m open to AI/Automation engineering roles in Delhi NCR. If
          you&apos;re a recruiter sending a template DM, please don&apos;t.
        </motion.p>

        <motion.div
          {...fadeUp(0.24)}
          style={{ display: "flex", gap: 12, flexWrap: "wrap" }}
        >
          <a
            href="mailto:piyushma271@gmail.com"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              padding: "10px 20px",
              background: "#2563eb",
              color: "#fff",
              borderRadius: 4,
              fontSize: 14,
              fontWeight: 500,
              transition: "background 0.2s",
              border: "1px solid #2563eb",
            }}
            className="email-cta"
          >
            piyushma271@gmail.com
          </a>
          <a
            href="https://linkedin.com/in/piyushma271"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              padding: "10px 20px",
              background: "transparent",
              color: "#f0f0f0",
              borderRadius: 4,
              fontSize: 14,
              fontWeight: 500,
              transition: "border-color 0.2s, background 0.2s",
              border: "1px solid #333",
            }}
            className="linkedin-cta"
          >
            LinkedIn →
          </a>
        </motion.div>
      </div>

      <style jsx>{`
        .email-cta:hover {
          background: #1d4ed8;
          border-color: #1d4ed8;
        }
        .linkedin-cta:hover {
          border-color: #555;
          background: #161616;
        }
      `}</style>
    </section>
  );
}
