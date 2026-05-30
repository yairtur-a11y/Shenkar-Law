import { ABOUT, UI, type Lang } from "@/data/content";

export default function About({ lang }: { lang: Lang }) {
  const ui = UI[lang];
  const content = ABOUT[lang];
  return (
    <section className="bg-navy py-28" dir={ui.dir}>
      <div className="container">
        <p className="eyebrow">{content.label}</p>
        <h1 className="display-title">{content.title}</h1>
        <div className="gold-rule mb-14 mt-5" />
        <div className="max-w-3xl">
          {content.body.map((p) => <p key={p} className="body-text text-base">{p}</p>)}
        </div>
      </div>
    </section>
  );
}
