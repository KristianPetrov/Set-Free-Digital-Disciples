import { Button } from "@/components/ui/button";
import { emailHref, textToScheduleHref } from "@/lib/contact";

type ContactActionsProps = {
  size?: "default" | "sm" | "lg";
  textVariant?: "default" | "secondary" | "outline" | "ghost" | "link";
  emailVariant?: "default" | "secondary" | "outline" | "ghost" | "link";
  textLabel?: string;
  emailLabel?: string;
  textClassName?: string;
  emailClassName?: string;
};

export default function ContactActions({
  size = "default",
  textVariant = "default",
  emailVariant = "secondary",
  textLabel = "Text to schedule a call",
  emailLabel = "Email me",
  textClassName,
  emailClassName,
}: ContactActionsProps) {
  return (
    <>
      <Button asChild size={size} variant={textVariant} className={textClassName}>
        <a href={textToScheduleHref}>{textLabel}</a>
      </Button>
      <Button asChild size={size} variant={emailVariant} className={emailClassName}>
        <a href={emailHref}>{emailLabel}</a>
      </Button>
    </>
  );
}
