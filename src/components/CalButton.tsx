"use client";

import { Button } from "@/components/ui/button";
import { useEffect } from "react";
import { getCalApi } from "@calcom/embed-react";

type CalButtonProps = {
  children: React.ReactNode;
  variant?: "default" | "secondary" | "destructive" | "outline" | "ghost" | "link";
  className?: string;
};

export default function CalButton({ children, variant = "default", className }: CalButtonProps) {
  useEffect(() => {
    (async () => {
      const cal = await getCalApi();
      cal("ui", { theme: "dark" });
    })();
  }, []);

  return (
    <Button
      variant={variant}
      className={className}
      data-cal-link="kristian-petrov/break-chains-build-kingdom-let-s-deploy"
      data-cal-config='{"layout":"month_view"}'
    >
      {children}
    </Button>
  );
}


