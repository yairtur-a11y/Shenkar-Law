import type { Lang } from "@/data/content";
import Hero from "@/components/Hero";
import Intro from "@/components/Intro";
import Ticker from "@/components/Ticker";

export default function HomePage({ lang }: { lang: Lang }) {
  return (
    <>
      <div className="relative overflow-hidden">
        <Hero lang={lang} />

        <div className="absolute inset-x-0 top-[92vh] z-30">
          <Ticker lang={lang} />
        </div>
      </div>

      <Intro lang={lang} compact />
    </>
  );
}