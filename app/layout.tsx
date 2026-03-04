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
        <header className="sticky top-0 z-50 border-b bg-white/80 backdrop-blur">
          <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
            <Link href="/" className="font-semibold">
              Mission Control
            </Link>
            <nav className="flex gap-4 text-sm">
              <Link className="text-zinc-700 hover:text-zinc-900" href="/projects">
                Projects
              </Link>
              <Link className="text-zinc-700 hover:text-zinc-900" href="/docs">
                Docs
              </Link>
              <Link className="text-zinc-700 hover:text-zinc-900" href="/memories">
                Memories
              </Link>
              <a className="text-zinc-700 hover:text-zinc-900" href="/logout">
                Logout
              </a>
            </nav>
          </div>
        </header>
        {children}
      </body>
    </html>
  );
}
