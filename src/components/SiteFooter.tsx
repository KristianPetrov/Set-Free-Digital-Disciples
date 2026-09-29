import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { contactEmail, contactPhoneDisplay, emailHref, textToScheduleHref } from "@/lib/contact";

export default function SiteFooter() {
  return (
    <footer className="site-footer content-layer site-container">
      <div className="footer-wordmark" aria-hidden="true">SET FREE.</div>
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Set Free Digital Disciples.<br />Crafted with prayer and precision.</p>
        <div className="footer-links">
          <a href={emailHref}>{contactEmail}<ArrowUpRight className="size-3" /></a>
          <a href={textToScheduleHref}>Text {contactPhoneDisplay}<ArrowUpRight className="size-3" /></a>
          <Link href="/donate">Support the mission<ArrowUpRight className="size-3" /></Link>
        </div>
      </div>
    </footer>
  );
}
