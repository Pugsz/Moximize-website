import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Inbound Marketing — Leads That Come to You | Moximize",
  description: "We build the system that brings qualified leads to you — AI content strategy, SEO, landing pages, and lead nurture sequences. From $3,500/mo. 90-day minimum.",
  alternates: { canonical: "https://moximize.net/services/ai-inbound" },
};

export default function AIInboundPage() {
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
          AI Inbound Marketing
        </h1>
        <p className="text-[20px] text-[#72767a] leading-[1.6] mb-4 max-w-[680px]">
          Leads that come to you. Compounding every month.
        </p>
        <p className="text-[16px] text-[#d9d9d9] leading-[1.7] mb-6 max-w-[680px]">
          We build the content, SEO, and lead capture system that generates a steady stream of inbound leads — so your pipeline doesn&apos;t depend entirely on outbound hustle. Results compound over time.
        </p>
        <div className="flex flex-wrap gap-4 mb-16">
          <Link href="/contact" className="inline-flex items-center gap-2 bg-[#29ABE2] hover:bg-[#1a9fd4] text-black font-bold px-7 py-3.5 rounded-full text-[15px] transition-colors">
            Book a fit call →
          </Link>
          <span className="inline-flex items-center text-[15px] font-semibold text-[#72767a] px-7 py-3.5 rounded-full border border-[#242628]">
            From $3,500/mo
          </span>
        </div>

        <div className="mb-16 p-8 bg-[#29ABE2]/5 border border-[#29ABE2]/20 rounded-[24px]">
          <p className="text-[13px] font-bold uppercase tracking-[0.1em] text-[#29ABE2] mb-2">Important: Inbound takes time</p>
          <p className="text-[15px] text-[#d9d9d9] leading-[1.7]">
            Inbound marketing compounds — meaning month 3 is better than month 1, and month 6 is better than month 3. We require a 90-day minimum commitment so the system has time to gain traction before you evaluate results.
          </p>
        </div>

        <div className="mb-16 p-8 bg-[#17181c] border border-[#242628] rounded-[24px]">
          <h2 className="font-bold text-[22px] mb-6">Is this right for you?</h2>
          <p className="text-[15px] text-[#72767a] mb-5">This service is built for B2B teams that:</p>
          <ul className="space-y-3">
            {[
              "Want to build long-term pipeline that doesn't depend entirely on cold outreach",
              "Are publishing zero content right now — or publishing inconsistently with no SEO strategy",
              "Want to be found by buyers searching for what they sell",
              "Need a lead capture system, not just a blog",
              "Are willing to invest 90+ days before expecting compounding returns",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3 text-[15px] text-[#d9d9d9]">
                <span className="text-[#29ABE2] mt-0.5 shrink-0">✓</span>
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="mb-16">
          <h2 className="font-bold text-[clamp(24px,3vw,36px)] mb-8">What you get</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              { title: "AI Content Strategy", body: "We research your ICP's search behavior, map content to buyer stages, and build a content calendar that targets high-intent keywords your competitors aren't owning yet." },
              { title: "SEO-Optimized Blog Posts", body: "We write and publish AI-assisted, human-reviewed content designed to rank on Google. Not generic AI slop — structured, research-backed articles built around buyer intent." },
              { title: "Landing Pages + Lead Capture", body: "High-converting landing pages for each offer or use case, with forms routed directly to your CRM. Designed to convert traffic into contacts — not just traffic." },
              { title: "Lead Magnets", body: "Checklists, templates, frameworks, and guides that capture contact info from buyers in research mode — before they're ready to book a call." },
              { title: "AI Nurture Sequences", body: "Automated email sequences triggered by form fills and page behavior. Leads who download a resource get followed up with relevant content until they're sales-ready." },
              { title: "Unified Lead Scoring", body: "Inbound leads scored alongside your outbound pipeline — so your sales team always knows who's hottest, regardless of how they found you." },
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
              { step: "01", title: "Keyword + Competitor Audit", body: "We audit your current domain authority, map your ICP's search behavior, and identify the highest-opportunity keywords your competitors are ranking for — and you're not." },
              { step: "02", title: "Content + Capture Architecture", body: "We build your content calendar, design landing pages, and configure lead capture forms integrated with your CRM. Foundation first." },
              { step: "03", title: "Publish + Distribute", body: "We publish content on a consistent cadence and distribute through your email list, LinkedIn, and any other channels you own." },
              { step: "04", title: "Measure + Optimize", body: "Monthly reports on organic traffic, keyword rankings, form conversion rates, and leads generated. We optimize based on what's gaining traction." },
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
          <p className="text-[15px] text-[#72767a] mb-8">90-day minimum, then month-to-month. Bundle with AI Outbound and save $1,500/mo.</p>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              {
                name: "AI Inbound",
                price: "$3,500/mo",
                description: "Full inbound system — content strategy, SEO, landing pages, lead capture, and nurture",
                features: ["AI content strategy + keyword research", "4 SEO blog posts/mo", "Landing pages + lead capture forms", "Lead magnet creation", "AI nurture sequences", "Monthly performance report"],
                highlight: false,
              },
              {
                name: "Outbound + Inbound Bundle",
                price: "$6,500/mo",
                description: "Full outbound + inbound system together — save $1,500/mo vs. buying separately",
                features: ["Everything in AI Inbound", "ICP research + AI enrichment", "Cold email + LinkedIn outreach", "Inbox + reply management", "Unified lead scoring", "Save $1,500/mo vs. separate"],
                highlight: true,
              },
            ].map((plan) => (
              <div
                key={plan.name}
                className={`p-6 rounded-[20px] border ${plan.highlight ? "border-[#29ABE2] bg-[#0d1a2e]" : "border-[#242628] bg-[#17181c]"}`}
              >
                {plan.highlight && (
                  <span className="inline-block text-[11px] font-bold uppercase tracking-[0.12em] bg-[#29ABE2] text-black px-3 py-1 rounded-full mb-3">
                    Best Value
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
                q: "Why is there a 90-day minimum?",
                a: "Inbound marketing is not a quick win. Content takes time to index and rank; SEO compounds over months. Teams that expect results in 30 days will always be disappointed by inbound. We require 90 days so the system has time to gain traction before you evaluate ROI.",
              },
              {
                q: "How many leads should we expect per month?",
                a: "It varies by industry and starting domain authority. Typically, clients in months 1–2 see early search impressions and form fills from direct traffic; months 3–6 is where organic search traffic begins to compound.",
              },
              {
                q: "Do you write the content or do we?",
                a: "We write, edit, and publish everything. We may interview your team once a month to capture original insights — but the production burden is on us, not you.",
              },
              {
                q: "What CRM do you integrate with?",
                a: "We integrate with HubSpot, GoHighLevel, Pipedrive, Zoho, Salesforce, and most other major CRMs. All form submissions and nurture activity sync automatically.",
              },
              {
                q: "Is inbound better than outbound?",
                a: "Neither is better — they serve different buyer behaviors. Outbound finds people who don't know you yet. Inbound captures people actively searching for what you do. The most effective pipeline uses both. That's why we offer a bundle discount.",
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
          <h3 className="font-bold text-[22px] mb-2">Ready to build your inbound engine?</h3>
          <p className="text-[14px] text-[#72767a] mb-6">Book a 20-min fit call. We&apos;ll assess your current domain authority and tell you honestly what inbound can do for your pipeline.</p>
          <Link href="/contact" className="inline-flex items-center gap-2 bg-[#29ABE2] hover:bg-[#1a9fd4] text-black font-bold px-7 py-3.5 rounded-full text-[15px] transition-colors">
            Book a fit call →
          </Link>
        </div>
      </div>
    </div>
  );
}
