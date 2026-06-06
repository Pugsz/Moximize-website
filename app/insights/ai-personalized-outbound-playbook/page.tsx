import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "The AI-Personalized Outbound Playbook — Moximize",
  description: "A step-by-step walkthrough of how we use Clay, Apollo, and AI to build outbound campaigns that book meetings at 3–5x the rate of generic email blasts.",
  alternates: { canonical: "https://moximize.net/insights/ai-personalized-outbound-playbook" },
};

export default function Article() {
  return (
    <div className="min-h-screen bg-[#000000] text-[#e7e9ea]">
      <div className="max-w-[800px] mx-auto px-6 py-20">
        <Link href="/insights" className="text-[#29ABE2] text-[14px] font-semibold hover:underline mb-12 block">
          ← All insights
        </Link>

        <span className="inline-block text-[11px] font-bold uppercase tracking-[0.12em] bg-[#29ABE2]/10 border border-[#29ABE2]/30 text-[#29ABE2] px-3 py-1 rounded-full mb-6">
          B2B Outbound
        </span>

        <h1 className="font-bold text-[clamp(28px,4vw,44px)] tracking-tight leading-[1.1] mb-5">
          The AI-Personalized Outbound Playbook: From List to Booked Meeting in 3 Weeks
        </h1>

        <div className="flex items-center gap-4 text-[13px] text-[#72767a] mb-12 pb-6 border-b border-[#242628]">
          <span>11 min read</span>
          <span>January 7, 2026</span>
        </div>

        <div className="space-y-8 text-[15px] leading-[1.8] text-[#d9d9d9]">
          <p className="text-[17px] text-[#d9d9d9] leading-[1.7]">
            Generic cold email is dead. Buyers have been trained to ignore templated blasts. But AI-personalized outbound — where every email reads like it was written specifically for that person — books meetings at 3–5x the rate. Here's the exact system we use.
          </p>

          <section>
            <h2 className="font-bold text-[22px] text-white mb-3">Week 1: ICP Definition and List Architecture</h2>
            <p>Before you touch any tool, you need a precise ICP definition. Not "VP of Marketing at mid-market SaaS" — that's a job title, not an ICP. A real ICP includes the signals that indicate a company is actively ready to buy: recent funding, headcount growth above 20%, a specific tech stack, a recent leadership hire, or an expansion into a new market.</p>
            <p className="mt-4">We build our ICP definition around three layers: firmographic fit (company size, industry, geography), technographic fit (what tools they use and what that tells us about their sophistication), and trigger events (the specific things that happened recently that make them a warm prospect right now).</p>
            <p className="mt-4">Once your ICP is tight, pull an initial list from Apollo.io using company-level filters. Aim for 500–1,000 companies before contact-level filtering. Quality here determines everything downstream.</p>
          </section>

          <section>
            <h2 className="font-bold text-[22px] text-white mb-3">Clay enrichment: where the personalization data comes from</h2>
            <p>Pull your Apollo list into Clay. Clay's power is in its enrichment waterfall — it can pull data from 50+ sources simultaneously and write it into structured columns you can use in prompts.</p>
            <p className="mt-4">The enrichment data we always pull:</p>
            <ul className="list-disc pl-6 space-y-2 mt-3">
              <li>Recent LinkedIn posts from the prospect (last 30 days)</li>
              <li>Company news from the last 90 days (funding, hires, launches)</li>
              <li>Tech stack from BuiltWith or Clearbit</li>
              <li>Job postings (what roles they're hiring for signals growth priorities)</li>
              <li>LinkedIn profile headline and summary</li>
            </ul>
            <p className="mt-4">This data feeds your AI first-line generator. The more specific the data, the more specific the personalization.</p>
          </section>

          <section>
            <h2 className="font-bold text-[22px] text-white mb-3">Generating AI first lines at scale</h2>
            <p>The first line of a cold email determines whether the rest gets read. We use Clay's AI column with a carefully engineered prompt to generate a unique, specific first line for every contact.</p>
            <p className="mt-4">Our prompt structure:</p>
            <blockquote className="border-l-4 border-[#29ABE2] pl-5 italic text-[#72767a] text-[14px] leading-[1.7] my-4">
              "Write a one-sentence cold email opener for [name] at [company]. Reference one specific, recent, and verifiable thing about them or their company from this data: [recent post / company news / job posting]. The opener should feel genuine and specific, not flattering. Don't mention their name again after 'Hi [name]'. Max 25 words."
            </blockquote>
            <p>The key constraint: specificity. AI that generates generic openers ("I love the work you're doing at [Company]!") is worse than no personalization at all. Your prompt must force the model to reference something real.</p>
          </section>

          <section>
            <h2 className="font-bold text-[22px] text-white mb-3">Email sequence structure</h2>
            <p>We run a 5-step sequence over 14 days. The structure:</p>
            <ul className="list-disc pl-6 space-y-2 mt-3">
              <li><strong className="text-white">Day 1:</strong> Problem-first opener + AI first line + one-line value prop + soft CTA ("Worth 15 minutes?")</li>
              <li><strong className="text-white">Day 3:</strong> Social proof email — one specific result from a similar company + same CTA</li>
              <li><strong className="text-white">Day 6:</strong> Different angle email — attack a different pain point, shorter, more direct</li>
              <li><strong className="text-white">Day 10:</strong> Breakup email — "I'll stop reaching out, but before I do..." — often generates the highest reply rate of any step</li>
              <li><strong className="text-white">Day 14:</strong> Re-engagement trigger — a new piece of content or a question relevant to something in their data</li>
            </ul>
          </section>

          <section>
            <h2 className="font-bold text-[22px] text-white mb-3">Technical deliverability setup</h2>
            <p>Great copy means nothing if your emails go to spam. Deliverability setup that we never skip:</p>
            <ul className="list-disc pl-6 space-y-2 mt-3">
              <li>Separate sending domains (never use your primary domain)</li>
              <li>SPF, DKIM, and DMARC records configured correctly</li>
              <li>Domain warm-up over 4–6 weeks (we use Instantly's warm-up tool)</li>
              <li>Sending limits: no more than 30–40 emails/day per mailbox until warm-up is complete</li>
              <li>Google Workspace mailboxes — better deliverability than Outlook for cold outreach</li>
            </ul>
          </section>

          <section>
            <h2 className="font-bold text-[22px] text-white mb-3">What "3 weeks to first meeting" actually looks like</h2>
            <p>Week 1: ICP definition, list building, Clay enrichment, AI first-line generation, copy writing, and deliverability setup. Week 2: Technical setup complete, sequences launched to the first 200 contacts with warmup complete. Week 3: First replies coming in, positive replies booked directly to calendar via Calendly link in email.</p>
            <p className="mt-4">The benchmarks we target: 40%+ open rate, 3–8% reply rate, 1–3% meeting booking rate. If you're below these, the problem is usually the ICP definition (targeting wrong people) or the sequence timing (sending too fast, feeling spammy).</p>
          </section>
        </div>

        <div className="mt-14 p-8 bg-[#17181c] border border-[#242628] rounded-[24px] text-center">
          <h3 className="font-bold text-[20px] mb-2">Want us to build this for you?</h3>
          <p className="text-[14px] text-[#72767a] mb-6">Book a 20-minute fit call. We'll show you exactly how many meetings we can book for your business.</p>
          <Link href="/contact" className="inline-flex items-center gap-2 bg-[#29ABE2] hover:bg-[#1a9fd4] text-black font-bold px-7 py-3.5 rounded-full text-[15px] transition-colors">
            Book a fit call →
          </Link>
        </div>
      </div>
    </div>
  );
}
