import Link from "next/link";
import { ArrowDown, ArrowUpRight, Code2, Compass, ScanLine } from "lucide-react";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import ProjectShowcase from "@/components/ProjectShowcase";
import ContactActions from "@/components/ContactActions";
import { Button } from "@/components/ui/button";
import MatrixRain from "@/components/MatrixRain";
import HeroGlitchMorph from "@/components/HeroGlitchMorph";

export const revalidate = 86400;
export const metadata = {
  title: { absolute: "Set Free Digital Disciples | Bold Websites. Real Purpose." },
  description:
    "Distinctive, fast websites for local businesses, ministries, and online shops. Clear messaging, custom Next.js development, and technical SEO, guided by faith and built with care.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "Set Free Digital Disciples | Bold Websites. Real Purpose.",
    description: "Your vision, brought to life with bold design, clear messaging, and thoughtful code.",
    url: "/",
  },
  twitter: {
    card: "summary_large_image",
    title: "Set Free Digital Disciples | Bold Websites. Real Purpose.",
    description: "Your vision, brought to life with bold design, clear messaging, and thoughtful code.",
  },
} as const;

const services = [
  {
    number: "01",
    icon: Compass,
    title: "A look that’s yours.",
    body: "Your website should feel like you from the first screen. I bring the message, visuals, and layout together so people understand what you do and why it matters.",
    detail: "Brand direction · Custom design · Clear copy",
  },
  {
    number: "02",
    icon: Code2,
    title: "Smooth from the first tap.",
    body: "Fast pages. Comfortable reading. Buttons where you need them. Whether someone visits on a phone or a desktop, the next step feels natural.",
    detail: "Next.js · Responsive development · Image optimization",
  },
  {
    number: "03",
    icon: ScanLine,
    title: "Built to be found.",
    body: "A great site needs a clear path from search. I build the page structure, titles, and technical foundations that help search engines understand your work.",
    detail: "Technical SEO · Structured data · Core Web Vitals",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen">
      <MatrixRain />
      <SiteHeader />
      <main id="main-content" tabIndex={-1} className="content-layer">
        <section className="hero-section site-container">
          <div className="hero-copy">
            <p className="eyebrow"><span className="status-dot" /> Independent design &amp; development</p>
            <h1 className="hero-title glow-green glitch-strong">Bold websites.<br /><span>Real purpose.</span></h1>
            <p className="hero-description">
              Fast, distinctive websites for businesses, ministries, and big ideas—built to help people find you and take the next step.
            </p>
            <div className="hero-actions">
              <Button asChild size="lg" className="studio-button">
                <a href="#work">Explore the work <ArrowDown /></a>
              </Button>
              <Button asChild size="lg" variant="outline" className="studio-button studio-button-outline">
                <a href="#contact">Let’s build yours <ArrowUpRight /></a>
              </Button>
            </div>
            <p className="hero-signature">Guided by faith. Built with care.</p>
          </div>
          <div className="hero-stage" aria-label="Set Free Digital Disciples animated logos">
            <div className="hero-logo-glow" aria-hidden="true" />
            <HeroGlitchMorph
              imageA="/SetFreeDigitalDisciplesMatrix.png"
              imageB="/SetFreeDigitalDisciplesPortal.png"
              alt="Set Free Digital Disciples"
              transitionMs={1400}
              intervalMs={4000}
              glitchDurationMs={420}
              startOn="A"
              objectFitClass="object-contain"
              sizes="(max-width: 767px) 100vw, (max-width: 1023px) 520px, 50vw"
              priority
            />
            <span className="scanline-overlay" aria-hidden="true" />
          </div>
        </section>

        <div className="capability-strip site-container">
          <p>For businesses, ministries &amp; big ideas.</p>
          <span>Design <i>/</i> Development <i>/</i> Technical SEO</span>
        </div>

        <section id="work" className="work-section site-container section-anchor">
          <header className="section-heading">
            <div>
              <p className="eyebrow">Selected work <span className="eyebrow-divider">/</span> 01—07</p>
              <h2>See what’s possible.</h2>
            </div>
            <p>Seven live builds.<br className="hidden sm:block" /> Every detail considered.</p>
          </header>
          <ProjectShowcase priorityFirst />
        </section>

        <section id="services" className="services-section site-container section-anchor">
          <header id="rank" className="section-heading section-anchor">
            <div>
              <p className="eyebrow">The craft behind the screen</p>
              <h2>Looks sharp.<br />Works even harder.</h2>
            </div>
            <p>You bring the vision.<br />I bring the design and the code.</p>
          </header>
          <div className="service-grid">
            {services.map(({ number, icon: Icon, title, body, detail }) => (
              <article className="service-card" key={number}>
                <div className="service-card-top"><span>{number}</span><Icon className="size-6" strokeWidth={1.4} /></div>
                <h3>{title}</h3>
                <p>{body}</p>
                <div className="service-detail">{detail}</div>
              </article>
            ))}
          </div>
          <details className="technical-details">
            <summary>For the technically curious <span aria-hidden="true">+</span></summary>
            <div>
              <p>React and TypeScript on Next.js, styled with Tailwind and deployed on Vercel. Responsive images, server rendering, canonical URLs, JSON-LD, and XML sitemaps are part of the foundation. The stack serves the experience.</p>
              <ul>{["Next.js", "React", "TypeScript", "Tailwind", "Vercel", "Schema.org"].map((item) => <li key={item}>{item}</li>)}</ul>
            </div>
          </details>
        </section>

        <section className="process-section site-container">
          <div className="section-heading">
            <div><p className="eyebrow">A clear path to launch</p><h2>Big idea.<br />Let’s make it real.</h2></div>
            <p>You don’t need to know the technology.<br />You just need a place to start.</p>
          </div>
          <ol className="process-grid">
            {[
              { number: "01", title: "Talk it through.", body: "We start with your people, your goals, and what the site needs to do. A fresh start or a better version of what you have." },
              { number: "02", title: "Shape it. Build it.", body: "I turn that direction into a design you can see and a website you can use. We refine the words, visuals, and details together." },
              { number: "03", title: "Go live. Keep growing.", body: "Your site launches with its search foundations in place. I stay available for updates as your work moves forward." },
            ].map((step) => <li key={step.number}><span>{step.number}</span><h3>{step.title}</h3><p>{step.body}</p></li>)}
          </ol>
        </section>

        <section id="donate" className="mission-section site-container section-anchor">
          <div><p className="eyebrow">The heart behind Set Free</p><h2>Good work.<br /><span>Greater purpose.</span></h2></div>
          <div className="mission-copy">
            <p>My faith in God shapes how I work: with honesty, care, and a belief that what we build should help someone.</p>
            <p>Set Free Digital Disciples also serves a bigger mission—using technology to serve people and share the hope of Jesus. If that speaks to you, your support helps carry it forward.</p>
            <Link href="/donate" className="text-link">Support the mission <ArrowUpRight className="size-4" /></Link>
          </div>
        </section>

        <section id="contact" className="contact-section site-container section-anchor">
          <p className="eyebrow"><span className="status-dot" /> Your next chapter starts here</p>
          <h2>Have a vision?<br /><span>Let’s build it.</span></h2>
          <div className="contact-bottom">
            <p>A business, a ministry, an idea worth putting out there.<br className="hidden sm:block" /> Tell me what you have in mind.</p>
            <div className="flex flex-wrap gap-3">
              <ContactActions size="lg" textLabel="Text me your idea" emailLabel="Send an email" textClassName="studio-button" emailClassName="studio-button studio-button-outline" emailVariant="outline" />
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
