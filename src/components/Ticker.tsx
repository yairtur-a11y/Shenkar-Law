import { TICKER, type Lang } from "@/data/content";

export default function Ticker({ lang }: { lang: Lang }) {
  const items = TICKER[lang];
  const isHebrew = lang === "he";

  const animationName = isHebrew
    ? "shenkarTickerScrollRight"
    : "shenkarTickerScrollLeft";

  const renderItems = (prefix: string) =>
    items.map((item, i) => (
      <span
        key={`${prefix}-${i}`}
        className="inline-flex items-center"
        dir={isHebrew ? "rtl" : "ltr"}
      >
        <span>{item}</span>
        <span className="mx-4 text-gold">·</span>
      </span>
    ));

  return (
    <div
      className="group relative flex h-12 items-center overflow-hidden border-y border-white/10 bg-navy/35 text-[13px] uppercase tracking-[.12em] text-ivory/85 backdrop-blur-[4px]"
      dir="ltr"
      aria-label={isHebrew ? "עסקאות נבחרות" : "Selected transactions"}
    >
      <div
        className="flex w-max whitespace-nowrap group-hover:[animation-play-state:paused]"
        dir="ltr"
        style={{
          transform: isHebrew ? "translateX(-50%)" : "translateX(0)",
          animationName,
          animationDuration: "64s",
          animationTimingFunction: "linear",
          animationIterationCount: "infinite",
          animationDelay: "1.5s",
          animationFillMode: "both",
          willChange: "transform",
        }}
      >
        <div className="flex shrink-0 whitespace-nowrap">
          {renderItems("first")}
        </div>

        <div className="flex shrink-0 whitespace-nowrap" aria-hidden>
          {renderItems("second")}
        </div>
      </div>

      <div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-navy/45 to-transparent"
      />

      <div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-navy/45 to-transparent"
      />

      <style>{`
        @keyframes shenkarTickerScrollLeft {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        @keyframes shenkarTickerScrollRight {
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