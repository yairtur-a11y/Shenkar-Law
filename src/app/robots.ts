import type { MetadataRoute } from "next";

const base = "https://shenkarlaw.co.il";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",

        // זמני בלבד — עד שהאתר מוכן לעלייה רשמית
        disallow: "/",
      },
    ],
    sitemap: `${base}/sitemap.xml`,
  };
}