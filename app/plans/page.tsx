"use client";

import Link from "next/link";
import { useState } from "react";
import { Check, X, ArrowRight, Zap } from "lucide-react";

const MEETING_URL = "https://moximize.net/meetings/steven-nichol-guiao?uuid=956a4a9a-6fb4-4b72-87b6-95b774ab8f5b&hsLang=en";

const plans = [
  {
    id: "basic",
    name: "Basic",
    tagline: "Build the foundation right.",
    bestFor: "Early-stage teams with 1–5 salespeople",
    monthlyPrice: 1497,
    annualPrice: 1197,
    annualTotal: 14364,
    isPopular: false,
    color: "from-[#17181c] to-[#1e2128]",
    cta: "Start with Basic",
    features: [
      { text: "AI prospect list building (500 leads/mo)", included: true },
      { text: "AI-written personalized email first lines", included: true },
      { text: "1 active outbound campaign", included: true },
      { text: "Full HubSpot CRM setup", included: true },
      { text: "Up to 500 contacts managed", included: true },
      { text: "3 workflow automations", included: true },
      { text: "Monthly strategy call (30 min)", included: true },
      { text: "LinkedIn outbound + Clay enrichment", included: false },
      { text: "HubSpot Breeze AI lead scoring", included: false },
      { text: "Dedicated account manager", included: false },
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
    color: "from-[#0d1f3c] to-[#0a2540]",
    cta: "Start Growing",
    features: [
      { text: "Clay + Apollo AI enrichment (2,000 leads/mo)", included: true },
      { text: "AI-personalized outreach at scale", included: true },
      { text: "LinkedIn + email outbound (3 campaigns)", included: true },
      { text: "Full HubSpot CRM setup + pipeline design", included: true },
      { text: "Up to 2,000 contacts + Breeze AI scoring", included: true },
      { text: "Advanced automations + A/B testing", included: true },
      { text: "Bi-weekly strategy calls (45 min)", included: true },
      { text: "Pipeline velocity + ROI dashboard", included: true },
      { text: "Dedicated account manager", included: true },
      { text: "Custom HubSpot integrations", included: false },
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
    color: "from-[#0a1628] to-[#112244]",
    cta: "Go Premium",
    features: [
      { text: "Full AI stack: Clay + Apollo + LinkedIn Sales Nav", included: true },
      { text: "Unlimited contacts + AI enrichment", included: true },
      { text: "ABM campaigns with AI account targeting", included: true },
      { text: "LinkedIn Ads management", included: true },
      { text: "Everything in Growth, plus:", included: true },
      { text: "Custom HubSpot integrations (Zapier, Salesforce)", included: true },
      { text: "Full RevOps audit + AI workflow optimization", included: true },
      { text: "Weekly strategy calls (60 min)", included: true },
      { text: "Quarterly business review (QBR)", included: true },
      { text: "Priority support — 4h response + dedicated Slack", included: true },
    ],
  },
];

export default function PlansPage() {
  const [cycle, setCycle] = useState<"monthly" | "annually">("monthly");

  return (
    <div className="min-h-screen bg-[#000000] text-[#e7e9ea]">
      {/* Nav */}
      <div className="max-w-[1200px] mx-auto px-6 py-6 flex items-center justify-between">
        <Link href="/">
          <img src="/logo.png" alt="Moximize" style={{ height: "40px" }} className="w-auto object-contain" />
        </Link>
        <a
          href={MEETING_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[13px] font-semibold text-[#72767a] hover:text-[#e7e9ea] transition-colors"
        >
          Talk to us first →
        </a>
      </div>

      <div className="max-w-[1200px] mx-auto px-6 pt-10 pb-24">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="inline-block text-[11px] font-bold uppercase tracking-[0.12em] bg-[#29ABE2]/10 border border-[#29ABE2]/30 text-[#29ABE2] px-3 py-1 rounded-full mb-5">
            Transparent Pricing
          </span>
          <h1 className="font-bold text-[clamp(36px,5vw,64px)] tracking-tight leading-[1.05] mb-4">
            Choose Your Growth Plan
          </h1>
          <p className="text-[17px] text-[#72767a] max-w-[500px] mx-auto leading-[1.7]">
            No setup fees. No hidden costs. Month-to-month after 90 days.
          </p>

          {/* Billing toggle */}
          <div className="flex items-center justify-center gap-3 mt-8">
            <button
              onClick={() => setCycle("monthly")}
              className={`px-4 py-2 rounded-full text-[13px] font-semibold transition-all ${
                cycle === "monthly"
                  ? "bg-[#29ABE2] text-black"
                  : "text-[#72767a] hover:text-white"
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setCycle("annually")}
              className={`px-4 py-2 rounded-full text-[13px] font-semibold transition-all flex items-center gap-2 ${
                cycle === "annually"
                  ? "bg-[#29ABE2] text-black"
                  : "text-[#72767a] hover:text-white"
              }`}
            >
              Annually
              <span className="bg-green-500/20 text-green-400 text-[11px] font-bold px-2 py-0.5 rounded-full">
                Save 20%
              </span>
            </button>
          </div>
        </div>

        {/* Plans grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {plans.map((plan) => {
            const price = cycle === "monthly" ? plan.monthlyPrice : plan.annualPrice;
            return (
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

                  <div className="flex items-end gap-1.5 mb-1">
                    <span className="font-extrabold text-[48px] leading-none text-white">
                      ${price.toLocaleString()}
                    </span>
                    <span className="text-[14px] text-[#72767a] mb-2">/mo</span>
                  </div>
                  {cycle === "annually" && (
                    <p className="text-[12px] text-green-400 font-semibold">
                      ${plan.annualTotal.toLocaleString()} billed annually — save ${((plan.monthlyPrice - plan.annualPrice) * 12).toLocaleString()}/yr
                    </p>
                  )}
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
                          <X className="w-4 h-4 text-[#3a3d42] shrink-0 mt-0.5" />
                        )}
                        <span className={f.included ? "text-[#d9d9d9]" : "text-[#3a3d42]"}>
                          {f.text}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <Link
                    href={`/get-started?plan=${plan.id}&cycle=${cycle}`}
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
            );
          })}
        </div>

        {/* Trust row */}
        <div className="flex flex-wrap items-center justify-center gap-8 text-[13px] text-[#72767a]">
          {["No setup fees", "Month-to-month after 90 days", "HubSpot Certified Partner", "Results in 30–45 days"].map((t) => (
            <span key={t} className="flex items-center gap-2">
              <Check className="w-3.5 h-3.5 text-[#29ABE2]" />
              {t}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
