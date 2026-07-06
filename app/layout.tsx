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
  title: "Moximize — AI-Powered Lead Generation for B2B Teams",
  description:
    "Moximize runs AI-powered lead generation for B2B teams — outbound prospecting, inbound content, custom AI builds, and revenue operations. $12M+ pipeline influenced.",
  keywords: [
    "AI lead generation B2B", "outbound marketing AI", "inbound marketing AI",
    "HubSpot partner", "B2B marketing agency", "CRM implementation",
    "HubSpot AI implementation", "revenue operations", "fractional RevOps",
    "cold email agency", "LinkedIn outbound", "B2B growth agency",
    "HubSpot certified partner", "AI-powered outbound", "B2B inbound marketing",
  ],
  authors: [{ name: "Moximize", url: "https://moximize.net" }],
  creator: "Moximize",
  alternates: { canonical: "https://moximize.net" },
  openGraph: {
    title: "Moximize — AI-Powered Lead Generation for B2B Teams",
    description:
      "AI-powered lead generation for B2B teams. Outbound, inbound, custom AI builds, and revenue operations. $12M+ pipeline influenced.",
    url: "https://moximize.net",
    siteName: "Moximize",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Moximize — AI-Powered Lead Generation for B2B Teams",
    description:
      "AI-powered lead generation for B2B teams. Outbound, inbound, and revenue operations. $12M+ pipeline influenced.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
};

const schemaOrg = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Moximize",
  url: "https://moximize.net",
  logo: "https://moximize.net/logo.png",
  description:
    "AI-powered lead generation agency specialising in outbound marketing, inbound content, custom AI builds, and revenue operations for B2B teams.",
  telephone: "+18633407702",
  email: "nic@moximize.net",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Balanga City",
    addressRegion: "Bataan",
    addressCountry: "PH",
  },
  areaServed: "Worldwide",
  priceRange: "$$$",
  sameAs: [
    "https://linkedin.com/company/moximize",
    "https://facebook.com/moximizeco",
    "https://instagram.com/moximize.co",
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={openSans.variable}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaOrg) }}
        />
      </head>
      <body>
        {children}
        {/* HubSpot chat widget */}
        <script
          type="text/javascript"
          id="hs-script-loader"
          async
          defer
          src="//js.hs-scripts.com/46052923.js"
        />
      </body>
    </html>
  );
}
