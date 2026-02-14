import type { Metadata } from "next";
import { Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Fusionstek - External Attack Surface Management & Security Assurance",
  description: "EASM that looks at your surface the way attackers do—same logic, mindset, and timing. We verify what’s exploitable before we escalate: a short, evidence-backed list, not raw alerts. Complete external attack surface management with audit-ready evidence for security teams, compliance, and insurers.",
  generator: "Next.js",
  icons: {
    icon: "/fusion%20logo.jpg",
    shortcut: "/fusion%20logo.jpg",
    apple: "/fusion%20logo.jpg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/fusion%20logo.jpg" type="image/jpeg" />
        <link rel="apple-touch-icon" href="/fusion%20logo.jpg" />
      </head>
      <body
        className={`${geistMono.variable} antialiased`}
        suppressHydrationWarning
      >
        <Navbar />
        <main className="min-h-screen pt-24 md:pt-28" suppressHydrationWarning>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
