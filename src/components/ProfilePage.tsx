import Link from "next/link";
import { TEAM_MEMBERS } from "@/data/team";
import { UI, type Lang } from "@/data/content";
import { localized } from "@/lib/routes";
import { notFound } from "next/navigation";

export function getMember(slug: string) {
  return TEAM_MEMBERS.find((m) => m.slug === slug);
}

function initials(name: string) {
  return name
    .replace(/^עו״ד\s+|^Adv\.\s+/i, "")
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0])
    .join("");
}

export default function ProfilePage({ lang, slug }: { lang: Lang; slug: string }) {
  const ui = UI[lang];
  const member = getMember(slug);
  if (!member) notFound();

  const name = lang === "he" ? member.nameHe : member.nameEn;
  const title = lang === "he" ? member.titleHe : member.titleEn;
  const bio = lang === "he" ? member.bioHe : member.bioEn;
  const education = lang === "he" ? member.educationHe : member.educationEn;
  const admission = lang === "he" ? member.admissionHe : member.admissionEn;

  return (
    <section className="bg-navy py-32" dir={ui.dir}>
      <div className="container">
        <Link
          href={localized("/team", lang)}
          className="text-sm uppercase tracking-[.15em] text-gold hover:text-ivory"
        >
          {lang === "he" ? "חזרה לצוות" : "Back to team"}
        </Link>

        <div className="mt-10 grid gap-12 lg:grid-cols-[360px_1fr]">
          <div className="lawyer-placeholder relative aspect-[3/4] overflow-hidden bg-rule">
            {member.photo ? (
              <img
                src={member.photo}
                alt={name}
                className="h-full w-full object-cover"
              />
            ) : (
              <span>{initials(name)}</span>
            )}
          </div>

          <article>
            <p className="eyebrow">{title}</p>
            <h1 className="display-title">{name}</h1>
            <div className="gold-rule mb-10 mt-6" />

            <div className="space-y-5">
              {bio.map((p) => (
                <p
                  key={p}
                  className="body-text text-base"
                  style={{
                    textAlign: "justify",
                    textAlignLast: lang === "he" ? "right" : "left",
                  }}
                >
                  {p}
                </p>
              ))}
            </div>

            <div className="mt-12 grid gap-10 md:grid-cols-2">
              <section>
                <h2 className="mb-4 font-display text-3xl font-normal text-ivory">
                  {lang === "he" ? "השכלה" : "Education"}
                </h2>

                <ul className="m-0 space-y-3 p-0 text-sm leading-7 text-stone">
                  {education.map((x) => (
                    <li
                      key={x}
                      style={{
                        textAlign: "justify",
                        textAlignLast: lang === "he" ? "right" : "left",
                      }}
                    >
                      {x}
                    </li>
                  ))}
                </ul>
              </section>

              <section>
                <h2 className="mb-4 font-display text-3xl font-normal text-ivory">
                  {lang === "he" ? "הסמכה" : "Admissions"}
                </h2>

                <ul className="m-0 space-y-3 p-0 text-sm leading-7 text-stone">
                  {admission.map((x) => (
                    <li
                      key={x}
                      style={{
                        textAlign: "justify",
                        textAlignLast: lang === "he" ? "right" : "left",
                      }}
                    >
                      {x}
                    </li>
                  ))}
                </ul>
              </section>
            </div>

            <p className="mt-10 text-sm text-stone">
              <a href={`mailto:${member.email}`} className="text-gold hover:text-ivory">
                {member.email}
              </a>
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}