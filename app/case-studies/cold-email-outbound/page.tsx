import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "FinTech: 15 Demos/Month From Cold Outreach in 6 Weeks — Moximize",
  description: "How Moximize helped a FinTech startup book 15 qualified demos per month from cold LinkedIn and email outreach in just 6 weeks.",
  alternates: { canonical: "https://moximize.net/case-studies/cold-email-outbound" },
};

const results = [
  { label: "Demos booked/month", value: "15" },
  { label: "Email open rate", value: "42%" },
  { label: "Time to first demo", value: "11 days" },
  { label: "LinkedIn reply rate", value: "8.4%" },
];

export default function CaseStudy3() {
  return (
    <div className="min-h-screen bg-[#000000] text-[#e7e9ea]">
      <div className="max-w-[800px] mx-auto px-6 py-20">
        <Link href="/case-studies" className="text-[#29ABE2] text-[14px] font-semibold hover:underline mb-12 block">
          ← Back to Case Studies
        </Link>

        <span className="inline-block text-[11px] font-bold uppercase tracking-[0.12em] bg-[#29ABE2]/10 border border-[#29ABE2]/30 text-[#29ABE2] px-3 py-1 rounded-full mb-6">
          Cold Email · LinkedIn · FinTech
        </span>
        <h1 className="font-bold text-[clamp(28px,4vw,44px)] tracking-tight leading-[1.1] mb-6">
          FinTech Startup Books 15 Demos/Month From Cold LinkedIn + Email in 6 Weeks
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
            <p>A pre-Series A FinTech startup had a compelling product targeting mid-market finance teams — but zero outbound infrastructure. Their founding team had deep product knowledge but no experience running outbound campaigns. They needed demos, fast, without burning their runway on a large sales team.</p>
          </section>

          <section>
            <h2 className="font-bold text-[22px] text-white mb-3">What We Did</h2>
            <p>We built a dual-channel outbound system combining cold email and LinkedIn. The ICP was tightly defined: Finance Directors and CFOs at companies between 50–500 employees in the UK and US who had recently raised funding or were actively hiring finance staff (a strong buying signal).</p>
            <p className="mt-4">We used Clay to pull real-time buying signal data and personalise every outreach at scale. Email sequences ran through Instantly with warm-up domains protecting deliverability. On LinkedIn, we ran a connection + message sequence through LinkedIn Sales Navigator, with messages written to lead with the specific problem their ICP was experiencing — not a product pitch.</p>
          </section>

          <section>
            <h2 className="font-bold text-[22px] text-white mb-3">The Results</h2>
            <p>The first demo was booked 11 days after launch. By week 6, the system was consistently generating 15 qualified demos per month. Email open rates hit 42% — nearly double the industry average. LinkedIn reply rates averaged 8.4%, with 60% of replies expressing genuine interest.</p>
          </section>

          <section>
            <h2 className="font-bold text-[22px] text-white mb-3">What They Said</h2>
            <blockquote className="border-l-4 border-[#29ABE2] pl-6 italic text-[#d9d9d9]">
              "Our LinkedIn outreach went from zero to 15 booked demos per month in 6 weeks. The targeting and copywriting were both exceptional."
              <footer className="mt-3 text-[13px] text-[#72767a] not-italic">— Sophie R., Head of Growth, FinTech</footer>
            </blockquote>
          </section>
        </div>

        <div className="mt-14 p-8 bg-[#17181c] border border-[#242628] rounded-[24px] text-center">
          <h3 className="font-bold text-[20px] mb-2">Want a system like this for your team?</h3>
          <p className="text-[14px] text-[#72767a] mb-6">Book a free 20-min call and we'll map out your outbound system before you spend a cent.</p>
          <Link href="/contact" className="inline-flex items-center gap-2 bg-[#29ABE2] hover:bg-[#1a9fd4] text-black font-bold px-7 py-3.5 rounded-full text-[15px] transition-colors">
            Book a fit call →
          </Link>
        </div>
      </div>
    </div>
  );
}
