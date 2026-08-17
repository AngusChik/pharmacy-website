import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "PharmSync — Pharmacy Inventory Management & POS Software",
  description:
    "Track pharmacy inventory in real time, automate reorders, and manage sales across every location with PharmSync's all-in-one pharmacy POS system.",
  openGraph: {
    title: "PharmSync — Pharmacy Inventory Management & POS Software",
    description:
      "Track pharmacy inventory in real time, automate reorders, and manage sales across every location.",
    url: "https://pharmsync.com",
    siteName: "PharmSync",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "PharmSync",
    description:
      "Track pharmacy inventory in real time, automate reorders, and manage sales across every location.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
