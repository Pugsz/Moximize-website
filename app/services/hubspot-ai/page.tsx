import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "HubSpot AI Build — Moximize",
  description: "A production-ready AI system inside your HubSpot portal in 30–45 days. Lead scoring, automated workflows, and real-time pipeline intelligence.",
  alternates: { canonical: "https://moximize.net/services/hubspot-ai" },
};

const included = [
  "Full HubSpot portal audit + data cleanup",
  "Custom AI lead scoring (Breeze AI + custom models)",
  "Automated qualification + routing workflows",
  "AI-powered email sequences and follow-ups",
  "Pipeline intelligence dashboard",
  "HubSpot–stack integrations (Slack, billing, etc.)",
  "Team training and SOPs",
  "30 days post-launch support",
];

const steps = [
  { n: "01", title: "Audit & Architecture", body: "We start by auditing your existing HubSpot portal — data quality, pipeline configuration, existing automations, and integration gaps. We map the architecture before writing a single line of code." },
  { n: "02", title: "Data Foundation", body: "Clean data is everything. We normalise contact and company records, fix property mappings, and deduplicate your database so AI models have accurate inputs." },
  { n: "03", title: "AI Model Configuration", body: "We configure HubSpot Breeze AI lead scoring trained on your historical data — which companies closed, which stalled, which churned. Your CRM learns your buyers." },
  { n: "04", title: "Workflow Build", body: "Automated sequences for lead qualification, sales hand-off, deal stage progression, and re-engagement. Workflows that replace manual rep tasks without removing human judgment." },
  { n: "05", title: "Reporting + Handoff", body: "We build your executive dashboard — pipeline velocity, source attribution, AI scoring distribution — and train your team on the system we've built. You own everything." },
];

const faqs = [
  { q: "How long does the build take?", a: "Most builds complete in 30–45 days. Complex implementations with multiple integrations or large contact databases may take up to 60 days." },
  { q: "Do we need a paid HubSpot plan?", a: "Yes. HubSpot Breeze AI features require at minimum a Professional tier portal. We'll advise on the right tier for your needs before the engagement starts." },
  { q: "What happens after the 30-day support period?", a: "You own the system completely. Many clients transition to our Fractional RevOps service for ongoing optimisation, but it's not required." },
  { q: "Can you work with our existing HubSpot setup?", a: "Yes. We often build on top of existing portals. The audit phase assesses what's there and what needs to change before we start building." },
];

export default function HubSpotAIPage() {
  return (
    <div className="min-h-screen bg-[#000000] text-[#e7e9ea]">
      <div className="max-w-[860px] mx-auto px-6 py-20">
        <Link href="/" className="text-[#29ABE2] text-[14px] font-semibold hover:underline mb-12 block">
          ← Back to Moximize
        </Link>

        <span className="inline-block text-[11px] font-bold uppercase tracking-[0.12em] bg-[#29ABE2]/10 border border-[#29ABE2]/30 text-[#29ABE2] px-3 py-1 rounded-full mb-6">
          Service — HubSpot AI
        </span>

        <h1 className="font-bold text-[clamp(32px,5vw,52px)] tracking-tight leading-[1.1] mb-5">
          HubSpot AI Build
        </h1>
        <p className="text-[18px] text-[#72767a] leading-[1.7] mb-10 max-w-[620px]">
          A production-ready AI system inside your HubSpot portal in 30–45 days. Lead scoring, automated workflows, and pipeline intelligence — all trained on your data.
        </p>

        <div className="flex flex-wrap gap-3 mb-14">
          <Link
            href="/get-started"
            className="inline-flex items-center gap-2 bg-[#29ABE2] hover:bg-[#1a9fd4] text-black font-bold px-7 py-3.5 rounded-full text-[15px] transition-colors"
          >
            Book a fit call →
          </Link>
        </div>

        {/* What's included */}
        <div className="mb-14">
          <h2 className="font-bold text-[22px] text-white mb-6">What's included</h2>
          <div className="grid sm:grid-cols-2 gap-3">
            {included.map((item, i) => (
              <div key={i} className="flex items-start gap-3 bg-[#17181c] border border-[#242628] rounded-[12px] px-4 py-3">
                <span className="text-[#29ABE2] font-bold shrink-0 mt-0.5">✓</span>
                <span className="text-[14px] text-[#d9d9d9]">{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* How it works */}
        <div className="mb-14">
          <h2 className="font-bold text-[22px] text-white mb-8">How it works</h2>
          <div className="space-y-6">
            {steps.map((s) => (
              <div key={s.n} className="flex gap-6">
                <span className="font-extrabold text-[#29ABE2] text-[13px] uppercase tracking-[0.1em] shrink-0 w-8 mt-0.5">{s.n}</span>
                <div>
                  <h3 className="font-bold text-white text-[17px] mb-1">{s.title}</h3>
                  <p className="text-[14px] text-[#72767a] leading-[1.7]">{s.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Pricing */}
        <div className="mb-14 p-8 bg-[#17181c] border border-[#242628] rounded-[24px]">
          <h2 className="font-bold text-[22px] text-white mb-2">Pricing</h2>
          <p className="text-[14px] text-[#72767a] mb-6">Fixed-scope project. Priced based on portal complexity and integration requirements.</p>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              { tier: "Standard Build", range: "$6,000–$9,000", items: ["1 HubSpot portal", "AI lead scoring setup", "Up to 5 automated workflows", "1 reporting dashboard", "30-day support"] },
              { tier: "Advanced Build", range: "$12,000–$18,000", items: ["Full portal rebuild", "Custom AI models", "Unlimited workflows", "Multiple integrations", "60-day support + training"] },
            ].map((p) => (
              <div key={p.tier} className="bg-[#000000] border border-[#242628] rounded-[16px] p-6">
                <div className="font-bold text-white text-[18px] mb-1">{p.tier}</div>
                <div className="text-[#29ABE2] font-bold text-[14px] mb-4">{p.range}</div>
                <ul className="space-y-2">
                  {p.items.map((item, j) => (
                    <li key={j} className="flex items-start gap-2 text-[13px] text-[#72767a]">
                      <span className="text-[#29ABE2] shrink-0">✓</span>{item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* FAQ */}
        <div className="mb-14">
          <h2 className="font-bold text-[22px] text-white mb-6">Common questions</h2>
          <div className="space-y-4">
            {faqs.map((f, i) => (
              <div key={i} className="border-b border-[#242628] pb-4 last:border-0">
                <h3 className="font-bold text-white text-[15px] mb-2">{f.q}</h3>
                <p className="text-[14px] text-[#72767a] leading-[1.7]">{f.a}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="p-8 bg-[#17181c] border border-[#242628] rounded-[24px] text-center">
          <h3 className="font-bold text-[22px] mb-2">Ready to build your HubSpot AI system?</h3>
          <p className="text-[14px] text-[#72767a] mb-6">Book a 20-minute call. We'll assess your current portal and scope exactly what needs to be built.</p>
          <Link href="/get-started" className="inline-flex items-center gap-2 bg-[#29ABE2] hover:bg-[#1a9fd4] text-black font-bold px-7 py-3.5 rounded-full text-[15px] transition-colors">
            Book a fit call →
          </Link>
        </div>
      </div>
    </div>
  );
}
