// src/app/layout.tsx

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

// Import Leaflet's CSS to ensure maps render correctly
import "leaflet/dist/leaflet.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Greenify",
  description: "Monitor and manage building emissions sustainably with Greenify.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} text-stone-950 bg-stone-100`}>
        {children}
      </body>
    </html>
  );
}