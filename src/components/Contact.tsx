import { SITE, UI, type Lang } from "@/data/content";

export default function Contact({ lang }: { lang: Lang }) {
  const ui = UI[lang];
  const items = lang === "he"
    ? [{ k: "טלפון", v: SITE.phone }, { k: "דוא״ל", v: SITE.email }, { k: "כתובת", v: SITE.addressHe }]
    : [{ k: "Phone", v: SITE.phone }, { k: "Email", v: SITE.email }, { k: "Address", v: SITE.addressEn }];
  return (
    <section className="bg-panel py-28" dir={ui.dir}>
      <div className="container">
        <p className="eyebrow">{ui.contactLabel}</p>
        <h1 className="display-title">{ui.contactLabel}</h1>
        <div className="gold-rule mb-16 mt-5" />
        <div className="border-t border-rule">
          {items.map((item) => (
            <div key={item.k} className="grid gap-4 border-b border-rule py-8 md:grid-cols-[120px_1fr] md:items-baseline">
              <span className="text-xs uppercase tracking-[.15em] text-gold">{item.k}</span>
              <span className="font-display text-[clamp(24px,3vw,36px)] font-light text-ivory">{item.v}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
