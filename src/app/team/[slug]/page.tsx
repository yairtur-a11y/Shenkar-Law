import type { Metadata } from "next";
import PageShell from "@/components/PageShell";
import ProfilePage from "@/components/ProfilePage";
import { TEAM_MEMBERS } from "@/data/team";

const siteUrl = "https://shenkarlaw.co.il";

export function generateStaticParams() {
  return TEAM_MEMBERS.map((m) => ({ slug: m.slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const member = TEAM_MEMBERS.find((m) => m.slug === params.slug);

  if (!member) {
    return {
      title: "הצוות — Shenkar & Co.",
      description: "צוות עורכי הדין של שנקר ושות׳.",
    };
  }

  const title = `${member.nameHe} — Shenkar & Co.`;
  const description = member.bioHe[0];

  return {
    title,
    description,
    alternates: {
      canonical: `${siteUrl}/team/${member.slug}`,
      languages: {
        he: `${siteUrl}/team/${member.slug}`,
        en: `${siteUrl}/en/team/${member.slug}`,
      },
    },
    openGraph: {
      type: "profile",
      url: `${siteUrl}/team/${member.slug}`,
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
      locale: "he_IL",
      alternateLocale: "en_US",
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
    <PageShell lang="he">
      <div className="pt-[72px]">
        <ProfilePage lang="he" slug={params.slug} />
      </div>
    </PageShell>
  );
}