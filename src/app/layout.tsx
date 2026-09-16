import type { Metadata } from "next";
import { EB_Garamond, Inter } from "next/font/google";
import "./globals.css";
import { business, siteFlags } from "@/lib/site-config";

const ebGaramond = EB_Garamond({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
  weight: ["500", "600"],
  style: ["normal", "italic"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: siteFlags.siteUrl ? new URL(siteFlags.siteUrl) : undefined,
  title: "Christian's Cleaning Company | Home Cleaning in the Hudson Valley",
  description:
    "Professional home cleaning serving Dutchess, Putnam, Westchester, Ulster, and Orange counties in New York's Hudson Valley. Request a free quote today.",
  robots: siteFlags.allowIndexing
    ? { index: true, follow: true }
    : { index: false, follow: false },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${ebGaramond.variable} ${inter.variable}`}>
      <body className="font-sans antialiased overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
