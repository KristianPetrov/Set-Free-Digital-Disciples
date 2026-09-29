"use client";

import Link, { useLinkStatus } from "next/link";
import { ArrowUpRight } from "lucide-react";

function PendingArrow() {
  const { pending } = useLinkStatus();
  return <span className="link-pending-indicator" data-pending={pending} aria-hidden="true"><ArrowUpRight className="size-4" /></span>;
}

export default function ProjectLink({ href }: { href: string }) {
  return <Link href={href} className="text-link">Inside the build <PendingArrow /></Link>;
}
