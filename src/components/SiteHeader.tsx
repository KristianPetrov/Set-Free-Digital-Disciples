import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

export default function SiteHeader() {
  return (
    <>
      <a className="skip-link" href="#main-content">Skip to content</a>
      <header className="studio-header">
        <div className="site-container header-inner">
          <Link href="/" className="brand" aria-label="Set Free Digital Disciples home">
            <Image src="/brand/set-free-mark.webp" alt="" width={48} height={48} sizes="48px" className="brand-logo" />
            <span className="brand-name">SET FREE<span>DIGITAL DISCIPLES</span></span>
          </Link>
          <nav aria-label="Main navigation" className="header-nav">
            <Link href="/#work">Work</Link>
            <Link href="/#services">Services</Link>
            <Link href="/#contact">Contact</Link>
          </nav>
          <Link className="header-cta" href="/#contact">Let’s talk <ArrowUpRight className="size-4" /></Link>
        </div>
      </header>
    </>
  );
}
