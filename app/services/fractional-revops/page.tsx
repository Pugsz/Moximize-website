import Link from "next/link";
import type { Metadata } from "next";
import { Search } from "lucide-react";

export const metadata: Metadata = {
  title: "Revenue Operations Partner — Fix the Leaky Pipeline | Moximize",
  description: "Expert RevOps management without the $180k/yr in-house hire. Weekly pipeline calls, monthly reports, 4 workflow builds/mo, and CRM management. Start with a $1,500 Revenue System Audit.",
  alternates: { canonical: "https://moximize.net/services/fractional-revops" },
};

export default function RevOpsPage() {
  return (
    <div className="min-h-screen bg-[#000000] text-[#e7e9ea]">
      <div className="max-w-[900px] mx-auto px-6 py-20">
        <Link href="/" className="text-[#29ABE2] text-[14px] font-semibold hover:underline mb-12 block">
          ← Back to Moximize
        </Link>

        <span className="inline-block text-[11px] font-bold uppercase tracking-[0.12em] bg-[#29ABE2]/10 border border-[#29ABE2]/30 text-[#29ABE2] px-3 py-1 rounded-full mb-6">
          Service
        </span>
        <h1 className="font-bold text-[clamp(32px,5vw,56px)] tracking-tight leading-[1.08] mb-4">
          Revenue Operations Partner
        </h1>
        <p className="text-[20px] text-[#72767a] leading-[1.6] mb-4 max-w-[680px]">
          Fix the leaky pipeline. Ongoing RevOps + AI management.
        </p>
        <p className="text-[16px] text-[#d9d9d9] leading-[1.7] mb-6 max-w-[680px]">
          Most B2B pipelines leak at the same places: bad data, broken workflows, no reporting anyone trusts. We find the leaks, fix them, and own the system long-term — so your team can sell instead of manage spreadsheets.
        </p>
        <div className="flex flex-wrap gap-4 mb-16">
          <Link href="/contact" className="inline-flex items-center gap-2 bg-[#29ABE2] hover:bg-[#1a9fd4] text-black font-bold px-7 py-3.5 rounded-full text-[15px] transition-colors">
            Start with a $1,500 Audit →
          </Link>
          <span className="inline-flex items-center text-[15px] font-semibold text-[#72767a] px-7 py-3.5 rounded-full border border-[#242628]">
            Retainer from $6,000/mo
          </span>
        </div>

        {/* Audit entry point callout */}
        <div className="mb-16 p-8 bg-[#29ABE2]/5 border border-[#29ABE2]/20 rounded-[24px]">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-md bg-[#29ABE2]/10 border border-[#29ABE2]/20 flex items-center justify-center shrink-0 mt-1">
              <Search size={18} className="text-[#29ABE2]" />
            </div>
            <div>
              <h2 className="font-bold text-[20px] mb-2">Start with a Revenue System Audit — $1,500</h2>
              <p className="text-[15px] text-[#d9d9d9] leading-[1.7] mb-4">
                Not sure if you need ongoing RevOps? Start with a one-time Revenue System Audit. We&apos;ll map your current pipeline, find where leads are leaking, and give you a prioritized fix list. No commitment required.
              </p>
              <ul className="space-y-2 mb-4">
                {[
                  "CRM health check — data quality, pipeline stages, workflow gaps",
                  "Lead flow audit — where are qualified leads falling through the cracks",
                  "Reporting gap analysis — what leadership should be seeing but isn't",
                  "Priority fix list — ranked by revenue impact",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-[14px] text-[#d9d9d9]">
                    <span className="text-[#29ABE2] mt-0.5 shrink-0">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
              <p className="text-[13px] text-[#29ABE2] font-semibold">
                If you decide to continue with a retainer within 30 days, the $1,500 audit fee is credited toward your first month. Existing Moximize clients get the audit free.
              </p>
            </div>
          </div>
        </div>

        <div className="mb-16 p-8 bg-[#17181c] border border-[#242628] rounded-[24px]">
          <h2 className="font-bold text-[22px] mb-6">Is this right for you?</h2>
          <p className="text-[15px] text-[#72767a] mb-5">This service is built for B2B teams that:</p>
          <ul className="space-y-3">
            {[
              "Have a pipeline but can't explain why deals are stalling or going dark",
              "Are growing past the point where one person can manage ops manually",
              "Want expert RevOps without a $150k–$200k/yr full-time hire",
              "Need workflows, reporting, and CRM hygiene owned by someone accountable",
              "Want AI systems maintained and improved as the business evolves",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3 text-[15px] text-[#d9d9d9]">
                <span className="text-[#29ABE2] mt-0.5 shrink-0">✓</span>
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="mb-16">
          <h2 className="font-bold text-[clamp(24px,3vw,36px)] mb-8">Monthly deliverables</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              { title: "Weekly Pipeline Call (30 min)", body: "Every week: what moved, what stalled, what needs attention. A structured 30-min call your leadership team can rely on — not another dashboard nobody checks." },
              { title: "Monthly Revenue Report", body: "A monthly report with pipeline velocity, win rate, forecast accuracy, and trend data — with specific recommendations, not just charts." },
              { title: "4 Workflow Builds Per Month", body: "New automations, integrations, or AI workflows built every month as your team's needs evolve. No extra project fees." },
              { title: "CRM Hygiene + AI Maintenance", body: "We own data quality — duplicate cleanup, property management, deal stage monitoring, and AI scoring accuracy — so your CRM stays a system your team trusts." },
              { title: "Direct Slack Access", body: "One point of contact. Real business-day response SLA. Not a ticketing system, not offshore support." },
              { title: "Sales Process Documentation", body: "RepOps SOPs, onboarding runbooks, and process docs — the institutional knowledge lives outside any one person's head." },
            ].map((item) => (
              <div key={item.title} className="p-6 bg-[#17181c] border border-[#242628] rounded-[16px]">
                <h3 className="font-bold text-[16px] mb-2">{item.title}</h3>
                <p className="text-[14px] text-[#72767a] leading-[1.6]">{item.body}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-16">
          <h2 className="font-bold text-[clamp(24px,3vw,36px)] mb-8">How it works</h2>
          <div className="space-y-6">
            {[
              { step: "01", title: "Revenue System Audit", body: "We start with a full audit of your pipeline, CRM, workflows, and reporting. We identify exactly where the leaks are and prioritize what to fix first." },
              { step: "02", title: "90-Day Fix Roadmap", body: "We write a clear 90-day roadmap — what we're fixing, what we're building, and what the expected revenue impact of each change is. You approve before we start." },
              { step: "03", title: "Ongoing Cadence", body: "Weekly pipeline calls, 4 builds/month, monthly reporting. We integrate into your team's rhythm without requiring daily management oversight." },
              { step: "04", title: "Quarterly Business Review", body: "Every quarter we review what was built, what moved the needle, and set priorities for the next quarter — aligned to your revenue goals, not a generic roadmap." },
            ].map((item) => (
              <div key={item.step} className="flex gap-6 p-6 bg-[#17181c] border border-[#242628] rounded-[16px]">
                <span className="font-extrabold text-[28px] text-[#29ABE2]/30 leading-none shrink-0 w-10">{item.step}</span>
                <div>
                  <h3 className="font-bold text-[17px] mb-2">{item.title}</h3>
                  <p className="text-[14px] text-[#72767a] leading-[1.6]">{item.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-16">
          <h2 className="font-bold text-[clamp(24px,3vw,36px)] mb-3">Pricing</h2>
          <p className="text-[15px] text-[#72767a] mb-8">Month-to-month after initial 90-day commitment. Start with the $1,500 audit — credited to first month if you continue.</p>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              {
                name: "Revenue System Audit",
                price: "$1,500",
                description: "One-time. CRM health check, lead flow audit, priority fix list — credit toward first month if you continue within 30 days.",
                features: ["CRM health check", "Lead flow audit", "Reporting gap analysis", "Priority fix list (ranked by impact)", "Delivered in 5 business days", "Free for existing Moximize clients"],
                highlight: false,
                badge: "Entry Point",
              },
              {
                name: "Revenue Operations Partner",
                price: "$6,000/mo",
                description: "Full ongoing RevOps — weekly calls, monthly reports, 4 builds/mo, CRM management, and Slack access.",
                features: ["Weekly pipeline call (30 min)", "Monthly revenue report", "4 workflow builds/mo", "CRM hygiene + AI maintenance", "Direct Slack access", "Quarterly business review"],
                highlight: true,
                badge: null,
              },
            ].map((plan) => (
              <div
                key={plan.name}
                className={`p-6 rounded-[20px] border ${plan.highlight ? "border-[#29ABE2] bg-[#0d1a2e]" : "border-[#242628] bg-[#17181c]"}`}
              >
                {plan.badge && (
                  <span className="inline-block text-[11px] font-bold uppercase tracking-[0.12em] bg-[#17181c] border border-[#242628] text-[#72767a] px-3 py-1 rounded-full mb-3">
                    {plan.badge}
                  </span>
                )}
                <h3 className="font-bold text-[20px] mb-1">{plan.name}</h3>
                <p className="font-extrabold text-[28px] text-[#29ABE2] mb-2">{plan.price}</p>
                <p className="text-[13px] text-[#72767a] mb-5 leading-[1.5]">{plan.description}</p>
                <ul className="space-y-2">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-[13px] text-[#d9d9d9]">
                      <span className="text-[#29ABE2] shrink-0 mt-0.5">✓</span>
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-16">
          <h2 className="font-bold text-[clamp(24px,3vw,36px)] mb-8">Frequently asked questions</h2>
          <div className="space-y-5">
            {[
              {
                q: "Is this really comparable to a full-time RevOps hire?",
                a: "For most B2B teams at the Series A–B stage, yes. A fractional operator who knows your system deeply and runs a structured cadence will outperform a junior full-time hire — and match the output of a senior hire at 20–30% of the cost.",
              },
              {
                q: "What CRM do you work with?",
                a: "We work with HubSpot, GoHighLevel, Pipedrive, Zoho, and Salesforce. If you're on a different CRM, we'll assess fit on the discovery call.",
              },
              {
                q: "Do I need the audit before starting the retainer?",
                a: "We strongly recommend it — the audit gives us the baseline we need to prioritize correctly in month one. But if you already have a clear picture of your pipeline issues, we can start the retainer directly.",
              },
              {
                q: "How quickly will we see results?",
                a: "Most clients see measurable improvements to reporting and data quality within the first 30 days. Workflow automation and AI scoring improvements typically show pipeline impact by month 2–3.",
              },
              {
                q: "What if we already have a part-time RevOps person?",
                a: "We can work alongside an existing hire or offshore support. We take on the strategic and AI-specific work; they handle operational execution. We define the division clearly upfront.",
              },
              {
                q: "What's the contract structure?",
                a: "Initial 90-day commitment, then month-to-month. Most clients stay 12–24+ months because the value compounds as we learn the business deeper over time.",
              },
            ].map((item) => (
              <div key={item.q} className="p-6 bg-[#17181c] border border-[#242628] rounded-[16px]">
                <h3 className="font-bold text-[16px] mb-2">{item.q}</h3>
                <p className="text-[14px] text-[#72767a] leading-[1.6]">{item.a}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="p-8 bg-[#17181c] border border-[#242628] rounded-[24px] text-center">
          <h3 className="font-bold text-[22px] mb-2">Ready to fix your pipeline?</h3>
          <p className="text-[14px] text-[#72767a] mb-6">Start with a $1,500 Revenue System Audit. We&apos;ll find the leaks, give you a priority fix list, and tell you honestly whether ongoing RevOps makes sense for your stage.</p>
          <Link href="/contact" className="inline-flex items-center gap-2 bg-[#29ABE2] hover:bg-[#1a9fd4] text-black font-bold px-7 py-3.5 rounded-full text-[15px] transition-colors">
            Book a fit call →
          </Link>
        </div>
      </div>
    </div>
  );
}
