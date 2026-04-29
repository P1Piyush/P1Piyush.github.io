"use client";

import { motion } from "framer-motion";

export default function Nav() {
  return (
    <motion.nav
      initial={{ opacity: 0, y: -8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      style={{
        position: "sticky",
        top: 0,
        zIndex: 50,
        borderBottom: "1px solid #222",
        backdropFilter: "blur(12px)",
        backgroundColor: "rgba(8,8,8,0.85)",
      }}
    >
      <div
        style={{
          maxWidth: 1100,
          margin: "0 auto",
          padding: "0 24px",
          height: 56,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {/* Left: nav links */}
        <div style={{ display: "flex", gap: 28 }}>
          {["About", "Projects", "GitHub"].map((item) => {
            const href =
              item === "GitHub"
                ? "https://github.com/P1Piyush"
                : `#${item.toLowerCase()}`;
            const external = item === "GitHub";
            return (
              <a
                key={item}
                href={href}
                target={external ? "_blank" : undefined}
                rel={external ? "noopener noreferrer" : undefined}
                style={{
                  fontSize: 14,
                  color: "#666",
                  position: "relative",
                  padding: "2px 0",
                  transition: "color 0.2s",
                }}
                className="nav-link"
              >
                {item}
              </a>
            );
          })}
        </div>

        {/* Right: open to work + email */}
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 7,
              fontSize: 13,
              color: "#4ade80",
              fontFamily: "JetBrains Mono, monospace",
            }}
          >
            <span
              style={{
                width: 7,
                height: 7,
                borderRadius: "50%",
                background: "#4ade80",
                boxShadow: "0 0 6px #4ade80",
                display: "inline-block",
              }}
            />
            Open to work
          </div>
          <a
            href="mailto:piyushma271@gmail.com"
            style={{
              fontSize: 13,
              padding: "5px 14px",
              border: "1px solid #222",
              borderRadius: 4,
              color: "#f0f0f0",
              background: "#111",
              transition: "border-color 0.2s, background 0.2s",
              fontFamily: "JetBrains Mono, monospace",
            }}
            className="email-btn"
          >
            piyushma271@gmail.com
          </a>
        </div>
      </div>

      <style jsx>{`
        .nav-link::after {
          content: "";
          position: absolute;
          bottom: -1px;
          left: 0;
          width: 0;
          height: 1px;
          background: #f0f0f0;
          transition: width 0.2s ease;
        }
        .nav-link:hover {
          color: #f0f0f0;
        }
        .nav-link:hover::after {
          width: 100%;
        }
        .email-btn:hover {
          border-color: #2563eb;
          background: rgba(37, 99, 235, 0.06);
        }
      `}</style>
    </motion.nav>
  );
}
