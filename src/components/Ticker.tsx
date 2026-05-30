import { TICKER, UI, type Lang } from "@/data/content";

export default function Ticker({ lang }: { lang: Lang }) {
  const ui = UI[lang];
  const items = TICKER[lang];
  const pass = [...items, ...items, ...items];
  const animationName = lang === "he" ? "marqueeRtl" : "marqueeLtr";

  return (
    <div
      className="relative flex h-12 items-center overflow-hidden border-y border-white/10 bg-navy/18 text-[13px] uppercase tracking-[.12em] text-ivory/80 backdrop-blur-[3px]"
      dir={ui.dir}
      aria-label={lang === "he" ? "עסקאות נבחרות" : "Selected transactions"}
    >
      <div
        className="ticker-track flex whitespace-nowrap"
        style={{ animationName, animationDuration: "42s" }}
      >
        {pass.map((item, i) => (
          <span key={`${item}-${i}`} className="inline-flex items-center">
            <span>{item}</span>
            <span className="mx-4 text-gold">·</span>
          </span>
        ))}
      </div>
      <div aria-hidden className="pointer-events-none absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-navy/35 to-transparent" />
      <div aria-hidden className="pointer-events-none absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-navy/35 to-transparent" />
    </div>
  );
}
