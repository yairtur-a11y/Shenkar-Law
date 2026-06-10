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
      title: "Team — Shenkar & Co.",
      description: "The legal team of Shenkar & Co.",
    };
  }

  const title = `${member.nameEn} — Shenkar & Co.`;
  const description = member.bioEn[0];

  return {
    title,
    description,
    alternates: {
      canonical: `${siteUrl}/en/team/${member.slug}`,
      languages: {
        he: `${siteUrl}/team/${member.slug}`,
        en: `${siteUrl}/en/team/${member.slug}`,
      },
    },
    openGraph: {
      type: "profile",
      url: `${siteUrl}/en/team/${member.slug}`,
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
        <ProfilePage lang="en" slug={params.slug} />
      </div>
    </PageShell>
  );
}