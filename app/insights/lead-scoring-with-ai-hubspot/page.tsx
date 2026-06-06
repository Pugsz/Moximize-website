import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "How to Build an AI Lead Scoring System in HubSpot That Actually Works — Moximize",
  description: "Most HubSpot lead scoring setups are manual, outdated within weeks, and ignored by sales. Here's how to build one that runs on AI and gets smarter over time.",
  alternates: { canonical: "https://moximize.net/insights/lead-scoring-with-ai-hubspot" },
};

export default function Article() {
  return (
    <div className="min-h-screen bg-[#000000] text-[#e7e9ea]">
      <div className="max-w-[800px] mx-auto px-6 py-20">
        <Link href="/insights" className="text-[#29ABE2] text-[14px] font-semibold hover:underline mb-12 block">
          ← All insights
        </Link>

        <span className="inline-block text-[11px] font-bold uppercase tracking-[0.12em] bg-[#29ABE2]/10 border border-[#29ABE2]/30 text-[#29ABE2] px-3 py-1 rounded-full mb-6">
          HubSpot AI
        </span>

        <h1 className="font-bold text-[clamp(28px,4vw,44px)] tracking-tight leading-[1.1] mb-5">
          How to Build an AI Lead Scoring System in HubSpot That Actually Works
        </h1>

        <div className="flex items-center gap-4 text-[13px] text-[#72767a] mb-12 pb-6 border-b border-[#242628]">
          <span>8 min read</span>
          <span>January 14, 2026</span>
        </div>

        <div className="space-y-8 text-[15px] leading-[1.8] text-[#d9d9d9]">
          <p className="text-[17px] text-[#d9d9d9] leading-[1.7]">
            Most HubSpot lead scoring setups are manual, outdated within weeks, and ignored by sales. Here's how to build one that runs on AI and gets smarter over time.
          </p>

          <section>
            <h2 className="font-bold text-[22px] text-white mb-3">Why manual lead scoring fails</h2>
            <p>Traditional lead scoring in HubSpot works like this: a marketer assigns points to properties (opened email = +5, visited pricing page = +10, job title is VP = +15) and a score accumulates. When it crosses a threshold, the lead gets routed to sales.</p>
            <p className="mt-4">The problem is that the model is static. It's based on historical assumptions that may no longer be true, doesn't account for negative signals, and requires manual recalibration every quarter. In practice, most teams build it once and never touch it again. Sales stops trusting the score. Marketing stops updating it. The whole thing becomes noise.</p>
          </section>

          <section>
            <h2 className="font-bold text-[22px] text-white mb-3">What AI lead scoring actually does differently</h2>
            <p>HubSpot Breeze AI approaches scoring differently. Instead of static point assignments, it trains a predictive model on your historical contact data — specifically, which contacts became customers and which didn't. It identifies the real patterns: the combination of properties, behaviors, and firmographic signals that actually predicted conversion in your specific pipeline.</p>
            <p className="mt-4">This matters because the signals that predict conversion vary by industry, deal size, and go-to-market motion. A scoring model built on your data will always outperform a generic one built on assumptions.</p>
          </section>

          <section>
            <h2 className="font-bold text-[22px] text-white mb-3">Prerequisites before you build</h2>
            <p>AI lead scoring requires a minimum viable dataset. Before you configure anything, check that your HubSpot portal has:</p>
            <ul className="list-disc pl-6 space-y-2 mt-3">
              <li>At least 200 closed-won deals with associated contacts</li>
              <li>Consistent lifecycle stage data (MQL, SQL, Opportunity, Customer)</li>
              <li>Clean contact properties — especially company size, industry, and job title</li>
              <li>At least 6 months of behavioral data (email engagement, page views, form submissions)</li>
            </ul>
            <p className="mt-4">If your data doesn't meet this bar, the AI model will train on noise and produce unreliable scores. Fix your data foundation first.</p>
          </section>

          <section>
            <h2 className="font-bold text-[22px] text-white mb-3">Setting up Breeze AI lead scoring</h2>
            <p>In HubSpot, navigate to CRM → Contacts → Lead Scoring. Switch to the AI-powered scoring tab. HubSpot will prompt you to select the outcome you want to predict — in most cases, this is contacts who became customers.</p>
            <p className="mt-4">The model trains on the previous 12–18 months of data. Once trained, every contact receives a score from 1–100. The model retrains automatically as new data comes in, so scores stay current without manual intervention.</p>
            <p className="mt-4">The critical configuration step: define what "high-intent" means for your sales team. This is typically a score above 70–80, filtered by lifecycle stage. Set up a workflow that routes contacts above that threshold to a sales rep within the hour.</p>
          </section>

          <section>
            <h2 className="font-bold text-[22px] text-white mb-3">Augmenting Breeze AI with custom signals</h2>
            <p>Breeze AI is powerful but it only knows what's in your HubSpot portal. You can augment it with signals from external tools:</p>
            <ul className="list-disc pl-6 space-y-2 mt-3">
              <li><strong className="text-white">Clay enrichment:</strong> Push firmographic data (headcount growth, funding rounds, tech stack) back into HubSpot as contact/company properties. The AI model can then incorporate these signals.</li>
              <li><strong className="text-white">G2 intent data:</strong> Contacts researching your category on G2 are warm leads. Sync these signals into HubSpot as a contact property and weight them heavily in your workflow routing.</li>
              <li><strong className="text-white">LinkedIn Sales Navigator:</strong> Job change alerts often indicate buying intent. Use a workflow to flag contacts who recently changed roles into leadership positions.</li>
            </ul>
          </section>

          <section>
            <h2 className="font-bold text-[22px] text-white mb-3">Making sales actually use the score</h2>
            <p>The biggest failure mode isn't technical — it's adoption. Sales reps won't use a score they don't trust or understand.</p>
            <p className="mt-4">Three things that drive adoption: first, show reps why the score is what it is. Build a view in HubSpot that surfaces the 3–5 signals that drove the score for each contact. Second, prove it correlates with outcomes — pull a quarterly analysis showing close rates by score band. Third, build the score directly into your rep's workflow. If the daily task queue only surfaces contacts with scores above 65, reps use it by default.</p>
          </section>

          <section>
            <h2 className="font-bold text-[22px] text-white mb-3">What to measure</h2>
            <p>The metrics that tell you whether your AI scoring is working:</p>
            <ul className="list-disc pl-6 space-y-2 mt-3">
              <li>Close rate by score band (high score contacts should close at 2–3x the rate of low score)</li>
              <li>Time-to-contact for high-score leads (under 1 hour is the target)</li>
              <li>Sales-to-marketing feedback loop (are reps rejecting MQLs? The model may need retraining)</li>
              <li>Score distribution over time (if the average score is rising, your ICP targeting is getting sharper)</li>
            </ul>
          </section>
        </div>

        <div className="mt-14 p-8 bg-[#17181c] border border-[#242628] rounded-[24px] text-center">
          <h3 className="font-bold text-[20px] mb-2">Want to implement this in your HubSpot?</h3>
          <p className="text-[14px] text-[#72767a] mb-6">Book a 20-minute fit call and we'll walk through exactly how this applies to your setup.</p>
          <Link href="/contact" className="inline-flex items-center gap-2 bg-[#29ABE2] hover:bg-[#1a9fd4] text-black font-bold px-7 py-3.5 rounded-full text-[15px] transition-colors">
            Book a 20-min fit call →
          </Link>
        </div>
      </div>
    </div>
  );
}
