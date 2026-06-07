import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Lead Generation — Outbound + Inbound for US B2B Teams | Moximize",
  description: "We run your full top-of-funnel with AI — outbound sequences that find your ICP and inbound content that attracts them. Everything flows into HubSpot automatically.",
  alternates: { canonical: "https://moximize.net/services/ai-lead-generation" },
};

export default function AILeadGenerationPage() {
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
          AI Lead Generation
        </h1>
        <p className="text-[20px] text-[#72767a] leading-[1.6] mb-4 max-w-[680px]">
          Outbound finds them. Inbound attracts them. AI converts them.
        </p>
        <p className="text-[16px] text-[#d9d9d9] leading-[1.7] mb-10 max-w-[680px]">
          We run your full top-of-funnel — cold outreach to your ICP and inbound content that brings qualified leads to you. AI enrichment, personalized sequences, content automation, and lead scoring. Every lead flows into HubSpot automatically.
        </p>
        <div className="flex flex-wrap gap-4 mb-16">
          <Link href="/contact" className="inline-flex items-center gap-2 bg-[#29ABE2] hover:bg-[#1a9fd4] text-black font-bold px-7 py-3.5 rounded-full text-[15px] transition-colors">
            Book a fit call →
          </Link>
          <span className="inline-flex items-center text-[15px] font-semibold text-[#72767a] px-7 py-3.5 rounded-full border border-[#242628]">
            From $4,500/mo
          </span>
        </div>

        {/* Two pillars */}
        <div className="grid md:grid-cols-2 gap-6 mb-16">
          <div className="p-8 bg-[#17181c] border border-[#242628] rounded-[24px]">
            <div className="w-12 h-12 rounded-md bg-[#29ABE2]/10 border border-[#29ABE2]/20 flex items-center justify-center text-[22px] mb-5">
              📤
            </div>
            <h2 className="font-bold text-[20px] mb-3">Outbound Engine</h2>
            <p className="text-[14px] text-[#72767a] leading-[1.7] mb-5">
              We go to your ICP. AI-enriched prospect lists, personalized cold email, and LinkedIn sequences — all built around buying signals, not spray-and-pray.
            </p>
            <ul className="space-y-2.5">
              {[
                "ICP definition + Clay/Apollo AI enrichment",
                "AI-personalized cold email sequences",
                "LinkedIn connection + message sequences",
                "Buying signal monitoring (funding, hiring, job changes)",
                "Inbox management + reply handling",
                "Full HubSpot sync — every touchpoint logged",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-[13px] text-[#d9d9d9]">
                  <span className="text-[#29ABE2] shrink-0 mt-0.5">✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="p-8 bg-[#17181c] border border-[#242628] rounded-[24px]">
            <div className="w-12 h-12 rounded-md bg-[#29ABE2]/10 border border-[#29ABE2]/20 flex items-center justify-center text-[22px] mb-5">
              📥
            </div>
            <h2 className="font-bold text-[20px] mb-3">Inbound System</h2>
            <p className="text-[14px] text-[#72767a] leading-[1.7] mb-5">
              We bring leads to you. AI-driven content strategy, SEO-optimized articles, HubSpot landing pages, and nurture sequences that warm leads before sales ever touches them.
            </p>
            <ul className="space-y-2.5">
              {[
                "AI content strategy based on ICP search intent",
                "SEO-optimized blog posts and thought leadership",
                "HubSpot landing pages + lead capture forms",
                "Lead magnet creation and promotion",
                "AI-powered nurture email sequences",
                "Unified lead scoring — inbound + outbound in one view",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-[13px] text-[#d9d9d9]">
                  <span className="text-[#29ABE2] shrink-0 mt-0.5">✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Is this right for you */}
        <div className="mb-16 p-8 bg-[#17181c] border border-[#242628] rounded-[24px]">
          <h2 className="font-bold text-[22px] mb-6">Is this right for you?</h2>
          <p className="text-[15px] text-[#72767a] mb-5">This service is built for US B2B teams that:</p>
          <ul className="space-y-3">
            {[
              "Use HubSpot (or are willing to) as your CRM",
              "Have a defined ICP but aren't generating enough qualified leads",
              "Want pipeline from both directions — active outreach and inbound attraction",
              "Don't have in-house SDR or content capacity to run both consistently",
              "Want a fully managed system, not just a strategy deck",
              "Are ready to commit to a 90-day minimum engagement",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3 text-[15px] text-[#d9d9d9]">
                <span className="text-[#29ABE2] mt-0.5 shrink-0">✓</span>
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* How it works */}
        <div className="mb-16">
          <h2 className="font-bold text-[clamp(24px,3vw,36px)] mb-8">How it works</h2>
          <div className="space-y-4">
            {[
              {
                step: "01",
                title: "ICP + Positioning Workshop (Days 1–5)",
                body: "We lock in your ideal customer profile, value proposition, and channel mix. We define who we're targeting outbound, what search intent we're targeting inbound, and what a qualified lead looks like for your business.",
              },
              {
                step: "02",
                title: "Outbound Build (Days 6–14)",
                body: "We build your prospect list using Clay and Apollo with AI enrichment, write your cold email sequences, set up LinkedIn outreach, configure deliverability infrastructure, and launch your first campaigns.",
              },
              {
                step: "03",
                title: "Inbound Build (Days 10–30)",
                body: "We build your HubSpot landing pages, create your first lead magnet, write and publish your first AI-optimized content pieces, and set up automated lead nurture sequences in HubSpot.",
              },
              {
                step: "04",
                title: "Lead Scoring + HubSpot Sync (Days 20–30)",
                body: "We configure unified lead scoring in HubSpot so inbound and outbound leads are scored on the same model. Your sales team gets a live pipeline view with every lead ranked by readiness to buy.",
              },
              {
                step: "05",
                title: "Ongoing Management + Optimization",
                body: "Every month: new outbound campaigns, new content, A/B testing, sequence optimization, and a performance report. We iterate based on what's working and scale the channels driving the best leads.",
              },
            ].map((s) => (
              <div key={s.step} className="flex gap-6 p-7 bg-[#17181c] border border-[#242628] rounded-[20px]">
                <span className="font-extrabold text-[32px] text-[#29ABE2]/30 leading-none shrink-0 w-12">{s.step}</span>
                <div>
                  <h3 className="font-bold text-[17px] mb-2">{s.title}</h3>
                  <p className="text-[14px] text-[#72767a] leading-[1.65]">{s.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Pricing */}
        <div className="mb-16">
          <h2 className="font-bold text-[clamp(24px,3vw,36px)] mb-3">Pricing</h2>
          <p className="text-[15px] text-[#72767a] mb-8">All tiers include both outbound and inbound. Scope scales with volume and channels.</p>
          <div className="grid md:grid-cols-3 gap-5">
            {[
              {
                name: "Starter",
                price: "$4,500/mo",
                best: "1 outbound channel + inbound foundation",
                items: [
                  "500 AI-enriched prospects/mo",
                  "Cold email sequences (1 campaign)",
                  "2 SEO blog posts/mo",
                  "1 HubSpot landing page",
                  "Lead scoring setup",
                  "Monthly performance report",
                ],
              },
              {
                name: "Growth",
                price: "$6,500/mo",
                best: "Multi-channel outbound + full inbound",
                popular: true,
                items: [
                  "2,000 AI-enriched prospects/mo",
                  "Cold email + LinkedIn outreach",
                  "4 SEO blog posts/mo",
                  "2 HubSpot landing pages",
                  "Lead magnet creation",
                  "AI nurture sequences",
                  "Bi-weekly performance calls",
                ],
              },
              {
                name: "Scale",
                price: "$9,000/mo",
                best: "Full-stack outbound + inbound engine",
                items: [
                  "Unlimited AI-enriched prospects",
                  "All outbound channels + ABM targeting",
                  "8 SEO content pieces/mo",
                  "Full HubSpot marketing hub management",
                  "LinkedIn thought leadership content",
                  "A/B testing across all channels",
                  "Weekly calls + dedicated Slack",
                ],
              },
            ].map((tier) => (
              <div
                key={tier.name}
                className={`rounded-[20px] border p-7 flex flex-col ${
                  tier.popular
                    ? "border-[#29ABE2]/60 shadow-[0_0_40px_rgba(41,171,226,0.12)]"
                    : "border-[#242628]"
                } bg-[#17181c]`}
              >
                {tier.popular && (
                  <span className="text-[10px] font-bold uppercase tracking-[0.1em] text-[#29ABE2] mb-3 block">Most Popular</span>
                )}
                <h3 className="font-bold text-[20px] mb-1">{tier.name}</h3>
                <p className="text-[13px] text-[#72767a] mb-4">{tier.best}</p>
                <p className="font-extrabold text-[28px] text-white mb-6">{tier.price}</p>
                <ul className="space-y-2.5 flex-1 mb-6">
                  {tier.items.map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-[13px] text-[#d9d9d9]">
                      <span className="text-[#29ABE2] shrink-0 mt-0.5">✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/contact"
                  className={`w-full py-3 rounded-full font-bold text-[14px] text-center transition-all ${
                    tier.popular
                      ? "bg-[#29ABE2] hover:bg-[#1a9fd4] text-black"
                      : "border border-[#242628] hover:border-[#29ABE2]/50 hover:text-[#29ABE2] text-white"
                  }`}
                >
                  Book a fit call →
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* FAQ */}
        <div className="mb-16">
          <h2 className="font-bold text-[clamp(24px,3vw,36px)] mb-8">Common questions</h2>
          <div className="space-y-4">
            {[
              {
                q: "Do I need to already be on HubSpot?",
                a: "You do need HubSpot — it's the system everything flows into. If you're not on HubSpot yet, we can set it up as part of the engagement or run a HubSpot AI Implementation alongside this service.",
              },
              {
                q: "How quickly will I see results from outbound?",
                a: "Most clients see their first qualified meetings within 2–3 weeks of launch. Outbound is faster to see results from — inbound builds over 60–90 days as content indexes and ranks.",
              },
              {
                q: "What's the difference between outbound and inbound in this context?",
                a: "Outbound is us going to your prospects — cold email, LinkedIn, AI-enriched sequences. Inbound is prospects coming to you — SEO content, landing pages, lead magnets. Both feed the same HubSpot pipeline.",
              },
              {
                q: "Can I start with just outbound or just inbound?",
                a: "Yes. The Starter tier is outbound-weighted with an inbound foundation. If you want inbound-only, we can scope that separately. But the full engine works best when both channels are running simultaneously.",
              },
              {
                q: "Do you write the content or do I?",
                a: "We write everything — email sequences, LinkedIn messages, blog posts, landing page copy. You review and approve before anything goes live. We use AI to produce at speed but every piece is edited for quality and brand voice.",
              },
              {
                q: "What tools do you use?",
                a: "Clay, Apollo, Instantly, LinkedIn Sales Navigator for outbound. HubSpot (Marketing Hub, CMS, Workflows) for inbound and lead management. We bring the tools — you just need HubSpot access.",
              },
            ].map((faq) => (
              <div key={faq.q} className="p-7 bg-[#17181c] border border-[#242628] rounded-[20px]">
                <h3 className="font-bold text-[16px] mb-3">{faq.q}</h3>
                <p className="text-[14px] text-[#72767a] leading-[1.7]">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="p-8 bg-[#17181c] border border-[#242628] rounded-[24px] text-center">
          <h3 className="font-bold text-[20px] mb-2">Ready to fill your pipeline from both ends?</h3>
          <p className="text-[14px] text-[#72767a] mb-6">Book a 20-min fit call. We'll show you exactly what outbound + inbound looks like for your specific ICP.</p>
          <Link href="/contact" className="inline-flex items-center gap-2 bg-[#29ABE2] hover:bg-[#1a9fd4] text-black font-bold px-7 py-3.5 rounded-full text-[15px] transition-colors">
            Book a fit call →
          </Link>
        </div>
      </div>
    </div>
  );
}
