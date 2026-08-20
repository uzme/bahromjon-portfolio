/**
 * Signal Ledger visual system: warm paper, ink black, Verdigris Teal, editorial
 * asymmetry, a left signal rail, evidence strips, DM Serif Display + Manrope.
 */
import {
  ArrowDownRight,
  ArrowUpRight,
  CheckCircle2,
  Code2,
  ExternalLink,
  Github,
  Mail,
  ShieldCheck,
  Sparkles,
  Workflow,
} from "lucide-react";
import { useEffect, useState } from "react";

const HERO_BANNER = "/manus-storage/profile-banner_375c6942.gif";

const projects = [
  {
    index: "01",
    name: "BioLab Interactive Guide",
    kind: "Interactive learning platform",
    summary:
      "A structured biotechnology learning experience that turns a 100-device catalogue into a clear, explorable product.",
    stack: ["TypeScript", "React", "Vite", "Express"],
    evidence: ["Live product", "CI verified", "MIT licensed"],
    href: "https://biolab-interactive-guide.vercel.app",
    repo: "https://github.com/uzme/biolab-interactive-guide",
    tone: "biolab",
  },
  {
    index: "02",
    name: "Portfolio Automation Toolkit",
    kind: "Secure developer utilities",
    summary:
      "A dependency-light Python toolkit for webhook validation, repository hygiene, API health, project intelligence, and AI input checks.",
    stack: ["Python", "HMAC", "HTTP", "Automation"],
    evidence: ["19 tests", "Python CI", "Security guardrails"],
    href: "https://github.com/uzme/developer-portfolio/tree/main/python_tools",
    repo: "https://github.com/uzme/developer-portfolio",
    tone: "toolkit",
  },
];

const principles = [
  {
    icon: Workflow,
    title: "Systems before features",
    copy: "I design clear flows, testable boundaries, and integrations that keep working after launch.",
  },
  {
    icon: ShieldCheck,
    title: "Security as a default",
    copy: "Credentials, webhooks, dependency changes, and deployment paths deserve deliberate safeguards.",
  },
  {
    icon: Sparkles,
    title: "Useful is the aesthetic",
    copy: "The strongest interface is the one that reduces uncertainty and helps a real person move forward.",
  },
];

function EvidenceStrip({ items }: { items: string[] }) {
  return (
    <div className="evidence-strip" aria-label="Project quality signals">
      {items.map((item) => (
        <span key={item}>
          <CheckCircle2 aria-hidden="true" size={14} />
          {item}
        </span>
      ))}
    </div>
  );
}

export default function Home() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="signal-ledger">
      <header className={`topbar ${scrolled ? "topbar--scrolled" : ""}`}>
        <a className="brand" href="#top" aria-label="Bahromjon Mengliyev portfolio bosh sahifasi">
          <span className="brand-mark" aria-hidden="true">BM</span>
          <span className="brand-name">Bahromjon<br />Mengliyev</span>
        </a>
        <nav aria-label="Asosiy navigatsiya">
          <a href="#work">Ishlar</a>
          <a href="#approach">Yondashuv</a>
          <a href="#contact">Bog‘lanish</a>
        </nav>
        <a className="topbar-github" href="https://github.com/uzme" target="_blank" rel="noreferrer">
          <Github size={17} aria-hidden="true" />
          GitHub
        </a>
      </header>

      <main id="top">
        <section className="hero" aria-labelledby="hero-title">
          <div className="hero-grain" aria-hidden="true" />
          <div className="signal-rail hero-rail" aria-hidden="true"><i /><i /><i /></div>
          <div className="hero-copy">
            <p className="eyebrow reveal-1">Independent developer / 2026</p>
            <h1 id="hero-title" className="reveal-2">
              Murakkab tizimlarni<br />
              <em>foydali mahsulotlarga</em><br />
              aylantiraman.
            </h1>
            <p className="hero-intro reveal-3">
              AI products, web applications va secure automation — aniq mahsulot fikri,
              ishonchli integrations va o‘qilishi oson interfeyslar bilan.
            </p>
            <div className="hero-actions reveal-4">
              <a className="button button--primary" href="#work">
                Tanlangan ishlarni ko‘ring <ArrowDownRight size={18} aria-hidden="true" />
              </a>
              <a className="button button--quiet" href="https://github.com/uzme" target="_blank" rel="noreferrer">
                GitHub profil <ArrowUpRight size={17} aria-hidden="true" />
              </a>
            </div>
          </div>

          <aside className="current-signal reveal-4" aria-label="Hozirgi professional fokus">
            <div className="signal-card-top">
              <span className="status-dot" aria-hidden="true" />
              <span>Current signal</span>
              <span>01 / 03</span>
            </div>
            <div className="signal-banner-wrap">
              <img src={HERO_BANNER} alt="Bahromjon Mengliyev uchun MB monogramma" />
            </div>
            <p>Hozir: BioLab mahsulotini yetkazish, AI integrations va repeatable developer tooling.</p>
            <div className="signal-tags">
              <span>TypeScript</span><span>Python</span><span>AI systems</span>
            </div>
          </aside>

          <div className="hero-footnote reveal-4">
            <span>Based in Uzbekistan</span>
            <span className="footnote-line" />
            <span>Available for meaningful product work</span>
          </div>
        </section>

        <section id="work" className="section work-section" aria-labelledby="work-title">
          <div className="signal-rail section-rail" aria-hidden="true"><i /><i /></div>
          <div className="section-intro">
            <p className="eyebrow">Selected work / evidence, not noise</p>
            <h2 id="work-title">Mahsulotlar, ular<br /><em>qanday ishlashi bilan.</em></h2>
            <p>Har bir loyiha foydalanuvchi tajribasi, texnik me’morchilik va sifat signallarini bir tizimga yig‘adi.</p>
          </div>

          <div className="project-list">
            {projects.map((project) => (
              <article className={`project-spread project-spread--${project.tone}`} key={project.name}>
                <div className="project-visual" aria-hidden="true">
                  <span className="project-index">{project.index}</span>
                  <div className="visual-surface">
                    <span className="visual-orb" />
                    <span className="visual-grid" />
                    <span className="visual-line line-a" />
                    <span className="visual-line line-b" />
                    <span className="visual-stamp">BUILD / SHIP / LEARN</span>
                  </div>
                </div>
                <div className="project-copy">
                  <p className="project-kind">{project.kind}</p>
                  <h3>{project.name}</h3>
                  <p className="project-summary">{project.summary}</p>
                  <div className="stack-list">
                    {project.stack.map((item) => <span key={item}>{item}</span>)}
                  </div>
                  <EvidenceStrip items={project.evidence} />
                  <div className="project-actions">
                    <a href={project.href} target="_blank" rel="noreferrer">Explore project <ArrowUpRight size={17} aria-hidden="true" /></a>
                    <a href={project.repo} target="_blank" rel="noreferrer">Source <Code2 size={16} aria-hidden="true" /></a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="approach" className="section approach-section" aria-labelledby="approach-title">
          <div className="approach-heading">
            <p className="eyebrow">Operating principles</p>
            <h2 id="approach-title">Ishning ko‘rinmaydigan qismi ham<br /><em>mahsulot sifatining bir qismi.</em></h2>
          </div>
          <div className="principle-grid">
            {principles.map(({ icon: Icon, title, copy }, index) => (
              <article className="principle" key={title}>
                <span className="principle-number">0{index + 1}</span>
                <Icon size={25} strokeWidth={1.55} aria-hidden="true" />
                <h3>{title}</h3>
                <p>{copy}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section proof-section" aria-labelledby="proof-title">
          <div>
            <p className="eyebrow">Quality ledger</p>
            <h2 id="proof-title">Shipping is only the<br /><em>first proof.</em></h2>
          </div>
          <div className="proof-grid">
            <div><strong>CI/CD</strong><span>Automated checks and repeatable releases</span></div>
            <div><strong>Security</strong><span>Secret scanning, webhook checks, protected flows</span></div>
            <div><strong>Product clarity</strong><span>Documentation that helps people decide and use</span></div>
            <div><strong>Automation</strong><span>Developer tooling that removes repeat work</span></div>
          </div>
        </section>

        <section id="contact" className="contact-section" aria-labelledby="contact-title">
          <div className="contact-rail" aria-hidden="true" />
          <p className="eyebrow">Next signal</p>
          <h2 id="contact-title">Yaxshi mahsulotlar<br />yaxshi savoldan boshlanadi.</h2>
          <p>AI, web application yoki automation tizimi ustida ishlayapsizmi? Fikrni birga aniq mahsulotga aylantiraylik.</p>
          <div className="contact-actions">
            <a className="button button--ink" href="https://t.me/MengliyevBahrom" target="_blank" rel="noreferrer">
              Telegram’da yozing <ArrowUpRight size={18} aria-hidden="true" />
            </a>
            <a className="contact-email" href="mailto:mengliyevbahrom00@gmail.com"><Mail size={17} aria-hidden="true" /> mengliyevbahrom00@gmail.com</a>
          </div>
        </section>
      </main>

      <footer>
        <span>© 2026 Bahromjon Mengliyev</span>
        <span>Built with product intent.</span>
        <a href="https://github.com/uzme" target="_blank" rel="noreferrer">github.com/uzme <ExternalLink size={13} aria-hidden="true" /></a>
      </footer>
    </div>
  );
}
