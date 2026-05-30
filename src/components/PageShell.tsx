import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { UI, type Lang } from "@/data/content";

export default function PageShell({ lang, children }: { lang: Lang; children: React.ReactNode }) {
  const ui = UI[lang];
  return (
    <div className="site-shell" lang={ui.lang} dir={ui.dir}>
      <Header lang={lang} />
      <main>{children}</main>
      <Footer lang={lang} />
    </div>
  );
}
