import { HOME, UI, type Lang } from "@/data/content";

export default function Intro({ lang, compact = false }: { lang: Lang; compact?: boolean }) {
  const ui = UI[lang];
  const home = HOME[lang];
  const body = compact ? home.introBody.slice(0, 1) : home.introBody;

  return (
    <section className={compact ? "bg-panel py-20" : "bg-panel py-24"} dir={ui.dir}>
      <div className="narrow">
        <h2 className="font-display text-[clamp(30px,4vw,48px)] font-light leading-tight text-ivory">
          {home.introHeading}
        </h2>

        <div className="gold-rule my-8" />

        {body.map((p) => (
          <p key={p} className="body-text text-[17px] text-justify">
            {p.replace(/—/g, "-")}
          </p>
        ))}
      </div>
    </section>
  );
}