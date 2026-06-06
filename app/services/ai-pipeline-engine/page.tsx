import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Pipeline Engine — Qualified Meetings, Guaranteed | Moximize",
  description: "Qualified meetings in your calendar every month — guaranteed minimum. AI-powered outbound built on HubSpot for US B2B teams.",
  alternates: { canonical: "https://moximize.net/services/ai-pipeline-engine" },
};

export default function AIpipelinePage() {
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
          AI Pipeline Engine
        </h1>
        <p className="text-[20px] text-[#72767a] leading-[1.6] mb-4 max-w-[680px]">
          Qualified meetings in your calendar every month — guaranteed minimum.
        </p>
        <p className="text-[16px] text-[#d9d9d9] leading-[1.7] mb-10 max-w-[680px]">
          We build and run your entire outbound pipeline using AI-enriched data, personalized sequences, and done-for-you inbox management — all synced to your HubSpot CRM.
        </p>
        <div className="flex flex-wrap gap-4 mb-16">
          <Link href="/contact" className="inline-flex items-center gap-2 bg-[#29ABE2] hover:bg-[#1a9fd4] text-black font-bold px-7 py-3.5 rounded-full text-[15px] transition-colors">
            Book a fit call →
          </Link>
          <span className="inline-flex items-center text-[15px] font-semibold text-[#72767a] px-7 py-3.5 rounded-full border border-[#242628]">
            From $4,500/mo
          </span>
        </div>

        {/* Is this right for you */}
        <div className="mb-16 p-8 bg-[#17181c] border border-[#242628] rounded-[24px]">
          <h2 className="font-bold text-[22px] mb-6">Is this right for you?</h2>
          <p className="text-[15px] text-[#72767a] mb-5">This service is built for US B2B teams that:</p>
          <ul className="space-y-3">
            {[
              "Use HubSpot (or are willing to)",
              "Have a defined ICP but aren't generating enough pipeline",
              "Don't have in-house SDR capacity or want to replace underperforming outbound",
              "Want meetings on the calendar, not just a 'strategy deck'",
              "Are ready to commit to a 90-day minimum engagement",
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
              { title: "ICP Research & List Building", body: "We define and refine your ideal customer profile, then build targeted lists using Apollo.io and Clay enrichment with real-time intent signals." },
              { title: "AI-Personalized Sequences", body: "Every outreach email is personalized using AI — referencing recent news, job postings, and LinkedIn activity. Not mail-merge. Actual personalization." },
              { title: "Inbox & Reply Management", body: "We handle replies, book meetings, and manage objections on your behalf. Positive replies get booked to your calendar automatically." },
              { title: "HubSpot Sync", body: "Every touchpoint — sent emails, opens, replies, meetings booked — logs back to your HubSpot contacts in real time." },
              { title: "Deliverability Infrastructure", body: "Separate sending domains, SPF/DKIM/DMARC setup, warm-up routines, and daily send-volume management to protect your domain reputation." },
              { title: "Weekly Performance Reports", body: "Open rates, reply rates, meetings booked, and what we're testing next — delivered every week with transparent metrics." },
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
              { step: "01", title: "Onboarding & ICP Workshop", body: "We spend the first week inside your business — understanding your best customers, your value prop, and the buying triggers we should target. We define a precise ICP before we touch any tools." },
              { step: "02", title: "Infrastructure Build", body: "Sending domains, HubSpot integration, Clay workspace, Apollo lists, and deliverability warm-up. Everything needed before sending a single email." },
              { step: "03", title: "First Sequences Launch", body: "We write and launch the first sequences — typically 3–5 email steps over 14 days — and begin sending to a warm, enriched list segment." },
              { step: "04", title: "Optimize & Scale", body: "Every week we analyze what's working, cut what isn't, and scale what converts. By month 2 we know your market well enough to consistently book meetings." },
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

        {/* Pricing */}
        <div className="mb-16">
          <h2 className="font-bold text-[clamp(24px,3vw,36px)] mb-3">Pricing</h2>
          <p className="text-[15px] text-[#72767a] mb-8">Month-to-month after initial 90-day commitment. No long-term lock-in.</p>
          <div className="grid sm:grid-cols-3 gap-4">
            {[
              {
                name: "Starter",
                price: "$4,500/mo",
                description: "1 ICP, 1 active sequence, 500 contacts/mo, email only",
                features: ["ICP research + list building", "AI-personalized email sequences", "HubSpot sync", "Weekly reporting"],
                highlight: false,
              },
              {
                name: "Growth",
                price: "$6,500/mo",
                description: "2 ICPs, 3 active sequences, 1,500 contacts/mo, email + LinkedIn",
                features: ["Everything in Starter", "LinkedIn outreach added", "Inbox + reply management", "Bi-weekly strategy calls"],
                highlight: true,
              },
              {
                name: "Scale",
                price: "$8,000/mo",
                description: "3 ICPs, unlimited sequences, 3,000 contacts/mo, full multichannel",
                features: ["Everything in Growth", "3 ICPs in parallel", "ABM + intent targeting", "Dedicated account manager"],
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
                q: "What's the guaranteed minimum meetings?",
                a: "It depends on your ICP and market. We establish the minimum in your contract before we start — typically 4–8 qualified meetings per month on the Growth plan. If we miss the guarantee, you get credit toward next month.",
              },
              {
                q: "What counts as a 'qualified meeting'?",
                a: "A meeting that meets the criteria we define together upfront — typically: decision-maker or budget-holder, within your ICP firmographics, attended the call. We don't count no-shows or wrong-fits.",
              },
              {
                q: "Do I need HubSpot already?",
                a: "You need to be on HubSpot (or willing to set it up). If you're not on HubSpot yet, we can set it up as part of onboarding. We also offer the HubSpot AI Implementation service as a standalone.",
              },
              {
                q: "How long before I see meetings?",
                a: "Most clients see the first meetings booked in weeks 3–4. The first 2 weeks are infrastructure and warm-up. Full ramp typically happens by month 2.",
              },
              {
                q: "What's the contract structure?",
                a: "Initial 90-day commitment, then month-to-month. We don't lock clients into long-term contracts — we keep clients by delivering results.",
              },
              {
                q: "What do you need from us?",
                a: "Access to your HubSpot portal, 2–3 hours for the onboarding ICP workshop, and a calendar link for booking meetings. We handle the rest.",
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
          <h3 className="font-bold text-[22px] mb-2">Ready to start booking meetings?</h3>
          <p className="text-[14px] text-[#72767a] mb-6">Book a 20-min call. We'll tell you exactly how many meetings we'd commit to for your business.</p>
          <Link href="/contact" className="inline-flex items-center gap-2 bg-[#29ABE2] hover:bg-[#1a9fd4] text-black font-bold px-7 py-3.5 rounded-full text-[15px] transition-colors">
            Book a fit call →
          </Link>
        </div>
      </div>
    </div>
  );
}
