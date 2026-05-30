import Link from "next/link";
import { PRACTICE_AREAS, UI, type Lang } from "@/data/content";
import { localized } from "@/lib/routes";

export default function PracticeAreas({ lang }: { lang: Lang }) {
  const ui = UI[lang];
  const content = PRACTICE_AREAS[lang];
  return (
    <section id="practice-areas" className="bg-navy py-28" dir={ui.dir}>
      <div className="container">
        <p className="eyebrow">{content.label}</p>
        <h2 className="display-title">{content.title}</h2>
        <div className="gold-rule mt-5" />
        <div className="mt-16 border-t border-rule">
          {content.items.map((area) => (
            <Link
              key={area.slug}
              href={localized(`/practice-areas/${area.slug}`, lang)}
              className="group grid gap-5 border-b border-rule py-10 no-underline transition-colors md:grid-cols-[120px_1fr_40px] md:items-start"
            >
              <span className="font-display text-6xl font-light leading-none text-rule transition-colors group-hover:text-gold">{area.num}</span>
              <div>
                <h3 className="m-0 font-display text-[clamp(26px,3vw,38px)] font-light text-ivory transition-colors group-hover:text-gold">{area.name}</h3>
                <p className="body-text mt-3 max-w-4xl text-sm">
                  {area.desc.length > 260 ? `${area.desc.slice(0, 260)}…` : area.desc}
                </p>
                <span className="mt-5 inline-block text-xs uppercase tracking-[.14em] text-gold">
                  {lang === "he" ? "קרא עוד" : "Read more"}
                </span>
              </div>
              <span className="hidden font-display text-2xl text-rule transition-colors group-hover:text-gold md:block">{lang === "he" ? "←" : "→"}</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
