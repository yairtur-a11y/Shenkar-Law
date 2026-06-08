import { TICKER, UI, type Lang } from "@/data/content";

export default function Ticker({ lang }: { lang: Lang }) {
  const ui = UI[lang];
  const items = TICKER[lang];

  const animationName = lang === "he" ? "tickerScrollHe" : "tickerScrollEn";

  const renderItems = (prefix: string) =>
    items.map((item, i) => (
      <span
        key={`${prefix}-${item}-${i}`}
        className="inline-flex items-center"
        dir={ui.dir}
      >
        <span>{item}</span>
        <span className="mx-4 text-gold">·</span>
      </span>
    ));

  return (
    <div
      className="relative flex h-12 items-center overflow-hidden border-y border-white/10 bg-navy/18 text-[13px] uppercase tracking-[.12em] text-ivory/80 backdrop-blur-[3px]"
      dir={ui.dir}
      aria-label={lang === "he" ? "עסקאות נבחרות" : "Selected transactions"}
    >
      <div
        className="flex w-max whitespace-nowrap"
        dir="ltr"
        style={{
          animationName,
          animationDuration: "48.3s",
          animationTimingFunction: "linear",
          animationIterationCount: "infinite",
          animationDelay: "0s",
          transform: "translateX(0)",
          willChange: "transform",
        }}
      >
        <div className="flex shrink-0 whitespace-nowrap">{renderItems("first")}</div>
        <div className="flex shrink-0 whitespace-nowrap" aria-hidden>
          {renderItems("second")}
        </div>
      </div>

      <div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-navy/35 to-transparent"
      />

      <div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-navy/35 to-transparent"
      />

      <style>{`
        @keyframes tickerScrollEn {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        @keyframes tickerScrollHe {
          0% {
            transform: translateX(-50%);
          }
          100% {
            transform: translateX(0);
          }
        }
      `}</style>
    </div>
  );
}