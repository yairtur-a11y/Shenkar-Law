import type { Metadata } from "next";
import PageShell from "@/components/PageShell";
import PracticeAreaDetail from "@/components/PracticeAreaDetail";
import { PRACTICE_AREAS } from "@/data/content";

const siteUrl = "https://shenkarlaw.co.il";

export function generateStaticParams() {
  return PRACTICE_AREAS.en.items.map((area) => ({ slug: area.slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const area = PRACTICE_AREAS.en.items.find((item) => item.slug === params.slug);

  if (!area) {
    return {
      title: "Practice Areas — Shenkar & Co.",
      description: "The practice areas of Shenkar & Co.",
    };
  }

  const title = `${area.name} — Shenkar & Co.`;
  const description = area.desc;

  return {
    title,
    description,
    alternates: {
      canonical: `${siteUrl}/en/practice-areas/${area.slug}`,
      languages: {
        he: `${siteUrl}/practice-areas/${area.slug}`,
        en: `${siteUrl}/en/practice-areas/${area.slug}`,
      },
    },
    openGraph: {
      type: "website",
      url: `${siteUrl}/en/practice-areas/${area.slug}`,
      siteName: "Shenkar & Co.",
      title,
      description,
      images: [
        {
          url: "/og-image.png",
          width: 1400,
          height: 1050,
          alt: "Shenkar & Co. Law Offices",
        },
      ],
      locale: "en_US",
      alternateLocale: "he_IL",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/og-image.png"],
    },
  };
}

export default function Page({ params }: { params: { slug: string } }) {
  return (
    <PageShell lang="en">
      <div className="pt-[72px]">
        <PracticeAreaDetail lang="en" slug={params.slug} />
      </div>
    </PageShell>
  );
}