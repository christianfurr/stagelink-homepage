import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { Cormorant_Garamond } from "next/font/google";

import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "600"],
  variable: "--font-cormorant",
});

export const metadata: Metadata = {
  title: "Stage Link — Real-time stage monitoring for theater crews",
  description:
    "See the stage from anywhere, in real-time. Near-zero latency stage streaming with live chat, camera switching, and real-time performance stats.",
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
