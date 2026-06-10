import type { Lang } from "@/data/content";

export function localized(path: string, lang: Lang) {
  if (lang === "he") return path;
  if (path === "/") return "/en";
  return `/en${path}`;
}