import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Fractional RevOps — Moximize",
  description: "Founder-level revenue operations without the full-time hire. Ongoing strategy, HubSpot management, and pipeline reporting for US B2B teams.",
  alternates: { canonical: "https://moximize.net/services/fractional-revops" },
};

const included = [
  "Monthly RevOps strategy sessions",
  "HubSpot portal management + optimisation",
  "Pipeline health monitoring + alerts",
  "Sales and marketing alignment framework",
  "Lead routing and SLA enforcement",
  "Monthly pipeline and attribution reporting",
  "Ongoing automation audits and improvements",
  "Slack access for real-time questions",
];

const steps = [
  { n: "01", title: "Baseline Audit", body: "In week one, we audit your current state — pipeline health, HubSpot configuration, funnel conversion rates, and team workflows. We build a 90-day priority roadmap based on what we find." },
  { n: "02", title: "Foundation Fixes", body: "We address the highest-impact issues first: broken workflows, data quality problems, missing attribution, and pipeline stage misalignment. Most clients see measurable improvement within the first 30 days." },
  { n: "03", title: "Ongoing Cadence", body: "Monthly strategy sessions, weekly async check-ins, and real-time Slack support. We act as your internal RevOps leader — attending key sales meetings, reviewing pipeline in HubSpot, and flagging issues before they become problems." },
  { n: "04", title: "Monthly Reporting", body: "Every month you receive an executive-level report: pipeline created, deals won, conversion rates by stage, and a forward-looking forecast. We focus on the numbers that drive decisions." },
];

const faqs = [
  { q: "How is this different from a full-time RevOps hire?", a: "A full-time RevOps manager costs $90K–$130K/year in salary alone, plus benefits, tools, and ramp time. Our Fractional RevOps service delivers the same strategic output at a fraction of the cost, with no overhead, no ramp time, and no lock-in after 90 days." },
  { q: "What do you actually do day-to-day?", a: "We monitor your pipeline in HubSpot, audit automation performance, update reporting, and proactively flag issues. You get a real person reviewing your revenue data every week — not a dashboard you have to check yourself." },
  { q: "Do I need to already have HubSpot set up?", a: "You need an active HubSpot portal with at least some pipeline data. If your HubSpot needs a rebuild first, we'd recommend starting with our HubSpot AI Build service." },
  { q: "What's the minimum commitment?", a: "Our standard engagement is 90 days, after which it's month-to-month. This gives us enough time to make meaningful improvements and measure the results properly." },
];

export default function FractionalRevOpsPage() {
  return (
    <div className="min-h-screen bg-[#000000] text-[#e7e9ea]">
      <div className="max-w-[860px] mx-auto px-6 py-20">
        <Link href="/" className="text-[#29ABE2] text-[14px] font-semibold hover:underline mb-12 block">
          ← Back to Moximize
        </Link>

        <span className="inline-block text-[11px] font-bold uppercase tracking-[0.12em] bg-[#29ABE2]/10 border border-[#29ABE2]/30 text-[#29ABE2] px-3 py-1 rounded-full mb-6">
          Service — RevOps
        </span>

        <h1 className="font-bold text-[clamp(32px,5vw,52px)] tracking-tight leading-[1.1] mb-5">
          Fractional RevOps
        </h1>
        <p className="text-[18px] text-[#72767a] leading-[1.7] mb-10 max-w-[620px]">
          Founder-level revenue operations without the full-time hire. Ongoing HubSpot management, pipeline monitoring, and monthly reporting — starting at $2,500/mo.
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
          <p className="text-[14px] text-[#72767a] mb-6">Month-to-month after the initial 90-day period.</p>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              { tier: "Starter", range: "$2,500/mo", items: ["HubSpot management", "Monthly strategy session", "Monthly reporting", "Async Slack support"] },
              { tier: "Growth Partner", range: "$4,500/mo", items: ["Everything in Starter", "Weekly pipeline reviews", "Sales + marketing alignment", "Quarterly business review (QBR)", "Priority Slack response (4h)"] },
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
          <h3 className="font-bold text-[22px] mb-2">Want a RevOps partner, not a vendor?</h3>
          <p className="text-[14px] text-[#72767a] mb-6">Book a 20-minute call. We'll look at your current setup and tell you what we'd prioritise in the first 90 days.</p>
          <Link href="/get-started" className="inline-flex items-center gap-2 bg-[#29ABE2] hover:bg-[#1a9fd4] text-black font-bold px-7 py-3.5 rounded-full text-[15px] transition-colors">
            Book a fit call →
          </Link>
        </div>
      </div>
    </div>
  );
}
