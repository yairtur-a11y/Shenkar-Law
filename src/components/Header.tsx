import Link from "next/link";
import { UI, PRACTICE_AREAS, type Lang } from "@/data/content";
import { TEAM_MEMBERS } from "@/data/team";
import { localized } from "@/lib/routes";

type NavItem = { label: string; href: string };

const navLinkClass =
  "nav-link inline-flex h-[76px] items-center whitespace-nowrap text-[16px] font-semibold leading-none tracking-[0.105em] text-ivory/95 transition-colors hover:text-gold";

const dropdownLinkClass =
  "nav-dropdown-link text-[17px] font-medium text-ivory/90 hover:text-gold";

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
    <div className="nav-dropdown relative flex h-[76px] items-center">
      <Link href={href} className={`${navLinkClass} gap-1.5`}>
        {label}
        <span
          className="flex items-center text-[12px] leading-none opacity-75"
          aria-hidden
        >
          ▾
        </span>
      </Link>

      <div className="nav-dropdown-menu" role="menu">
        {items.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={dropdownLinkClass}
            role="menuitem"
          >
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
  const brandText = lang === "he" ? "שנקר ושות׳" : "Shenkar & Co.";

  const brandPositionClass =
    lang === "he" ? "absolute right-[-18px]" : "absolute left-[-18px]";

  const brandTypographyClass =
    lang === "he"
      ? "text-[25px] font-semibold tracking-[0.01em]"
      : "text-[28px] font-semibold tracking-[0.04em]";

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-navy/90 backdrop-blur-md">
      <div className="relative mx-auto flex h-[76px] w-[min(96%,1500px)] items-center">
        <Link
          href={lang === "he" ? "/" : "/en"}
          className={`${brandPositionClass} inline-flex h-[76px] items-center whitespace-nowrap leading-none text-ivory/90 no-underline transition-colors hover:text-gold ${brandTypographyClass}`}
          style={
            lang === "he"
              ? { fontFamily: "'Assistant', Arial, sans-serif" }
              : undefined
          }
          aria-label="Shenkar & Co. Law Firm"
        >
          {brandText}
        </Link>

        <nav
          className="absolute left-1/2 hidden h-[76px] -translate-x-1/2 items-center gap-10 md:flex"
          aria-label={ui.navigate}
          dir={lang === "he" ? "rtl" : "ltr"}
        >
          <Dropdown
            label={practiceLabel}
            href={localized("/practice-areas", lang)}
            items={practiceItems}
          />

          <Dropdown
            label={teamLabel}
            href={localized("/team", lang)}
            items={teamItems}
          />

          {ui.nav
            .filter(
              (item) => item.label !== practiceLabel && item.label !== teamLabel
            )
            .map((item) => (
              <Link key={item.href} href={item.href} className={navLinkClass}>
                {item.label}
              </Link>
            ))}
        </nav>

        <div
          className={`${
            lang === "he" ? "mr-auto" : "ml-auto"
          } flex h-[76px] items-center gap-4`}
        >
          <Link className={navLinkClass} href={ui.switchHref}>
            {ui.switchLabel}
          </Link>

          <details className="relative md:hidden">
            <summary
              className="cursor-pointer list-none text-3xl font-semibold text-ivory"
              aria-label="Menu"
            >
              ☰
            </summary>

            <nav
              className="absolute end-0 mt-5 max-h-[75vh] min-w-72 overflow-auto border border-rule bg-panel p-5 shadow-2xl"
              dir={lang === "he" ? "rtl" : "ltr"}
            >
              <div className="flex flex-col gap-5">
                {ui.nav.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="text-[18px] font-semibold text-ivory no-underline hover:text-gold"
                  >
                    {item.label}
                  </Link>
                ))}

                <div className="border-t border-rule pt-4">
                  <p className="mb-3 text-xs font-semibold uppercase tracking-[.15em] text-gold">
                    {practiceLabel}
                  </p>
                  <div className="flex flex-col gap-3">
                    {practiceItems.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="text-[16px] font-medium text-stone no-underline hover:text-ivory"
                      >
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
                      <Link
                        key={item.href}
                        href={item.href}
                        className="text-[16px] font-medium text-stone no-underline hover:text-ivory"
                      >
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