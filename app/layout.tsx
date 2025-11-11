import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Footer from "./components/Footer"
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
  title: "Ahmad Fareed | Product Designer & Frontend Developer",
  description:
    "Portfolio of Ahmad Fareed, a product designer and frontend developer crafting conversion-focused experiences with Figma, Next.js, and Tailwind CSS.",
  openGraph: {
    title: "Ahmad Fareed | Product Designer & Frontend Developer",
    description:
      "Explore selected projects, case studies, and services from Ahmad Fareed — combining UX strategy, product design, and modern frontend engineering.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ahmad Fareed | Product Designer & Frontend Developer",
    description:
      "Product designer and frontend developer turning complex problems into beautiful, high-performing digital products.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="flex min-h-screen flex-col">
          <div className="flex-1">{children}</div>
          <Footer />
        </div>
      </body>
    </html>
  );
}
