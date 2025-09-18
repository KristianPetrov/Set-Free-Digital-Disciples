"use client";

import Link from "next/link";
import { useSelectedLayoutSegment } from "next/navigation";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function WorkTabs() {
  const segment = useSelectedLayoutSegment();
  const current = segment ?? "anaheim";

  return (
    <Tabs value={current} className="w-full">
      <TabsList>
        <TabsTrigger value="anaheim">
          <Link href="/work/anaheim">Set Free Anaheim</Link>
        </TabsTrigger>
        <TabsTrigger value="lemonted">
          <Link href="/work/lemonted">Lemonted Edition</Link>
        </TabsTrigger>
        <TabsTrigger value="from-ashes">
          <Link href="/work/from-ashes">From Ashes To Angels</Link>
        </TabsTrigger>
      </TabsList>
    </Tabs>
  );
}





