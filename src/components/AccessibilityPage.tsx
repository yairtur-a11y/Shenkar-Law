import { ACCESSIBILITY, UI, type Lang } from "@/data/content";

export default function AccessibilityPage({ lang }: { lang: Lang }) {
  const ui = UI[lang];
  const content = ACCESSIBILITY[lang];
  return (
    <section className="bg-navy py-32" dir={ui.dir}>
      <div className="narrow">
        <p className="eyebrow">{content.label}</p>
        <h1 className="display-title">{content.title}</h1>
        <div className="gold-rule mb-12 mt-6" />
        <p className="body-text text-base">{content.intro}</p>
        <div className="mt-12 space-y-10">
          {content.sections.map((section) => (
            <section key={section.heading}>
              <h2 className="mb-3 mt-0 font-display text-3xl font-normal text-ivory">{section.heading}</h2>
              <p className="body-text m-0 text-base">{section.body}</p>
            </section>
          ))}
        </div>
        <p className="mt-12 border-t border-rule pt-8 text-sm text-stone">{content.updated}</p>
      </div>
    </section>
  );
}
