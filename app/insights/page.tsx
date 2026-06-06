import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Insights — AI, HubSpot & B2B Growth Playbooks | Moximize",
  description: "Playbooks, guides, and deep dives on AI, HubSpot, and B2B revenue operations. No email gate — everything is free to read.",
  alternates: { canonical: "https://moximize.net/insights" },
};

const articles = [
  {
    slug: "lead-scoring-with-ai-hubspot",
    category: "HubSpot AI",
    title: "How to Build an AI Lead Scoring System in HubSpot That Actually Works",
    excerpt: "Most HubSpot lead scoring setups are manual, outdated within weeks, and ignored by sales. Here's how to build one that runs on AI and gets smarter over time.",
    readTime: "8 min read",
    date: "Jan 14, 2026",
  },
  {
    slug: "ai-personalized-outbound-playbook",
    category: "B2B Outbound",
    title: "The AI-Personalized Outbound Playbook: From List to Booked Meeting in 3 Weeks",
    excerpt: "A step-by-step walkthrough of how we use Clay, Apollo, and AI to build outbound campaigns that book meetings at 3–5x the rate of generic email blasts.",
    readTime: "11 min read",
    date: "Jan 7, 2026",
  },
  {
    slug: "revops-2026-where-ai-moves-the-needle",
    category: "RevOps",
    title: "RevOps in 2026: Where AI Actually Moves the Needle (And Where It Doesn't)",
    excerpt: "The honest picture of what AI can and can't do for your revenue operations right now — based on what we've seen across 30+ B2B implementations.",
    readTime: "9 min read",
    date: "Dec 28, 2025",
  },
  {
    slug: "hubspot-ai-vs-custom-claude-openai",
    category: "HubSpot AI",
    title: "HubSpot AI vs. Custom Claude/OpenAI Integrations: What to Use When",
    excerpt: "HubSpot Breeze AI is genuinely useful. But sometimes you need a custom Claude or OpenAI integration. Here's the decision framework we use with every client.",
    readTime: "7 min read",
    date: "Dec 19, 2025",
  },
  {
    slug: "why-ai-marketing-tools-fail",
    category: "Strategy",
    title: "Why AI Marketing Tools Fail B2B Teams (And What to Do Instead)",
    excerpt: "The failure mode isn't the AI. It's the system underneath it. Here's why most B2B teams can't get value from AI tools and the infrastructure that fixes it.",
    readTime: "6 min read",
    date: "Dec 10, 2025",
  },
];

export default function InsightsPage() {
  return (
    <div className="min-h-screen bg-[#000000] text-[#e7e9ea]">
      <div className="max-w-[860px] mx-auto px-6 py-20">
        <Link href="/" className="text-[#29ABE2] text-[14px] font-semibold hover:underline mb-12 block">
          ← Back to Moximize
        </Link>

        <span className="inline-block text-[11px] font-bold uppercase tracking-[0.12em] bg-[#29ABE2]/10 border border-[#29ABE2]/30 text-[#29ABE2] px-3 py-1 rounded-full mb-6">
          Insights
        </span>

        <h1 className="font-bold text-[clamp(32px,5vw,52px)] tracking-tight leading-[1.1] mb-4">
          Practical guides.<br />No email gate.
        </h1>
        <p className="text-[18px] text-[#72767a] leading-[1.7] mb-14">
          Everything we know about HubSpot AI, B2B outbound, lead scoring, and revenue operations — free, useful, and direct.
        </p>

        <div className="space-y-4">
          {articles.map((a) => (
            <Link
              key={a.slug}
              href={`/insights/${a.slug}`}
              className="group flex flex-col gap-3 bg-[#17181c] border border-[#242628] hover:border-[#29ABE2]/40 hover:shadow-[0_16px_40px_rgba(41,171,226,0.08)] rounded-[20px] p-7 transition-all duration-200 block"
            >
              <span className="text-[11px] font-bold uppercase tracking-[0.1em] text-[#29ABE2]">{a.category}</span>
              <h2 className="font-bold text-[18px] text-white leading-[1.3] group-hover:text-[#29ABE2] transition-colors">{a.title}</h2>
              <p className="text-[14px] text-[#72767a] leading-[1.6]">{a.excerpt}</p>
              <div className="flex items-center gap-4 text-[12px] text-[#4a4c50] pt-2 border-t border-[#242628]">
                <span>{a.readTime}</span>
                <span>{a.date}</span>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-14 p-8 bg-[#17181c] border border-[#242628] rounded-[24px] text-center">
          <h3 className="font-bold text-[20px] mb-2">Want these applied to your business?</h3>
          <p className="text-[14px] text-[#72767a] mb-6">Book a fit call and we'll show you how to implement this in your HubSpot.</p>
          <Link href="/contact" className="inline-flex items-center gap-2 bg-[#29ABE2] hover:bg-[#1a9fd4] text-black font-bold px-7 py-3.5 rounded-full text-[15px] transition-colors">
            Book a fit call →
          </Link>
        </div>
      </div>
    </div>
  );
}
