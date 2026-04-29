"use client";

export default function Footer() {
  return (
    <footer
      style={{
        borderTop: "1px solid #1a1a1a",
        padding: "20px 24px",
      }}
    >
      <div
        style={{
          maxWidth: 1100,
          margin: "0 auto",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <p
          style={{
            fontFamily: "JetBrains Mono, monospace",
            fontSize: 12,
            color: "#333",
          }}
        >
          Piyush · 2026 · Built with Next.js + 21st.dev ·{" "}
          <a
            href="https://github.com/P1Piyush"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "#444", transition: "color 0.2s" }}
            className="footer-link"
          >
            github.com/P1Piyush
          </a>
        </p>
      </div>

      <style jsx>{`
        .footer-link:hover {
          color: #888;
        }
      `}</style>
    </footer>
  );
}
