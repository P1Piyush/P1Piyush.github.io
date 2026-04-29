import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Piyush — Full-Stack AI Engineer",
  description:
    "Full-Stack AI Engineer based in Delhi, India. LLM Integration, MLOps, production systems.",
  openGraph: {
    title: "Piyush — Full-Stack AI Engineer",
    description:
      "Full-Stack AI Engineer based in Delhi, India. LLM Integration, MLOps, production systems.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
