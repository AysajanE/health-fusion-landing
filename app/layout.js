import { Urbanist } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const urbanist = Urbanist({
  variable: "--font-urbanist",
  subsets: ["latin"],
});

const SITE_URL = "https://healthfusion360.ai";
const SITE_NAME = "Health Fusion 360";
const SITE_DESCRIPTION =
  "Predict your health and shape your future with AI-powered tracking, daily personalized tips, and holistic wellness insights.";

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_NAME} — Smarter Tracking for a Healthier You`,
    template: `%s | ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  keywords: [
    "health tracking",
    "AI health",
    "fitness app",
    "wellness",
    "HealthKit",
    "personal health insights",
  ],
  authors: [{ name: SITE_NAME }],
  icons: {
    icon: "/favicon.ico",
    apple: "/logo.png",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: `${SITE_NAME} — Smarter Tracking for a Healthier You`,
    description: SITE_DESCRIPTION,
    images: [
      {
        // TODO: replace with a dedicated 1200x630 OG image
        url: "/logo.png",
        width: 512,
        height: 512,
        alt: SITE_NAME,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE_NAME} — Smarter Tracking for a Healthier You`,
    description: SITE_DESCRIPTION,
    images: ["/logo.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${urbanist.variable} antialiased`}
      >
        <div className="noise-overlay"></div>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
