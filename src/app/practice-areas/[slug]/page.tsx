import PageShell from "@/components/PageShell";
import PracticeAreaDetail from "@/components/PracticeAreaDetail";
import { PRACTICE_AREAS } from "@/data/content";

export function generateStaticParams() {
  return PRACTICE_AREAS.he.items.map((area) => ({ slug: area.slug }));
}

export default function Page({ params }: { params: { slug: string } }) {
  return (
    <PageShell lang="he">
      <div className="pt-[72px]">
        <PracticeAreaDetail lang="he" slug={params.slug} />
      </div>
    </PageShell>
  );
}
