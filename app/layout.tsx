import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "./globals.css";

export const metadata: Metadata = {
  title: "Conduit — Booking Infrastructure for the Agent Economy",
  description:
    "Make your business bookable by every AI agent on the planet. One integration. Connect your existing booking system to ChatGPT, Claude, Perplexity, and every AI assistant.",
  keywords: [
    "AI booking",
    "agent economy",
    "appointment scheduling",
    "MCP server",
    "ChatGPT booking",
    "Claude booking",
  ],
  openGraph: {
    title: "Conduit — Booking Infrastructure for the Agent Economy",
    description:
      "Make your business bookable by every AI agent on the planet. One integration.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${GeistSans.variable} ${GeistMono.variable} font-sans`}
      >
        {children}
      </body>
    </html>
  );
}
