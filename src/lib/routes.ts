import type { Lang } from "@/data/content";

export function localized(path: string, lang: Lang) {
  if (lang === "he") return path;
  if (path === "/") return "/en";
  return `/en${path}`;
}

export function languageSwitchHref(pathname: string, currentLang: Lang) {
  if (currentLang === "he") {
    if (pathname === "/") return "/en";
    return `/en${pathname}`;
  }

  if (pathname === "/en") return "/";

  if (pathname.startsWith("/en/")) {
    return pathname.replace(/^\/en/, "") || "/";
  }

  return "/";
}