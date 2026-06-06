"use client";

import { useEffect, useRef, useState } from "react";
import { useHubSpotForm } from "@/hooks/useHubSpotForm";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { HeroGeometric } from "@/components/ui/shape-landing-hero";
import { TestimonialsColumn, testimonials } from "@/components/ui/testimonials-columns-1";
import { SlideTabs } from "@/components/ui/slide-tabs";
import IntegrationHero from "@/components/ui/integration-hero";

const MEETING_URL = "https://moximize.net/meetings/steven-nichol-guiao?uuid=956a4a9a-6fb4-4b72-87b6-95b774ab8f5b&hsLang=en";

/* ── Logo component ───────────────────────────────────────────────────────── */
function Logo({ className }: { className?: string }) {
  return (
    <img
      src="/logo.png"
      alt="Moximize"
      className={cn("w-auto object-contain", className)}
      style={{ height: "48px" }}
    />
  );
}

/* ── helpers ──────────────────────────────────────────────────────────────── */

function Reveal({
  children,
  className,
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 28 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <span className="text-xs font-semibold uppercase tracking-[0.12em] text-mox block mb-3.5">
      {children}
    </span>
  );
}

function Counter({ target }: { target: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const [val, setVal] = useState<number | null>(null);

  useEffect(() => {
    if (!inView) return;
    setVal(0);
    let start: number | null = null;
    const duration = 1600;
    const step = (ts: number) => {
      if (!start) start = ts;
      const progress = Math.min((ts - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setVal(Math.floor(eased * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [inView, target]);

  return (
    <span ref={ref} className="font-extrabold text-[60px] text-white leading-none">
      {val === null ? target : val}+
    </span>
  );
}

/* ── nav ──────────────────────────────────────────────────────────────────── */

function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-[#000000]/95 backdrop-blur-md shadow-[0_1px_0_rgba(255,255,255,0.06)]"
          : "bg-transparent"
      )}
    >
      <div className="max-w-[1400px] mx-auto px-8 flex items-center gap-10 h-[72px]">
        <a href="/" className="shrink-0">
          <Logo />
        </a>

        <div className="hidden md:flex items-center flex-1">
          <SlideTabs
            tabs={["Services", "Case Studies", "Insights", "About"]}
            hrefs={["#services", "/case-studies", "/insights", "/about"]}
          />
        </div>

        <div className="hidden md:flex items-center gap-3 ml-auto">
          <a
            href="/contact"
            className="font-semibold text-[14px] text-white bg-mox hover:bg-mox-h px-5 py-2.5 rounded-md transition-all flex items-center gap-2 shadow-[0_0_20px_rgba(41,171,226,0.30)]"
          >
            Book a Call <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        <button
          className="md:hidden ml-auto text-white p-2"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <div className="w-5 space-y-1.5">
            <span className={cn("block h-0.5 bg-white transition-all", open && "rotate-45 translate-y-2")} />
            <span className={cn("block h-0.5 bg-white transition-all", open && "opacity-0")} />
            <span className={cn("block h-0.5 bg-white transition-all", open && "-rotate-45 -translate-y-2")} />
          </div>
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-[#000000] border-t border-[#242628] px-6 py-4 flex flex-col gap-3">
          {[
            { label: "Services", href: "#services" },
            { label: "Case Studies", href: "/case-studies" },
            { label: "Insights", href: "/insights" },
            { label: "About", href: "/about" },
          ].map(({ label, href }) => (
            <a key={href} href={href} onClick={() => setOpen(false)} className="text-[15px] text-[#72767a] py-2 hover:text-[#e7e9ea]">
              {label}
            </a>
          ))}
          <a href="/contact" onClick={() => setOpen(false)} className="mt-2 font-semibold text-white bg-mox px-5 py-3 rounded-md text-center">
            Book a Call
          </a>
        </div>
      )}
    </nav>
  );
}

/* ── hero bottom ──────────────────────────────────────────────────────────── */

function HeroBottom() {
  return (
    <div className="bg-[#030303]">
      <div className="max-w-[1400px] mx-auto px-8 pb-16 flex flex-col sm:flex-row items-center justify-center gap-4">
        <a
          href="/contact"
          className="font-semibold text-[16px] text-white bg-mox hover:bg-mox-h px-8 py-4 rounded-md transition-all flex items-center gap-2 shadow-[0_8px_24px_rgba(41,171,226,0.35)] hover:-translate-y-0.5"
        >
          Book a 20-min fit call <ArrowRight className="w-4 h-4" />
        </a>
        <a
          href="#approach"
          className="font-semibold text-[16px] text-[#72767a] px-8 py-4 rounded-md border border-[#242628] hover:border-[#29ABE2]/50 hover:text-[#e7e9ea] transition-all"
        >
          See how it works
        </a>
      </div>

      <div className="border-t border-[#242628] max-w-[1400px] mx-auto px-8 py-8 grid grid-cols-2 md:grid-cols-4">
        {[
          { n: 12, label: "M+ Pipeline Influenced" },
          { n: 40, label: "AI Workflows Shipped" },
          { n: 300, label: "Hours/Month Saved" },
          { n: 30, label: "B2B Teams Served" },
        ].map((s, i) => (
          <div
            key={s.label}
            className={cn("py-4 px-6", i < 3 && "border-r border-[#242628] max-md:even:border-r-0 max-md:border-b")}
          >
            <Counter target={s.n} />
            <p className="text-[13px] text-[#72767a] uppercase tracking-[0.08em] mt-1">{s.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ── logo bar ─────────────────────────────────────────────────────────────── */

const toolLogos = [
  { name: "HubSpot", color: "#ff7a59" },
  { name: "Apollo.io", color: "#6c5ce7" },
  { name: "Clay", color: "#29ABE2" },
  { name: "Instantly", color: "#00b894" },
  { name: "LinkedIn", color: "#0a66c2" },
  { name: "Claude AI", color: "#da7756" },
  { name: "Zapier", color: "#ff4a00" },
  { name: "ChatGPT", color: "#10a37f" },
];

function LogoBar() {
  const doubled = [...toolLogos, ...toolLogos];
  return (
    <div className="bg-[#000000] border-b border-[#242628] py-5 overflow-hidden">
      <p className="text-center text-[11px] font-semibold uppercase tracking-[0.14em] text-[#3a3d42] mb-4">
        Powered by best-in-class B2B tools
      </p>
      <div className="relative">
        <div className="flex gap-0 w-max animate-scroll-left">
          {doubled.map((t, i) => (
            <div key={i} className="flex items-center gap-2 px-10 whitespace-nowrap">
              <span className="w-2 h-2 rounded-full shrink-0" style={{ backgroundColor: t.color }} />
              <span className="text-[14px] font-bold tracking-tight" style={{ color: t.color }}>
                {t.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ── ticker ───────────────────────────────────────────────────────────────── */

function Ticker() {
  const items = ["HubSpot Breeze AI", "Clay.com", "Apollo.io AI", "Instantly AI", "LinkedIn Sales Nav", "Claude Code", "ChatGPT", "Lavender AI", "RevOps", "Perplexity", "Canva AI", "Metricool", "Zapier AI"];
  const doubled = [...items, ...items];
  return (
    <div className="overflow-hidden bg-[#17181c] border-y border-[#242628] py-4">
      <motion.div
        className="flex gap-0 w-max"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
      >
        {doubled.map((item, i) => (
          <div key={i} className="flex items-center gap-3 px-12 text-[13px] font-semibold text-[#72767a] uppercase tracking-[0.06em] whitespace-nowrap">
            <span className="w-1 h-1 rounded-full bg-mox shrink-0" />
            {item}
          </div>
        ))}
      </motion.div>
    </div>
  );
}

/* ── services ─────────────────────────────────────────────────────────────── */

const services = [
  {
    icon: "📤",
    title: "AI Pipeline Engine",
    badge: "AI",
    price: "From $4,500/mo",
    body: "Qualified meetings in your calendar every month — guaranteed minimum. We build and run your entire outbound system: ICP research, Clay enrichment, AI-personalized sequences, and inbox management.",
    cta: "Learn more",
    href: "/services/ai-pipeline-engine",
  },
  {
    icon: "🤖",
    title: "HubSpot AI Implementation",
    badge: "AI",
    price: "From $7,500 (project)",
    body: "A production-ready AI system inside your CRM in 30–45 days. AI workflows, lead scoring, enrichment automation, and Breeze AI — all built to your pipeline, not a generic template.",
    cta: "Learn more",
    href: "/services/hubspot-ai",
  },
  {
    icon: "⚙️",
    title: "Fractional RevOps + AI",
    badge: "AI",
    price: "From $6,000/mo",
    body: "Replace a $180k/yr RevOps hire for a fraction of the cost. Ongoing HubSpot management, AI system maintenance, reporting, and revenue operations — run by someone who's built these systems before.",
    cta: "Learn more",
    href: "/services/fractional-revops",
  },
];

function Services() {
  return (
    <section id="services" className="py-[120px] bg-background">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-end mb-[72px]">
          <div>
            <SectionLabel>What We Do</SectionLabel>
            <h2 className="font-bold text-[clamp(32px,4vw,52px)] tracking-[-0.02em] leading-[1.08] text-foreground">
              Three Ways to<br />Work With Us
            </h2>
          </div>
          <div>
            <p className="text-[17px] leading-[1.7] text-muted-foreground">
              Every engagement is built around one goal: qualified pipeline. Pick the model that fits where you are right now.
            </p>
            <a
              href="/contact"
              className="mt-6 inline-flex items-center gap-2 font-semibold text-[15px] text-foreground bg-[#17181c] hover:bg-[#1e1f24] border border-[#242628] px-6 py-3 rounded-md transition-all"
            >
              Book a fit call <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-px bg-[#242628] border border-[#242628] rounded-[20px] overflow-hidden">
          {services.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.1} className="group bg-[#17181c] hover:bg-[#1e1f24] transition-colors relative overflow-hidden">
              <div className="p-12 h-full flex flex-col">
                <div className="flex items-start justify-between mb-7">
                  <div className="w-12 h-12 rounded-md bg-mox/10 border border-mox/20 flex items-center justify-center text-[22px]">
                    {s.icon}
                  </div>
                  {s.badge && (
                    <span className="text-[10px] font-bold uppercase tracking-[0.12em] bg-gradient-to-r from-[#2B4EA0] to-[#29ABE2] text-white px-2.5 py-1 rounded-full">
                      ✦ AI-Enhanced
                    </span>
                  )}
                </div>
                <h3 className="font-bold text-[22px] mb-1.5 text-foreground">{s.title}</h3>
                <p className="text-[13px] font-semibold text-mox mb-3.5">{s.price}</p>
                <p className="text-[15px] leading-[1.65] text-muted-foreground flex-1">{s.body}</p>
                <a href={s.href} className="mt-6 inline-flex items-center gap-1.5 font-semibold text-[13px] text-mox group-hover:gap-3 transition-all">
                  {s.cta} →
                </a>
              </div>
              <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-mox scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300" />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── ai advantage ─────────────────────────────────────────────────────────── */

const aiCapabilities = [
  {
    icon: "🔍",
    stat: "10x",
    statLabel: "faster prospecting",
    title: "AI Prospecting at Scale",
    body: "Using Clay + Apollo AI, we enrich thousands of prospects with intent signals, funding rounds, job changes, and buying triggers — automatically. Your sales team receives a daily feed of warm, ready-to-contact leads.",
    tools: ["Clay.com", "Apollo AI", "LinkedIn Sales Nav"],
  },
  {
    icon: "✍️",
    stat: "3x",
    statLabel: "higher reply rates",
    title: "Hyper-Personalized Outreach",
    body: "Generic emails die in spam. Our AI researches each prospect — their recent posts, company news, pain points — and writes a unique, human-sounding first line for every single contact. Personalization at scale that was impossible before AI.",
    tools: ["Lavender AI", "Instantly AI", "ChatGPT"],
  },
  {
    icon: "🎯",
    stat: "40%",
    statLabel: "shorter sales cycles",
    title: "Predictive Lead Scoring",
    body: "HubSpot Breeze AI analyzes your entire pipeline and predicts which leads are most likely to close — and when. Your reps stop chasing cold leads and start spending 100% of their time on deals that are ready to move.",
    tools: ["HubSpot Breeze AI", "Predictive Analytics", "RevOps"],
  },
  {
    icon: "📊",
    stat: "Real-time",
    statLabel: "actionable insights",
    title: "AI Reporting & Intelligence",
    body: "No more digging through dashboards. Every week, AI surfaces the most critical insights from your campaigns — what's working, what's wasting budget, and the exact next move to accelerate pipeline. Strategy, automated.",
    tools: ["Perplexity", "HubSpot AI", "Custom Dashboards"],
  },
];

function AIAdvantage() {
  return (
    <section id="approach" className="py-[120px] bg-[#000000] relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,rgba(41,171,226,0.08),transparent_60%)] pointer-events-none" />

      <div className="max-w-[1200px] mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#2B4EA0]/20 to-[#29ABE2]/20 border border-[#29ABE2]/30 rounded-full px-4 py-1.5 mb-6">
            <span className="text-[#29ABE2] text-[13px] font-bold uppercase tracking-[0.1em]">✦ AI-First Agency</span>
          </div>
          <h2 className="font-bold text-[clamp(32px,4vw,52px)] tracking-[-0.02em] leading-[1.08] text-white">
            We Don&apos;t Just Use AI.<br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#2B4EA0] via-[#29ABE2] to-white">
              We Build Your Unfair Advantage With It.
            </span>
          </h2>
          <p className="mt-5 text-[17px] leading-[1.7] text-[#72767a] max-w-[560px] mx-auto">
            Every service we deliver is supercharged by an AI stack that finds more leads, personalizes every touchpoint, and turns your data into decisions — automatically.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-5">
          {aiCapabilities.map((cap, i) => (
            <Reveal key={cap.title} delay={i * 0.1}>
              <div className="group relative rounded-[20px] border border-[#242628] bg-[#17181c] hover:border-[#29ABE2]/40 hover:bg-[#0d1a2e] p-8 transition-all duration-300 overflow-hidden">
                {/* Corner glow on hover */}
                <div className="absolute top-0 right-0 w-40 h-40 bg-[radial-gradient(circle,rgba(41,171,226,0.08),transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                <div className="flex items-start gap-5">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#2B4EA0]/30 to-[#29ABE2]/20 border border-[#29ABE2]/20 flex items-center justify-center text-[22px] shrink-0">
                    {cap.icon}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-3 mb-2 flex-wrap">
                      <h3 className="font-bold text-[18px] text-white">{cap.title}</h3>
                      <div className="flex items-baseline gap-1 bg-[#29ABE2]/10 border border-[#29ABE2]/20 rounded-full px-3 py-0.5">
                        <span className="font-extrabold text-[15px] text-[#29ABE2]">{cap.stat}</span>
                        <span className="text-[11px] text-[#72767a]">{cap.statLabel}</span>
                      </div>
                    </div>
                    <p className="text-[14px] leading-[1.7] text-[#72767a] mb-5">{cap.body}</p>
                    <div className="flex flex-wrap gap-2">
                      {cap.tools.map((tool) => (
                        <span key={tool} className="text-[11px] font-semibold text-[#29ABE2] bg-[#29ABE2]/[0.07] border border-[#29ABE2]/15 rounded-md px-2.5 py-1">
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Bottom CTA strip */}
        <Reveal delay={0.2} className="mt-10">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6 rounded-[20px] border border-[#29ABE2]/20 bg-gradient-to-r from-[#0a1628] to-[#061622] px-8 py-6">
            <div>
              <p className="font-bold text-[18px] text-white">Ready to grow with AI?</p>
              <p className="text-[14px] text-[#72767a] mt-0.5">Most clients see measurable pipeline growth within 45 days.</p>
            </div>
            <a
              href="/contact"
              className="shrink-0 bg-[#29ABE2] hover:bg-[#1A9DD8] text-white font-semibold text-[14px] px-6 py-3 rounded-xl transition-all flex items-center gap-2 shadow-[0_8px_20px_rgba(41,171,226,0.3)] hover:-translate-y-0.5 whitespace-nowrap"
            >
              Book a fit call <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ── solutions ────────────────────────────────────────────────────────────── */

const solutions = [
  { num: "01 — Platform", title: "CRM Setup & Optimization", body: "Full HubSpot CRM implementation, pipeline design, deal stages, property configuration, and ongoing portal health checks." },
  { num: "02 — Technical", title: "Integrations & Automation", body: "Connect HubSpot to your stack — Slack, Salesforce, Zapier, billing tools, and custom APIs. Build workflows that eliminate manual work." },
  { num: "03 — Enablement", title: "Training & Support", body: "HubSpot onboarding, team training sessions, SOPs, and ongoing support so your team actually uses the tools you've paid for." },
  { num: "04 — Digital", title: "Landing Pages & Content", body: "High-converting landing pages, email nurture sequences, case studies, and content strategy that drives organic and paid traffic." },
  { num: "05 — Growth", title: "Outbound & Demand Gen", body: "AI-powered prospecting, cold email, LinkedIn outreach, paid ads, and ABM campaigns — coordinated to fill your pipeline consistently." },
];

function Solutions() {
  return (
    <section id="solutions" className="py-[120px] bg-[#17181c] overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-8">
        <div className="mb-[72px]">
          <SectionLabel>Five Lines of Service</SectionLabel>
          <h2 className="font-bold text-[clamp(32px,4vw,52px)] tracking-[-0.02em] leading-[1.08] text-foreground">
            Everything You Need to<br />Scale Your B2B Revenue
          </h2>
          <p className="mt-4 text-[17px] leading-[1.7] text-muted-foreground max-w-[520px]">
            From platform setup to demand generation — each practice works independently or as a unified growth system.
          </p>
        </div>

        <div className="grid md:grid-cols-5 gap-px bg-[#242628]">
          {solutions.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.08} className="bg-[#17181c] hover:bg-[#1e1f24] transition-colors p-10">
              <span className="font-extrabold text-[11px] text-mox uppercase tracking-[0.12em] block mb-5">
                {s.num}
              </span>
              <h3 className="font-bold text-[17px] text-foreground mb-3 leading-[1.3]">{s.title}</h3>
              <p className="text-[13px] leading-[1.65] text-muted-foreground">{s.body}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── numbers ──────────────────────────────────────────────────────────────── */

function Numbers() {
  return (
    <section className="py-20 bg-gradient-to-r from-[#2b4ea0] to-[#29ABE2]">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4">
          {[
            { n: 12, label: "M+ Pipeline Influenced" },
            { n: 40, label: "AI Workflows Shipped" },
            { n: 300, label: "Hours/Month Saved" },
            { n: 30, label: "B2B Teams Served" },
          ].map((s, i) => (
            <div key={s.label} className={cn("text-center py-6 px-8", i < 3 && "border-r border-white/20")}>
              <Counter target={s.n} />
              <p className="text-[14px] text-white/80 mt-2">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── markets ──────────────────────────────────────────────────────────────── */

const markets = [
  { icon: "💻", title: "SaaS & Technology", body: "Demand gen and CRM systems for software companies scaling from seed to Series B." },
  { icon: "🏢", title: "Professional Services", body: "Consultancies, agencies, and firms that need a systematic approach to pipeline development." },
  { icon: "🏭", title: "B2B Manufacturing", body: "Bringing modern inbound and CRM practices to industrial and manufacturing businesses." },
  { icon: "🏥", title: "Healthcare & Wellness", body: "Marketing strategies that grow patient acquisition and referral pipelines." },
  { icon: "🏠", title: "Real Estate", body: "Lead generation, CRM automation, and nurture flows for residential and commercial firms." },
  { icon: "🚀", title: "Startups", body: "Early-stage go-to-market execution for founders who need traction fast and a system that scales." },
];

function Markets() {
  return (
    <section id="markets" className="py-[120px] bg-background">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="mb-16">
          <SectionLabel>Industries We Serve</SectionLabel>
          <h2 className="font-bold text-[clamp(32px,4vw,52px)] tracking-[-0.02em] leading-[1.08] text-foreground">
            Specialists in B2B Growth<br />Across Key Markets
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {markets.map((m, i) => (
            <Reveal
              key={m.title}
              delay={i * 0.06}
              className="group flex items-start gap-4 p-8 bg-[#17181c] border border-[#242628] rounded-[12px] hover:border-mox hover:-translate-y-0.5 hover:shadow-[0_12px_32px_rgba(41,171,226,0.15)] transition-all duration-200"
            >
              <div className="w-11 h-11 rounded-md bg-mox/10 border border-mox/20 flex items-center justify-center text-[20px] shrink-0">
                {m.icon}
              </div>
              <div>
                <h3 className="font-bold text-[16px] mb-1 text-foreground">{m.title}</h3>
                <p className="text-[13px] text-muted-foreground">{m.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── testimonials ─────────────────────────────────────────────────────────── */

const firstColumn = testimonials.slice(0, 6);
const secondColumn = testimonials.slice(6, 12);
const thirdColumn = testimonials.slice(12, 18);

function Testimonials() {
  return (
    <section id="testimonials" className="py-[120px] bg-[#0a0a0a] overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <SectionLabel>Client Results</SectionLabel>
          <h2 className="font-bold text-[clamp(32px,4vw,52px)] tracking-[-0.02em] leading-[1.08] text-foreground">
            What Our Clients Say
          </h2>
          <p className="mt-3.5 text-[17px] leading-[1.7] text-muted-foreground max-w-[500px] mx-auto">
            Real feedback from companies we&apos;ve helped build and grow their revenue operations.
          </p>
        </motion.div>

        <div className="flex justify-center gap-6 [mask-image:linear-gradient(to_bottom,transparent,black_20%,black_80%,transparent)] max-h-[740px] overflow-hidden">
          <TestimonialsColumn testimonials={firstColumn} duration={15} />
          <TestimonialsColumn testimonials={secondColumn} className="hidden md:block" duration={19} />
          <TestimonialsColumn testimonials={thirdColumn} className="hidden lg:block" duration={17} />
        </div>
      </div>
    </section>
  );
}

/* ── team ─────────────────────────────────────────────────────────────────── */

const team = [
  {
    photo: "/Steven Nichol Guiao.png",
    imgStyle: { objectPosition: "50% 8%", transform: "scale(1.12)", transformOrigin: "50% 22%" },
    name: "Nic Guiao",
    role: "Founder, Moximize",
    badge: "Founder",
    linkedin: "https://linkedin.com/company/moximize",
    bio: "Operator-turned-consultant. Built Moximize to deliver the AI-powered HubSpot systems that most B2B teams need but can't build in-house. Every client engagement is founder-led — you work directly with me.",
  },
  {
    photo: "/Krisha Manalo.jpg",
    imgStyle: { objectPosition: "50% 12%", transform: "scale(1.18)", transformOrigin: "50% 22%" },
    name: "Krisha Manalo",
    role: "Chief Financial Officer",
    badge: "CFO",
    linkedin: "https://linkedin.com/company/moximize",
    bio: "Drives the financial health and strategic growth of the business, balancing operational efficiency with investment in innovation. Ensures every client engagement is backed by a sustainable, value-delivering structure.",
  },
  {
    photo: "/Jerson Chavez.png",
    imgStyle: { objectPosition: "50% 8%", transform: "scale(1.15)", transformOrigin: "50% 22%" },
    name: "Jerson Chavez",
    role: "Chief Revenue Officer",
    badge: "CRO",
    linkedin: "https://linkedin.com/company/moximize",
    bio: "Specializes in HubSpot and revenue operations, helping companies build structured, scalable revenue systems through automation and data-driven insights. The architect behind our clients' most impactful CRM transformations.",
  },
  {
    photo: "/Katrina Vidal.png",
    imgStyle: { objectPosition: "50% 10%", transform: "scale(1.12)", transformOrigin: "50% 20%" },
    name: "Katrina Vidal",
    role: "Chief Marketing Officer",
    badge: "CMO",
    linkedin: "https://linkedin.com/company/moximize",
    bio: "Leads brand strategy, content, and demand generation across all Moximize channels. Combines creative vision with performance marketing expertise to build campaigns that resonate with B2B buyers and drive measurable pipeline growth.",
  },
];

function Team() {
  return (
    <section id="team" className="py-[120px] bg-background">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="mb-16">
          <SectionLabel>The Team</SectionLabel>
          <h2 className="font-bold text-[clamp(32px,4vw,52px)] tracking-[-0.02em] leading-[1.08] text-foreground">
            Led by Specialists,<br />Not Generalists
          </h2>
          <p className="mt-3.5 text-[17px] leading-[1.7] text-muted-foreground max-w-[480px]">
            Our leadership team brings deep expertise in HubSpot, revenue operations, and B2B marketing.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {team.map((m, i) => (
            <Reveal
              key={m.name}
              delay={i * 0.1}
              className="group rounded-[24px] border border-[#242628] overflow-hidden bg-[#17181c] hover:shadow-[0_24px_56px_rgba(41,171,226,0.14)] hover:border-[#29ABE2]/40 hover:-translate-y-1.5 transition-all duration-300"
            >
              {/* Photo area */}
              <div className="h-[340px] relative overflow-hidden">
                <Image
                  src={m.photo}
                  alt={m.name}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition-all duration-500 grayscale-[15%] contrast-[1.04] group-hover:grayscale-0 group-hover:brightness-[1.02]"
                  style={m.imgStyle}
                />
                {/* Vignette — unifies skin tones and background across all three photos */}
                <div className="absolute inset-0 shadow-[inset_0_0_60px_rgba(0,0,0,0.45)]" />
                {/* Bottom fade into card */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#17181c] via-[#17181c]/20 to-transparent" />
                {/* Badge */}
                <span className="absolute bottom-4 left-4 z-10 bg-[#29ABE2] text-white text-[11px] font-bold uppercase tracking-[0.12em] px-3 py-1.5 rounded-full shadow-[0_4px_12px_rgba(41,171,226,0.4)]">
                  {m.badge}
                </span>
              </div>

              {/* Info */}
              <div className="p-7">
                <div className="flex items-start justify-between gap-3 mb-2">
                  <h3 className="font-bold text-[20px] text-foreground leading-tight">{m.name}</h3>
                  <a
                    href={m.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="shrink-0 w-8 h-8 rounded-lg bg-[#242628] hover:bg-[#29ABE2] flex items-center justify-center text-[#72767a] hover:text-white transition-all duration-200 mt-0.5"
                    aria-label={`${m.name} LinkedIn`}
                  >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </a>
                </div>
                <div className="text-[#29ABE2] font-semibold text-[13px] mb-3 tracking-wide">{m.role}</div>
                <p className="text-[13px] leading-[1.7] text-muted-foreground">{m.bio}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── pricing ──────────────────────────────────────────────────────────────── */

const pricingPlans = [
  {
    id: "basic",
    name: "Basic",
    tagline: "Build the foundation right.",
    bestFor: "Early-stage teams with 1–5 salespeople",
    monthlyPrice: 1497,
    annualPrice: 1197,
    annualTotal: 14364,
    isPopular: false,
    spotsLeft: null,
    cta: "Start with Basic",
    groups: [
      {
        label: "AI Lead Generation",
        icon: "🤖",
        items: [
          { text: "AI prospect list building via Apollo.io (500 leads/mo)", included: true },
          { text: "AI-written personalized email first lines", included: true },
          { text: "1 active outbound campaign (email)", included: true },
          { text: "LinkedIn outbound + Clay enrichment", included: false },
        ],
      },
      {
        label: "CRM & Pipeline",
        icon: "⚙️",
        items: [
          { text: "Full HubSpot CRM setup + pipeline design", included: true },
          { text: "Up to 500 contacts managed", included: true },
          { text: "3 workflow automations", included: true },
          { text: "HubSpot Breeze AI lead scoring", included: false },
        ],
      },
      {
        label: "Reporting & Strategy",
        icon: "📊",
        items: [
          { text: "Monthly AI performance summary", included: true },
          { text: "Monthly strategy check-in call (30 min)", included: true },
          { text: "Dedicated account manager", included: false },
        ],
      },
    ],
  },
  {
    id: "growth",
    name: "Growth",
    tagline: "Your full revenue engine, fully managed.",
    bestFor: "Scaling teams targeting 10–20 meetings/month",
    monthlyPrice: 2497,
    annualPrice: 1997,
    annualTotal: 23964,
    isPopular: true,
    spotsLeft: 3,
    cta: "Start Growing",
    groups: [
      {
        label: "AI Lead Generation",
        icon: "🤖",
        items: [
          { text: "Clay + Apollo AI enrichment (2,000 leads/mo)", included: true },
          { text: "AI-personalized outreach at scale (every contact)", included: true },
          { text: "LinkedIn + email outbound (up to 3 campaigns)", included: true },
          { text: "Intent signal targeting + buying trigger alerts", included: true },
        ],
      },
      {
        label: "CRM & Pipeline",
        icon: "⚙️",
        items: [
          { text: "Full HubSpot CRM setup + pipeline design", included: true },
          { text: "Up to 2,000 contacts + HubSpot Breeze AI scoring", included: true },
          { text: "Advanced automations + A/B testing", included: true },
          { text: "Custom HubSpot integrations", included: false },
        ],
      },
      {
        label: "Reporting & Strategy",
        icon: "📊",
        items: [
          { text: "Bi-weekly AI insights reports", included: true },
          { text: "Pipeline velocity + ROI dashboard", included: true },
          { text: "Bi-weekly strategy calls (45 min)", included: true },
          { text: "Dedicated account manager", included: true },
        ],
      },
    ],
  },
  {
    id: "premium",
    name: "Premium",
    tagline: "White-glove service. Unlimited scope.",
    bestFor: "Established teams who want a true growth partner",
    monthlyPrice: 3997,
    annualPrice: 3197,
    annualTotal: 38364,
    isPopular: false,
    spotsLeft: null,
    cta: "Go Premium",
    groups: [
      {
        label: "AI Lead Generation",
        icon: "🤖",
        items: [
          { text: "Full AI stack: Clay + Apollo + LinkedIn Sales Nav", included: true },
          { text: "Unlimited contacts + AI enrichment", included: true },
          { text: "ABM campaigns with AI account targeting", included: true },
          { text: "LinkedIn Ads management (budget separate)", included: true },
        ],
      },
      {
        label: "CRM & Pipeline",
        icon: "⚙️",
        items: [
          { text: "Everything in Growth", included: true },
          { text: "Custom HubSpot integrations (Zapier, Salesforce, etc.)", included: true },
          { text: "Full RevOps audit + AI workflow optimization", included: true },
          { text: "Predictive pipeline analytics dashboard", included: true },
        ],
      },
      {
        label: "Campaigns & Outreach",
        icon: "📤",
        items: [
          { text: "Unlimited active campaigns", included: true },
          { text: "LinkedIn ads management (budget separate)", included: true },
          { text: "Content strategy + monthly content pieces", included: true },
          { text: "Full ABM (Account-Based Marketing) setup", included: true },
        ],
      },
      {
        label: "Reporting & Strategy",
        icon: "📊",
        items: [
          { text: "Weekly performance reports", included: true },
          { text: "Executive-ready custom dashboards", included: true },
          { text: "Weekly strategy calls (60 min)", included: true },
          { text: "Quarterly business review (QBR)", included: true },
        ],
      },
      {
        label: "Support",
        icon: "💬",
        items: [
          { text: "Dedicated account manager", included: true },
          { text: "Priority support — 4h response guarantee", included: true },
          { text: "Dedicated Slack channel", included: true },
          { text: "Direct access to founders", included: true },
        ],
      },
    ],
  },
];

const pricingFaqs = [
  {
    q: "Is there a setup fee?",
    a: "No. Onboarding, CRM configuration, and campaign setup are all included in your monthly plan — no surprise fees.",
  },
  {
    q: "How quickly will I see results?",
    a: "Most clients see measurable pipeline activity within 30–45 days. Full system results typically emerge within 60–90 days.",
  },
  {
    q: "Can I switch plans or cancel?",
    a: "Yes. You can upgrade or downgrade at any time. Plans are month-to-month after the first 90 days — no long-term lock-in.",
  },
  {
    q: "Do you work with my industry?",
    a: "We specialize in B2B — SaaS, professional services, manufacturing, healthcare, real estate, and startups. We assess fit on your discovery call.",
  },
];

function Pricing() {
  const [cycle, setCycle] = useState<"monthly" | "annually">("monthly");
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const scrollToContact = () => window.open(MEETING_URL, "_blank", "noopener,noreferrer");

  return (
    <section id="pricing" className="bg-[#000000] py-[120px]">
      <div className="max-w-[1200px] mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-10">
          <SectionLabel>Transparent Pricing</SectionLabel>
          <h2 className="font-bold text-[clamp(32px,4vw,52px)] tracking-[-0.02em] leading-[1.08] text-white">
            Invest in Growth.<br />Not Overhead.
          </h2>
          <p className="mt-4 text-[17px] text-[#72767a] max-w-[500px] mx-auto">
            A full-time marketing hire costs $80K–$120K/yr in salary alone. Our plans deliver a complete, managed revenue system — starting at $1,497/mo.
          </p>
        </div>

        {/* Trust bar */}
        <div className="flex flex-wrap items-center justify-center gap-6 mb-10">
          {[
            { icon: "🏆", text: "HubSpot Certified Partner" },
            { icon: "📈", text: "30+ B2B Companies Helped" },
            { icon: "🛡️", text: "90-Day Results Commitment" },
            { icon: "🔓", text: "No Lock-In After 90 Days" },
          ].map((t) => (
            <div key={t.text} className="flex items-center gap-2 bg-[#17181c] border border-[#242628] rounded-full px-4 py-2">
              <span className="text-[15px]">{t.icon}</span>
              <span className="text-[13px] font-semibold text-[#d9d9d9]">{t.text}</span>
            </div>
          ))}
        </div>

        {/* Billing toggle */}
        <div className="flex justify-center mb-12">
          <div className="flex items-center gap-1 bg-[#17181c] border border-[#242628] rounded-full p-1">
            {(["monthly", "annually"] as const).map((c) => (
              <button
                key={c}
                onClick={() => setCycle(c)}
                className={cn(
                  "relative px-6 py-2 rounded-full text-[14px] font-semibold transition-all duration-200",
                  cycle === c
                    ? "bg-[#29ABE2] text-white shadow-[0_0_16px_rgba(41,171,226,0.4)]"
                    : "text-[#72767a] hover:text-white"
                )}
              >
                {c === "monthly" ? "Monthly" : "Annually"}
                {c === "annually" && (
                  <span className="absolute -top-3 -right-2 bg-[#2B4EA0] text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full whitespace-nowrap">
                    Save 20%
                  </span>
                )}
              </button>
            ))}
          </div>
        </div>

        {/* vs In-House comparison */}
        <div className="mb-12 overflow-x-auto">
          <table className="w-full text-[13px] border-collapse">
            <thead>
              <tr>
                <th className="text-left py-3 px-4 text-[#72767a] font-semibold uppercase tracking-[0.08em]" />
                <th className="py-3 px-4 text-center text-[#72767a] font-semibold uppercase tracking-[0.08em]">In-House Hire</th>
                <th className="py-3 px-4 text-center bg-[#29ABE2]/10 rounded-t-xl text-[#29ABE2] font-bold uppercase tracking-[0.08em]">Moximize</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Monthly cost", "$8,000–$12,000", "From $1,497"],
                ["Ramp time", "3–6 months", "Live in 2 weeks"],
                ["Tools included", "Extra $500–$2K/mo", "All included"],
                ["HubSpot expertise", "1 generalist", "Certified team"],
                ["Scalability", "Hire more staff", "Upgrade your plan"],
                ["Cancel anytime", "Severance + notice", "Month-to-month"],
              ].map(([label, inhouseVal, moxVal], i) => (
                <tr key={i} className={cn("border-t border-[#242628]", i % 2 === 0 && "bg-[#17181c]/30")}>
                  <td className="py-3 px-4 font-medium text-[#d9d9d9]">{label}</td>
                  <td className="py-3 px-4 text-center text-[#72767a]">{inhouseVal}</td>
                  <td className="py-3 px-4 text-center bg-[#29ABE2]/5 font-semibold text-[#29ABE2]">{moxVal}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-6 items-start">
          {pricingPlans.map((plan, i) => (
            <Reveal key={plan.id} delay={i * 0.1}>
              <div
                className={cn(
                  "relative rounded-[24px] border flex flex-col overflow-hidden transition-all duration-300",
                  plan.isPopular
                    ? "border-[#29ABE2]/60 bg-[#0a1628] shadow-[0_0_60px_rgba(41,171,226,0.18)]"
                    : "border-[#242628] bg-[#17181c] hover:border-[#29ABE2]/30 hover:shadow-[0_20px_48px_rgba(41,171,226,0.08)]"
                )}
              >
                {/* Popular glow strip */}
                {plan.isPopular && (
                  <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#2B4EA0] via-[#29ABE2] to-[#2B4EA0]" />
                )}

                {/* Card header */}
                <div className="p-8 pb-6">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <span className="font-extrabold text-[22px] text-white">{plan.name}</span>
                      {plan.isPopular && (
                        <span className="ml-3 text-[11px] font-bold uppercase tracking-[0.1em] bg-[#29ABE2] text-white px-2.5 py-1 rounded-full">
                          Most Popular
                        </span>
                      )}
                    </div>
                    {plan.spotsLeft && (
                      <span className="text-[11px] font-semibold text-[#29ABE2] bg-[#29ABE2]/10 border border-[#29ABE2]/20 px-2.5 py-1 rounded-full whitespace-nowrap">
                        🔥 {plan.spotsLeft} spots left
                      </span>
                    )}
                  </div>

                  <p className="text-[14px] text-[#72767a] mb-5 leading-[1.5]">{plan.tagline}</p>

                  {/* Price */}
                  <div className="mb-2">
                    <div className="flex items-end gap-1.5">
                      <span className="font-extrabold text-[44px] leading-none text-white">
                        ${cycle === "monthly" ? plan.monthlyPrice.toLocaleString() : plan.annualPrice.toLocaleString()}
                      </span>
                      <span className="text-[#72767a] text-[15px] mb-1.5">/mo</span>
                    </div>
                    {cycle === "annually" && (
                      <div className="flex items-center gap-2 mt-1">
                        <span className="text-[13px] text-[#72767a] line-through">${plan.monthlyPrice.toLocaleString()}/mo</span>
                        <span className="text-[13px] text-[#29ABE2] font-semibold">
                          Save ${((plan.monthlyPrice - plan.annualPrice) * 12).toLocaleString()}/yr
                        </span>
                      </div>
                    )}
                    {cycle === "annually" && (
                      <p className="text-[12px] text-[#72767a] mt-0.5">
                        Billed annually — ${plan.annualTotal.toLocaleString()}/yr
                      </p>
                    )}
                  </div>

                  {/* Best for */}
                  <div className="flex items-center gap-2 mt-4 bg-[#29ABE2]/[0.06] border border-[#29ABE2]/15 rounded-lg px-3 py-2">
                    <span className="text-[12px]">🎯</span>
                    <span className="text-[12px] text-[#72767a]">
                      <span className="text-[#d9d9d9] font-semibold">Best for: </span>
                      {plan.bestFor}
                    </span>
                  </div>
                </div>

                {/* CTA */}
                <div className="px-8 pb-6">
                  <a
                    href="/contact"
                    className={cn(
                      "w-full py-3.5 rounded-xl font-semibold text-[15px] transition-all duration-200 flex items-center justify-center gap-2",
                      plan.isPopular
                        ? "bg-[#29ABE2] hover:bg-[#1A9DD8] text-white shadow-[0_8px_24px_rgba(41,171,226,0.35)] hover:-translate-y-0.5"
                        : "bg-[#242628] hover:bg-[#2e3032] text-white border border-[#3a3c3e] hover:border-[#29ABE2]/40"
                    )}
                  >
                    {plan.cta} <ArrowRight className="w-4 h-4" />
                  </a>
                  <p className="text-center text-[11px] text-[#72767a] mt-2">
                    Starts with a free 30-min discovery call
                  </p>
                </div>

                {/* Divider */}
                <div className="mx-8 border-t border-[#242628]" />

                {/* Feature groups */}
                <div className="p-8 pt-6 flex flex-col gap-6 flex-1">
                  {plan.groups.map((group) => (
                    <div key={group.label}>
                      <div className="flex items-center gap-2 mb-3">
                        <span className="text-[13px]">{group.icon}</span>
                        <span className="text-[11px] font-bold uppercase tracking-[0.1em] text-[#72767a]">
                          {group.label}
                        </span>
                      </div>
                      <ul className="space-y-2">
                        {group.items.map((item) => (
                          <li key={item.text} className="flex items-start gap-2.5">
                            <span
                              className={cn(
                                "mt-0.5 shrink-0 w-4 h-4 rounded-full flex items-center justify-center text-[10px] font-bold",
                                item.included
                                  ? "bg-[#29ABE2]/15 text-[#29ABE2]"
                                  : "bg-[#242628] text-[#4a4c4e]"
                              )}
                            >
                              {item.included ? "✓" : "×"}
                            </span>
                            <span
                              className={cn(
                                "text-[13px] leading-[1.55]",
                                item.included ? "text-[#d9d9d9]" : "text-[#4a4c4e] line-through"
                              )}
                            >
                              {item.text}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Value comparison callout */}
        <Reveal delay={0.1} className="mt-10">
          <div className="rounded-[20px] border border-[#29ABE2]/20 bg-gradient-to-r from-[#0a1628] to-[#061622] p-8 flex flex-col md:flex-row items-center gap-6">
            <div className="text-[40px] shrink-0">💡</div>
            <div className="flex-1">
              <h4 className="font-bold text-[18px] text-white mb-1.5">
                Why pay $80K–$120K for a full-time hire when you can have the whole stack?
              </h4>
              <p className="text-[14px] text-[#72767a] leading-[1.7]">
                Our Growth plan replaces a senior marketing manager, a HubSpot admin, and an outbound SDR — fully managed, with no overhead, benefits, or ramp time. Most clients see ROI within the first 90 days.
              </p>
            </div>
            <a
              href="/contact"
              className="shrink-0 bg-[#29ABE2] hover:bg-[#1A9DD8] text-white font-semibold text-[14px] px-6 py-3 rounded-xl transition-all whitespace-nowrap"
            >
              Book a fit call
            </a>

          </div>
        </Reveal>

        {/* 90-day guarantee */}
        <Reveal delay={0.1} className="mt-6">
          <div className="rounded-[20px] border border-[#242628] bg-[#17181c] p-8 flex flex-col md:flex-row items-center gap-6 text-center md:text-left">
            <div className="w-16 h-16 rounded-full bg-[#29ABE2]/10 border border-[#29ABE2]/30 flex items-center justify-center text-[28px] shrink-0 mx-auto md:mx-0">
              🛡️
            </div>
            <div className="flex-1">
              <h4 className="font-bold text-[18px] text-white mb-1">90-Day Pipeline Guarantee</h4>
              <p className="text-[14px] text-[#72767a] leading-[1.7]">
                Measurable pipeline in 90 days — or we keep working free until you get it. No asterisks. No excuses.
              </p>
            </div>
          </div>
        </Reveal>

        {/* FAQ */}
        <div className="mt-16">
          <h3 className="font-bold text-[24px] text-white text-center mb-8">Common Questions</h3>
          <div className="grid md:grid-cols-2 gap-4">
            {pricingFaqs.map((faq, i) => (
              <button
                key={i}
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
                className="text-left bg-[#17181c] border border-[#242628] hover:border-[#29ABE2]/30 rounded-[16px] p-6 transition-all duration-200"
              >
                <div className="flex items-start justify-between gap-4">
                  <span className="font-semibold text-[15px] text-white">{faq.q}</span>
                  <span className={cn("text-[#29ABE2] text-[20px] leading-none shrink-0 transition-transform", openFaq === i && "rotate-45")}>+</span>
                </div>
                {openFaq === i && (
                  <p className="mt-3 text-[13px] text-[#72767a] leading-[1.7]">{faq.a}</p>
                )}
              </button>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

/* ── certifications ───────────────────────────────────────────────────────── */

const certs = [
  { icon: "🏆", label: "HubSpot Certified" },
  { icon: "📊", label: "HubSpot Marketing" },
  { icon: "🔗", label: "HubSpot Sales" },
  { icon: "⚙️", label: "HubSpot RevOps" },
  { icon: "📧", label: "Email Marketing" },
  { icon: "🎯", label: "Content Marketing" },
];

function Certifications() {
  return (
    <section className="py-20 bg-[#181818] border-t border-[#242628]">
      <div className="max-w-[1200px] mx-auto px-6 text-center">
        <p className="text-[14px] text-muted-foreground mb-12">
          Certified across the platforms and disciplines that drive B2B growth
        </p>
        <div className="flex flex-wrap items-center justify-center gap-12">
          {certs.map((c) => (
            <div key={c.label} className="flex flex-col items-center gap-2">
              <div className="w-14 h-14 rounded-[12px] bg-[#17181c] border border-[#242628] flex items-center justify-center text-[26px]">
                {c.icon}
              </div>
              <span className="text-[12px] font-semibold uppercase tracking-[0.06em] text-muted-foreground">
                {c.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── resources ────────────────────────────────────────────────────────────── */

const caseStudyPreviews = [
  {
    slug: "b2b-saas-pipeline-growth",
    tag: "Outbound · AI Lead Gen",
    title: "B2B SaaS Platform: 0 to 10 Qualified Meetings/Month in 60 Days",
    result: "+340%",
    metric: "pipeline growth",
    industry: "SaaS",
  },
  {
    slug: "hubspot-crm-implementation",
    tag: "HubSpot · CRM",
    title: "Professional Services Firm: 95% HubSpot Adoption in 3 Weeks",
    result: "95%",
    metric: "CRM adoption rate",
    industry: "Professional Services",
  },
  {
    slug: "cold-email-outbound",
    tag: "Cold Email · LinkedIn",
    title: "FinTech Startup: 15 Demos/Month From Cold Outreach in 6 Weeks",
    result: "15",
    metric: "demos booked/month",
    industry: "FinTech",
  },
];

const resources = [
  {
    color: "from-[#2b4ea0] to-[#29ABE2]",
    tag: "Guide",
    title: "The Complete HubSpot CRM Setup Checklist for B2B Teams",
    body: "A step-by-step framework for implementing HubSpot the right way — from pipeline design to automation workflows — so your team actually adopts it.",
    href: "/resources/hubspot-crm-checklist",
  },
  {
    color: "from-[#061622] to-[#0d3b6e]",
    tag: "Playbook",
    title: "Cold Email That Books Meetings: Our 3-Step Outbound System",
    body: "The exact framework we use to build cold email campaigns that achieve 40%+ open rates — including lead sourcing, copywriting, and follow-up sequencing.",
    href: "/resources/cold-email-playbook",
  },
  {
    color: "from-[#17181c] to-[#29ABE2]/30",
    tag: "Template",
    title: "B2B Marketing ROI Dashboard: Track What Actually Matters",
    body: "A ready-to-use HubSpot reporting template that surfaces the metrics leadership cares about — pipeline created, cost per lead, and revenue attribution.",
    href: "/resources/b2b-roi-dashboard",
  },
];

function Resources() {
  return (
    <section id="resources" className="py-[120px] bg-background">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="mb-16">
          <SectionLabel>Resources</SectionLabel>
          <h2 className="font-bold text-[clamp(32px,4vw,52px)] tracking-[-0.02em] leading-[1.08] text-foreground">
            Insights for B2B<br />Revenue Leaders
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {resources.map((r, i) => (
            <Reveal
              key={r.title}
              delay={i * 0.08}
              className="group rounded-[20px] border border-[#242628] overflow-hidden bg-[#17181c] hover:shadow-[0_16px_40px_rgba(41,171,226,0.12)] hover:border-mox/30 hover:-translate-y-0.5 transition-all duration-200 cursor-pointer"
            >
              <a href={r.href} className="block h-full">
                <div className={cn("h-40 bg-gradient-to-br flex items-end p-7", r.color)}>
                  <span className="text-[11px] font-semibold uppercase tracking-[0.1em] text-white/80 bg-black/20 px-2.5 py-1 rounded">
                    {r.tag}
                  </span>
                </div>
                <div className="p-7">
                  <h3 className="font-bold text-[18px] mb-2.5 leading-[1.3] text-foreground">{r.title}</h3>
                  <p className="text-[14px] text-muted-foreground leading-[1.6] mb-5">{r.body}</p>
                  <span className="font-semibold text-[13px] text-mox inline-flex items-center gap-1.5 group-hover:gap-3 transition-all">
                    Get free access →
                  </span>
                </div>
              </a>
            </Reveal>
          ))}
        </div>

        {/* ── Case Studies ── */}
        <div className="mt-20 pt-16 border-t border-[#242628]">
          <div className="flex items-end justify-between mb-10">
            <div>
              <SectionLabel>Case Studies</SectionLabel>
              <h3 className="font-bold text-[clamp(26px,3vw,40px)] tracking-[-0.02em] leading-[1.1] text-foreground">
                Real Results.<br />Real Clients.
              </h3>
            </div>
            <a
              href="/case-studies"
              className="hidden md:inline-flex items-center gap-2 font-semibold text-[14px] text-[#29ABE2] border border-[#29ABE2]/30 hover:border-[#29ABE2] hover:bg-[#29ABE2]/10 px-5 py-2.5 rounded-full transition-all"
            >
              View all case studies <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          <div className="grid md:grid-cols-3 gap-5">
            {caseStudyPreviews.map((c, i) => (
              <Reveal key={c.slug} delay={i * 0.08}>
                <a
                  href={`/case-studies/${c.slug}`}
                  className="group flex flex-col h-full rounded-[20px] border border-[#242628] bg-[#17181c] hover:border-[#29ABE2]/40 hover:shadow-[0_16px_40px_rgba(41,171,226,0.10)] hover:-translate-y-0.5 transition-all duration-200 overflow-hidden p-7"
                >
                  <span className="text-[11px] font-bold uppercase tracking-[0.1em] text-[#29ABE2] mb-3 block">
                    {c.tag}
                  </span>
                  <h4 className="font-bold text-[17px] leading-[1.3] text-white mb-4 flex-1 group-hover:text-[#29ABE2] transition-colors">
                    {c.title}
                  </h4>
                  <div className="flex items-center justify-between pt-4 border-t border-[#242628]">
                    <div>
                      <p className="text-[24px] font-extrabold text-[#29ABE2] leading-none">{c.result}</p>
                      <p className="text-[12px] text-[#72767a] mt-1">{c.metric}</p>
                    </div>
                    <ArrowRight className="w-5 h-5 text-[#29ABE2] group-hover:translate-x-1 transition-transform" />
                  </div>
                </a>
              </Reveal>
            ))}
          </div>

          <div className="mt-6 md:hidden text-center">
            <a
              href="/case-studies"
              className="inline-flex items-center gap-2 font-semibold text-[14px] text-[#29ABE2]"
            >
              View all case studies <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ── contact ──────────────────────────────────────────────────────────────── */

function Contact() {
  useHubSpotForm({ target: "#hs-form-container", redirectUrl: "/thank-you" });

  return (
    <section id="contact" className="py-[120px] bg-[#17181c]">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-20 items-start">

          {/* Left column */}
          <div>
            <SectionLabel>Get In Touch</SectionLabel>
            <h2 className="font-bold text-[clamp(32px,4vw,52px)] tracking-[-0.02em] leading-[1.08] text-foreground mb-6">
              Ready to build your<br />AI-powered growth system?
            </h2>
            <p className="text-[16px] leading-[1.7] text-muted-foreground mb-10">
              We&apos;ll look at your HubSpot setup, understand your goals, and tell you honestly whether Moximize is the right fit. No pitch — just a straight conversation.
            </p>

            <div className="flex flex-col gap-5 mb-10">
              {[
                { icon: "📧", label: "Email", value: "Stevenguiao@moximize.net", href: "mailto:Stevenguiao@moximize.net" },
                { icon: "📞", label: "Phone", value: "+1 (863) 340-7702", href: "tel:+18633407702" },
                { icon: "📍", label: "Location", value: "Westfield Residences, Balanga City, Bataan, Philippines", href: undefined },
              ].map((d) => (
                <div key={d.label} className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-md bg-mox/10 border border-mox/20 flex items-center justify-center text-[16px] shrink-0">
                    {d.icon}
                  </div>
                  <div>
                    <strong className="block text-[13px] text-muted-foreground font-medium uppercase tracking-[0.06em] mb-0.5">
                      {d.label}
                    </strong>
                    {d.href ? (
                      <a href={d.href} className="text-[15px] text-foreground hover:text-mox transition-colors">
                        {d.value}
                      </a>
                    ) : (
                      <span className="text-[15px] text-foreground">{d.value}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Social + trust badge */}
            <div className="flex gap-3 mb-10">
              {[
                { href: "https://linkedin.com/company/moximize", abbr: "in" },
                { href: "https://facebook.com/moximizeco", abbr: "f" },
                { href: "https://instagram.com/moximize.co", abbr: "ig" },
              ].map((s) => (
                <a
                  key={s.abbr}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-md bg-[#242628] border border-[#242628] flex items-center justify-center text-muted-foreground text-[14px] font-semibold hover:bg-mox hover:border-mox hover:text-white transition-all"
                >
                  {s.abbr}
                </a>
              ))}
            </div>

            {/* What to expect */}
            <div className="rounded-[16px] border border-[#242628] bg-[#000000] p-6">
              <p className="text-[12px] font-bold uppercase tracking-[0.1em] text-mox mb-4">What happens next</p>
              <ul className="space-y-3">
                {[
                  "We'll look at your current HubSpot setup and pipeline",
                  "Tell you honestly whether Moximize is a fit",
                  "If we're not the right fit, we'll point you toward who is",
                ].map((step, i) => (
                  <li key={i} className="flex items-start gap-3 text-[14px] text-muted-foreground">
                    <span className="w-5 h-5 rounded-full bg-mox/10 border border-mox/20 text-mox text-[11px] font-bold flex items-center justify-center shrink-0 mt-0.5">
                      {i + 1}
                    </span>
                    {step}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right column — HubSpot form card */}
          <div className="relative">
            {/* Glow behind the card */}
            <div className="absolute -inset-4 bg-[radial-gradient(ellipse_at_50%_0%,rgba(41,171,226,0.10),transparent_70%)] pointer-events-none rounded-[40px]" />

            <div className="relative bg-[#000000] border border-[#242628] rounded-[32px] overflow-hidden">
              {/* Card top accent bar */}
              <div className="h-[3px] bg-gradient-to-r from-[#2B4EA0] via-[#29ABE2] to-[#2B4EA0]" />

              <div className="p-10">
                {/* Card header */}
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#2B4EA0] to-[#29ABE2] flex items-center justify-center text-white font-black text-[20px] shrink-0 shadow-[0_4px_16px_rgba(41,171,226,0.35)]">
                    M
                  </div>
                  <div>
                    <h3 className="font-bold text-[20px] text-foreground leading-tight">Book a 20-min fit call</h3>
                    <p className="text-[13px] text-muted-foreground mt-0.5">20 minutes. No pitch. Straight talk.</p>
                  </div>
                </div>

                {/* Trust chips */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {["✓ Free 20-min call", "✓ No commitment", "✓ Honest fit assessment"].map((t) => (
                    <span key={t} className="text-[12px] font-semibold text-[#29ABE2] bg-[#29ABE2]/[0.07] border border-[#29ABE2]/20 rounded-full px-3 py-1">
                      {t}
                    </span>
                  ))}
                </div>

                {/* HubSpot form mounts here */}
                <div id="hs-form-container" />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

/* ── footer ───────────────────────────────────────────────────────────────── */

function Footer() {
  return (
    <footer className="bg-[#000000] border-t border-[#242628] pt-16 pb-8">
      <div className="max-w-[1400px] mx-auto px-8">
        <div className="grid md:grid-cols-[2fr_1fr_1fr_1fr] gap-12 mb-14">
          <div>
            <a href="/" className="block mb-4">
              <Logo />
            </a>
            <p className="text-[14px] text-muted-foreground leading-[1.7] max-w-[280px] mb-6">
              AI-powered growth systems for US B2B teams on HubSpot.
            </p>
            <div className="flex gap-3">
              {[
                { href: "https://linkedin.com/company/moximize", abbr: "in" },
                { href: "https://facebook.com/moximizeco", abbr: "f" },
                { href: "https://instagram.com/moximize.co", abbr: "ig" },
              ].map((s) => (
                <a
                  key={s.abbr}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-md bg-[#17181c] border border-[#242628] flex items-center justify-center text-muted-foreground text-[13px] font-semibold hover:bg-mox hover:border-mox hover:text-white transition-all"
                >
                  {s.abbr}
                </a>
              ))}
            </div>
          </div>

          {[
            {
              heading: "Services",
              links: [
                { label: "AI Pipeline Engine", href: "/services/ai-pipeline-engine" },
                { label: "HubSpot AI Implementation", href: "/services/hubspot-ai" },
                { label: "Fractional RevOps + AI", href: "/services/fractional-revops" },
              ],
            },
            {
              heading: "Resources",
              links: [
                { label: "Case Studies", href: "/case-studies" },
                { label: "Insights", href: "/insights" },
              ],
            },
            {
              heading: "Company",
              links: [
                { label: "About", href: "/about" },
                { label: "Contact", href: "/contact" },
              ],
            },
          ].map((col) => (
            <div key={col.heading}>
              <h4 className="text-[13px] font-semibold uppercase tracking-[0.08em] text-muted-foreground mb-5">
                {col.heading}
              </h4>
              <ul className="space-y-2.5">
                {col.links.map((l) => (
                  <li key={l.label}>
                    <a href={l.href} className="text-[14px] text-muted-foreground hover:text-foreground transition-colors">
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-[#242628] pt-6 flex flex-wrap items-center justify-between gap-3">
          <p className="text-[13px] text-muted-foreground">© 2026 Moximize. All rights reserved.</p>
          <div className="flex gap-6">
            {[
              { label: "Privacy Policy", href: "/privacy" },
              { label: "Terms of Service", href: "/terms" },
              { label: "Master Services Agreement", href: "/msa" },
            ].map((l) => (
              <a key={l.label} href={l.href} className="text-[13px] text-muted-foreground hover:text-foreground transition-colors">
                {l.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

/* ── page ─────────────────────────────────────────────────────────────────── */

export default function Page() {
  return (
    <main className="overflow-x-hidden">
      <Nav />
      <HeroGeometric
        badge="AI-Powered Growth Partner for US B2B Teams"
        title1="AI-powered growth systems"
        title2="for US B2B teams on HubSpot."
      />
      <HeroBottom />
      <LogoBar />
      <Services />
      <AIAdvantage />
      <IntegrationHero ctaHref="/contact" />
      <Solutions />
      <Numbers />
      <Markets />
      <Testimonials />
      <Team />
      <Pricing />
      <Certifications />
      <Resources />
      <Contact />
      <Footer />
    </main>
  );
}
