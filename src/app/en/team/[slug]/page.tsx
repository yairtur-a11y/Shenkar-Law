import PageShell from "@/components/PageShell";
import ProfilePage from "@/components/ProfilePage";
import { TEAM_MEMBERS } from "@/data/team";

export function generateStaticParams() {
  return TEAM_MEMBERS.map((m) => ({ slug: m.slug }));
}

export default function Page({ params }: { params: { slug: string } }) {
  return (
    <PageShell lang="en">
      <div className="pt-[72px]">
        <ProfilePage lang="en" slug={params.slug} />
      </div>
    </PageShell>
  );
}