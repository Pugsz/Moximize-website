import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import "./globals.css";

const openSans = Open_Sans({
  subsets: ["latin"],
  variable: "--font-open-sans",
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://moximize.net"),
  title: "Moximize — HubSpot Partner & AI-Powered B2B Growth Agency",
  description:
    "Moximize helps B2B companies scale through AI-powered lead generation, HubSpot CRM implementation, and outbound marketing. 30+ companies helped. 5+ years of experience.",
  keywords: [
    "HubSpot partner", "B2B marketing agency", "CRM implementation",
    "outbound marketing", "AI lead generation", "revenue operations",
    "HubSpot CRM", "B2B growth agency", "cold email", "LinkedIn outbound",
  ],
  authors: [{ name: "Moximize", url: "https://moximize.net" }],
  creator: "Moximize",
  alternates: {
    canonical: "https://moximize.net",
  },
  openGraph: {
    title: "Moximize — HubSpot Partner & AI-Powered B2B Growth Agency",
    description:
      "AI-powered lead generation, HubSpot CRM implementation, and outbound marketing for B2B companies. Book a free discovery call.",
    url: "https://moximize.net",
    siteName: "Moximize",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Moximize — HubSpot Partner & AI-Powered B2B Growth Agency",
    description:
      "AI-powered lead generation, HubSpot CRM, and outbound marketing for B2B companies.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={openSans.variable}>
      <body>{children}</body>
    </html>
  );
}
