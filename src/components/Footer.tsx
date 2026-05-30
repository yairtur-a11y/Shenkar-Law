import Link from "next/link";
import { SITE, UI, type Lang } from "@/data/content";
import { localized } from "@/lib/routes";

export default function Footer({ lang }: { lang: Lang }) {
  const ui = UI[lang];
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-rule bg-navy" dir={ui.dir}>
      <div className="container py-16">
        <div className="grid gap-12 md:grid-cols-3">
          <div>
            <p className="m-0 font-display text-3xl text-ivory">{ui.firm}</p>
            <p className="mt-2 font-display text-lg text-stone">{ui.descriptor}</p>
          </div>
          <nav aria-label={ui.navigate}>
            <p className="eyebrow mb-5">{ui.navigate}</p>
            <ul className="m-0 list-none space-y-3 p-0 text-sm text-stone">
              {ui.nav.map((item) => <li key={item.href}><Link href={item.href} className="hover:text-ivory">{item.label}</Link></li>)}
            </ul>
          </nav>
          <div>
            <p className="eyebrow mb-5">{ui.contactLabel}</p>
            <ul className="m-0 list-none space-y-3 p-0 text-sm leading-7 text-stone">
              <li>{SITE.phone}</li>
              <li>{SITE.email}</li>
              <li>{lang === "he" ? SITE.addressHe : SITE.addressEn}</li>
            </ul>
          </div>
        </div>
        <div className="mt-14 flex flex-col gap-4 border-t border-rule pt-8 text-xs text-muted md:flex-row md:items-center md:justify-between">
          <p className="m-0">© {year} {ui.firm}. {ui.rights}.</p>
          <Link href={localized("/accessibility", lang)} className="tracking-[.12em] text-stone hover:text-ivory">{ui.accessibility}</Link>
        </div>
        <p className="mt-6 text-xs text-muted">{ui.disclaimer}</p>
      </div>
    </footer>
  );
}
