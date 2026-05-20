import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Case Studies — Moximize",
  description: "Real results from real B2B companies. See how Moximize drives pipeline, HubSpot adoption, and outbound performance.",
  alternates: { canonical: "https://moximize.net/case-studies" },
};

const cases = [
  {
    slug: "b2b-saas-pipeline-growth",
    tag: "Outbound · AI Lead Gen",
    title: "How a B2B SaaS Platform Went from 0 to 10 Qualified Meetings/Month in 60 Days",
    result: "10 meetings/month",
    metric: "+340% pipeline",
    industry: "SaaS",
  },
  {
    slug: "hubspot-crm-implementation",
    tag: "HubSpot · CRM",
    title: "Professional Services Firm Achieves 95% HubSpot Adoption After Full CRM Rebuild",
    result: "95% adoption",
    metric: "10+ hrs saved/week",
    industry: "Professional Services",
  },
  {
    slug: "cold-email-outbound",
    tag: "Cold Email · Outbound",
    title: "FinTech Startup Books 15 Demos/Month From Cold LinkedIn + Email in 6 Weeks",
    result: "15 demos/month",
    metric: "42% open rate",
    industry: "FinTech",
  },
];

export default function CaseStudiesPage() {
  return (
    <div className="min-h-screen bg-[#000000] text-[#e7e9ea]">
      <div className="max-w-[1100px] mx-auto px-6 py-20">
        <Link href="/" className="text-[#29ABE2] text-[14px] font-semibold hover:underline mb-12 block">
          ← Back to Moximize
        </Link>

        <div className="mb-14">
          <span className="inline-block text-[11px] font-bold uppercase tracking-[0.12em] bg-[#29ABE2]/10 border border-[#29ABE2]/30 text-[#29ABE2] px-3 py-1 rounded-full mb-5">
            Case Studies
          </span>
          <h1 className="font-bold text-[clamp(32px,5vw,56px)] tracking-tight leading-[1.1] mb-4">
            Real Results.<br />Real B2B Teams.
          </h1>
          <p className="text-[17px] text-[#72767a] max-w-[480px] leading-[1.7]">
            Here's what measurable growth actually looks like across the clients we work with.
          </p>
        </div>

        <div className="grid md:grid-cols-1 gap-6">
          {cases.map((c) => (
            <Link
              key={c.slug}
              href={`/case-studies/${c.slug}`}
              className="group flex flex-col md:flex-row gap-8 bg-[#17181c] border border-[#242628] hover:border-[#29ABE2]/40 rounded-[24px] p-8 transition-all hover:shadow-[0_16px_40px_rgba(41,171,226,0.08)] hover:-translate-y-0.5"
            >
              <div className="flex-1">
                <span className="text-[11px] font-bold uppercase tracking-[0.1em] text-[#29ABE2] mb-3 block">{c.tag}</span>
                <h2 className="font-bold text-[20px] leading-[1.3] text-white mb-2 group-hover:text-[#29ABE2] transition-colors">{c.title}</h2>
                <p className="text-[13px] text-[#72767a]">Industry: {c.industry}</p>
              </div>
              <div className="flex md:flex-col gap-4 md:gap-2 shrink-0 md:items-end justify-start">
                <div className="bg-[#29ABE2]/10 border border-[#29ABE2]/20 rounded-[12px] px-5 py-3 text-center">
                  <p className="text-[22px] font-extrabold text-[#29ABE2]">{c.result}</p>
                </div>
                <div className="bg-[#17181c] border border-[#242628] rounded-[12px] px-5 py-3 text-center">
                  <p className="text-[16px] font-bold text-white">{c.metric}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-[15px] text-[#72767a] mb-6">Ready to write your own case study?</p>
          <Link
            href="/get-started"
            className="inline-flex items-center gap-2 bg-[#29ABE2] hover:bg-[#1a9fd4] text-black font-bold px-8 py-4 rounded-full text-[15px] transition-colors"
          >
            Get Started Free →
          </Link>
        </div>
      </div>
    </div>
  );
}
