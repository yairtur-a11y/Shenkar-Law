import Image from "next/image";
import Link from "next/link";
import { UI, PRACTICE_AREAS, type Lang } from "@/data/content";
import { TEAM_MEMBERS } from "@/data/team";
import { localized } from "@/lib/routes";

type NavItem = { label: string; href: string };

const navLinkClass =
  "nav-link text-[15px] font-semibold tracking-[0.11em] text-ivory/95 hover:text-gold";

const dropdownLinkClass =
  "nav-dropdown-link text-[16px] font-medium text-ivory/90 hover:text-gold";

function Dropdown({
  label,
  href,
  items,
}: {
  label: string;
  href: string;
  items: NavItem[];
}) {
  return (
    <div className="nav-dropdown">
      <Link href={href} className={`${navLinkClass} inline-flex items-center gap-1.5`}>
        {label}
        <span className="text-[11px] opacity-75" aria-hidden>
          ▾
        </span>
      </Link>

      <div className="nav-dropdown-menu" role="menu">
        {items.map((item) => (
          <Link key={item.href} href={item.href} className={dropdownLinkClass} role="menuitem">
            {item.label}
          </Link>
        ))}
      </div>
    </div>
  );
}

export default function Header({ lang }: { lang: Lang }) {
  const ui = UI[lang];

  const practiceItems = PRACTICE_AREAS[lang].items.map((area) => ({
    label: area.name,
    href: localized(`/practice-areas/${area.slug}`, lang),
  }));

  const teamItems = TEAM_MEMBERS.map((member) => ({
    label: lang === "he" ? member.nameHe : member.nameEn,
    href: localized(`/team/${member.slug}`, lang),
  }));

  const practiceLabel = lang === "he" ? "תחומי עיסוק" : "Practice Areas";
  const teamLabel = lang === "he" ? "צוות" : "Team";

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-navy/90 backdrop-blur-md">
      <div className="mx-auto flex h-[76px] w-[min(92%,1240px)] items-center justify-between gap-6">
        <Link href={lang === "he" ? "/" : "/en"} className="flex items-center gap-3 no-underline">
          <Image src="/shenkar-logo.png" alt="Shenkar & Co." width={56} height={39} priority />
          <span className="font-display text-[23px] font-semibold text-ivory">{ui.firm}</span>
        </Link>

        <nav className="hidden items-center gap-9 md:flex" aria-label={ui.navigate}>
          <Dropdown label={practiceLabel} href={localized("/practice-areas", lang)} items={practiceItems} />
          <Dropdown label={teamLabel} href={localized("/team", lang)} items={teamItems} />

          {ui.nav
            .filter((item) => item.label !== practiceLabel && item.label !== teamLabel)
            .map((item) => (
              <Link key={item.href} href={item.href} className={navLinkClass}>
                {item.label}
              </Link>
            ))}
        </nav>

        <div className="flex items-center gap-4">
          <Link className={navLinkClass} href={ui.switchHref}>
            {ui.switchLabel}
          </Link>

          <details className="relative md:hidden">
            <summary className="cursor-pointer list-none text-3xl font-semibold text-ivory" aria-label="Menu">
              ☰
            </summary>

            <nav className="absolute end-0 mt-5 max-h-[75vh] min-w-72 overflow-auto border border-rule bg-panel p-5 shadow-2xl">
              <div className="flex flex-col gap-5">
                {ui.nav.map((item) => (
                  <Link key={item.href} href={item.href} className="text-[17px] font-semibold text-ivory no-underline hover:text-gold">
                    {item.label}
                  </Link>
                ))}

                <div className="border-t border-rule pt-4">
                  <p className="mb-3 text-xs font-semibold uppercase tracking-[.15em] text-gold">
                    {practiceLabel}
                  </p>
                  <div className="flex flex-col gap-3">
                    {practiceItems.map((item) => (
                      <Link key={item.href} href={item.href} className="text-[15px] font-medium text-stone no-underline hover:text-ivory">
                        {item.label}
                      </Link>
                    ))}
                  </div>
                </div>

                <div className="border-t border-rule pt-4">
                  <p className="mb-3 text-xs font-semibold uppercase tracking-[.15em] text-gold">
                    {teamLabel}
                  </p>
                  <div className="flex flex-col gap-3">
                    {teamItems.map((item) => (
                      <Link key={item.href} href={item.href} className="text-[15px] font-medium text-stone no-underline hover:text-ivory">
                        {item.label}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </nav>
          </details>
        </div>
      </div>
    </header>
  );
}