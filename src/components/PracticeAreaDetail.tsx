import Link from "next/link";
import { PRACTICE_AREAS, UI, type Lang } from "@/data/content";
import { localized } from "@/lib/routes";

type PracticeArea = { num: string; slug: string; name: string; desc: string };

export function getPracticeArea(lang: Lang, slug: string): PracticeArea | undefined {
  return PRACTICE_AREAS[lang].items.find((area) => area.slug === slug);
}

export default function PracticeAreaDetail({ lang, slug }: { lang: Lang; slug: string }) {
  const ui = UI[lang];
  const content = PRACTICE_AREAS[lang];
  const area = getPracticeArea(lang, slug);

  if (!area) {
    return (
      <section className="bg-navy py-28" dir={ui.dir}>
        <div className="narrow">
          <p className="eyebrow">{content.label}</p>
          <h1 className="display-title">
            {lang === "he" ? "התחום לא נמצא" : "Practice area not found"}
          </h1>
          <p
            className="body-text mt-8"
            style={{
              textAlign: "justify",
              textAlignLast: lang === "he" ? "right" : "left",
            }}
          >
            {lang === "he" ? "העמוד המבוקש אינו קיים." : "The requested page does not exist."}
          </p>
          <Link
            className="mt-10 inline-block text-gold no-underline hover:text-ivory"
            href={localized("/practice-areas", lang)}
          >
            {lang === "he" ? "חזרה לתחומי העיסוק" : "Back to practice areas"}
          </Link>
        </div>
      </section>
    );
  }

  return (
    <section className="bg-navy py-28" dir={ui.dir}>
      <div className="narrow">
        <p className="eyebrow">{content.label}</p>
        <h1 className="display-title">{area.name}</h1>
        <div className="gold-rule mt-5" />

        <article className="mt-14 border-y border-rule py-12">
          <p
            className="body-text m-0 text-lg leading-[2]"
            style={{
              textAlign: "justify",
              textAlignLast: lang === "he" ? "right" : "left",
            }}
          >
            {area.desc}
          </p>
        </article>

        <div className="mt-12 flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
          <Link
            className="text-sm uppercase tracking-[.14em] text-gold no-underline hover:text-ivory"
            href={localized("/practice-areas", lang)}
          >
            {lang === "he" ? "כל תחומי העיסוק" : "All practice areas"}
          </Link>

          <div className="flex flex-wrap gap-3">
            {content.items.map((item) => (
              <Link
                key={item.slug}
                href={localized(`/practice-areas/${item.slug}`, lang)}
                className={`border px-4 py-2 text-sm no-underline transition-colors ${
                  item.slug === slug
                    ? "border-gold text-gold"
                    : "border-rule text-stone hover:border-gold hover:text-ivory"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}