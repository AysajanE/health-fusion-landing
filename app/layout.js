import { Urbanist } from "next/font/google";
import "./globals.css";

const urbanist = Urbanist({
  variable: "--font-urbanist",
  subsets: ["latin"],
});

export const metadata = {
  title: "Health Fusion 360",
  description: "Smarter Tracking for a Healthier You.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${urbanist.variable} antialiased`}
      >
        <div className="noise-overlay"></div>
        {children}
      </body>
    </html>
  );
}
