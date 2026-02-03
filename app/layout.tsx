import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import SmoothScroller from "@/components/SmoothScroller";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" });

export const metadata: Metadata = {
  title: "Inspire Portfolio",
  description: "Multidisciplinary designer portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.variable} ${playfair.variable} bg-background text-foreground antialiased`}>
        <SmoothScroller />
        {children}
      </body>
    </html>
  );
}
