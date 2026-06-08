import Image from "next/image";
import { HOME, UI, type Lang } from "@/data/content";

export default function Hero({ lang }: { lang: Lang }) {
  const ui = UI[lang];
  const home = HOME[lang];

  const heroContentPosition =
    lang === "he"
      ? "text-right md:translate-x-[8vw] lg:translate-x-[10vw]"
      : "text-left md:-translate-x-[8vw] lg:-translate-x-[10vw]";

  return (
    <section className="relative flex min-h-screen items-end overflow-hidden" dir={ui.dir}>
      <Image
        src="/reka.png"
        alt="Modern city skyline"
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />

      <div className="absolute inset-0 bg-gradient-to-b from-navy/40 to-navy/90" />

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_15%,rgba(184,150,90,.18),transparent_28%),linear-gradient(to_right,rgba(10,14,26,.55),transparent_65%)]" />

      <div className="container relative z-10 pb-[15vh]">
        <div className={heroContentPosition}>
          <p className="eyebrow fade-up text-stone">{home.location}</p>
          <div className="gold-rule my-6 fade-up" />

          <h1 className="fade-up m-0 max-w-3xl font-display text-[clamp(58px,9vw,116px)] font-light leading-none tracking-[-.03em] text-ivory">
            {ui.firm}
          </h1>

          <p className="fade-up mt-3 font-display text-[clamp(22px,3vw,34px)] font-light tracking-[.05em] text-stone">
            {ui.descriptor}
          </p>
        </div>
      </div>
    </section>
  );
}