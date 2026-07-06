import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Outbound Marketing — Qualified Meetings in Your Calendar | Moximize",
  description: "We find your ICP, build personalized cold email and LinkedIn sequences powered by AI, and book qualified meetings for your sales team. From $4,500/mo.",
  alternates: { canonical: "https://moximize.net/services/ai-outbound" },
};

export default function AIOutboundPage() {
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
          AI Outbound Marketing
        </h1>
        <p className="text-[20px] text-[#72767a] leading-[1.6] mb-4 max-w-[680px]">
          Qualified meetings in your calendar. Every month.
        </p>
        <p className="text-[16px] text-[#d9d9d9] leading-[1.7] mb-6 max-w-[680px]">
          We find your ideal customers, build AI-personalized outreach sequences, and book the meetings — so your sales team only handles conversations with people ready to buy.
        </p>
        <div className="flex flex-wrap gap-4 mb-16">
          <Link href="/contact" className="inline-flex items-center gap-2 bg-[#29ABE2] hover:bg-[#1a9fd4] text-black font-bold px-7 py-3.5 rounded-full text-[15px] transition-colors">
            Book a fit call →
          </Link>
          <span className="inline-flex items-center text-[15px] font-semibold text-[#72767a] px-7 py-3.5 rounded-full border border-[#242628]">
            From $4,500/mo
          </span>
        </div>

        <div className="mb-16 p-8 bg-[#17181c] border border-[#242628] rounded-[24px]">
          <h2 className="font-bold text-[22px] mb-6">Is this right for you?</h2>
          <p className="text-[15px] text-[#72767a] mb-5">This service is built for B2B teams that:</p>
          <ul className="space-y-3">
            {[
              "Need net-new pipeline but don't have an in-house SDR team",
              "Have tried cold email before and found it inconsistent or unscalable",
              "Know their ICP but struggle to reach them at volume without burning the domain",
              "Want AI-personalized outreach — not generic blast emails",
              "Need meetings booked and handed off to their closers, not leads dumped in a spreadsheet",
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
              { title: "ICP Research + AI Enrichment", body: "We build your ideal customer profile and use Clay and Apollo to enrich every contact with firmographic, technographic, and intent data before we write a single word." },
              { title: "AI-Personalized Email Sequences", body: "Every email is personalized at scale using AI — referencing company-specific triggers, recent news, and role-specific pain points. Not mail merge. Actual personalization." },
              { title: "LinkedIn Outreach", body: "Connection requests, follow-up messages, and voice notes built into a sequenced workflow. We run it or hand off to your rep — your choice." },
              { title: "Deliverability Infrastructure", body: "We set up secondary sending domains, warm them properly, and monitor inbox placement so your sequences actually land in primary — not spam." },
              { title: "Inbox + Reply Management", body: "We monitor replies, handle objections, route interested prospects to your calendar, and flag hot leads in real time. You close, we manage the inbox." },
              { title: "CRM Sync", body: "Every contact, email sent, and reply logs automatically to your CRM. Full visibility into the outbound pipeline — no data entry required from your team." },
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
              { step: "01", title: "ICP + Offer Workshop", body: "We spend the first week understanding your buyer, your offer, and what makes your best customers buy. This shapes everything downstream." },
              { step: "02", title: "Infrastructure Build", body: "We configure sending infrastructure, set up enrichment pipelines in Clay, and build your sequence framework. Done in week 2." },
              { step: "03", title: "Launch + Iterate", body: "We launch your first sequence to a test cohort, measure open rates, reply rates, and meeting rates — then iterate fast before scaling volume." },
              { step: "04", title: "Scale + Report", body: "Once reply rates hit target, we scale volume and deliver weekly reports on sequence performance, pipeline created, and meetings booked." },
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
          <p className="text-[15px] text-[#72767a] mb-8">Month-to-month after initial 90-day commitment. Bundle with AI Inbound and save $1,500/mo.</p>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              {
                name: "AI Outbound",
                price: "$4,500/mo",
                description: "Full outbound engine — ICP research, sequences, inbox management, and CRM sync",
                features: ["ICP research + Clay/Apollo enrichment", "AI-personalized email sequences", "LinkedIn outreach workflow", "Inbox + reply management", "Deliverability infrastructure", "Weekly performance reports"],
                highlight: false,
              },
              {
                name: "Outbound + Inbound Bundle",
                price: "$6,500/mo",
                description: "Full outbound + inbound system together — save $1,500/mo vs. buying separately",
                features: ["Everything in AI Outbound", "AI content strategy + SEO", "Landing pages + lead capture", "AI nurture sequences", "Unified lead scoring", "Save $1,500/mo vs. separate"],
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
                q: "How many meetings can we expect per month?",
                a: "It depends on your ICP, offer, and market. Most clients see 4–10 qualified meetings/month within 60 days. We define a meeting minimum upfront and hold ourselves accountable to it.",
              },
              {
                q: "Won't cold email hurt our domain reputation?",
                a: "Only if it's done wrong. We set up secondary sending domains, warm them properly, and monitor inbox placement weekly. Your main domain is never touched.",
              },
              {
                q: "Do you need access to our CRM?",
                a: "Yes. We sync all contact and activity data to your CRM so your team has full visibility. We work with HubSpot, GoHighLevel, Pipedrive, Zoho, and most major CRMs.",
              },
              {
                q: "What's the difference between this and hiring an SDR?",
                a: "An SDR hire takes 3–6 months to ramp, costs $80k–$120k/yr in salary + benefits + tools, and leaves when they get a better offer. We're live in 2 weeks, tools included, no turnover risk.",
              },
              {
                q: "Can we see examples of the sequences you've built?",
                a: "Yes — we share anonymized examples on your fit call. Every sequence is custom-built for your ICP and offer; we don't reuse templates across clients.",
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
          <h3 className="font-bold text-[22px] mb-2">Ready to fill your pipeline?</h3>
          <p className="text-[14px] text-[#72767a] mb-6">Book a 20-min fit call. We&apos;ll tell you honestly whether outbound is the right move for your stage and ICP.</p>
          <Link href="/contact" className="inline-flex items-center gap-2 bg-[#29ABE2] hover:bg-[#1a9fd4] text-black font-bold px-7 py-3.5 rounded-full text-[15px] transition-colors">
            Book a fit call →
          </Link>
        </div>
      </div>
    </div>
  );
}
