import type { Lang } from "@/data/content";

export function localized(path: string, lang: Lang) {
  if (lang === "he") {
    if (path === "/en") return "/";
    if (path.startsWith("/en/")) return path.replace(/^\/en/, "") || "/";
    return path;
  }

  if (path === "/") return "/en";
  if (path === "/en" || path.startsWith("/en/")) return path;

  return `/en${path}`;
}

export function languageSwitchHref(pathname: string, currentLang: Lang) {
  if (currentLang === "he") {
    if (pathname === "/") return "/en";
    if (pathname === "/en" || pathname.startsWith("/en/")) return pathname;
    return `/en${pathname}`;
  }

  if (pathname === "/en") return "/";

  if (pathname.startsWith("/en/")) {
    return pathname.replace(/^\/en/, "") || "/";
  }

  return "/";
}