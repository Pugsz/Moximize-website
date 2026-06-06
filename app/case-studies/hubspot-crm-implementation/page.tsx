import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "HubSpot CRM: 95% Team Adoption After Full Rebuild — Moximize",
  description: "How Moximize rebuilt a professional services firm's HubSpot CRM from scratch and drove 95% team adoption, saving 10+ hours per week.",
  alternates: { canonical: "https://moximize.net/case-studies/hubspot-crm-implementation" },
};

const results = [
  { label: "HubSpot adoption rate", value: "95%" },
  { label: "Hours saved per week", value: "10+" },
  { label: "Automations built", value: "18" },
  { label: "Implementation time", value: "3 weeks" },
];

export default function CaseStudy2() {
  return (
    <div className="min-h-screen bg-[#000000] text-[#e7e9ea]">
      <div className="max-w-[800px] mx-auto px-6 py-20">
        <Link href="/case-studies" className="text-[#29ABE2] text-[14px] font-semibold hover:underline mb-12 block">
          ← Back to Case Studies
        </Link>

        <span className="inline-block text-[11px] font-bold uppercase tracking-[0.12em] bg-[#29ABE2]/10 border border-[#29ABE2]/30 text-[#29ABE2] px-3 py-1 rounded-full mb-6">
          HubSpot · CRM · Professional Services
        </span>
        <h1 className="font-bold text-[clamp(28px,4vw,44px)] tracking-tight leading-[1.1] mb-6">
          Professional Services Firm Achieves 95% HubSpot Adoption After Full CRM Rebuild
        </h1>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12 p-6 bg-[#17181c] border border-[#242628] rounded-[20px]">
          {results.map((r) => (
            <div key={r.label} className="text-center">
              <p className="font-extrabold text-[28px] text-[#29ABE2]">{r.value}</p>
              <p className="text-[11px] text-[#72767a] mt-1 leading-[1.4]">{r.label}</p>
            </div>
          ))}
        </div>

        <div className="space-y-8 text-[15px] leading-[1.8] text-[#d9d9d9]">
          <section>
            <h2 className="font-bold text-[22px] text-white mb-3">The Challenge</h2>
            <p>A 40-person professional services firm had been paying for HubSpot for two years but barely using it. Contacts were duplicated, pipelines were misconfigured, and their team had reverted to spreadsheets. Leadership knew the potential was there — but getting everyone to actually use the CRM felt impossible.</p>
          </section>

          <section>
            <h2 className="font-bold text-[22px] text-white mb-3">What We Did</h2>
            <p>We started with a full HubSpot audit — identifying every broken workflow, duplicate property, and unused feature. From there, we rebuilt the instance ground-up: clean pipeline stages with clear exit criteria, standardised contact and company properties, and a deal scoring model tied to actual revenue outcomes.</p>
            <p className="mt-4">We built 18 automation workflows covering lead assignment, follow-up reminders, pipeline stage nudges, and reporting triggers. Critically, we ran two team training sessions tailored to each role — sales, operations, and leadership all got the specific workflows relevant to them.</p>
          </section>

          <section>
            <h2 className="font-bold text-[22px] text-white mb-3">The Results</h2>
            <p>Adoption went from under 20% to 95% within 6 weeks of the new build going live. The automations eliminated over 10 hours of manual admin per week across the team. Leadership gained a real-time pipeline dashboard they could trust for the first time.</p>
          </section>

          <section>
            <h2 className="font-bold text-[22px] text-white mb-3">What They Said</h2>
            <blockquote className="border-l-4 border-[#29ABE2] pl-6 italic text-[#d9d9d9]">
              "They didn't just configure HubSpot — they taught our team how to actually use it. Adoption went from 20% to 95% and the automations alone save us 10+ hours per week."
              <footer className="mt-3 text-[13px] text-[#72767a] not-italic">— Maria L., CEO, Professional Services Firm</footer>
            </blockquote>
          </section>
        </div>

        <div className="mt-14 p-8 bg-[#17181c] border border-[#242628] rounded-[24px] text-center">
          <h3 className="font-bold text-[20px] mb-2">Is your HubSpot underperforming?</h3>
          <p className="text-[14px] text-[#72767a] mb-6">Book a free strategy call and we'll audit your current setup and show you exactly what to fix.</p>
          <Link href="/contact" className="inline-flex items-center gap-2 bg-[#29ABE2] hover:bg-[#1a9fd4] text-black font-bold px-7 py-3.5 rounded-full text-[15px] transition-colors">
            Book a fit call →
          </Link>
        </div>
      </div>
    </div>
  );
}
