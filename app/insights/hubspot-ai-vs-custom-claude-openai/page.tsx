import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "HubSpot AI vs. Custom Claude/OpenAI Integrations: What to Use When — Moximize",
  description: "HubSpot Breeze AI is genuinely useful. But sometimes you need a custom Claude or OpenAI integration. Here's the decision framework we use with every client.",
  alternates: { canonical: "https://moximize.net/insights/hubspot-ai-vs-custom-claude-openai" },
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
          HubSpot AI vs. Custom Claude/OpenAI Integrations: What to Use When
        </h1>

        <div className="flex items-center gap-4 text-[13px] text-[#72767a] mb-12 pb-6 border-b border-[#242628]">
          <span>7 min read</span>
          <span>December 19, 2025</span>
        </div>

        <div className="space-y-8 text-[15px] leading-[1.8] text-[#d9d9d9]">
          <p className="text-[17px] text-[#d9d9d9] leading-[1.7]">
            HubSpot Breeze AI is genuinely useful for many RevOps tasks. But there are situations where a custom Claude or OpenAI integration — connected to HubSpot via API — delivers dramatically better results. Here's the decision framework we use.
          </p>

          <section>
            <h2 className="font-bold text-[22px] text-white mb-3">When HubSpot Breeze AI is the right choice</h2>
            <p>HubSpot's native AI features are tightly integrated with your portal data, require no engineering work, and are updated by HubSpot automatically. Use them for:</p>
            <ul className="list-disc pl-6 space-y-2 mt-3">
              <li><strong className="text-white">Lead scoring:</strong> Breeze AI trains on your deal history and produces reliable scores without any model hosting or API work.</li>
              <li><strong className="text-white">Email subject line suggestions:</strong> The built-in tool is adequate for A/B test suggestions in marketing email campaigns.</li>
              <li><strong className="text-white">Workflow assistant:</strong> Drafting automation logic from natural language descriptions. Great for prototyping, though you'll want a human to review the output.</li>
              <li><strong className="text-white">Summary generation:</strong> Meeting summaries, contact summaries, and deal summaries in the CRM. These work well because they have direct access to your HubSpot data.</li>
              <li><strong className="text-white">Conversation intelligence:</strong> Call transcription and basic sentiment analysis inside the Sales Hub.</li>
            </ul>
            <p className="mt-4">The common thread: tasks that are well-defined, use data already in HubSpot, and don't require highly customized or long-form outputs.</p>
          </section>

          <section>
            <h2 className="font-bold text-[22px] text-white mb-3">When custom Claude or OpenAI is the right choice</h2>
            <p>The native Breeze AI features have meaningful limitations: you can't control the underlying model, can't inject custom context or instructions, and can't chain AI outputs into complex workflows outside of HubSpot's native tooling. Use a custom integration for:</p>

            <h3 className="font-bold text-[18px] text-white mt-6 mb-2">Highly personalized outreach at scale</h3>
            <p>If you want to generate email first lines using external data (LinkedIn posts, company news from Clay enrichment, job postings), you need to build a custom pipeline. HubSpot's AI doesn't have access to this external data. The typical pattern: pull enriched data from Clay → run it through a Claude prompt via API → push the generated first line back to a HubSpot contact property → use it in an email sequence.</p>

            <h3 className="font-bold text-[18px] text-white mt-6 mb-2">Complex content generation</h3>
            <p>Proposal drafts, case study summaries, competitive analysis snippets — any long-form generation task where you need to control the tone, structure, and length precisely. Claude's instruction-following is significantly better than Breeze AI for complex content tasks.</p>

            <h3 className="font-bold text-[18px] text-white mt-6 mb-2">Multi-step reasoning over deal data</h3>
            <p>If you want AI to analyze a deal record — look at the contact history, email engagement, meeting notes, and pipeline stage — and generate a specific next-step recommendation, you need a custom integration. This requires pulling structured data from HubSpot via API, feeding it to a model with a carefully designed prompt, and writing the output back to the deal record.</p>

            <h3 className="font-bold text-[18px] text-white mt-6 mb-2">Custom classification and routing logic</h3>
            <p>Categorizing inbound form submissions, routing support tickets to the right team based on content, or tagging contact notes with structured labels — all better handled by a fine-tuned or carefully prompted custom model than by Breeze AI's general-purpose features.</p>
          </section>

          <section>
            <h2 className="font-bold text-[22px] text-white mb-3">The decision framework</h2>
            <p>We use three questions to decide which approach to take:</p>
            <ul className="list-disc pl-6 space-y-2 mt-3">
              <li><strong className="text-white">Does it require external data?</strong> If yes → custom integration. Breeze AI only knows what's in your HubSpot portal.</li>
              <li><strong className="text-white">Does it require precise output control?</strong> If yes → custom integration. You can't engineer prompts in Breeze AI the same way.</li>
              <li><strong className="text-white">Does it require ongoing maintenance?</strong> If yes → default to native features. Custom integrations require engineering time to maintain; native features update automatically.</li>
            </ul>
            <p className="mt-4">In practice, most of our clients use both: Breeze AI for in-portal tasks that work well natively, and a custom Claude integration (usually via Zapier or a lightweight API wrapper) for personalization and content generation that requires external data.</p>
          </section>

          <section>
            <h2 className="font-bold text-[22px] text-white mb-3">Cost considerations</h2>
            <p>HubSpot AI features are included in your portal plan — no additional per-use cost. Custom Claude or OpenAI integrations incur API costs that scale with usage. For most B2B teams generating hundreds (not millions) of outputs per month, the API costs are negligible — typically $20–$200/month. But worth factoring into the build decision.</p>
          </section>
        </div>

        <div className="mt-14 p-8 bg-[#17181c] border border-[#242628] rounded-[24px] text-center">
          <h3 className="font-bold text-[20px] mb-2">Not sure which approach is right for you?</h3>
          <p className="text-[14px] text-[#72767a] mb-6">Book a 20-minute call. We'll assess your current HubSpot setup and tell you exactly what we'd build.</p>
          <Link href="/contact" className="inline-flex items-center gap-2 bg-[#29ABE2] hover:bg-[#1a9fd4] text-black font-bold px-7 py-3.5 rounded-full text-[15px] transition-colors">
            Book a fit call →
          </Link>
        </div>
      </div>
    </div>
  );
}
