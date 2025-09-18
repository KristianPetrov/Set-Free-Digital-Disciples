import type { Metadata } from "next";
import WorkTabs from "@/components/WorkTabs";

export const metadata: Metadata = {
  title: "Work",
};

export default function WorkLayout({ showcase }: { showcase: React.ReactNode }) {
  return (
    <div className="content-layer mx-auto max-w-6xl px-4 py-16">
      <h1 className="text-3xl md:text-4xl font-bold glow-cyan">Work</h1>
      <p className="mt-2 text-muted-foreground max-w-prose">
        A growing collection of holy‑hood, high‑tech builds. Clean commits, kingdom outcomes.
      </p>

      <div className="mt-6">
        <WorkTabs />
      </div>

      <div className="mt-8">
        {showcase}
      </div>
    </div>
  );
}


