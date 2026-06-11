import Image from "next/image";
import Link from "next/link";
import { TEAM_MEMBERS } from "@/data/team";
import { UI, type Lang } from "@/data/content";
import { localized } from "@/lib/routes";

function initials(name: string) {
  return name
    .replace(/^עו״ד\s+|^Adv\.\s+/i, "")
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0])
    .join("");
}

export default function TeamGrid({ lang }: { lang: Lang }) {
  const ui = UI[lang];

  return (
    <section id="team" className="bg-panel py-28" dir={ui.dir}>
      <div className="container">
        <p className="eyebrow">{lang === "he" ? "אנשי המשרד" : "Our Team"}</p>
        <h2 className="display-title">{lang === "he" ? "הצוות" : "The Team"}</h2>
        <div className="gold-rule mb-16 mt-5" />

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {TEAM_MEMBERS.map((member) => {
            const name = lang === "he" ? member.nameHe : member.nameEn;
            const title = lang === "he" ? member.titleHe : member.titleEn;
            const bio = lang === "he" ? member.bioHe[0] : member.bioEn[0];

            return (
              <article key={member.slug} className="team-card">
                <Link
                  href={localized(`/team/${member.slug}`, lang)}
                  className="block no-underline"
                >
                  <div className="lawyer-placeholder relative aspect-[3/4] overflow-hidden bg-rule">
                    {member.photo ? (
                      <Image
                        src={member.photo}
                        alt={name}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                        className="object-cover"
                      />
                    ) : (
                      <span>{initials(name)}</span>
                    )}

                    <div className="accent absolute bottom-0 start-0 h-0.5 bg-gold" />
                  </div>

                  <div className="pt-6">
                    <p className="m-0 text-xs uppercase tracking-[.15em] text-gold">
                      {title}
                    </p>

                    <h3 className="mb-3 mt-2 font-display text-2xl font-normal text-ivory">
                      {name}
                    </h3>

                    <p
                      className="body-text line-clamp-4 text-sm"
                      style={{
                        textAlign: "justify",
                        textAlignLast: lang === "he" ? "right" : "left",
                      }}
                    >
                      {bio}
                    </p>
                  </div>
                </Link>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}