"use client";

import { Button } from "@/components/ui/button";

type CalButtonProps = {
  children: React.ReactNode;
  variant?: "default" | "secondary" | "destructive" | "outline" | "ghost" | "link";
  className?: string;
};

export default function CalButton({ children, variant = "default", className }: CalButtonProps) {
  return (
    <Button
      variant={variant}
      className={className}
      onClick={() => {
        // @ts-expect-error Cal embed global
        window.Cal?.show?.({ calLink: "kristian-petrov/break-chains-build-kingdom-let-s-deploy" });
      }}
    >
      {children}
    </Button>
  );
}


