import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Fractional RevOps + AI — Replace a $180k/yr Hire | Moximize",
  description: "Replace a $180,000/yr full-time RevOps hire for a fraction of the cost. Ongoing HubSpot management, AI system maintenance, and revenue operations — run by someone who's built these systems before.",
  alternates: { canonical: "https://moximize.net/services/fractional-revops" },
};

export default function FractionalRevOpsPage() {
  return (
    <div className="min-h-screen bg-[#000000] text-[#e7e9ea]">
      <div className="max-w-[900px] mx-auto px-6 py-20">
        <Link href="/" className="text-[#29ABE2] text-[14px] font-semibold hover:underline mb-12 block">
          ← Back to Moximize
        </Link>

        {/* Hero */}
        <span className="inline-block text-[11px] font-bold uppercase tracking-[0.12em] bg-[#29ABE2]/10 border border-[#29ABE2]/30 text-[#29ABE2] px-3 py-1 rounded-full mb-6">
          Service
        </span>
        <h1 className="font-bold text-[clamp(32px,5vw,56px)] tracking-tight leading-[1.08] mb-4">
          Fractional RevOps + AI
        </h1>
        <p className="text-[20px] text-[#72767a] leading-[1.6] mb-4 max-w-[680px]">
          Replace a $180,000/yr full-time RevOps hire — for a fraction of the cost.
        </p>
        <p className="text-[16px] text-[#d9d9d9] leading-[1.7] mb-6 max-w-[680px]">
          A full-time senior RevOps hire costs $150,000–$200,000/yr in salary alone — plus benefits, equity, and ramp time. Our fractional model gives you the same capability at a fraction of the cost, with no ramp period and no hiring risk.
        </p>
        <div className="flex flex-wrap gap-4 mb-16">
          <Link href="/contact" className="inline-flex items-center gap-2 bg-[#29ABE2] hover:bg-[#1a9fd4] text-black font-bold px-7 py-3.5 rounded-full text-[15px] transition-colors">
            Book a fit call →
          </Link>
          <span className="inline-flex items-center text-[15px] font-semibold text-[#72767a] px-7 py-3.5 rounded-full border border-[#242628]">
            From $6,000/mo
          </span>
        </div>

        {/* Is this right for you */}
        <div className="mb-16 p-8 bg-[#17181c] border border-[#242628] rounded-[24px]">
          <h2 className="font-bold text-[22px] mb-6">Is this right for you?</h2>
          <p className="text-[15px] text-[#72767a] mb-5">This service is built for US B2B teams that:</p>
          <ul className="space-y-3">
            {[
              "Are on HubSpot and need ongoing management, not just a one-time setup",
              "Have outgrown DIY RevOps but aren't ready to hire a full-time head of RevOps",
              "Want AI systems maintained, improved, and adapted as the business grows",
              "Need weekly reporting, pipeline reviews, and data quality someone actually owns",
              "Want one point of contact who knows your CRM and your business deeply",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3 text-[15px] text-[#d9d9d9]">
                <span className="text-[#29ABE2] mt-0.5 shrink-0">✓</span>
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* What you get */}
        <div className="mb-16">
          <h2 className="font-bold text-[clamp(24px,3vw,36px)] mb-8">What you get</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              { title: "Ongoing HubSpot Management", body: "Weekly portal hygiene, workflow maintenance, deal stage monitoring, and property management. Your CRM stays clean and accurate." },
              { title: "AI System Maintenance", body: "We monitor AI scoring accuracy, enrichment freshness, and workflow performance — and iterate when something drifts or breaks." },
              { title: "Weekly Pipeline Reporting", body: "We own the numbers. Weekly pipeline velocity reports, win/loss analysis, and forecast accuracy — delivered to your leadership team." },
              { title: "Process Design & Documentation", body: "Sales process documentation, RevOps SOPs, and onboarding runbooks for new reps. The institutional knowledge lives outside any one person's head." },
              { title: "New Workflow Builds", body: "As your team's needs evolve, we build new automations, integrations, and AI workflows without charging a separate project fee." },
              { title: "Direct Slack Access", body: "One point of contact with a real business day response SLA. Not a ticketing system. Not offshore support." },
            ].map((item) => (
              <div key={item.title} className="p-6 bg-[#17181c] border border-[#242628] rounded-[16px]">
                <h3 className="font-bold text-[16px] mb-2">{item.title}</h3>
                <p className="text-[14px] text-[#72767a] leading-[1.6]">{item.body}</p>
              </div>
            ))}
          </div>
        </div>

        {/* How it works */}
        <div className="mb-16">
          <h2 className="font-bold text-[clamp(24px,3vw,36px)] mb-8">How it works</h2>
          <div className="space-y-6">
            {[
              { step: "01", title: "Onboarding & Audit", body: "We spend the first 2 weeks doing a deep audit of your HubSpot portal, your sales process, and your existing reporting. We establish a baseline before we change anything." },
              { step: "02", title: "Priority Roadmap", body: "We write a 90-day roadmap — what to fix first, what to build next, and what the impact of each will be. You see the plan before we execute it." },
              { step: "03", title: "Ongoing Cadence", body: "Weekly async updates, bi-weekly 45-min strategy calls, and direct Slack access for questions. We integrate into your team without requiring a daily manager." },
              { step: "04", title: "Quarterly Reviews", body: "Every quarter we review what was built, what moved the needle, and what the next quarter's priorities should be — aligned to your revenue goals." },
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

        {/* Pricing */}
        <div className="mb-16">
          <h2 className="font-bold text-[clamp(24px,3vw,36px)] mb-3">Pricing</h2>
          <p className="text-[15px] text-[#72767a] mb-8">Month-to-month after initial 90-day commitment.</p>
          <div className="grid sm:grid-cols-3 gap-4">
            {[
              {
                name: "Core",
                price: "$6,000/mo",
                description: "Essential RevOps — HubSpot management, weekly reporting, 1 new build/mo",
                features: ["HubSpot portal management", "Weekly pipeline reporting", "1 new workflow/mo", "Bi-weekly strategy call", "Slack access"],
                highlight: false,
              },
              {
                name: "Growth",
                price: "$9,000/mo",
                description: "Full RevOps + AI maintenance, 3 builds/mo, forecast ownership",
                features: ["Everything in Core", "AI system maintenance", "3 new builds/mo", "Forecast ownership", "Sales process documentation"],
                highlight: true,
              },
              {
                name: "Scale",
                price: "$12,000/mo",
                description: "Full fractional RevOps team — unlimited builds, multi-team, board reporting",
                features: ["Everything in Growth", "Unlimited builds", "Multi-team coverage", "Board-level reporting", "Dedicated Slack channel"],
                highlight: false,
              },
            ].map((plan) => (
              <div
                key={plan.name}
                className={`p-6 rounded-[20px] border ${plan.highlight ? "border-[#29ABE2] bg-[#0d1a2e]" : "border-[#242628] bg-[#17181c]"}`}
              >
                {plan.highlight && (
                  <span className="inline-block text-[11px] font-bold uppercase tracking-[0.12em] bg-[#29ABE2] text-black px-3 py-1 rounded-full mb-3">
                    Most Popular
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

        {/* FAQ */}
        <div className="mb-16">
          <h2 className="font-bold text-[clamp(24px,3vw,36px)] mb-8">Frequently asked questions</h2>
          <div className="space-y-5">
            {[
              {
                q: "Is this really comparable to a full-time RevOps hire?",
                a: "For most B2B teams at the Series A–B stage, yes. A fractional operator who knows your system deeply and runs a structured cadence will outperform a junior full-time hire — and match the output of a senior hire at 20–30% of the cost.",
              },
              {
                q: "What's the difference between this and the HubSpot AI Implementation?",
                a: "The HubSpot AI Implementation is a one-time project — we build the system and hand it off. Fractional RevOps is ongoing management: we own the system long-term, maintain it, and keep improving it.",
              },
              {
                q: "Do we need the AI Implementation first?",
                a: "Not necessarily. If your HubSpot is reasonably well-configured, we can start with Fractional RevOps and build improvements incrementally. If it's significantly broken, we'll recommend the implementation project first.",
              },
              {
                q: "How many hours per month is this?",
                a: "We don't sell hours — we sell outcomes. But practically, the Core plan averages 15–20 hours/month, Growth 25–35 hours, and Scale 40+ hours. Measured against what a full-time hire would cost per hour, it's not close.",
              },
              {
                q: "What if we already have a part-time RevOps person?",
                a: "We can work alongside an existing part-time hire or offshore support. We take on the strategic and AI-specific work; they handle operational execution. We define the division clearly upfront.",
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

        {/* CTA */}
        <div className="p-8 bg-[#17181c] border border-[#242628] rounded-[24px] text-center">
          <h3 className="font-bold text-[22px] mb-2">Ready to replace your RevOps gap?</h3>
          <p className="text-[14px] text-[#72767a] mb-6">Book a 20-min call. We'll tell you honestly whether fractional RevOps is the right fit for your stage.</p>
          <Link href="/contact" className="inline-flex items-center gap-2 bg-[#29ABE2] hover:bg-[#1a9fd4] text-black font-bold px-7 py-3.5 rounded-full text-[15px] transition-colors">
            Book a fit call →
          </Link>
        </div>
      </div>
    </div>
  );
}
