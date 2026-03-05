import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Mission Control",
  description: "Mission Control dashboard",
};

import Link from "next/link";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <div className="min-h-screen">
          <header className="sticky top-0 z-50 border-b border-white/10 bg-black/20 backdrop-blur">
            <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3">
              <Link href="/" className="font-semibold tracking-tight text-zinc-100">
                Mission Control
              </Link>
              <div className="text-xs text-zinc-400">
                <span className="text-amber-300">•</span> systems online (manual)
              </div>
            </div>
          </header>

          <div className="mx-auto grid max-w-7xl grid-cols-1 gap-4 px-4 py-4 lg:grid-cols-[240px_1fr]">
            <aside className="rounded-2xl border border-white/10 bg-white/5 p-3">
              <div className="px-2 pb-2 text-xs font-semibold uppercase tracking-wider text-zinc-400">
                Navigation
              </div>
              <nav className="space-y-1 text-sm">
                <Link className="block rounded-lg px-2 py-2 text-zinc-200 hover:bg-white/5" href="/">
                  Overview
                </Link>
                <Link className="block rounded-lg px-2 py-2 text-zinc-200 hover:bg-white/5" href="/projects">
                  Projects
                </Link>
                <Link className="block rounded-lg px-2 py-2 text-zinc-200 hover:bg-white/5" href="/docs">
                  Docs
                </Link>
                <Link className="block rounded-lg px-2 py-2 text-zinc-200 hover:bg-white/5" href="/memories">
                  Memories
                </Link>
                <Link className="block rounded-lg px-2 py-2 text-zinc-200 hover:bg-white/5" href="/tasks">
                  Tasks
                </Link>
              </nav>

              <div className="mt-4 rounded-xl border border-white/10 bg-zinc-950/40 p-3">
                <div className="text-xs font-semibold text-zinc-300">Quick Links</div>
                <div className="mt-2 space-y-1 text-xs">
                  <a className="block text-zinc-300 hover:text-white" href="https://job-hunter-bot-two.vercel.app" target="_blank" rel="noreferrer">
                    Job Hunter Dashboard
                  </a>
                  <a className="block text-zinc-300 hover:text-white" href="https://myspace-resume.vercel.app" target="_blank" rel="noreferrer">
                    MySpace Resume
                  </a>
                </div>
              </div>
            </aside>

            <main>{children}</main>
          </div>
        </div>
      </body>
    </html>
  );
}
