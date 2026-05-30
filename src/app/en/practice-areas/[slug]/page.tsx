import PageShell from "@/components/PageShell";
import PracticeAreaDetail from "@/components/PracticeAreaDetail";
import { PRACTICE_AREAS } from "@/data/content";

export function generateStaticParams() {
  return PRACTICE_AREAS.en.items.map((area) => ({ slug: area.slug }));
}

export default function Page({ params }: { params: { slug: string } }) {
  return (
    <PageShell lang="en">
      <div className="pt-[72px]">
        <PracticeAreaDetail lang="en" slug={params.slug} />
      </div>
    </PageShell>
  );
}
