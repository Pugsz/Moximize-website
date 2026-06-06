import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "B2B SaaS: 10 Qualified Meetings/Month in 60 Days — Moximize",
  description: "How Moximize built a cold email + AI outbound system that generated 10 qualified meetings per month for a B2B SaaS platform in under 60 days.",
  alternates: { canonical: "https://moximize.net/case-studies/b2b-saas-pipeline-growth" },
};

const results = [
  { label: "Qualified meetings/month", value: "10–12" },
  { label: "Pipeline increase", value: "+340%" },
  { label: "Time to first meeting", value: "18 days" },
  { label: "Email open rate", value: "44%" },
];

export default function CaseStudy1() {
  return (
    <div className="min-h-screen bg-[#000000] text-[#e7e9ea]">
      <div className="max-w-[800px] mx-auto px-6 py-20">
        <Link href="/case-studies" className="text-[#29ABE2] text-[14px] font-semibold hover:underline mb-12 block">
          ← Back to Case Studies
        </Link>

        <span className="inline-block text-[11px] font-bold uppercase tracking-[0.12em] bg-[#29ABE2]/10 border border-[#29ABE2]/30 text-[#29ABE2] px-3 py-1 rounded-full mb-6">
          Outbound · AI Lead Gen · SaaS
        </span>
        <h1 className="font-bold text-[clamp(28px,4vw,44px)] tracking-tight leading-[1.1] mb-6">
          How a B2B SaaS Platform Went from 0 to 10 Qualified Meetings/Month in 60 Days
        </h1>

        {/* Results bar */}
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
            <p>A Series A B2B SaaS platform had a strong product but no repeatable outbound motion. Their sales team was relying entirely on inbound referrals — unpredictable, unscalable, and not enough to hit their growth targets. They needed a pipeline system that could generate consistent qualified meetings without adding headcount.</p>
          </section>

          <section>
            <h2 className="font-bold text-[22px] text-white mb-3">What We Did</h2>
            <p>Moximize built a complete AI-powered outbound system from scratch in under three weeks. We started with deep ICP research — identifying the exact company types, roles, and buying triggers most likely to convert. We then built a 2,000-contact prospect list using Apollo and Clay, enriched with firmographic and intent data.</p>
            <p className="mt-4">Our team wrote a 5-step cold email sequence using a problem-first framework — each email personalised at the first-line level using AI. We set up technical deliverability (SPF, DKIM, DMARC, domain warm-up) and launched through Instantly. LinkedIn outreach ran in parallel targeting the same accounts through connection + message sequences.</p>
          </section>

          <section>
            <h2 className="font-bold text-[22px] text-white mb-3">The Results</h2>
            <p>Within 18 days of launch, they booked their first qualified meeting. By day 60, the system was generating 10–12 qualified meetings per month — all from accounts that matched their ICP exactly. Pipeline value grew by 340% compared to the prior quarter, and the email sequences achieved a 44% average open rate.</p>
          </section>

          <section>
            <h2 className="font-bold text-[22px] text-white mb-3">What They Said</h2>
            <blockquote className="border-l-4 border-[#29ABE2] pl-6 italic text-[#d9d9d9]">
              "Moximize completely transformed how we approach outbound. Within 60 days we had a fully running cold email system booking 8–12 qualified meetings per month."
              <footer className="mt-3 text-[13px] text-[#72767a] not-italic">— Rafael D., Head of Sales</footer>
            </blockquote>
          </section>
        </div>

        <div className="mt-14 p-8 bg-[#17181c] border border-[#242628] rounded-[24px] text-center">
          <h3 className="font-bold text-[20px] mb-2">Want results like this?</h3>
          <p className="text-[14px] text-[#72767a] mb-6">Book a free 20-min call and we'll show you exactly how we'd build your outbound system.</p>
          <Link href="/contact" className="inline-flex items-center gap-2 bg-[#29ABE2] hover:bg-[#1a9fd4] text-black font-bold px-7 py-3.5 rounded-full text-[15px] transition-colors">
            Book a fit call →
          </Link>
        </div>
      </div>
    </div>
  );
}
