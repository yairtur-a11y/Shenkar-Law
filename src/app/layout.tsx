import type { Metadata } from "next";
import { Cormorant_Garamond, Noto_Sans_Hebrew } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-cormorant",
  display: "swap",
});

const body = Noto_Sans_Hebrew({
  subsets: ["hebrew", "latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://shenkar-law.co.il"),
  title: { default: "שנקר ושות׳ | Shenkar & Co.", template: "%s — Shenkar & Co." },
  description: "Boutique law firm specializing in corporate law, M&A, venture capital and international business law.",
  icons: {
  icon: "/shenkar-logo.png",
  shortcut: "/shenkar-logo.png",
  apple: "/shenkar-logo.png",
},
  openGraph: {
    title: "Shenkar & Co. Law Offices",
    description: "Boutique law firm specializing in corporate law, M&A and international business law.",
    images: ["/hero-bg.jpg"],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="he" dir="rtl" className={`${cormorant.variable} ${body.variable}`}>
      <body>{children}</body>
    </html>
  );
}
