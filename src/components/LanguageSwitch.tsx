"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { Lang } from "@/data/content";
import { languageSwitchHref } from "@/lib/routes";

export default function LanguageSwitch({
  lang,
  label,
  className,
}: {
  lang: Lang;
  label: string;
  className: string;
}) {
  const pathname = usePathname();
  const href = languageSwitchHref(pathname, lang);

  return (
    <Link className={className} href={href}>
      {label}
    </Link>
  );
}