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

const siteUrl = "https://shenkarlaw.co.il";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  title: {
    default: "שנקר ושות׳ | Shenkar & Co.",
    template: "%s — Shenkar & Co.",
  },

  description:
    "Boutique law firm specializing in corporate law, M&A, venture capital and international business law.",

  robots: {
    index: false,
    follow: false,
  },

  icons: {
    icon: "/favicon106.png",
    shortcut: "/favicon106.png",
    apple: "/favicon106.png",
  },

  openGraph: {
    type: "website",
    url: siteUrl,
    siteName: "Shenkar & Co.",
    title: "Shenkar & Co. Law Firm",
    description:
      "Boutique law firm specializing in corporate law, M&A and international business law.",
    images: [
      {
        url: "/og-image.png",
        width: 1400,
        height: 1050,
        alt: "Shenkar & Co. Law Offices",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Shenkar & Co. Law Firm",
    description:
      "Boutique law firm specializing in corporate law, M&A and international business law.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="he"
      dir="rtl"
      className={`${cormorant.variable} ${body.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}