import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { Cormorant_Garamond } from "next/font/google";

import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "600"],
  variable: "--font-cormorant",
});

const baseUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://stagelink.example.com";
const title = "Stage Link — Real-time stage monitoring for theater crews";
const description =
  "See the stage from anywhere, in real-time. Near-zero latency stage streaming with live chat, camera switching, and real-time performance stats.";

export const metadata: Metadata = {
  title,
  description,
  openGraph: {
    title,
    description,
    url: baseUrl,
    siteName: "Stage Link",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: `${baseUrl}/opengraph-image`,
        width: 1200,
        height: 630,
        alt: "Stage Link",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${GeistSans.variable} ${cormorant.variable}`}>
        {children}
      </body>
    </html>
  );
}
