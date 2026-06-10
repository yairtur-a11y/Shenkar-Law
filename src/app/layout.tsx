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
    "שנקר ושות׳ הוא משרד עורכי דין בוטיק העוסק במשפט מסחרי, מיזוגים ורכישות, הייטק, הון סיכון ועסקאות בינלאומיות.",

  // זמני בלבד — עד שהאתר מוכן לעלייה רשמית
  robots: {
    index: false,
    follow: false,
    googleBot: {
      index: false,
      follow: false,
    },
  },

  openGraph: {
    type: "website",
    url: siteUrl,
    siteName: "Shenkar & Co.",
    title: "שנקר ושות׳ | Shenkar & Co.",
    description:
      "משרד עורכי דין בוטיק העוסק במשפט מסחרי, מיזוגים ורכישות, הייטק, הון סיכון ועסקאות בינלאומיות.",
    locale: "he_IL",
    alternateLocale: "en_US",

    // בהמשך נחליף לתמונה ייעודית: /og-image.jpg
    images: [
      {
        url: "/reka.png",
        width: 1200,
        height: 630,
        alt: "Shenkar & Co.",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "שנקר ושות׳ | Shenkar & Co.",
    description:
      "משרד עורכי דין בוטיק העוסק במשפט מסחרי, מיזוגים ורכישות, הייטק, הון סיכון ועסקאות בינלאומיות.",
    images: ["/reka.png"],
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