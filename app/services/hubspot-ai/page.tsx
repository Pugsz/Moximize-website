import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "HubSpot AI Implementation — Production-Ready AI in Your CRM | Moximize",
  description: "A production-ready AI system inside your HubSpot CRM in 30–45 days. AI workflows, lead scoring, enrichment automation, and Breeze AI — built to your pipeline.",
  alternates: { canonical: "https://moximize.net/services/hubspot-ai" },
};

export default function HubSpotAIPage() {
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
          HubSpot AI Implementation
        </h1>
        <p className="text-[20px] text-[#72767a] leading-[1.6] mb-4 max-w-[680px]">
          A production-ready AI system inside your CRM in 30–45 days.
        </p>
        <p className="text-[16px] text-[#d9d9d9] leading-[1.7] mb-10 max-w-[680px]">
          We build the AI infrastructure your HubSpot should have — AI workflows, lead scoring, enrichment automation, Breeze AI, and custom integrations — all designed around how your team actually sells.
        </p>
        <div className="flex flex-wrap gap-4 mb-16">
          <Link href="/contact" className="inline-flex items-center gap-2 bg-[#29ABE2] hover:bg-[#1a9fd4] text-black font-bold px-7 py-3.5 rounded-full text-[15px] transition-colors">
            Book a fit call →
          </Link>
          <span className="inline-flex items-center text-[15px] font-semibold text-[#72767a] px-7 py-3.5 rounded-full border border-[#242628]">
            From $7,500 (project)
          </span>
        </div>

        {/* Is this right for you */}
        <div className="mb-16 p-8 bg-[#17181c] border border-[#242628] rounded-[24px]">
          <h2 className="font-bold text-[22px] mb-6">Is this right for you?</h2>
          <p className="text-[15px] text-[#72767a] mb-5">This service is built for US B2B teams that:</p>
          <ul className="space-y-3">
            {[
              "Are already on HubSpot but barely scratching the surface of what it can do",
              "Have messy or underused CRM data that makes AI scoring unreliable",
              "Want to automate lead routing, scoring, and follow-up without a full-time RevOps hire",
              "Are exploring Breeze AI or custom AI integrations but don't know where to start",
              "Need the build done right the first time — not a DIY experiment",
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
              { title: "HubSpot Data Audit & Cleanup", body: "We audit your existing portal — contacts, deals, properties, lifecycle stages — and fix the data quality issues that make AI outputs unreliable." },
              { title: "AI Lead Scoring", body: "We configure HubSpot Breeze AI lead scoring trained on your actual closed-won data. Reps see which leads to call today, not which leads look good on paper." },
              { title: "Contact Enrichment Automation", body: "Clay or Apollo enrichment flows that automatically populate HubSpot properties — firmographics, tech stack, buying signals — without manual data entry." },
              { title: "AI Workflow Automation", body: "Lead routing, handoff triggers, follow-up sequences, and pipeline-stage automation — all built to your team's actual sales process." },
              { title: "Breeze AI & Custom Integrations", body: "Where native Breeze AI fits, we deploy it. Where you need Claude or OpenAI for custom logic, we build it — directly integrated into your HubSpot workflows." },
              { title: "30-Day Post-Launch Support", body: "We stay on for 30 days after launch to monitor outputs, catch issues, and make adjustments before handing off to your team." },
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
              { step: "Days 1–5", title: "Discovery & Audit", body: "We audit your HubSpot portal — data quality, existing workflows, pipeline stages, integrations — and map the gaps. You get a written audit report with our build plan before we touch anything." },
              { step: "Days 6–10", title: "Architecture & Approval", body: "We design the AI system: what gets built, in what order, how it connects. You review and approve the architecture before we build." },
              { step: "Days 11–35", title: "Build & Configure", body: "We build everything — data cleanup, scoring models, enrichment flows, AI workflows, and integrations. Staged rollout so your team's daily work isn't disrupted." },
              { step: "Days 36–45", title: "Testing & Handoff", body: "We test every workflow with real data, document everything we built, and train your team on how to use it. You own the system." },
              { step: "Days 45–75", title: "30-Day Support Window", body: "We monitor the system post-launch, catch issues, and make adjustments. One point of contact. Response within one business day." },
            ].map((item) => (
              <div key={item.step} className="flex gap-6 p-6 bg-[#17181c] border border-[#242628] rounded-[16px]">
                <span className="font-extrabold text-[13px] text-[#29ABE2] uppercase tracking-[0.06em] leading-tight shrink-0 w-20 mt-0.5">{item.step}</span>
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
          <p className="text-[15px] text-[#72767a] mb-8">One-time project fee. Optional Fractional RevOps retainer for ongoing management after launch.</p>
          <div className="grid sm:grid-cols-3 gap-4">
            {[
              {
                name: "Standard",
                price: "$7,500",
                description: "HubSpot audit, data cleanup, AI lead scoring, 3 core workflows, 30-day support",
                features: ["Portal audit & cleanup", "Breeze AI lead scoring", "3 AI workflows", "Enrichment setup", "30-day support"],
                highlight: false,
              },
              {
                name: "Growth",
                price: "$12,500",
                description: "Everything in Standard + custom AI integrations, 8 workflows, Clay enrichment pipeline",
                features: ["Everything in Standard", "Custom Claude/OpenAI integration", "8 AI workflows", "Clay enrichment pipeline", "Team training sessions"],
                highlight: true,
              },
              {
                name: "Enterprise",
                price: "$20,000",
                description: "Full RevOps architecture build — multi-team, multi-pipeline, custom data model",
                features: ["Everything in Growth", "Multi-team HubSpot build", "Custom data model design", "API integrations", "60-day support window"],
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
                q: "Do we need to already have HubSpot?",
                a: "Yes — this service is for teams already on HubSpot. If you're evaluating HubSpot, we can help with that conversation too, but the implementation assumes an existing portal.",
              },
              {
                q: "What HubSpot tier do we need?",
                a: "For AI lead scoring (Breeze AI), you need Sales Hub Professional or above. For most automation workflows, Starter will work. We'll assess your current tier during the audit and flag anything you'd need to upgrade.",
              },
              {
                q: "Will this disrupt our current sales team?",
                a: "We build in stages and test before rolling out. The goal is to make your team's existing workflows better, not replace them. We coordinate timing around your sales cycle.",
              },
              {
                q: "What's the difference between Breeze AI and a custom Claude integration?",
                a: "Breeze AI is native to HubSpot — it scores leads using your existing data automatically. A custom Claude or OpenAI integration is needed when you want to generate personalized content, run complex reasoning, or use external data sources. Often you need both.",
              },
              {
                q: "What happens after the 30-day support window?",
                a: "You own the system. We document everything we build and train your team. If you want ongoing management, our Fractional RevOps service is designed for exactly that.",
              },
              {
                q: "How do we know this will actually work?",
                a: "We send you a written audit and architecture document before the build begins. You see exactly what we're building and why before any money changes hands beyond the deposit.",
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
          <h3 className="font-bold text-[22px] mb-2">Ready to build your HubSpot AI system?</h3>
          <p className="text-[14px] text-[#72767a] mb-6">Book a 20-min call. We'll audit your current portal and tell you exactly what we'd build.</p>
          <Link href="/contact" className="inline-flex items-center gap-2 bg-[#29ABE2] hover:bg-[#1a9fd4] text-black font-bold px-7 py-3.5 rounded-full text-[15px] transition-colors">
            Book a fit call →
          </Link>
        </div>
      </div>
    </div>
  );
}
