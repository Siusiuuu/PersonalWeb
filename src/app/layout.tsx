import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Hannah Liu | Computer Science Student & AI Developer",
  description:
    "Portfolio of Hannah Liu (LIU Siu Man) - Computer Science student at PolyU specializing in AI, LLM deployment, and full-stack web development. Passionate about building empathetic digital experiences.",
  keywords: [
    "Hannah Liu",
    "LIU Siu Man",
    "Computer Science",
    "AI Developer",
    "Full-Stack Developer",
    "LLM",
    "React",
    "Python",
    "Hong Kong",
    "PolyU",
  ],
  authors: [{ name: "Hannah Liu" }],
  openGraph: {
    title: "Hannah Liu | Computer Science Student & AI Developer",
    description:
      "Portfolio showcasing AI projects, web development work, and technical skills",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} scroll-smooth antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-screen bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-50 font-sans">
        {children}
      </body>
    </html>
  );
}
