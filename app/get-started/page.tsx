"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";
import { Check, ArrowLeft } from "lucide-react";
import { useHubSpotForm } from "@/hooks/useHubSpotForm";

const planDetails: Record<string, { name: string; price: string; color: string; perks: string[] }> = {
  "ai-pipeline": {
    name: "AI Pipeline Engine",
    price: "From $4,500/mo",
    color: "from-[#2B4EA0] to-[#29ABE2]",
    perks: [
      "AI prospect list building at scale",
      "Personalized cold email + LinkedIn sequences",
      "HubSpot pipeline integration",
      "Guaranteed qualified meetings or we work free",
    ],
  },
  "hubspot-ai": {
    name: "HubSpot AI Implementation",
    price: "From $7,500 (project)",
    color: "from-[#1a3a6b] to-[#29ABE2]",
    perks: [
      "Full HubSpot CRM build + AI automation",
      "Lead scoring + Breeze AI setup",
      "Custom workflows + integrations",
      "30-day post-build support",
    ],
  },
  "fractional-revops": {
    name: "Fractional RevOps + AI",
    price: "From $6,000/mo",
    color: "from-[#0a1f4e] to-[#2B4EA0]",
    perks: [
      "Fractional RevOps leadership",
      "AI workflow design + build",
      "HubSpot system management",
      "Weekly check-ins + priority support",
    ],
  },
};

function GetStartedInner() {
  const params = useSearchParams();
  const planId = params.get("plan") ?? "ai-pipeline";
  const plan = planDetails[planId] ?? planDetails["ai-pipeline"];

  useHubSpotForm({ target: "#hs-getstarted-form", redirectUrl: "/thank-you" });

  return (
    <div className="min-h-screen bg-[#000000] text-[#e7e9ea]">
      {/* Nav */}
      <div className="max-w-[1100px] mx-auto px-6 py-6 flex items-center justify-between">
        <Link href="/">
          <img src="/logo.png" alt="Moximize" style={{ height: "40px" }} className="w-auto object-contain" />
        </Link>
        <Link href="/contact" className="text-[13px] text-[#72767a] hover:text-[#29ABE2] flex items-center gap-1.5 transition-colors">
          <ArrowLeft className="w-3.5 h-3.5" /> Back to contact
        </Link>
      </div>

      <div className="max-w-[1100px] mx-auto px-6 pt-6 pb-24">
        <div className="grid md:grid-cols-2 gap-16 items-start">

          {/* Left — plan summary */}
          <div>
            <span className="inline-block text-[11px] font-bold uppercase tracking-[0.12em] bg-[#29ABE2]/10 border border-[#29ABE2]/30 text-[#29ABE2] px-3 py-1 rounded-full mb-6">
              You selected
            </span>
            <h1 className="font-bold text-[clamp(28px,4vw,44px)] tracking-tight leading-[1.1] mb-3">
              {plan.name}
            </h1>
            <p className="text-[28px] font-bold text-white mb-1">
              {plan.price}
            </p>
            <p className="text-[13px] text-[#72767a] mb-8">No setup fee · Cancel with 30 days notice</p>

            {/* Plan perks */}
            <div className="bg-[#17181c] border border-[#242628] rounded-[20px] p-7 mb-8">
              <div className={`h-[3px] bg-gradient-to-r ${plan.color} rounded-full mb-6`} />
              <p className="text-[12px] font-bold uppercase tracking-[0.1em] text-[#29ABE2] mb-4">What you get</p>
              <ul className="space-y-3">
                {plan.perks.map((perk) => (
                  <li key={perk} className="flex items-center gap-3 text-[14px] text-[#d9d9d9]">
                    <Check className="w-4 h-4 text-[#29ABE2] shrink-0" />
                    {perk}
                  </li>
                ))}
              </ul>
            </div>

            {/* What happens next */}
            <div className="rounded-[16px] border border-[#242628] bg-[#0a0a0a] p-6">
              <p className="text-[12px] font-bold uppercase tracking-[0.1em] text-[#29ABE2] mb-4">What happens next</p>
              <ul className="space-y-3">
                {[
                  "We review your info within 24 hours",
                  "You get a calendar invite for a 20-min fit call",
                  "We come prepared with a plan specific to your business",
                ].map((step, i) => (
                  <li key={i} className="flex items-start gap-3 text-[13px] text-[#72767a]">
                    <span className="w-5 h-5 rounded-full bg-[#29ABE2]/10 border border-[#29ABE2]/20 text-[#29ABE2] text-[11px] font-bold flex items-center justify-center shrink-0 mt-0.5">
                      {i + 1}
                    </span>
                    {step}
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex items-center gap-3 mt-8 text-[13px] text-[#72767a]">
              <span className="w-8 h-8 rounded-full bg-gradient-to-br from-[#2B4EA0] to-[#29ABE2] flex items-center justify-center text-white font-bold text-[12px]">M</span>
              Questions? Email us at{" "}
              <a href="mailto:nic@moximize.net" className="text-[#29ABE2] hover:underline">
                nic@moximize.net
              </a>
            </div>
          </div>

          {/* Right — form */}
          <div className="bg-[#17181c] border border-[#242628] rounded-[32px] overflow-hidden sticky top-8">
            <div className={`h-[3px] bg-gradient-to-r ${plan.color}`} />
            <div className="p-10">
              <h2 className="font-bold text-[22px] mb-1">Book a 20-Min Fit Call</h2>
              <p className="text-[13px] text-[#72767a] mb-7">
                Free 20-min call. We'll confirm it's a fit and map out your first 30 days.
              </p>
              <div id="hs-getstarted-form" />
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default function GetStarted() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-[#000000] flex items-center justify-center">
        <div className="w-8 h-8 rounded-full border-2 border-[#29ABE2] border-t-transparent animate-spin" />
      </div>
    }>
      <GetStartedInner />
    </Suspense>
  );
}
