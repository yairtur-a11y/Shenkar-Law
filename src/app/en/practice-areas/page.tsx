import PageShell from "@/components/PageShell";
import PracticeAreas from "@/components/PracticeAreas";

export default function Page() {
  return (
    <PageShell lang="en">
      <div className="pt-[72px]">
        <PracticeAreas lang="en" />
      </div>
    </PageShell>
  );
}