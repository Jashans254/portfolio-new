import type { Metadata } from "next";
import "@/styles/globals.css";

export const metadata: Metadata = {
  title: "Jashanpreet Singh — Full Stack & AI Engineer",
  description: "Portfolio of Jashanpreet Singh — full-stack developer, AI builder, and MERN specialist.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" data-theme="dark" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="noise-overlay antialiased">{children}</body>
    </html> 
  );
}
