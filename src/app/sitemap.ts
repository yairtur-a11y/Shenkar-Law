import type { MetadataRoute } from "next";
import { TEAM_MEMBERS } from "@/data/team";
import { PRACTICE_AREAS } from "@/data/content";

const base = "https://shenkarlaw.co.il";

const pages = [
  "",
  "/about",
  "/practice-areas",
  "/team",
  "/contact",
  "/accessibility",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPagesHe = pages.map((p) => ({
    url: `${base}${p}`,
    lastModified: new Date(),
  }));

  const staticPagesEn = pages.map((p) => ({
    url: `${base}/en${p}`,
    lastModified: new Date(),
  }));

  const teamHe = TEAM_MEMBERS.map((member) => ({
    url: `${base}/team/${member.slug}`,
    lastModified: new Date(),
  }));

  const teamEn = TEAM_MEMBERS.map((member) => ({
    url: `${base}/en/team/${member.slug}`,
    lastModified: new Date(),
  }));

  const practiceHe = PRACTICE_AREAS.he.items.map((area) => ({
    url: `${base}/practice-areas/${area.slug}`,
    lastModified: new Date(),
  }));

  const practiceEn = PRACTICE_AREAS.en.items.map((area) => ({
    url: `${base}/en/practice-areas/${area.slug}`,
    lastModified: new Date(),
  }));

  return [
    ...staticPagesHe,
    ...staticPagesEn,
    ...teamHe,
    ...teamEn,
    ...practiceHe,
    ...practiceEn,
  ];
}