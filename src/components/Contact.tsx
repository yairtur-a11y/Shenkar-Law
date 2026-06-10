import { SITE, UI, type Lang } from "@/data/content";

function phoneHref(phone: string) {
  return `tel:${phone.replace(/[^\d+]/g, "")}`;
}

function mailHref(email: string) {
  return `mailto:${email}`;
}

function mapsHref(address: string) {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;
}

export default function Contact({ lang }: { lang: Lang }) {
  const ui = UI[lang];

  const items =
    lang === "he"
      ? [
          { k: "טלפון", v: SITE.phone, href: phoneHref(SITE.phone) },
          { k: "פקס", v: SITE.fax },
          { k: "דוא״ל", v: SITE.email, href: mailHref(SITE.email) },
          {
            k: "כתובת",
            v: SITE.addressHe,
            href: mapsHref(SITE.addressHe),
            external: true,
          },
        ]
      : [
          { k: "Phone", v: SITE.phone, href: phoneHref(SITE.phone) },
          { k: "Fax", v: SITE.fax },
          { k: "Email", v: SITE.email, href: mailHref(SITE.email) },
          {
            k: "Address",
            v: SITE.addressEn,
            href: mapsHref(SITE.addressEn),
            external: true,
          },
        ];

  return (
    <section className="bg-panel py-28" dir={ui.dir}>
      <div className="container">
        <p className="eyebrow">{ui.contactLabel}</p>
        <h1 className="display-title">{ui.contactLabel}</h1>
        <div className="gold-rule mb-16 mt-5" />

        <div className="border-t border-rule">
          {items.map((item) => (
            <div
              key={item.k}
              className="grid gap-4 border-b border-rule py-8 md:grid-cols-[120px_1fr] md:items-baseline"
            >
              <span className="text-xs uppercase tracking-[.15em] text-gold">
                {item.k}
              </span>

              {item.href ? (
                <a
                  href={item.href}
                  target={item.external ? "_blank" : undefined}
                  rel={item.external ? "noopener noreferrer" : undefined}
                  className="font-display text-[clamp(24px,3vw,36px)] font-light text-ivory no-underline hover:text-gold"
                >
                  {item.v}
                </a>
              ) : (
                <span className="font-display text-[clamp(24px,3vw,36px)] font-light text-ivory">
                  {item.v}
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}