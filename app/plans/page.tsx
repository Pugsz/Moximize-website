"use client";

import Link from "next/link";
import { Check, ArrowRight, Zap } from "lucide-react";

const plans = [
  {
    id: "ai-pipeline",
    name: "AI Pipeline Engine",
    tagline: "Predictable meetings. Guaranteed.",
    bestFor: "B2B teams that need consistent qualified pipeline",
    price: "From $4,500/mo",
    isPopular: false,
    color: "from-[#17181c] to-[#1e2128]",
    cta: "Learn more",
    href: "/services/ai-pipeline-engine",
    features: [
      { text: "AI prospect list building at scale", included: true },
      { text: "Personalized cold email sequences", included: true },
      { text: "LinkedIn outbound + Clay enrichment", included: true },
      { text: "HubSpot pipeline integration", included: true },
      { text: "Guaranteed qualified meetings", included: true },
      { text: "Monthly performance review", included: true },
      { text: "A/B testing + iteration", included: true },
      { text: "Custom HubSpot AI workflows", included: false },
      { text: "Fractional RevOps leadership", included: false },
    ],
  },
  {
    id: "hubspot-ai",
    name: "HubSpot AI Implementation",
    tagline: "One build. Runs itself.",
    bestFor: "Teams ready to turn HubSpot into an AI-powered system",
    price: "From $7,500 (project)",
    isPopular: true,
    color: "from-[#0d1f3c] to-[#0a2540]",
    cta: "Learn more",
    href: "/services/hubspot-ai",
    features: [
      { text: "Full HubSpot CRM build + AI automation", included: true },
      { text: "Breeze AI lead scoring setup", included: true },
      { text: "Custom workflows + integrations", included: true },
      { text: "AI-powered contact enrichment", included: true },
      { text: "Pipeline + deal stage automation", included: true },
      { text: "Team training + documentation", included: true },
      { text: "30-day post-build support", included: true },
      { text: "Ongoing managed services", included: false },
      { text: "Fractional RevOps leadership", included: false },
    ],
  },
  {
    id: "fractional-revops",
    name: "Fractional RevOps + AI",
    tagline: "A $180K hire for a fraction of the cost.",
    bestFor: "Scaling teams who need a full RevOps function",
    price: "From $6,000/mo",
    isPopular: false,
    color: "from-[#0a1628] to-[#112244]",
    cta: "Learn more",
    href: "/services/fractional-revops",
    features: [
      { text: "Fractional RevOps leadership", included: true },
      { text: "AI workflow design + build", included: true },
      { text: "HubSpot system management", included: true },
      { text: "Pipeline + forecast reporting", included: true },
      { text: "Sales + marketing alignment", included: true },
      { text: "Weekly check-ins", included: true },
      { text: "Priority support + dedicated Slack", included: true },
      { text: "Custom AI integrations", included: true },
      { text: "Quarterly business review (QBR)", included: true },
    ],
  },
];

export default function PlansPage() {
  return (
    <div className="min-h-screen bg-[#000000] text-[#e7e9ea]">
      {/* Nav */}
      <div className="max-w-[1200px] mx-auto px-6 py-6 flex items-center justify-between">
        <Link href="/">
          <img src="/logo.png" alt="Moximize" style={{ height: "40px" }} className="w-auto object-contain" />
        </Link>
        <Link
          href="/contact"
          className="text-[13px] font-semibold text-[#72767a] hover:text-[#e7e9ea] transition-colors"
        >
          Book a fit call →
        </Link>
      </div>

      <div className="max-w-[1200px] mx-auto px-6 pt-10 pb-24">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="inline-block text-[11px] font-bold uppercase tracking-[0.12em] bg-[#29ABE2]/10 border border-[#29ABE2]/30 text-[#29ABE2] px-3 py-1 rounded-full mb-5">
            Services &amp; Pricing
          </span>
          <h1 className="font-bold text-[clamp(36px,5vw,64px)] tracking-tight leading-[1.05] mb-4">
            Three Ways to Work With Us
          </h1>
          <p className="text-[17px] text-[#72767a] max-w-[500px] mx-auto leading-[1.7]">
            All services are outcome-priced. Full pricing and details on each service page.
          </p>
        </div>

        {/* Plans grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {plans.map((plan) => (
            <div
              key={plan.id}
              className={`relative rounded-[28px] border overflow-hidden flex flex-col ${
                plan.isPopular
                  ? "border-[#29ABE2]/60 shadow-[0_0_60px_rgba(41,171,226,0.15)]"
                  : "border-[#242628]"
              }`}
            >
              {plan.isPopular && (
                <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#2B4EA0] via-[#29ABE2] to-[#2B4EA0]" />
              )}

              {/* Header */}
              <div className={`bg-gradient-to-br ${plan.color} p-8 pb-6`}>
                {plan.isPopular && (
                  <div className="flex items-center gap-1.5 mb-3">
                    <Zap className="w-3.5 h-3.5 text-[#29ABE2]" />
                    <span className="text-[11px] font-bold uppercase tracking-[0.1em] text-[#29ABE2]">Most Popular</span>
                  </div>
                )}
                <h2 className="font-bold text-[26px] mb-1">{plan.name}</h2>
                <p className="text-[13px] text-[#72767a] mb-5">{plan.tagline}</p>

                <div className="mb-1">
                  <span className="font-extrabold text-[32px] leading-none text-white">
                    {plan.price}
                  </span>
                </div>
                <p className="text-[12px] text-[#72767a] mt-2">Best for: {plan.bestFor}</p>
              </div>

              {/* Features */}
              <div className="bg-[#0e0f12] p-8 flex-1 flex flex-col">
                <ul className="space-y-3 mb-8 flex-1">
                  {plan.features.map((f) => (
                    <li key={f.text} className="flex items-start gap-3 text-[13px]">
                      {f.included ? (
                        <Check className="w-4 h-4 text-[#29ABE2] shrink-0 mt-0.5" />
                      ) : (
                        <span className="w-4 h-4 shrink-0 mt-0.5 flex items-center justify-center text-[#3a3d42]">—</span>
                      )}
                      <span className={f.included ? "text-[#d9d9d9]" : "text-[#3a3d42]"}>
                        {f.text}
                      </span>
                    </li>
                  ))}
                </ul>

                <Link
                  href={plan.href}
                  className={`w-full py-3.5 rounded-full font-bold text-[15px] text-center flex items-center justify-center gap-2 transition-all ${
                    plan.isPopular
                      ? "bg-[#29ABE2] hover:bg-[#1a9fd4] text-black shadow-[0_4px_20px_rgba(41,171,226,0.35)]"
                      : "bg-[#17181c] border border-[#242628] hover:border-[#29ABE2]/50 hover:text-[#29ABE2] text-white"
                  }`}
                >
                  {plan.cta} <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Trust row */}
        <div className="flex flex-wrap items-center justify-center gap-8 text-[13px] text-[#72767a]">
          {["No setup fees", "Cancel with 30 days notice", "HubSpot Certified Partner", "Results-focused pricing"].map((t) => (
            <span key={t} className="flex items-center gap-2">
              <Check className="w-3.5 h-3.5 text-[#29ABE2]" />
              {t}
            </span>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-[15px] text-[#72767a] mb-6">Not sure which service is right for you?</p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-[#29ABE2] hover:bg-[#1a9fd4] text-black font-bold px-8 py-4 rounded-full text-[15px] transition-colors"
          >
            Book a 20-min fit call <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
