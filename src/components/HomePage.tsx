import type { Lang } from "@/data/content";
import Hero from "@/components/Hero";
import Intro from "@/components/Intro";
import Ticker from "@/components/Ticker";

export default function HomePage({ lang }: { lang: Lang }) {
  return (
    <>
      <div className="relative overflow-hidden pb-[150px]">
        <Hero lang={lang} />

        <div className="absolute inset-x-0 bottom-[96px] z-20">
          <Ticker lang={lang} />
        </div>
      </div>

      <Intro lang={lang} compact />
    </>
  );
}