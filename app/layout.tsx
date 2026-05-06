import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Resume Keyword Matcher – Match Resumes to Jobs with AI",
  description: "AI-powered resume analysis for HR managers. Score resumes against job descriptions, optimize for ATS, and hire faster."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="30161d1b-39be-4cb7-865b-bccd6b72a732"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  );
}
