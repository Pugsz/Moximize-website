import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Pipeline Engine — Moximize",
  description: "Net-new qualified B2B meetings, guaranteed in 60 days. AI-powered outbound built on HubSpot.",
  alternates: { canonical: "https://moximize.net/services/ai-pipeline-engine" },
};

const included = [
  "ICP definition + ideal buyer research",
  "2,000–5,000 contact prospect list (Apollo + Clay)",
  "AI-personalized email first lines for every contact",
  "5-step cold email sequence with A/B variants",
  "LinkedIn outreach sequences (connection + message)",
  "Technical deliverability setup (SPF/DKIM/DMARC + warmup)",
  "HubSpot CRM pipeline + contact tracking",
  "Weekly performance reports + optimisation",
];

const steps = [
  { n: "01", title: "ICP & Research", body: "We spend the first week defining your ideal customer profile — company size, industry, role, tech stack, and buying triggers. This foundation determines everything downstream." },
  { n: "02", title: "List Building", body: "Using Apollo and Clay, we build a 2,000–5,000 contact prospect list enriched with firmographic data, LinkedIn activity, and intent signals." },
  { n: "03", title: "Copy & Sequences", body: "Our team writes a 5-step cold email sequence with AI-personalized first lines for every contact. LinkedIn sequences run in parallel targeting the same accounts." },
  { n: "04", title: "Technical Setup", body: "We configure deliverability (SPF, DKIM, DMARC), warm sending domains, set up HubSpot tracking, and launch campaigns through Instantly." },
  { n: "05", title: "Optimise & Scale", body: "Weekly analysis of open rates, reply rates, and booking rates. We iterate on subject lines, hooks, and follow-up timing until your calendar is full." },
];

const faqs = [
  { q: "What does '10 meetings guaranteed' actually mean?", a: "We guarantee a minimum of 10 qualified meetings booked within 90 days — meetings with decision-makers who match your ICP. If we miss the target, we keep working at no additional cost until we hit it." },
  { q: "Do I need an existing HubSpot portal?", a: "No. We can work with your existing HubSpot or set up a new one from scratch as part of the engagement." },
  { q: "How long does it take to get started?", a: "Onboarding takes about one week. First outreach typically goes out within 10–14 days of kickoff. First meetings usually land within 3–4 weeks." },
  { q: "What industries do you work with?", a: "We focus exclusively on US B2B — SaaS, professional services, fintech, healthcare technology, and consulting firms. We don't work with e-commerce, B2C, or companies not on HubSpot." },
];

export default function AIPipelineEnginePage() {
  return (
    <div className="min-h-screen bg-[#000000] text-[#e7e9ea]">
      <div className="max-w-[860px] mx-auto px-6 py-20">
        <Link href="/" className="text-[#29ABE2] text-[14px] font-semibold hover:underline mb-12 block">
          ← Back to Moximize
        </Link>

        <span className="inline-block text-[11px] font-bold uppercase tracking-[0.12em] bg-[#29ABE2]/10 border border-[#29ABE2]/30 text-[#29ABE2] px-3 py-1 rounded-full mb-6">
          Service — AI Outbound
        </span>

        <h1 className="font-bold text-[clamp(32px,5vw,52px)] tracking-tight leading-[1.1] mb-5">
          AI Pipeline Engine
        </h1>
        <p className="text-[18px] text-[#72767a] leading-[1.7] mb-10 max-w-[620px]">
          Net-new qualified meetings with your ideal buyers — built on AI-powered outbound and delivered in 60 days. Guaranteed.
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
          <p className="text-[14px] text-[#72767a] mb-6">Flat monthly engagement. No per-meeting fees. No hidden costs.</p>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              { tier: "Launch", range: "$2,500–$3,500/mo", items: ["500–1,000 contacts/mo", "Email outbound only", "HubSpot setup included", "Monthly reporting"] },
              { tier: "Scale", range: "$4,500–$6,500/mo", items: ["2,000–5,000 contacts/mo", "Email + LinkedIn outbound", "Full HubSpot CRM integration", "Weekly reporting + calls"] },
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
          <h3 className="font-bold text-[22px] mb-2">Ready to fill your pipeline?</h3>
          <p className="text-[14px] text-[#72767a] mb-6">Book a 20-minute call. We'll tell you exactly how many meetings we can generate for your business.</p>
          <Link href="/get-started" className="inline-flex items-center gap-2 bg-[#29ABE2] hover:bg-[#1a9fd4] text-black font-bold px-7 py-3.5 rounded-full text-[15px] transition-colors">
            Book a fit call →
          </Link>
        </div>
      </div>
    </div>
  );
}
